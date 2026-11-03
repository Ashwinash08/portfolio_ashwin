import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ashwinProfile from '../assets/ashwin-profile.jpg';

const floatingDots = [
  { size: 6, top: '12%', left: '8%', delay: 0 },
  { size: 5, top: '25%', left: '92%', delay: 0.5 },
  { size: 8, top: '72%', left: '5%', delay: 1.0 },
  { size: 4, top: '60%', left: '88%', delay: 0.8 },
  { size: 6, top: '85%', left: '45%', delay: 1.4 },
];

const Hero = ({ onNavigate }) => {
  const [imgError, setImgError] = useState(false);

  const handleNav = (pageId) => {
    if (onNavigate) {
      onNavigate(pageId);
    } else {
      const el = document.getElementById(pageId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const greetingText = "Hey, I'm";
  const letterVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.045, duration: 0.3, ease: [0.16, 1, 0.3, 1] }
    })
  };

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="hero-section"
      style={{
        position: 'relative',
        paddingTop: 'clamp(0.5rem, 1.5vw, 1.25rem)',
        overflow: 'hidden'
      }}
    >
      {/* Floating decorative dots */}
      {floatingDots.map((dot, i) => (
        <div
          key={i}
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: dot.top,
            left: dot.left,
            width: dot.size,
            height: dot.size,
            borderRadius: 'var(--radius-pill)',
            background: 'var(--accent-soft)',
            boxShadow: '0 0 10px var(--accent-soft)',
            pointerEvents: 'none',
            zIndex: 0,
            animation: `float ${3 + i * 0.5}s ease-in-out ${dot.delay}s infinite`
          }}
        />
      ))}

      <div className="container">
        {/* Clean hero frame */}
        <div className="hero-frame">
          {/* Responsive 2-Column Grid */}
          <div className="hero-grid-content">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="hero-text-col"
            >
              {/* Status Badge */}
              <div style={{ marginBottom: '0.85rem' }}>
                <span className="badge-pill hero-pill">
                  <span className="radar-dot" style={{ width: '7px', height: '7px' }}></span>
                  <span>MCA GRADUATE</span>
                </span>
              </div>

              {/* Letter-by-letter animated greeting */}
              <span
                style={{
                  fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                  fontWeight: '600',
                  color: 'var(--text-secondary)',
                  letterSpacing: '-0.2px',
                  display: 'block',
                  marginBottom: '0.2rem'
                }}
              >
                {greetingText.split('').map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ display: 'inline-block', whiteSpace: 'pre' }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>

              {/* Name */}
              <motion.h1
                id="hero-title"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif",
                  fontSize: 'clamp(2.8rem, 5.5vw, 4.8rem)',
                  fontWeight: '900',
                  lineHeight: '1.05',
                  letterSpacing: '-1.8px',
                  color: 'var(--text-primary)',
                  margin: '0 0 1rem 0'
                }}
              >
                Ashwin E
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontSize: 'clamp(0.92rem, 1.2vw, 1.08rem)',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.68',
                  maxWidth: '540px',
                  margin: '0 0 1.75rem 0',
                  letterSpacing: '-0.2px'
                }}
              >
                Final-semester MCA student at East Point College, Bangalore. Building production-ready web applications with React, Python, and Django, and developing practical AI/ML solutions.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                className="hero-cta-group"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              >
                <button
                  onClick={() => handleNav('projects')}
                  className="btn btn-primary"
                  style={{ padding: '0.62rem 1.55rem', fontSize: '0.9rem' }}
                >
                  <span>Explore Projects</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>

                <button
                  onClick={() => handleNav('contact')}
                  className="btn-touch"
                  style={{ fontSize: '0.88rem', padding: '0.38rem 0.45rem 0.38rem 1.2rem' }}
                >
                  <span>Get in touch</span>
                  <span className="btn-touch-icon">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                </button>
              </motion.div>

              {/* Quick Info Badges */}
              <motion.div
                className="hero-quick-stats"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                {['🎓 East Point College', '💻 Full-Stack & Python', '📍 Bangalore, India'].map((text, i) => (
                  <span
                    key={i}
                    className="badge-pill hero-pill"
                  >
                    {text}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column: Profile Picture (Original portrait without background cut) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="hero-photo-col"
            >
              <div className="hero-portrait-frame">
                {!imgError ? (
                  <img
                    src={ashwinProfile}
                    alt="Ashwin E - Full Stack Developer & MCA Student"
                    className="hero-portrait-img"
                    onError={() => setImgError(true)}
                    width="340"
                    height="408"
                    loading="eager"
                    fetchPriority="high"
                  />
                ) : (
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      minHeight: '350px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'var(--surface-1)',
                      color: 'var(--accent)',
                      gap: '0.5rem'
                    }}
                  >
                    <span style={{ fontSize: '2.5rem', fontWeight: '800' }}>AE</span>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: '600' }}>Ashwin E</span>
                  </div>
                )}

                {/* Floating badge */}
                <div className="hero-floating-badge" style={{ bottom: '0.75rem', left: '0.75rem' }}>
                  <span className="radar-dot" style={{ width: '6px', height: '6px' }}></span>
                  <span>Ready to Hire</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '1.5rem',
              paddingBottom: '0.5rem',
              position: 'relative',
              zIndex: 2
            }}
          >
            <button
              type="button"
              className="scroll-indicator"
              aria-label="Scroll down to About section"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.3rem',
                cursor: 'pointer',
                opacity: 0.65,
                background: 'none',
                border: 'none',
                padding: '0.25rem'
              }}
              onClick={() => handleNav('about')}
            >
              <span style={{ fontSize: '0.68rem', fontWeight: '600', color: 'var(--text-muted)', letterSpacing: '1px', textTransform: 'uppercase' }}>Scroll</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
