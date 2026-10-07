import React from 'react';
import { Calendar, Download, ExternalLink, Bell, Check, Sparkles } from 'lucide-react';
import { WEDDING_DATA, getGoogleCalendarUrl, downloadIcsFile } from '../data/weddingData';

export default function CalendarSection({ onShowToast }) {
  const handleIcsDownload = () => {
    downloadIcsFile();
    if (onShowToast) {
      onShowToast("Fichier d'événement .ics téléchargé avec succès !");
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#FAF8F5] to-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
        
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-50 border border-gold-300 text-gold-700 text-xs font-semibold tracking-widest uppercase shadow-sm">
            <Calendar className="w-3.5 h-3.5 text-gold-600" />
            <span>Save the Date</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900">
            Ajouter à Votre Calendrier
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-sans max-w-xl mx-auto">
            Ne manquez rien de cet événement unique. Enregistrez la date en un clic sur votre smartphone ou ordinateur pour recevoir un rappel automatique.
          </p>
        </div>

        {/* 2 Big Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
          
          {/* Google Calendar Card */}
          <div className="p-6 rounded-3xl bg-white border border-gold-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-stone-900">
                  Google Calendar
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Idéal pour Android, Gmail, Google Agenda sur PC ou Mac.
                </p>
              </div>
            </div>

            <a
              href={getGoogleCalendarUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-2xl bg-stone-900 hover:bg-gold-600 text-gold-100 text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group shadow-sm"
            >
              <span>Ajouter à Google Agenda</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Apple Calendar & Outlook (.ics) */}
          <div className="p-6 rounded-3xl bg-white border border-gold-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-gold-50 border border-gold-200 flex items-center justify-center text-gold-700">
                <Download className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-stone-900">
                  Apple &amp; Outlook (.ics)
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Format standard iCalendar compatible iPhone, iPad, Mac et Outlook.
                </p>
              </div>
            </div>

            <button
              onClick={handleIcsDownload}
              className="w-full py-3.5 px-4 rounded-2xl bg-white hover:bg-gold-50 text-stone-900 border border-gold-300 text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group shadow-sm"
            >
              <span>Télécharger le fichier .ics</span>
              <Download className="w-3.5 h-3.5 text-gold-600 group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

        {/* Reassurance footnote */}
        <div className="inline-flex items-center gap-2 text-xs text-stone-500">
          <Bell className="w-4 h-4 text-gold-500" />
          <span>Événement configuré : 10 Octobre 2026 • 16h00 (Africa/Lubumbashi UTC+2)</span>
        </div>

      </div>
    </section>
  );
}
