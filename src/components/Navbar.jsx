import React, { useState, useEffect } from 'react';
import { Calendar, Share2, Menu, X, Heart, Volume2, VolumeX } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

export default function Navbar({ onOpenShare, onOpenCalendar, isAudioPlaying, onToggleAudio }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'Leurs Vœux', href: '#histoire' },
    { label: 'Compte à Rebours', href: '#compte-a-rebours' },
    { label: 'Cérémonie & Lieu', href: '#lieu' },
    { label: 'Galerie Photos', href: '#galerie' },
    { label: 'Contact WhatsApp', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF8F5]/90 backdrop-blur-md shadow-sm border-b border-gold-200/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Monogram */}
        <a
          href="#accueil"
          onClick={(e) => handleLinkClick(e, '#accueil')}
          className="flex items-center gap-2 group text-stone-900"
        >
          <span className="font-serif text-2xl sm:text-3xl font-bold tracking-wider text-gold-600 group-hover:text-gold-500 transition-colors">
            {WEDDING_DATA.couple.monogram}
          </span>
          <span className="hidden sm:inline-block w-px h-5 bg-gold-300 mx-1" />
          <span className="hidden sm:inline-block font-sans text-xs uppercase tracking-widest text-stone-600 font-medium">
            10 Octobre 2026
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-stone-700 hover:text-gold-600 font-sans text-xs uppercase tracking-wider font-semibold transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions (Audio, Calendar, Share, Mobile Menu) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Audio toggle */}
          <button
            onClick={onToggleAudio}
            className="p-2 sm:px-3 sm:py-2 rounded-full border border-gold-300/80 bg-white/80 hover:bg-gold-50 text-gold-700 transition-all flex items-center gap-1.5 text-xs font-medium shadow-sm"
            title={isAudioPlaying ? "Couper la musique d'ambiance" : "Lancer la musique d'ambiance"}
            aria-label={isAudioPlaying ? "Couper la musique" : "Lancer la musique"}
          >
            {isAudioPlaying ? (
              <>
                <Volume2 className="w-4 h-4 text-gold-600 animate-pulse" />
                <span className="hidden md:inline text-[11px] uppercase tracking-wider">Musique ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-stone-500" />
                <span className="hidden md:inline text-[11px] uppercase tracking-wider text-stone-600">Musique</span>
              </>
            )}
          </button>

          {/* Add to Calendar Button */}
          <button
            onClick={onOpenCalendar}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-stone-900 text-gold-100 hover:bg-gold-600 transition-all duration-300 text-xs font-semibold uppercase tracking-wider shadow-sm"
          >
            <Calendar className="w-3.5 h-3.5 text-gold-400" />
            <span>Calendrier</span>
          </button>

          {/* Share Button */}
          <button
            onClick={onOpenShare}
            className="p-2 sm:px-3 sm:py-2 rounded-full border border-stone-300/80 bg-white/80 hover:bg-stone-100 text-stone-800 transition-all flex items-center gap-1.5 text-xs font-medium shadow-sm"
            aria-label="Partager l'invitation"
            title="Partager l'invitation"
          >
            <Share2 className="w-4 h-4 text-stone-700" />
            <span className="hidden sm:inline text-xs font-semibold uppercase tracking-wider">Partager</span>
          </button>

          {/* Mobile menu toggle button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-stone-800 hover:text-gold-600 transition-colors"
            aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#FAF8F5]/98 backdrop-blur-xl border-b border-gold-200 shadow-xl px-6 py-6 animate-fade-in">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-stone-800 hover:text-gold-600 font-serif text-lg tracking-wide py-2 border-b border-stone-200/60 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <Heart className="w-3.5 h-3.5 text-gold-400 opacity-60" />
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCalendar();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-stone-900 text-gold-100 text-sm font-semibold tracking-wider uppercase"
              >
                <Calendar className="w-4 h-4 text-gold-400" />
                <span>Ajouter à mon calendrier</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenShare();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-gold-400/50 bg-white text-stone-800 text-sm font-semibold tracking-wider uppercase"
              >
                <Share2 className="w-4 h-4 text-gold-600" />
                <span>Partager avec un proche</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
