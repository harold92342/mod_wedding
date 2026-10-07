import React from 'react';
import { Heart, BookOpen } from 'lucide-react';
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
            Une Promesse devant Jéhovah
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900">
            « L’amour ne disparaît jamais »
          </h2>
          <p className="text-xs font-sans uppercase tracking-widest text-stone-500 font-semibold">
            1 Corinthiens 13:8
          </p>
        </div>

        {/* Heartfelt words */}
        <div className="relative">
          <span className="font-serif text-7xl sm:text-8xl text-gold-200 absolute -top-8 -left-4 sm:left-4 select-none opacity-50">
            “
          </span>
          <p className="font-serif italic text-lg sm:text-2xl text-stone-700 leading-relaxed max-w-2xl mx-auto px-6">
            C’est avec une immense joie et une profonde gratitude envers Jéhovah que nous vous convions à célébrer l’union de nos vies. Entourés de nos familles, de nos frères et sœurs et de nos amis, nous franchissons le pas d’un engagement fidèle, fondé sur l’amour véritable, la patience et le respect mutuel.
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
            <h3 className="font-serif font-bold text-lg text-stone-900">L’Amour Véritable</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-normal">
              « L’amour est patient et bon. » (1 Cor. 13:4). Un amour pur et sincère qui pardonne et persévère à travers chaque étape.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-gold-200/60 shadow-sm space-y-2">
            <div className="w-8 h-8 rounded-lg bg-gold-100 flex items-center justify-center text-gold-700 font-bold font-serif">
              02
            </div>
            <h3 className="font-serif font-bold text-lg text-stone-900">La Corde Triple</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-normal">
              « Une corde triple ne se rompt pas facilement. » (Eccl. 4:12). Accorder la première place à Jéhovah pour fortifier notre couple.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-gold-200/60 shadow-sm space-y-2">
            <div className="w-8 h-8 rounded-lg bg-gold-100 flex items-center justify-center text-gold-700 font-bold font-serif">
              03
            </div>
            <h3 className="font-serif font-bold text-lg text-stone-900">La Bénédiction de Jéhovah</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-normal">
              « C’est la bénédiction de Jéhovah qui enrichit. » (Prov. 10:22). Bâtir un foyer paisible, uni et rayonnant d'hospitalité.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
