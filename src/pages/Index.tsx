import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X, Github, ExternalLink, Download, Eye, Mail, MapPin, Phone, Code, Palette, Server, Cloud, Award, GraduationCap, Heart, Linkedin, Star, Trophy, Users, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import heroImage from '@/assets/hero-image.jpg';

// Utility function for conditional classes
const cx = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
};

// ==================== PORTFOLIO DATA CONFIGURATION ====================
// 🎯 EASY EDITING: Add/remove items from these arrays to update your portfolio

// Hero Section Data - Edit your personal information
const heroData = {
  name: "Shruti Keshri",
  title: "Aspiring Full-Stack Developer • Amazon ML School '25 • 2× Hackathon Winner • Microsoft (MLSA)& GSSoC Student Ambassador • Infosys Springboard Intern • CSE Undergrad (9+ CGPA) • Google WTM & IFERP Member",
  description: "Passionate about creating innovative solutions and building applications that make a difference."
};

// Experience Data - Add your work experience here
const experienceData = [{
  id: 1,
  title: "AI Intern",
  company: "Infosys Springboard",
  duration: "2025",
  location: "Remote",
  description: "Focused on model development, data preprocessing, cloud deployment, and building scalable AI/ML pipelines.",
  technologies: ["AI/ML", "Cloud Deployment", "Data Preprocessing", "Model Development"],
  type: "Remote",
  glowColor: "ming-teal"
}, {
  id: 2,
  title: "Microsoft Learn Student Ambassador",
  company: "Microsoft",
  duration: "Jul 2025 – Present",
  location: "Remote",
  description: "Delivered Azure, GitHub & AI/ML workshops to 500+ students and organized hackathons to boost cloud adoption.",
  technologies: ["Azure", "GitHub", "AI/ML", "Workshop Delivery"],
  type: "Remote",
  glowColor: "indigo-dye"
}, {
  id: 3,
  title: "Amazon ML Summer School Student",
  company: "Amazon",
  duration: "Aug 2025",
  location: "Remote",
  description: "Selected nationally for MLSS 2025; completed advanced modules in Generative AI, NLP, RL, and Deep Learning.",
  technologies: ["Generative AI", "NLP", "Reinforcement Learning", "Deep Learning"],
  type: "Remote",
  glowColor: "accent"
}, {
  id: 4,
  title: "Founder",
  company: "ILearn Community",
  duration: "Mar 2025 – Present",
  location: "Remote",
  description: "Built a 500+ member tech community hosting workshops, mentorship, and peer-learning initiatives.",
  technologies: ["Community Building", "Workshop Hosting", "Mentorship", "Leadership"],
  type: "Remote",
  glowColor: "primary"
}];

// About Me Cards - Add/remove objects to customize your about section
const aboutData = [{
  icon: Heart,
  title: "Brief",
  description: "B.Tech Computer Science student with a strong interest in problem-solving, scalable systems, and innovation. I enjoy translating ideas into reliable applications and continuously upskilling in modern technologies.",
  glowColor: "ming-teal"
}, {
  icon: GraduationCap,
  title: "Education",
  description: "Currently pursuing a B.Tech in Computer Science Engineering (GPA 9.1/10) at Malla Reddy Engineering College for Women, Hyderabad. Actively engaged in coding communities, hackathons, and open-source contributions, fostering collaboration and peer learning.",
  glowColor: "indigo-dye"
}, {
  icon: Award,
  title: "Exploring",
  description: "Deepening expertise in Artificial Intelligence, Machine Learning, Cloud Platforms, and Full-Stack Development, while also exploring blockchain technology and its emerging applications.",
  glowColor: "accent"
}];

// Skills Data - Add new categories or skills easily
const skillsData = {
  Languages: {
    icon: Code,
    skills: ['JavaScript', 'Python', 'Java', 'C', 'SQL'],
    glowColor: 'ming-teal'
  },
  Frameworks: {
    icon: Palette,
    skills: ['React', 'Node.js', 'Express', 'Next.js', 'Vue.js', 'Flask', 'Streamlit'],
    glowColor: 'indigo-dye'
  },
  Tools: {
    icon: Server,
    skills: ['Git', 'Canva', 'VS Code', 'Postman', 'Figma', 'Excel', 'PowerBI'],
    glowColor: 'accent'
  },
  'Data Science': {
    icon: Database,
    skills: ['NumPy', 'Pandas'],
    glowColor: 'primary'
  },
  Cloud: {
    icon: Cloud,
    skills: ['Vercel', 'Supabase'],
    glowColor: 'ming-teal'
  }
};

// Projects Data - Add your projects here
const projectsData = [{
  id: 1,
  title: 'Slang Decoder (GenAI Translator)',
  description: '🏆 2nd Prize – National Hackathon (150+ Teams) - AI-powered slang translator with OCR, speech-to-text, and multilingual output, enabling faster contextual understanding across languages.',
  image: '/lovable-uploads/0862d854-0bd2-4017-8a02-004d60d062ab.png',
  tech: ['Python', 'Streamlit', 'Google Speech API', 'OCR', 'NLP'],
  liveDemo: '#',
  github: 'https://github.com/shrutikeshri2021/CodeX-Team',
  featured: true,
  glowColor: 'ming-teal'
}, {
  id: 2,
  title: 'Dynamic Curriculum Mapping Dashboard',
  description: 'Interactive dashboard aligning course outcomes with learning objectives, improving evaluation efficiency by 25%.',
  image: '/lovable-uploads/19fc69ba-e6c9-424e-b76c-12d1e75a4ffe.png',
  tech: ['Firebase', 'JavaScript', 'Python', 'HTML/CSS'],
  liveDemo: '#',
  github: '#',
  featured: true,
  glowColor: 'indigo-dye'
}, {
  id: 3,
  title: 'E-Commerce Web Application',
  description: 'Full-stack solution with product catalog, secure checkout, and basic analytics.',
  image: '/lovable-uploads/539aa693-a58b-451c-b9fd-44570bac6b3d.png',
  tech: ['MERN Stack', 'REST APIs', 'Git/GitHub', 'Azure'],
  liveDemo: '#',
  github: '#',
  featured: true,
  glowColor: 'accent'
}, {
  id: 4,
  title: 'Personal Portfolio Website',
  description: 'Responsive, modular portfolio showcasing projects, skills, and achievements.',
  image: '/lovable-uploads/63cff7ae-e49c-45df-b1aa-99f72acc3770.png',
  tech: ['HTML', 'CSS', 'JavaScript', 'Flutterflow (UI)', 'GitHub Pages'],
  liveDemo: '#',
  github: '#',
  featured: false,
  glowColor: 'primary'
}];

// Certifications Data - Add your certifications here
const certificationsData = [{
  id: 1,
  title: 'Meta Full-Stack Developer Certificate',
  organization: 'Meta',
  year: '2024',
  credentialUrl: 'https://coursera.org/share/9723f46458adbe96e028802b1d6ae86c',
  level: 'Professional',
  glowColor: 'ming-teal'
}, {
  id: 2,
  title: 'Oracle Cloud Infrastructure Generative AI Professional (1Z0-1127-25)',
  organization: 'Oracle',
  year: '2025',
  credentialUrl: 'https://brm-certview.oracle.com/ords/certview/ecertificate?ssn=OC5466724&trackId=OCI25GAIOCP&key=e098072341068b73fb302dcda5bb65754b4bd5f4',
  level: 'Professional',
  glowColor: 'indigo-dye'
}, {
  id: 3,
  title: 'IBM AI Foundations',
  organization: 'IBM SkillsBuild',
  year: '2025',
  credentialUrl: 'https://coursera.org/share/d2b5613365e578fe3079eb8f6c356233',
  level: 'Foundation',
  glowColor: 'accent'
}, {
  id: 4,
  title: 'Google & EduSkills Generative AI Virtual Internship',
  organization: 'Google Cloud',
  year: '2024',
  credentialUrl: '#',
  level: 'Professional',
  glowColor: 'primary'
}, {
  id: 5,
  title: 'Coursera Git & GitHub Certificate',
  organization: 'Google/Coursera',
  year: '2024',
  credentialUrl: 'https://coursera.org/share/0f199fcb2732c3b1f3d76bc79b1287b9',
  level: 'Professional',
  glowColor: 'ming-teal'
}, {
  id: 6,
  title: 'Cisco Python Essentials',
  organization: 'Cisco Networking Academy',
  year: '2024',
  credentialUrl: '#',
  level: 'Foundation',
  glowColor: 'indigo-dye'
}, {
  id: 7,
  title: 'C Programming Certificate',
  organization: 'Cisco / University Collaboration',
  year: '2024',
  credentialUrl: '#',
  level: 'Foundation',
  glowColor: 'accent'
}, {
  id: 8,
  title: 'NPTEL Python Programming',
  organization: 'IIT/NPTEL',
  year: '2024',
  credentialUrl: '#',
  level: 'Professional',
  glowColor: 'primary'
}, {
  id: 9,
  title: 'Microsoft Learn Student Ambassador',
  organization: 'Microsoft',
  year: '2025',
  credentialUrl: 'https://mvp.microsoft.com/en-US/studentambassadors/profile/3cdbbf28-aebe-4611-91ab-0387a48889d8',
  level: 'Active',
  glowColor: 'ming-teal'
}, {
  id: 10,
  title: 'Oracle Cloud Infrastructure 2025 Developer Professional',
  organization: 'Oracle',
  year: '2025',
  credentialUrl: 'https://brm-certview.oracle.com/ords/certview/ecertificate?ssn=OC5466724&trackId=OCID25CP&key=ec2793dbe405d6a282a5ff5c3063d546cf923594',
  level: 'Professional',
  glowColor: 'indigo-dye'
}, {
  id: 11,
  title: 'SQL Certificate',
  organization: 'Coursera',
  year: '2024',
  credentialUrl: 'https://coursera.org/share/4caf12eb5a1a25239fcbaab0c792a567',
  level: 'Professional',
  glowColor: 'primary'
}, {
  id: 12,
  title: 'JavaScript Certificate',
  organization: 'Coursera',
  year: '2024',
  credentialUrl: 'https://coursera.org/share/982043969216a2950ae5630e45c1090e',
  level: 'Professional',
  glowColor: 'ming-teal'
}, {
  id: 13,
  title: 'Java Certificate',
  organization: 'Coursera',
  year: '2024',
  credentialUrl: 'https://coursera.org/share/7930ffa50a44c88570f1d77d57ad055d',
  level: 'Professional',
  glowColor: 'accent'
}, {
  id: 14,
  title: 'Excel to Power BI Certificate',
  organization: 'Coursera',
  year: '2024',
  credentialUrl: 'https://coursera.org/share/438feaf9852d2c637268bdb126948b2f',
  level: 'Professional',
  glowColor: 'indigo-dye'
}, {
  id: 15,
  title: 'C Programming Certificate',
  organization: 'Cisco',
  year: '2024',
  credentialUrl: '#',
  level: 'Foundation',
  glowColor: 'primary'
}, {
  id: 16,
  title: 'Data Analytics Certificate',
  organization: 'Forage - Deloitte',
  year: '2024',
  credentialUrl: '#',
  level: 'Professional',
  glowColor: 'ming-teal'
}];

// Contact Information - Edit your contact details
const contactInfo = {
  email: 'shrutikeshri200423.uk@gmail.com',
  location: 'India',
  social: {
    github: 'https://github.com/shrutikeshri2021',
    linkedin: 'https://www.linkedin.com/in/shruti-keshri-123b30288/',
    twitter: 'https://twitter.com/yourusername'
  }
};
const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAllCertifications, setShowAllCertifications] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: 'Hi Shruti, I\'m reaching out through your portfolio. Best regards,'
  });
  const {
    toast
  } = useToast();
  useEffect(() => {
    // Check for dark mode preference
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    document.documentElement.classList.toggle('dark', newDarkMode);
  };
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Force immediate close of mobile menu
      setMobileMenuOpen(false);
      
      // Add small delay for mobile devices
      setTimeout(() => {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  };
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Direct email redirect
    const subject = encodeURIComponent('Portfolio Contact Form - Message from ' + formData.name);
    const body = encodeURIComponent(`Hi Shruti,

I'm reaching out through your portfolio website.

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

Best regards,
${formData.name}`);
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
    toast({
      title: "Redirecting to email",
      description: "Opening your email client to send the message."
    });

    // Clear form after a short delay
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        message: 'Hi Shruti, I\'m reaching out through your portfolio. Best regards,'
      });
    }, 1000);
  };
  const navItems = [{
    label: 'Home',
    id: 'home'
  }, {
    label: 'About',
    id: 'about'
  }, {
    label: 'Skills',
    id: 'skills'
  }, {
    label: 'Experience',
    id: 'experience'
  }, {
    label: 'Projects',
    id: 'projects'
  }, {
    label: 'Certifications',
    id: 'certifications'
  }, {
    label: 'Resume',
    id: 'resume'
  }, {
    label: 'Contact',
    id: 'contact'
  }];
  return <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card shadow-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl gradient-text">Shruti Keshri</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="text-foreground hover:text-primary transition-colors duration-200">
                  {item.label}
                </button>)}
            </div>
            
            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={toggleDarkMode} className="p-2">
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              
              <Button variant="ghost" size="sm" className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && <motion.div initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: 'auto'
        }} exit={{
          opacity: 0,
          height: 0
        }} className="md:hidden border-t border-border">
              <div className="px-4 py-2 space-y-1">
                {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors duration-200">
                    {item.label}
                  </button>)}
              </div>
            </motion.div>}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div initial={{
            opacity: 0,
            y: 50
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  Hi, I'm <span className="gradient-text break-words">{heroData.name}</span>
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                  {heroData.title}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-4">
                <Button onClick={() => scrollToSection('projects')} className="gradient-primary">
                  View Projects
                </Button>
                <Button onClick={() => scrollToSection('resume')} variant="outline">
                  View Resume
                </Button>
                <Button onClick={() => scrollToSection('contact')} variant="outline">
                  Get In Touch
                </Button>
              </div>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            scale: 0.8
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} className="flex justify-center lg:justify-end order-first lg:order-last">
              <div className="relative">
                <div className="absolute inset-0 gradient-primary rounded-full blur-2xl opacity-20 animate-pulse"></div>
                <img src="/lovable-uploads/0f4942ee-ee61-4745-b3c6-79827d2bdc05.png" alt={`${heroData.name} - Profile Picture`} className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-large ring-4 ring-primary/20" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">About Me</h2>
            <div className="text-lg text-muted-foreground max-w-4xl mx-auto space-y-6">
              <div className="space-y-4 text-left">
                <ul className="list-disc list-inside space-y-2">
                  <li>Computer Science Engineering undergraduate (CGPA 9.1/10)</li>
                   <li>Experience as a Microsoft Learn Student Ambassador, Amazon ML Summer School Trainee, and Infosys Springboard AI Intern, ambassador at gov.in, ggsoc.let's upgrade</li>
                   <li>Founder of the iLearn Community (500+ members)</li>
                  <li>Active member of Google Women Techmakers</li>
                  <li>Strong technical skills in C, Python, Java, JavaScript, SQL, and MERN Stack</li>
                  <li>Passionate about building scalable, user-focused solutions</li>
                  <li>Currently enhancing DSA and problem-solving skills</li>
                  <li>Open to opportunities in software and full-stack development</li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutData.map((item, index) => {
            const IconComponent = item.icon;
            return <motion.div key={item.title} initial={{
              opacity: 0,
              y: 50
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: index * 0.2
            }} viewport={{
              once: true
            }} className="group">
                  <Card className="glass-card shadow-medium hover:shadow-large transition-all duration-500 h-full relative overflow-hidden group-hover:scale-105">
                    {/* Glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-${item.glowColor}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <div className={`absolute -inset-1 bg-gradient-to-r from-${item.glowColor}/20 to-transparent rounded-lg blur opacity-0 group-hover:opacity-75 transition-opacity duration-500 -z-10`}></div>
                    
                    <CardHeader className="text-center relative z-10">
                      <div className={`mx-auto mb-4 p-3 rounded-lg bg-${item.glowColor}/10 text-${item.glowColor} w-fit relative group-hover:shadow-lg group-hover:shadow-${item.glowColor}/25 transition-all duration-500`}>
                        <div className={`absolute inset-0 bg-${item.glowColor}/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                        <IconComponent className="h-8 w-8 relative z-10" />
                      </div>
                      <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <p className="text-muted-foreground text-center leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>;
          })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-xl text-muted-foreground">
              Tools and technologies I work with
            </p>
          </motion.div>
          
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
             {Object.entries(skillsData).map(([category, data], categoryIndex) => {
             const IconComponent = data.icon;
             return <motion.div key={category} initial={{
               opacity: 0,
               y: 50
             }} whileInView={{
               opacity: 1,
               y: 0
             }} transition={{
               duration: 0.8,
               delay: categoryIndex * 0.2
             }} viewport={{
               once: true
             }} className="group">
                   <Card className="glass-card shadow-medium h-full relative overflow-hidden group-hover:scale-105 transition-all duration-500">
                     {/* Animated glow border */}
                     <div className={`absolute -inset-1 bg-gradient-to-r from-${data.glowColor}/30 via-${data.glowColor}/50 to-${data.glowColor}/30 rounded-lg blur opacity-0 group-hover:opacity-75 transition-all duration-500 animate-pulse -z-10`}></div>
                     
                     <CardHeader className="text-center relative z-10">
                       <div className={`mx-auto mb-2 p-3 rounded-lg bg-${data.glowColor}/10 text-${data.glowColor} w-fit relative group-hover:shadow-lg group-hover:shadow-${data.glowColor}/25 transition-all duration-500`}>
                         <div className={`absolute inset-0 bg-${data.glowColor}/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                         <IconComponent className="h-6 w-6 relative z-10" />
                       </div>
                       <CardTitle className="text-lg font-bold">{category}</CardTitle>
                     </CardHeader>
                     <CardContent className="relative z-10">
                       <div className="flex flex-wrap gap-2">
                         {data.skills.map((skill, skillIndex) => <motion.span key={skill} initial={{
                       opacity: 0,
                       scale: 0.8
                     }} whileInView={{
                       opacity: 1,
                       scale: 1
                     }} transition={{
                       duration: 0.3,
                       delay: skillIndex * 0.1
                     }} className={`px-3 py-1 bg-secondary/80 backdrop-blur-sm rounded-full text-sm font-medium text-secondary-foreground hover:bg-${data.glowColor}/20 hover:text-${data.glowColor} hover:shadow-md hover:shadow-${data.glowColor}/20 transition-all duration-300 cursor-default`}>
                             {skill}
                           </motion.span>)}
                       </div>
                     </CardContent>
                   </Card>
                 </motion.div>;
           })}
           </div>

           {/* Tech Stack Progress Section */}
           <motion.div 
             initial={{ opacity: 0, y: 50 }} 
             whileInView={{ opacity: 1, y: 0 }} 
             transition={{ duration: 0.8, delay: 0.5 }} 
             viewport={{ once: true }}
             className="mt-16"
           >
             <Card className="glass-card shadow-medium relative overflow-hidden">
               <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-ming-teal/20 rounded-lg blur opacity-75 transition-all duration-500 -z-10"></div>
               
               <CardHeader className="text-center relative z-10">
                 <div className="mx-auto mb-4 p-3 rounded-lg bg-primary/10 text-primary w-fit">
                   <Server className="h-8 w-8" />
                 </div>
                 <CardTitle className="text-2xl font-bold gradient-text">Tech Stack Proficiency</CardTitle>
                 <CardDescription>My expertise levels in core technologies</CardDescription>
               </CardHeader>
               
               <CardContent className="relative z-10 space-y-6">
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                   <div className="space-y-3">
                     <div className="flex justify-between items-center">
                       <span className="font-semibold text-ming-teal">MERN Stack</span>
                       <span className="text-sm text-muted-foreground">70%</span>
                     </div>
                     <Progress value={70} className="h-3" />
                   </div>
                   
                   <div className="space-y-3">
                     <div className="flex justify-between items-center">
                       <span className="font-semibold text-accent">Frontend</span>
                       <span className="text-sm text-muted-foreground">90%</span>
                     </div>
                     <Progress value={90} className="h-3" />
                   </div>
                   
                   <div className="space-y-3">
                     <div className="flex justify-between items-center">
                       <span className="font-semibold text-indigo-dye">Machine Learning</span>
                       <span className="text-sm text-muted-foreground">30%</span>
                     </div>
                     <Progress value={30} className="h-3" />
                   </div>
                 </div>
               </CardContent>
             </Card>
           </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience</h2>
            <p className="text-xl text-muted-foreground">
              My journey in software development and technology
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experienceData.map((experience, index) => <motion.div key={experience.id} initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: index * 0.2
          }} viewport={{
            once: true
          }} className="group">
                <Card className="glass-card shadow-medium hover:shadow-large transition-all duration-500 h-full relative overflow-hidden group-hover:scale-105">
                   {/* Light background highlight */}
                   <div className={`absolute inset-0 ${index % 2 === 0 ? 'bg-[#d4a8d6]/10' : 'bg-[#a8afd6]/10'} rounded-lg`}></div>
                   
                   {/* Glow effects */}
                   <div className={`absolute -inset-1 bg-gradient-to-r from-${experience.glowColor}/20 via-${experience.glowColor}/30 to-${experience.glowColor}/20 rounded-lg blur opacity-0 group-hover:opacity-75 transition-all duration-500 -z-10`}></div>
                   
                   <CardHeader className="relative z-10">
                     <div className="flex justify-between items-start mb-3">
                       <div className="flex-1">
                         <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors duration-300 mb-2">
                           {experience.title}
                         </CardTitle>
                         <div className="text-base font-semibold text-muted-foreground mb-1">
                           {experience.company}
                         </div>
                         <div className="text-sm text-muted-foreground mb-2">
                           {experience.duration}
                         </div>
                         <div className="text-sm text-muted-foreground">
                           📍 {experience.location}
                         </div>
                       </div>
                       <div className="flex flex-col items-end gap-2">
                         {/* Professional icon */}
                         <div className={`p-2 rounded-full bg-${experience.glowColor}/20 text-${experience.glowColor}`}>
                           {index % 3 === 0 ? <Star className="h-4 w-4" /> : 
                            index % 3 === 1 ? <Trophy className="h-4 w-4" /> : 
                            <Users className="h-4 w-4" />}
                         </div>
                         <span className={`px-3 py-1 bg-${experience.glowColor}/90 text-white rounded-full text-xs font-bold shadow-lg shadow-${experience.glowColor}/25`}>
                           {experience.type}
                         </span>
                       </div>
                     </div>
                   </CardHeader>
                  
                  <CardContent className="relative z-10">
                    <CardDescription className="text-sm leading-relaxed mb-4">
                      {experience.description}
                    </CardDescription>
                    
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => <motion.span key={tech} initial={{
                    opacity: 0,
                    scale: 0.8
                  }} whileInView={{
                    opacity: 1,
                    scale: 1
                  }} transition={{
                    duration: 0.3,
                    delay: techIndex * 0.1
                  }} className={`px-2 py-1 bg-${experience.glowColor}/10 text-${experience.glowColor} rounded-full text-xs font-medium hover:bg-${experience.glowColor}/20 hover:shadow-md hover:shadow-${experience.glowColor}/20 transition-all duration-300`}>
                          {tech}
                        </motion.span>)}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground">
              Some of my recent work and hackathon achievements
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => <motion.div key={project.id} initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: index * 0.2
          }} viewport={{
            once: true
          }} className="group">
                <Card className="glass-card shadow-medium hover:shadow-large transition-all duration-500 h-full relative overflow-hidden group-hover:scale-[1.02]">
                  {/* Glow effects */}
                  <div className={`absolute -inset-1 bg-gradient-to-r from-${project.glowColor}/20 via-${project.glowColor}/30 to-${project.glowColor}/20 rounded-lg blur opacity-0 group-hover:opacity-75 transition-all duration-500 -z-10`}></div>
                  {project.featured && <div className="absolute top-4 right-4 z-20">
                      <span className={`px-2 py-1 bg-${project.glowColor}/90 text-white rounded-full text-xs font-bold shadow-lg shadow-${project.glowColor}/25`}>
                        FEATURED
                      </span>
                    </div>}
                  
                  <div className="h-48 relative overflow-hidden rounded-t-lg">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
                    <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  </div>
                  
                  <CardHeader className="relative z-10">
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="flex-1 relative z-10">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => <motion.span key={tech} initial={{
                    opacity: 0,
                    scale: 0.8
                  }} whileInView={{
                    opacity: 1,
                    scale: 1
                  }} transition={{
                    duration: 0.3,
                    delay: techIndex * 0.1
                  }} className={`px-3 py-1 bg-${project.glowColor}/10 text-${project.glowColor} rounded-full text-xs font-medium hover:bg-${project.glowColor}/20 hover:shadow-md hover:shadow-${project.glowColor}/20 transition-all duration-300`}>
                          {tech}
                        </motion.span>)}
                    </div>
                    
                    <div className="flex gap-3">
                      <Button size="sm" className={`flex-1 gradient-primary hover:shadow-lg hover:shadow-primary/25 transition-all duration-300`} asChild>
                        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 hover:shadow-lg transition-all duration-300" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          GitHub
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Certifications & Credentials</h2>
            <p className="text-xl text-muted-foreground">
              Professional certifications and achievements
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificationsData
              .filter((cert, index) => {
                // Show only Meta, IBM AI, Coursera GitHub, Oracle Gen AI initially
                const priorityCerts = ['Meta Full-Stack Developer Certificate', 'IBM AI Foundations', 'Coursera Git & GitHub Certificate', 'Oracle Cloud Infrastructure Generative AI Professional (1Z0-1127-25)'];
                if (showAllCertifications) return true;
                return priorityCerts.includes(cert.title);
              })
              .map((cert, index) => <motion.div key={cert.id} initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: index * 0.2
          }} viewport={{
            once: true
          }} className="group">
                <Card className="glass-card shadow-medium hover:shadow-large transition-all duration-500 relative overflow-hidden group-hover:scale-105">
                  {/* Glow border */}
                  <div className={`absolute -inset-1 bg-gradient-to-r from-${cert.glowColor}/30 to-${cert.glowColor}/10 rounded-lg blur opacity-0 group-hover:opacity-75 transition-all duration-500 -z-10`}></div>
                  
                  <CardHeader className="relative z-10">
                    <div className="flex justify-between items-start mb-3">
                      <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors duration-300 flex-1 pr-2">
                        {cert.title}
                      </CardTitle>
                      <div className="flex flex-col gap-2">
                        <span className={`px-3 py-1 bg-${cert.glowColor}/90 text-white rounded-full text-xs font-bold shadow-lg shadow-${cert.glowColor}/25`}>
                          {cert.year}
                        </span>
                        <span className="px-2 py-1 bg-accent/20 text-accent rounded text-xs font-medium">
                          {cert.level}
                        </span>
                      </div>
                    </div>
                    <CardDescription className="text-base font-medium text-muted-foreground">
                      {cert.organization}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="relative z-10">
                    <Button variant="outline" size="sm" className={`w-full hover:bg-${cert.glowColor}/10 hover:border-${cert.glowColor}/50 hover:text-${cert.glowColor} hover:shadow-md hover:shadow-${cert.glowColor}/20 transition-all duration-300`} asChild>
                      <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                        <Award className="h-4 w-4 mr-2" />
                        View Credential
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>)}
          </div>
          
          {/* View More Button */}
          {!showAllCertifications && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.3 }} 
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Button 
                onClick={() => setShowAllCertifications(true)} 
                variant="outline" 
                size="lg"
                className="px-8 py-3 hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all duration-300"
              >
                View More Certifications
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Resume</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Download my resume or view it online
            </p>
            
            <div className="glass-card shadow-medium p-8 mb-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Download className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Ready to Download</h3>
                <p className="text-muted-foreground text-sm">
                  📝 Upload your resume PDF to <code>/public/resume.pdf</code> to enable downloads
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-primary" asChild>
                <a href="/resume.pdf" download="Shrutika_Keshri_Resume.pdf">
                  <Download className="h-5 w-5 mr-2" />
                  Download Resume
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Eye className="h-5 w-5 mr-2" />
                  View Online
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss opportunities and collaborate on exciting projects
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }}>
              <Card className="glass-card shadow-medium">
                <CardHeader>
                  <CardTitle>Send me a message</CardTitle>
                  <CardDescription>
                    Fill out the form below and I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <Input placeholder="Your Name" value={formData.name} onChange={e => setFormData({
                      ...formData,
                      name: e.target.value
                    })} required />
                    </div>
                    <div>
                      <Input type="email" placeholder="Your Email" value={formData.email} onChange={e => setFormData({
                      ...formData,
                      email: e.target.value
                    })} required />
                    </div>
                    <div>
                      <Textarea placeholder="Your Message" rows={4} value={formData.message} onChange={e => setFormData({
                      ...formData,
                      message: e.target.value
                    })} required />
                    </div>
                    <Button type="submit" className="w-full gradient-primary">
                      <Mail className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }} className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
                <p className="text-muted-foreground mb-6">
                  I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-muted-foreground">{contactInfo.email}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-muted-foreground">{contactInfo.location}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">LinkedIn</div>
                    <div className="text-muted-foreground">
                      <a href={contactInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                        View Profile
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg">
                    <Github className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">GitHub</div>
                    <div className="text-muted-foreground">
                      <a href={contactInfo.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                        View Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-lg font-bold mb-2">Shruti Keshri · Software Developer</div>
            <div className="text-sm text-muted-foreground mb-4">
              📧 <a href={`mailto:${contactInfo.email}`} className="hover:text-primary transition-colors">{contactInfo.email}</a>
              {' '} · 🔗 <a href={contactInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
              {' '} | <a href={contactInfo.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2025 · Hyderabad, India — All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Portfolio;