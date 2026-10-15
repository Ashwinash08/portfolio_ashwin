import GradientText from './GradientText';
import Particles from './Particles';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section" style={{ background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
            <Particles
                particleCount={150}
                particleSpread={10}
                speed={0.1}
                particleColors={['#5227FF', '#FF9FFC', '#B19EEF']}
                moveParticlesOnHover={true}
                particleHoverFactor={2}
                alphaParticles={true}
                particleBaseSize={100}
                sizeRandomness={1}
                cameraDistance={25}
                disableRotation={false}
            />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <GradientText
                            className="section-title"
                            colors={['#5227FF', '#FF9FFC', '#B19EEF', '#5227FF']}
                            animationSpeed={6}
                            showBorder={false}
                        >
                            About Me
                        </GradientText>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        style={{
                            marginTop: '2rem',
                            padding: '3rem',
                            background: 'rgba(255, 255, 255, 0.02)',
                            borderRadius: '24px',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            backdropFilter: 'blur(10px)'
                        }}
                    >
                        <p style={{
                            fontSize: 'clamp(1.1rem, 3vw, 1.25rem)',
                            color: 'var(--text-secondary)',
                            lineHeight: '1.8',
                            margin: 0
                        }}>
                            I am a software engineer currently pursuing my Master of Computer Applications [MCA]. I have
                            a keen eye for design and believe that the best applications are not just efficient code, but
                            intuitive experiences. I strive to bridge the gap between complex backend logic and
                            user-friendly frontend interfaces.
                        </p>

                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '3rem',
                            marginTop: '3rem',
                            flexWrap: 'wrap'
                        }}>
                            {[
                                { label: "Experience", value: "Fresher" },
                                { label: "Projects", value: "3+ Done" },
                            ].map((stat, i) => (
                                <div key={i} style={{ textAlign: 'center' }}>
                                    <h4 style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--text-primary)', margin: 0 }}>{stat.value}</h4>
                                    <p style={{ color: 'var(--accent-primary)', fontWeight: '600', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
