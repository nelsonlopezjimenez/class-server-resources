## **Vendoring a Go Project - Brief Commands**

```bash
# 1. Navigate to project directory
cd your-cloned-repo

# 2. Download dependencies (if not already downloaded)
go mod download

# 3. Create vendor directory with all dependencies
go mod vendor

# 4. Verify it worked
ls vendor/  # Should see dependencies copied here

# 5. Build using vendor (optional - Go uses vendor automatically if present)
go build

# Or explicitly specify vendor mode
go build -mod=vendor
```

---

## **Quick Reference:**

**Create/update vendor:**
```bash
go mod vendor
```

**Build with vendor:**
```bash
go build              # Auto-uses vendor if present
go build -mod=vendor  # Force vendor usage
```

**Clean vendor:**
```bash
rm -rf vendor/
```

---

## **Common Workflow:**

```bash
git clone <repo>
cd <repo>
go mod vendor        # Creates vendor/ directory
go build            # Builds using vendored deps
```

**That's it!** The `go mod vendor` command copies all dependencies from the module cache into `vendor/` directory.