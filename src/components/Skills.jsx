import GradientText from './GradientText';
import SpotlightCard from './SpotlightCard';
import Particles from './Particles';
import FadeContent from './FadeContent';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend Development",
            skills: [
                { name: "HTML", level: "80%" },
                { name: "C ", level: "75%" },
                { name: "Java", level: "70%" },
                { name: "JavaScript", level: "65%" },
                { name: "CSS", level: "75%" }
            ]
        },
        {
            title: "Backend & database",
            skills: [
                { name: "MySQL", level: "60%" },
                { name: "Python", level: "70%" },
                { name: "Php", level: "75%" },
                { name: "MongoDB", level: "65%" }
            ]
        },
        {
            title: "Tools & Others",
            skills: [
                { name: "VS Code", level: "80%" },
                { name: "Antigravity", level: "75%" },
                { name: "Android Studio", level: "60%" }
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <section id="skills" className="section" style={{ background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}>
            <Particles
                particleCount={200}
                particleSpread={12}
                speed={0.15}
                particleColors={['#5227FF', '#FF9FFC', '#B19EEF']}
                moveParticlesOnHover={true}
                particleHoverFactor={2.5}
                alphaParticles={true}
                particleBaseSize={80}
                sizeRandomness={0.8}
                cameraDistance={30}
                disableRotation={false}
            />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <FadeContent blur={true} duration={1000}>
                        <span className="section-subtitle">Expertise</span>
                        <GradientText
                            className="section-title"
                            colors={['#5227FF', '#FF9FFC', '#B19EEF', '#5227FF']}
                            animationSpeed={6}
                            showBorder={false}
                        >
                            Professional Skills
                        </GradientText>
                    </FadeContent>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem'
                    }}
                >
                    {skillCategories.map((category, idx) => (
                        <motion.div key={idx} variants={itemVariants}>
                            <SpotlightCard
                                className="glass-card"
                                spotlightColor="rgba(99, 102, 241, 0.15)"
                                style={{ height: '100%', border: '1px solid rgba(255,255,255,0.05)' }}
                            >
                                <div style={{ padding: '2.5rem' }}>
                                    <div style={{ marginBottom: '2rem', borderBottom: '2px solid rgba(82, 39, 255, 0.2)', display: 'inline-block', paddingBottom: '0.5rem' }}>
                                        <GradientText
                                            colors={['#5227FF', '#FF9FFC', '#B19EEF', '#5227FF']}
                                            animationSpeed={6}
                                            showBorder={false}
                                        >
                                            <h3 style={{
                                                fontSize: '1.5rem',
                                                color: 'var(--text-primary)',
                                                margin: 0
                                            }}>
                                                {category.title}
                                            </h3>
                                        </GradientText>
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                        {category.skills.map((skill, sIdx) => (
                                            <div key={sIdx}>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                                                    <span style={{ fontWeight: '600', color: 'var(--text-secondary)' }}>{skill.name}</span>
                                                    <span style={{ color: 'var(--accent-primary)', fontSize: '0.9rem' }}>{skill.level}</span>
                                                </div>
                                                <div style={{
                                                    height: '8px',
                                                    background: 'rgba(255,255,255,0.05)',
                                                    borderRadius: '10px',
                                                    overflow: 'hidden',
                                                    border: '1px solid rgba(255,255,255,0.03)'
                                                }}>
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: skill.level }}
                                                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                                                        viewport={{ once: true }}
                                                        style={{
                                                            height: '100%',
                                                            background: 'linear-gradient(90deg, #5227FF, #FF9FFC)',
                                                            borderRadius: '10px'
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
