# Working with Git on ClassServerResources

This document outlines the standard process for making changes to the ClassServerResources using Git. We use a branching model to manage changes effectively and safely.

**Important Note:** Don’t be afraid to ask for help! If you’re unsure about a step, please reach out to the team.

## Branch Types:\*\*

- **`main`:** This is our stable, production-ready live branch. Only code that’s been thoroughly tested and approved will reside here. Only Dr.Lopez, Rocky Connor and John Brooks have permission to merge onto this branch.
- **`development`:** This is where the _majority_ of our development work happens. It’s a staging environment for new features and improvements. Any one with proper permissions may merge onto this branch.
- **feature:** This is where most of your development will happen. When you finish a feature and verify it is bug free you will merge it onto the development branch.
- **Bug Branches:** These are temporary branches used to isolate and fix specific issues. They should be short-lived.
- **Patch Branches:** These are temporary branches used to isolate and fix emergent issues. They should be short-lived and only created by Dr. Lopez, Rocky Connor or John Brooks.

## General Workflow

Before making _any_ changes, it's good practice to:

- **Understand the Change:** Clearly define what you’re trying to achieve.
- **Create a Branch:** Always work on a separate branch for your changes.
- **Commit Frequently:** Make small, logical commits with descriptive messages.
- **Test Thoroughly:** Ensure your changes don't break existing functionality.

## How to make changes to the development branch

1. Open a git bash and navigate to the classResource file
1. Switch to the `Development` branch
   `git checkout development`
1. Create a new branch for the feature you are working on
   `git checkout -b development/feature-[NAME]` e.g. `git checkout -b development/feature-syllabus
1. Verify error free changes by:
   - Visiting the class server and checking that your content changes properly display with out errors
     - This means that any page you touched/changed you need to verify that it is still up and working on your class server
   - Visit several other pages and verify they are still working as intended
     - Don't have to check "Every" page on the server but should check for several pages in different sections.
1. After verifying no issues above update the `development` branch
   - switch to the development branch
     `git checkout development`
   - pull from server to make sure development is updated with current repo
     `git pull origin development`
   - Merge the two branches
     `git merge development/feature-[NAME]`
     **Resolve any merge conflicts that may exist**
1. After merge is complete
   - Push the changes up to the origin
     `git push origin development`
1. Delete the feature branch from your local rep
   `git branch -d development/feature-[NAME]`
1. Delete the feature branch from the origin
   `git push origin --delete development/feature-[NAME]`

## How to merge the Development branch

1. Ensure any development/ branches are merged into development
1. Verify no issues with development branch
1. After verifying no issues update `main` and merge
   - switch to the main branch
     `git checkout main`
   - pull from origin to make sure your main is updated
     `git pull origin main`
   - Merge the two branches
     `git merge development`
     **Resolve any merge conflicts that may exist**
1. After merge is complete
   - Push the changes up to the origin
     `git push origin main`
1. Delete the development branch
   `git branch -d development`
   `git push origin --delete development`
1. Immediately create a new development branch
   `git checkout -b development`

## How to create a bug-fix branch

1. Open a git bash and navigate to the classResource file
1. Checkout the Development branch
   `git checkout development`
1. Create a bug branch and switch to it
   `git checkout -b development/bug-fix-[ID]`
   **Putting development in the branch name helps remember which branch this branch was made from.**
   **ID Should be same as in bug report, if no bug report is made make one!**
1. Make the changes you want with commits etc
1. Verify bug is fixed
1. After verifying no issues with other parts of repository
   - switch to the development branch
     `git checkout development`
   - pull from server to make sure development is updated with current repo
     `git pull origin development`
   - Merge the two branches
     `git merge development/bug-fix-[ID]`
     **Resolve any merge conflicts that may exist**
1. After merge is complete
   - Push the changes up to the origin
     `git push origin development`
1. Delete the bug branch
   `git branch -d development/bug-fix-[ID]`
   `git push origin --delete development/bug-fix-[ID]`

## How to create a patch branch

**IMPORTANT:** This is a _emergency_ situation. A patch addresses a critical issue in the live production environment that requires immediate attention. Patches should be short-lived. The goal is to quickly resolve the issue, test, and revert the branch as soon as the fix is confirmed.

1. Open a git bash and navigate to the classResource file
1. Switch to the main branch of not on it
   - `git checkout main`
1. Create a patch branch
   `git checkout -b main/patch-[ID]`
   **Putting main in the branch name helps remember which branch this branch was made from.**
   **ID Should be same as in bug report, if no bug report is made make one!**
1. Make the changes you want with commits etc
1. Verify patch is patched
1. After verifying no issues with other parts of repository
   - switch to the main branch
     `git checkout main`
   - pull from server to make sure main is updated with current repo
     `git pull origin main`
   - Merge the two branches
     `git merge main/patch-[ID]`
     **Resolve any merge conflicts that may exist**
1. After merge is complete
   - Push the changes up to the origin
     `git push origin main`
1. Delete the patch branch
   `git branch -d main/patch-[ID]`
   `git push origin --delete main/patch-[ID]`
