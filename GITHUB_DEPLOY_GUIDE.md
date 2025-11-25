# How to Push Your Portfolio to GitHub and Deploy to Vercel

## Step 1: Create GitHub Repository

1. **Go to GitHub**: https://github.com/
2. **Login** to your account (or create one if needed)
3. **Click the "+" icon** (top right) → **"New repository"**
4. **Fill in details**:
   - Repository name: `portfolio-website` (or any name you like)
   - Description: "My professional portfolio website"
   - **Keep it Public** (or Private - your choice)
   - **DON'T** check "Initialize with README" (we already have code)
5. **Click "Create repository"**

## Step 2: Push Your Code to GitHub

After creating the repo, GitHub will show you commands. Use these:

```bash
# Set your Git identity (if not done already)
git config --global user.name "Your Name"
git config --global user.email "shyammangaonkar330@gmail.com"

# Navigate to your project
cd /Users/shyamsudhirmangaonkar/Desktop/Portfoliio

# Add remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git

# Rename branch to main (optional but recommended)
git branch -M main

# Push code to GitHub
git push -u origin main
```

### Example:
If your GitHub username is `shyam-mangaonkar`, the command would be:
```bash
git remote add origin https://github.com/shyam-mangaonkar/portfolio-website.git
```

## Step 3: Deploy to Vercel from GitHub

1. **Go to Vercel**: https://vercel.com/
2. **Sign up with GitHub** (this connects your accounts)
3. **Click "Add New" → "Project"**
4. **Select your repository** from the list (portfolio-website)
5. **Click "Import"**
6. **Configure** (Vercel auto-detects Vite):
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
7. **Click "Deploy"**
8. **Wait 1-2 minutes** ☕
9. **Your site is LIVE!** 🎉

## What You Get:

✅ **Version Control** - Track all changes
✅ **Easy Updates** - Just push to GitHub, Vercel auto-deploys
✅ **Portfolio on GitHub** - Showcase your code
✅ **Free Hosting** - Both GitHub and Vercel are free

## Alternative: Deploy Without GitHub

If you prefer not to use GitHub:

1. **Go to Vercel**: https://vercel.com/
2. **Sign up** (with email/Google)
3. **Drag and drop your project folder** (`Portfoliio` folder)
4. **Vercel will deploy it** 
5. **Done!**

But GitHub is recommended for easier updates later!

## Need Your GitHub Username?

Check: https://github.com/settings/profile

---

**I'll help you run the commands step by step if you choose the GitHub method!**
