import React from 'react';
import { Heart, ArrowUp, Calendar, MapPin, Sparkles } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

export default function Footer({ onOpenShare, onOpenCalendar }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-white pt-20 pb-12 border-t border-gold-500/20 relative overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Top Footer Card */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-500/10 border border-gold-400/30 text-gold-300">
            <span className="font-serif text-2xl font-bold tracking-wider">
              {WEDDING_DATA.couple.monogram}
            </span>
          </div>

          <div className="space-y-2">
            <p className="font-cursive text-3xl sm:text-4xl text-gold-400">
              Modeste &amp; Plamédie
            </p>
            <h3 className="font-serif text-xl sm:text-2xl text-stone-200">
              Notre Grand Jour • 10 Octobre 2026
            </h3>
          </div>

          <p className="text-stone-400 text-xs sm:text-sm max-w-md mx-auto">
            Nous avons hâte de partager la joie de cette journée et de célébrer ce beau mariage à la {WEDDING_DATA.venue.name} à Kolwezi avec chacun d'entre vous.
          </p>

          {/* Quick buttons */}
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <button
              onClick={onOpenCalendar}
              className="px-5 py-2.5 rounded-full bg-gold-500/20 hover:bg-gold-500/30 text-gold-200 border border-gold-400/40 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Ajouter au calendrier</span>
            </button>
            <button
              onClick={onOpenShare}
              className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-300" />
              <span>Partager l'invitation</span>
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-stone-800" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div className="flex items-center gap-1.5">
            <span>Fait avec amour pour</span>
            <strong className="text-stone-300 font-semibold">{WEDDING_DATA.couple.fullName}</strong>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 ml-1 inline" />
          </div>

          <div className="flex items-center gap-4">
            <span>Kolwezi, RDC • 10.10.2026</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white transition-colors"
              title="Retour en haut"
              aria-label="Retour en haut"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
