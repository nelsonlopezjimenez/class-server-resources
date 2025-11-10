Here are several ways to selectively bring files from one branch to another:

## **Method 1: Checkout Specific Files from Another Branch** (Recommended)

```bash
# You're on main branch
git checkout main

# Bring specific files from the other branch
git checkout other-branch -- path/to/file1.txt
git checkout other-branch -- path/to/file2.txt
git checkout other-branch -- folder/subfolder/file3.txt

# Now commit these files
git add .
git commit -m "Add selected files from other-branch"
```

## **Method 2: Cherry-pick Specific Files Using Reset**

```bash
# Create a temporary state
git checkout main
git merge other-branch --no-commit --no-ff

# Unstage everything
git reset HEAD

# Now selectively add only what you want
git add path/to/file1.txt
git add path/to/file2.txt

# Commit
git commit -m "Selectively merged files from other-branch"

# Clean up unwanted files
git checkout -- .
```

## **Method 3: Interactive Patch Selection**

```bash
# On main branch
git checkout main

# Show what files exist in other branch
git diff --name-only main other-branch

# Checkout files interactively (choose hunks)
git checkout -p other-branch -- path/to/file.txt

# Or for the whole file
git checkout other-branch -- path/to/file.txt

# Commit
git commit -m "Add specific files from other-branch"
```

## **Method 4: Using git show (for single files)**

```bash
# On main branch
git checkout main

# Copy file content from other branch
git show other-branch:path/to/file.txt > path/to/file.txt

# Add and commit
git add path/to/file.txt
git commit -m "Add file from other-branch"
```

## **Practical Example**

Let's say you have:
- **Branch**: `feature-branch` with files: `fileA.txt`, `fileB.txt`, `fileC.txt`
- **Goal**: Bring only `fileB.txt` to `main`

```bash
# Switch to main
git checkout main

# Bring only fileB.txt from feature-branch
git checkout feature-branch -- fileB.txt

# Check status (you'll see fileB.txt staged)
git status

# Commit
git commit -m "Add fileB.txt from feature-branch"

# Push
git push origin main
```

## **If You Want Multiple Files in a Folder**

```bash
# Bring entire folder from other branch
git checkout other-branch -- src/components/

# Or use wildcards
git checkout other-branch -- "*.md"
git checkout other-branch -- "docs/*.pdf"
```

## **Verification**

```bash
# See what files differ between branches
git diff --name-only main other-branch

# See what files are in the other branch
git ls-tree -r other-branch --name-only

# Compare specific file content
git diff main other-branch -- path/to/file.txt
```

**Key Points:**
- `git checkout <branch> -- <file>` brings the file from that branch without merging
- Files brought this way are automatically staged
- This doesn't affect the source branch
- You can bring files even if they don't exist in your current branch
- Use `git diff --name-only` to see all available files first

Which method works best depends on whether you know the exact file paths or need to explore what's available first!