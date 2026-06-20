import { motion } from 'framer-motion';

export default function Section7Letter() {
  return (
    <section className="section container" style={{ padding: '8rem 2rem', alignItems: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{
          maxWidth: '800px',
          backgroundColor: 'rgba(16, 16, 16, 0.8)',
          border: '1px solid rgba(212, 175, 55, 0.3)',
          padding: '4rem 3rem',
          borderRadius: '12px',
          boxShadow: '0 20px 50px rgba(0,0,0,0.5), inset 0 0 20px rgba(212, 175, 55, 0.05)'
        }}
      >
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          fontSize: '1.2rem',
          lineHeight: 1.8,
          opacity: 0.9,
          fontFamily: 'var(--font-heading)'
        }}>
          <p>Dear Papa,</p>
          <p>
            When I look back at everything we have shared, I realize that I have been given a gift that most people spend their entire lives searching for: a truly great father.
          </p>
          <p>
            I know I wasn't always the easiest child to raise. Between the endless demands, the occasional rebellious phases, and the moments when I thought I knew better (even when I clearly didn't), you handled it all with a patience I still cannot comprehend.
          </p>
          <p>
            You have spent your entire life trying to become a good father. And Papa, I want you to know—with absolute certainty—that you succeeded.
          </p>
          <p>
            I know I still have a long way to go. I am still learning, still stumbling, and still trying to figure out how to be half the man you are. But I promise you this:
          </p>
          <p style={{ color: 'var(--gold)', fontSize: '1.3rem', fontStyle: 'italic', textAlign: 'center', margin: '2rem 0' }}>
            One day you will look at me and know your faith was worth it.
          </p>
          <p>
            Thank you for everything. Not just for the big sacrifices, but for the countless little things that made my life so beautiful.
          </p>
          <p>I love you.</p>
          <p style={{ marginTop: '2rem', color: 'var(--soft-gold)' }}>
            — Your Son
          </p>
        </div>
      </motion.div>
    </section>
  );
}
