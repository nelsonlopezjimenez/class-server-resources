I'll show you practical Git LFS examples for different scenarios.

## **Scenario 1: Converting an Already Committed File to LFS**

If you already committed a large file (e.g., `model.bin`) without LFS:

```bash
# 1. Install and initialize Git LFS
git lfs install

# 2. Track the file type with LFS
git lfs track "*.bin"

# 3. Add the .gitattributes file
git add .gitattributes

# 4. Remove the file from Git's cache (but keep it locally)
git rm --cached model.bin

# 5. Re-add the file (now it will be tracked by LFS)
git add model.bin

# 6. Commit the change
git commit -m "Convert model.bin to Git LFS"

# 7. To clean up history and reduce repo size, use BFG or git filter-repo
# This rewrites history - coordinate with your team!
git lfs migrate import --include="*.bin" --everything

# 8. Force push (if you rewrote history)
git push --force
```

## **Scenario 2: Tracking a New File with LFS (Not Yet Committed)**

For a new large file you haven't committed:

```bash
# 1. Initialize Git LFS (if not already done)
git lfs install

# 2. Track the file pattern
git lfs track "*.psd"
git lfs track "videos/*.mp4"

# 3. Add .gitattributes
git add .gitattributes

# 4. Add your large file
git add design.psd

# 5. Commit normally
git commit -m "Add design file with LFS"

# 6. Push
git push origin main
```

## **Scenario 3: Deleting a Large File Not Yet Tracked by LFS**

If you committed a large file by mistake and want to remove it:

```bash
# If not yet pushed:
git rm large-file.zip
git commit -m "Remove large file"

# If already pushed, remove from history:
# Using git filter-repo (recommended)
git filter-repo --path large-file.zip --invert-paths

# Or using BFG Repo Cleaner
bfg --delete-files large-file.zip

# Then force push
git push --force
```

## **Verification Commands**

Check if files are tracked by LFS:

```bash
# List LFS tracked files
git lfs ls-files

# Check LFS tracking patterns
cat .gitattributes

# See LFS status
git lfs status

# Verify a specific file is using LFS
git lfs ls-files | grep filename
```

## **Common .gitattributes Examples**

```
# Track all video files
*.mp4 filter=lfs diff=lfs merge=lfs -text
*.mov filter=lfs diff=lfs merge=lfs -text

# Track all archives
*.zip filter=lfs diff=lfs merge=lfs -text
*.tar.gz filter=lfs diff=lfs merge=lfs -text

# Track specific folder
data/models/** filter=lfs diff=lfs merge=lfs -text

# Track by size (requires Git LFS 2.0+)
*.bin filter=lfs diff=lfs merge=lfs -text
```

**Key Points:**
- Always add `.gitattributes` to version control
- Use `git lfs migrate` for existing repositories to clean up history
- Coordinate force pushes with your team
- LFS pointers are small text files (~100 bytes) that replace the actual large files in Git