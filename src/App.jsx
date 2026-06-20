import { useState, useRef, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ParticlesProvider } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import IntroScreen from './components/IntroScreen';
import Section1Tribute from './components/Section1Tribute';
import Section2Lessons from './components/Section2Lessons';
import Section3Memories from './components/Section3Memories';
import Section4Belief from './components/Section4Belief';
import Section5ThenNow from './components/Section5ThenNow';
import Section6Unsaid from './components/Section6Unsaid';
import Section7Letter from './components/Section7Letter';
import FinalSurprise from './components/FinalSurprise';
import AudioController from './components/AudioController';

function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio('/music.mp3');
    audioRef.current.loop = true;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
    };
  }, []);

  const handleEnter = () => {
    setHasEntered(true);
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.error("Audio playback failed", err);
      });
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <ParticlesProvider init={particlesInit}>
      <AnimatePresence>
        {!hasEntered && <IntroScreen onEnter={handleEnter} key="intro" />}
      </AnimatePresence>

      {hasEntered && (
        <main>
          <AudioController isPlaying={isPlaying} togglePlay={togglePlay} />
          <Section1Tribute />
          <Section2Lessons />
          <Section3Memories />
          <Section4Belief />
          <Section5ThenNow />
          <Section6Unsaid />
          <Section7Letter />
          <FinalSurprise />
        </main>
      )}
    </ParticlesProvider>
  );
}

export default App;
