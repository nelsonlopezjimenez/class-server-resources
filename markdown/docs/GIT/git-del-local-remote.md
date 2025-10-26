Here's how to delete both local and remote Git branches:

## Delete Local Branch

```bash
# Delete local branch (safe - won't delete if unmerged)
git branch -d branch-name

# Force delete local branch (even if unmerged)
git branch -D branch-name
```

## Delete Remote Branch

```bash
# Delete remote branch
git push origin --delete branch-name

# Alternative syntax (older)
git push origin :branch-name
```

## Delete Both in One Command

```bash
# Delete local branch
git branch -d branch-name

# Delete remote branch
git push origin --delete branch-name
```

Or as a one-liner:
```bash
git branch -d branch-name && git push origin --delete branch-name
```

## Common Scenarios

### 1. Delete Already Merged Feature Branch
```bash
git checkout main
git branch -d feature-branch
git push origin --delete feature-branch
```

### 2. Force Delete Unmerged Branch
```bash
git branch -D bugfix-branch
git push origin --delete bugfix-branch
```

### 3. Clean Up After Remote Branch Deleted by Others
If someone else deleted the remote branch, clean up your local references:
```bash
# Remove stale remote-tracking branches
git fetch --prune

# Or specifically
git remote prune origin
```

## Verify Deletion

```bash
# List local branches
git branch

# List remote branches
git branch -r

# List all branches (local + remote)
git branch -a
```

## Quick Reference

| Action | Command |
|--------|---------|
| Delete local branch | `git branch -d branch-name` |
| Force delete local | `git branch -D branch-name` |
| Delete remote branch | `git push origin --delete branch-name` |
| Clean stale remotes | `git fetch --prune` |

## Notes

- ⚠️ You can't delete the branch you're currently on - switch to another branch first (`git checkout main`)
- `-d` is safe (prevents deletion if not merged)
- `-D` is force (deletes even if not merged - be careful!)
- Remote deletion requires push permissions

Need help with a specific branch deletion scenario?