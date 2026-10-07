import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StoryQuote from './components/StoryQuote';
import Countdown from './components/Countdown';
import DetailsLocation from './components/DetailsLocation';
import GalleryLightbox from './components/GalleryLightbox';
import CalendarSection from './components/CalendarSection';
import WhatsAppContact from './components/WhatsAppContact';
import Footer from './components/Footer';
import ShareModal from './components/ShareModal';
import CalendarModal from './components/CalendarModal';
import AudioAmbience from './components/AudioAmbience';
import Toast from './components/Toast';

export default function App() {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 4000);
  };

  const handleToggleAudio = () => {
    setIsAudioPlaying((prev) => {
      const next = !prev;
      if (next) {
        showToast("Ambiance sonore romantique activée 🎶");
      }
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#24211E] flex flex-col relative selection:bg-gold-200 selection:text-gold-900">
      {/* Background audio engine */}
      <AudioAmbience isPlaying={isAudioPlaying} onToggle={handleToggleAudio} />

      {/* Navigation */}
      <Navbar
        onOpenShare={() => setIsShareModalOpen(true)}
        onOpenCalendar={() => setIsCalendarModalOpen(true)}
        isAudioPlaying={isAudioPlaying}
        onToggleAudio={handleToggleAudio}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOpenCalendar={() => setIsCalendarModalOpen(true)}
          onOpenShare={() => setIsShareModalOpen(true)}
        />
        
        <StoryQuote />
        
        <Countdown />
        
        <DetailsLocation onShowToast={showToast} />
        
        <GalleryLightbox />
        
        <CalendarSection onShowToast={showToast} />
        
        <WhatsAppContact />
      </main>

      {/* Footer */}
      <Footer
        onOpenShare={() => setIsShareModalOpen(true)}
        onOpenCalendar={() => setIsCalendarModalOpen(true)}
      />

      {/* Modals */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        onShowToast={showToast}
      />

      <CalendarModal
        isOpen={isCalendarModalOpen}
        onClose={() => setIsCalendarModalOpen(false)}
        onShowToast={showToast}
      />

      {/* Floating Toast Notification */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
