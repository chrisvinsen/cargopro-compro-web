// ─────────────────────────────────────────────────────────────────────────────
// CargoPro — single source of truth for brand & contact details.
// ⚠️ Values marked `TODO` are PLACEHOLDERS. Replace them with real data
//    before launch. Nothing here should be treated as a confirmed fact yet.
// ─────────────────────────────────────────────────────────────────────────────
export const siteConfig = {
  name: 'CargoPro',
  legalName: 'Cargo Pro',
  tagline: 'Kirim Cepat. Sampai Aman.',
  description:
    'CargoPro — jasa import China ke Indonesia yang cepat dan terpercaya. Layanan door-to-door, pelacakan pengiriman, dan pengurusan kepabeanan tuntas. Sea freight LCL/FCL & air freight.',
  url: 'https://cargopro.id',

  contact: {
    whatsapp: {
      primary: { number: '6281387787801', display: '0813-8778-7801' },
    },
    email: { cs: 'cargopro.id@gmail.com' },
    address: {
      street: 'Jakarta Barat',
      city: 'Indonesia',
      gmaps: 'https://www.google.com/maps/search/?api=1&query=Jakarta+Barat+Indonesia',
    },
    hours: {
      weekday: '08:00 - 17:00 WIB',
      saturday: 'Tutup',
      sunday: 'Tutup',
    },
  },

  social: {
    instagram: 'https://instagram.com/cargopro.id',
  },

  stats: {
    shipments: '10.000+',
    shipmentsLabel: 'Pengiriman Berhasil',
  },
};
