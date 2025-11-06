I'll help you stage and commit the submodule changes to a new branch in your main repo. Here's what you need to do:

## Steps to commit submodule changes to a new branch:

**1. First, create and checkout the new branch in the main repo:**
```bash
git checkout -b testsidenavbar
```

**2. Stage the submodule changes:**
```bash
git add go-class-server-frontend
```

When you update a submodule, Git tracks this as a change to the commit reference that the main repo points to. The `git add` command stages this updated reference.

**3. Commit the changes:**
```bash
git commit -m "Update go-class-server-frontend submodule to new branch"
```

**4. (Optional) Push the new branch to remote:**
```bash
git push -u origin testsidenavbar
```

## Verify your changes:

You can check the status with:
```bash
git status
```

Before committing, you should see something like:
```
modified:   go-class-server-frontend (new commits)
```

This indicates that the submodule is pointing to a different commit than before.

## Important note:

Make sure the changes in your submodule (`go-class-server-frontend`) are committed and pushed to its own repository before committing the reference change in the main repo. Otherwise, other developers won't be able to access the specific commit that your main repo is referencing.