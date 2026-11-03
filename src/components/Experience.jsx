import React from 'react';
import SpotlightCard from './SpotlightCard';
import { motion } from 'framer-motion';
import { experiences } from '../data/experience';

const Experience = () => {
    return (
        <section id="experience" aria-labelledby="experience-title" className="section" style={{ position: 'relative' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                    {/* Section Header with Horizontal Line (Image 1 Style) */}
                    <div className="section-header-line">
                        <h2 id="experience-title" className="section-title-line">INTERNSHIP</h2>
                        <div className="section-title-rule" />
                    </div>

                    {/* Timeline wrapper */}
                    <div
                        style={{ position: 'relative', marginBottom: '0.85rem' }}
                        className="experience-timeline-wrapper"
                    >
                        {/* Vertical timeline line */}
                        <div
                            aria-hidden="true"
                            style={{
                                position: 'absolute',
                                left: '0',
                                top: '0',
                                bottom: '0',
                                width: '3px',
                                background: 'linear-gradient(to bottom, var(--accent), transparent)',
                                borderRadius: '3px',
                                opacity: 0.5,
                                zIndex: 0
                            }}
                            className="timeline-line"
                        />

                        <div className="grid-cols-2" style={{ position: 'relative', zIndex: 1 }}>
                            {experiences.map((exp, idx) => (
                                <div key={idx} style={{ position: 'relative' }}>
                                    {/* Timeline dot marker */}
                                    <div
                                        aria-hidden="true"
                                        style={{
                                            position: 'absolute',
                                            top: '1.5rem',
                                            left: '-6px',
                                            width: '12px',
                                            height: '12px',
                                            borderRadius: 'var(--radius-pill)',
                                            background: 'var(--accent)',
                                            boxShadow: 'var(--glow-accent)',
                                            zIndex: 2,
                                            border: '2px solid var(--bg)'
                                        }}
                                        className="timeline-dot"
                                    />

                                    <SpotlightCard
                                        className="glass-card"
                                        spotlightColor="var(--card-hover-glow)"
                                        style={{ width: '100%', height: '100%', borderLeft: '3px solid var(--accent)' }}
                                    >
                                        <div style={{ padding: '1.2rem 1.35rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', gap: '0.65rem' }}>
                                            <div>
                                                {/* Top Meta Row */}
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.55rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                                                    <span style={{
                                                        fontSize: '0.72rem',
                                                        color: 'var(--accent)',
                                                        fontWeight: '700',
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '0.6px',
                                                        background: 'var(--accent-soft)',
                                                        padding: '0.2rem 0.65rem',
                                                        borderRadius: 'var(--radius-pill)',
                                                        border: '1px solid var(--border-subtle)'
                                                    }}>
                                                        {exp.duration} • {exp.type}
                                                    </span>

                                                    {exp.certificateUrl ? (
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
                                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-primary)' }} aria-hidden="true">
                                                                <circle cx="12" cy="8" r="6"></circle>
                                                                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                                                            </svg>
                                                            <span>View Certificate</span>
                                                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.7 }} aria-hidden="true">
                                                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                                                <polyline points="7 7 17 7 17 17"></polyline>
                                                            </svg>
                                                        </motion.a>
                                                    ) : (
                                                        <span
                                                            className="cert-btn-link"
                                                            style={{
                                                                display: 'inline-flex',
                                                                alignItems: 'center',
                                                                gap: '0.35rem',
                                                                padding: '0.24rem 0.7rem',
                                                                borderRadius: '20px',
                                                                fontSize: '0.72rem',
                                                                fontWeight: '600',
                                                                color: 'var(--text-muted)',
                                                                background: 'rgba(255, 255, 255, 0.02)',
                                                                border: '1px solid var(--card-border)'
                                                            }}
                                                        >
                                                            <span>Certificate on Request</span>
                                                        </span>
                                                    )}
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
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
