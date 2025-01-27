"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Code2, Rocket, Atom, Cpu, BrainCircuit, Sun,
  Moon, Mail, Linkedin, Github, FlaskConical,
  CircuitBoard, BookOpen, GraduationCap, Paintbrush,
  Cog, Cloud, ChevronRight, LayoutTemplate
} from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          setActiveSection(section.id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enhanced projects data
  const projects = [
    {
      title: "Quantum Neural Interface",
      description: "Bridging quantum computing with neural networks using hybrid architectures",
      tech: ["Qiskit", "PyTorch", "Python"],
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%234B5563'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='system-ui' font-size='24'%3EQuantum Neural Interface%3C/text%3E%3C/svg%3E",
      icon: <BrainCircuit className="w-6 h-6" />,
      complexity: "Advanced"
    },
    {
      title: "AI Physics Simulator",
      description: "Real-time physics engine with ML-powered particle dynamics",
      tech: ["Rust", "WebAssembly", "Three.js"],
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%234B5563'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='system-ui' font-size='24'%3EAI Physics Simulator%3C/text%3E%3C/svg%3E",
      icon: <Atom className="w-6 h-6" />,
      complexity: "Intermediate"
    },
    {
      title: "Quantum Circuit Visualizer",
      description: "Interactive visualization tool for quantum computing workflows",
      tech: ["React", "WebGL", "TypeScript"],
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%234B5563'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='system-ui' font-size='24'%3EQuantum Circuit Visualizer%3C/text%3E%3C/svg%3E",
      icon: <CircuitBoard className="w-6 h-6" />,
      complexity: "Advanced"
    }
  ];

  // Enhanced skills data
  const skills = [
    { name: "Quantum Machine Learning", icon: <BrainCircuit className="w-8 h-8" /> },
    { name: "High-Performance Computing", icon: <Cpu className="w-8 h-8" /> },
    { name: "Scientific Visualization", icon: <Paintbrush className="w-8 h-8" /> },
    { name: "Cloud Quantum Systems", icon: <Cloud className="w-8 h-8" /> }
  ];

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'dark';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');

    // Enhanced scroll spy with better detection
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          setActiveSection(entry.target.id);
        }
      }
    }, { threshold: [0.2, 0.5, 0.8], rootMargin: '-100px 0px -100px 0px' });

    for (const section of document.querySelectorAll('section')) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">

      {/* Floating Particles Background */}
      <div className="fixed inset-0 opacity-20 dark:opacity-30 z-0">
        {Array.from({ length: 20 }, () => crypto.randomUUID()).map((uuid) => (
          <div
            key={uuid}
            className="absolute w-2 h-2 bg-purple-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Navigation with Active Indicators */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/50 dark:bg-black/30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            <Code2 className="inline mr-2 w-6 h-6 md:w-7 md:h-7 hover:rotate-12 transition-transform" />
            QUANTUM_DEV
          </h1>
          <div className="flex gap-2 sm:gap-4 md:gap-6">
            {['home', 'projects', 'skills', 'contact'].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  const element = document.getElementById(item);
                  if (element) {
                    element.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                }}
                className={`group flex items-center gap-2 transition-all ${activeSection === item
                  ? 'text-purple-600 dark:text-purple-400 scale-105'
                  : 'text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-300'
                  }`}
              >
                <div className="relative p-1.5 sm:p-2">
                  {item === 'home' && <BookOpen className="w-5 h-5 md:w-6 md:h-6" />}
                  {item === 'projects' && <Rocket className="w-5 h-5 md:w-6 md:h-6" />}
                  {item === 'skills' && <GraduationCap className="w-5 h-5 md:w-6 md:h-6" />}
                  {item === 'contact' && <Mail className="w-5 h-5 md:w-6 md:h-6" />}
                  <div className={`absolute inset-0 rounded-full bg-purple-400/10 ${activeSection === item
                    ? 'opacity-100 animate-ping-slow'
                    : 'opacity-0'
                    }`} />
                </div>
                <span className="hidden md:inline font-medium capitalize">{item}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section with Floating Effect */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-24 sm:pt-32 pb-12 sm:pb-16 relative z-10">
        <div className="text-center space-y-6 sm:space-y-8 transform hover:translate-y-[-10px] transition-transform duration-500">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in-up leading-tight">
            <span className="inline-block whitespace-nowrap bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent pb-2">
              Quantum Computing
            </span>
            <Atom className="inline-block w-12 h-12 sm:w-16 sm:h-16 ml-2 sm:ml-4 mt-2 sm:mt-4 animate-float" />
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            <FlaskConical className="inline mr-2 w-6 h-6 text-purple-600 dark:text-purple-400 animate-pulse" />
            Developing next-generation quantum solutions through innovative algorithms and hybrid architectures
          </p>
        </div>
      </section>

      {/* Projects Section with 3D Hover Effect */}
      <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 sm:mb-16 text-center">
            <Rocket className="inline-block w-10 h-10 sm:w-12 sm:h-12 mr-3 sm:mr-4 text-purple-600 dark:text-purple-400 animate-bounce-slow" />
            Pioneering Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group relative bg-white dark:bg-black/30 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 border border-gray-200 dark:border-white/10 hover:border-purple-400/50"
              >
                <div className="relative h-64 rounded-xl overflow-hidden mb-6 bg-gray-700">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform"
                    unoptimized
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <span className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-xl">
                    {project.icon}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={`${project.title}-${tech}`}
                      className="px-3 py-1.5 text-sm rounded-full bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 flex items-center gap-2 hover:scale-105 transition-transform"
                    >
                      <ChevronRight className="w-4 h-4" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section with Animated Grid */}
      <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 bg-purple-50 dark:bg-black/50 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 sm:mb-16 text-center">
            <Cpu className="inline-block w-10 h-10 sm:w-12 sm:h-12 mr-3 sm:mr-4 text-purple-600 dark:text-purple-400 animate-pulse" />
            Core Expertise
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="p-8 bg-white dark:bg-black/30 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-200 dark:border-white/10 group"
              >
                <div className="flex flex-col items-center">
                  <div className="mb-6 text-purple-600 dark:text-purple-400 group-hover:scale-125 transition-transform">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white text-center">
                    {skill.name}
                  </h3>
                  <div className="mt-4 h-1 w-16 bg-purple-400/20 rounded-full group-hover:w-24 transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Contact Section */}
      <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 relative">
        <div className="max-w-2xl mx-auto bg-white dark:bg-black/30 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 border border-gray-200 dark:border-white/10 hover:shadow-3xl transition-all duration-500 hover:-translate-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center">
            <Mail className="inline-block w-10 h-10 sm:w-12 sm:h-12 mr-3 sm:mr-4 text-purple-600 dark:text-purple-400 animate-float" />
            Let's Innovate
          </h2>
          <form className="space-y-4 sm:space-y-6">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-6 py-4 bg-purple-50 dark:bg-black/50 rounded-xl border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-purple-400 focus:outline-none text-gray-900 dark:text-white placeholder-gray-400 transition-all"
            />
            <textarea
              placeholder="Your quantum vision"
              rows={5}
              className="w-full px-6 py-4 bg-purple-50 dark:bg-black/50 rounded-xl border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-purple-400 focus:outline-none text-gray-900 dark:text-white placeholder-gray-400 transition-all"
            />
            <button
              type="submit"
              className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 rounded-xl text-white dark:text-gray-900 font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group"
            >
              <Mail className="w-6 h-6 group-hover:scale-125 transition-transform" />
              <span className="group-hover:translate-x-2 transition-transform">Launch Message</span>
            </button>
          </form>
          <div className="mt-8 flex justify-center gap-8">
            <a href="https://linkedin.com" className="text-purple-600 dark:text-purple-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Linkedin className="w-8 h-8 hover:scale-125 transition-transform" />
            </a>
            <a href="https://github.com" className="text-purple-600 dark:text-purple-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Github className="w-8 h-8 hover:scale-125 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}