import React, { useState } from 'react';
import GradientText from './GradientText';
import SpotlightCard from './SpotlightCard';
import ProjectVisualCard from './ProjectVisualCard';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = ({ onNavigate }) => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [activeModalProject, setActiveModalProject] = useState(null);

    const projects = [
        {
            title: "Event Management System",
            category: "Web Application",
            desc: "A comprehensive digital platform designed to streamline and automate event planning, coordination, and execution with responsive UI and user management.",
            tech: ["HTML5", "CSS3", "JavaScript", "MySQL", "Bootstrap"],
            highlights: ["Automated booking & scheduling", "User role management & auth", "Interactive event dashboard & analytics"],
            github: "https://github.com/Ashwinash08"
        },
        {
            title: "Bitcoin Prediction using ML",
            category: "Machine Learning",
            desc: "Predictive machine learning model analyzing historical crypto market trends and price movements to assist traders and investors in making informed decisions.",
            tech: ["Python", "Machine Learning", "Pandas", "Matplotlib", "Scikit-Learn"],
            highlights: ["Historical data preprocessing & cleansing", "Time-series regression analysis", "Visual market trends & moving averages"],
            github: "https://github.com/Ashwinash08"
        },
        {
            title: "Organic Food Traceability with Blockchain & AI",
            category: "Blockchain & AI",
            desc: "Secure and transparent food traceability system utilizing Blockchain for immutable provenance records and AI for predictive organic authenticity analysis.",
            tech: ["Python", "Blockchain", "AI", "MySQL", "Cryptography"],
            highlights: ["Immutable supply chain provenance ledger", "AI-based authenticity scoring & verification", "Counterfeiting & fraud prevention"],
            github: "https://github.com/Ashwinash08"
        },
        {
            title: "AI Powered Digital Twin Healthcare Platform",
            category: "Artificial Intelligence",
            desc: "Real-time healthcare monitoring and analysis platform featuring AI-powered digital twins and seamless data integration for personalized medical insights.",
            tech: ["Python", "JavaScript", "AI", "CSS3", "SQLite"],
            highlights: ["Real-time patient biometric monitoring", "AI-driven personalized health insights", "Seamless clinical data integration"],
            github: "https://github.com/Ashwinash08"
        }
    ];

    const categories = ['All', 'Web Application', 'Machine Learning', 'Blockchain & AI', 'Artificial Intelligence'];

    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter(p => p.category === selectedCategory);

    return (
        <section id="projects" className="section" style={{ position: 'relative' }}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="section-subtitle">Portfolio</span>
                    <GradientText
                        className="section-title"
                        colors={['#ffffff', '#ff8c3b', '#ff5500', '#ffffff']}
                        animationSpeed={6}
                        showBorder={false}
                    >
                        Featured Projects
                    </GradientText>

                    {/* Filter Pills */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '0.4rem',
                        marginTop: '0.85rem',
                        flexWrap: 'wrap'
                    }}>
                        {categories.map((cat) => {
                            const isSelected = selectedCategory === cat;
                            return (
                                <motion.button
                                    key={cat}
                                    whileHover={{ scale: 1.04, y: -1 }}
                                    whileTap={{ scale: 0.96 }}
                                    onClick={() => setSelectedCategory(cat)}
                                    style={{
                                        padding: '0.32rem 0.9rem',
                                        borderRadius: '30px',
                                        fontSize: '0.8rem',
                                        fontWeight: '600',
                                        border: isSelected ? '1px solid var(--accent-primary)' : '1px solid var(--card-border)',
                                        background: isSelected ? 'var(--accent-primary)' : 'var(--card-bg)',
                                        color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                                        cursor: 'pointer',
                                        transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                                        boxShadow: isSelected ? '0 2px 10px var(--accent-glow)' : '0 1px 3px rgba(15, 23, 42, 0.03)'
                                    }}
                                >
                                    {cat === 'All' ? '⚡ All Projects' : cat}
                                </motion.button>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Projects 2x2 Wide Grid */}
                <div className="projects-grid">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, idx) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, y: 14 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.97 }}
                                transition={{ duration: 0.35, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                                whileHover={{ y: -2 }}
                            >
                                <SpotlightCard
                                    className="glass-card"
                                    spotlightColor="var(--card-hover-glow)"
                                    style={{ width: '100%', height: '100%', overflow: 'hidden' }}
                                >
                                    <div style={{ padding: '0.95rem' }}>
                                        <div className="project-card-inner">
                                            {/* Project Graphic Identity Visual Banner */}
                                            <div
                                                style={{
                                                    cursor: 'pointer',
                                                    borderRadius: '8px',
                                                    overflow: 'hidden',
                                                    height: '100%',
                                                    minHeight: '140px'
                                                }}
                                                onClick={() => setActiveModalProject(project)}
                                                title={`Click to view details for ${project.title}`}
                                            >
                                                <ProjectVisualCard project={project} isModal={false} />
                                            </div>

                                            {/* Project Info & Description */}
                                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '0.45rem' }}>
                                                <div>
                                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.15rem' }}>
                                                        <span style={{
                                                            color: 'var(--accent-primary)',
                                                            fontWeight: '700',
                                                            fontSize: '0.7rem',
                                                            textTransform: 'uppercase',
                                                            letterSpacing: '0.8px'
                                                        }}>
                                                            {project.category}
                                                        </span>
                                                        <span style={{
                                                            fontSize: '0.68rem',
                                                            color: 'var(--text-muted)',
                                                            fontFamily: 'JetBrains Mono, monospace'
                                                        }}>
                                                            #{idx + 1}
                                                        </span>
                                                    </div>

                                                    <h3 style={{
                                                        fontSize: '0.96rem',
                                                        fontWeight: '800',
                                                        color: 'var(--text-primary)',
                                                        margin: '0 0 0.2rem 0',
                                                        lineHeight: '1.25',
                                                        minHeight: '2.4rem',
                                                        display: '-webkit-box',
                                                        WebkitLineClamp: 2,
                                                        WebkitBoxOrient: 'vertical',
                                                        overflow: 'hidden'
                                                    }}>
                                                        {project.title}
                                                    </h3>

                                                    <p style={{
                                                        color: 'var(--text-secondary)',
                                                        lineHeight: '1.45',
                                                        fontSize: '0.78rem',
                                                        margin: 0,
                                                        display: '-webkit-box',
                                                        WebkitLineClamp: 2,
                                                        WebkitBoxOrient: 'vertical',
                                                        overflow: 'hidden'
                                                    }}>
                                                        {project.desc}
                                                    </p>
                                                </div>

                                                <div>
                                                    {/* Tech Tags */}
                                                    <div style={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap', marginBottom: '0.55rem' }}>
                                                        {project.tech.slice(0, 4).map((skill, sIdx) => (
                                                            <span key={sIdx} style={{
                                                                fontSize: '0.68rem',
                                                                color: 'var(--text-primary)',
                                                                background: 'var(--bg-tertiary)',
                                                                padding: '0.12rem 0.45rem',
                                                                borderRadius: '5px',
                                                                border: '1px solid var(--card-border)',
                                                                fontWeight: '500'
                                                            }}>
                                                                {skill}
                                                            </span>
                                                        ))}
                                                    </div>

                                                    {/* Action Buttons */}
                                                    <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap' }}>
                                                        <motion.button
                                                            whileHover={{ scale: 1.04 }}
                                                            whileTap={{ scale: 0.96 }}
                                                            onClick={() => setActiveModalProject(project)}
                                                            className="btn btn-outline btn-sm"
                                                            style={{ padding: '0.25rem 0.65rem', fontSize: '0.74rem' }}
                                                        >
                                                            Overview
                                                        </motion.button>
                                                        <motion.a
                                                            whileHover={{ scale: 1.04 }}
                                                            whileTap={{ scale: 0.96 }}
                                                            href={project.github}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="btn btn-primary btn-sm"
                                                            style={{ padding: '0.25rem 0.65rem', fontSize: '0.74rem' }}
                                                        >
                                                            Code
                                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                                <polyline points="15 3 21 3 21 9"></polyline>
                                                            </svg>
                                                        </motion.a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SpotlightCard>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

            </div>

            {/* Modal */}
            <AnimatePresence>
                {activeModalProject && (
                    <div
                        style={{
                            position: 'fixed',
                            inset: 0,
                            zIndex: 2000,
                            background: 'rgba(15, 23, 42, 0.55)',
                            backdropFilter: 'blur(16px)',
                            WebkitBackdropFilter: 'blur(16px)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '1rem'
                        }}
                        onClick={() => setActiveModalProject(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 15 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 15 }}
                            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                            style={{
                                background: 'var(--card-bg)',
                                border: '1px solid var(--card-border)',
                                borderRadius: '18px',
                                backdropFilter: 'blur(24px) saturate(180%)',
                                WebkitBackdropFilter: 'blur(24px) saturate(180%)',
                                maxWidth: '540px',
                                width: '100%',
                                maxHeight: '88vh',
                                overflowY: 'auto',
                                padding: '1.4rem',
                                position: 'relative',
                                boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.35), 0 24px 50px -10px rgba(15, 23, 42, 0.35)'
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setActiveModalProject(null)}
                                aria-label="Close modal"
                                style={{
                                    position: 'absolute',
                                    top: '0.85rem',
                                    right: '0.85rem',
                                    background: 'var(--bg-tertiary)',
                                    border: '1px solid var(--card-border)',
                                    color: 'var(--text-primary)',
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    fontSize: '0.9rem',
                                    zIndex: 10,
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                ✕
                            </button>

                            {/* Modal Name Artwork Banner */}
                            <div style={{ marginBottom: '1rem', width: '100%' }}>
                                <ProjectVisualCard project={activeModalProject} isModal={true} />
                            </div>

                            <p style={{
                                color: 'var(--text-secondary)',
                                fontSize: '0.88rem',
                                lineHeight: '1.6',
                                marginBottom: '1rem'
                            }}>
                                {activeModalProject.desc}
                            </p>

                            <div style={{ marginBottom: '1rem' }}>
                                <h4 style={{ fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '0.45rem', fontWeight: '700' }}>
                                    Key Architecture & Highlights:
                                </h4>
                                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                                    {activeModalProject.highlights.map((h, i) => (
                                        <li key={i} style={{
                                            fontSize: '0.82rem',
                                            color: 'var(--text-secondary)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.45rem',
                                            background: 'var(--bg-tertiary)',
                                            padding: '0.35rem 0.65rem',
                                            borderRadius: '6px',
                                            border: '1px solid var(--card-border)'
                                        }}>
                                            <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>✓</span> {h}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div style={{ display: 'flex', gap: '0.6rem' }}>
                                <motion.a
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    href={activeModalProject.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary btn-sm"
                                    style={{ flex: 1, padding: '0.55rem' }}
                                >
                                    Explore on GitHub
                                </motion.a>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setActiveModalProject(null)}
                                    className="btn btn-outline btn-sm"
                                    style={{ flex: 1, padding: '0.55rem' }}
                                >
                                    Close
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;

