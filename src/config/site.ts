/**
 * Global site constants - not language dependent
 * These values are the same across all languages
 */

export const SITE = {
  // Contact
  phone: '+48 789 773 285',
  whatsapp: '660 194 187',
  email: 'domki@lasbialas.pl',
  instagram: '/lasbialas',

  // URLs
  domain: 'https://lasbialas.pl',
  guideUrl: 'https://lasbialas.pl/info/',
  guideUrlEn: 'https://lasbialas.pl/info/en/',
  guideUrlDe: 'https://lasbialas.pl/info/de/',

  // External IDs
  bookeroId: 'WmRe79H4lKFz',
  gaId: 'G-R3P2XT4WY8',

  // Location
  location: {
    pl: 'Biała, Puszcza Notecka',
    en: 'Biała, Noteć Forest',
    de: 'Biała, Puszcza Notecka',
  },

  // Maps coordinates
  mapsCoords: {
    lat: 52.8265399,
    lng: 16.3041079,
  },
} as const;

// Language codes (same in all languages)
export const LANG_CODES = {
  pl: 'PL',
  en: 'EN',
  de: 'DE',
} as const;

// Month names for translations
export const MONTHS = {
  pl: {
    july: 'lipiec',
    august: 'sierpień',
    june: 'czerwiec',
  },
  en: {
    july: 'July',
    august: 'August',
    june: 'June',
  },
  de: {
    july: 'Juli',
    august: 'August',
    june: 'Juni',
  },
} as const;

// Image paths - shared across all languages
export const IMAGES = {
  // Gallery images
  gallery: {
    cabin1: '/foto/domek1.webp',
    cabin2: '/foto/domek2.webp',
    twoCabins: '/foto/dwa-domki.webp',
    bedroom: '/foto/sypialnia.webp',
    livingRoom: '/foto/salon.webp',
    sauna: '/foto/sauna.webp',
    bikes: '/foto/rowery.webp',
    sup: '/foto/sup.webp',
  },
  // Interior images
  interiors: {
    bedroom1: '/foto/w1.webp',
    bedroom2: '/foto/w2.webp',
    bedroom3: '/foto/w6.webp',
    bedroom4: '/foto/w4.webp',
    living1: '/foto/w13.webp',
    living2: '/foto/w7.webp',
    living3: '/foto/w15.webp',
    living4: '/foto/w3.webp',
    bathroom1: '/foto/w17.webp',
    bathroom2: '/foto/w18.webp',
  },
  // Sauna & Jacuzzi
  saunaJacuzzi: {
    jacuzzi1: '/foto/lasbialas-jacuzzi1.webp',
    sauna1: '/foto/sauna1.webp',
    jacuzzi2: '/foto/lasbialas1.webp',
    saunaLed: '/foto/sauna4.webp',
    saunaForest: '/foto/sauna5.webp',
    jacuzziLed: '/foto/lasbialas-jacuzzi2.webp',
    saunaLed2: '/foto/sauna7.webp',
    jacuzzi3: '/foto/lasbialas-jacuzzi3.webp',
  },
  // Logos & icons
  logos: {
    main: '/images/lasbialas.png',
    booking: '/images/booking_logo.webp',
    airbnb: '/images/airbnb_logo.webp',
    aloha: '/images/aloha_logo.webp',
    www: '/images/las-bialas-www.png',
    bookingAwards: '/images/booking-awards-blue.png',
    reviewsPl: '/images/lasbialas-opinie.png',
    reviewsEn: '/images/lasbialas-reviews.png',
    reviewsDe: '/images/lasbialas-bewertungen.png',
  },
  icons: {
    phone: '/images/telefon-g.png',
    whatsapp: '/images/whatsapp-green.png',
    mail: '/images/mail-g.png',
    instagram: '/images/instagram.png',
    menu: '/images/menu-b.png',
    kalendarz: '/images/kalendarz.png',
    car: '/images/car.png',
    train: '/images/train.png',
    mapa: '/foto/dojazd-lokalny.png',
    sauna: '/foto/sauna-dla-gosci.png',
    jacuzzi: '/foto/jacuzzi.png',
    qr: '/foto/lasbialasqrc.png',
  },
} as const;
