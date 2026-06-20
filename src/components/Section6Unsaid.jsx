import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Section6Unsaid() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const statements = [
    "Thank you.",
    "For every sacrifice.",
    "For every late night.",
    "For every difficult decision.",
    "For every opportunity.",
    "For every moment you stood beside me.",
    "For believing in me."
  ];

  // We have a sticky container that takes up 100vh.
  // The total height of the section will be, say, 800vh (one statement per vh roughly).
  // We calculate the opacity of each statement based on scrollYProgress.

  return (
    <section ref={containerRef} style={{ height: `${statements.length * 100}vh`, position: 'relative' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        
        {statements.map((statement, index) => {
          // Calculate ranges for this specific statement
          const startFadeIn = index / statements.length;
          const endFadeIn = (index + 0.2) / statements.length;
          const startFadeOut = (index + 0.8) / statements.length;
          const endFadeOut = (index + 1) / statements.length;

          // eslint-disable-next-line react-hooks/rules-of-hooks
          const opacity = useTransform(
            scrollYProgress,
            [startFadeIn, endFadeIn, startFadeOut, endFadeOut],
            [0, 1, 1, 0]
          );

          // eslint-disable-next-line react-hooks/rules-of-hooks
          const y = useTransform(
            scrollYProgress,
            [startFadeIn, endFadeOut],
            [50, -50]
          );

          return (
            <motion.h2
              key={index}
              style={{
                position: 'absolute',
                opacity,
                y,
                textAlign: 'center',
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                color: 'var(--white)',
                padding: '0 2rem',
                textShadow: '0 0 20px rgba(255,255,255,0.2)'
              }}
            >
              {statement}
            </motion.h2>
          );
        })}
      </div>
    </section>
  );
}
