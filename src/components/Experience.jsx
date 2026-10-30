import React from 'react';
import GradientText from './GradientText';
import SpotlightCard from './SpotlightCard';
import { motion } from 'framer-motion';

const Experience = ({ onNavigate }) => {
    const experiences = [
        {
            company: "Excerpt Technologies PVT LTD",
            position: "AI, ML & DL Engineer Intern",
            duration: "3 Month Internship",
            type: "Trainee / Intern",
            description: "Worked on AI, ML & DL projects using Python. Focused on building and optimising machine learning models, working on neural networks and other AI concepts.",
            tech: ["Python", "AI", "ML", "DL"],
            certificateUrl: "/certificates/Certificate_ASHWIN . E.pdf"
        },
        {
            company: "VTech Integrated Solutions",
            position: "Web Development Intern",
            duration: "1 Month Internship",
            type: "Trainee / Intern",
            description: "Built full-stack web development components using Python and Django. Worked on backend routing, views, template rendering, and database integration.",
            tech: ["Python", "Django", "HTML5", "CSS3", "JavaScript"],
            certificateUrl: "/certificates/vtech-internship-certificate.pdf"
        }
    ];

    return (
        <section id="experience" className="section" style={{ position: 'relative' }}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="section-subtitle">Career Path</span>
                    <GradientText
                        className="section-title"
                        colors={['#ffffff', '#ff8c3b', '#ff5500', '#ffffff']}
                        animationSpeed={6}
                        showBorder={false}
                    >
                        Experience & Internships
                    </GradientText>
                </motion.div>

                <div className="grid-cols-2" style={{ marginBottom: '0.85rem' }}>
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.35, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ y: -2 }}
                        >
                            <SpotlightCard
                                className="glass-card"
                                spotlightColor="var(--card-hover-glow)"
                                style={{ width: '100%', height: '100%' }}
                            >
                                <div style={{ padding: '1.2rem 1.35rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', gap: '0.65rem' }}>
                                    <div>
                                        {/* Top Meta Row: Duration Badge + View Certificate Link */}
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.55rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                                            <span style={{
                                                fontSize: '0.72rem',
                                                color: 'var(--accent-primary)',
                                                fontWeight: '700',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.6px',
                                                background: 'rgba(255, 85, 0, 0.08)',
                                                padding: '0.2rem 0.65rem',
                                                borderRadius: '20px',
                                                border: '1px solid rgba(255, 85, 0, 0.2)'
                                            }}>
                                                {exp.duration} • {exp.type}
                                            </span>

                                            <motion.a
                                                whileHover={{ scale: 1.05, y: -1 }}
                                                whileTap={{ scale: 0.95 }}
                                                href={exp.certificateUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="cert-btn-link"
                                                style={{
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    gap: '0.35rem',
                                                    padding: '0.24rem 0.7rem',
                                                    borderRadius: '20px',
                                                    fontSize: '0.74rem',
                                                    fontWeight: '700',
                                                    color: 'var(--text-primary)',
                                                    background: 'rgba(255, 255, 255, 0.04)',
                                                    border: '1px solid var(--card-border)',
                                                    textDecoration: 'none',
                                                    transition: 'all 0.2s ease',
                                                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
                                                }}
                                            >
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-primary)' }}>
                                                    <circle cx="12" cy="8" r="6"></circle>
                                                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                                                </svg>
                                                <span>View Certificate</span>
                                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.7 }}>
                                                    <line x1="7" y1="17" x2="17" y2="7"></line>
                                                    <polyline points="7 7 17 7 17 17"></polyline>
                                                </svg>
                                            </motion.a>
                                        </div>

                                        <h3 style={{
                                            fontSize: '1.05rem',
                                            fontWeight: '800',
                                            color: 'var(--text-primary)',
                                            margin: '0 0 0.15rem 0'
                                        }}>
                                            {exp.company}
                                        </h3>
                                        <p style={{
                                            color: 'var(--accent-primary)',
                                            fontWeight: '600',
                                            fontSize: '0.84rem',
                                            margin: '0 0 0.55rem 0'
                                        }}>
                                            {exp.position}
                                        </p>

                                        <p style={{
                                            color: 'var(--text-secondary)',
                                            lineHeight: '1.55',
                                            fontSize: '0.84rem',
                                            margin: 0
                                        }}>
                                            {exp.description}
                                        </p>
                                    </div>

                                    <div style={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap', paddingTop: '0.55rem', borderTop: '1px solid var(--card-border)' }}>
                                        {exp.tech.map((skill, sIdx) => (
                                            <span key={sIdx} style={{
                                                fontSize: '0.7rem',
                                                color: 'var(--text-primary)',
                                                background: 'var(--bg-tertiary)',
                                                padding: '0.15rem 0.5rem',
                                                borderRadius: '5px',
                                                border: '1px solid var(--card-border)',
                                                fontWeight: '500'
                                            }}>
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

