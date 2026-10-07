import React from 'react';
import { MapPin, Navigation, Compass, Copy, ExternalLink, Clock, CalendarCheck } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

export default function DetailsLocation({ onShowToast }) {
  const handleCopyAddress = () => {
    navigator.clipboard.writeText(WEDDING_DATA.venue.fullAddress);
    if (onShowToast) {
      onShowToast("Adresse officielle copiée dans le presse-papier !");
    }
  };

  const handleCopyCoords = () => {
    navigator.clipboard.writeText(`${WEDDING_DATA.venue.coordinates.lat}, ${WEDDING_DATA.venue.coordinates.lng}`);
    if (onShowToast) {
      onShowToast("Coordonnées GPS copiées !");
    }
  };

  // OpenStreetMap embed URL centered precisely on the coordinates
  const osmEmbedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${WEDDING_DATA.venue.coordinates.lng - 0.008}%2C${WEDDING_DATA.venue.coordinates.lat - 0.006}%2C${WEDDING_DATA.venue.coordinates.lng + 0.008}%2C${WEDDING_DATA.venue.coordinates.lat + 0.006}&layer=mapnik&marker=${WEDDING_DATA.venue.coordinates.lat}%2C${WEDDING_DATA.venue.coordinates.lng}`;

  return (
    <section id="lieu" className="py-24 bg-[#FAF8F5] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gold-300 text-gold-700 text-xs font-semibold tracking-widest uppercase shadow-sm">
            <Compass className="w-3.5 h-3.5 text-gold-600" />
            <span>Lieu &amp; Accès</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900">
            La Cérémonie &amp; Réception
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-sans">
            Toutes les indications pour rejoindre la célébration dans les meilleures conditions.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Details Card (Left) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gold-200/80 shadow-lg shadow-stone-900/5 space-y-6">
              
              <div className="border-b border-stone-100 pb-5">
                <span className="text-xs uppercase font-bold tracking-widest text-gold-700">
                  Lieu Officiel
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
                  {WEDDING_DATA.venue.name}
                </h3>
                <p className="text-stone-600 font-sans text-sm mt-1">
                  {WEDDING_DATA.venue.city}, {WEDDING_DATA.venue.country}
                </p>
              </div>

              {/* Information Rows */}
              <div className="space-y-4">
                
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-gold-50 border border-gold-200 flex items-center justify-center shrink-0 text-gold-700">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-wider text-stone-600 font-bold">
                      Adresse complète
                    </p>
                    <p className="text-sm font-semibold text-stone-900 mt-0.5">
                      {WEDDING_DATA.venue.address}
                    </p>
                    <p className="text-xs text-stone-500">
                      {WEDDING_DATA.venue.city}, République Démocratique du Congo
                    </p>
                  </div>
                  <button
                    onClick={handleCopyAddress}
                    className="p-2 rounded-xl text-stone-500 hover:text-gold-700 hover:bg-gold-50 transition-colors"
                    title="Copier l'adresse"
                    aria-label="Copier l'adresse"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>

                {/* Date & Time */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-gold-50 border border-gold-200 flex items-center justify-center shrink-0 text-gold-700">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-stone-600 font-bold">
                      Date &amp; Horaire
                    </p>
                    <p className="text-sm font-semibold text-stone-900 mt-0.5">
                      {WEDDING_DATA.event.dateDisplay}
                    </p>
                    <p className="text-xs text-stone-500">
                      Début précis à <strong>{WEDDING_DATA.event.timeDisplay}</strong> (Ouverture des portes dès 15h30)
                    </p>
                  </div>
                </div>

                {/* GPS Coordinates */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-gold-50 border border-gold-200 flex items-center justify-center shrink-0 text-gold-700">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-wider text-stone-600 font-bold">
                      Coordonnées GPS
                    </p>
                    <p className="text-xs font-mono font-semibold text-stone-900 mt-0.5">
                      {WEDDING_DATA.venue.coordinates.originalText}
                    </p>
                    <p className="text-xs font-mono text-stone-500">
                      {WEDDING_DATA.venue.coordinates.lat}, {WEDDING_DATA.venue.coordinates.lng}
                    </p>
                  </div>
                  <button
                    onClick={handleCopyCoords}
                    className="p-2 rounded-xl text-stone-500 hover:text-gold-700 hover:bg-gold-50 transition-colors"
                    title="Copier les coordonnées GPS"
                    aria-label="Copier les coordonnées GPS"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>

              </div>

              {/* Navigation Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={WEDDING_DATA.venue.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-5 py-3 rounded-2xl bg-stone-900 hover:bg-gold-600 text-gold-100 text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-md"
                >
                  <Navigation className="w-4 h-4 text-gold-400" />
                  <span>Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>

                <a
                  href={WEDDING_DATA.venue.appleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-5 py-3 rounded-2xl bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Navigation className="w-4 h-4 text-stone-600" />
                  <span>Apple Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>

            </div>

            {/* Practical Advice Banner */}
            <div className="p-4 rounded-2xl bg-gold-50/70 border border-gold-200 text-stone-700 text-xs sm:text-sm flex items-center gap-3">
              <CalendarCheck className="w-5 h-5 text-gold-600 shrink-0" />
              <span>
                <strong>Recommandation :</strong> Nous conseillons à nos convives d'arriver avec 30 minutes d'avance pour vous installer sereinement avant le début de la cérémonie.
              </span>
            </div>

          </div>

          {/* Map Preview (Right) */}
          <div className="lg:col-span-6 h-full">
            <div className="bg-white rounded-3xl p-2.5 sm:p-3 border border-gold-200/80 shadow-lg shadow-stone-900/5 h-full flex flex-col">
              
              <div className="relative w-full h-[360px] sm:h-[440px] rounded-2xl overflow-hidden border border-stone-200">
                <iframe
                  title="Carte de localisation SALLE DE FETE SESOYA Kolwezi"
                  src={osmEmbedUrl}
                  className="w-full h-full border-0"
                  loading="lazy"
                />
                
                {/* Floating Map Pin Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-gold-300 shadow-xl flex items-center justify-between">
                  <div>
                    <p className="font-serif text-sm font-bold text-stone-900">
                      {WEDDING_DATA.venue.name}
                    </p>
                    <p className="text-[11px] text-stone-600">
                      Croisement 6ième Ave &amp; Ave Kananga
                    </p>
                  </div>
                  <a
                    href={WEDDING_DATA.venue.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-xl bg-gold-500 hover:bg-gold-600 text-stone-950 font-bold text-xs uppercase tracking-wider flex items-center gap-1 transition-colors"
                  >
                    <span>Lancer GPS</span>
                    <Navigation className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="p-3 text-center">
                <p className="text-[11px] text-stone-500 font-sans">
                  Coordonnées vérifiées : 10°42'00.10"S 25°31'04.74"E • Kolwezi, République Démocratique du Congo
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
