# 🚀 Deployment Guide - Vercel

This guide explains how to deploy your portfolio to Vercel for free hosting.

## Prerequisites

- GitHub account
- Your portfolio code pushed to a GitHub repository
- Vercel account (free)

## Step-by-Step Deployment

### 1. Prepare Your Repository

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Add your resume file:**
   - Place your resume PDF in `/public/resume.pdf`
   - Name it exactly `resume.pdf` for the download/view buttons to work

### 2. Deploy to Vercel

1. **Visit Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with your GitHub account

2. **Import your project:**
   - Click "New Project"
   - Select "Import Git Repository"
   - Choose your portfolio repository

3. **Configure deployment:**
   - **Project Name:** Choose a name (e.g., `my-portfolio`)
   - **Framework Preset:** Vite (auto-detected)
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

4. **Deploy:**
   - Click "Deploy"
   - Wait for deployment to complete (2-3 minutes)

### 3. Custom Domain (Optional)

1. **Buy a domain** (optional):
   - Purchase from providers like Namecheap, GoDaddy
   - Or use free `.vercel.app` subdomain

2. **Add custom domain:**
   - In Vercel dashboard, go to Project Settings
   - Click "Domains"
   - Add your custom domain
   - Follow DNS configuration instructions

## Environment Variables

If you need environment variables:

1. **In Vercel Dashboard:**
   - Go to Project Settings
   - Click "Environment Variables"
   - Add any needed variables

## Automatic Deployments

Vercel automatically deploys when you push to your main branch:

```bash
# Make changes to your portfolio
git add .
git commit -m "Updated projects section"
git push origin main
# Vercel automatically deploys the changes!
```

## Common Issues & Solutions

### Build Errors

**Issue:** Build fails with TypeScript errors
**Solution:** 
```bash
# Run locally to check for errors
npm run build
# Fix any TypeScript/lint errors before pushing
```

**Issue:** Missing dependencies
**Solution:**
```bash
# Ensure all dependencies are in package.json
npm install
git add package-lock.json
git commit -m "Updated dependencies"
git push
```

### Resume Download Issues

**Issue:** Resume download doesn't work
**Solution:**
- Ensure `resume.pdf` is in `/public/` folder
- File name must be exactly `resume.pdf`
- Check file is committed to git: `git add public/resume.pdf`

### Custom Domain Issues

**Issue:** Domain not working
**Solution:**
- Wait 24-48 hours for DNS propagation
- Check domain DNS settings match Vercel requirements
- Use CNAME record for subdomains, A record for root domains

## Performance Optimization

1. **Image Optimization:**
   - Use WebP format for images
   - Compress images before uploading
   - Consider using Vercel's Image Optimization

2. **SEO:**
   - Your portfolio already includes meta tags
   - Add your actual information to improve SEO

## Monitoring

- **Analytics:** Enable Vercel Analytics in project settings
- **Performance:** Use Vercel Speed Insights
- **Logs:** Check Function Logs for any errors

## Cost

- **Vercel Free Tier includes:**
  - Unlimited personal projects
  - 100GB bandwidth per month
  - Automatic HTTPS
  - Global CDN

## Next Steps After Deployment

1. **Update your information:**
   - Replace placeholder data with real information
   - Add your actual projects and experience
   - Upload your real resume

2. **Share your portfolio:**
   - Add the link to your LinkedIn profile
   - Include it in your email signature
   - Share on social media

3. **Keep it updated:**
   - Regularly add new projects
   - Update your experience
   - Refresh your skills

Your portfolio will be live at: `https://your-project-name.vercel.app`

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)
- Check Vercel Dashboard for deployment logs and errors