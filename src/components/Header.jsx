import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = ({ currentPage = 'home', onNavigate, pages = [] }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleBtnRef = useRef(null);

  // Lock body scroll and handle focus trap when mobile menu is open
  useEffect(() => {
    if (!menuOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus the first item when menu opens
    const timer = setTimeout(() => {
      if (menuRef.current) {
        const firstFocusable = menuRef.current.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (firstFocusable) firstFocusable.focus();
      }
    }, 50);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setMenuOpen(false);
        if (toggleBtnRef.current) toggleBtnRef.current.focus();
        return;
      }

      if (e.key === 'Tab' && menuRef.current) {
        const focusables = menuRef.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (focusables.length === 0) return;

        const firstElement = focusables[0];
        const lastElement = focusables[focusables.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

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
    if (toggleBtnRef.current) toggleBtnRef.current.focus();
  };

  return (
    <>
      <header
        className="site-header"
        style={{
          background: 'transparent',
          borderBottom: 'none',
          boxShadow: 'none',
          position: 'relative'
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
              background: 'var(--accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--on-accent)',
              fontWeight: '900',
              fontSize: '0.92rem',
              boxShadow: 'var(--shadow-1)'
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
                Ashwin E<span style={{ color: 'var(--accent)' }}>.</span>
              </span>

            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="site-header-nav desktop-nav" aria-label="Main navigation">
            {pages.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  style={{ position: 'relative' }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPill"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: 'var(--radius-pill)',
                        background: 'var(--accent)',
                        zIndex: 0
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span style={{ position: 'relative', zIndex: 1, color: isActive ? 'var(--on-accent)' : undefined }}>
                    {link.label}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Action CTA & Mobile Menu Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* View Resume Header CTA */}
            <a
              href="/ASHWIN_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm desktop-nav"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.82rem',
                padding: '0.35rem 0.85rem',
                borderRadius: '30px',
                textDecoration: 'none'
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
              </svg>
              <span>Resume</span>
            </a>

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
              ref={toggleBtnRef}
              className="mobile-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation-menu"
              style={{
                display: 'none',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--card-border)',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                minWidth: '44px',
                minHeight: '44px',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {menuOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
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
            id="mobile-navigation-menu"
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              top: '76px',
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
              gap: '0.65rem',
              maxHeight: 'calc(100vh - 90px)',
              overflowY: 'auto',
              WebkitOverflowScrolling: 'touch'
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
                  alignItems: 'center',
                  minHeight: '44px'
                }}
              >
                <span>{link.label}</span>
                {currentPage === link.id && <span style={{ color: 'var(--accent-primary)' }}>•</span>}
              </button>
            ))}

            <a
              href="/ASHWIN_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{
                width: '100%',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                minHeight: '44px',
                borderRadius: '12px',
                fontSize: '0.9rem',
                fontWeight: '600',
                textDecoration: 'none',
                marginTop: '0.5rem'
              }}
              onClick={() => setMenuOpen(false)}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
              </svg>
              <span>Download Resume</span>
            </a>

            <button
              onClick={() => handleNavClick('contact')}
              className="btn-touch"
              style={{ width: '100%', justifyContent: 'space-between', marginTop: '0.25rem' }}
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
