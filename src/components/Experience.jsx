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
            tech: ["Python", "AI", "ML", "DL"]
        },
        {
            company: "VTech Integrated Solutions",
            position: "Web Development Intern",
            duration: "1 Month Internship",
            type: "Trainee / Intern",
            description: "Built full-stack web development components using Python and Django. Worked on backend routing, views, template rendering, and database integration.",
            tech: ["Python", "Django", "HTML5", "CSS3", "JavaScript"]
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
                                        {/* Top Meta Row: Duration Badge + GitHub Action (Uncolliding) */}
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.45rem' }}>
                                            <span style={{
                                                fontSize: '0.72rem',
                                                color: 'var(--accent-primary)',
                                                fontWeight: '700',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.6px',
                                                background: 'rgba(79, 70, 229, 0.08)',
                                                padding: '0.18rem 0.6rem',
                                                borderRadius: '20px',
                                                border: '1px solid rgba(79, 70, 229, 0.16)'
                                            }}>
                                                {exp.duration} • {exp.type}
                                            </span>

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

