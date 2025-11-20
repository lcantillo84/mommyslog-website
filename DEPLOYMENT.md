# Deployment Guide

## Step-by-Step Deployment to Vercel

### 1. Test Locally

```bash
cd /Users/liliannecantillo/Documents/mommyslog-website
npm install
npm run dev
```

Open http://localhost:3000 to see the site.

---

### 2. Push to GitHub

```bash
# Initialize git repo
git init
git add .
git commit -m "Initial commit - Mommy's Log landing page"

# Create new repo on GitHub named "mommyslog-website"
# Then connect and push:
git remote add origin https://github.com/lcantillo84/mommyslog-website.git
git branch -M main
git push -u origin main
```

---

### 3. Deploy to Vercel (FREE)

#### Option A: Vercel Dashboard (Easiest)

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** (use GitHub account)
3. Click **"New Project"**
4. Click **"Import Git Repository"**
5. Select **"lcantillo84/mommyslog-website"**
6. Click **"Deploy"**
7. Wait 2 minutes - your site is live!

#### Option B: Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

---

### 4. Connect Your Domain (mommyslog.com)

1. In Vercel dashboard, click your project
2. Go to **"Settings"** → **"Domains"**
3. Click **"Add Domain"**
4. Enter: `mommyslog.com`
5. Vercel will show DNS instructions

#### Update DNS (where you bought domain):

Add these records:

**A Record:**
- Type: A
- Name: @
- Value: 76.76.21.21

**CNAME Record:**
- Type: CNAME
- Name: www
- Value: cname.vercel-dns.com

**Wait 10-60 minutes** for DNS to propagate.

---

### 5. Enable HTTPS

Vercel automatically enables HTTPS for your domain (no action needed).

---

### 6. Add Screenshots Later

1. Add images to `public/screenshots/` folder
2. Update `app/page.tsx` (instructions in README.md)
3. Commit and push to GitHub
4. Vercel auto-deploys the update

---

## Verify Deployment

✅ Site live at: https://mommyslog-website.vercel.app (Vercel subdomain)
✅ Custom domain: https://mommyslog.com (after DNS setup)

---

## Troubleshooting

**"Build failed"**
- Check error in Vercel logs
- Make sure all dependencies installed

**"Domain not working"**
- Wait longer (DNS takes time)
- Verify DNS records are correct
- Use https:// not http://

**"Site slow to load"**
- Vercel optimizes automatically
- Check image sizes (should be < 500KB)
