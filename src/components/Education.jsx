import React from 'react';
import SpotlightCard from './SpotlightCard';
import { motion } from 'framer-motion';
import { educationData } from '../data/education';

const Education = () => {
    return (
        <section id="education" aria-labelledby="education-title" className="section" style={{ position: 'relative' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                    {/* Section Header with Horizontal Line */}
                    <div className="section-header-line">
                        <h2 id="education-title" className="section-title-line">EDUCATION</h2>
                        <div className="section-title-rule" />
                    </div>

                    {/* Education Cards Grid (2x2 on Desktop, 1-col on Tablet & Mobile) */}
                    <div className="education-grid">
                        {educationData.map((item, index) => {
                            const isPursuing = item.status === 'Pursuing';
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.35, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                                    whileHover={{ y: -4 }}
                                    style={{ height: '100%' }}
                                >
                                    <SpotlightCard
                                        className="glass-card education-card"
                                        spotlightColor="var(--card-hover-glow)"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-between',
                                            padding: 'clamp(1rem, 2vw, 1.45rem)',
                                            position: 'relative',
                                            overflow: 'hidden'
                                        }}
                                    >
                                        <div>
                                            {/* Top Meta Header: Icon + Degree + Period */}
                                            <div style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'flex-start',
                                                gap: '0.75rem',
                                                marginBottom: '0.85rem'
                                            }}>
                                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                                    <div style={{
                                                        width: '38px',
                                                        height: '38px',
                                                        borderRadius: '10px',
                                                        background: 'var(--accent-soft)',
                                                        border: '1px solid var(--border-subtle)',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        fontSize: '1.2rem',
                                                        flexShrink: 0
                                                    }}>
                                                        {item.icon || '🎓'}
                                                    </div>
                                                    <div>
                                                        <span style={{
                                                            fontSize: '0.72rem',
                                                            fontFamily: 'var(--font-mono)',
                                                            color: 'var(--accent)',
                                                            textTransform: 'uppercase',
                                                            letterSpacing: '0.08em',
                                                            display: 'block',
                                                            marginBottom: '0.2rem'
                                                        }}>
                                                            {item.gradeType === 'CGPA' ? 'Degree Program' : 'Academic Course'}
                                                        </span>
                                                        <h3 style={{
                                                            fontSize: 'clamp(0.96rem, 1.15vw, 1.1rem)',
                                                            fontWeight: '800',
                                                            color: 'var(--text-primary)',
                                                            margin: 0,
                                                            lineHeight: 1.3
                                                        }}>
                                                            {item.degree}
                                                        </h3>
                                                    </div>
                                                </div>

                                                <span style={{
                                                    fontSize: '0.76rem',
                                                    fontFamily: 'var(--font-mono)',
                                                    fontWeight: '700',
                                                    color: 'var(--accent-hover)',
                                                    background: 'rgba(255, 255, 255, 0.04)',
                                                    border: '1px solid var(--border-subtle)',
                                                    padding: '0.25rem 0.65rem',
                                                    borderRadius: 'var(--radius-pill)',
                                                    whiteSpace: 'nowrap',
                                                    flexShrink: 0
                                                }}>
                                                    {item.period}
                                                </span>
                                            </div>

                                            {/* Institution Row */}
                                            <div style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.45rem',
                                                marginBottom: '1rem',
                                                color: 'var(--text-secondary)',
                                                fontSize: '0.88rem'
                                            }}>
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0, opacity: 0.8 }}>
                                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                                </svg>
                                                <span style={{ fontWeight: '500' }}>{item.institution}</span>
                                            </div>
                                        </div>

                                        {/* Bottom Score & Status Row */}
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            flexWrap: 'wrap',
                                            gap: '0.5rem',
                                            paddingTop: '0.85rem',
                                            borderTop: '1px solid var(--border-subtle)',
                                            marginTop: '0.5rem'
                                        }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                                                {item.gradeType === 'CGPA' ? (
                                                    <span style={{
                                                        fontSize: '0.84rem',
                                                        color: 'var(--text-secondary)',
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        gap: '0.35rem'
                                                    }}>
                                                        <span>CGPA:</span>
                                                        <strong style={{ color: 'var(--text-primary)', fontWeight: '800' }}>{item.score}</strong>
                                                        {item.percentage && (
                                                            <span style={{ color: 'var(--text-muted)' }}>
                                                                ({item.percentage})
                                                            </span>
                                                        )}
                                                    </span>
                                                ) : (
                                                    <span style={{
                                                        fontSize: '0.84rem',
                                                        color: 'var(--text-secondary)',
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        gap: '0.35rem'
                                                    }}>
                                                        <span>Percentage:</span>
                                                        <strong style={{ color: 'var(--text-primary)', fontWeight: '800' }}>{item.score}</strong>
                                                    </span>
                                                )}
                                            </div>

                                            <span style={{
                                                fontSize: '0.72rem',
                                                fontWeight: '700',
                                                padding: '0.2rem 0.65rem',
                                                borderRadius: 'var(--radius-pill)',
                                                background: isPursuing ? 'var(--accent-soft)' : 'rgba(255, 255, 255, 0.05)',
                                                color: isPursuing ? 'var(--accent)' : 'var(--text-muted)',
                                                border: isPursuing ? '1px solid var(--accent)' : '1px solid var(--border-subtle)',
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '0.35rem'
                                            }}>
                                                {isPursuing && <span className="radar-dot" style={{ width: '5px', height: '5px' }}></span>}
                                                {item.status}
                                            </span>
                                        </div>
                                    </SpotlightCard>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
