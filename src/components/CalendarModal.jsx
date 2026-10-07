import React from 'react';
import { X, Calendar, Download, ExternalLink, Bell, Clock, MapPin } from 'lucide-react';
import { WEDDING_DATA, getGoogleCalendarUrl, downloadIcsFile } from '../data/weddingData';

export default function CalendarModal({ isOpen, onClose, onShowToast }) {
  if (!isOpen) return null;

  const handleIcs = () => {
    downloadIcsFile();
    if (onShowToast) {
      onShowToast("Fichier d'événement .ics téléchargé avec succès !");
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Ajouter l'événement au calendrier"
      className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 border border-gold-300 shadow-2xl relative space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-800 hover:bg-stone-100 transition-colors"
          aria-label="Fermer la fenêtre du calendrier"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center space-y-1.5 pt-1">
          <div className="w-12 h-12 rounded-2xl bg-gold-50 border border-gold-200 flex items-center justify-center mx-auto text-gold-700">
            <Calendar className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-stone-900">
            Enregistrer la Date
          </h3>
          <p className="text-xs text-stone-500">
            Choisissez votre application de calendrier préférée.
          </p>
        </div>

        {/* Event Recap Card */}
        <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-gold-200/70 space-y-2">
          <p className="font-serif font-bold text-stone-900 text-sm">
            {WEDDING_DATA.event.title}
          </p>
          <div className="flex items-center gap-2 text-xs text-stone-600">
            <Clock className="w-3.5 h-3.5 text-gold-600 shrink-0" />
            <span>{WEDDING_DATA.event.dateDisplay} à {WEDDING_DATA.event.timeDisplay}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-stone-600">
            <MapPin className="w-3.5 h-3.5 text-gold-600 shrink-0" />
            <span className="truncate">{WEDDING_DATA.venue.name}, {WEDDING_DATA.venue.city}</span>
          </div>
        </div>

        {/* Options */}
        <div className="space-y-3">
          <a
            href={getGoogleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full py-3.5 px-4 rounded-2xl bg-stone-900 hover:bg-gold-600 text-gold-100 text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-between"
          >
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gold-400" />
              <span>Google Agenda (Web / Android)</span>
            </span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>

          <button
            onClick={() => {
              handleIcs();
              onClose();
            }}
            className="w-full py-3.5 px-4 rounded-2xl bg-white hover:bg-gold-50 text-stone-900 border border-stone-300 text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-between"
          >
            <span className="flex items-center gap-2">
              <Download className="w-4 h-4 text-gold-600" />
              <span>Apple / Outlook / iCal (.ics)</span>
            </span>
            <Download className="w-3.5 h-3.5 text-stone-400" />
          </button>
        </div>

        <div className="text-center text-[11px] text-stone-400 flex items-center justify-center gap-1.5">
          <Bell className="w-3.5 h-3.5 text-gold-500" />
          <span>Rappel automatique programmé dans votre calendrier</span>
        </div>

      </div>
    </div>
  );
}
