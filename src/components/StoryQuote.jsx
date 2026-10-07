import React from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

export default function StoryQuote() {
  return (
    <section id="histoire" className="py-20 relative bg-white border-y border-gold-200/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8">
        
        {/* Emblem */}
        <div className="flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold-400" />
          <div className="w-10 h-10 rounded-full bg-gold-50 border border-gold-300 flex items-center justify-center">
            <Heart className="w-5 h-5 text-gold-600 fill-gold-600/30" />
          </div>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold-400" />
        </div>

        {/* Section title */}
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-widest font-semibold text-gold-700">
            Une Promesse Éternelle
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900">
            L’Amour qui nous unit
          </h2>
        </div>

        {/* Heartfelt words */}
        <div className="relative">
          <span className="font-serif text-7xl sm:text-8xl text-gold-200 absolute -top-8 -left-4 sm:left-4 select-none opacity-50">
            “
          </span>
          <p className="font-serif italic text-lg sm:text-2xl text-stone-700 leading-relaxed max-w-2xl mx-auto px-6">
            C’est avec une immense joie et une profonde gratitude que nous vous convions à célébrer l’union de nos vies. Entourés de nos familles, de nos amis et de ceux qui nous sont chers, nous franchissons le pas d’une alliance bénie pour l’éternité.
          </p>
          <span className="font-serif text-7xl sm:text-8xl text-gold-200 absolute -bottom-14 right-4 sm:right-10 select-none opacity-50">
            ”
          </span>
        </div>

        <div className="pt-4 flex flex-col items-center">
          <p className="font-cursive text-3xl sm:text-4xl text-gold-600">
            {WEDDING_DATA.couple.fullName}
          </p>
          <p className="text-xs uppercase tracking-widest font-sans text-stone-500 mt-1 font-medium">
            10 Octobre 2026 • Kolwezi (RDC)
          </p>
        </div>

        {/* 3 Pillars / Values Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 text-left">
          <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-gold-200/60 shadow-sm space-y-2">
            <div className="w-8 h-8 rounded-lg bg-gold-100 flex items-center justify-center text-gold-700 font-bold font-serif">
              01
            </div>
            <h3 className="font-serif font-bold text-lg text-stone-900">L’Alliance</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-normal">
              Un engagement sincère et fidèle, tissé dans le respect mutuel et la bienveillance.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-gold-200/60 shadow-sm space-y-2">
            <div className="w-8 h-8 rounded-lg bg-gold-100 flex items-center justify-center text-gold-700 font-bold font-serif">
              02
            </div>
            <h3 className="font-serif font-bold text-lg text-stone-900">Le Partage</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-normal">
              La joie d’accueillir nos proches pour partager un repas, des sourires et des danses inoubliables.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-gold-200/60 shadow-sm space-y-2">
            <div className="w-8 h-8 rounded-lg bg-gold-100 flex items-center justify-center text-gold-700 font-bold font-serif">
              03
            </div>
            <h3 className="font-serif font-bold text-lg text-stone-900">La Bénédiction</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-normal">
              Placer ce nouveau foyer sous la grâce et la protection divine pour toutes les années à venir.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
