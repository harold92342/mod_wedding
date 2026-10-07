import React from 'react';
import { Calendar, MapPin, MessageCircle, Heart, Sparkles, Navigation } from 'lucide-react';
import { WEDDING_DATA, getWhatsAppUrl } from '../data/weddingData';

export default function Hero({ onOpenCalendar, onOpenShare }) {
  return (
    <section id="accueil" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left / Top Text & Presentation */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-gold-300 shadow-sm text-gold-700 text-xs sm:text-sm font-semibold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-gold-500 animate-pulse" />
              <span>Mariage Honorable &amp; Célébration d’Amour</span>
            </div>

            {/* Couple Names */}
            <div className="space-y-2">
              <p className="font-cursive text-3xl sm:text-4xl text-gold-600">
                L’heureux mariage de
              </p>
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-stone-900 leading-[1.08]">
                <span>{WEDDING_DATA.couple.groom}</span>
                <span className="block font-cursive font-normal text-4xl sm:text-5xl md:text-6xl text-gold-500 my-1">
                  &amp;
                </span>
                <span>{WEDDING_DATA.couple.bride}</span>
              </h1>
            </div>

            {/* Official Date & Location Banner */}
            <div className="pt-2 pb-1 space-y-3">
              <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-4 text-stone-800 font-sans text-sm sm:text-base font-medium">
                <span className="flex items-center gap-1.5 font-semibold text-stone-900">
                  <Calendar className="w-4 h-4 text-gold-600 shrink-0" />
                  {WEDDING_DATA.event.dateDisplay}
                </span>
                <span className="text-stone-400 hidden sm:inline">•</span>
                <span className="flex items-center gap-1.5 font-semibold text-stone-900">
                  <span className="w-2 h-2 rounded-full bg-gold-500" />
                  À partir de {WEDDING_DATA.event.timeDisplay}
                </span>
                <span className="text-stone-400 hidden sm:inline">•</span>
                <span className="flex items-center gap-1.5 font-semibold text-gold-700">
                  <MapPin className="w-4 h-4 text-gold-600 shrink-0" />
                  {WEDDING_DATA.venue.city}, {WEDDING_DATA.venue.country}
                </span>
              </div>

              <div className="bg-white/80 backdrop-blur-sm border border-gold-200/70 rounded-2xl p-4 shadow-sm max-w-xl mx-auto lg:mx-0">
                <p className="text-xs uppercase font-bold tracking-wider text-gold-700 mb-0.5">
                  Lieu de réception
                </p>
                <p className="font-serif text-lg sm:text-xl font-bold text-stone-900">
                  {WEDDING_DATA.venue.name}
                </p>
                <p className="text-xs sm:text-sm text-stone-600">
                  {WEDDING_DATA.venue.address}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <button
                onClick={onOpenCalendar}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-stone-900 hover:bg-gold-600 text-gold-100 font-sans text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-lg hover:shadow-gold-500/25 flex items-center justify-center gap-2 group"
              >
                <Calendar className="w-4 h-4 text-gold-400 group-hover:scale-110 transition-transform" />
                <span>Ajouter au calendrier</span>
              </button>

              <a
                href={WEDDING_DATA.venue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white hover:bg-gold-50 text-stone-800 border border-gold-300 font-sans text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-sm flex items-center justify-center gap-2 group"
              >
                <Navigation className="w-4 h-4 text-gold-600 group-hover:rotate-45 transition-transform" />
                <span>Itinéraire GPS</span>
              </a>

              <a
                href={getWhatsAppUrl("Chers Modeste & Plamédie, toutes nos félicitations pour votre mariage ! Que Jéhovah bénisse votre union.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#25D366]/10 hover:bg-[#25D366] text-stone-900 hover:text-white border border-[#25D366]/30 font-sans text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-sm flex items-center justify-center gap-2 group"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:text-white transition-colors" />
                <span>Écrire sur WhatsApp</span>
              </a>
            </div>

            {/* Warm Note */}
            <p className="text-xs text-stone-600 pt-1 italic font-serif">
              « Une corde triple ne se rompt pas facilement. » — Ecclésiaste 4:12
            </p>
          </div>

          {/* Right / Hero Photo Feature */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative max-w-sm sm:max-w-md w-full">
              
              {/* Golden frame background offset */}
              <div className="absolute -inset-2.5 rounded-[2.5rem] bg-gradient-to-tr from-gold-400 via-gold-200 to-amber-500 opacity-60 blur-sm transform -rotate-1" />
              
              <div className="relative rounded-[2.2rem] overflow-hidden bg-white shadow-2xl border-4 border-white">
                <img
                  src="/images/5.jpeg"
                  alt="Modeste & Plamédie - Mariage"
                  className="w-full h-[450px] sm:h-[500px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  fetchPriority="high"
                />

                {/* Subtle dark gradient overlay at bottom for badge contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-5 inset-x-5 text-white flex items-end justify-between">
                  <div>
                    <p className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-gold-100">
                      Modeste &amp; Plamédie
                    </p>
                    <p className="text-xs text-white/90 font-sans tracking-widest uppercase">
                      Samedi 10 Octobre 2026
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40">
                    <Heart className="w-5 h-5 text-gold-300 fill-gold-300 animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Floating Floating Pill Badges */}
              <div className="absolute -top-4 -left-3 sm:-left-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl border border-gold-200 flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-gold-500 animate-ping" />
                <span className="font-sans text-xs font-bold uppercase tracking-wider text-stone-800">
                  10 Octobre 2026
                </span>
              </div>

              <div className="absolute -bottom-3 -right-3 sm:-right-4 bg-stone-900/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-gold-400/40 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold-400" />
                <span className="font-sans text-xs font-bold uppercase tracking-wider text-gold-100">
                  Kolwezi • RDC
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
