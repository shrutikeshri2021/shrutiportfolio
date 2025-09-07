# 📚 Portfolio Customization & Deployment Guide

This guide explains how to customize your portfolio and deploy it to Vercel.

## 🏠 Hero Section Configuration

Edit the `heroData` object to customize your main information:

```javascript
const heroData = {
  name: "Your Full Name",
  title: "Your Professional Title • Your Expertise • Your Interests", 
  description: "A brief description about yourself and your passion."
};
```

**How to edit:**
1. Change `name` to your full name
2. Update `title` with your professional titles/interests (use • to separate)
3. Modify `description` with a personal summary

The hero section automatically adjusts layout based on your content length!

## 🎯 How to Add/Remove Cards Dynamically

Your portfolio is now completely dynamic! All content is controlled by data arrays at the top of the `src/pages/Index.tsx` file.

## 📝 Adding New Content

### ➕ Adding About Me Cards

```javascript
// Add to aboutData array
{
  icon: YourIconFromLucide, // Import from lucide-react
  title: "Your Title",
  description: "Your description text here",
  glowColor: "ming-teal" // or "indigo-dye", "accent", "primary"
}
```

### 🛠️ Adding New Skill Categories

```javascript
// Add to skillsData object
NewCategory: {
  icon: YourIcon, // From lucide-react
  skills: ['Skill1', 'Skill2', 'Skill3'],
  glowColor: 'ming-teal' // Choose glow color
}
```

### 🚀 Adding New Projects

```javascript
// Add to projectsData array
{
  id: 5, // Unique ID
  title: 'Your Project Name',
  description: 'Detailed project description',
  image: '/path-to-your-image.jpg',
  tech: ['Tech1', 'Tech2', 'Tech3'],
  liveDemo: 'https://your-demo-url.com',
  github: 'https://github.com/your-repo',
  featured: true, // Shows "FEATURED" badge
  glowColor: 'ming-teal' // Glow effect color
}
```

### 💼 Adding Work Experience

```javascript
// Add to experienceData array
{
  id: 4, // Unique ID
  title: "Job Title",
  company: "Company Name", 
  duration: "Start Date - End Date",
  location: "Work Location (Remote/City)",
  description: "Brief description of your role and achievements",
  technologies: ["Tech1", "Tech2", "Tech3"],
  type: "Full-time", // Options: "Full-time", "Part-time", "Internship", "Freelance"
  glowColor: "ming-teal" // Glow effect color
}
```

### 🏆 Adding New Certifications

```javascript
// Add to certificationsData array
{
  id: 5, // Unique ID
  title: 'Certification Name',
  organization: 'Issuing Organization',
  year: '2024',
  credentialUrl: 'https://credential-url.com',
  level: 'Professional', // or 'Expert', 'Beginner'
  glowColor: 'ming-teal' // Glow effect color
}
```

## 🎨 Glow Colors Available

- `ming-teal` - Teal glow
- `indigo-dye` - Blue glow  
- `accent` - Purple glow
- `primary` - Primary brand glow

## ✨ Technical Features Added

### 🌟 Glow Effects
- Animated glow borders on hover
- Pulsing animations
- Color-coded glow for different categories
- Shadow effects with matching colors

### 🎭 Enhanced Animations
- Staggered animations for cards
- Hover scale effects
- Smooth transitions
- Entrance animations

### 🏷️ New Visual Elements
- Featured project badges
- Certification level indicators
- Tech skill pills with hover effects
- Professional gradients

## 🔧 Easy Customization

### To Remove Cards:
Simply delete the object from the respective array

### To Reorder Cards:
Drag and drop the objects within the arrays

### To Change Colors:
Update the `glowColor` property in any card

### To Add New Sections:
1. Create a new data array
2. Add the section JSX
3. Map over your data array
4. Apply the same styling patterns

## 📱 Responsive Features
- All cards automatically adapt to screen size
- Mobile-optimized layouts
- Touch-friendly hover effects on mobile

## 🎯 Pro Tips

1. **Keep descriptions concise** - 2-3 lines work best
2. **Use high-quality images** - They make a big difference
3. **Group similar technologies** - Makes skills easier to scan
4. **Highlight your best work** - Use the `featured` flag
5. **Update regularly** - Keep your portfolio fresh

## 📧 Contact Form Setup

Your contact form now redirects directly to your email! Update the `contactInfo` object:

```javascript
const contactInfo = {
  email: 'shrutikeshri200423.uk@gmail.com', // Your actual email
  phone: '+91 (XXX) XXX-XXXX',
  location: 'Your Location',
  // ... social links
};
```

When someone submits the contact form, it will open their email client with a pre-filled message to your email.

## 📄 Resume Setup

1. **Add your resume file:**
   - Place your resume PDF in `/public/resume.pdf`
   - Name it exactly `resume.pdf`

2. **The resume section includes:**
   - Download button (downloads as "Shrutika_Keshri_Resume.pdf")
   - View online button (opens in new tab)

## 🚀 Deploying to Vercel

### Quick Deployment Steps:

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Portfolio ready for deployment"
   git push origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Login with GitHub
   - Click "New Project" 
   - Import your repository
   - Click "Deploy"

3. **Your portfolio will be live at:**
   `https://your-project-name.vercel.app`

### Automatic Updates:
Every time you push to GitHub, Vercel automatically redeploys your site!

For detailed deployment instructions, see `DEPLOYMENT-GUIDE.md`.

Your portfolio is now a dynamic, glowing, technical showcase that's easy to maintain and deploy! 🚀