import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AudioController({ isPlaying, togglePlay }) {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      onClick={togglePlay}
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: 'rgba(16, 16, 16, 0.8)',
        border: '1px solid rgba(212, 175, 55, 0.3)',
        color: 'var(--gold)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        zIndex: 100,
        boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
      }}
      whileHover={{ scale: 1.1, backgroundColor: 'rgba(16, 16, 16, 1)' }}
      whileTap={{ scale: 0.9 }}
    >
      {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
    </motion.button>
  );
}
