import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Section4Belief() {
  const containerRef = useRef(null);
  
  const lines = [
    "There were times when I disappointed myself.",
    "Exams did not always go my way.",
    "I made mistakes.",
    "I failed expectations.",
    "But through every setback,",
    "you never stopped believing in me.",
    "you never stopped supporting me.",
    "you never stopped standing beside me.",
    "And that means more than I can ever explain."
  ];

  return (
    <section 
      ref={containerRef}
      className="section" 
      style={{ 
        padding: '10rem 2rem', 
        minHeight: '150vh', // extra height for scrolling effect
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <div style={{ position: 'sticky', top: '20vh', width: '100%', maxWidth: '800px', textAlign: 'center' }}>
        <motion.h2 
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="heading-lg" 
          style={{ marginBottom: '4rem', color: 'var(--white)' }}
        >
          You Never Stopped Believing
        </motion.h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', fontSize: 'clamp(1.2rem, 3vw, 1.8rem)' }}>
          {lines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: i >= 5 ? 1 : 0.7, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.5, delay: i * 0.4, ease: "easeOut" }}
              style={{
                color: i >= 5 ? 'var(--gold)' : 'var(--white)',
                fontFamily: i >= 5 ? 'var(--font-heading)' : 'var(--font-body)',
                fontStyle: i >= 5 ? 'italic' : 'normal',
                textShadow: i >= 5 ? '0 0 20px rgba(212, 175, 55, 0.3)' : 'none'
              }}
            >
              {line}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-5%" }}
          transition={{ duration: 2, delay: lines.length * 0.4 + 1 }}
          style={{ marginTop: '6rem' }}
        >
          <h3 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            color: 'var(--white)',
            letterSpacing: '2px'
          }}>
            "One day, I will make you proud."
          </h3>
        </motion.div>
      </div>
    </section>
  );
}
