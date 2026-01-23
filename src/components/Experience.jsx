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
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                                        <div>
                                            <GradientText
                                                colors={['#5227FF', '#FF9FFC', '#B19EEF', '#5227FF']}
                                                animationSpeed={6}
                                                showBorder={false}
                                            >
                                                <h3 style={{ fontSize: '2.2rem', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>
                                                    {exp.company}
                                                </h3>
                                            </GradientText>
                                            <p style={{ color: 'var(--accent-primary)', fontWeight: '600', fontSize: '1.1rem', marginTop: '0.4rem' }}>
                                                {exp.position}
                                            </p>
                                        </div>

                                        {exp.github && (
                                            <a href={exp.github} target="_blank" rel="noopener noreferrer" style={{
                                                padding: '0.6rem 1.2rem',
                                                background: 'rgba(99, 102, 241, 0.1)',
                                                borderRadius: '50px',
                                                color: 'var(--accent-primary)',
                                                fontSize: '0.9rem',
                                                fontWeight: '600',
                                                border: '1px solid rgba(99, 102, 241, 0.2)',
                                                textDecoration: 'none',
                                                transition: 'all 0.3s ease',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.5rem'
                                            }}
                                                className="hover-glow"
                                            >
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                </svg>
                                                View GitHub
                                            </a>
                                        )}
                                    </div>

                                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.05rem', maxWidth: '800px' }}>
                                        {exp.description}
                                    </p>

                                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                                        {exp.tech.map((skill, sIdx) => (
                                            <span key={sIdx} style={{
                                                fontSize: '0.85rem',
                                                color: 'var(--text-primary)',
                                                background: 'rgba(255, 255, 255, 0.05)',
                                                padding: '0.4rem 1rem',
                                                borderRadius: '8px',
                                                border: '1px solid rgba(255, 255, 255, 0.1)'
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
