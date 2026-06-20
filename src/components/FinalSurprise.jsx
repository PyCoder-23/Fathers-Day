import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function FinalSurprise() {
  const containerRef = useRef(null);
  
  // Create a tall scrolling section to orchestrate the reveal
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate opacity for each text block based on scroll progress
  // There are 4 messages.
  const m1Opacity = useTransform(scrollYProgress, [0.0, 0.1, 0.2, 0.3], [0, 1, 1, 0]);
  const m2Opacity = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.55], [0, 1, 1, 0]);
  const m3Opacity = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  const m4Opacity = useTransform(scrollYProgress, [0.75, 0.85, 1, 1], [0, 1, 1, 1]); // Stays visible
  
  const m4Scale = useTransform(scrollYProgress, [0.75, 0.9, 1], [0.8, 1, 1.1]);
  const m4Glow = useTransform(scrollYProgress, [0.85, 1], ['0px 0px 0px rgba(212, 175, 55, 0)', '0px 0px 40px rgba(212, 175, 55, 0.6)']);

  return (
    <section ref={containerRef} style={{ height: '500vh', position: 'relative' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--primary-bg)' }}>
        
        <motion.div style={{ position: 'absolute', opacity: m1Opacity, textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 4vw, 3rem)', color: 'var(--white)' }}>
            One last thing...
          </h2>
        </motion.div>

        <motion.div style={{ position: 'absolute', opacity: m2Opacity, textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 4vw, 3rem)', color: 'var(--white)' }}>
            I have a small surprise waiting for you.
          </h2>
        </motion.div>

        <motion.div style={{ position: 'absolute', opacity: m3Opacity, textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 4vw, 3rem)', color: 'var(--gold)' }}>
            Check the highest cupboard beside your bed.
          </h2>
        </motion.div>

        <motion.div style={{ position: 'absolute', opacity: m4Opacity, scale: m4Scale, textAlign: 'center' }}>
          <motion.h1 style={{ 
            fontFamily: 'var(--font-heading)', 
            fontSize: 'clamp(2rem, 6vw, 5rem)', 
            color: 'var(--gold)',
            textShadow: m4Glow,
            margin: 0
          }}>
            Happy Father's Day, Papa ❤️
          </motion.h1>
          <motion.p style={{ marginTop: '2rem', color: 'var(--white)', opacity: 0.5 }}>
            You can now close this page.
          </motion.p>
        </motion.div>

      </div>
    </section>
  );
}
