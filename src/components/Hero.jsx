import React from 'react';
import { motion } from 'framer-motion';
import ashwinProfile from '../assets/ashwin-profile.jpg';

const Hero = ({ onNavigate }) => {
  const handleNav = (pageId) => {
    if (onNavigate) {
      onNavigate(pageId);
    } else {
      const el = document.getElementById(pageId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section" style={{ position: 'relative', paddingTop: 'clamp(0.5rem, 1.5vw, 1.25rem)' }}>
      <div className="container">
        {/* Main Hero Card Frame with Warm Glow */}
        <div className="hero-frame">
          {/* Subtle top ambient lighting enhancement */}
          <div
            style={{
              position: 'absolute',
              top: '-20%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80%',
              height: '65%',
              background: 'radial-gradient(ellipse at center, rgba(255, 110, 20, 0.42) 0%, rgba(255, 60, 0, 0) 75%)',
              filter: 'blur(55px)',
              pointerEvents: 'none',
              zIndex: 0
            }}
          />

          {/* Responsive 2-Column Grid: Text on Left | Photo on Right */}
          <div className="hero-grid-content">
            {/* Left Column: Greeting, Name, Bio, CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="hero-text-col"
            >
              {/* Status Badge */}
              <div style={{ marginBottom: '0.85rem' }}>
                <span
                  className="badge-pill"
                  style={{
                    background: 'rgba(0, 0, 0, 0.45)',
                    borderColor: 'rgba(255, 255, 255, 0.16)',
                    padding: '0.35rem 1rem',
                    fontSize: '0.82rem'
                  }}
                >
                  <span className="radar-dot" style={{ width: '7px', height: '7px' }}></span>
                  <span>MCA Graduate | Software Developer</span>
                </span>
              </div>

              {/* Greeting */}
              <span
                style={{
                  fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                  fontWeight: '500',
                  color: 'rgba(255, 255, 255, 0.85)',
                  letterSpacing: '-0.2px',
                  display: 'block',
                  marginBottom: '0.2rem'
                }}
              >
                Hey, I'm
              </span>

              {/* Name */}
              <h1
                style={{
                  fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif",
                  fontSize: 'clamp(2.8rem, 5.5vw, 4.8rem)',
                  fontWeight: '900',
                  lineHeight: '1.05',
                  letterSpacing: '-1.8px',
                  color: '#ffffff',
                  margin: '0 0 1rem 0'
                }}
              >
                Ashwin E
              </h1>

              {/* Description */}
              <p
                style={{
                  fontSize: 'clamp(0.92rem, 1.2vw, 1.08rem)',
                  color: 'rgba(255, 255, 255, 0.82)',
                  lineHeight: '1.68',
                  maxWidth: '540px',
                  margin: '0 0 1.75rem 0',
                  letterSpacing: '-0.2px'
                }}
              >
                I am a passionate developer currently pursuing Master Of Computer Applications [MCA]. I specialize in building exceptional digital experiences and human-centered products.
              </p>

              {/* Action Buttons */}
              <div className="hero-cta-group">
                <button
                  onClick={() => handleNav('projects')}
                  className="btn btn-primary"
                  style={{ padding: '0.62rem 1.55rem', fontSize: '0.9rem' }}
                >
                  <span>Explore Projects</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                </button>
              </div>

              {/* Quick Info Badges */}
              <div className="hero-quick-stats">
                <span className="badge-pill" style={{ background: 'rgba(255, 255, 255, 0.05)', fontSize: '0.76rem' }}>
                  🎓 East Point College
                </span>
                <span className="badge-pill" style={{ background: 'rgba(255, 255, 255, 0.05)', fontSize: '0.76rem' }}>
                  💻 Full-Stack & Python
                </span>
                <span className="badge-pill" style={{ background: 'rgba(255, 255, 255, 0.05)', fontSize: '0.76rem' }}>
                  📍 Bangalore, India
                </span>
              </div>
            </motion.div>

            {/* Right Column: Ashwin's Profile Picture */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="hero-photo-col"
            >
              <div className="hero-photo-card">
                {/* Subtle warm backlight glow */}
                <div
                  style={{
                    position: 'absolute',
                    inset: '-10%',
                    background: 'radial-gradient(circle at center, rgba(255, 85, 0, 0.32) 0%, transparent 65%)',
                    filter: 'blur(35px)',
                    zIndex: 0,
                    pointerEvents: 'none'
                  }}
                />

                {/* Profile Photo Image Frame */}
                <div className="hero-photo-inner">
                  <img
                    src={ashwinProfile}
                    alt="Ashwin E - Full Stack Developer & MCA Student"
                    className="hero-profile-img"
                  />

                  {/* Gentle gradient vignette overlay at the bottom */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '30%',
                      background: 'linear-gradient(to top, rgba(10, 10, 12, 0.88), transparent)',
                      pointerEvents: 'none'
                    }}
                  />

                  {/* Corner Floating Chip */}
                  <div className="hero-floating-badge">
                    <span className="radar-dot" style={{ width: '6px', height: '6px' }}></span>
                    <span>Ready to Hire</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-grid-content {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1.2fr 0.9fr;
          align-items: center;
          gap: clamp(1.5rem, 4vw, 3.5rem);
          min-height: 480px;
        }

        .hero-text-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .hero-cta-group {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .hero-quick-stats {
          display: flex;
          gap: 0.45rem;
          flex-wrap: wrap;
        }

        .hero-photo-col {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          width: 100%;
          margin: 0 auto;
        }

        .hero-photo-card {
          position: relative;
          width: 100%;
          max-width: 340px;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-photo-inner {
          position: relative;
          width: 100%;
          margin: 0 auto;
          aspect-ratio: 4 / 4.8;
          border-radius: 28px;
          overflow: hidden;
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.08) 0%, rgba(20, 20, 26, 0.9) 100%);
          border: 1px solid rgba(255, 255, 255, 0.14);
          box-shadow: 0 24px 50px -10px rgba(0, 0, 0, 0.75);
          z-index: 1;
        }

        .hero-profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero-photo-inner:hover .hero-profile-img {
          transform: scale(1.03);
        }

        .hero-floating-badge {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: rgba(10, 10, 12, 0.78);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 0.35rem 0.85rem;
          border-radius: 50px;
          color: #ffffff;
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: -0.2px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
          z-index: 2;
        }

        /* Responsive Breakpoints for Tablet & Mobile */
        @media (max-width: 960px) {
          .hero-grid-content {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            text-align: center !important;
            gap: 2rem !important;
            min-height: auto;
            padding-top: 1rem;
            padding-bottom: 1rem;
            width: 100% !important;
          }

          .hero-text-col {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            text-align: center !important;
            width: 100% !important;
            order: 2 !important;
          }

          .hero-photo-col {
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
            width: 100% !important;
            margin: 0 auto !important;
            order: 1 !important;
          }

          .hero-photo-card {
            margin: 0 auto !important;
            max-width: 270px !important;
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
          }

          .hero-photo-inner {
            margin: 0 auto !important;
          }

          .hero-cta-group {
            justify-content: center !important;
            align-items: center !important;
          }

          .hero-quick-stats {
            justify-content: center !important;
            align-items: center !important;
          }

          .hero-desc-p {
            margin-left: auto !important;
            margin-right: auto !important;
            text-align: center !important;
          }
        }

        @media (max-width: 480px) {
          .hero-photo-card {
            max-width: 220px !important;
            margin: 0 auto !important;
          }
          .hero-cta-group {
            width: 100%;
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
