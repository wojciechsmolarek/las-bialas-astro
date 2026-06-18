/**
 * Content structure - language independent
 * Contains only structural data (images, layout) without text content
 * Text content comes from ui.ts translations
 */

export type Lang = 'pl' | 'en' | 'de';

// ===== INTERIORS STRUCTURE =====
export const interiorsStructure = {
  bedrooms: {
    images: [
      { src: '/foto/w1.webp', altKey: 'interiors.bedrooms.img1.alt', tipKey: 'interiors.bedrooms.img1.tip' },
      { src: '/foto/w2.webp', altKey: 'interiors.bedrooms.img2.alt', tipKey: 'interiors.bedrooms.img2.tip' },
      { src: '/foto/w6.webp', altKey: 'interiors.bedrooms.img3.alt', tipKey: 'interiors.bedrooms.img3.tip' },
      { src: '/foto/w4.webp', altKey: 'interiors.bedrooms.img4.alt', tipKey: 'interiors.bedrooms.img4.tip' },
    ],
    itemsKey: 'interiors.bedrooms.items',
  },
  living: {
    images: [
      { src: '/foto/w13.webp', altKey: 'interiors.living.img1.alt', tipKey: 'interiors.living.img1.tip' },
      { src: '/foto/w7.webp', altKey: 'interiors.living.img2.alt', tipKey: 'interiors.living.img2.tip' },
      { src: '/foto/w15.webp', altKey: 'interiors.living.img3.alt', tipKey: 'interiors.living.img3.tip' },
      { src: '/foto/w3.webp', altKey: 'interiors.living.img4.alt', tipKey: 'interiors.living.img4.tip' },
    ],
    itemsKey: 'interiors.living.items',
  },
  bathroom: {
    images: [
      { src: '/foto/w17.webp', altKey: 'interiors.bathroom.img1.alt', tipKey: 'interiors.bathroom.img1.tip' },
      { src: '/foto/w18.webp', altKey: 'interiors.bathroom.img2.alt', tipKey: 'interiors.bathroom.img2.tip' },
    ],
    itemsKey: 'interiors.bathroom.items',
  },
} as const;

// ===== SAUNA & JACUZZI IMAGES =====
export const saunaJacuzziImages = [
  { src: '/foto/lasbialas-jacuzzi1.webp', altKey: 'saunajacuzzi.jacuzzi1.alt', tipKey: 'saunajacuzzi.jacuzzi1.tip' },
  { src: '/foto/sauna1.webp', altKey: 'saunajacuzzi.sauna1.alt', tipKey: 'saunajacuzzi.sauna1.tip' },
  { src: '/foto/lasbialas1.webp', altKey: 'saunajacuzzi.jacuzzi2.alt', tipKey: 'saunajacuzzi.jacuzzi2.tip' },
  { src: '/foto/sauna4.webp', altKey: 'saunajacuzzi.saunaLed.alt', tipKey: 'saunajacuzzi.saunaLed.tip' },
  { src: '/foto/sauna5.webp', altKey: 'saunajacuzzi.saunaForest.alt', tipKey: 'saunajacuzzi.saunaForest.tip' },
  { src: '/foto/lasbialas-jacuzzi2.webp', altKey: 'saunajacuzzi.jacuzziLed.alt', tipKey: 'saunajacuzzi.jacuzziLed.tip' },
  { src: '/foto/sauna7.webp', altKey: 'saunajacuzzi.saunaLed2.alt', tipKey: 'saunajacuzzi.saunaLed2.tip' },
  { src: '/foto/lasbialas-jacuzzi3.webp', altKey: 'saunajacuzzi.jacuzzi3.alt', tipKey: 'saunajacuzzi.jacuzzi3.tip' },
] as const;

// ===== TOP BOXES VARIANTS =====
export const topBoxesConfig = {
  pl: {
    variant: 'pl' as const,
    hasPromoDates: true,
  },
  en: {
    variant: 'en_de' as const,
    hasPromoDates: false,
  },
  de: {
    variant: 'en_de' as const,
    hasPromoDates: false,
  },
};

// ===== PRICING TABLE STRUCTURE =====
export const pricingStructure = {
  // PL version has different column order
  pl: {
    cols: ['cennik.price_per_night', 'cennik.length', 'cennik.3_4_guests'],
    rows: [
      ['cennik.price_4plus', 'cennik.4plus_nights', 'cennik.plus_120'],
      ['cennik.price_3', 'cennik.3_nights', 'cennik.plus_120'],
      ['cennik.price_2', 'cennik.2_nights', 'cennik.plus_120'],
    ],
  },
  en: {
    cols: ['cennik.length', 'cennik.price_per_night', 'cennik.3_4_guests'],
    rows: [
      ['cennik.2_nights', 'cennik.price_2_en', 'cennik.plus_120'],
      ['cennik.3_nights', 'cennik.price_3_en', 'cennik.plus_120'],
      ['cennik.4plus_nights', 'cennik.price_4plus_en', 'cennik.plus_120'],
    ],
  },
  de: {
    cols: ['cennik.length', 'cennik.price_per_night', 'cennik.3_4_guests'],
    rows: [
      ['cennik.2_nights', 'cennik.price_2_en', 'cennik.plus_120'],
      ['cennik.3_nights', 'cennik.price_3_en', 'cennik.plus_120'],
      ['cennik.4plus_nights', 'cennik.price_4plus_en', 'cennik.plus_120'],
    ],
  },
};

// ===== GALLERY IMAGES =====
export const galleryImages = [
  { src: '/foto/domek1.webp', altKey: 'gallery.cabin_with_jacuzzi', tipKey: 'gallery.cabin_with_jacuzzi' },
  { src: '/foto/domek2.webp', altKey: 'gallery.two_cabins', tipKey: 'gallery.two_cabins' },
  { src: '/foto/dwa-domki.webp', altKey: 'gallery.guest_cottages', tipKey: 'gallery.guest_cottages' },
  { src: '/foto/sypialnia.webp', altKey: 'gallery.bedrooms', tipKey: 'gallery.bedrooms' },
  { src: '/foto/salon.webp', altKey: 'gallery.living_room', tipKey: 'gallery.living_room' },
  { src: '/foto/sauna.webp', altKey: 'gallery.sauna', tipKey: 'gallery.sauna_cooling' },
  { src: '/foto/rowery.webp', altKey: 'gallery.living_room_amenities', tipKey: 'gallery.living_room_amenities' },
  { src: '/foto/sup.webp', altKey: 'gallery.living_room_amenities', tipKey: 'gallery.living_room_amenities' },
] as const;
