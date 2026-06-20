import { motion } from 'framer-motion';

export default function Section1Tribute() {
  return (
    <section className="section container" style={{ alignItems: 'center', textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{ maxWidth: '800px' }}
      >
        <h1 className="heading-lg" style={{ marginBottom: '3rem' }}>
          The Man I Call <span className="gold-gradient-text">Papa</span>
        </h1>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', opacity: 0.9 }}>
          <p>
            To the world, you are a visionary. A dedicated startup founder and CEO who gives his absolute best to every challenge he faces.
          </p>
          <p>
            But to me, your true greatness isn't measured in titles or milestones. It is found in the quiet moments of strength you show every single day.
          </p>
          <p>
            No matter how heavy the burden of work becomes, you never let the frustration reach our home. You walk through the door with a smile, treating everyone with an unwavering respect and kindness that I aspire to emulate.
          </p>
          <p>
            You are not just a remarkable professional; you are an exceptional husband, an incredible father, and the most ideal human being I have ever known.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
