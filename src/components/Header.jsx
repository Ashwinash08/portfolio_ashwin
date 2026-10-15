import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = ({ currentPage = 'home', onNavigate, pages = [], theme = 'dark', onToggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId) => {
    if (onNavigate) {
      onNavigate(pageId);
    } else {
      const element = document.getElementById(pageId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className="site-header"
        style={{
          background: scrolled ? 'var(--header-bg)' : 'transparent',
          borderBottom: scrolled ? '1px solid var(--header-border)' : '1px solid transparent',
          boxShadow: scrolled ? 'var(--header-shadow)' : 'none'
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo matching the reference "Folioblox" clean typography */}
          <button
            onClick={() => handleNavClick('home')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              padding: 0
            }}
          >
            <div style={{
              width: '28px',
              height: '28px',
              borderRadius: '8px',
              background: 'var(--accent-gradient)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontWeight: '900',
              fontSize: '0.92rem',
              boxShadow: '0 2px 10px var(--accent-glow)'
            }}>
              A
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
              <span style={{
                fontSize: '1.2rem',
                fontWeight: '800',
                letterSpacing: '-0.4px',
                color: 'var(--text-primary)',
                lineHeight: 1.1
              }}>
                Ashwin E<span style={{ color: 'var(--accent-primary)' }}>.</span>
              </span>

            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="site-header-nav desktop-nav">
            {pages.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTA & Mobile Menu Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* Header Theme Switcher */}
            <button
              onClick={onToggleTheme}
              className="theme-toggle-header-btn"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--card-border)',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--text-primary)',
                transition: 'all 0.25s ease'
              }}
            >
              {theme === 'dark' ? (
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
              ) : (
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#ff5500" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              )}
            </button>

            {/* Signature "Get in touch ->" Button */}
            <button
              onClick={() => handleNavClick('contact')}
              className="btn-touch desktop-nav"
            >
              <span>Get in touch</span>
              <span className="btn-touch-icon">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              className="mobile-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Navigation Menu"
              style={{
                display: 'none',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--card-border)',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                borderRadius: '50%',
                width: '38px',
                height: '38px',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {menuOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              top: '72px',
              left: '1rem',
              right: '1rem',
              zIndex: 999,
              background: 'var(--card-bg)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid var(--card-border)',
              borderRadius: '24px',
              padding: '1.25rem',
              boxShadow: '0 20px 40px rgba(0,0,0,0.7)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.65rem'
            }}
          >
            {pages.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                style={{
                  textAlign: 'left',
                  background: currentPage === link.id ? 'var(--accent-glow-subtle)' : 'transparent',
                  color: currentPage === link.id ? 'var(--accent-primary)' : 'var(--text-primary)',
                  border: 'none',
                  padding: '0.75rem 1rem',
                  borderRadius: '12px',
                  fontWeight: '600',
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <span>{link.label}</span>
                {currentPage === link.id && <span style={{ color: 'var(--accent-primary)' }}>•</span>}
              </button>
            ))}

            <button
              onClick={() => handleNavClick('contact')}
              className="btn-touch"
              style={{ width: '100%', justifyContent: 'space-between', marginTop: '0.5rem' }}
            >
              <span>Get in touch</span>
              <span className="btn-touch-icon">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
