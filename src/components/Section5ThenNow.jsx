import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Section5ThenNow() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="section container" style={{ padding: '8rem 2rem', overflow: 'hidden' }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4rem'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
          width: '100%',
          flexWrap: 'wrap'
        }}>
          {/* Then Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: -2 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{
              position: 'relative',
              width: '300px',
              height: '400px',
              backgroundColor: '#222',
              border: '8px solid var(--white)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
              padding: '10px',
              paddingBottom: '40px',
              zIndex: 2
            }}
          >
            <div style={{
              width: '100%',
              height: '100%',
              backgroundImage: 'url(/then.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundColor: '#333' // fallback color
            }} />
            <p style={{
              position: 'absolute',
              bottom: '10px',
              left: 0,
              width: '100%',
              textAlign: 'center',
              color: '#333',
              fontFamily: 'var(--font-heading)',
              fontSize: '1.2rem',
              margin: 0
            }}>Then</p>
          </motion.div>

          {/* Connection Line (Visible on Desktop) */}
          <div style={{ flex: 1, minWidth: '50px', position: 'relative', height: '2px', display: 'flex', alignItems: 'center', zIndex: 1 }}>
             <div style={{ position: 'absolute', width: '100%', height: '2px', backgroundColor: 'rgba(255,255,255,0.1)' }} />
             <motion.div style={{ position: 'absolute', width: lineWidth, height: '2px', backgroundColor: 'var(--gold)', boxShadow: '0 0 10px var(--gold)' }} />
          </div>

          {/* Now Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 2 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            style={{
              position: 'relative',
              width: '300px',
              height: '400px',
              backgroundColor: '#222',
              border: '8px solid var(--white)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
              padding: '10px',
              paddingBottom: '40px',
              zIndex: 2
            }}
          >
            <div style={{
              width: '100%',
              height: '100%',
              backgroundImage: 'url(/now.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundColor: '#333' // fallback color
            }} />
            <p style={{
              position: 'absolute',
              bottom: '10px',
              left: 0,
              width: '100%',
              textAlign: 'center',
              color: '#333',
              fontFamily: 'var(--font-heading)',
              fontSize: '1.2rem',
              margin: 0
            }}>Now</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 1 }}
          style={{ textAlign: 'center', marginTop: '2rem' }}
        >
          <h3 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: 'var(--gold)',
            lineHeight: 1.4
          }}>
            Years changed.<br/>
            You never did.
          </h3>
        </motion.div>
      </div>
    </section>
  );
}
