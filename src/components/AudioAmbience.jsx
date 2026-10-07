import React, { useEffect, useRef } from 'react';

/**
 * AudioAmbience component
 * Utilise la Web Audio API pour générer une ambiance musicale romantique,
 * douce et élégante (arpèges de harpe et résonances célestes)
 * sans dépendance à un fichier MP3 externe qui pourrait être bloqué ou expiré.
 */
export default function AudioAmbience({ isPlaying, onToggle }) {
  const audioCtxRef = useRef(null);
  const isPlayingRef = useRef(isPlaying);
  const timerRef = useRef(null);

  useEffect(() => {
    isPlayingRef.current = isPlaying;

    if (isPlaying) {
      startAmbientMusic();
    } else {
      stopAmbientMusic();
    }

    return () => {
      stopAmbientMusic();
    };
  }, [isPlaying]);

  const startAmbientMusic = () => {
    if (!audioCtxRef.current) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;
      audioCtxRef.current = new AudioContextClass();
    }

    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    // Progression harmonique douce en F majeur / D mineur pentatonique (romantique & céleste)
    // Fréquences (Hz) correspondant à F3, A3, C4, E4, G4, A4, C5, D5
    const notes = [
      174.61, // F3
      220.00, // A3
      261.63, // C4
      329.63, // E4
      392.00, // G4
      440.00, // A4
      523.25, // C5
      587.33, // D5
    ];

    let noteIndex = 0;

    const playHarpNote = () => {
      if (!isPlayingRef.current || !audioCtxRef.current) return;
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Choisir une note harmonieuse
      const freq = notes[noteIndex % notes.length];
      noteIndex = (noteIndex + Math.floor(Math.random() * 3) + 1) % notes.length;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      // Enveloppe d'attaque et de décroissance douce (type harpe/cloche céleste)
      const now = ctx.currentTime;
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.045, now + 0.12);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.8);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 3.0);

      // Prochaine note à intervalle régulier et apaisant
      const nextDelay = 800 + Math.random() * 400;
      timerRef.current = setTimeout(playHarpNote, nextDelay);
    };

    playHarpNote();
  };

  const stopAmbientMusic = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
      audioCtxRef.current.suspend();
    }
  };

  return null;
}
