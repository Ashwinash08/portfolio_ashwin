import React from 'react';
import GradientText from './GradientText';
import SpotlightCard from './SpotlightCard';
import { motion } from 'framer-motion';

const Education = ({ onNavigate }) => {
    const educationData = [
        {
            degree: "Master of Computer Applications (MCA)",
            institution: "East Point College Of Higher Education",
            period: "2024 - 2026",
            status: "Pursuing",
            gradeType: "CGPA",
            score: "8.5 / 10",
            percentage: "85%",
            progress: 85,
            icon: "🎓"
        },
        {
            degree: "Bachelor of Computer Application (BCA)",
            institution: "Vagdevi Vilas College",
            period: "2021 - 2024",
            status: "Completed",
            gradeType: "CGPA",
            score: "7.84 / 10",
            percentage: "78.4%",
            progress: 78.4,
            icon: "📜"
        },
        {
            degree: "Pre-University Course (PCMC)",
            institution: "Narayana PU College",
            period: "2019 - 2021",
            status: "Completed",
            gradeType: "Percentage",
            score: "88%",
            percentage: "88%",
            progress: 88,
            icon: "🏫"
        },
        {
            degree: "Secondary School Leaving Certificate (SSLC)",
            institution: "K K English High School",
            period: "2018 - 2019",
            status: "Completed",
            gradeType: "Percentage",
            score: "76.32%",
            percentage: "76.32%",
            progress: 76.32,
            icon: "🎒"
        }
    ];

    return (
        <section id="education" className="section" style={{ position: 'relative' }}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="section-subtitle">Academic Journey</span>
                    <GradientText
                        className="section-title"
                        colors={['#ffffff', '#ff8c3b', '#ff5500', '#ffffff']}
                        animationSpeed={6}
                        showBorder={false}
                    >
                        Education
                    </GradientText>
                </motion.div>

                <div className="education-grid">
                    {educationData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.35, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ y: -2 }}
                        >
                            <SpotlightCard
                                className="glass-card"
                                spotlightColor="var(--card-hover-glow)"
                                style={{ height: '100%', overflow: 'hidden' }}
                            >
                                <div style={{
                                    padding: 'clamp(0.95rem, 1.5vw, 1.3rem)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    height: '100%',
                                    gap: '0.75rem'
                                }}>
                                    <div>
                                        {/* Top Meta: Icon + Degree + Status Chip (Responsive Flex) */}
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'flex-start',
                                            gap: '0.75rem',
                                            marginBottom: '0.45rem',
                                            flexWrap: 'wrap'
                                        }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flex: '1 1 200px' }}>
                                                <div style={{
                                                    width: '40px',
                                                    height: '40px',
                                                    borderRadius: '12px',
                                                    background: 'rgba(79, 70, 229, 0.08)',
                                                    border: '1px solid rgba(79, 70, 229, 0.18)',
                                                    backdropFilter: 'blur(12px)',
                                                    WebkitBackdropFilter: 'blur(12px)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontSize: '1.35rem',
                                                    flexShrink: 0,
                                                    boxShadow: '0 2px 8px rgba(79, 70, 229, 0.08)'
                                                }}>
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <span style={{
                                                        fontSize: '0.72rem',
                                                        color: 'var(--text-muted)',
                                                        fontFamily: 'JetBrains Mono, monospace',
                                                        fontWeight: '600'
                                                    }}>
                                                        {item.period}
                                                    </span>
                                                    <h3 style={{
                                                        fontSize: 'clamp(0.92rem, 1.2vw, 1.05rem)',
                                                        fontWeight: '800',
                                                        color: 'var(--text-primary)',
                                                        margin: '0.1rem 0 0 0',
                                                        lineHeight: '1.3'
                                                    }}>
                                                        {item.degree}
                                                    </h3>
                                                </div>
                                            </div>

                                            <span style={{
                                                fontSize: '0.72rem',
                                                fontWeight: '700',
                                                padding: '0.22rem 0.65rem',
                                                borderRadius: '20px',
                                                background: item.status === 'Pursuing' ? 'rgba(16, 185, 129, 0.12)' : 'rgba(79, 70, 229, 0.08)',
                                                color: item.status === 'Pursuing' ? '#10b981' : 'var(--accent-primary)',
                                                border: item.status === 'Pursuing' ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid rgba(79, 70, 229, 0.2)',
                                                whiteSpace: 'nowrap',
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '0.35rem',
                                                backdropFilter: 'blur(12px)',
                                                WebkitBackdropFilter: 'blur(12px)'
                                            }}>
                                                {item.status === 'Pursuing' && <span className="radar-dot" style={{ width: '6px', height: '6px' }}></span>}
                                                {item.status}
                                            </span>
                                        </div>

                                        {/* Institution */}
                                        <p style={{
                                            color: 'var(--accent-primary)',
                                            fontWeight: '600',
                                            fontSize: 'clamp(0.82rem, 1vw, 0.88rem)',
                                            margin: '0.15rem 0 0 0',
                                            lineHeight: '1.35'
                                        }}>
                                            {item.institution}
                                        </p>
                                    </div>

                                    {/* Clean Frosted Glass Score Card */}
                                    <div style={{
                                        background: 'var(--bg-tertiary)',
                                        borderRadius: '10px',
                                        padding: '0.65rem 0.85rem',
                                        border: '1px solid var(--card-border)',
                                        backdropFilter: 'blur(14px)',
                                        WebkitBackdropFilter: 'blur(14px)',
                                        boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.2)'
                                    }}>
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            flexWrap: 'wrap',
                                            gap: '0.3rem'
                                        }}>
                                            <span style={{ fontSize: '0.76rem', fontWeight: '600', color: 'var(--text-secondary)' }}>
                                                {item.gradeType}: <strong style={{ color: 'var(--text-primary)' }}>{item.score}</strong>
                                            </span>
                                            <span style={{
                                                fontSize: '0.74rem',
                                                fontWeight: '700',
                                                color: '#10b981',
                                                background: 'rgba(16, 185, 129, 0.1)',
                                                padding: '0.15rem 0.5rem',
                                                borderRadius: '5px',
                                                fontFamily: 'JetBrains Mono, monospace',
                                                border: '1px solid rgba(16, 185, 129, 0.2)'
                                            }}>
                                                {item.percentage}
                                            </span>
                                        </div>
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

export default Education;

