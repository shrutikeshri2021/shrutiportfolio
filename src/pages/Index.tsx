import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X, Github, ExternalLink, Eye, Mail, MapPin, Code, Palette, Server, Cloud, Award, GraduationCap, Heart, Linkedin, Star, Trophy, Users, Database, ArrowUpRight, Sparkles, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';

// ==================== PORTFOLIO DATA CONFIGURATION ====================

const heroData = {
  name: "Shruti Keshri",
  title: "Aspiring Full-Stack Developer • Amazon ML School '25 • 2× Hackathon Winner • Microsoft (MLSA)& GSSoC Student Ambassador • Infosys Springboard Intern • CSE Undergrad (9+ CGPA) • Google WTM & IFERP Member",
  description: "Passionate about creating innovative solutions and building applications that make a difference."
};

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

const projectsData = [{
  id: 1,
  title: 'Slang Decoder (GenAI Translator)',
  description: '🏆 2nd Prize – National Hackathon (150+ Teams) - AI-powered slang translator with OCR, speech-to-text, and multilingual output.',
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

const certificationsData = [{
  id: 1, title: 'Meta Full-Stack Developer Certificate', organization: 'Meta', year: '2024',
  credentialUrl: 'https://coursera.org/share/9723f46458adbe96e028802b1d6ae86c', level: 'Professional', glowColor: 'ming-teal'
}, {
  id: 2, title: 'Oracle Cloud Infrastructure Generative AI Professional (1Z0-1127-25)', organization: 'Oracle', year: '2025',
  credentialUrl: 'https://brm-certview.oracle.com/ords/certview/ecertificate?ssn=OC5466724&trackId=OCI25GAIOCP&key=e098072341068b73fb302dcda5bb65754b4bd5f4', level: 'Professional', glowColor: 'indigo-dye'
}, {
  id: 3, title: 'IBM AI Foundations', organization: 'IBM SkillsBuild', year: '2025',
  credentialUrl: 'https://coursera.org/share/d2b5613365e578fe3079eb8f6c356233', level: 'Foundation', glowColor: 'accent'
}, {
  id: 4, title: 'Google & EduSkills Generative AI Virtual Internship', organization: 'Google Cloud', year: '2024',
  credentialUrl: '#', level: 'Professional', glowColor: 'primary'
}, {
  id: 5, title: 'Coursera Git & GitHub Certificate', organization: 'Google/Coursera', year: '2024',
  credentialUrl: 'https://coursera.org/share/0f199fcb2732c3b1f3d76bc79b1287b9', level: 'Professional', glowColor: 'ming-teal'
}, {
  id: 6, title: 'Cisco Python Essentials', organization: 'Cisco Networking Academy', year: '2024',
  credentialUrl: '#', level: 'Foundation', glowColor: 'indigo-dye'
}, {
  id: 7, title: 'C Programming Certificate', organization: 'Cisco / University Collaboration', year: '2024',
  credentialUrl: '#', level: 'Foundation', glowColor: 'accent'
}, {
  id: 8, title: 'NPTEL Python Programming', organization: 'IIT/NPTEL', year: '2024',
  credentialUrl: '#', level: 'Professional', glowColor: 'primary'
}, {
  id: 9, title: 'Microsoft Learn Student Ambassador', organization: 'Microsoft', year: '2025',
  credentialUrl: 'https://mvp.microsoft.com/en-US/studentambassadors/profile/3cdbbf28-aebe-4611-91ab-0387a48889d8', level: 'Active', glowColor: 'ming-teal'
}, {
  id: 10, title: 'Oracle Cloud Infrastructure 2025 Developer Professional', organization: 'Oracle', year: '2025',
  credentialUrl: 'https://brm-certview.oracle.com/ords/certview/ecertificate?ssn=OC5466724&trackId=OCID25CP&key=ec2793dbe405d6a282a5ff5c3063d546cf923594', level: 'Professional', glowColor: 'indigo-dye'
}, {
  id: 11, title: 'SQL Certificate', organization: 'Coursera', year: '2024',
  credentialUrl: 'https://coursera.org/share/4caf12eb5a1a25239fcbaab0c792a567', level: 'Professional', glowColor: 'primary'
}, {
  id: 12, title: 'JavaScript Certificate', organization: 'Coursera', year: '2024',
  credentialUrl: 'https://coursera.org/share/982043969216a2950ae5630e45c1090e', level: 'Professional', glowColor: 'ming-teal'
}, {
  id: 13, title: 'Java Certificate', organization: 'Coursera', year: '2024',
  credentialUrl: 'https://coursera.org/share/7930ffa50a44c88570f1d77d57ad055d', level: 'Professional', glowColor: 'accent'
}, {
  id: 14, title: 'Excel to Power BI Certificate', organization: 'Coursera', year: '2024',
  credentialUrl: 'https://coursera.org/share/438feaf9852d2c637268bdb126948b2f', level: 'Professional', glowColor: 'indigo-dye'
}, {
  id: 15, title: 'C Programming Certificate', organization: 'Cisco', year: '2024',
  credentialUrl: '#', level: 'Foundation', glowColor: 'primary'
}, {
  id: 16, title: 'Data Analytics Certificate', organization: 'Forage - Deloitte', year: '2024',
  credentialUrl: '#', level: 'Professional', glowColor: 'ming-teal'
}];

const contactInfo = {
  email: 'shrutikeshri200423.uk@gmail.com',
  location: 'India',
  social: {
    github: 'https://github.com/shrutikeshri2021',
    linkedin: 'https://www.linkedin.com/in/shruti-keshri-123b30288/',
    twitter: 'https://twitter.com/yourusername'
  }
};

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }
  })
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }
  })
};

// Section heading component
const SectionHeading = ({ title, subtitle, align = 'center' }: { title: string; subtitle: string; align?: string }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={fadeUp}
    className={`mb-16 ${align === 'center' ? 'text-center' : ''}`}
  >
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
      <Sparkles className="h-3.5 w-3.5" />
      {subtitle}
    </div>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">{title}</h2>
  </motion.div>
);

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAllCertifications, setShowAllCertifications] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: 'Hi Shruti, I\'m reaching out through your portfolio. Best regards,'
  });
  const { toast } = useToast();

  useEffect(() => {
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
      setMobileMenuOpen(false);
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('Portfolio Contact Form - Message from ' + formData.name);
    const body = encodeURIComponent(`Hi Shruti,\n\nI'm reaching out through your portfolio website.\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`);
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
    toast({ title: "Redirecting to email", description: "Opening your email client to send the message." });
    setTimeout(() => {
      setFormData({ name: '', email: '', message: 'Hi Shruti, I\'m reaching out through your portfolio. Best regards,' });
    }, 1000);
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Resume', id: 'resume' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 w-full z-50 glass-card shadow-medium"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="font-bold text-xl gradient-text cursor-pointer"
              onClick={() => scrollToSection('home')}
            >
              SK.
            </motion.div>
            
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="rounded-full">
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden rounded-full" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
        
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-border"
            >
              <div className="px-4 py-3 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left py-2.5 px-3 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-all duration-200 text-sm font-medium"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-16 relative">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="space-y-8"
            >
              <motion.div variants={fadeUp} custom={0} className="space-y-5">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Open to opportunities
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
                  Hi, I'm{' '}
                  <span className="gradient-text">{heroData.name}</span>
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
                  {heroData.title}
                </p>
              </motion.div>
              
              <motion.div variants={fadeUp} custom={0.2} className="flex flex-wrap gap-3">
                <Button onClick={() => scrollToSection('projects')} className="gradient-primary rounded-full px-6 h-11 text-sm font-medium shadow-glow hover:shadow-large transition-all duration-300">
                  View Projects
                  <ArrowUpRight className="h-4 w-4 ml-1" />
                </Button>
                <Button onClick={() => scrollToSection('resume')} variant="outline" className="rounded-full px-6 h-11 text-sm font-medium hover:bg-muted transition-all duration-300">
                  View Resume
                </Button>
                <Button onClick={() => scrollToSection('contact')} variant="ghost" className="rounded-full px-6 h-11 text-sm font-medium hover:bg-muted transition-all duration-300">
                  Get In Touch
                </Button>
              </motion.div>
              
              {/* Quick stats */}
              <motion.div variants={fadeUp} custom={0.4} className="flex gap-8 pt-4">
                <div>
                  <div className="text-2xl font-bold text-foreground">9.1+</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">CGPA</div>
                </div>
                <div className="w-px bg-border" />
                <div>
                  <div className="text-2xl font-bold text-foreground">500+</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Community</div>
                </div>
                <div className="w-px bg-border" />
                <div>
                  <div className="text-2xl font-bold text-foreground">2×</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Hackathon Wins</div>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center lg:justify-end order-first lg:order-last"
            >
              <div className="relative">
                <div className="absolute inset-0 gradient-primary rounded-full blur-3xl opacity-15 animate-pulse scale-110" />
                <div className="relative">
                  <img
                    src="/lovable-uploads/0f4942ee-ee61-4745-b3c6-79827d2bdc05.png"
                    alt={`${heroData.name} - Profile Picture`}
                    className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-full object-cover shadow-large ring-4 ring-background"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-background rounded-2xl shadow-medium p-3 border border-border">
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
          >
            <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 lg:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading title="About Me" subtitle="Get to know me" />
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-4xl mx-auto mb-16"
          >
            <Card className="glass-card shadow-medium border-primary/10">
              <CardContent className="p-6 sm:p-8">
                <ul className="space-y-3 text-muted-foreground leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                    Computer Science Engineering undergraduate (CGPA 9.1/10)
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                    Experience as a Microsoft Learn Student Ambassador, Amazon ML Summer School Trainee, and Infosys Springboard AI Intern, ambassador at gov.in, GGSoC, Let's Upgrade
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                    Founder of the iLearn Community (500+ members)
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                    Active member of Google Women Techmakers
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                    Strong technical skills in C, Python, Java, JavaScript, SQL, and MERN Stack
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                    Passionate about building scalable, user-focused solutions
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                    Currently enhancing DSA and problem-solving skills
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                    Open to opportunities in software and full-stack development
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {aboutData.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div key={item.title} variants={fadeUp} custom={index * 0.15} className="group">
                  <Card className="shadow-soft hover:shadow-large transition-all duration-500 h-full border-transparent hover:border-primary/20 bg-card group-hover:-translate-y-1">
                    <CardHeader className="text-center pb-2">
                      <div className="mx-auto mb-3 p-3 rounded-xl bg-primary/10 text-primary w-fit group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-lg font-semibold">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-center text-sm leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Skills & Technologies" subtitle="What I work with" />
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5"
          >
            {Object.entries(skillsData).map(([category, data], categoryIndex) => {
              const IconComponent = data.icon;
              return (
                <motion.div key={category} variants={fadeUp} custom={categoryIndex * 0.1} className="group">
                  <Card className="shadow-soft hover:shadow-large h-full transition-all duration-500 border-transparent hover:border-primary/20 bg-card group-hover:-translate-y-1">
                    <CardHeader className="text-center pb-3">
                      <div className="mx-auto mb-2 p-2.5 rounded-xl bg-primary/10 text-primary w-fit group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-base font-semibold">{category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-1.5">
                        {data.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Tech Stack Progress */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.5}
            className="mt-12"
          >
            <Card className="shadow-soft border-primary/10 bg-card">
              <CardHeader className="text-center">
                <div className="mx-auto mb-3 p-3 rounded-xl bg-primary/10 text-primary w-fit">
                  <Server className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-semibold">Tech Stack Proficiency</CardTitle>
                <CardDescription>My expertise levels in core technologies</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-sm">MERN Stack</span>
                      <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">70%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '70%' }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true }}
                        className="h-full rounded-full bg-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-sm">Frontend</span>
                      <span className="text-xs font-bold text-accent bg-accent/10 px-2 py-0.5 rounded-full">90%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '90%' }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true }}
                        className="h-full rounded-full bg-accent"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-sm">Machine Learning</span>
                      <span className="text-xs font-bold text-ming-teal bg-ming-teal/10 px-2 py-0.5 rounded-full">30%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '30%' }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: 'hsl(184 35% 32%)' }}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 lg:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading title="Experience" subtitle="My journey" />
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {experienceData.map((experience, index) => (
              <motion.div key={experience.id} variants={fadeUp} custom={index * 0.12} className="group">
                <Card className={`shadow-soft hover:shadow-large transition-all duration-500 h-full border-transparent hover:border-primary/20 group-hover:-translate-y-1 relative overflow-hidden ${index % 2 === 0 ? 'bg-[#d4a8d6]/5' : 'bg-[#a8afd6]/5'}`}>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start gap-3">
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors duration-300 mb-1">
                          {experience.title}
                        </CardTitle>
                        <div className="text-sm font-medium text-foreground/80">{experience.company}</div>
                        <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                          <span>{experience.duration}</span>
                          <span>•</span>
                          <span>📍 {experience.location}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-center gap-2 shrink-0">
                        <div className="p-2 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                          {index % 3 === 0 ? <Star className="h-4 w-4" /> : 
                           index % 3 === 1 ? <Trophy className="h-4 w-4" /> : 
                           <Users className="h-4 w-4" />}
                        </div>
                        <span className="px-2.5 py-1 bg-primary text-primary-foreground rounded-full text-[10px] font-bold uppercase tracking-wider">
                          {experience.type}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {experience.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Featured Projects" subtitle="My recent work" />
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {projectsData.map((project, index) => (
              <motion.div key={project.id} variants={fadeUp} custom={index * 0.12} className="group">
                <Card className="shadow-soft hover:shadow-large transition-all duration-500 h-full border-transparent hover:border-primary/20 bg-card group-hover:-translate-y-1 overflow-hidden">
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-20">
                      <span className="px-2.5 py-1 bg-primary text-primary-foreground rounded-full text-[10px] font-bold uppercase tracking-wider shadow-medium">
                        Featured
                      </span>
                    </div>
                  )}
                  
                  <div className="h-52 relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                  </div>
                  
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <Button size="sm" className="flex-1 gradient-primary rounded-full text-xs h-9" asChild>
                        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
                          Live Demo
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 rounded-full text-xs h-9" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-3.5 w-3.5 mr-1.5" />
                          GitHub
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24 lg:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading title="Certifications & Credentials" subtitle="Achievements" />
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {certificationsData
              .filter((cert) => {
                const priorityCerts = ['Meta Full-Stack Developer Certificate', 'IBM AI Foundations', 'Coursera Git & GitHub Certificate', 'Oracle Cloud Infrastructure Generative AI Professional (1Z0-1127-25)'];
                if (showAllCertifications) return true;
                return priorityCerts.includes(cert.title);
              })
              .map((cert, index) => (
                <motion.div key={cert.id} variants={fadeUp} custom={index * 0.1} className="group">
                  <Card className="shadow-soft hover:shadow-large transition-all duration-500 border-transparent hover:border-primary/20 bg-card group-hover:-translate-y-1">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start gap-3">
                        <CardTitle className="text-sm font-semibold group-hover:text-primary transition-colors duration-300 flex-1">
                          {cert.title}
                        </CardTitle>
                        <div className="flex flex-col items-end gap-1.5 shrink-0">
                          <span className="px-2 py-0.5 bg-primary text-primary-foreground rounded-full text-[10px] font-bold">
                            {cert.year}
                          </span>
                          <span className="px-2 py-0.5 bg-accent/10 text-accent rounded text-[10px] font-medium">
                            {cert.level}
                          </span>
                        </div>
                      </div>
                      <CardDescription className="text-sm font-medium">
                        {cert.organization}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <Button variant="outline" size="sm" className="w-full rounded-full text-xs h-8 hover:bg-primary/5 hover:border-primary/30 hover:text-primary transition-all duration-300" asChild>
                        <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                          <Award className="h-3.5 w-3.5 mr-1.5" />
                          View Credential
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </motion.div>
          
          {!showAllCertifications && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mt-10"
            >
              <Button
                onClick={() => setShowAllCertifications(true)}
                variant="outline"
                className="rounded-full px-8 h-11 text-sm font-medium hover:bg-primary/5 hover:border-primary/30 hover:text-primary transition-all duration-300"
              >
                View More Certifications
                <ChevronDown className="h-4 w-4 ml-1.5" />
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <SectionHeading title="Resume" subtitle="My qualifications" />
            
            <div className="flex flex-col items-center gap-4">
              <p className="text-muted-foreground flex items-center gap-2">
                <Eye className="h-4 w-4" />
                View it online
              </p>
              <Button size="lg" className="gradient-primary rounded-full px-10 h-12 text-sm font-medium shadow-glow hover:shadow-large transition-all duration-300" asChild>
                <a href="https://drive.google.com/file/d/1kMdn0EhKfTSXS49aGcPbTLkRvu-Kkz5f/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
                  Resume
                  <ArrowUpRight className="h-4 w-4 ml-1.5" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 lg:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading title="Get In Touch" subtitle="Let's connect" />
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            <motion.div variants={fadeUp}>
              <Card className="shadow-soft border-primary/10 bg-card">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Send me a message</CardTitle>
                  <CardDescription className="text-sm">
                    Fill out the form and I'll get back to you soon.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="rounded-xl h-11"
                    />
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="rounded-xl h-11"
                    />
                    <Textarea
                      placeholder="Your Message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="rounded-xl resize-none"
                    />
                    <Button type="submit" className="w-full gradient-primary rounded-full h-11 text-sm font-medium">
                      <Mail className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={fadeUp} custom={0.15} className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Let's Connect</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
                </p>
              </div>
              
              <div className="space-y-3">
                {[
                  { icon: Mail, label: 'Email', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
                  { icon: MapPin, label: 'Location', value: contactInfo.location },
                  { icon: Linkedin, label: 'LinkedIn', value: 'View Profile', href: contactInfo.social.linkedin },
                  { icon: Github, label: 'GitHub', value: 'View Profile', href: contactInfo.social.github },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted transition-colors duration-200 group">
                    <div className="p-2 bg-primary/10 text-primary rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <item.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-primary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-sm font-medium">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="font-bold text-lg gradient-text">SK.</div>
            <div className="text-xs text-muted-foreground text-center">
              © 2025 Shruti Keshri · Hyderabad, India — All Rights Reserved
            </div>
            <div className="flex items-center gap-3">
              <a href={contactInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-primary rounded-full hover:bg-muted transition-all duration-200">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href={contactInfo.social.github} target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-primary rounded-full hover:bg-muted transition-all duration-200">
                <Github className="h-4 w-4" />
              </a>
              <a href={`mailto:${contactInfo.email}`} className="p-2 text-muted-foreground hover:text-primary rounded-full hover:bg-muted transition-all duration-200">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
