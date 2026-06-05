import { useState, useEffect } from 'react';
import {
  Github, Linkedin, Code2, Database, Globe,
  Terminal, Layers, Zap, Server, Shield, ArrowRight, Mail,
  MapPin, MessageCircle, ChevronDown, Sparkles, Palette,
  Cloud, Cpu, Layers3, Box, Star, Sun, Moon, Languages, type LucideIcon
} from 'lucide-react';

// Translations
const translations = {
  en: {
    welcome: 'Welcome to my portfolio',
    fullStack: 'Full Stack',
    developer: 'Developer',
    description: 'Building scalable web applications with modern technologies. Transforming ideas into reality through clean code and creative solutions.',
    viewWork: 'View My Work',
    contactMe: 'Contact Me',
    scrollDown: 'Scroll Down',
    aboutMe: 'About Me',
    whoAmI: 'Who Am I?',
    bio: "I'm Sefonx, a passionate Full Stack Developer from Saudi Arabia. I build modern, scalable, and high-performance web applications with clean code and the best practices.",
    quote: '"I love turning ideas into real-world solutions."',
    moreAbout: 'More About Me',
    mySkills: 'My Skills',
    technicalSkills: 'Technical Skills',
    frontend: 'Frontend',
    backend: 'Backend',
    whatIDo: 'What I Do',
    myServices: 'My Services',
    featuredProjects: 'Featured Projects',
    myRecentWorks: 'My Recent Works',
    viewAll: 'View All Projects',
    testimonials: 'Testimonials',
    whatPeopleSay: 'What People Say',
    getInTouch: 'Get In Touch',
    contactMeTitle: 'Contact Me',
    contactDesc: "I'm always open to new opportunities and collaborations. Feel free to reach out!",
    sendMessage: 'Send Message',
    yourName: 'Your Name',
    yourEmail: 'Your Email',
    yourMessage: 'Your Message',
    hireMe: 'Hire Me',
    age: 'Age',
    yearsExp: 'Years Exp.',
    saudiArabia: 'Saudi Arabia',
    projectsCompleted: 'Projects Completed',
    selfbotCommands: 'Selfbot Commands',
    dedication: 'Dedication %'
  },
  ar: {
    welcome: 'مرحباً بكم في ملفي الشخصي',
    fullStack: 'مطور كامل',
    developer: 'الم(stack)',
    description: 'بناء تطبيقات ويب قابلة للتطوير باستخدام التقنيات الحديثة. تحويل الأفكار إلى واقع من خلال الكود النظيف والحلول الإبداعية.',
    viewWork: 'عرض أعمالي',
    contactMe: 'تواصل معي',
    scrollDown: 'مرر للأسفل',
    aboutMe: 'عني',
    whoAmI: 'من أنا؟',
    bio: 'أنا Sefonx، مطور Full Stack شغوف من المملكة العربية السعودية. أقوم ببناء تطبيقات ويب حديثة وقابلة للتطوير وأداء عالٍ مع كود نظيف وأفضل الممارسات.',
    quote: '"أحب تحويل الأفكار إلى حلول حقيقية."',
    moreAbout: 'المزيد عني',
    mySkills: 'مهاراتي',
    technicalSkills: 'المهارات التقنية',
    frontend: 'الواجهة الأمامية',
    backend: 'الواجهة الخلفية',
    whatIDo: 'ماذا أفعل',
    myServices: 'خدماتي',
    featuredProjects: 'المشاريع المميزة',
    myRecentWorks: 'أعمالي الأخيرة',
    viewAll: 'عرض كل المشاريع',
    testimonials: 'آراء العملاء',
    whatPeopleSay: 'ماذا يقولون',
    getInTouch: 'تواصل معي',
    contactMeTitle: 'تواصل معي',
    contactDesc: 'أنا دائماً منفتح على الفرص والتعاون الجديد. لا تتردد في التواصل!',
    sendMessage: 'إرسال الرسالة',
    yourName: 'اسمك',
    yourEmail: 'بريدك الإلكتروني',
    yourMessage: 'رسالتك',
    hireMe: 'وظفني',
    age: 'العمر',
    yearsExp: 'سنوات الخبرة',
    saudiArabia: 'المملكة العربية السعودية',
    projectsCompleted: 'مشاريع مكتملة',
    selfbotCommands: 'أوامر السيلف بوت',
    dedication: 'التفاني %'
  }
};

// Pure Black Background Component
const PureBlackBackground = () => {
  return (
    <div className="fixed inset-0 bg-black z-0">
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );
};

// Pure White Background Component
const PureWhiteBackground = () => {
  return (
    <div className="fixed inset-0 bg-gray-50 z-0">
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );
};

// Animated Counter
const AnimatedCounter = ({ target, duration = 2000 }: { target: number; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count}+</span>;
};

// Skill Card Component - Clean Design Without Progress Bar
interface SkillCardProps {
  icon: LucideIcon;
  name: string;
  color: string;
}

const SkillCard = ({ icon: Icon, name, color }: SkillCardProps) => (
  <div className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-xl sm:rounded-2xl p-2.5 sm:p-4 md:p-5 hover:border-red-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-red-500/10">
    <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl" />
    <div className="relative z-10 flex flex-col items-center text-center">
      <div
        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${color}15`, color }}
      >
        <Icon size={18} className="sm:text-xl md:text-2xl" />
      </div>
      <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-300 group-hover:text-white transition-colors truncate w-full">{name}</span>
    </div>
  </div>
);

// Service Card Component
interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard = ({ icon: Icon, title, description, features }: ServiceCardProps) => (
  <div className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-2xl sm:rounded-3xl p-5 sm:p-8 hover:border-red-500/40 transition-all duration-500 overflow-hidden">
    <div className="absolute -top-20 -right-20 w-40 h-40 bg-red-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    <div className="relative z-10">
      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-red-500/20">
        <Icon size={24} className="sm:text-2xl text-white" />
      </div>
      <h3 className="text-base sm:text-xl font-bold text-white mb-2 sm:mb-3">{title}</h3>
      <p className="text-gray-500 text-xs sm:text-sm mb-4 sm:mb-5 leading-relaxed">{description}</p>
      <ul className="space-y-2 sm:space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-400">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

// Project Card Component
interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
  gradient: string;
  featured?: boolean;
}

const ProjectCard = ({ title, subtitle, description, tags, icon: Icon, gradient, featured }: ProjectCardProps) => (
  <div className={`group relative bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-2xl sm:rounded-3xl overflow-hidden hover:border-red-500/40 transition-all duration-500 ${featured ? 'ring-1 ring-red-500/30' : ''}`}>
    <div className={`h-32 sm:h-44 ${gradient} flex items-center justify-center relative overflow-hidden`}>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      <div className="absolute inset-0 bg-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <Icon size={36} className="sm:text-4xl text-white/80 relative z-10 group-hover:scale-110 transition-transform duration-500" />
    </div>
    <div className="p-4 sm:p-6">
      <div className="flex items-start justify-between mb-2 sm:mb-3">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-white mb-1">{title}</h3>
          <span className="text-xs sm:text-sm font-semibold text-red-400">{subtitle}</span>
        </div>
        <button className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-500/20 transition-all duration-300">
          <ArrowRight size={12} className="sm:text-sm" />
        </button>
      </div>
      <p className="text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {tags.map((tag, i) => (
          <span key={i} className="px-2 py-1 sm:px-3 sm:py-1.5 text-xs bg-white/[0.05] border border-white/[0.08] rounded-full text-gray-400 hover:text-white hover:border-white/15 transition-all">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

// Testimonial Card
interface TestimonialProps {
  name: string;
  role: string;
  text: string;
  avatar: string;
}

const TestimonialCard = ({ name, role, text, avatar }: TestimonialProps) => (
  <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-2xl sm:rounded-3xl p-4 sm:p-6 hover:border-white/10 transition-all duration-500">
    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
      <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-red-500/20 to-red-600/20 flex items-center justify-center text-white font-bold text-sm sm:text-lg">
        {avatar}
      </div>
      <div>
        <h4 className="text-white font-semibold text-sm sm:text-base">{name}</h4>
        <p className="text-gray-500 text-xs sm:text-sm">{role}</p>
      </div>
    </div>
    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed italic mb-3 sm:mb-4">"{text}"</p>
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={12} className="sm:text-sm text-red-500 fill-red-500" />
      ))}
    </div>
  </div>
);

// Main App Component
function App() {
  const [activeTab, setActiveTab] = useState('frontend');
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  // Navigation
  const navItems = ['Home', 'About', 'Skills', 'Services', 'Projects', 'Contact'];

  // Frontend Skills - Clean Design
  const frontendSkills = [
    { icon: Code2, name: 'HTML5', color: '#E34F26' },
    { icon: Palette, name: 'CSS3', color: '#1572B6' },
    { icon: Zap, name: 'JavaScript', color: '#F7DF1E' },
    { icon: Box, name: 'React', color: '#61DAFB' },
    { icon: Layers, name: 'Next.js', color: '#000000' },
    { icon: Layers3, name: 'Tailwind', color: '#06B6D4' },
    { icon: Cpu, name: 'TypeScript', color: '#3178C6' },
    { icon: Globe, name: 'REST APIs', color: '#4A90E2' },
    { icon: Layers, name: 'Redux', color: '#764ABC' },
    { icon: Box, name: 'Framer Motion', color: '#FF0055' },
    { icon: Palette, name: 'SASS/SCSS', color: '#CC6699' },
    { icon: Globe, name: 'Responsive', color: '#2ECC71' },
  ];

  // Backend Skills - Clean Design
  const backendSkills = [
    { icon: Terminal, name: 'Node.js', color: '#339933' },
    { icon: Server, name: 'Express.js', color: '#000000' },
    { icon: Database, name: 'MongoDB', color: '#47A248' },
    { icon: Database, name: 'PostgreSQL', color: '#4169E1' },
    { icon: Code2, name: 'Python', color: '#3776AB' },
    { icon: Shield, name: 'Auth', color: '#F05032' },
    { icon: Cloud, name: 'Docker', color: '#2496ED' },
    { icon: Server, name: 'REST APIs', color: '#4A90E2' },
    { icon: Database, name: 'Redis', color: '#DC382D' },
    { icon: Terminal, name: 'Linux', color: '#FCC624' },
    { icon: Shield, name: 'Security', color: '#FF6B6B' },
    { icon: Cloud, name: 'CI/CD', color: '#2496ED' },
  ];

  // Services Data
  const services = [
    {
      icon: Layers,
      title: 'Frontend Development',
      description: 'Building responsive, interactive, and performant web applications with modern frameworks.',
      features: ['React & Next.js', 'Tailwind CSS', 'TypeScript', 'Animation & Effects']
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Creating robust APIs and server-side applications with scalable architecture.',
      features: ['Node.js & Express', 'Database Design', 'REST APIs', 'Authentication & Security']
    },
    {
      icon: Terminal,
      title: 'Bot Development',
      description: 'Developing custom Discord bots and automation tools with advanced features.',
      features: ['Discord.js', 'Command Systems', 'Auto-moderation', 'Custom Features']
    },
    {
      icon: Cloud,
      title: 'DevOps & Deployment',
      description: 'Setting up CI/CD pipelines, containerization, and cloud infrastructure.',
      features: ['Docker', 'Git', 'Performance', 'Security']
    }
  ];

  // Projects Data
  const projects = [
    {
      title: 'Selfbot Advanced',
      subtitle: '750+ Commands',
      description: 'Advanced Discord selfbot with 750+ commands including automation, moderation, fun, and advanced features.',
      tags: ['Node.js', 'Discord.js', 'JavaScript'],
      icon: MessageCircle,
      gradient: 'bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900',
      featured: true
    },
    {
      title: 'E-Commerce Platform',
      subtitle: 'Full Stack',
      description: 'Modern e-commerce platform with product management, cart system, and secure payment integration.',
      tags: ['Next.js', 'MongoDB', 'Tailwind'],
      icon: Box,
      gradient: 'bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900'
    },
    {
      title: 'Portfolio Website',
      subtitle: 'Personal',
      description: 'Modern & responsive portfolio website with smooth animations and premium design.',
      tags: ['React', 'Tailwind', 'Framer Motion'],
      icon: Globe,
      gradient: 'bg-gradient-to-br from-amber-900 via-orange-900 to-yellow-900'
    },
    {
      title: 'Admin Dashboard',
      subtitle: 'Analytics',
      description: 'Admin dashboard with analytics, charts, and user management system for business insights.',
      tags: ['React', 'Node.js', 'Chart.js'],
      icon: Layers,
      gradient: 'bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900'
    },
    {
      title: 'Automation System',
      subtitle: 'Custom Tools',
      description: 'Custom automation and utility tools built for personal productivity and workflow optimization.',
      tags: ['Python', 'Node.js', 'APIs'],
      icon: Zap,
      gradient: 'bg-gradient-to-br from-rose-900 via-pink-900 to-fuchsia-900'
    },
    {
      title: 'System Integration',
      subtitle: 'Full Stack',
      description: 'Complete system with integrated dashboard for real-time monitoring and analytics.',
      tags: ['React', 'Python', 'PostgreSQL'],
      icon: Server,
      gradient: 'bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900'
    }
  ];

  // Testimonials
  const testimonials = [
    {
      name: 'Ahmed Hassan',
      role: 'Client',
      text: 'Sefonx delivered an exceptional project with great attention to detail. Highly recommended!',
      avatar: 'AH'
    },
    {
      name: 'Sarah Khan',
      role: 'Colleague',
      text: 'Amazing developer with excellent communication skills. The code quality is outstanding.',
      avatar: 'SK'
    },
    {
      name: 'Mohammed Ali',
      role: 'Client',
      text: 'Professional, reliable, and talented. Will definitely work with Sefonx again.',
      avatar: 'MA'
    }
  ];

  // Get current skills based on active tab
  const currentSkills = activeTab === 'frontend' ? frontendSkills : backendSkills;

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-black' : 'bg-gray-50'} ${theme === 'dark' ? 'text-white' : 'text-gray-900'} overflow-x-hidden`}>
      {/* Background */}
      {theme === 'dark' ? <PureBlackBackground /> : <PureWhiteBackground />}

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrollY > 50 ? `${theme === 'dark' ? 'bg-black/95' : 'bg-white/95'} backdrop-blur-2xl border-b border-white/[0.05]` : ''
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <a href="#home" className="text-xl sm:text-2xl font-bold tracking-tight">
            <span className="text-red-500">Se</span>fonx
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-6 sm:gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-xs sm:text-sm font-medium transition-colors relative group ${
                  activeSection === item.toLowerCase() ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-red-500 transition-all duration-300 ${
                  activeSection === item.toLowerCase() ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </a>
            ))}
          </div>

          {/* Control Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 bg-white/[0.03] border border-white/[0.06] rounded-full hover:bg-white/[0.05] transition-all duration-300 text-xs sm:text-sm"
            >
              <Languages size={14} className="sm:text-base text-red-400" />
              <span className="text-gray-400 hidden sm:inline">{language === 'en' ? 'عربي' : 'EN'}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-white/[0.03] border border-white/[0.06] rounded-full hover:bg-white/[0.05] transition-all duration-300"
            >
              {theme === 'dark' ? (
                <Sun size={16} className="sm:text-lg text-gray-400" />
              ) : (
                <Moon size={16} className="sm:text-lg text-gray-600" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-white/[0.03] border border-white/[0.06] rounded-full hover:bg-white/[0.05] transition-all duration-300"
            >
              <div className="w-4 h-4 flex flex-col justify-center gap-1">
                <div className={`w-full h-0.5 bg-gray-400 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <div className={`w-full h-0.5 bg-gray-400 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                <div className={`w-full h-0.5 bg-gray-400 transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </div>
            </button>

            {/* Hire Me Button - Hidden on mobile */}
            <a href="#contact" className="hidden lg:flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2.5 bg-gradient-to-r from-red-600 to-red-500 rounded-full text-xs sm:text-sm font-semibold hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300">
              {t.hireMe}
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 right-0 ${theme === 'dark' ? 'bg-black/95' : 'bg-white/95'} backdrop-blur-2xl border-b border-white/[0.05] transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                  activeSection === item.toLowerCase() ? 'text-white bg-white/[0.05]' : 'text-gray-400 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {item}
              </a>
            ))}
            <a href="#contact" className="block px-4 py-2 text-sm font-semibold text-center bg-gradient-to-r from-red-600 to-red-500 rounded-lg mt-4">
              {t.hireMe}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative pt-16 sm:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 grid lg:grid-cols-2 gap-8 sm:gap-12 items-center relative z-10">
          {/* Text Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/[0.03] border border-white/[0.06] rounded-full text-xs sm:text-sm text-gray-400">
              <Sparkles size={14} className="sm:text-base text-red-400" />
              {t.welcome}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
              <span className="text-white">I am </span>
              <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-500 bg-clip-text text-transparent">Sefonx</span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-400">
              <span className="text-red-400">{t.fullStack}</span> {t.developer}
            </h2>
            <p className="text-gray-500 text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
              {t.description}
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <a href="#projects" className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-red-500 rounded-full font-semibold text-sm sm:text-base hover:shadow-xl hover:shadow-red-500/20 transition-all duration-300 flex items-center gap-2">
                {t.viewWork}
                <ArrowRight size={16} className="sm:text-lg group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="px-6 sm:px-8 py-3 sm:py-4 border border-white/10 rounded-full font-semibold text-sm sm:text-base hover:bg-white/5 transition-all duration-300 text-gray-400 hover:text-white">
                {t.contactMe}
              </a>
            </div>
            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start pt-2 sm:pt-4">
              {[
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: MessageCircle, href: '#', label: 'Discord' },
              ].map(({ icon: Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-500/10 hover:border-red-500/20 transition-all duration-300"
                >
                  <Icon size={18} className="sm:text-xl" />
                </a>
              ))}
            </div>
          </div>

          {/* Avatar & Badges */}
          <div className="flex flex-col items-center lg:items-end gap-6 sm:gap-10">
            {/* Avatar with Profile Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-500 rounded-full blur-3xl opacity-20" />
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full p-0.5 bg-gradient-to-br from-red-600 to-red-500">
                <div className={`w-full h-full rounded-full ${theme === 'dark' ? 'bg-black' : 'bg-white'} p-1`}>
                  <div className={`w-full h-full rounded-full ${theme === 'dark' ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-200 to-gray-300'} flex items-center justify-center overflow-hidden`}>
                    <img
                      src="/profile.jpg"
                      alt="Sefonx Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              {/* Glow Ring */}
              <div className="absolute inset-4 rounded-full border-2 border-red-500/20 animate-pulse" />
            </div>

            {/* Badges */}
            <div className="flex gap-2 sm:gap-4 flex-wrap justify-center">
              <div className={`px-4 sm:px-6 py-3 sm:py-4 ${theme === 'dark' ? 'bg-white/[0.03]' : 'bg-white'} backdrop-blur-xl border ${theme === 'dark' ? 'border-white/[0.06]' : 'border-gray-200'} rounded-xl sm:rounded-2xl text-center hover:border-white/10 transition-all`}>
                <div className="text-2xl sm:text-3xl font-black text-white">18</div>
                <div className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider">{t.age}</div>
              </div>
              <div className={`px-4 sm:px-6 py-3 sm:py-4 ${theme === 'dark' ? 'bg-white/[0.03]' : 'bg-white'} backdrop-blur-xl border ${theme === 'dark' ? 'border-white/[0.06]' : 'border-gray-200'} rounded-xl sm:rounded-2xl text-center hover:border-white/10 transition-all`}>
                <div className="text-2xl sm:text-3xl font-black text-white">5+</div>
                <div className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider">{t.yearsExp}</div>
              </div>
              <div className={`px-4 sm:px-6 py-3 sm:py-4 ${theme === 'dark' ? 'bg-white/[0.03]' : 'bg-white'} backdrop-blur-xl border ${theme === 'dark' ? 'border-white/[0.06]' : 'border-gray-200'} rounded-xl sm:rounded-2xl text-center hover:border-white/10 transition-all`}>
                <div className="text-2xl sm:text-3xl font-black text-red-400 flex items-center justify-center gap-1">
                  <MapPin size={18} className="sm:text-xl" />
                </div>
                <div className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider">{t.saudiArabia}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-[10px] sm:text-xs text-gray-600 uppercase tracking-widest">{t.scrollDown}</span>
          <ChevronDown size={16} className="sm:text-xl text-gray-600" />
        </div>
      </section>

      {/* Stats Bar */}
      <section className={`relative py-6 sm:py-8 md:py-12 border-y ${theme === 'dark' ? 'border-white/[0.03]' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 relative z-10">
          {[
            { icon: Code2, value: 750, label: t.projectsCompleted },
            { icon: Terminal, value: 5, label: t.yearsExp },
            { icon: MessageCircle, value: 750, label: t.selfbotCommands },
            { icon: Zap, value: 100, label: t.dedication }
          ].map((stat, i) => (
            <div key={i} className="flex items-center xs:items-start gap-2.5 sm:gap-4 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-red-500/10 flex items-center justify-center text-red-400 group-hover:bg-red-500/20 transition-colors shrink-0">
                <stat.icon size={16} className="sm:text-xl md:text-2xl" />
              </div>
              <div className="min-w-0">
                <div className="text-xl sm:text-2xl md:text-3xl font-black text-white">
                  <AnimatedCounter target={stat.value} />
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-gray-500 truncate">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <div>
                <span className="text-red-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">{t.aboutMe}</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-2 sm:mt-3 text-white">{t.whoAmI}</h2>
              </div>
              <p className="text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed">
                {t.bio}
              </p>
              <blockquote className="border-l-2 border-red-500/50 pl-4 text-gray-500 italic text-sm sm:text-base lg:text-lg">
                {t.quote}
              </blockquote>

              {/* Info Table */}
              <div className="space-y-2 sm:space-y-4">
                {[
                  { icon: MapPin, label: t.age, value: '18 Years Old' },
                  { icon: Terminal, label: t.yearsExp, value: '5+ Years' },
                  { icon: Globe, label: 'Location', value: t.saudiArabia },
                  { icon: Mail, label: 'Email', value: 'blalfrhan600@gmail.com' }
                ].map((item, i) => (
                  <div key={i} className={`flex items-center gap-2.5 sm:gap-4 p-2.5 sm:p-4 ${theme === 'dark' ? 'bg-white/[0.02] border-white/[0.04]' : 'bg-white border-gray-200'} rounded-lg sm:rounded-xl border hover:border-white/10 transition-all`}>
                    <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 shrink-0">
                      <item.icon size={14} className="sm:text-lg" />
                    </div>
                    <span className="text-gray-500 text-[10px] sm:text-sm w-14 sm:w-24 shrink-0">{item.label}</span>
                    <span className="text-white font-medium text-[10px] sm:text-sm truncate">{item.value}</span>
                  </div>
                ))}
              </div>

              <a href="#contact" className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-white/[0.03] border border-white/[0.06] rounded-full hover:bg-white/[0.05] hover:border-red-500/30 transition-all text-xs sm:text-sm text-gray-300">
                {t.moreAbout}
                <ArrowRight size={14} className="sm:text-base" />
              </a>
            </div>

            {/* Right Visual - Globe */}
            <div className="relative flex justify-center">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent rounded-full blur-3xl" />
                <div className={`w-full h-full rounded-full ${theme === 'dark' ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' : 'bg-gradient-to-br from-gray-200 via-gray-100 to-white'} border ${theme === 'dark' ? 'border-white/[0.05]' : 'border-gray-200'} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-6 sm:inset-8 rounded-full border border-white/[0.03]" />
                  <div className="absolute inset-12 sm:inset-16 rounded-full border border-white/[0.02]" />
                  <Globe size={48} className="sm:text-5xl md:text-6xl text-red-400/60 relative z-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 sm:py-16 lg:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-red-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">{t.mySkills}</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-2 sm:mt-3 text-white">{t.technicalSkills}</h2>
          </div>

          {/* Skill Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-12">
            <button
              onClick={() => setActiveTab('frontend')}
              className={`px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-4 rounded-full font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 flex items-center gap-1.5 sm:gap-2 md:gap-3 ${
                activeTab === 'frontend'
                  ? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-500/30'
                  : `${theme === 'dark' ? 'bg-white/[0.03] border-white/[0.06]' : 'bg-white border-gray-200'} text-gray-400 hover:text-white`
              }`}
            >
              <Layers size={14} className="sm:text-lg md:text-xl" />
              {t.frontend}
            </button>
            <button
              onClick={() => setActiveTab('backend')}
              className={`px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-4 rounded-full font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 flex items-center gap-1.5 sm:gap-2 md:gap-3 ${
                activeTab === 'backend'
                  ? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-500/30'
                  : `${theme === 'dark' ? 'bg-white/[0.03] border-white/[0.06]' : 'bg-white border-gray-200'} text-gray-400 hover:text-white`
              }`}
            >
              <Server size={14} className="sm:text-lg md:text-xl" />
              {t.backend}
            </button>
          </div>

          {/* Skills Grid - Improved Responsive for all devices */}
          <div className="grid grid-cols-3 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4 xl:grid-cols-6 gap-2 xs:gap-2.5 sm:gap-3 md:gap-4">
            {currentSkills.map((skill, i) => (
              <div
                key={i}
                className="animate-fade-in"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <SkillCard {...skill} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 lg:py-24 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-red-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">{t.whatIDo}</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-2 sm:mt-3 text-white">{t.myServices}</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {services.map((service, i) => (
              <ServiceCard key={i} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
            <div>
              <span className="text-red-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">{t.featuredProjects}</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-2 sm:mt-3 text-white">{t.myRecentWorks}</h2>
            </div>
            <a href="#" className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-white/[0.03] border border-white/[0.06] rounded-full hover:bg-white/[0.05] transition-all text-xs sm:text-sm text-gray-400">
              {t.viewAll}
              <ArrowRight size={14} className="sm:text-base" />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-red-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">{t.testimonials}</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-2 sm:mt-3 text-white">{t.whatPeopleSay}</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((testimonial, i) => (
              <TestimonialCard key={i} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-red-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">{t.getInTouch}</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-2 sm:mt-3 text-white">{t.contactMeTitle}</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-16">
            {/* Contact Info */}
            <div className="space-y-4 sm:space-y-6">
              <p className="text-gray-400 text-sm sm:text-base">
                {t.contactDesc}
              </p>

              <div className="space-y-3 sm:space-y-4">
                {[
                  { icon: Mail, label: 'Email', value: 'blalfrhan600@gmail.com' },
                  { icon: MapPin, label: 'Location', value: t.saudiArabia },
                  { icon: MessageCircle, label: 'Discord', value: 'Sefonx#0000' }
                ].map((item, i) => (
                  <div key={i} className={`flex items-center gap-4 sm:p-5 ${theme === 'dark' ? 'bg-white/[0.02] border-white/[0.04]' : 'bg-white border-gray-200'} rounded-xl border`}>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400">
                      <item.icon size={18} className="sm:text-xl" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm text-gray-500">{item.label}</div>
                      <div className="text-white font-medium text-sm sm:text-base">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-4 sm:space-y-5" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder={t.yourName}
                className={`w-full px-4 sm:px-5 py-3 sm:py-4 ${theme === 'dark' ? 'bg-white/[0.03] border-white/[0.06]' : 'bg-white border-gray-200'} rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:border-red-500/50 transition-all text-sm sm:text-base`}
                required
              />
              <input
                type="email"
                placeholder={t.yourEmail}
                className={`w-full px-4 sm:px-5 py-3 sm:py-4 ${theme === 'dark' ? 'bg-white/[0.03] border-white/[0.06]' : 'bg-white border-gray-200'} rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:border-red-500/50 transition-all text-sm sm:text-base`}
                required
              />
              <textarea
                rows={5}
                placeholder={t.yourMessage}
                className={`w-full px-4 sm:px-5 py-3 sm:py-4 ${theme === 'dark' ? 'bg-white/[0.03] border-white/[0.06]' : 'bg-white border-gray-200'} rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:border-red-500/50 transition-all resize-none text-sm sm:text-base`}
                required
              />
              <button
                type="submit"
                className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-red-500 rounded-xl font-semibold text-sm sm:text-base hover:shadow-xl hover:shadow-red-500/30 transition-all duration-300 flex items-center justify-center gap-2"
              >
                {t.sendMessage}
                <ArrowRight size={16} className="sm:text-lg" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`border-t ${theme === 'dark' ? 'border-white/[0.03]' : 'border-gray-200'} py-6 sm:py-8`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-lg sm:text-2xl font-bold">
              <span className="text-red-500">Se</span>fonx
            </div>
            <div className="text-gray-500 text-xs sm:text-sm">
              © 2025 Sefonx. All rights reserved.
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              {[
                { icon: Github, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: MessageCircle, href: '#' },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/[0.03] flex items-center justify-center text-gray-500 hover:text-white hover:bg-red-500/20 transition-all"
                >
                  <Icon size={16} className="sm:text-lg" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;