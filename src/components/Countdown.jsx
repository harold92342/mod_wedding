import React, { useState, useEffect } from 'react';
import { Clock, Sparkles, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { WEDDING_DATA } from '../data/weddingData';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isCompleted: false,
  });

  useEffect(() => {
    const targetDate = new Date(WEDDING_DATA.event.targetIsoDate).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isCompleted: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isCompleted: false,
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const triggerCelebration = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#DEB552', '#C89A2B', '#E5C378', '#FAF3DD', '#ffffff'],
    });
  };

  const timeUnits = [
    { label: 'Jours', value: timeLeft.days },
    { label: 'Heures', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Secondes', value: timeLeft.seconds },
  ];

  return (
    <section id="compte-a-rebours" className="py-20 bg-stone-900 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-72 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-10">
        
        {/* Title */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/20 border border-gold-400/30 text-gold-300 text-xs font-semibold tracking-widest uppercase">
            <Clock className="w-3.5 h-3.5" />
            <span>Chaque Seconde Rapproche Notre Bonheur</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Compte à Rebours
          </h2>
          <p className="text-stone-300 font-sans text-sm sm:text-base max-w-xl mx-auto">
            Rendez-vous le <strong className="text-gold-300 font-semibold">{WEDDING_DATA.event.dateDisplay} à {WEDDING_DATA.event.timeDisplay}</strong> à la {WEDDING_DATA.venue.name}.
          </p>
        </div>

        {/* Counter cards */}
        {timeLeft.isCompleted ? (
          <div className="p-8 rounded-3xl bg-gold-900/40 border border-gold-400/50 max-w-lg mx-auto shadow-2xl space-y-3">
            <Heart className="w-12 h-12 text-gold-400 mx-auto fill-gold-400 animate-bounce" />
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gold-200">
              C’est le Grand Jour !
            </h3>
            <p className="text-sm text-stone-200">
              Nous célébrons aujourd’hui le mariage de Modeste &amp; Plamédie. Bienvenue à la fête !
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
            {timeUnits.map((unit, idx) => (
              <div
                key={idx}
                className="group relative p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-stone-850/90 border border-gold-500/30 hover:border-gold-400 transition-all duration-300 shadow-xl flex flex-col items-center justify-center backdrop-blur-sm"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gold-500/5 group-hover:bg-gold-500/10 transition-colors pointer-events-none" />

                <span className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-gold-300 tracking-tight leading-none group-hover:scale-105 transition-transform duration-200">
                  {String(unit.value).padStart(2, '0')}
                </span>
                <span className="mt-2 text-stone-400 font-sans text-xs sm:text-sm uppercase tracking-widest font-medium">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Interaction trigger */}
        <div className="pt-2">
          <button
            onClick={triggerCelebration}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold-500/20 hover:bg-gold-500/30 border border-gold-400/40 text-gold-200 text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300"
          >
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span>Célébrer dès maintenant 🎊</span>
          </button>
        </div>

      </div>
    </section>
  );
}
