#!/usr/bin/env node
/**
 * Duplicate File Finder and Remover
 * Compatible with Node.js v6+ (no async/await)
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Configuration
const CONFIG = {
  folder1: '/Users/lopefield/Pictures',
  folder2: '/Volumes/MacintoshHD2/lopefield_data/Pictures',
  outputFile: 'duplicates_report.json',
  removeScript: 'remove_duplicates.sh'
};

/**
 * Calculate MD5 hash of a file
 */
function calculateHash(filePath, callback) {
  const hash = crypto.createHash('md5');
  const stream = fs.createReadStream(filePath);
  
  stream.on('data', function(data) {
    hash.update(data);
  });
  
  stream.on('end', function() {
    callback(null, hash.digest('hex'));
  });
  
  stream.on('error', function(err) {
    callback(err);
  });
}

/**
 * Get file metadata
 */
function getFileMetadata(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return {
      size: stats.size,
      created: stats.birthtime,
      modified: stats.mtime,
      accessed: stats.atime
    };
  } catch (err) {
    return null;
  }
}

/**
 * Recursively get all files in a directory
 */
function getAllFiles(dirPath, arrayOfFiles) {
  arrayOfFiles = arrayOfFiles || [];
  
  try {
    const files = fs.readdirSync(dirPath);
    
    files.forEach(function(file) {
      const filePath = path.join(dirPath, file);
      
      try {
        if (fs.statSync(filePath).isDirectory()) {
          arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
        } else {
          arrayOfFiles.push(filePath);
        }
      } catch (err) {
        console.error('Error accessing ' + filePath + ': ' + err.message);
      }
    });
    
    return arrayOfFiles;
  } catch (err) {
    console.error('Error reading directory ' + dirPath + ': ' + err.message);
    return arrayOfFiles;
  }
}

/**
 * Build file index with metadata
 */
function buildFileIndex(folderPath, label, callback) {
  console.log('\n📂 Scanning ' + label + ': ' + folderPath);
  
  const files = getAllFiles(folderPath);
  console.log('   Found ' + files.length + ' files');
  
  const index = {
    byName: {},
    byHash: {},
    bySizeAndDate: {}
  };
  
  let processed = 0;
  let hashQueue = [];
  
  // First pass: index by name and size/date
  files.forEach(function(filePath) {
    const fileName = path.basename(filePath);
    const metadata = getFileMetadata(filePath);
    
    if (!metadata) return;
    
    const fileInfo = { path: filePath, metadata: metadata };
    
    // Index by name
    if (!index.byName[fileName]) {
      index.byName[fileName] = [];
    }
    index.byName[fileName].push(fileInfo);
    
    // Index by size and date
    const sizeKey = metadata.size + '_' + metadata.modified.getTime();
    if (!index.bySizeAndDate[sizeKey]) {
      index.bySizeAndDate[sizeKey] = [];
    }
    index.bySizeAndDate[sizeKey].push(fileInfo);
    
    // Queue for hashing (only files < 100MB)
    if (metadata.size > 0 && metadata.size < 100 * 1024 * 1024) {
      hashQueue.push({ path: filePath, metadata: metadata, fileName: fileName });
    }
  });
  
  console.log('   Processing hashes for ' + hashQueue.length + ' files...');
  
  // Second pass: calculate hashes
  function processNextHash() {
    if (hashQueue.length === 0) {
      console.log('   ✓ Indexed ' + files.length + ' files');
      callback(null, index);
      return;
    }
    
    const fileInfo = hashQueue.shift();
    processed++;
    
    if (processed % 50 === 0) {
      console.log('   Hashing: ' + processed + '/' + (processed + hashQueue.length));
    }
    
    calculateHash(fileInfo.path, function(err, hash) {
      if (!err) {
        if (!index.byHash[hash]) {
          index.byHash[hash] = [];
        }
        index.byHash[hash].push({
          path: fileInfo.path,
          metadata: fileInfo.metadata,
          fileName: fileInfo.fileName
        });
      }
      
      // Process next file
      setImmediate(processNextHash);
    });
  }
  
  // Start processing hashes
  processNextHash();
}

/**
 * Compare two indexes and find duplicates
 */
function findDuplicates(index1, index2) {
  const duplicates = {
    exactNameMatch: [],
    hashMatch: [],
    sizeDateMatch: []
  };
  
  console.log('\n🔍 Finding duplicates...');
  
  // 1. Exact name matches
  console.log('   Checking name matches...');
  Object.keys(index1.byName).forEach(function(name) {
    if (index2.byName[name]) {
      const files1 = index1.byName[name];
      const files2 = index2.byName[name];
      
      files1.forEach(function(f1) {
        files2.forEach(function(f2) {
          duplicates.exactNameMatch.push({
            file1: f1.path,
            file2: f2.path,
            name: name,
            size1: f1.metadata.size,
            size2: f2.metadata.size,
            modified1: f1.metadata.modified,
            modified2: f2.metadata.modified
          });
        });
      });
    }
  });
  
  // 2. Hash matches
  console.log('   Checking hash matches...');
  Object.keys(index1.byHash).forEach(function(hash) {
    if (index2.byHash[hash]) {
      const files1 = index1.byHash[hash];
      const files2 = index2.byHash[hash];
      
      files1.forEach(function(f1) {
        files2.forEach(function(f2) {
          duplicates.hashMatch.push({
            file1: f1.path,
            file2: f2.path,
            hash: hash,
            name1: f1.fileName,
            name2: f2.fileName,
            size: f1.metadata.size
          });
        });
      });
    }
  });
  
  // 3. Size and date matches
  console.log('   Checking size/date matches...');
  Object.keys(index1.bySizeAndDate).forEach(function(key) {
    if (index2.bySizeAndDate[key]) {
      const files1 = index1.bySizeAndDate[key];
      const files2 = index2.bySizeAndDate[key];
      
      files1.forEach(function(f1) {
        files2.forEach(function(f2) {
          const name1 = path.basename(f1.path);
          const name2 = path.basename(f2.path);
          
          // Skip if already found
          const alreadyFound = duplicates.exactNameMatch.some(function(d) {
            return d.file1 === f1.path && d.file2 === f2.path;
          }) || duplicates.hashMatch.some(function(d) {
            return d.file1 === f1.path && d.file2 === f2.path;
          });
          
          if (!alreadyFound) {
            duplicates.sizeDateMatch.push({
              file1: f1.path,
              file2: f2.path,
              name1: name1,
              name2: name2,
              size: f1.metadata.size,
              modified: f1.metadata.modified
            });
          }
        });
      });
    }
  });
  
  console.log('\n📊 Results:');
  console.log('   Exact name matches: ' + duplicates.exactNameMatch.length);
  console.log('   Hash matches (identical content): ' + duplicates.hashMatch.length);
  console.log('   Size/date matches: ' + duplicates.sizeDateMatch.length);
  
  return duplicates;
}

/**
 * Generate removal script
 */
function generateRemovalScript(duplicates, scriptPath) {
  console.log('\n📝 Generating removal script: ' + scriptPath);
  
  let script = '#!/bin/bash\n';
  script += '# Duplicate File Removal Script\n';
  script += '# Generated: ' + new Date().toISOString() + '\n';
  script += '# WARNING: Review this script before running!\n\n';
  script += 'set -e\n\n';
  
  script += '# Exact name matches (likely same files)\n';
  duplicates.exactNameMatch.forEach(function(dup, idx) {
    script += '# Match ' + (idx + 1) + ': ' + path.basename(dup.name) + '\n';
    script += '# File 1: ' + dup.file1 + ' (' + dup.size1 + ' bytes)\n';
    script += '# File 2: ' + dup.file2 + ' (' + dup.size2 + ' bytes)\n';
    
    if (dup.size1 === dup.size2) {
      script += 'rm "' + dup.file1 + '"\n';
    } else {
      script += '# Size mismatch - review manually\n';
      script += '# rm "' + dup.file1 + '"\n';
    }
    script += '\n';
  });
  
  script += '\n# Hash matches (identical content)\n';
  duplicates.hashMatch.forEach(function(dup, idx) {
    script += '# Match ' + (idx + 1) + ': ' + dup.name1 + ' == ' + dup.name2 + '\n';
    script += '# File 1: ' + dup.file1 + '\n';
    script += '# File 2: ' + dup.file2 + '\n';
    script += 'rm "' + dup.file1 + '"\n\n';
  });
  
  script += '\n# Size/date matches (review before uncommenting)\n';
  duplicates.sizeDateMatch.forEach(function(dup, idx) {
    script += '# Possible match ' + (idx + 1) + ':\n';
    script += '# File 1: ' + dup.file1 + '\n';
    script += '# File 2: ' + dup.file2 + '\n';
    script += '# rm "' + dup.file1 + '"\n\n';
  });
  
  script += 'echo "Duplicate removal complete!"\n';
  script += 'df -h /\n';
  
  fs.writeFileSync(scriptPath, script);
  fs.chmodSync(scriptPath, '755');
  
  console.log('   ✓ Script generated: ' + scriptPath);
}

/**
 * Main function
 */
function main() {
  console.log('╔════════════════════════════════════════════════╗');
  console.log('║     Duplicate File Finder & Remover           ║');
  console.log('╚════════════════════════════════════════════════╝');
  
  // Check folders
  if (!fs.existsSync(CONFIG.folder1)) {
    console.error('❌ Folder 1 not found: ' + CONFIG.folder1);
    process.exit(1);
  }
  
  if (!fs.existsSync(CONFIG.folder2)) {
    console.error('❌ Folder 2 not found: ' + CONFIG.folder2);
    process.exit(1);
  }
  
  // Build first index
  buildFileIndex(CONFIG.folder1, 'Folder 1 (Source)', function(err1, index1) {
    if (err1) {
      console.error('Error building index 1:', err1);
      process.exit(1);
    }
    
    // Build second index
    buildFileIndex(CONFIG.folder2, 'Folder 2 (Backup)', function(err2, index2) {
      if (err2) {
        console.error('Error building index 2:', err2);
        process.exit(1);
      }
      
      // Find duplicates
      const duplicates = findDuplicates(index1, index2);
      
      // Save report
      const report = {
        timestamp: new Date().toISOString(),
        folder1: CONFIG.folder1,
        folder2: CONFIG.folder2,
        duplicates: duplicates
      };
      
      fs.writeFileSync(CONFIG.outputFile, JSON.stringify(report, null, 2));
      console.log('\n💾 Report saved: ' + CONFIG.outputFile);
      
      // Generate removal script
      generateRemovalScript(duplicates, CONFIG.removeScript);
      
      console.log('\n✅ Done!');
      console.log('\nNext steps:');
      console.log('1. Review the report: cat ' + CONFIG.outputFile);
      console.log('2. Review the removal script: cat ' + CONFIG.removeScript);
      console.log('3. Run the script: ./' + CONFIG.removeScript);
    });
  });
}

// Parse arguments
if (process.argv.length > 2) {
  CONFIG.folder1 = process.argv[2];
}
if (process.argv.length > 3) {
  CONFIG.folder2 = process.argv[3];
}

// Run
main();