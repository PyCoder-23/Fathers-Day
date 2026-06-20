import { motion } from 'framer-motion';
import Particles from '@tsparticles/react';

export default function IntroScreen({ onEnter }) {

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)', transition: { duration: 2, ease: "easeInOut" } }}
      className="intro-container"
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 50,
      }}
    >
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: "#D4AF37",
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 0.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 40,
            },
            opacity: {
              value: { min: 0.1, max: 0.5 },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: -1,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        style={{ textAlign: 'center', zIndex: 10, padding: '0 2rem' }}
      >
        <p style={{
          fontFamily: 'var(--font-heading)',
          color: 'var(--gold)',
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
          marginBottom: '1rem',
          fontStyle: 'italic'
        }}>
          Papa,
        </p>
        <p style={{
          fontFamily: 'var(--font-body)',
          color: 'var(--white)',
          opacity: 0.8,
          fontSize: 'clamp(1rem, 2vw, 1.2rem)',
          lineHeight: 1.8,
          maxWidth: '500px',
          margin: '0 auto 4rem auto'
        }}>
          This is not just a website.<br />
          It is a small attempt to thank you for everything.
        </p>

        <motion.button
          className="btn-gold"
          onClick={onEnter}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Enter
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
