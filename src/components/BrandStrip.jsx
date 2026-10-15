import React from 'react';
import { motion } from 'framer-motion';

const BrandStrip = () => {
  const brands = [
    {
      name: 'Supa Blox',
      tech: 'React & Frontend',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="3" fill="currentColor" />
        </svg>
      )
    },
    {
      name: 'Hype Blox',
      tech: 'Python & Django',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.8L18 8.5v7l-6 3.7-6-3.7v-7l6-3.7z" />
        </svg>
      )
    },
    {
      name: 'Frame Blox',
      tech: 'Cloud & Database',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <line x1="12" y1="3" x2="12" y2="21" />
          <path d="M12 3a9 9 0 0 1 0 18" fill="currentColor" opacity="0.6" />
        </svg>
      )
    },
    {
      name: 'Ultra Blox',
      tech: 'AI & Neural Systems',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <circle cx="9" cy="12" r="6" />
          <circle cx="15" cy="12" r="6" fill="currentColor" opacity="0.4" />
        </svg>
      )
    }
  ];

  return (
    <div className="brand-strip">
      <div className="container">
        <div className="brand-strip-container">
          <div className="brand-strip-label">
            Trusted by Brands I've Helped Shape
          </div>

          <div className="brand-items">
            {brands.map((brand, idx) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="brand-item"
                title={`${brand.name} - ${brand.tech}`}
              >
                <span className="brand-item-icon">{brand.icon}</span>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span>{brand.name}</span>
                  <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: '500' }}>
                    {brand.tech}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandStrip;
