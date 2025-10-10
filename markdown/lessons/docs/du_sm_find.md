Right! On OS X 10.8.5, `sort -rh` doesn't work because the `-h` (human-readable) option isn't available.

## **Fixed Commands for OS X 10.8.5**

Use `-rn` (reverse numeric) instead:

### **Check What's Using Space**

```bash
# Top-level folders (in KB, sorted)
sudo du -sk /* 2>/dev/null | sort -rn | head -20 | awk '{printf "%.2f GB\t%s\n", $1/1024/1024, $2}'

# Your user folder
sudo du -sk /Users/lopefield/* 2>/dev/null | sort -rn | head -20 | awk '{printf "%.2f GB\t%s\n", $1/1024/1024, $2}'

# Library folders
sudo du -sk /Library/* 2>/dev/null | sort -rn | head -10 | awk '{printf "%.2f GB\t%s\n", $1/1024/1024, $2}'

# Your Library
sudo du -sk ~/Library/* 2>/dev/null | sort -rn | head -10 | awk '{printf "%.2f GB\t%s\n", $1/1024/1024, $2}'

# System folders
sudo du -sk /private/var/* 2>/dev/null | sort -rn | head -10 | awk '{printf "%.2f GB\t%s\n", $1/1024/1024, $2}'
```

### **Or Simpler - Use -m for MB:**

```bash
# Show in MB
sudo du -sm /* 2>/dev/null | sort -rn | head -20

# Your user folder in MB
sudo du -sm /Users/lopefield/* 2>/dev/null | sort -rn | head -20

# Library in MB
sudo du -sm /Library/* 2>/dev/null | sort -rn | head -10
sudo du -sm ~/Library/* 2>/dev/null | sort -rn | head -10
```

---

## **Updated Cleanup Script for Mountain Lion**

```bash
#!/bin/bash
echo "=== Deep Cleaning Internal Drive (Mountain Lion) ==="
echo ""
echo "Current space:"
df -h / | grep disk0
echo ""

read -p "Continue with cleanup? (yes/no): " confirm
if [ "$confirm" != "yes" ]; then
  echo "Cancelled"
  exit 1
fi

echo ""
echo "Analyzing space usage first..."
echo ""
echo "Top space users in /Users/lopefield:"
sudo du -sm /Users/lopefield/* 2>/dev/null | sort -rn | head -10
echo ""

echo "Step 1: Clearing caches..."
sudo rm -rf /Library/Caches/*
sudo rm -rf ~/Library/Caches/*
sudo rm -rf /System/Library/Caches/*

echo "Step 2: Clearing logs..."
sudo rm -rf /private/var/log/*.log*
sudo rm -rf /Library/Logs/*
sudo rm -rf ~/Library/Logs/*

echo "Step 3: Clearing temp files..."
sudo rm -rf /private/tmp/*
sudo rm -rf /private/var/tmp/*

echo "Step 4: Emptying trash..."
rm -rf ~/.Trash/*

echo "Step 5: Clearing browser caches..."
rm -rf ~/Library/Caches/com.apple.Safari/*
rm -rf ~/Library/Caches/Google/Chrome/* 2>/dev/null
rm -rf ~/Library/Caches/Firefox/* 2>/dev/null

echo "Step 6: Removing old updates..."
sudo rm -rf ~/Library/Updates/*
sudo rm -rf /Library/Updates/*

echo "Step 7: Removing sleep image..."
sudo pmset -a hibernatemode 0
sudo rm -f /private/var/vm/sleepimage

echo "Step 8: Clearing swap files..."
sudo rm -f /private/var/vm/swapfile*

echo "Step 9: Checking iOS backups..."
if [ -d ~/Library/Application\ Support/MobileSync/Backup/ ]; then
  backup_size=$(du -sm ~/Library/Application\ Support/MobileSync/Backup/ 2>/dev/null | cut -f1)
  echo "iOS backups found: ${backup_size}MB"
  read -p "Delete iOS backups? (yes/no): " delete_backup
  if [ "$delete_backup" = "yes" ]; then
    rm -rf ~/Library/Application\ Support/MobileSync/Backup/*
    echo "iOS backups deleted"
  fi
fi

echo ""
echo "=== Cleanup Complete ==="
echo ""
echo "New disk space:"
df -h / | grep disk0
echo ""
```

---

## **Find Large Files (Mountain Lion Compatible)**

```bash
# Find files larger than 500MB
sudo find / -type f -size +500000k -exec ls -lh {} \; 2>/dev/null | awk '{print $5, $9}'

# Find files larger than 1GB
sudo find / -type f -size +1000000k -exec ls -lh {} \; 2>/dev/null | awk '{print $5, $9}'

# In your home folder only
find ~ -type f -size +500000k -exec ls -lh {} \; 2>/dev/null | awk '{print $5, $9}'
```

---

## **Quick Manual Checks**

```bash
# Check specific folders (in MB)
echo "Library:"
du -sm ~/Library/* 2>/dev/null | sort -rn | head -10

echo ""
echo "Application Support:"
du -sm ~/Library/Application\ Support/* 2>/dev/null | sort -rn | head -10

echo ""
echo "Caches:"
du -sm ~/Library/Caches/* 2>/dev/null | sort -rn | head -10

echo ""
echo "System Library:"
sudo du -sm /Library/* 2>/dev/null | sort -rn | head -10
```

---

## **What to Run First**

**Step 1: Check what's using space**
```bash
sudo du -sm /Users/lopefield/* 2>/dev/null | sort -rn | head -20
```

**Step 2: Share the output with me**, and I'll tell you exactly what to delete.

**Step 3: Run the cleanup script** for automatic cleaning of safe items.

---

**Please run this and share the output:**
```bash
echo "=== Space Analysis ==="
echo ""
echo "Current disk usage:"
df -h / | grep disk0
echo ""
echo "Top 20 folders in your home:"
sudo du -sm /Users/lopefield/* 2>/dev/null | sort -rn | head -20
echo ""
echo "Top 10 in Library:"
sudo du -sm ~/Library/* 2>/dev/null | sort -rn | head -10
```

Then I can give you specific recommendations on what else to delete! 📊
