`git lfs track` is used to specify **file patterns** that should be managed by Git Large File Storage (LFS), rather than regular Git. Let me break down how it works:

## Basic Usage

```bash
git lfs track "*.psd"
git lfs track "*.zip"
git lfs track "assets/videos/*.mp4"
```

## Pattern-Based, Not Folder-Based

`git lfs track` works with **file patterns** (using glob patterns), not folders directly. However, you can use patterns to match files within folders:

- `*.psd` - tracks all PSD files anywhere in the repo
- `images/*.png` - tracks PNG files in the images folder
- `assets/**/*.bin` - tracks all .bin files in assets and its subdirectories

## What It Actually Does

When you run `git lfs track "*.psd"`, it:
1. Adds the pattern to `.gitattributes` file
2. Marks matching files to be stored in LFS instead of regular Git
3. Only the pointer files (small text files) get stored in your Git repository, while the actual large files go to LFS storage

## Tracking Files in a Folder

If you want to track all files in a specific folder, you'd use:

```bash
git lfs track "myfolder/**"
```

This tracks all files within `myfolder` and its subdirectories.

## Important Notes

- You need to commit the `.gitattributes` file after tracking patterns
- Patterns apply to files, not the folder structure itself
- Already-committed files need to be migrated separately (tracking new patterns doesn't retroactively affect existing files)

So while it's pattern-based and primarily for files, you can effectively target entire folders using glob patterns like `foldername/**`.