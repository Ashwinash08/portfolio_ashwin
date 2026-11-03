import React from 'react';

const Footer = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (id, e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        background: 'var(--surface-1)',
        padding: '2.5rem 1.5rem 2rem 1.5rem',
        marginTop: '1.5rem',
        position: 'relative',
        zIndex: 2
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.25rem',
          textAlign: 'center'
        }}
      >
        {/* Brand identity */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.35rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <span
              style={{
                fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif",
                fontSize: '1.25rem',
                fontWeight: 800,
                color: 'var(--text-primary)',
                letterSpacing: '-0.5px'
              }}
            >
              Ashwin E
            </span>
            <span
              style={{
                fontSize: '0.72rem',
                color: 'var(--accent)',
                background: 'var(--accent-soft)',
                padding: '0.15rem 0.55rem',
                borderRadius: 'var(--radius-pill)',
                fontWeight: 700
              }}
            >
              Portfolio
            </span>
          </div>
        </div>

        {/* Quick Nav Links */}
        <nav aria-label="Footer Navigation">
          <ul
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1.25rem',
              padding: 0,
              margin: 0,
              listStyle: 'none'
            }}
          >
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'education', label: 'Education' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Projects' },
              { id: 'experience', label: 'Experience' },
              { id: 'contact', label: 'Contact' }
            ].map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleNav(link.id, e)}
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Copyright & Technical specs */}
        <div
          style={{
            paddingTop: '0.85rem',
            borderTop: '1px solid var(--border-subtle)',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.35rem'
          }}
        >
          <p style={{ color: 'var(--text-muted)', fontSize: '0.76rem', margin: 0 }}>
            &copy; {currentYear}  Ashwin E. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

