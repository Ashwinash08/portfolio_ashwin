import React, { useState } from 'react';
import GradientText from './GradientText';
import SpotlightCard from './SpotlightCard';
import { motion, AnimatePresence } from 'framer-motion';

const Skills = ({ onNavigate }) => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const skillCategories = [
        {
            title: "Frontend Development",
            id: "Frontend",
            icon: "🌐",
            skills: [
                { name: "HTML5", level: 90 },
                { name: "CSS3 / Styling", level: 85 },
                { name: "JavaScript", level: 80 },
                { name: "C Language", level: 78 },
                { name: "Java", level: 75 }
            ]
        },
        {
            title: "Backend & Database",
            id: "Backend",
            icon: "🗄️",
            skills: [
                { name: "Python", level: 85 },
                { name: "Django", level: 80 },
                { name: "PHP", level: 75 },
                { name: "MySQL", level: 80 },
                { name: "MongoDB", level: 70 }
            ]
        },
        {
            title: "Tools & Ecosystem",
            id: "Tools",
            icon: "🛠️",
            skills: [
                { name: "VS Code", level: 90 },
                { name: "Git / GitHub", level: 85 },
                { name: "Antigravity IDE", level: 80 },
                { name: "Android Studio", level: 70 }
            ]
        }
    ];

    const filterTabs = ['All', 'Frontend', 'Backend', 'Tools'];

    const displayedCategories = selectedCategory === 'All'
        ? skillCategories
        : skillCategories.filter(c => c.id === selectedCategory);

    return (
        <section id="skills" className="section" style={{ position: 'relative' }}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="section-subtitle">Technical Stack</span>
                    <GradientText
                        className="section-title"
                        colors={['#ffffff', '#ff8c3b', '#ff5500', '#ffffff']}
                        animationSpeed={6}
                        showBorder={false}
                    >
                        Skills & Expertise
                    </GradientText>

                    {/* Filter Tabs */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '0.4rem',
                        marginTop: '0.85rem',
                        flexWrap: 'wrap'
                    }}>
                        {filterTabs.map((tab) => {
                            const isSelected = selectedCategory === tab;
                            return (
                                <motion.button
                                    key={tab}
                                    whileHover={{ scale: 1.04, y: -1 }}
                                    whileTap={{ scale: 0.96 }}
                                    onClick={() => setSelectedCategory(tab)}
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
                                    {tab === 'All' ? '⚡ All Skills' : tab}
                                </motion.button>
                            );
                        })}
                    </div>
                </motion.div>

                <motion.div
                    layout
                    className={selectedCategory === 'All' ? 'skills-grid' : ''}
                    style={selectedCategory === 'All' ? {} : { maxWidth: '600px', margin: '0 auto', width: '100%' }}
                >
                    <AnimatePresence mode="popLayout">
                        {displayedCategories.map((category, cIdx) => (
                            <motion.div
                                key={category.id}
                                layout
                                initial={{ opacity: 0, y: 14, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.35, delay: cIdx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                                whileHover={{ y: -2 }}
                            >
                                <SpotlightCard
                                    className="glass-card"
                                    spotlightColor="var(--card-hover-glow)"
                                    style={{ height: '100%' }}
                                >
                                    <div style={{ padding: '1.15rem 1.25rem' }}>
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            marginBottom: '0.85rem',
                                            paddingBottom: '0.45rem',
                                            borderBottom: '1px solid var(--card-border)'
                                        }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                                                <span style={{ fontSize: '1.25rem' }}>{category.icon}</span>
                                                <h3 style={{
                                                    fontSize: '0.98rem',
                                                    fontWeight: '800',
                                                    color: 'var(--text-primary)',
                                                    margin: 0
                                                }}>
                                                    {category.title}
                                                </h3>
                                            </div>
                                            <span className="badge-pill" style={{ fontSize: '0.7rem', padding: '0.15rem 0.55rem' }}>
                                                {category.skills.length} Skills
                                            </span>
                                        </div>

                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                            {category.skills.map((skill, sIdx) => (
                                                <div
                                                    key={sIdx}
                                                    style={{
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        alignItems: 'center',
                                                        padding: '0.42rem 0.65rem',
                                                        borderRadius: '8px',
                                                        background: 'rgba(255, 255, 255, 0.03)',
                                                        border: '1px solid var(--card-border)'
                                                    }}
                                                >
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                        <div style={{
                                                            width: '6px',
                                                            height: '6px',
                                                            borderRadius: '50%',
                                                            background: 'var(--accent-primary)',
                                                            opacity: 0.85
                                                        }} />
                                                        <span style={{
                                                            fontWeight: '600',
                                                            fontSize: '0.84rem',
                                                            color: 'var(--text-primary)'
                                                        }}>
                                                            {skill.name}
                                                        </span>
                                                    </div>
                                                    <span style={{
                                                        color: 'var(--accent-primary)',
                                                        fontSize: '0.75rem',
                                                        fontWeight: '700',
                                                        fontFamily: 'JetBrains Mono, monospace',
                                                        background: 'rgba(255, 85, 0, 0.08)',
                                                        padding: '0.12rem 0.45rem',
                                                        borderRadius: '4px',
                                                        border: '1px solid rgba(255, 85, 0, 0.16)'
                                                    }}>
                                                        {skill.level}%
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </SpotlightCard>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;

