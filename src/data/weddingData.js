/**
 * Données officielles pour le mariage de Modeste & Plamédie
 * Source : PRD officiel — Règle de non-invention
 */

export const WEDDING_DATA = {
  couple: {
    groom: 'Modeste',
    bride: 'Plamédie',
    fullName: 'Modeste & Plamédie',
    monogram: 'M & P',
  },
  event: {
    title: 'Mariage de Modeste & Plamédie',
    subtitle: 'Union Sacrée & Célébration d’Amour',
    dateDisplay: 'Samedi 10 Octobre 2026',
    timeDisplay: '16h00',
    fullDateTimeDisplay: 'Samedi 10 Octobre 2026 à 16h00',
    // 10 Octobre 2026 à 16h00 dans le fuseau horaire Africa/Lubumbashi (UTC+2)
    // 16:00 UTC+2 correspond à 14:00 UTC (ISO: 2026-10-10T14:00:00Z)
    targetIsoDate: '2026-10-10T16:00:00+02:00',
    timezone: 'Africa/Lubumbashi',
  },
  venue: {
    name: 'SALLE DE FETE SESOYA',
    address: 'Croisement de la 6ième Avenue et l\'Avenue Kananga',
    city: 'Kolwezi',
    country: 'RDC',
    fullAddress: 'SALLE DE FETE SESOYA, Croisement de la 6ième Avenue et l\'Avenue Kananga, Kolwezi, RDC',
    coordinates: {
      lat: -10.7000278,
      lng: 25.5179833,
      originalText: '10°42\'00.10"S 25°31\'04.74"E',
    },
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=-10.7000278,25.5179833',
    appleMapsUrl: 'https://maps.apple.com/?daddr=-10.7000278,25.5179833',
    wazeUrl: 'https://waze.com/ul?ll=-10.7000278,25.5179833&navigate=yes',
  },
  contact: {
    whatsappPhone: '+243976356628',
    whatsappDisplay: '+243 976 356 628',
  },
  gallery: [
    {
      id: 5,
      src: '/images/5.jpeg',
      title: 'Modeste & Plamédie',
      caption: 'L\'élégance et la douceur d\'un amour complice',
      featured: true,
    },
    {
      id: 1,
      src: '/images/1.jpeg',
      title: 'Regard vers l\'avenir',
      caption: 'Main dans la main vers une nouvelle aventure',
      featured: false,
    },
    {
      id: 2,
      src: '/images/2.jpeg',
      title: 'Lumière et Féerie',
      caption: 'Un éclat précieux au cœur de la fête',
      featured: false,
    },
    {
      id: 3,
      src: '/images/3.jpeg',
      title: 'Complicité & Sourires',
      caption: 'Des moments inoubliables partagés à deux',
      featured: false,
    },
    {
      id: 4,
      src: '/images/4.jpeg',
      title: 'L\'Harmonie Parfaite',
      caption: 'Deux âmes prêtes à s\'unir pour la vie',
      featured: false,
    },
  ],
};

/**
 * Génère le lien Google Calendar
 */
export function getGoogleCalendarUrl() {
  const title = encodeURIComponent('Mariage de Modeste & Plamédie');
  const details = encodeURIComponent(
    'Célébration du mariage de Modeste & Plamédie.\n\nLieu : SALLE DE FETE SESOYA, Croisement de la 6ième Avenue et l\'Avenue Kananga, Kolwezi (RDC).\nHeure : 16h00.'
  );
  const location = encodeURIComponent(WEDDING_DATA.venue.fullAddress);
  // UTC: 2026-10-10T14:00:00Z jusqu'à 2026-10-10T22:00:00Z
  const dates = '20261010T140000Z/20261010T220000Z';
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}&sf=true&output=xml`;
}

/**
 * Génère et télécharge le fichier iCalendar (.ics)
 */
export function downloadIcsFile() {
  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Modeste et Plamedie//Mariage//FR',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    'UID:mariage-modeste-plamedie-20261010@sesoya.kolwezi',
    'DTSTAMP:20261007T120000Z',
    'DTSTART:20261010T140000Z',
    'DTEND:20261010T220000Z',
    'SUMMARY:Mariage de Modeste & Plamédie',
    'DESCRIPTION:Célébration du mariage de Modeste & Plamédie à la SALLE DE FETE SESOYA\\, Croisement de la 6ième Avenue et l\'Avenue Kananga\\, Kolwezi (RDC). Heure: 16h00.',
    'LOCATION:SALLE DE FETE SESOYA\\, Croisement de la 6ième Avenue et l\'Avenue Kananga\\, Kolwezi\\, RDC',
    'GEO:-10.700028;25.517983',
    'STATUS:CONFIRMED',
    'TRANSP:OPAQUE',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute('download', 'Mariage_Modeste_Plamedie_10_Octobre_2026.ics');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(link.href);
}

/**
 * Génère le lien direct WhatsApp avec un message pré-rempli
 */
export function getWhatsAppUrl(prefilledMessage) {
  const phone = '243976356628';
  const defaultText = prefilledMessage || 'Bonjour Modeste & Plamédie, je vous écris concernant votre mariage du 10 octobre 2026.';
  return `https://wa.me/${phone}?text=${encodeURIComponent(defaultText)}`;
}
