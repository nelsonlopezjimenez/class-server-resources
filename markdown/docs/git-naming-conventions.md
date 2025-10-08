```markdown
---
title: "Git Naming Conventions - Best Practices for Professional Development"
description: "Week 1 - Git naming conventions and best practices: branch naming strategies, commit message standards, tag conventions, repository naming, file naming, and collaborative workflow patterns. Assignments: create a practice repository with proper naming, write 10 conventional commits, develop a team naming guide"
week: 1
---

<h1 id="day1">Mastering Git Naming Conventions!</h1>

<h2 id="table-of-contents">📚 Table of Contents</h2>

- [Course Overview](#overview)
- [Why Naming Conventions Matter](#why)
- [Git Basics Review](#gitbasics)
- [Industry Standards](#standards)
- [Day 1](#day1)
- [Day 2](#day2)
- [Day 3](#day3)
- [Day 4](#day4)
- 🧪 [Assignments](#assignments)
- [Next Week Preview](#nextweek)

<br id="overview">

## Course Overview

This week focuses on one of the most underrated but critical skills in professional software development: **proper naming conventions in Git**. Good naming practices make your repository history readable, searchable, and maintainable. You'll learn industry-standard conventions for branches, commits, tags, and more, ensuring your Git workflow is professional and team-friendly.

**What You'll Learn:**
- Branch naming strategies for different workflows
- Writing clear, conventional commit messages
- Semantic versioning and tag naming
- Repository and file naming best practices
- Team collaboration patterns
- Common pitfalls and how to avoid them

<br id="why">

## Why Naming Conventions Matter

### The Cost of Poor Naming

Imagine these scenarios:

**Bad Branch Names:**
```
fix
test-branch
asdfgh
johns-stuff
new-branch-v2-final-really-final
```

**Good Branch Names:**
```
feature/user-authentication
bugfix/login-timeout-issue
hotfix/security-patch-csrf
release/v2.1.0
```

**The Difference:**
- **Searchability**: Find relevant work instantly
- **Context**: Understand what changed without opening files
- **Automation**: Tools can parse conventional names
- **Professionalism**: Shows attention to detail
- **Collaboration**: Team members understand your work
- **History**: Six months later, you'll thank yourself

### Real-World Impact

**Poor naming can lead to:**
- ❌ Confusion about what branches do
- ❌ Difficulty tracking down bugs
- ❌ Merge conflicts and lost work
- ❌ Failed automation scripts
- ❌ Wasted time in code reviews
- ❌ Unprofessional appearance to employers

**Good naming enables:**
- ✅ Instant understanding of repository history
- ✅ Automated changelog generation
- ✅ Easy rollback and debugging
- ✅ Smooth team collaboration
- ✅ Professional portfolio presentation
- ✅ Efficient CI/CD pipelines

<br id="gitbasics">

## Git Basics Review

Before diving into naming conventions, let's quickly review Git fundamentals:

### What is Git?

**Git** is a distributed version control system that tracks changes in your code. Think of it as a time machine for your project that lets you:
- Save snapshots of your work (commits)
- Work on different features simultaneously (branches)
- Collaborate with others without conflicts
- Undo mistakes and track changes
- Mark important releases (tags)

### Key Git Concepts

**Repository (Repo)**: The folder containing your project and its entire history

**Commit**: A snapshot of your project at a specific point in time

**Branch**: A separate line of development, like a parallel universe for your code

**Tag**: A marker for important points in history (usually releases)

**Remote**: A version of your repository hosted elsewhere (like GitHub)

### Basic Git Commands Review

```bash
# Initialize a new repository
git init

# Check status of your files
git status

# Add files to staging area
git add filename.txt
git add .  # Add all files

# Create a commit
git commit -m "Your commit message"

# Create a new branch
git branch branch-name

# Switch to a branch
git checkout branch-name

# Create and switch to branch (shortcut)
git checkout -b branch-name

# Merge a branch
git merge branch-name

# Create a tag
git tag v1.0.0

# Push to remote
git push origin branch-name

# View commit history
git log
```

<br id="standards">

## Industry Standards Overview

### Popular Conventions

**Conventional Commits**: Standard format for commit messages
- Used by: Google, Angular, Electron, many open-source projects
- Format: `type(scope): subject`

**Git Flow**: Branching model for release management
- Used by: Large teams with scheduled releases

**GitHub Flow**: Simplified branching for continuous deployment
- Used by: GitHub, many SaaS companies

**Semantic Versioning**: Version numbering scheme
- Used by: Nearly all software projects
- Format: MAJOR.MINOR.PATCH (e.g., 2.1.3)

---

## Daily Activities

<br id="day1">

### Day 1: Branch Naming Conventions

Branches are where you do your work. Good branch names communicate purpose instantly.

**The Golden Rules:**
1. Use lowercase letters
2. Use hyphens to separate words (kebab-case)
3. Include category prefix
4. Be descriptive but concise
5. No spaces or special characters
6. Avoid personal names (except for personal forks)

### Branch Naming Patterns

**Format:**
```
<category>/<description>
<category>/<issue-number>-<description>
<category>/<ticket-id>-<description>
```

**Common Categories:**

```bash
# FEATURE BRANCHES
# For new features or enhancements
feature/user-authentication
feature/payment-integration
feature/dark-mode-toggle
feature/advanced-search-filters

# Use with issue tracking:
feature/123-add-user-profile
feature/JIRA-456-implement-shopping-cart


# BUGFIX BRANCHES
# For fixing bugs in the current release
bugfix/login-validation-error
bugfix/broken-image-upload
bugfix/navbar-mobile-alignment
bugfix/memory-leak-data-processing

# With issue numbers:
bugfix/789-fix-login-timeout
bugfix/GH-234-resolve-crash-on-submit


# HOTFIX BRANCHES
# For urgent fixes in production
hotfix/security-vulnerability-xss
hotfix/critical-payment-failure
hotfix/data-corruption-user-table
hotfix/broken-checkout-process

# With version targeting:
hotfix/v2.1.1-security-patch


# RELEASE BRANCHES
# For preparing a new release
release/v1.0.0
release/v2.1.0
release/2024-q1


# DOCUMENTATION BRANCHES
# For documentation-only changes
docs/update-readme
docs/add-api-documentation
docs/fix-installation-guide


# REFACTOR BRANCHES
# For code improvements without changing functionality
refactor/database-queries
refactor/extract-user-service
refactor/simplify-validation-logic


# TEST BRANCHES
# For adding or updating tests
test/add-authentication-tests
test/improve-coverage-user-module
test/e2e-checkout-flow


# CHORE BRANCHES
# For maintenance tasks
chore/update-dependencies
chore/configure-ci-pipeline
chore/cleanup-unused-files


# EXPERIMENTAL BRANCHES
# For trying new approaches
experiment/new-ui-framework
experiment/alternative-algorithm
experiment/performance-optimization
```

### Branch Naming by Workflow

**Git Flow Model:**
```bash
# Main branches (permanent)
main          # Production-ready code
develop       # Integration branch

# Supporting branches (temporary)
feature/user-dashboard
release/v2.0.0
hotfix/urgent-security-fix
```

**GitHub Flow Model:**
```bash
# Simpler structure
main          # Always deployable
feature/add-comments-section
bugfix/fix-responsive-layout
docs/update-contributing-guide
```

**GitLab Flow Model:**
```bash
main                    # Latest development
production              # Current production
feature/new-feature
bugfix/fix-issue
```

### What NOT to Do

**Bad Branch Names:**
```bash
# TOO VAGUE
fix
update
test
changes
new-stuff

# PERSONAL/UNCLEAR
johns-branch
my-work
asdf
branch1
temp

# TOO LONG
feature/add-new-user-authentication-system-with-oauth-and-jwt-and-password-reset

# UPPERCASE OR SPACES
Feature/NewFeature
my branch name
Fix_Bug

# VERSION NUMBERS IN FEATURE
feature/v2-user-auth  # Use release/ for versions
```

**Good Branch Names:**
```bash
# CLEAR PURPOSE
feature/oauth-integration
bugfix/null-pointer-checkout
docs/api-endpoints

# APPROPRIATE LENGTH
feature/user-auth     # Not too long
hotfix/payment-bug    # Not too short

# CONSISTENT FORMAT
feature/add-comments
feature/add-likes
feature/add-shares
# All follow same pattern
```

### Branch Naming Examples by Project Type

**E-commerce Project:**
```bash
feature/shopping-cart
feature/product-reviews
bugfix/checkout-calculation
hotfix/payment-gateway-down
release/v3.2.0
```

**Social Media App:**
```bash
feature/post-scheduling
feature/story-viewer
bugfix/notification-delay
refactor/feed-algorithm
test/integration-messaging
```

**Corporate Website:**
```bash
feature/contact-form
docs/privacy-policy
bugfix/mobile-menu
chore/update-copyright-year
hotfix/broken-form-validation
```

### Practical Examples

**Creating Branches:**
```bash
# Create feature branch
git checkout -b feature/user-profile

# Create bugfix branch with issue number
git checkout -b bugfix/456-fix-login-error

# Create hotfix branch
git checkout -b hotfix/critical-data-loss

# Create release branch
git checkout -b release/v2.0.0
```

**Branch Naming Checklist:**
- [ ] Starts with category prefix?
- [ ] Uses lowercase?
- [ ] Uses hyphens (not underscores or spaces)?
- [ ] Describes the work clearly?
- [ ] Includes issue/ticket number if applicable?
- [ ] Not longer than 50 characters?
- [ ] Doesn't include personal names?

### Team Branch Naming Agreement

When working with a team, document your conventions:

```markdown
# Our Branch Naming Convention

## Format
<type>/<description>
<type>/<ticket-id>-<description>

## Types
- feature/  - New features
- bugfix/   - Bug fixes
- hotfix/   - Urgent production fixes
- docs/     - Documentation changes
- refactor/ - Code refactoring
- test/     - Test additions/changes
- chore/    - Maintenance tasks

## Rules
1. Always lowercase
2. Use hyphens, not underscores
3. Be descriptive but concise
4. Include Jira ticket ID when applicable
5. Maximum 50 characters

## Examples
✅ feature/user-authentication
✅ bugfix/PROJ-123-fix-login
✅ hotfix/security-patch
❌ Feature/UserAuth
❌ my_bug_fix
❌ temp
```

**Activities:**
- Review your current branches - do they follow conventions?
- Create 5 practice branches with proper naming
- Identify which naming pattern fits your workflow
- Document your team's branch naming rules
- Rename any poorly named branches in personal projects

<br id="day2">

### Day 2: Commit Message Conventions

Commit messages are how you communicate changes to your future self and teammates. They're more important than you think!

### Why Good Commit Messages Matter

**Bad commit message example:**
```bash
git commit -m "fixed stuff"
git commit -m "updates"
git commit -m "asdf"
git commit -m "trying something"
```

**Three months later:**
- "What did I fix?"
- "Which stuff?"
- "Why did I make this change?"
- "Is this the commit that broke production?"

**Good commit message example:**
```bash
git commit -m "fix: resolve null pointer exception in user login

- Add null check for email field
- Update validation to handle empty strings
- Add unit tests for edge cases

Fixes #234"
```

**Three months later:**
- ✅ Clear what was fixed
- ✅ Clear why it was fixed
- ✅ Clear how it was fixed
- ✅ Links to relevant issue

### Conventional Commits Standard

The most popular commit message format in professional development.

**Format:**
```
<type>(<scope>): <subject>

<body>

<footer>
```

**Structure Breakdown:**

```bash
feat(auth): add OAuth2 authentication
│    │      │
│    │      └─ Subject: Brief description (imperative mood)
│    └──────── Scope: What part of codebase (optional)
└───────────── Type: Kind of change

# With body and footer:
feat(auth): add OAuth2 authentication

Implement OAuth2 flow for Google and GitHub login.
Users can now sign in using their existing accounts
instead of creating new credentials.

- Add OAuth2 service
- Create login buttons
- Update user model to store OAuth tokens
- Add integration tests

Closes #123
Reviewed-by: Jane Smith
```

### Commit Types

**FEAT**: A new feature for users
```bash
feat: add dark mode toggle
feat(ui): implement responsive navigation
feat(api): add user profile endpoints
```

**FIX**: A bug fix
```bash
fix: resolve memory leak in data processing
fix(auth): prevent duplicate login sessions
fix(ui): correct button alignment on mobile
```

**DOCS**: Documentation only changes
```bash
docs: update installation instructions
docs(api): add endpoint examples
docs: fix typos in README
```

**STYLE**: Code style changes (formatting, missing semicolons, etc.)
```bash
style: format code with prettier
style: fix indentation in header component
style: remove trailing whitespace
```

**REFACTOR**: Code changes that neither fix bugs nor add features
```bash
refactor: extract validation logic to separate service
refactor(db): optimize database queries
refactor: simplify user authentication flow
```

**PERF**: Performance improvements
```bash
perf: reduce page load time by lazy loading images
perf(api): add caching layer for frequent queries
perf: optimize rendering of large lists
```

**TEST**: Adding or updating tests
```bash
test: add unit tests for authentication service
test(e2e): add checkout flow tests
test: increase coverage for user module to 90%
```

**BUILD**: Changes to build system or external dependencies
```bash
build: update webpack to version 5
build: add babel plugin for async/await
build(deps): bump react from 17.0.2 to 18.0.0
```

**CI**: Changes to CI configuration files
```bash
ci: add automated testing to GitHub Actions
ci: configure deployment to staging environment
ci: update Node version in CircleCI config
```

**CHORE**: Other changes that don't modify src or test files
```bash
chore: update .gitignore
chore: remove deprecated code
chore(deps): update dependencies
```

**REVERT**: Reverts a previous commit
```bash
revert: revert "feat: add dark mode toggle"

This reverts commit 1234567890abcdef.
```

### The Subject Line

**Rules for good subjects:**
1. **Imperative mood**: "add feature" not "added feature" or "adds feature"
2. **No period at end**: "fix bug" not "fix bug."
3. **Capitalize first letter**: "Add feature" not "add feature"
4. **Maximum 50 characters**: Be concise
5. **Complete the sentence**: "If applied, this commit will..."

**Testing your subject:**
```
If applied, this commit will [your subject line]

✅ If applied, this commit will add user authentication
✅ If applied, this commit will fix login timeout error
✅ If applied, this commit will update API documentation

❌ If applied, this commit will fixed bug
❌ If applied, this commit will updates
❌ If applied, this commit will trying to fix the weird issue
```

**Good Subjects:**
```bash
Add user authentication with JWT
Fix null pointer exception in checkout
Update README with setup instructions
Refactor database connection logic
Remove deprecated API endpoints
Optimize image loading performance
```

**Bad Subjects:**
```bash
fixed stuff                          # Too vague
Updated some files                   # Not specific
trying to fix the bug                # Wrong mood
Added new feature to the app.        # Has period
asdf                                 # Meaningless
Minor changes                        # What changes?
WIP                                  # Not descriptive
```

### The Body (Optional but Recommended)

The body explains **what** and **why**, not **how** (code shows how).

**Format:**
- Wrap at 72 characters
- Blank line after subject
- Use bullet points for multiple items
- Explain motivation and context

**Example:**
```bash
feat: add email notification system

Implement automated email notifications for important events.
This was requested by users to stay informed about account
activity without checking the app constantly.

Changes:
- Create EmailService with SendGrid integration
- Add notification preferences to user settings
- Implement templates for different notification types
- Add job queue for async email sending
- Include unsubscribe functionality

Technical decisions:
- Used SendGrid for reliability and analytics
- Queue system prevents blocking main thread
- Templates allow easy customization

Closes #456, #457
```

### The Footer (Optional)

Reference issues, breaking changes, and reviewers.

**Common footer patterns:**
```bash
# Reference issues
Fixes #123
Closes #456
Resolves #789
Relates to #234

# Multiple issues
Fixes #123, #456, #789

# Breaking changes
BREAKING CHANGE: API endpoint /users renamed to /accounts

# Reviewers
Reviewed-by: Jane Doe <jane@example.com>
Co-authored-by: John Smith <john@example.com>
```

### Complete Commit Examples

**Simple commit (subject only):**
```bash
git commit -m "fix: resolve login timeout issue"
```

**Detailed commit (subject + body + footer):**
```bash
git commit -m "feat: add user profile customization

Allow users to customize their profile page with custom
colors, bio, and profile picture.

- Add profile settings page
- Implement image upload functionality
- Create color picker component
- Update user model with new fields
- Add validation for all inputs

The profile picture is stored in S3 and compressed
automatically to reduce storage costs.

Closes #234
Reviewed-by: Alice Johnson"
```

**Bug fix with details:**
```bash
git commit -m "fix: prevent XSS vulnerability in comment section

Sanitize user input before rendering comments to prevent
cross-site scripting attacks.

- Add DOMPurify library for HTML sanitization
- Update comment component to use sanitizer
- Add security tests for common XSS patterns
- Update security documentation

This fixes a critical security issue where malicious users
could inject JavaScript into comments.

Fixes #SECURITY-789
Security-Advisory: CVE-2024-12345"
```

### Commit Message Templates

Create a commit template for consistency:

**1. Create template file** `~/.gitmessage`:
```
<type>(<scope>): <subject>

<body>

<footer>

# Type: feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert
# Scope: optional, component or module name
# Subject: imperative mood, max 50 chars, no period
# Body: explain what and why (wrap at 72 chars)
# Footer: reference issues, breaking changes
```

**2. Configure Git to use template:**
```bash
git config --global commit.template ~/.gitmessage
```

**3. Now `git commit` opens template in editor**

### Common Commit Scenarios

**Starting a feature:**
```bash
feat: add initial structure for user dashboard

Create basic layout and routing for dashboard page
```

**Bug fix:**
```bash
fix: resolve calculation error in shopping cart

Correct quantity multiplication to include tax
Fixes #567
```

**Documentation:**
```bash
docs: add API usage examples to README

Include code samples for common endpoints
```

**Refactoring:**
```bash
refactor: extract database logic to repository pattern

Improve testability and separation of concerns
```

**Performance:**
```bash
perf: implement lazy loading for product images

Reduce initial page load by 2.5 seconds
```

### Multi-File Commits

When committing multiple related changes:

**Good approach:**
```bash
feat: implement user authentication system

Complete authentication flow including login, logout,
and session management.

- Add login/logout routes
- Create authentication middleware
- Implement JWT token generation
- Add session storage
- Create login UI components
- Add authentication tests

Closes #123
```

**Bad approach (multiple unrelated changes):**
```bash
# DON'T DO THIS
misc: various updates

- Fix login bug
- Add new homepage design
- Update dependencies
- Remove old files
- Try to fix that weird thing
```

**Better: Split into separate commits:**
```bash
fix: resolve login session timeout
feat: redesign homepage with new branding
chore: update outdated dependencies
chore: remove deprecated user files
```

### Amending Commits

Fix your last commit if you made a mistake:

```bash
# Made a typo in commit message
git commit --amend -m "fix: correct typo in previous commit"

# Forgot to add a file
git add forgotten-file.js
git commit --amend --no-edit  # Keep same message

# Change the message completely
git commit --amend  # Opens editor
```

**⚠️ Warning**: Only amend commits that haven't been pushed!

### Commit Message Checklist

Before committing, ask yourself:

- [ ] Type is appropriate (feat, fix, docs, etc.)?
- [ ] Subject uses imperative mood?
- [ ] Subject is 50 characters or less?
- [ ] Subject doesn't end with a period?
- [ ] Body explains what and why (if needed)?
- [ ] Footer references related issues?
- [ ] Commit is atomic (one logical change)?
- [ ] Message will make sense in 6 months?

**Activities:**
- Review your recent commits - are they clear?
- Practice writing 10 commits using conventional format
- Set up a commit message template
- Rewrite 5 old commit messages following conventions
- Create a commit message guide for your team

<br id="day3">

### Day 3: Tag Naming and Semantic Versioning

Tags mark important points in your repository history, typically releases. Proper tag naming helps track versions and deploy with confidence.

### What are Git Tags?

**Tags** are labels for specific commits, usually used for:
- Release versions
- Important milestones
- Deployment markers

**Two types of tags:**
1. **Lightweight tags**: Just a name pointing to a commit
2. **Annotated tags**: Includes message, tagger name, date (recommended)

### Semantic Versioning (SemVer)

The industry standard for version numbers.

**Format**: `MAJOR.MINOR.PATCH`

```
v2.4.1
│ │ │
│ │ └─ PATCH: Bug fixes, backward compatible
│ └─── MINOR: New features, backward compatible
└───── MAJOR: Breaking changes, not backward compatible
```

**Version Breakdown:**

**MAJOR version (1.0.0 → 2.0.0)**
- Breaking changes
- API changes that require user updates
- Major architectural changes
- Removed functionality

```bash
v1.0.0  # Users use: api.getData()
v2.0.0  # Breaking: now api.fetchData()
# Users must update their code!
```

**MINOR version (1.0.0 → 1.1.0)**
- New features added
- New functionality
- Enhancements
- Backward compatible (old code still works)

```bash
v1.0.0  # Has: api.getData()
v1.1.0  # Added: api.getDataFiltered()
# Old code still works!
```

**PATCH version (1.0.0 → 1.0.1)**
- Bug fixes
- Security patches
- Performance improvements
- Documentation updates
- No new features

```bash
v1.0.0  # Has a bug in getData()
v1.0.1  # Bug fixed in getData()
# Everything else same
```

### Complete Version Examples

**Starting a project:**
```bash
v0.1.0  # First development version
v0.2.0  # Added more features
v0.9.0  # Feature complete, testing
v1.0.0  # First public release!
```

**Evolution of versions:**
```bash
v1.0.0  # Initial release
v1.0.1  # Fix critical bug
v1.0.2  # Security patch
v1.1.0  # Add new feature
v1.1.1  # Fix bug in new feature
v1.2.0  # Add another feature
v2.0.0  # Major rewrite, breaking changes
v2.0.1  # Fix bugs from rewrite
v2.1.0  # New features
```

### Pre-release Versions

For testing before official release:

**Alpha** - Internal testing, very unstable
```bash
v1.0.0-alpha
v1.0.0-alpha.1
v1.0.0-alpha.2
v2.0.0-alpha
```

**Beta** - Public testing, mostly stable
```bash
v1.0.0-beta
v1.0.0-beta.1
v1.0.0-beta.2
v2.0.0-beta
```

**Release Candidate** - Almost ready
```bash
v1.0.0-rc.1  # RC = Release Candidate
v1.0.0-rc.2
v2.0.0-rc.1
```

**Complete pre-release flow:**
```bash
v1.0.0-alpha.1  # First alpha
v1.0.0-alpha.2  # Fixed issues
v1.0.0-beta.1   # Beta testing
v1.0.0-beta.2   # More fixes
v1.0.0-rc.1     # Release candidate
v1.0.0-rc.2     # Final fixes
v1.0.0          # Official release!
```

### Creating Tags in Git

**Lightweight tag** (not recommended for releases):
```bash
git tag v1.0.0
```

**Annotated tag** (recommended):
```bash
git tag -a v1.0.0 -m "Release version 1.0.0

First stable release with complete user authentication,
profile management, and notification system.

Features:
- User registration and login
- OAuth2 integration
- Email notifications
- Profile customization

Bug fixes:
- Resolved login timeout
- Fixed memory leak in notifications
- Corrected mobile responsive issues"
```

**Tag a specific commit:**
```bash
git tag -a v1.0.0 abc1234 -m "Release v1.0.0"
```

**List all tags:**
```bash
git tag
git tag -l "v1.*"  # List tags matching pattern
```

**View tag details:**
```bash
git show v1.0.0
```

**Push tags to remote:**
```bash
git push origin v1.0.0      # Push one tag
git push origin --tags       # Push all tags
```

**Delete a tag:**
```bash
git tag -d v1.0.0                    # Delete locally
git push origin --delete v1.0.0      # Delete remotely
```

### Tag Naming Conventions

**Standard format:**
```bash
v1.0.0          # ✅ Recommended (with 'v' prefix)
1.0.0           # ✅ Also acceptable (without 'v')
```

**With metadata:**
```bash
v1.0.0-beta.1
v1.2.3-rc.2
v2.0.0-alpha.1
```

**Date-based versions** (some projects):
```bash
v2024.10.1      # Year.Month.Increment
v24.10.1        # Short year
```

**Project-specific tags:**
```bash
# Mobile apps
android-v1.2.0
ios-v1.2.0

# Multi-component projects
api-v2.0.0
ui-v2.1.0
docs-v1.5.0

# Environment tags
staging-v1.2.3
production-v1.2.3
```

### Version Numbering Decisions

**When to increment MAJOR:**
```bash
# Breaking API changes
v1.0.0: function getData(id)
v2.0.0: function getData(id, options)  # Added required parameter

# Removed features
v1.0.0: Has admin panel
v2.0.0: Admin panel removed

# Architecture changes
v1.0.0: REST API
v2.0.0: GraphQL API (completely different)
```

**When to increment MINOR:**
```bash
# New features (backward compatible)
v1.0.0: Basic user profiles
v1.1.0: Added profile themes (old profiles still work)

# New optional parameters
v1.1.0: function getData(id)
v1.2.0: function getData(id, options={})  # Optional parameter

# Enhancements
v1.2.0: Basic search
v1.3.0: Advanced search with filters
```

**When to increment PATCH:**
```bash
# Bug fixes
v1.2.0: Login has timeout bug
v1.2.1: Login timeout fixed

# Security patches
v1.2.1: Has XSS vulnerability
v1.2.2: XSS vulnerability patched

# Performance improvements
v1.2.2: Slow image loading
v1.2.3: Optimized image loading
```

### Version 0.x.x Special Rules

**Before 1.0.0** - Development phase:
```bash
v0.1.0  # Initial development
v0.2.0  # Can include breaking changes
v0.3.0  # Still unstable
v0.9.0  # Almost ready
v1.0.0  # First stable release!
```

**Rules for 0.x.x:**
- Anything can change
- Breaking changes allowed in MINOR
- No backward compatibility guarantees
- Once stable → 1.0.0

### Tag Messages Best Practices

**Good tag message structure:**
```bash
git tag -a v1.2.0 -m "Version 1.2.0 - Enhanced Search

## New Features
- Advanced search with multiple filters
- Search history and saved searches
- Auto-complete suggestions

## Improvements
- Faster search indexing (50% improvement)
- Better mobile search UI
- Clearer search result formatting

## Bug Fixes
- Fixed search crash with special characters
- Resolved pagination issue in results
- Corrected relevance scoring

## Breaking Changes
None

## Upgrade Notes
No action required. Search history will be empty
after upgrade but will populate with new searches.

Contributors: @johndoe, @janesmith"
```

**Minimal tag message:**
```bash
git tag -a v1.0.1 -m "Bug fix release

- Fix login timeout issue
- Resolve memory leak in notifications
- Correct responsive layout on mobile

Fixes #234, #245, #256"
```

### Tagging Workflows

**Release workflow:**
```bash
# 1. Finish all features for release
git checkout develop
git merge feature/new-dashboard

# 2. Create release branch
git checkout -b release/v1.2.0

# 3. Update version in files (package.json, etc.)
# 4. Test thoroughly

# 5. Merge to main
git checkout main
git merge release/v1.2.0

# 6. Create tag
git tag -a v1.2.0 -m "Release v1.2.0"

# 7. Push
git push origin main
git push origin v1.2.0

# 8. Merge back to develop
git checkout develop
git merge main
```

**Hotfix workflow:**
```bash
# 1. Create hotfix branch from main
git checkout main
git checkout -b hotfix/v1.2.1

# 2. Fix the critical bug
# 3. Test fix

# 4. Merge to main
git checkout main
git merge hotfix/v1.2.1

# 5. Create tag
git tag -a v1.2.1 -m "Hotfix v1.2.1 - Critical bug fix"

# 6. Push
git push origin main
git push origin v1.2.1

# 7. Merge to develop
git checkout develop
git merge hotfix/v1.2.1
```

### Tag Naming by Project Type

**Web Application:**
```bash
v1.0.0          # Initial release
v1.1.0          # New features
v1.1.1          # Bug fixes
v2.0.0          # Major redesign
```

**API Project:**
```bash
api-v1.0.0
api-v1.1.0
api-v2.0.0      # Breaking changes
```

**Library/Package:**
```
```markdown
```bash
v0.1.0          # Initial alpha
v0.5.0          # Beta
v1.0.0          # First stable release
v1.1.0          # New features
v2.0.0          # Breaking API changes
```

**Mobile Application:**
```bash
# Often include build numbers
v1.0.0-build.1
v1.0.0-build.2
v1.0.0          # App store release
v1.0.1          # Bug fix update
v1.1.0          # Feature update
```

**Documentation:**
```bash
docs-v1.0.0
docs-v1.1.0
docs-v2.0.0     # Major documentation overhaul
```

### Special Version Indicators

**Nightly builds:**
```bash
v1.2.0-nightly.20241008
v1.2.0-nightly.20241009
```

**Snapshot versions:**
```bash
v1.2.0-SNAPSHOT
v1.2.0-dev
```

**Platform-specific:**
```bash
v1.0.0-windows
v1.0.0-mac
v1.0.0-linux
```

### Version Comparison

Understanding version precedence:

```bash
# Ascending order (oldest to newest)
v1.0.0-alpha
v1.0.0-alpha.1
v1.0.0-beta
v1.0.0-beta.1
v1.0.0-rc.1
v1.0.0
v1.0.1
v1.1.0
v2.0.0
```

### Changelog Generation

Good tags enable automatic changelog generation:

```bash
# Generate changelog between tags
git log v1.0.0..v1.1.0 --pretty=format:"- %s"

# Output:
- feat: add user dashboard
- feat: implement notifications
- fix: resolve login bug
- docs: update API documentation
```

### Tag Checklist

Before creating a release tag:

- [ ] All features merged and tested?
- [ ] Version number follows SemVer?
- [ ] Breaking changes documented?
- [ ] CHANGELOG.md updated?
- [ ] Version updated in package.json/pom.xml/etc?
- [ ] All tests passing?
- [ ] Documentation updated?
- [ ] Tag message is descriptive?
- [ ] Using annotated tag (not lightweight)?
- [ ] Ready to deploy to production?

### Real-World Examples

**React (Facebook):**
```bash
v16.0.0         # Major release
v16.8.0         # Introduced hooks (minor)
v16.8.6         # Bug fixes (patch)
v17.0.0         # New JSX transform
v18.0.0         # Concurrent features
```

**Node.js:**
```bash
v14.0.0         # Major release
v14.17.0        # LTS release
v14.17.6        # Security updates
v16.0.0         # Next major
```

**Your Project:**
```bash
v0.1.0          # Initial development
v0.5.0          # Feature complete
v1.0.0          # First public release
v1.0.1          # Quick bug fix
v1.1.0          # New feature added
v1.2.0          # Another feature
v2.0.0          # Major redesign
```

**Activities:**
- Review a popular open-source project's tags on GitHub
- Create a version strategy for your project
- Practice creating annotated tags with detailed messages
- Generate a changelog from your commits
- Tag your current project with appropriate version

<br id="day4">

### Day 4: Repository, File, and Folder Naming

Consistent naming extends beyond Git commands to your entire project structure.

### Repository Naming Conventions

Your repository name is the first thing people see. Make it count!

**Repository Name Rules:**
1. Use lowercase
2. Use hyphens to separate words (kebab-case)
3. Be descriptive but concise
4. Avoid generic names
5. No spaces or special characters
6. Use English (for international projects)

**Good Repository Names:**
```bash
# Clear and descriptive
user-authentication-api
react-todo-app
ecommerce-platform
personal-portfolio-website
weather-dashboard

# Company projects
acme-customer-portal
acme-mobile-app
acme-internal-tools

# Open source libraries
awesome-react-components
json-validator-utility
image-compression-library
```

**Bad Repository Names:**
```bash
# Too vague
project1
my-app
website
stuff
test-repo

# Unclear purpose
final-version
new-project-2024
johns-code

# Poor formatting
My_Project
MyAwesomeApp
my project
PROJECT
```

### Repository Naming by Type

**Web Applications:**
```bash
company-website
blog-platform
social-media-app
task-management-tool
online-store
```

**APIs:**
```bash
user-service-api
payment-gateway-api
notification-service
rest-api-starter
graphql-server
```

**Libraries/Packages:**
```bash
react-modal-component
date-formatter-js
css-grid-framework
authentication-helper
validation-utility
```

**Documentation:**
```bash
project-documentation
api-docs
developer-guides
team-handbook
```

**Personal Projects:**
```bash
portfolio-website
personal-blog
coding-challenges
learning-react
practice-projects
```

**Internal Tools:**
```bash
deployment-scripts
code-generators
testing-utilities
dev-environment-setup
```

### Repository Description

Always add a clear description:

**Good descriptions:**
```bash
# Repository: user-authentication-api
Description: "RESTful API for user authentication with JWT tokens and OAuth2 support"

# Repository: react-todo-app
Description: "Simple todo list application built with React hooks and local storage"

# Repository: ecommerce-platform
Description: "Full-stack e-commerce platform with cart, checkout, and admin panel"
```

**Bad descriptions:**
```bash
"My project"
"Website"
"Code"
"Test"
""  # Empty
```

### File Naming Conventions

Consistent file naming makes your codebase navigable and professional.

**General Rules:**
1. Be descriptive
2. Use consistent casing
3. No spaces (use hyphens or underscores)
4. Include appropriate file extensions
5. Follow language/framework conventions

**JavaScript/React Files:**
```bash
# Components (PascalCase)
UserProfile.jsx
NavigationBar.jsx
ProductCard.jsx

# Utilities/Helpers (camelCase)
dateFormatter.js
apiClient.js
validationHelpers.js

# Configuration (kebab-case or camelCase)
webpack.config.js
jest.config.js
babel.config.js

# Tests (matching source file)
UserProfile.test.jsx
apiClient.test.js
validationHelpers.spec.js
```

**Python Files:**
```bash
# Modules (snake_case)
user_service.py
data_processor.py
api_client.py

# Tests
test_user_service.py
test_api_client.py

# Configuration
settings.py
config.py
```

**CSS/SCSS Files:**
```bash
# Stylesheets (kebab-case)
main-styles.css
navigation.css
user-profile.scss

# Component styles
button-component.css
card-layout.scss

# Utilities
variables.scss
mixins.scss
reset.css
```

**HTML Files:**
```bash
# Pages (kebab-case)
index.html
about.html
contact.html
user-profile.html

# Templates
header-template.html
footer-template.html
```

**Configuration Files:**
```bash
# Standard names (don't change these)
package.json
.gitignore
.eslintrc.js
.prettierrc
README.md
LICENSE
docker-compose.yml
```

**Documentation Files:**
```bash
# Markdown (UPPERCASE or kebab-case)
README.md
CONTRIBUTING.md
CHANGELOG.md
LICENSE.md

# Or kebab-case for other docs
installation-guide.md
api-reference.md
troubleshooting.md
```

### Folder Structure Naming

**Frontend Project (React):**
```bash
my-react-app/
├── public/              # Static files
│   ├── images/
│   ├── fonts/
│   └── favicon.ico
├── src/
│   ├── components/      # Reusable components
│   │   ├── Button/
│   │   ├── Card/
│   │   └── Modal/
│   ├── pages/           # Page components
│   │   ├── Home/
│   │   ├── About/
│   │   └── Contact/
│   ├── services/        # API calls
│   ├── utils/           # Helper functions
│   ├── hooks/           # Custom hooks
│   ├── contexts/        # Context providers
│   ├── styles/          # Global styles
│   ├── assets/          # Images, icons
│   └── App.jsx
├── tests/               # Test files
├── docs/                # Documentation
├── .gitignore
├── package.json
└── README.md
```

**Backend Project (Node.js):**
```bash
my-api/
├── src/
│   ├── controllers/     # Route controllers
│   ├── models/          # Database models
│   ├── routes/          # Route definitions
│   ├── middlewares/     # Custom middleware
│   ├── services/        # Business logic
│   ├── utils/           # Helper functions
│   ├── config/          # Configuration
│   └── app.js
├── tests/
│   ├── unit/
│   └── integration/
├── docs/
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

**Full-Stack Project:**
```bash
my-fullstack-app/
├── client/              # Frontend code
│   ├── src/
│   ├── public/
│   └── package.json
├── server/              # Backend code
│   ├── src/
│   ├── tests/
│   └── package.json
├── shared/              # Shared code
│   └── types/
├── docs/
├── scripts/             # Build/deploy scripts
├── .gitignore
├── docker-compose.yml
└── README.md
```

**Folder Naming Rules:**
1. Lowercase (most common)
2. Descriptive names
3. Plural for collections (components, utils)
4. Singular for single purpose (config, doc)
5. Consistent across project

### Special Files

**Essential files every repository needs:**

**.gitignore:**
```bash
# .gitignore
# Dependencies
node_modules/
vendor/

# Environment variables
.env
.env.local

# Build output
dist/
build/
*.log

# IDE
.vscode/
.idea/
*.swp

# OS
.DS_Store
Thumbs.db
```

**README.md structure:**
```markdown
# Project Name

Brief description of what this project does.

## Features
- Feature 1
- Feature 2
- Feature 3

## Installation
```bash
npm install
```

## Usage
```bash
npm start
```

## Contributing
See CONTRIBUTING.md

## License
MIT License
```

**CHANGELOG.md:**
```markdown
# Changelog

## [1.1.0] - 2024-10-08
### Added
- New user dashboard
- Email notifications

### Fixed
- Login timeout issue
- Mobile responsive bugs

## [1.0.0] - 2024-09-15
### Added
- Initial release
- User authentication
- Basic profile management
```

**CONTRIBUTING.md:**
```markdown
# Contributing to Project Name

## Branch Naming
- feature/description
- bugfix/description
- docs/description

## Commit Messages
Follow Conventional Commits:
- feat: new feature
- fix: bug fix
- docs: documentation changes

## Pull Request Process
1. Create feature branch
2. Make changes
3. Write tests
4. Submit PR with clear description
```

### Naming Anti-Patterns

**What NOT to do:**

```bash
# Poor repository names
❌ test
❌ project-final-final-v2
❌ my_awesome_project
❌ stuff
❌ New Folder

# Poor file names
❌ untitled1.js
❌ copy of file.js
❌ file (2).js
❌ temp.js
❌ asdf.css

# Poor folder names
❌ New folder
❌ stuff
❌ old
❌ backup
❌ misc
```

### Case Sensitivity Warning

Different operating systems handle case differently:

```bash
# These are different on Linux/Mac
UserProfile.jsx
userProfile.jsx
userprofile.jsx

# But same on Windows!
# This can cause Git issues
```

**Best practice:** Be consistent with casing and never rely on case alone to differentiate files.

### Naming Conventions by Language

**JavaScript/TypeScript:**
```bash
# Files: camelCase or PascalCase
userService.js
UserProfile.jsx
apiClient.ts

# Folders: lowercase or camelCase
components/
utils/
services/
```

**Python:**
```bash
# Files: snake_case
user_service.py
api_client.py
data_processor.py

# Folders: snake_case
models/
services/
utils/
```

**Java:**
```bash
# Files: PascalCase (match class name)
UserService.java
DatabaseConnection.java
ApiClient.java

# Folders: lowercase
com/company/project/
models/
services/
```

**PHP:**
```bash
# Files: PascalCase or camelCase
UserController.php
databaseHelper.php

# Folders: lowercase
controllers/
models/
views/
```

### Team Naming Standards Document

Create a team standards document:

```markdown
# Team Naming Conventions

## Repositories
- Format: lowercase-with-hyphens
- Pattern: {project-name}-{type}
- Examples: user-api, admin-dashboard

## Branches
- feature/description
- bugfix/issue-number-description
- hotfix/critical-issue

## Commits
- Follow Conventional Commits
- Type(scope): subject

## Files
- JavaScript: camelCase or PascalCase
- CSS: kebab-case
- Tests: match source file + .test/.spec

## Folders
- Lowercase, descriptive
- Plural for collections
- Consistent structure across projects

## Tags
- Semantic Versioning: v1.2.3
- Pre-release: v1.2.3-beta.1
```

### Real-World Examples

**GitHub Popular Repositories:**
```bash
# Good names
facebook/react
microsoft/vscode
nodejs/node
vercel/next.js
tailwindlabs/tailwindcss

# Clear, descriptive, professional
```

**Your Projects:**
```bash
# Personal portfolio
john-doe-portfolio

# Learning project
react-weather-app

# Work project
acme-customer-portal

# Open source contribution
awesome-css-tricks
```

**Activities:**
- Audit your repositories - do names follow conventions?
- Rename any poorly named repositories
- Create a standard folder structure template
- Write a naming conventions document for your team
- Review a popular project's file structure on GitHub
- Organize your current project with proper naming

---

## Summary: Complete Naming Convention Guide

### Quick Reference Card

**Branches:**
```bash
feature/user-authentication
bugfix/login-timeout
hotfix/security-patch
release/v1.2.0
```

**Commits:**
```bash
feat(auth): add OAuth2 login
fix: resolve null pointer in checkout
docs: update API documentation
```

**Tags:**
```bash
v1.0.0          # Major.Minor.Patch
v1.1.0-beta.1   # Pre-release
v2.0.0          # Breaking changes
```

**Repositories:**
```bash
user-authentication-api
react-dashboard-app
company-website
```

**Files:**
```bash
UserProfile.jsx     # React components
apiClient.js        # Utilities
main-styles.css     # Stylesheets
README.md           # Documentation
```

**Folders:**
```bash
src/
  components/
  utils/
  services/
tests/
docs/
```

<br id="assignments">

## 🧪 Weekly Assignments

### Assignment 1: Practice Repository (Required)
**Due: End of Week**

Create a practice repository demonstrating all naming conventions:

**Requirements:**
1. Repository name follows conventions
2. Create 5 branches with proper naming:
   - One feature branch
   - One bugfix branch
   - One docs branch
   - One refactor branch
   - One release branch

3. Make 10 commits following Conventional Commits:
   - 3 feat commits
   - 3 fix commits
   - 2 docs commits
   - 1 refactor commit
   - 1 test commit

4. Create 3 tags:
   - v0.1.0 (initial)
   - v0.2.0 (added features)
   - v1.0.0 (first release)

5. Include proper files:
   - README.md with project description
   - .gitignore with common patterns
   - CHANGELOG.md tracking versions
   - Proper folder structure

**Submission:**
- Push to GitHub/GitLab
- Share repository URL
- Include screenshot of clean git log

### Assignment 2: Naming Audit
**Due: Day 3**

Audit one of your existing projects:

**Tasks:**
1. List all branch names - identify which don't follow conventions
2. Review last 20 commit messages - rate them (good/bad/ugly)
3. Check if tags follow semantic versioning
4. Review file and folder names for consistency
5. Write a report of findings

**Deliverables:**
- Document with findings
- List of improvements needed
- Plan for refactoring
- Before/after examples

### Assignment 3: Team Convention Guide
**Due: Day 4**

Create a naming conventions guide for your team or future projects:

**Sections to include:**
1. Branch naming rules with examples
2. Commit message template and rules
3. Tag/version numbering strategy
4. Repository naming standards
5. File and folder conventions
6. Examples of good vs bad naming
7. Tools and templates

**Format:**
- Markdown document
- Clear, concise rules
- Plenty of examples
- Easy to reference

### Bonus Challenge: Git Hooks
Set up Git hooks to enforce naming conventions:

**Tasks:**
1. Create commit-msg hook to validate commit messages
2. Create pre-commit hook to check file naming
3. Write script to validate branch names
4. Test hooks with good and bad examples

**Hint:**
```bash
# .git/hooks/commit-msg
#!/bin/sh
commit_msg=$(cat $1)
pattern="^(feat|fix|docs|style|refactor|test|chore)(\(.+\))?: .+"

if ! echo "$commit_msg" | grep -qE "$pattern"; then
  echo "Invalid commit message format"
  echo "Use: type(scope): subject"
  exit 1
fi
```

<br id="nextweek">

## Next Week Preview

**Week 2: Advanced Git Workflows and Collaboration**

Now that you have solid naming conventions, learn to use them in team workflows!

**Topics Covered:**
- Git Flow workflow in depth
- GitHub Flow and alternatives
- Pull request best practices
- Code review process
- Merge strategies (merge vs rebase vs squash)
- Handling merge conflicts
- Cherry-picking commits
- Git bisect for debugging
- Rewriting history safely
- Team collaboration patterns

**Prepare for Next Week:**
- Practice all naming conventions
- Get comfortable with basic Git commands
- Create a practice repository with branches
- Review your team's current Git workflow
- Think about collaboration challenges you've faced

---

## Key Takeaways

**Remember:**
- ✅ Consistency is more important than perfection
- ✅ Good names save time in the long run
- ✅ Your future self will thank you
- ✅ Team agreement > personal preference
- ✅ Document your conventions
- ✅ Tools can enforce standards
- ✅ Naming is communication

**The Three C's of Good Naming:**
1. **Clear**: Instantly understandable
2. **Consistent**: Follow same patterns
3. **Concise**: Not too long, not too short

**Golden Rule:**
> "Write commit messages as if the person who reads them is a violent psychopath who knows where you live."
> 
> — Anonymous Developer (but seriously, be kind to your future self!)

---

**Resources for Continued Learning:**
- Conventional Commits: conventionalcommits.org
- Semantic Versioning: semver.org
- Git Documentation: git-scm.com/doc
- GitHub Guides: guides.github.com
- Git Flow: nvie.com/posts/a-successful-git-branching-model
- Keep a Changelog: keepachangelog.com

---

**Congratulations on completing Git Naming Conventions!** 🎉

You now have professional-grade knowledge of naming conventions used by top companies and open-source projects. Apply these practices consistently and watch your Git history become a valuable project asset!

**Keep Committing!** 🚀

---

## Appendix: Quick Reference Cheatsheet

### Branch Names
```bash
feature/add-user-dashboard
bugfix/fix-login-error
hotfix/security-vulnerability
release/v1.2.0
docs/update-readme
refactor/optimize-queries
test/add-auth-tests
chore/update-dependencies
```

### Commit Messages
```bash
feat: add new feature
feat(scope): add new feature in scope
fix: resolve bug
fix(auth): resolve login bug
docs: update documentation
style: format code
refactor: restructure code
perf: improve performance
test: add tests
build: update build config
ci: update CI pipeline
chore: maintenance tasks
revert: revert previous commit
```

### Tags
```bash
v1.0.0              # Release
v1.0.0-alpha.1      # Alpha
v1.0.0-beta.1       # Beta
v1.0.0-rc.1         # Release candidate
```

### Commands
```bash
# Create branch
git checkout -b feature/new-feature

# Commit with message
git commit -m "feat: add new feature"

# Create annotated tag
git tag -a v1.0.0 -m "Release v1.0.0"

# Push tag
git push origin v1.0.0

# List tags
git tag -l

# View tag
git show v1.0.0
```

---

**Happy Naming!** 📝
```