import { motion } from 'framer-motion';

const lessons = [
  "Help those in need",
  "Be a good human being",
  "Do the right thing",
  "Work hard",
  "Stay humble",
  "Stay kind"
];

export default function Section2Lessons() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="section container" style={{ padding: '8rem 2rem' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        style={{ textAlign: 'center', marginBottom: '5rem' }}
      >
        <h2 className="heading-lg">The Lessons You Taught Me</h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}
      >
        {lessons.map((lesson, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -10, scale: 1.02 }}
            style={{
              backgroundColor: 'var(--secondary-bg)',
              border: '1px solid rgba(212, 175, 55, 0.2)',
              borderRadius: '8px',
              padding: '3rem 2rem',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
              transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
              cursor: 'default'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--gold)';
              e.currentTarget.style.boxShadow = '0 0 30px rgba(212, 175, 55, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.2)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
            }}
          >
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.5rem',
              color: 'var(--soft-gold)',
              margin: 0
            }}>
              {lesson}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
