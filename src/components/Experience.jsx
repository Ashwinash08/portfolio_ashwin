import GradientText from './GradientText';
import SpotlightCard from './SpotlightCard';
import Particles from './Particles';
import FadeContent from './FadeContent';

const Experience = () => {
    const experiences = [
        {
            company: "VTech Integrated Solution",
            position: "Web Development Intern",
            description: "Trainee at Vtech Integrated Solutions [1 month]. Internship project on web development using Django.",
            tech: ["DJango", "HTML", "CSS"],
            github: "https://github.com"
        }
    ];

    return (
        <section id="experience" className="section" style={{ background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}>
            <Particles
                particleCount={160}
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
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <FadeContent blur={true} duration={1000}>
                        <span className="section-subtitle">Professional Journey</span>
                        <GradientText
                            className="section-title"
                            colors={['#5227FF', '#FF9FFC', '#B19EEF', '#5227FF']}
                            animationSpeed={6}
                            showBorder={false}
                        >
                            Internship
                        </GradientText>
                    </FadeContent>
                </div>

                <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {experiences.map((exp, idx) => (
                        <FadeContent key={idx} blur={true} duration={1000} delay={idx * 200}>
                            <SpotlightCard
                                className="glass-card"
                                spotlightColor="rgba(99, 102, 241, 0.15)"
                                style={{ width: '100%' }}
                            >
                                <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
                                        <div>
                                            <GradientText
                                                colors={['#5227FF', '#FF9FFC', '#B19EEF', '#5227FF']}
                                                animationSpeed={6}
                                                showBorder={false}
                                            >
                                                <h3 style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>
                                                    {exp.company}
                                                </h3>
                                            </GradientText>
                                            <p style={{ color: 'var(--accent-primary)', fontWeight: '600', fontSize: '1.1rem', marginTop: '0.4rem' }}>
                                                {exp.position}
                                            </p>
                                        </div>
                                    </div>

                                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem', maxWidth: '850px' }}>
                                        {exp.description}
                                    </p>

                                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                                        {exp.tech.map((skill, sIdx) => (
                                            <span key={sIdx} style={{
                                                fontSize: '0.85rem',
                                                color: 'var(--text-primary)',
                                                background: 'rgba(255, 255, 255, 0.05)',
                                                padding: '0.4rem 1.2rem',
                                                borderRadius: '10px',
                                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                                fontWeight: '500'
                                            }}>
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </SpotlightCard>
                        </FadeContent>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
