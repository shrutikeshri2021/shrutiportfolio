import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Moon, 
  Sun, 
  Menu, 
  X, 
  Github, 
  ExternalLink, 
  Download, 
  Eye, 
  Mail, 
  MapPin, 
  Phone,
  Code,
  Palette,
  Server,
  Cloud,
  Award,
  GraduationCap,
  Heart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import heroImage from '@/assets/hero-image.jpg';

// Utility function for conditional classes
const cx = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
};

// ==================== PORTFOLIO DATA CONFIGURATION ====================
// 🎯 EASY EDITING: Add/remove items from these arrays to update your portfolio

// About Me Cards - Add/remove objects to customize your about section
const aboutData = [
  {
    icon: Heart,
    title: "Brief",
    description: "Computer Science student with a passion for problem-solving and innovation. I love building applications that make a difference and constantly learning new technologies.",
    glowColor: "ming-teal"
  },
  {
    icon: GraduationCap,
    title: "Education", 
    description: "Pursuing B.Tech in Computer Science Engineering. Active in coding communities, hackathons, and open-source contributions. Always eager to collaborate and learn.",
    glowColor: "indigo-dye"
  },
  {
    icon: Award,
    title: "Exploring",
    description: "Currently diving deep into AI/ML, cloud computing, and full-stack development. Interested in blockchain technology and its potential applications.",
    glowColor: "accent"
  }
];

// Skills Data - Add new categories or skills easily
const skillsData = {
  Languages: {
    icon: Code,
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'SQL', 'Go', 'Rust'],
    glowColor: 'ming-teal'
  },
  Frameworks: {
    icon: Palette,
    skills: ['React', 'Node.js', 'Express', 'Next.js', 'Vue.js', 'Django', 'FastAPI', 'Spring Boot'],
    glowColor: 'indigo-dye'
  },
  Tools: {
    icon: Server,
    skills: ['Git', 'Docker', 'VS Code', 'Postman', 'Figma', 'Webpack', 'Kubernetes', 'Jenkins'],
    glowColor: 'accent'
  },
  Cloud: {
    icon: Cloud,
    skills: ['AWS', 'Google Cloud', 'Azure', 'Vercel', 'Heroku', 'Firebase', 'DigitalOcean', 'Cloudflare'],
    glowColor: 'primary'
  }
};

// Projects Data - Add your projects here
const projectsData = [
  {
    id: 1,
    title: 'AI-Powered E-Commerce Platform',
    description: 'Full-stack e-commerce solution with ML-based product recommendations, payment integration, and real-time analytics dashboard',
    image: '/placeholder-project-1.jpg',
    tech: ['React', 'Node.js', 'MongoDB', 'TensorFlow', 'Stripe', 'Redis'],
    liveDemo: '#',
    github: '#',
    featured: true,
    glowColor: 'ming-teal'
  },
  {
    id: 2,
    title: 'Real-Time Collaboration Suite',
    description: 'Multi-user collaborative workspace with real-time editing, video calls, screen sharing, and integrated project management',
    image: '/placeholder-project-2.jpg',
    tech: ['Vue.js', 'Socket.io', 'WebRTC', 'Firebase', 'Tailwind CSS', 'Docker'],
    liveDemo: '#',
    github: '#',
    featured: true,
    glowColor: 'indigo-dye'
  },
  {
    id: 3,
    title: 'Blockchain Voting System',
    description: 'Decentralized voting platform ensuring transparency and security with smart contracts and cryptographic verification',
    image: '/placeholder-project-3.jpg',
    tech: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'IPFS', 'MetaMask'],
    liveDemo: '#',
    github: '#',
    featured: true,
    glowColor: 'accent'
  },
  {
    id: 4,
    title: 'Neural Network Visualizer',
    description: 'Interactive tool for visualizing and understanding deep learning models with real-time training visualization',
    image: '/placeholder-project-4.jpg',
    tech: ['Python', 'TensorFlow', 'D3.js', 'Flask', 'WebGL', 'NumPy'],
    liveDemo: '#',
    github: '#',
    featured: false,
    glowColor: 'primary'
  }
];

// Certifications Data - Add your certifications here
const certificationsData = [
  {
    id: 1,
    title: 'AWS Certified Solutions Architect',
    organization: 'Amazon Web Services',
    year: '2024',
    credentialUrl: '#',
    level: 'Professional',
    glowColor: 'ming-teal'
  },
  {
    id: 2,
    title: 'Google Cloud Professional Developer',
    organization: 'Google Cloud',
    year: '2023',
    credentialUrl: '#',
    level: 'Professional',
    glowColor: 'indigo-dye'
  },
  {
    id: 3,
    title: 'Meta Front-End Developer',
    organization: 'Meta',
    year: '2023',
    credentialUrl: '#',
    level: 'Professional',
    glowColor: 'accent'
  },
  {
    id: 4,
    title: 'Kubernetes Administrator (CKA)',
    organization: 'Cloud Native Computing Foundation',
    year: '2024',
    credentialUrl: '#',
    level: 'Expert',
    glowColor: 'primary'
  }
];

// Contact Information - Edit your contact details
const contactInfo = {
  email: 'your.email@example.com',
  phone: '+1 (555) 123-4567',
  location: 'Your City, Country',
  social: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    twitter: 'https://twitter.com/yourusername'
  }
};

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

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
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Try backend submission first
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon!",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Backend not available');
      }
    } catch (error) {
      // Fallback to mailto
      const subject = encodeURIComponent('Portfolio Contact Form');
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`;
      
      toast({
        title: "Redirecting to email",
        description: "Opening your email client to send the message.",
      });
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Resume', id: 'resume' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card shadow-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl gradient-text">Portfolio</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground hover:text-primary transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
            
            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleDarkMode}
                className="p-2"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-border"
            >
              <div className="px-4 py-2 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Hi, I'm <span className="gradient-text">Your Name</span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground mb-8">
                Aspiring Software Engineer • Full-Stack Developer • AI Enthusiast
              </p>
              <div className="flex flex-wrap gap-4">
                <Button onClick={() => scrollToSection('projects')} className="gradient-primary">
                  View Projects
                </Button>
                <Button onClick={() => scrollToSection('resume')} variant="outline">
                  Download Resume
                </Button>
                <Button onClick={() => scrollToSection('contact')} variant="outline">
                  Get In Touch
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="absolute inset-0 gradient-primary rounded-full blur-2xl opacity-20"></div>
                <img
                  src={heroImage}
                  alt="Profile"
                  className="relative w-80 h-80 rounded-full object-cover shadow-large"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating innovative solutions and learning cutting-edge technologies
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutData.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group"
                >
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
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-xl text-muted-foreground">
              Tools and technologies I work with
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skillsData).map(([category, data], categoryIndex) => {
              const IconComponent = data.icon;
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                  viewport={{ once: true }}
                  className="group"
                >
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
                        {data.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                            className={`px-3 py-1 bg-secondary/80 backdrop-blur-sm rounded-full text-sm font-medium text-secondary-foreground hover:bg-${data.glowColor}/20 hover:text-${data.glowColor} hover:shadow-md hover:shadow-${data.glowColor}/20 transition-all duration-300 cursor-default`}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground">
              Some of my recent work and side projects
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="glass-card shadow-medium hover:shadow-large transition-all duration-500 h-full relative overflow-hidden group-hover:scale-[1.02]">
                  {/* Glow effects */}
                  <div className={`absolute -inset-1 bg-gradient-to-r from-${project.glowColor}/20 via-${project.glowColor}/30 to-${project.glowColor}/20 rounded-lg blur opacity-0 group-hover:opacity-75 transition-all duration-500 -z-10`}></div>
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-20">
                      <span className={`px-2 py-1 bg-${project.glowColor}/90 text-white rounded-full text-xs font-bold shadow-lg shadow-${project.glowColor}/25`}>
                        FEATURED
                      </span>
                    </div>
                  )}
                  
                  <div className={`h-48 bg-gradient-to-br from-${project.glowColor}/80 via-${project.glowColor}/60 to-${project.glowColor}/40 rounded-t-lg relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-pulse`}></div>
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
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                          className={`px-3 py-1 bg-${project.glowColor}/10 text-${project.glowColor} rounded-full text-xs font-medium hover:bg-${project.glowColor}/20 hover:shadow-md hover:shadow-${project.glowColor}/20 transition-all duration-300`}
                        >
                          {tech}
                        </motion.span>
                      ))}
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Certifications</h2>
            <p className="text-xl text-muted-foreground">
              Professional certifications and achievements
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificationsData.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
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
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className={`w-full hover:bg-${cert.glowColor}/10 hover:border-${cert.glowColor}/50 hover:text-${cert.glowColor} hover:shadow-md hover:shadow-${cert.glowColor}/20 transition-all duration-300`} 
                      asChild
                    >
                      <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                        <Award className="h-4 w-4 mr-2" />
                        View Credential
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Resume</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Download my resume or view it online
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-primary" asChild>
                <a href="/resume.pdf" download>
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
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss opportunities and collaborate on exciting projects
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
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
                      <Input
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Your Message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full gradient-primary">
                      <Mail className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
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
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-muted-foreground">{contactInfo.phone}</div>
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
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-muted-foreground mb-4 md:mb-0">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
