import React from 'react';
import SpotlightCard from './SpotlightCard';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';

const Skills = () => {
    // Collect all skills from categories in order
    const allSkills = skillCategories.flatMap(cat => cat.skills);

    return (
        <section id="skills" aria-labelledby="skills-title" className="section" style={{ position: 'relative' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                    {/* Section Header with Horizontal Line */}
                    <div className="section-header-line">
                        <h2 id="skills-title" className="section-title-line">SKILLS</h2>
                        <div className="section-title-rule" />
                    </div>

                    {/* Skills Badge Boxes Grid (Large, with cursor spotlight and glow effects, no points) */}
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.95rem',
                        alignItems: 'center'
                    }}>
                        {allSkills.map((skill, sIdx) => {
                            const skillName = typeof skill === 'string' ? skill : (skill?.name || '');
                            return (
                                <motion.div
                                    key={sIdx}
                                    whileHover={{ y: -5, scale: 1.04 }}
                                    whileTap={{ scale: 0.96 }}
                                    transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                                >
                                    <SpotlightCard
                                        className="skill-badge-box"
                                        spotlightColor="rgba(16, 185, 129, 0.28)"
                                    >
                                        <span style={{ position: 'relative', zIndex: 3 }}>{skillName}</span>
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

export default Skills;
