import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeToggle = ({ theme: propTheme, onToggleTheme }) => {
  const [localTheme, setLocalTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved) return saved;
    return 'light';
  });

  const theme = propTheme !== undefined ? propTheme : localTheme;

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    if (propTheme === undefined) {
      document.documentElement.setAttribute('data-theme', localTheme);
      localStorage.setItem('portfolio-theme', localTheme);
    }
  }, [localTheme, propTheme]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleTheme = () => {
    if (onToggleTheme) {
      onToggleTheme();
    } else {
      setLocalTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="floating-actions-container" aria-label="Quick Actions">
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 15 }}
            transition={{ duration: 0.25 }}
            onClick={scrollToTop}
            className="floating-btn"
            title="Back to top"
            aria-label="Back to top"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
            <span className="floating-tooltip">Back to Top</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Theme Switcher Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={handleToggleTheme}
        className="floating-btn pulse-glow"
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        id="theme-toggle-btn"
      >
        <AnimatePresence mode="wait" initial={false}>
          {theme === 'dark' ? (
            <motion.div
              key="sun"
              initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.25 }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              {/* Sun Icon */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.25 }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              {/* Moon Icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </motion.div>
          )}
        </AnimatePresence>

        <span className="floating-tooltip">
          {theme === 'dark' ? '☀️ Switch to Light' : '🌙 Switch to Dark'}
        </span>
      </motion.button>
    </div>
  );
};

export default ThemeToggle;
