import React, { useState, useEffect, useRef } from 'react';
import SpotlightCard from './SpotlightCard';
import ProjectVisualCard from './ProjectVisualCard';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, projectCategories as categories } from '../data/projects';

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [activeModalProject, setActiveModalProject] = useState(null);
    const triggerRef = useRef(null);
    const modalRef = useRef(null);

    const openModal = (project, e) => {
        triggerRef.current = e?.currentTarget;
        setActiveModalProject(project);
    };

    const closeModal = () => {
        setActiveModalProject(null);
        if (triggerRef.current) triggerRef.current.focus();
    };

    // Escape listener and focus restore for accessible dialog
    useEffect(() => {
        if (!activeModalProject) return;

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                e.preventDefault();
                closeModal();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [activeModalProject]);

    const handleTabKeyDown = (e, index) => {
        if (e.key === 'ArrowRight') {
            e.preventDefault();
            const nextIdx = (index + 1) % categories.length;
            setSelectedCategory(categories[nextIdx]);
            const nextEl = document.getElementById(`project-tab-${categories[nextIdx].replace(/\s+/g, '-').toLowerCase()}`);
            if (nextEl) nextEl.focus();
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            const prevIdx = (index - 1 + categories.length) % categories.length;
            setSelectedCategory(categories[prevIdx]);
            const prevEl = document.getElementById(`project-tab-${categories[prevIdx].replace(/\s+/g, '-').toLowerCase()}`);
            if (prevEl) prevEl.focus();
        }
    };

    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter(p => p.category === selectedCategory);

    return (
        <section id="projects" aria-labelledby="projects-title" className="section" style={{ position: 'relative' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                    {/* Section Header with Horizontal Line (Image 1 Style) */}
                    <div className="section-header-line">
                        <h2 id="projects-title" className="section-title-line">PROJECTS</h2>
                        <div className="section-title-rule" />
                    </div>

                    {/* Filter Pills */}
                    <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '1.5rem' }}>
                        <div className="filter-tabs filter-tabs-container" role="tablist" aria-label="Filter projects by category" style={{ margin: 0 }}>
                            {categories.map((cat, catIdx) => {
                                const isSelected = selectedCategory === cat;
                                const tabId = `project-tab-${cat.replace(/\s+/g, '-').toLowerCase()}`;
                                return (
                                    <motion.button
                                        key={cat}
                                        id={tabId}
                                        role="tab"
                                        aria-selected={isSelected}
                                        aria-controls="projects-grid"
                                        tabIndex={isSelected ? 0 : -1}
                                        onKeyDown={(e) => handleTabKeyDown(e, catIdx)}
                                        whileHover={{ scale: 1.04, y: -1 }}
                                        whileTap={{ scale: 0.96 }}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`filter-btn ${isSelected ? 'active' : ''}`}
                                        style={{
                                            minHeight: '40px',
                                            padding: '0.4rem 0.95rem',
                                            borderRadius: 'var(--radius-pill)',
                                            fontSize: '0.82rem',
                                            fontWeight: '600',
                                            border: isSelected ? '1px solid var(--accent)' : '1px solid var(--border-subtle)',
                                            background: isSelected ? 'var(--accent)' : 'var(--surface-1)',
                                            color: isSelected ? 'var(--on-accent)' : 'var(--text-secondary)',
                                            cursor: 'pointer',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                                            boxShadow: isSelected ? 'var(--glow-accent)' : 'var(--shadow-1)'
                                        }}
                                    >
                                        {cat === 'All' ? '⚡ All Projects' : cat}
                                    </motion.button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Projects 2x2 Grid */}
                    <div id="projects-grid" className="projects-grid" role="region" aria-live="polite" aria-label="Featured projects display">
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project, idx) => (
                                <motion.div
                                    key={project.title}
                                    layout
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.97 }}
                                    transition={{ duration: 0.35, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                                    whileHover={{ y: -6 }}
                                >
                                    <SpotlightCard
                                        className="glass-card"
                                        spotlightColor="var(--card-hover-glow)"
                                        style={{ width: '100%', height: '100%', overflow: 'hidden' }}
                                    >
                                        <div style={{ padding: '0.95rem' }}>
                                            <div className="project-card-inner">
                                                {/* Project Graphic */}
                                                <div
                                                    style={{
                                                        cursor: 'pointer',
                                                        borderRadius: '8px',
                                                        overflow: 'hidden',
                                                        height: '100%',
                                                        minHeight: '140px'
                                                    }}
                                                    onClick={(e) => openModal(project, e)}
                                                    title={`Click to view details for ${project.title}`}
                                                >
                                                    <ProjectVisualCard project={project} isModal={false} />
                                                </div>

                                                {/* Project Info */}
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
                                                            {project.built}
                                                        </p>
                                                    </div>

                                                    <div>
                                                        {/* Tech Tags with subtle shimmer */}
                                                        <div style={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap', marginBottom: '0.55rem' }}>
                                                            {project.tech.slice(0, 4).map((skill, sIdx) => (
                                                                <span key={sIdx} style={{
                                                                    fontSize: '0.68rem',
                                                                    color: 'var(--text-primary)',
                                                                    background: 'rgba(255,255,255,0.04)',
                                                                    padding: '0.12rem 0.45rem',
                                                                    borderRadius: '5px',
                                                                    border: '1px solid var(--card-border)',
                                                                    fontWeight: '500',
                                                                    backdropFilter: 'blur(8px)'
                                                                }}>
                                                                    {skill}
                                                                </span>
                                                            ))}
                                                        </div>

                                                        {/* Action Buttons */}
                                                        <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap' }}>
                                                            <motion.button
                                                                whileHover={{ scale: 1.04, boxShadow: '0 0 14px var(--accent-glow)' }}
                                                                whileTap={{ scale: 0.96 }}
                                                                onClick={(e) => openModal(project, e)}
                                                                className="btn btn-outline btn-sm"
                                                                style={{ padding: '0.25rem 0.65rem', fontSize: '0.74rem' }}
                                                            >
                                                                Overview
                                                            </motion.button>
                                                            {project.liveDemo && (
                                                                <motion.a
                                                                    whileHover={{ scale: 1.04 }}
                                                                    whileTap={{ scale: 0.96 }}
                                                                    href={project.liveDemo}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="btn btn-outline btn-sm"
                                                                    style={{ padding: '0.25rem 0.65rem', fontSize: '0.74rem' }}
                                                                >
                                                                    Demo
                                                                </motion.a>
                                                            )}
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
                                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
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
                </motion.div>
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
                        onClick={closeModal}
                    >
                        <motion.div
                            ref={modalRef}
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="modal-project-title"
                            initial={{ opacity: 0, scale: 0.95, y: 15 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 15 }}
                            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                            style={{
                                background: 'var(--surface-1)',
                                border: '1px solid var(--border-strong)',
                                borderRadius: 'var(--radius-lg)',
                                maxWidth: '540px',
                                width: '100%',
                                maxHeight: '88vh',
                                overflowY: 'auto',
                                padding: '1.4rem',
                                position: 'relative',
                                boxShadow: 'var(--shadow-3)'
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={closeModal}
                                aria-label="Close modal"
                                style={{
                                    position: 'absolute',
                                    top: '0.85rem',
                                    right: '0.85rem',
                                    background: 'var(--surface-2)',
                                    border: '1px solid var(--border-subtle)',
                                    color: 'var(--text-primary)',
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: 'var(--radius-pill)',
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

                            {/* Modal Banner */}
                            <div style={{ marginBottom: '1rem', width: '100%' }}>
                                <ProjectVisualCard project={activeModalProject} isModal={true} />
                            </div>

                            {/* Problem */}
                            <div style={{
                                marginBottom: '0.85rem',
                                padding: '0.65rem 0.85rem',
                                borderRadius: 'var(--radius-sm)',
                                background: 'var(--accent-soft)',
                                border: '1px solid var(--border-subtle)'
                            }}>
                                <span style={{
                                    fontSize: '0.72rem',
                                    fontWeight: '700',
                                    color: 'var(--accent)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.6px',
                                    display: 'block',
                                    marginBottom: '0.2rem'
                                }}>
                                    Problem Addressed
                                </span>
                                <p style={{ color: 'var(--text-primary)', fontSize: '0.82rem', lineHeight: '1.5', margin: 0 }}>
                                    {activeModalProject.problem}
                                </p>
                            </div>

                            {/* What I Built */}
                            <div style={{ marginBottom: '0.85rem' }}>
                                <span style={{
                                    fontSize: '0.72rem',
                                    fontWeight: '700',
                                    color: 'var(--text-secondary)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.6px',
                                    display: 'block',
                                    marginBottom: '0.25rem'
                                }}>
                                    What I Built
                                </span>
                                <p style={{ color: 'var(--text-primary)', fontSize: '0.84rem', lineHeight: '1.55', margin: 0 }}>
                                    {activeModalProject.built}
                                </p>
                            </div>

                            {/* Highlights */}
                            <div style={{ marginBottom: '0.85rem' }}>
                                <h4 style={{ fontSize: '0.78rem', color: 'var(--text-primary)', marginBottom: '0.45rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.6px' }}>
                                    Key Architecture &amp; Highlights
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

                            {/* Outcome / Result */}
                            <div style={{
                                marginBottom: '1rem',
                                padding: '0.65rem 0.85rem',
                                borderRadius: '8px',
                                background: 'rgba(34, 197, 94, 0.06)',
                                border: '1px solid rgba(34, 197, 94, 0.2)'
                            }}>
                                <span style={{
                                    fontSize: '0.72rem',
                                    fontWeight: '700',
                                    color: '#22c55e',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.6px',
                                    display: 'block',
                                    marginBottom: '0.2rem'
                                }}>
                                    Result &amp; Impact
                                </span>
                                <p style={{ color: 'var(--text-primary)', fontSize: '0.82rem', lineHeight: '1.5', margin: 0 }}>
                                    {activeModalProject.result}
                                </p>
                            </div>

                            {/* Actions */}
                            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                                {activeModalProject.liveDemo && (
                                    <motion.a
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        href={activeModalProject.liveDemo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-outline btn-sm"
                                        style={{ flex: 1, padding: '0.55rem', minHeight: '40px' }}
                                    >
                                        Live Demo
                                    </motion.a>
                                )}
                                <motion.a
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    href={activeModalProject.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary btn-sm"
                                    style={{ flex: 1, padding: '0.55rem', minHeight: '40px' }}
                                >
                                    Explore on GitHub
                                </motion.a>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={closeModal}
                                    className="btn btn-outline btn-sm"
                                    style={{ flex: 1, padding: '0.55rem', minHeight: '40px' }}
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
