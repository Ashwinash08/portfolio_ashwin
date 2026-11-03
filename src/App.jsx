import React, { useState, useEffect, lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import BackgroundAura from './components/BackgroundAura';
import { motion, AnimatePresence } from 'framer-motion';

// Code-split below-the-fold sections for instant initial paint & optimal Core Web Vitals
const About = lazy(() => import('./components/About'));
const Education = lazy(() => import('./components/Education'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' }
];

const SectionFallback = () => (
  <div
    style={{
      minHeight: '280px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--text-muted)',
      fontSize: 'var(--fs-sm)',
      fontFamily: 'var(--font-mono)'
    }}
    aria-hidden="true"
  >
    <div className="radar-dot" style={{ width: '8px', height: '8px', marginRight: '8px' }} />
    Loading section...
  </div>
);

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Enforce Digital Emerald / Green Code Dark Theme permanently
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.documentElement.style.colorScheme = 'dark';
    try {
      localStorage.setItem('portfolio-theme', 'dark');
    } catch {
      // Ignore storage errors in private browsing
    }
  }, []);

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
      {/* Skip to Main Content Link for Keyboard and Screen Reader Accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <CustomCursor />
      <BackgroundAura />

      {/* Clean Top Navigation (Stays at top of page, does not follow to other sections) */}
      <Header
        currentPage={activeSection}
        onNavigate={navigateTo}
        pages={SECTIONS}
      />

      <main id="main-content" tabIndex="-1" style={{ position: 'relative', zIndex: 1, outline: 'none' }}>
        {/* Hero Section */}
        <Hero onNavigate={navigateTo} />

        <Suspense fallback={<SectionFallback />}>
          {/* About Section */}
          <About />
          <br />

          {/* Academic Journey & Skills */}
          <Education />
          <br />
          <Skills />
          <br />

          {/* Featured Projects */}
          <Projects />
          <br />

          {/* Career & Experience */}
          <Experience />
          <br />

          {/* Get in Touch */}
          <Contact />
        </Suspense>
      </main>

      {/* Semantic Footer */}
      <Footer onNavigate={navigateTo} />

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
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
