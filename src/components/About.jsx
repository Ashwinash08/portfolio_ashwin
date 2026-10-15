import React from 'react';
import { motion } from 'framer-motion';

const About = ({ onNavigate }) => {
    const handleNav = (pageId) => {
        if (onNavigate) {
            onNavigate(pageId);
        } else {
            const el = document.getElementById(pageId);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const corePillars = [
        {
            num: '#01',
            title: 'Final Semester MCA',
            category: 'East Point College (8.5 CGPA)',
            desc: 'Currently in the final semester pursuing Master of Computer Applications (2024–2026), building on a solid BCA background with deep expertise in computer science fundamentals.'
        },
        {
            num: '#02',
            title: 'Full-Stack Engineering',
            category: 'React, Python & Django',
            desc: 'Hands-on experience developing end-to-end web applications, modular reactive interfaces, secure RESTful APIs, and scalable relational & NoSQL databases.'
        },
        {
            num: '#03',
            title: 'AI & Machine Learning',
            category: 'Predictive Models & Data',
            desc: 'Experienced in training and evaluating regression models, time-series analysis, and AI-powered systems like crypto price forecasting and digital twin healthcare platforms.'
        },
        {
            num: '#04',
            title: 'Ready for Opportunity',
            category: 'Software Roles & Internships',
            desc: 'Passionate and actively waiting to grab exciting software engineering roles and internships where I can contribute, solve complex challenges, and accelerate team growth.'
        }
    ];

    return (
        <section id="about" className="section" style={{ position: 'relative' }}>
            <div className="container">
                {/* Main About Section */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1.2fr 1fr',
                        gap: 'clamp(1.5rem, 4vw, 3.5rem)',
                        alignItems: 'flex-start',
                        marginBottom: 'clamp(2rem, 4vw, 3.5rem)'
                    }}
                    className="about-header-grid"
                >
                    {/* Left Column: Eyebrow + Impactful Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span
                            style={{
                                color: 'var(--accent-primary)',
                                fontWeight: '700',
                                fontSize: '0.92rem',
                                letterSpacing: '-0.2px',
                                display: 'block',
                                marginBottom: '0.75rem'
                            }}
                        >
                            About Ashwin
                        </span>

                        <h2
                            style={{
                                fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif",
                                fontSize: 'clamp(2.2rem, 4.2vw, 3.6rem)',
                                fontWeight: '800',
                                lineHeight: '1.12',
                                letterSpacing: '-1.4px',
                                color: 'var(--text-primary)',
                                margin: 0
                            }}
                        >
                            Final Semester MCA Student & Passionate Developer
                        </h2>
                    </motion.div>

                    {/* Right Column: Personal Bio & "Get in touch" CTA button */}
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            gap: '1.25rem'
                        }}
                    >
                        <p
                            style={{
                                fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
                                fontWeight: '500',
                                lineHeight: '1.6',
                                color: 'var(--text-primary)',
                                letterSpacing: '-0.2px',
                                margin: 0
                            }}
                        >
                            I am currently pursuing the final semester of my <strong>MCA (Master of Computer Applications)</strong> at East Point College of Higher Education, Bangalore. With hands-on internship experience in both full-stack web development and AI/ML, I thrive on crafting clean, performant software.
                        </p>

                        <p
                            style={{
                                fontSize: 'clamp(0.88rem, 1.1vw, 0.98rem)',
                                color: 'var(--text-secondary)',
                                lineHeight: '1.65',
                                margin: 0
                            }}
                        >
                            I am eagerly looking forward to grabbing exciting full-time software developer opportunities, internships, and entry-level engineering roles where I can apply my skills, learn rapidly, and deliver real value from day one.
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
                                <span style={{ fontSize: '0.88rem', color: 'var(--accent-secondary)', fontWeight: '700' }}>
                                    Open & Ready for Opportunities
                                </span>
                            </div>


                        </div>
                    </motion.div>
                </div>

                {/* Core Pillars / Specializations Grid */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: '1.25rem'
                    }}
                    className="about-pillars-grid"
                >
                    {corePillars.map((pillar, idx) => (
                        <motion.div
                            key={pillar.num}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.08 }}
                            className="glass-card"
                            style={{
                                padding: '1.5rem',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                height: '100%',
                                background: 'rgba(255, 255, 255, 0.03)',
                                borderColor: 'rgba(255, 255, 255, 0.07)'
                            }}
                        >
                            <div>
                                <span className="num-label" style={{ fontSize: '0.85rem' }}>{pillar.num}</span>
                                <h3
                                    style={{
                                        fontSize: '1.1rem',
                                        fontWeight: '800',
                                        color: 'var(--text-primary)',
                                        letterSpacing: '-0.3px',
                                        margin: '0.35rem 0 0.2rem 0'
                                    }}
                                >
                                    {pillar.title}
                                </h3>
                                <span
                                    style={{
                                        fontSize: '0.74rem',
                                        color: 'var(--accent-secondary)',
                                        fontWeight: '700',
                                        display: 'block',
                                        marginBottom: '0.75rem'
                                    }}
                                >
                                    {pillar.category}
                                </span>
                                <p
                                    style={{
                                        fontSize: '0.85rem',
                                        color: 'var(--text-secondary)',
                                        lineHeight: '1.6',
                                        margin: 0
                                    }}
                                >
                                    {pillar.desc}
                                </p>
                            </div>

                            <div style={{ marginTop: '1.25rem', paddingTop: '0.75rem', borderTop: '1px solid var(--card-border)' }}>
                                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'JetBrains Mono, monospace' }}>
                                    Focus Area // 0{idx + 1}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
        @media (max-width: 960px) {
          .about-header-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .about-pillars-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 580px) {
          .about-pillars-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </section>
    );
};

export default About;
