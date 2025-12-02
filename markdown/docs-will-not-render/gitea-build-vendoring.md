To build Gitea from source with vendored backend dependencies, follow these steps:

## Build Gitea with Vendored Dependencies

```bash
# 1. Clone Gitea repository
git clone https://github.com/go-gitea/gitea.git
cd gitea

# 2. Checkout the version you want (optional - skip for latest)
git checkout v1.22.0  # or whatever version you want

# 3. Download and vendor all Go dependencies
go mod download
go mod vendor

# 4. Build using the vendor directory
TAGS="bindata sqlite sqlite_unlock_notify" make build EXTRA_GOFLAGS="-mod=vendor"

# Or for a simpler build without tags:
make build EXTRA_GOFLAGS="-mod=vendor"
```

## What This Does

- `go mod vendor` - Downloads all dependencies to `./vendor/` directory
- `-mod=vendor` - Tells Go to use vendored dependencies instead of downloading
- The vendor directory contains all backend Go dependencies
- Frontend dependencies are handled separately by npm/webpack

---

## Full Build with All Features

```bash
# 1. Install prerequisites
sudo apt install -y git make nodejs npm

# 2. Clone and prepare
git clone https://github.com/go-gitea/gitea.git
cd gitea

# 3. Vendor backend dependencies
go mod download
go mod vendor

# 4. Build frontend (if needed)
make frontend

# 5. Build backend with vendor
TAGS="bindata sqlite sqlite_unlock_notify" make backend EXTRA_GOFLAGS="-mod=vendor"

# Or build everything at once
TAGS="bindata sqlite sqlite_unlock_notify" make build EXTRA_GOFLAGS="-mod=vendor"
```

---

## Build Tags Explained

Common tags for Gitea:
- `bindata` - Embed static files in binary
- `sqlite` - Include SQLite support
- `sqlite_unlock_notify` - Better SQLite concurrency
- `pam` - PAM authentication support

---

## Verify Vendoring Worked

```bash
# Check that vendor directory exists and has content
ls -la vendor/

# The build should NOT download anything from the internet
# You can test by disconnecting network and rebuilding
```

---

## For Offline/Airgapped Environments

If you're building for an offline environment:

```bash
# On a machine WITH internet:
git clone https://github.com/go-gitea/gitea.git
cd gitea
go mod download
go mod vendor

# Package the whole directory
tar -czf gitea-vendored.tar.gz gitea/

# Transfer to offline machine, then:
tar -xzf gitea-vendored.tar.gz
cd gitea
TAGS="bindata sqlite sqlite_unlock_notify" make build EXTRA_GOFLAGS="-mod=vendor"
```

---

## Quick Reference

**Basic vendored build:**
```bash
go mod vendor
make build EXTRA_GOFLAGS="-mod=vendor"
```

**Full-featured vendored build:**
```bash
go mod vendor
TAGS="bindata sqlite sqlite_unlock_notify" make build EXTRA_GOFLAGS="-mod=vendor"
```

The binary will be in `./gitea` after the build completes.

## message about pnpm approve-builds

Yes, that's **perfectly fine**! This is just pnpm's security feature.

## What's Happening

**The warning means:**
- Some packages want to run installation scripts
- pnpm blocked them for security (good!)
- These specific packages are **not needed** for Gitea to build

**The packages being ignored:**
- `@scarf/scarf` - Telemetry/analytics (not needed)
- `core-js` - Polyfills (handled elsewhere)
- `esbuild` - Build tool (already approved)
- `unrs-resolver` - Utility (not critical)

**"No packages awaiting approval" means:**
- All **necessary** build scripts are already approved
- The ignored ones are optional/unnecessary
- You can safely continue building

## Just Continue Building

```bash
# Continue with the build - it will work fine
make frontend
make backend EXTRA_GOFLAGS="-mod=vendor"

# Or build everything
make build EXTRA_GOFLAGS="-mod=vendor"
```

---

## If You Want to Silence the Warning

You can explicitly approve (though not necessary):

```bash
# Create/edit .npmrc in the gitea directory
echo "enable-pre-post-scripts=true" >> .npmrc

# Or suppress the warning
pnpm config set enable-pre-post-scripts false
```

But honestly, **ignore it and just keep building**. Those scripts aren't needed for Gitea.

---

## Summary

✅ **You're good to go!** The warning is informational, not an error. Just continue with:

```bash
make build EXTRA_GOFLAGS="-mod=vendor"
```

The build will complete successfully without those optional scripts.

## Transfer/build from linux to windows

**Yes, but with caveats.** The vendored Go backend will build on Windows, but you need to handle some platform-specific issues.

## Building Vendored Gitea on Windows

### Option 1: Using WSL2 (Recommended - Easiest)

```bash
# In WSL2 Ubuntu
cd gitea
make build EXTRA_GOFLAGS="-mod=vendor"
```

This is the easiest because you use the same Linux build process.

---

### Option 2: Native Windows Build

**Prerequisites:**
```powershell
# Install Go (already have 1.25+)
# Install Git for Windows
# Install Node.js and npm
# Install Make for Windows (via chocolatey or scoop)

choco install make
# or
scoop install make
```

**Build Process:**
```powershell
# In PowerShell or CMD
cd gitea

# Vendor backend (works the same)
go mod vendor

# Build - Windows requires different approach
$env:TAGS="bindata sqlite sqlite_unlock_notify"
go build -mod=vendor -tags "$env:TAGS" -o gitea.exe

# Or if make works on your Windows:
make build EXTRA_GOFLAGS="-mod=vendor"
```

---

### Option 3: Cross-Compile from Linux for Windows

**Build Windows binary from Linux (easiest for distribution):**

```bash
# On your Linux/WSL machine
cd gitea
go mod vendor

# Cross-compile for Windows
GOOS=windows GOARCH=amd64 go build -mod=vendor \
  -tags "bindata sqlite sqlite_unlock_notify" \
  -o gitea.exe

# This creates gitea.exe for Windows
```

---

## Platform-Specific Considerations

### Issues You'll Face on Windows:

**1. SQLite CGO Requirement:**
- SQLite needs CGO (C compiler)
- Windows needs MinGW-w64 or TDM-GCC
- **Solution:** Build without SQLite or use PostgreSQL/MySQL

```powershell
# Build without SQLite (no CGO needed)
go build -mod=vendor -tags "bindata" -o gitea.exe
```

**2. Make/Makefile Issues:**
- Windows doesn't have `make` by default
- Gitea's Makefile has Linux-specific commands
- **Solution:** Use Go directly or install Make

**3. File Paths:**
- Backslashes vs forward slashes
- **Solution:** Vendor handles this automatically

---

## Recommended Approach

**For Windows deployment, I recommend:**

### Cross-compile from Linux:

```bash
# On Linux/WSL2 with vendored dependencies
cd gitea

# For Windows without SQLite (simplest)
GOOS=windows GOARCH=amd64 \
  go build -mod=vendor \
  -tags "bindata" \
  -o gitea-windows.exe

# For Windows WITH SQLite (requires CGO setup)
GOOS=windows GOARCH=amd64 CGO_ENABLED=1 CC=x86_64-w64-mingw32-gcc \
  go build -mod=vendor \
  -tags "bindata sqlite sqlite_unlock_notify" \
  -o gitea-windows.exe
```

**Install MinGW for cross-compilation:**
```bash
sudo apt install -y gcc-mingw-w64-x86-64
```

---

## Simple Test

**Test if vendored build works on Windows:**

```bash
# 1. On Linux, vendor everything
go mod vendor
tar -czf gitea-vendored.tar.gz gitea/

# 2. Transfer to Windows

# 3. On Windows (in PowerShell):
tar -xzf gitea-vendored.tar.gz
cd gitea
go build -mod=vendor -tags "bindata" -o gitea.exe

# If you get CGO errors, use cross-compilation from Linux instead
```

---

## Summary

**Can you build vendored Gitea on Windows?**

| Method | Difficulty | Recommendation |
|--------|-----------|----------------|
| WSL2 | Easy | ✅ Best for development |
| Native Windows | Hard | ⚠️ CGO issues with SQLite |
| Cross-compile from Linux | Easy | ✅ Best for deployment |

**My recommendation:**
1. **Vendor on Linux:** `go mod vendor`
2. **Cross-compile for Windows:** `GOOS=windows GOARCH=amd64 go build -mod=vendor -tags "bindata" -o gitea.exe`
3. **Use PostgreSQL or MySQL** instead of SQLite for production

This avoids CGO/SQLite headaches on Windows entirely.

