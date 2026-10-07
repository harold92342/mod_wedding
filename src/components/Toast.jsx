import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

export default function Toast({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-stone-900 text-gold-100 px-5 py-3.5 rounded-2xl shadow-2xl border border-gold-500/40 animate-fade-in-up backdrop-blur-lg">
      <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0" />
      <span className="text-sm font-medium tracking-wide">{message}</span>
      <button
        onClick={onClose}
        className="ml-2 text-stone-400 hover:text-white transition-colors"
        aria-label="Fermer la notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
