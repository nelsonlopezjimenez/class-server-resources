Yes, download the package and its dependencies online, then transfer to the offline machine.

## Option 1: Download Make Package for Offline Install

**On a machine WITH internet (same Ubuntu version):**

```bash
# Create a directory for packages
mkdir make-offline
cd make-offline

# Download make and ALL dependencies
apt-get download make
apt-get download $(apt-cache depends --recurse --no-recommends --no-suggests --no-conflicts --no-breaks --no-replaces --no-enhances make | grep "^\w" | sort -u)

# This creates several .deb files
ls -lh
```

**Transfer to offline machine:**
```bash
# Package everything
tar -czf make-packages.tar.gz *.deb

# Transfer make-packages.tar.gz to offline machine
# Then on offline machine:
tar -xzf make-packages.tar.gz
sudo dpkg -i *.deb
```

---

## Option 2: Check If Make Is Already Installed

**On the offline machine, check first:**

```bash
which make
# or
make --version
```

If it shows a version, **you already have it!**

---

## Option 3: Build Gitea WITHOUT Make (Recommended)

**You don't actually need `make` to build Gitea!** The Makefile is just a wrapper around Go commands.

**On your offline machine with vendored Gitea:**

```bash
cd gitea

# Build frontend (if you have node/npm)
cd web_src
npm install
npm run build
cd ..

# Build backend directly with Go
go build -mod=vendor \
  -tags "bindata sqlite sqlite_unlock_notify" \
  -ldflags "-s -w" \
  -o gitea

# Or without tags (simpler)
go build -mod=vendor -o gitea
```

This bypasses `make` entirely and builds directly with Go.

---

## Option 4: Prepare Complete Offline Build Environment

**On machine WITH internet:**

```bash
# 1. Clone and vendor Gitea
git clone https://github.com/go-gitea/gitea.git
cd gitea
go mod vendor

# 2. Build frontend (if needed)
cd web_src
npm install
npm run build
cd ..

# 3. Build backend
go build -mod=vendor -tags "bindata sqlite sqlite_unlock_notify" -o gitea

# 4. Package everything for offline machine
cd ..
tar -czf gitea-complete.tar.gz gitea/

# Transfer gitea-complete.tar.gz to offline machine
# On offline machine, just extract and run:
tar -xzf gitea-complete.tar.gz
cd gitea
./gitea web  # Already built!
```

---

## What I Recommend

**Best approach for your situation:**

1. **Check if make exists:**
   ```bash
   make --version
   ```

2. **If no make, build directly with Go:**
   ```bash
   cd gitea
   go build -mod=vendor -tags "bindata sqlite sqlite_unlock_notify" -o gitea
   ```

3. **If you really need make:**
   - Download on online machine: `apt-get download make build-essential`
   - Transfer .deb files
   - Install: `sudo dpkg -i *.deb`

**The Go build command is simpler and doesn't require make at all.**

---

## Quick Reference

**Build Gitea without Make:**
```bash
# Simple build
go build -mod=vendor -o gitea

# Full-featured build
go build -mod=vendor \
  -tags "bindata sqlite sqlite_unlock_notify" \
  -ldflags "-s -w" \
  -o gitea

# Then run
./gitea web
```

No `make` needed! 🎉