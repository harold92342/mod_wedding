import React, { useState } from 'react';
import { MessageCircle, Send, Sparkles, Phone, CheckCircle2 } from 'lucide-react';
import { WEDDING_DATA, getWhatsAppUrl } from '../data/weddingData';

export default function WhatsAppContact() {
  const defaultPresets = [
    {
      id: 'wishes',
      label: 'Félicitations chaleureuses 💐',
      text: 'Chers Modeste & Plamédie, toutes nos félicitations pour votre mariage à venir ! Que Dieu bénisse votre foyer d’abondance et de joie.',
    },
    {
      id: 'rsvp',
      label: 'Confirmer ma venue 🥂',
      text: 'Bonjour Modeste & Plamédie, c’est avec grand plaisir que je confirme ma présence à votre mariage le 10 octobre 2026 à la SALLE DE FETE SESOYA !',
    },
    {
      id: 'question',
      label: 'Poser une question pratique 📍',
      text: 'Bonjour Modeste & Plamédie, j’aurais une question pratique à vous poser concernant l’événement du 10 octobre 2026.',
    },
  ];

  const [selectedPreset, setSelectedPreset] = useState(defaultPresets[0].id);
  const [customText, setCustomText] = useState(defaultPresets[0].text);

  const handleSelectPreset = (preset) => {
    setSelectedPreset(preset.id);
    setCustomText(preset.text);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const url = getWhatsAppUrl(customText);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-24 bg-white relative border-t border-gold-200/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-300/60 text-emerald-800 text-xs font-semibold tracking-widest uppercase shadow-sm">
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Contact Direct &amp; Vœux</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900">
            Écrire à Modeste &amp; Plamédie
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-sans">
            Une question sur la cérémonie ? Un mot doux à transmettre ? Vous pouvez contacter directement les futurs mariés via WhatsApp au <strong className="text-stone-900 font-semibold">{WEDDING_DATA.contact.whatsappDisplay}</strong>.
          </p>
        </div>

        {/* Interactive WhatsApp Box */}
        <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-10 border border-gold-200/80 shadow-xl space-y-8">
          
          {/* Quick preset chips */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-stone-700 block">
              Choisissez un modèle de message :
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {defaultPresets.map((preset) => (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => handleSelectPreset(preset)}
                  className={`p-3.5 rounded-2xl text-left text-xs font-medium transition-all duration-200 border flex items-center justify-between gap-2 ${
                    selectedPreset === preset.id
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-md'
                      : 'bg-white text-stone-800 border-stone-200 hover:border-gold-300 hover:bg-gold-50/50'
                  }`}
                >
                  <span>{preset.label}</span>
                  {selectedPreset === preset.id && <CheckCircle2 className="w-4 h-4 shrink-0 text-white" />}
                </button>
              ))}
            </div>
          </div>

          {/* Text Area */}
          <form onSubmit={handleSendMessage} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="whatsapp-message" className="text-xs font-bold uppercase tracking-wider text-stone-700 block">
                Votre message prêt à être envoyé :
              </label>
              <textarea
                id="whatsapp-message"
                rows="4"
                value={customText}
                onChange={(e) => {
                  setCustomText(e.target.value);
                  setSelectedPreset('custom');
                }}
                className="w-full p-4 rounded-2xl border border-stone-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-stone-900 text-sm bg-white resize-none transition-all shadow-inner"
                placeholder="Écrivez votre message personnalisé..."
              />
            </div>

            {/* Submit Action */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-2 text-xs text-stone-500">
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Numéro officiel : {WEDDING_DATA.contact.whatsappDisplay}</span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-sans text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-lg hover:shadow-emerald-500/30 flex items-center justify-center gap-2 group"
              >
                <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
                <span>Ouvrir dans WhatsApp</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>

        </div>

      </div>
    </section>
  );
}
