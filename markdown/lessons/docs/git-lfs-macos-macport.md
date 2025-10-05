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

Do you need to set up Git LFS for your project? If so, what types of files are you trying to track?gi