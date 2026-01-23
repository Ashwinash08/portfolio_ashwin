import LiquidEther from './LiquidEther';
import BlurText from './BlurText';
import StarBorder from './StarBorder';
import FadeContent from './FadeContent';
import GradientText from './GradientText';

const Hero = () => {
    return (
        <section id="home" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            paddingTop: '80px',
            overflow: 'hidden'
        }}>
            {/* Liquid Ether Background Effect */}
            <div style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                zIndex: 0,
                pointerEvents: 'none'
            }}>
                <LiquidEther
                    colors={['#5227FF', '#FF9FFC', '#B19EEF']}
                    mouseForce={20}
                    cursorSize={100}
                    isViscous={false}
                    viscous={30}
                    iterationsViscous={32}
                    iterationsPoisson={32}
                    resolution={0.5}
                    isBounce={false}
                    autoDemo={true}
                    autoSpeed={0.5}
                    autoIntensity={2.2}
                    takeoverDuration={0.25}
                    autoResumeDelay={3000}
                    autoRampDuration={0.6}
                />
            </div>

            {/* Background Gradient Blob */}
            <div style={{
                position: 'absolute',
                top: '-20%',
                right: '-10%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(0,0,0,0) 70%)',
                borderRadius: '50%',
                zIndex: 1,
                pointerEvents: 'none'
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div
                    style={{
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <FadeContent blur={true} duration={1000} delay={200}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1rem',
                            marginBottom: '2rem'
                        }}>

                            <h1 style={{ fontSize: 'clamp(2rem, 10vw, 2.5rem)', fontWeight: '800', margin: 0 }}>
                                WELCOME TO MY PORTFOLIO
                            </h1>

                            <GradientText
                                className="hero-name"
                                colors={['#5227FF', '#FF9FFC', '#B19EEF', '#5227FF']}
                                animationSpeed={10}
                                showBorder={false}
                            >
                                <h1 style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', fontWeight: '900', margin: 0 }}>
                                    Ashwin E
                                </h1>
                            </GradientText>
                        </div>
                    </FadeContent>

                    <FadeContent blur={true} duration={1000} delay={600}>
                        <p style={{
                            fontSize: '1.4rem',
                            color: 'var(--text-secondary)',
                            marginBottom: '3rem',
                            maxWidth: '800px',
                            lineHeight: '1.6'
                        }}>
                            I'm a passionate developer specializing in building exceptional digital experiences.
                            Currently focused on creating accessible, human-centered products.
                        </p>
                    </FadeContent>

                    <FadeContent blur={true} duration={1000} delay={1000}>
                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                            <a href="#projects" className="btn btn-primary">View Work</a>
                            <a href="#contact" className="btn btn-outline" style={{ border: '1px solid var(--accent-primary)', padding: '0.8rem 2rem', borderRadius: '8px' }}>Contact Me</a>
                        </div>
                    </FadeContent>
                </div>
            </div>
        </section>
    );
};

export default Hero;
