import GradientText from './GradientText';
import Particles from './Particles';

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
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <GradientText
                        className="section-title"
                        colors={['#5227FF', '#FF9FFC', '#B19EEF', '#5227FF']}
                        animationSpeed={6}
                        showBorder={false}
                    >
                        About Me
                    </GradientText>

                    <p style={{
                        fontSize: '1.1rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '3rem',
                        lineHeight: '1.8'
                    }}>
                        I am a software engineer with a keen eye for design. I believe that the best applications
                        are not just efficient code, but intuitive experiences. With a background in both
                        development and visual arts, I bring a unique perspective to every project.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
