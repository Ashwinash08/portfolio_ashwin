import LiquidEther from './LiquidEther';
import GradientText from './GradientText';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            padding: '100px 0',
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
                top: '-10%',
                right: '-5%',
                width: 'clamp(300px, 50vw, 800px)',
                height: 'clamp(300px, 50vw, 800px)',
                background: 'radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, rgba(0,0,0,0) 70%)',
                borderRadius: '50%',
                zIndex: 1,
                pointerEvents: 'none',
                filter: 'blur(60px)'
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
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1.5rem',
                            marginBottom: '2.5rem'
                        }}>
                            <span style={{
                                color: 'var(--accent-primary)',
                                fontWeight: '700',
                                letterSpacing: '4px',
                                textTransform: 'uppercase',
                                fontSize: '0.9rem',
                                background: 'rgba(99, 102, 241, 0.1)',
                                padding: '0.5rem 1.5rem',
                                borderRadius: '50px',
                                border: '1px solid rgba(99, 102, 241, 0.2)'
                            }}>
                                Welcome to my world
                            </span>

                            <GradientText
                                className="hero-name"
                                colors={['#5227FF', '#FF9FFC', '#B19EEF', '#5227FF']}
                                animationSpeed={10}
                                showBorder={false}
                            >
                                <h1 style={{
                                    fontSize: 'clamp(3.5rem, 12vw, 8rem)',
                                    fontWeight: '900',
                                    margin: 0,
                                    lineHeight: '0.9',
                                    letterSpacing: '-2px'
                                }}>
                                    Ashwin E
                                </h1>
                            </GradientText>

                            <h2 style={{
                                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                                fontWeight: '700',
                                margin: 0,
                                opacity: 0.9
                            }}>

                            </h2>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <p style={{
                            fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
                            color: 'var(--text-secondary)',
                            marginBottom: '3.5rem',
                            maxWidth: '750px',
                            lineHeight: '1.6',
                            fontWeight: '400'
                        }}>
                            I'm a passionate developer currently pursuing my Master of Computer Applications [MCA].
                            I specialize in building exceptional digital experiences and human-centered products.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div style={{
                            display: 'flex',
                            gap: '1.5rem',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            width: '100%',
                            maxWidth: '500px'
                        }}>
                            <a href="#projects" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                                View My Work
                            </a>
                            <a href="#contact" className="btn btn-outline" style={{
                                padding: '1rem 2.5rem',
                                borderRadius: '50px',
                                fontSize: '1.1rem',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}>
                                Let's Talk
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                style={{
                    position: 'absolute',
                    bottom: '40px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '10px'
                }}
            >
                <div style={{
                    width: '30px',
                    height: '50px',
                    border: '2px solid rgba(255,255,255,0.2)',
                    borderRadius: '20px',
                    position: 'relative'
                }}>
                    <motion.div
                        animate={{ y: [0, 15, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        style={{
                            width: '6px',
                            height: '6px',
                            background: 'var(--accent-primary)',
                            borderRadius: '50%',
                            position: 'absolute',
                            left: '50%',
                            top: '10px',
                            marginLeft: '-3px'
                        }}
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
