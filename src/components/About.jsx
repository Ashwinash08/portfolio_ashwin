import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" aria-labelledby="about-title" className="section" style={{ position: 'relative' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                    {/* Section Header with Horizontal Line (Image 1 Style) */}
                    <div className="section-header-line">
                        <h2 id="about-title" className="section-title-line">ABOUT</h2>
                        <div className="section-title-rule" />
                    </div>

                    {/* Main About Section */}
                    <div className="about-header-grid" style={{ marginBottom: 0 }}>
                        {/* Left Column */}
                        <div>
                            <span style={{
                                fontSize: '0.85rem',
                                fontWeight: 800,
                                color: 'var(--accent)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.08em',
                                display: 'block',
                                marginBottom: '0.75rem'
                            }}>
                                Background
                            </span>

                            <h3
                                style={{
                                    fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif",
                                    fontSize: 'clamp(1.8rem, 3.8vw, 2.75rem)',
                                    fontWeight: '800',
                                    lineHeight: '1.2',
                                    letterSpacing: '-0.8px',
                                    color: 'var(--text-primary)',
                                    margin: 0
                                }}
                            >
                                Final Semester MCA Student
                            </h3>
                        </div>

                        {/* Right Column */}
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                gap: '1.25rem'
                            }}
                        >
                            <p
                                style={{
                                    fontSize: 'clamp(0.98rem, 1.25vw, 1.1rem)',
                                    fontWeight: '500',
                                    lineHeight: '1.7',
                                    color: 'var(--text-primary)',
                                    letterSpacing: '0',
                                    maxWidth: '65ch',
                                    margin: 0
                                }}
                            >
                                I am currently pursuing the final semester of my <strong>MCA (Master of Computer Applications)</strong> at East Point College of Higher Education, Bangalore. With hands-on internship experience in both full-stack web development and AI/ML, I thrive on crafting clean, performant software.
                            </p>

                            <p
                                style={{
                                    fontSize: 'clamp(0.88rem, 1.1vw, 0.96rem)',
                                    color: 'var(--text-secondary)',
                                    lineHeight: '1.7',
                                    letterSpacing: '0',
                                    maxWidth: '65ch',
                                    margin: 0
                                }}
                            >
                                Actively seeking full-time software developer opportunities, internships, and entry-level engineering roles where I can contribute to production-grade systems, solve real-world engineering challenges, and deliver measurable value from day one.
                            </p>

                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    flexWrap: 'wrap',
                                    gap: '1rem',
                                    paddingTop: '0.5rem'
                                }}
                            >
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                                        Current Status
                                    </span>
                                    <span style={{ fontSize: '0.88rem', color: 'var(--accent-hover)', fontWeight: '700' }}>
                                        Open & Ready for Opportunities
                                    </span>
                                </div>

                                <motion.a
                                    whileHover={{ scale: 1.04, y: -2 }}
                                    whileTap={{ scale: 0.96 }}
                                    href="/ASHWIN_Resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.55rem',
                                        padding: '0.55rem 1.25rem',
                                        fontSize: '0.86rem',
                                        fontWeight: '700',
                                        borderRadius: '30px',
                                        textDecoration: 'none'
                                    }}
                                >
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                        <polyline points="14 2 14 8 20 8"></polyline>
                                        <line x1="16" y1="13" x2="8" y2="13"></line>
                                        <line x1="16" y1="17" x2="8" y2="17"></line>
                                        <polyline points="10 9 9 9 8 9"></polyline>
                                    </svg>
                                    <span>View Resume</span>
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="7" y1="17" x2="17" y2="7"></line>
                                        <polyline points="7 7 17 7 17 17"></polyline>
                                    </svg>
                                </motion.a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
