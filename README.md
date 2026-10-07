# Site Événementiel Premium — Mariage de Modeste & Plamédie

Site web officiel, élégant, émotionnel et haute performance conçu pour la célébration du mariage de **Modeste & Plamédie**.

---

## 💍 Informations Officielles de l'Événement

Conformément au PRD et à la stricte règle de non-invention :

- **Couple :** Modeste & Plamédie
- **Date :** Samedi 10 octobre 2026
- **Heure :** 16h00 (accueil des invités à partir de 15h30)
- **Lieu :** SALLE DE FETE SESOYA
- **Adresse :** Croisement de la 6ième Avenue et l'Avenue Kananga
- **Ville & Pays :** Kolwezi, République Démocratique du Congo (RDC)
- **Fuseau horaire :** Africa/Lubumbashi (UTC+2)
- **Téléphone WhatsApp officiel :** `+243 976 356 628`
- **Coordonnées GPS officielles :**
  - Latitude : `-10.7000278`
  - Longitude : `25.5179833`
  - Coordonnées originales : `10°42'00.10"S 25°31'04.74"E`

---

## ✨ Fonctionnalités Réalisées

1. **Expérience Visuelle & Émotionnelle Premium :**
   - Palette de couleurs luxueuse : or, champagne, ivoire chaud et onyx.
   - Typographies nobles : *Cinzel*, *Cormorant Garamond*, *Great Vibes* et *Plus Jakarta Sans*.
   - Intégration soignée des 5 photographies officielles du couple.

2. **Compte à Rebours Dynamique en Temps Réel :**
   - Décompte précis des jours, heures, minutes et secondes jusqu'au 10 octobre 2026 à 16h00 (UTC+2).
   - Animation de célébration et feux d'artifice / confettis dorés interactifs.

3. **Cérémonie & Localisation Interactive :**
   - Adresse officielle complète avec bouton de copie rapide.
   - Coordonnées GPS exactes avec bouton de copie.
   - Liens de navigation directe vers **Google Maps** et **Apple Maps**.
   - Carte interactive intégrée (OpenStreetMap) centrée avec précision sur la SALLE DE FETE SESOYA.

4. **Ajout Direct au Calendrier (Save the Date) :**
   - **Google Calendar :** Lien web direct pré-rempli avec date, heure, description et adresse.
   - **Apple Calendar & Outlook (.ics) :** Téléchargement instantané d'un fichier conforme au standard RFC 5545.

5. **Contact WhatsApp Interactif :**
   - Relié directement au numéro officiel `+243 976 356 628`.
   - Modèles de messages en un clic : félicitations, confirmation de présence (RSVP), question pratique ou saisie libre.

6. **Galerie Photos & Lightbox Accessible :**
   - Mise en page éditoriale valorisant les 5 clichés de Modeste & Plamédie.
   - Lightbox plein écran avec navigation intuitive (souris, touches fléchées du clavier, touche Échap).

7. **Partage Multi-Plateforme & QR Code :**
   - Prise en charge native de l'API Web Share sur smartphone.
   - Partage rapide sur WhatsApp, Facebook, Telegram et X.
   - Génération dynamique d'un **QR Code haute résolution** à scanner directement sur écran.
   - Copie du lien dans le presse-papier avec notification toast.

8. **Ambiance Sonore Subtile (Web Audio API) :**
   - Arpèges romantiques et cristallins doux générés en temps réel.
   - Contrôle total pour l'utilisateur (désactivé par défaut, bouton On/Off discret avec égaliseur).

9. **Performance, SEO & Accessibilité :**
   - Balises Open Graph et Twitter Cards configurées pour un aperçu riche sur les réseaux sociaux.
   - Score de performance optimal (chargement prioritaire pour l'image Hero, lazy loading pour la galerie).
   - Sitemap XML et robots.txt inclus.

---

## 🛠️ Stack Technique

- **Framework :** React 19 + Vite 6
- **Styling :** Tailwind CSS 3
- **Icônes :** Lucide React
- **Animations & Effets :** Canvas Confetti, Web Audio API
- **QR Code :** QRCode.js

---

## 🚀 Lancement & Développement Local

### Prérequis
- Node.js (v18 ou supérieur)
- npm

### Installation
```bash
git clone <url-du-depot>
cd mod_wedding
npm install
```

### Démarrage en mode développement
```bash
npm run dev
```
Le site sera accessible localement sur `http://localhost:3000`.

### Build pour la production
```bash
npm run build
```
Les fichiers prêts pour le déploiement sont générés dans le dossier `dist/`.

---

## ☁️ Déploiement sur Vercel

Le projet est configuré avec un fichier `vercel.json` optimisé.

### Déploiement via Vercel CLI :
```bash
npm i -g vercel
vercel
```

### Déploiement via GitHub :
1. Créez un dépôt sur GitHub et poussez le code :
   ```bash
   git init
   git add .
   git commit -m "feat: site événementiel premium Modeste & Plamédie"
   git branch -M main
   git remote add origin <url-du-depot-github>
   git push -u origin main
   ```
2. Rendez-vous sur le tableau de bord [Vercel](https://vercel.com).
3. Cliquez sur **Add New > Project**, importez le dépôt GitHub.
4. Framework prédéfini : **Vite**.
5. Cliquez sur **Deploy**. Le site est en ligne en moins d'une minute !
