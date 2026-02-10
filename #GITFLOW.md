# Working with Git on ClassServerResources

This document outlines the standard process for making changes to the ClassServerResources using Git. We use a branching model to manage changes effectively and safely.

**Important Note:** Don’t be afraid to ask for help! If you’re unsure about a step, please reach out to the team.

## Branch Types:

- **`main`:** This is our stable, production-ready live branch. Only code that’s been thoroughly tested and approved will reside here. Only Dr.Lopez, Rocky Connor and John Brooks have permission to merge onto this branch.
- **`development`:** This is where the _majority_ of our development work happens. It’s a staging environment for new features and improvements. Any one with proper permissions may merge onto this branch.
- **feature:** This is where most of your development will happen. When you finish a feature and verify it is bug free you will merge it onto the development branch.
- **Bug Branches:** These are temporary branches used to isolate and fix specific issues. They should be short-lived.
- **hotfix Branches:** These are temporary branches used to isolate and fix emergent issues. They should be short-lived and only created by Dr. Lopez, Rocky Connor or John Brooks.

## General Workflow

Before making _any_ changes, it's good practice to:

- **Understand the Change:** Clearly define what you’re trying to achieve.
- **Create a Branch:** Always work on a separate branch for your changes.
- **Commit Frequently:** Make small, logical commits with descriptive messages.
- **Test Thoroughly:** Ensure your changes don't break existing functionality.

## How to make changes to the development branch

1. Open a git bash and navigate to the classResource file
1. Switch to the `development` branch
   ```sh
   git checkout development
   ```
1. Create a new branch for the feature you are working on
   ```sh
   git checkout -b development/feature-[NAME]
   # e.g. git checkout -b development/feature-syllabus
   ```
1. Verify error free changes by:
   - Visiting the class server and checking that your content changes properly display with out errors
     - This means that any page you touched/changed you need to verify that it is still up and working on your class server
   - Visit several other pages and verify they are still working as intended
     - Don't have to check "Every" page on the server but should check for several pages in different sections.
1. After verifying no issues above update the `development` branch
   - switch to the development branch
     ```sh
     git checkout development
     ```
   - pull from server to make sure development is updated with current repo
     ```sh
     git pull origin development
     ```
   - Merge the two branches
     ```sh
     git merge development/feature-[NAME]
     ```
     **Resolve any merge conflicts that may exist**
1. After merge is complete
   - Push the changes up to the origin
     ```sh
     git push origin development
     ```
1. Delete the feature branch from your local rep
   ```
   git branch -d development/feature-[NAME]
   ```
1. Delete the feature branch from the origin
   ```sh
   git push origin --delete development/feature-[NAME]
   ```

## How to merge the Development branch

1. Ensure any development/ branches are merged into development
1. Verify no issues with development branch
1. After verifying no issues update `main` and merge
   - switch to the main branch
     ```sh
     git checkout main
     ```
   - pull from origin to make sure your main is updated
     ```sh
     git pull origin main
     ```
   - Merge the two branches
     ```sh
     git merge development
     ```
     **Resolve any merge conflicts that may exist**
1. After merge is complete
   - Push the changes up to the origin
     ```sh
     git push origin main
     ```
1. Delete the development branch
   ```sh
   git branch -d development
   ```
1. Delete the development branch from the origin
   ```sh
   git push origin --delete development
   ```
1. Create a new development branch immediately
   ```sh
   git checkout -b development
   ```
1. Push new branch to origin
   ```sh
   git push origin development
   ```

## How to create a bug-fix branch

1. Open a git bash and navigate to the classResource file
1. Checkout the Development branch
   ```sh
   git checkout development
   ```
1. Create a bug branch and switch to it
   ```sh
   git checkout -b development/bug-fix-[ID]
   ```
   **Putting development in the branch name helps remember which branch this branch was made from.**
   **ID Should be same as in bug report, if no bug report is made make one!**
1. Make the changes you want with commits etc
1. Verify bug is fixed
1. After verifying no issues with other parts of repository
   - switch to the development branch
     ```sh
     git checkout development
     ```
   - pull from server to make sure development is updated with current repo
     ```sh
     git pull origin development
     ```
   - Merge the two branches
     ```sh
     git merge bugfix/issue-[ID]
     ```
     **Resolve any merge conflicts that may exist**
1. After merge is complete
   - Push the changes up to the origin
     ```sh
     git push origin development
     ```
1. Delete the bug branch
   ```sh
   git branch -d bugfix/issue-[ID]
   ```

## How to create a hotfix branch

**IMPORTANT:** This is a _emergency_ situation. A hotfix addresses a critical issue in the live production environment that requires immediate attention. Hotfix branches should be short-lived. The goal is to quickly resolve the issue, test, and merge the branch as soon as the fix is confirmed.

1. Open a git bash and navigate to the classResource file
1. Switch to the main branch of not on it
   ```sh
   git checkout main
   ```
1. Create a hotfix branch
   ```sh
   git checkout -b hotfix/issue-[ID]
   ```
   **ID Should be same as in bug report, if no bug report is made make one!**
1. Make the changes you want with commits etc
1. Verify issue is resolved
1. After verifying no issues with other parts of repository
   switch to the main branch
   ```sh
   git checkout main
   ```
   pull from server to make sure main is updated with current repo
   ```sh
   git pull origin main
   ```
   Merge the two branches
   ```sh
   git merge hotfix/issue-[ID]
   ```
   **Resolve any merge conflicts that may exist**
1. After merge is complete
   Push the changes up to the origin
   ```sh
   git push origin main
   ```
1. Delete the patch branch
   ```sh
   git branch -d hotfix/issue-[ID]
   ```

## Git Flow

**Highly recommended**

Git Flow is a nifty feature built into Git that helps streamline your workflow saving time and allows for consistency across developers. If you plan on developing any of the projects in the CIS dev codebase, you should set up and use this feature.

**Step 1:** Initialize your repository to use Git Flow.

```sh
git flow init

```

**Step 2:** Configure your branch prefixes. These should be the same across developers to ensure consistency.

```sh
Which branch should be used for bringing forth production releases?
   - main
Branch name for production releases: [main] # Keep the prod branch main
Branch name for "next release" development: [develop] development # Specify development for next release
```

And finally accept all other default options.

```sh
How to name your supporting branch prefixes?
Feature branches? [feature/]
Bugfix branches? [bugfix/]
Release branches? [release/]
Hotfix branches? [hotfix/]
Support branches? [support/]
Version tag prefix? []
Hooks and filters directory? [C:/[path/to/repo]/.git /hooks]
```

Now that Git Flow is initialized and ready to use, you can start using it to aide in your work flow.

Let's say we want to begin developing a new feature. We can use Git Flow in the following way:

```sh
git flow feature start [branch-name]
# Do not worry about the branch prefix, that's taken care of by git
```

The console should print the following:

```sh
Switched to a new branch 'feature/cool-new-feature'

Summary of actions:
- A new branch 'feature/cool-new-feature' was created, based on 'development'
- You are now on branch 'feature/cool-new-feature'

Now, start committing on your feature. When done, use:

     git flow feature finish cool-new-feature
```

Git Flow has created our branch based on our development branch and checked it out for us. Now we can hack and commit away. After we're done with our feature and we're ready to add it to our development branch, we run:

```sh
git flow feature finish cool-new-feature # With or without branch name

Switched to branch 'development'
Updating e37b355..192ad6c
Fast-forward
 server.py | 3 ++-
 1 file changed, 2 insertions(+), 1 deletion(-)
Deleted branch feature/cool-new-feature (was 192ad6c).

Summary of actions:
- The feature branch 'feature/cool-new-feature' was merged into 'development'
- Feature branch 'feature/cool-new-feature' has been locally deleted
- You are now on branch 'development'
```

Notice what happened here? Git Flow switched to our development branch, merged the feature, and then deleted the feature branch we no longer needed. All without us doing anything else.

This is the same for all the other support branches. Just replace `feature` with the support branch you are working with, i.e.: `bugfix`.

Not all support branches will branch off of development, however. Hotfix will branch off of and merge into main as the intention is to fix a pressing bug that cannot wait for the next release to be patched.
