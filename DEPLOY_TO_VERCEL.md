# Deploy Your Portfolio to Vercel

## Quick Deployment Guide

### Method 1: Vercel Website (Easiest - Recommended)

1. **Go to Vercel**: https://vercel.com/
2. **Sign Up/Login** with GitHub account
3. **Click "Add New"** → **"Project"**
4. **Import Git Repository**:
   - Click "Import Git Repository"
   - Authorize Vercel to access GitHub if needed
   - Or use "Import Third-Party Git Repository"
5. **Configure Project**:
   - Framework Preset: **Vite**
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. **Click "Deploy"**
7. **Wait 1-2 minutes** for deployment
8. **Get Your Live URL!** (e.g., `your-portfolio.vercel.app`)

### Method 2: Vercel CLI (Alternative)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to project
cd /Users/shyamsudhirmangaonkar/Desktop/Portfoliio

# Login to Vercel
vercel login

# Deploy
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? Choose your account
# - Link to existing project? No
# - Project name? portfoliio (or custom name)
# - Directory? ./
# - Override settings? No
```

## Current Status ✓

- ✓ Git initialized
- ✓ All files committed
- ✓ Ready for deployment

## After Deployment

Your portfolio will be live at a URL like:
- `https://portfoliio-shyam.vercel.app`
- Or a custom domain you can add later

## Features You'll Get

- ✓ **Free hosting**
- ✓ **Automatic HTTPS**
- ✓ **Global CDN** (fast worldwide)
- ✓ **Auto-deploys** when you push to GitHub (if connected)
- ✓ **Custom domain** support

## Next Steps

1. Go to https://vercel.com/
2. Click "Sign Up" or "Login"
3. Import your project
4. Your site will be live in 2 minutes!

## Important Note

For the contact form to work on production:
- Complete the EmailJS setup (see EMAILJS_SETUP.md)
- Update the Service ID, Template ID, and Public Key in Contact.jsx

Enjoy your live portfolio! 🚀
