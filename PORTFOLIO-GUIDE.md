# 📚 Portfolio Data Management Guide

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

Your portfolio is now a dynamic, glowing, technical showcase that's easy to maintain! 🚀