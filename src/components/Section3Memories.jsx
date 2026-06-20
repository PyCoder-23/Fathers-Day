import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const memories = [
  { title: "Childhood Lessons", desc: "When you taught me things as a child." },
  { title: "Ooty Walks", desc: "The conversations while walking together in Ooty." },
  { title: "Singapore", desc: "The fun we had despite a packed schedule." },
  { title: "Family Nights", desc: "The laughter, jokes, and your charming presence." },
  { title: "Every Academic Journey", desc: "Supporting me through every success and failure." }
];

export default function Section3Memories() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="section container" style={{ padding: '8rem 2rem' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        style={{ textAlign: 'center', marginBottom: '6rem' }}
      >
        <h2 className="heading-lg">Memories</h2>
      </motion.div>

      <div ref={containerRef} style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', padding: '2rem 0' }}>
        {/* The background static line */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          bottom: 0,
          width: '2px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          transform: 'translateX(-50%)'
        }} />

        {/* The animated gold line */}
        <motion.div style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          height: lineHeight,
          width: '2px',
          backgroundColor: 'var(--gold)',
          transform: 'translateX(-50%)',
          boxShadow: '0 0 15px var(--gold)',
          zIndex: 1
        }} />

        {memories.map((memory, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              style={{
                display: 'flex',
                justifyContent: isLeft ? 'flex-start' : 'flex-end',
                alignItems: 'center',
                width: '100%',
                marginBottom: '6rem',
                position: 'relative',
                zIndex: 2
              }}
            >
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.5, delay: 0.5 }}
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary-bg)',
                  border: '3px solid var(--gold)',
                  boxShadow: '0 0 10px var(--gold)'
                }}
              />

              <div style={{
                width: '45%',
                textAlign: isLeft ? 'right' : 'left',
                padding: isLeft ? '0 3rem 0 0' : '0 0 0 3rem'
              }}>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--gold)',
                  fontSize: '1.8rem',
                  marginBottom: '0.5rem'
                }}>
                  {memory.title}
                </h3>
                <p style={{
                  fontSize: '1.1rem',
                  opacity: 0.8
                }}>
                  {memory.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
