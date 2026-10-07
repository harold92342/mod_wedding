import React, { useEffect, useRef } from 'react';
import { X, Copy, Share2, Check, QrCode } from 'lucide-react';
import QRCode from 'qrcode';
import { WEDDING_DATA } from '../data/weddingData';

export default function ShareModal({ isOpen, onClose, onShowToast }) {
  const qrCanvasRef = useRef(null);

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://modeste-plamedie-wedding.vercel.app/';
  const shareTitle = `Mariage de Modeste & Plamédie — 10 Octobre 2026`;
  const shareText = `Vous êtes invités à célébrer le mariage de Modeste & Plamédie le 10 octobre 2026 à 16h00 à la SALLE DE FETE SESOYA, Kolwezi (RDC).`;

  useEffect(() => {
    if (isOpen && qrCanvasRef.current) {
      QRCode.toCanvas(qrCanvasRef.current, currentUrl, {
        width: 160,
        margin: 1.5,
        color: {
          dark: '#141210',
          light: '#ffffff',
        },
      }, (error) => {
        if (error) console.error(error);
      });
    }
  }, [isOpen, currentUrl]);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    if (onShowToast) {
      onShowToast("Lien d'invitation copié dans le presse-papier !");
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: currentUrl,
        });
      } catch (err) {
        if (err.name !== 'AbortError') {
          handleCopy();
        }
      }
    } else {
      handleCopy();
    }
  };

  const socialLinks = [
    {
      name: 'WhatsApp',
      color: 'bg-[#25D366] text-white',
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + currentUrl)}`,
    },
    {
      name: 'Facebook',
      color: 'bg-[#1877F2] text-white',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
    },
    {
      name: 'Telegram',
      color: 'bg-[#229ED9] text-white',
      url: `https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareText)}`,
    },
    {
      name: 'X (Twitter)',
      color: 'bg-stone-900 text-white',
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(currentUrl)}`,
    },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Partager l'invitation"
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
          aria-label="Fermer la fenêtre de partage"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center space-y-1.5 pt-1">
          <div className="w-12 h-12 rounded-2xl bg-gold-50 border border-gold-200 flex items-center justify-center mx-auto text-gold-700">
            <Share2 className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-stone-900">
            Partager l'Invitation
          </h3>
          <p className="text-xs text-stone-500">
            Transmettez le lien du mariage de {WEDDING_DATA.couple.fullName} à vos proches.
          </p>
        </div>

        {/* QR Code Section */}
        <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-gold-200/60 flex flex-col items-center justify-center gap-2">
          <canvas ref={qrCanvasRef} className="rounded-xl shadow-sm bg-white p-1" />
          <span className="text-[11px] text-stone-500 font-sans tracking-wide">
            Scannez ce QR Code avec un appareil photo
          </span>
        </div>

        {/* Quick Social Share Buttons */}
        <div className="grid grid-cols-2 gap-2.5">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-xl text-xs font-bold uppercase tracking-wider text-center transition-opacity hover:opacity-90 flex items-center justify-center gap-2 ${item.color}`}
            >
              <span>{item.name}</span>
            </a>
          ))}
        </div>

        {/* Copy Link Bar */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 p-2 rounded-2xl border border-stone-200 bg-stone-50">
            <input
              type="text"
              readOnly
              value={currentUrl}
              className="flex-1 bg-transparent text-xs text-stone-700 px-2 outline-none font-mono truncate"
            />
            <button
              onClick={handleCopy}
              className="px-3.5 py-2 rounded-xl bg-gold-600 hover:bg-gold-700 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors shadow-sm shrink-0"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>Copier</span>
            </button>
          </div>
        </div>

        {/* Native Share button (smartphones) */}
        <button
          onClick={handleNativeShare}
          className="w-full py-3.5 rounded-2xl bg-stone-900 hover:bg-gold-600 text-gold-100 text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
        >
          <Share2 className="w-4 h-4 text-gold-400" />
          <span>Ouvrir les options de partage mobile</span>
        </button>

      </div>
    </div>
  );
}
