macOS Git does **not** include Git LFS by default. You need to install it separately.

**Check if you have Git LFS:**
```bash
git lfs version
```

If you get `command not found`, you need to install it.

**Install Git LFS on macOS:**

**Option 1: Using Homebrew (recommended):**
```bash
brew install git-lfs
git lfs install
```

**Option 2: Using the installer:**
1. Download from https://git-lfs.github.com/
2. Run the installer
3. Then run: `git lfs install`

**Option 3: Using MacPorts:**
```bash
sudo port install git-lfs
git lfs install
```

**After installation, verify:**
```bash
git lfs version
# Should show: git-lfs/3.x.x (GitHub; darwin arm64; go 1.x.x)
```

**To use Git LFS in your repository:**
```bash
# Track specific file types (e.g., large binary files)
git lfs track "*.wasm"
git lfs track "*.bin"
git lfs track "*.exe"

# Or track entire directories
git lfs track "build/client/**"

# Commit the .gitattributes file
git add .gitattributes
git commit -m "Configure Git LFS"
```

**Check what's being tracked by LFS:**
```bash
git lfs ls-files
```

Do you need to set up Git LFS for your project? If so, what types of files are you trying to track?

Good question! Here's what happens when you clone a Git LFS repo without having Git LFS installed:

## What Happens

**You'll get pointer files instead of the actual large files.**

Instead of the real file content, you'll see small text files that look like this:

```
version https://git-lfs.github.com/spec/v1
oid sha256:4d7a214614ab2935c943f9e0ff69d22eadbb8f32b1258daaa5e2ca24d17e2393
size 12345678
```

## Specific Issues

1. **Files won't work**: Binary files (images, videos, executables, WASM files) will be broken/unusable
2. **Build failures**: If your build depends on LFS files (like your frontend build with WASM), it will fail
3. **File sizes**: The pointer files are tiny (~130 bytes), so you won't get the actual large files

## Git Operations Still Work

- ✅ Clone succeeds
- ✅ Pull/push work
- ✅ Commits work
- ✅ Branches work
- ❌ But the LFS files themselves are unusable

## You'll See Warnings Like:

```bash
git clone https://github.com/user/repo.git
# Works fine, but...

cat some-large-file.wasm
# Shows pointer file content instead of binary data
```

## How to Fix After Cloning

If you already cloned without LFS:

```bash
# Install Git LFS
brew install git-lfs
git lfs install

# Pull the actual LFS files
git lfs pull

# Or fetch specific files
git lfs fetch
git lfs checkout
```

## Prevention

**For your Go project**, if the `cis` directory contains LFS files, you should:

1. **Document it in README:**
```markdown
## Prerequisites
- Git LFS must be installed before cloning
```

2. **Add a check in your build script:**
```bash
#!/bin/bash
if ! command -v git-lfs &> /dev/null; then
    echo "Error: Git LFS is not installed"
    echo "Install it with: brew install git-lfs"
    exit 1
fi
```

3. **Or include LFS files in releases** instead of relying on LFS during development

**Bottom line:** The repo will clone successfully, but any LFS-tracked files will be broken until you install Git LFS and run `git lfs pull`. For your class server project, this would likely break the frontend build output if those files are tracked with LFS.

