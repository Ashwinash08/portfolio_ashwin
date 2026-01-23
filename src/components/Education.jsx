import GradientText from './GradientText';
import Particles from './Particles';
import SpotlightCard from './SpotlightCard';

const Education = () => {
    const educationData = [
        {
            degree: "MASTER OF COMPUTER APPLICATIONS",
            institution: "East Point College Of Higher Education",
            period: "2024 - 2026",
        },
        {
            degree: "BACHELOR OF COMPUTER APPLICATION",
            institution: "Vagdevi Vilas College",
            period: "2021 - 2024",
        },
        {
            degree: "PCMC",
            institution: "Narayana PU College",
            period: "2019 - 2021",
        },
        {
            degree: "SSLC",
            institution: "K K English High School",
            period: "2018 - 2019",
        }
    ];

    return (
        <section id="education" className="section" style={{ background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}>
            <Particles
                particleCount={180}
                particleSpread={11}
                speed={0.12}
                particleColors={['#5227FF', '#FF9FFC', '#B19EEF']}
                moveParticlesOnHover={true}
                particleHoverFactor={2.2}
                alphaParticles={true}
                particleBaseSize={90}
                sizeRandomness={0.9}
                cameraDistance={28}
                disableRotation={false}
            />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <span className="section-subtitle">Learning Path</span>
                        <GradientText
                            className="section-title"
                            colors={['#5227FF', '#FF9FFC', '#B19EEF', '#5227FF']}
                            animationSpeed={6}
                            showBorder={false}
                        >
                            My Education
                        </GradientText>
                    </div>

                    <div className="grid-cols-2" style={{ gridAutoRows: '1fr' }}>
                        {educationData.map((item, index) => (
                            <SpotlightCard
                                key={index}
                                className="glass-card animate-fade-in"
                                spotlightColor="rgba(99, 102, 241, 0.15)"
                                style={{
                                    animationDelay: `${index * 0.2}s`
                                }}
                            >
                                <div style={{ padding: '2.5rem', height: '100%', position: 'relative' }}>
                                    <div style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '4px',
                                        height: '100%',
                                        background: 'var(--accent-primary)'
                                    }}></div>

                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                                        <div>
                                            <GradientText
                                                colors={['#5227FF', '#FF9FFC', '#B19EEF', '#5227FF']}
                                                animationSpeed={6}
                                                showBorder={false}
                                            >
                                                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>
                                                    {item.degree}
                                                </h3>
                                            </GradientText>
                                            <p style={{ color: 'var(--accent-primary)', fontWeight: '700', fontSize: '1.1rem', letterSpacing: '0.6px', marginTop: '0.5rem' }}>
                                                {item.institution}
                                            </p>
                                        </div>
                                        <span style={{
                                            padding: '0.4rem 1rem',
                                            background: 'rgba(99, 102, 241, 0.1)',
                                            borderRadius: '50px',
                                            color: 'var(--accent-primary)',
                                            fontSize: '0.85rem',
                                            fontWeight: '600',
                                            border: '1px solid rgba(99, 102, 241, 0.2)'
                                        }}>
                                            {item.period}
                                        </span>
                                    </div>

                                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1.05rem' }}>
                                        {item.description}
                                    </p>
                                </div>
                            </SpotlightCard>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
