import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import BackgroundAura from './components/BackgroundAura';
import { motion, AnimatePresence } from 'framer-motion';

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' }
];

const SectionDivider = () => (
  <div className="section-divider-container" aria-hidden="true">
    <div className="section-divider-line" />
  </div>
);

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    return saved || 'dark'; // Dark theme matching the reference design by default
  });

  const [activeSection, setActiveSection] = useState('home');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Scroll spy to highlight active nav link based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);

      const scrollPosition = window.scrollY + 200;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <CustomCursor />
      <BackgroundAura />

      {/* Modern Sticky Navigation */}
      <Header
        currentPage={activeSection}
        onNavigate={navigateTo}
        pages={SECTIONS}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main style={{ position: 'relative', zIndex: 1 }}>
        {/* Hero Section Frame matching Reference Image */}
        <Hero onNavigate={navigateTo} />
        <SectionDivider />

        {/* About Section */}
        <About onNavigate={navigateTo} />
        <SectionDivider />

        {/* Academic Journey (Education first) */}
        <Education onNavigate={navigateTo} />
        <SectionDivider />

        {/* Skills & Technical Stack (then Skills) */}
        <Skills onNavigate={navigateTo} />
        <SectionDivider />

        {/* Featured Projects (and Projects) */}
        <Projects onNavigate={navigateTo} />
        <SectionDivider />

        {/* Career & Experience */}
        <Experience onNavigate={navigateTo} />
        <SectionDivider />

        {/* Get in Touch */}
        <Contact onNavigate={navigateTo} />
      </main>



      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="floating-actions-container"
          >
            <button
              onClick={scrollToTop}
              className="floating-btn"
              title="Back to Top"
              aria-label="Back to top"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
