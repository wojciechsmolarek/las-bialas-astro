 Plan Migracji Las Biala's: HTML → Astro                                                                                                                         │
│                                                                                                                                                                 │
│ Context                                                                                                                                                         │
│                                                                                                                                                                 │
│ Strona Las Biala's (lasbialas.pl) jest obecnie zbudowana na czystym HTML z inline CSS (1600+ linii). Wymaga migracji na nowoczesny stack technologiczny (Astro  │
│ + Tailwind CSS) przy zachowaniu 100% wizualnej identyczności.                                                                                                   │
│                                                                                                                                                                 │
│ Powód migracji                                                                                                                                                  │
│                                                                                                                                                                 │
│ - Maintainability: Obecna struktura (3 kopie HTML dla PL/EN/DE) jest trudna w utrzymaniu                                                                        │
│ - Performance: Brak optymalizacji obrazów (brak responsive images, srcsets)                                                                                     │
│ - Developer Experience: Inline CSS, brak komponentów, powtarzalny kod                                                                                           │
│ - Content Management: Zmienne treści (daty, promocje) wpisane na sztywno w HTML                                                                                 │
│                                                                                                                                                                 │
│ Kluczowe wymagania                                                                                                                                              │
│                                                                                                                                                                 │
│ 1. 100% wizualna zgodność - strona musi wyglądać identycznie jak obecnie                                                                                        │
│ 2. Zachować wszystkie: meta tagi SEO, schema.org JSON-LD, strukturę HX, teksty, alt texts                                                                       │
│ 3. Wielojęzyczność: 3 wersje językowe (PL jako root /, EN /en/, DE /de/)                                                                                        │
│ 4. Edytowalne treści: Zmienne komunikaty (np. "Rezerwacje LIPIEC SIERPIEŃ tylko na telefon") w jednym pliku JSON, edytowalnym z GitHuba                         │
│ 5. Zachować integracje: Yabrix analytics, Google Analytics, Bookero (rezerwacje)                                                                                │
│                                                                                                                                                                 │
│ Struktura obecnej strony                                                                                                                                        │
│                                                                                                                                                                 │
│ - Strony: index, dojazd/local-directions/anfahrt, regulamin/terms/hausordnung, polityka-prywatnosci/privacy-policy/datenschutzerklarung, rodo, 404              │
│ - Obrazy: WebP w /foto/, ikony PNG w /images/, 16 obrazów preloadowanych                                                                                        │
│ - CSS: 1600+ linii inline, Montserrat font (3 wagi), responsive breakpoints: 1280px, 1024px, 768px, 600px                                                       │
│ - Integracje: Yabrix (data-yx="1f3667d27b92c8b9"), GA (G-R3P2XT4WY8), Bookero (WmRe79H4lKFz)                                                                    │
│                                                                                                                                                                 │
│ ---                                                                                                                                                             │
│ Architektura Astro                                                                                                                                              │
│                                                                                                                                                                 │
│ Stack technologiczny                                                                                                                                            │
│                                                                                                                                                                 │
│ - Astro 4.x (SSG, islands architecture)                                                                                                                         │
│ - Tailwind CSS (utility-first styling)                                                                                                                          │
│ - lightningcss (CSS minification, autoprefixer)                                                                                                                 │
│ - astro-seo (meta tags, Open Graph)                                                                                                                             │
│ - @astrojs/sitemap (automatyczny sitemap z hreflang)                                                                                                            │
│ - Astro Picture component (responsive images, AVIF/WebP)                                                                                                        │
│                                                                                                                                                                 │
│ Struktura projektu                                                                                                                                              │
│                                                                                                                                                                 │
│ src/                                                                                                                                                            │
│ ├── assets/           # Fonty, obrazy (optymalizowane przez Astro)                                                                                              │
│ ├── components/                                                                                                                                                 │
│ │   ├── layout/      # TopBar, PromoBar, MobileMenu, Footer, CookieBanner                                                                                       │
│ │   ├── sections/    # Gallery, AmenitiesSection, DescriptionBox                                                                                                │
│ │   ├── ui/          # Button, LanguageSwitcher, PromoCode                                                                                                      │
│ │   └── seo/         # SchemaOrg, Preloads                                                                                                                      │
│ ├── content/                                                                                                                                                    │
│ │   └── site/        # config.json (edytowalne treści)                                                                                                          │
│ ├── i18n/            # Tłumaczenia (ui.ts, utils.ts)                                                                                                            │
│ ├── layouts/         # BaseLayout, PageLayout                                                                                                                   │
│ ├── pages/           # Strony (/, /en/, /de/)                                                                                                                   │
│ ├── scripts/         # TypeScript dla interakcji (lightbox, mobile-menu)                                                                                        │
│ └── styles/          # global.css (@font-face, custom CSS)                                                                                                      │
│                                                                                                                                                                 │
│ Strategia i18n: Folder-based routing                                                                                                                            │
│                                                                                                                                                                 │
│ - PL (default): / (bez prefiksu)                                                                                                                                │
│ - EN: /en/                                                                                                                                                      │
│ - DE: /de/                                                                                                                                                      │
│                                                                                                                                                                 │
│ Implementacja w astro.config.mjs:                                                                                                                               │
│ i18n: {                                                                                                                                                         │
│   defaultLocale: 'pl',                                                                                                                                          │
│   locales: ['pl', 'en', 'de'],                                                                                                                                  │
│   routing: {                                                                                                                                                    │
│     prefixDefaultLocale: false,                                                                                                                                 │
│     strategy: 'pathname'                                                                                                                                        │
│   }                                                                                                                                                             │
│ }                                                                                                                                                               │
│                                                                                                                                                                 │
│ Strategia CSS: Hybrid (Tailwind + Custom CSS)                                                                                                                   │
│                                                                                                                                                                 │
│ Tailwind dla:                                                                                                                                                   │
│ - Layout utilities (flex, grid, spacing)                                                                                                                        │
│ - Typography (font-size, colors)                                                                                                                                │
│ - Responsive breakpoints                                                                                                                                        │
│ - Hover states                                                                                                                                                  │
│                                                                                                                                                                 │
│ Custom CSS (src/styles/global.css) dla:                                                                                                                         │
│ - @font-face definitions                                                                                                                                        │
│ - Złożone animacje (lightbox overlay, transitions)                                                                                                              │
│ - Specyficzne efekty (tooltips, sticky behavior)                                                                                                                │
│ - Browser resets                                                                                                                                                │
│                                                                                                                                                                 │
│ Tailwind config - custom palette:                                                                                                                               │
│ colors: {                                                                                                                                                       │
│   primary: {                                                                                                                                                    │
│     red: '#e51e50',                                                                                                                                             │
│     green: '#2F6940',                                                                                                                                           │
│     orange: '#e97e2d'                                                                                                                                           │
│   },                                                                                                                                                            │
│   neutral: {                                                                                                                                                    │
│     dark: '#131212',                                                                                                                                            │
│     gray: '#2c2c2c',                                                                                                                                            │
│     'light-gray': '#f2f2f2'                                                                                                                                     │
│   }                                                                                                                                                             │
│ }                                                                                                                                                               │
│                                                                                                                                                                 │
│ Obrazy: Astro Picture Component                                                                                                                                 │
│                                                                                                                                                                 │
│ <Picture                                                                                                                                                        │
│   src={lasbialas1}                                                                                                                                              │
│   widths={[400, 600, 834]}                                                                                                                                      │
│   sizes="(max-width: 768px) 100vw, 834px"                                                                                                                       │
│   formats={['avif', 'webp']}                                                                                                                                    │
│   alt="Widok na domek Las Biala's"                                                                                                                              │
│   loading="lazy"                                                                                                                                                │
│ />                                                                                                                                                              │
│                                                                                                                                                                 │
│ Korzyści:                                                                                                                                                       │
│ - Automatyczne generowanie srcset                                                                                                                               │
│ - AVIF + WebP + fallback                                                                                                                                        │
│ - Lazy loading (poza first 3)                                                                                                                                   │
│ - Width/height attributes (CLS prevention)                                                                                                                      │
│                                                                                                                                                                 │
│ Edytowalne treści: Content Collections                                                                                                                          │
│                                                                                                                                                                 │
│ Schema (src/content/config.ts):                                                                                                                                 │
│ const siteConfig = defineCollection({                                                                                                                           │
│   type: 'data',                                                                                                                                                 │
│   schema: z.object({                                                                                                                                            │
│     promoBar: z.object({                                                                                                                                        │
│       enabled: z.boolean(),                                                                                                                                     │
│       messages: z.object({                                                                                                                                      │
│         pl: z.string(),                                                                                                                                         │
│         en: z.string(),                                                                                                                                         │
│         de: z.string(),                                                                                                                                         │
│       }),                                                                                                                                                       │
│     }),                                                                                                                                                         │
│     availability: z.object({                                                                                                                                    │
│       nextAvailable: z.object({                                                                                                                                 │
│         dates: z.string(),                                                                                                                                      │
│         discountCode: z.string().optional(),                                                                                                                    │
│       }),                                                                                                                                                       │
│       summerSlots: z.object({                                                                                                                                   │
│         july: z.array(z.string()),                                                                                                                              │
│         august: z.array(z.string()),                                                                                                                            │
│       }),                                                                                                                                                       │
│     }),                                                                                                                                                         │
│     contact: z.object({                                                                                                                                         │
│       phone: z.string(),                                                                                                                                        │
│       whatsapp: z.string(),                                                                                                                                     │
│       email: z.string(),                                                                                                                                        │
│     }),                                                                                                                                                         │
│   }),                                                                                                                                                           │
│ });                                                                                                                                                             │
│                                                                                                                                                                 │
│ Data file (src/content/site/config.json):                                                                                                                       │
│ {                                                                                                                                                               │
│   "promoBar": {                                                                                                                                                 │
│     "enabled": true,                                                                                                                                            │
│     "messages": {                                                                                                                                               │
│       "pl": "Rezerwacje <strong>LIPIEC</strong> <strong>SIERPIEŃ</strong> tylko na telefon",                                                                    │
│       "en": "Reservations for <strong>JULY</strong> <strong>AUGUST</strong> only by phone",                                                                     │
│       "de": "Reservierungen für <strong>JULI</strong> <strong>AUGUST</strong> nur telefonisch"                                                                  │
│     }                                                                                                                                                           │
│   },                                                                                                                                                            │
│   "availability": {                                                                                                                                             │
│     "nextAvailable": {                                                                                                                                          │
│       "dates": "22-25 cze",                                                                                                                                     │
│       "discountCode": "LB22CZE"                                                                                                                                 │
│     },                                                                                                                                                          │
│     "summerSlots": {                                                                                                                                            │
│       "july": ["3-9 lip", "26 lip - 1 sie"],                                                                                                                    │
│       "august": ["3-9 sie", "17-23 sie"]                                                                                                                        │
│     }                                                                                                                                                           │
│   },                                                                                                                                                            │
│   "contact": {                                                                                                                                                  │
│     "phone": "+48789773285",                                                                                                                                    │
│     "whatsapp": "+48660194187",                                                                                                                                 │
│     "email": "domki@lasbialas.pl"                                                                                                                               │
│   }                                                                                                                                                             │
│ }                                                                                                                                                               │
│                                                                                                                                                                 │
│ Usage w komponentach:                                                                                                                                           │
│ ---                                                                                                                                                             │
│ import { getEntry } from 'astro:content';                                                                                                                       │
│ const siteConfig = await getEntry('site', 'config');                                                                                                            │
│ const { promoBar } = siteConfig.data;                                                                                                                           │
│ ---                                                                                                                                                             │
│ <div class="promo-bar">                                                                                                                                         │
│   <Fragment set:html={promoBar.messages[lang]} />                                                                                                               │
│ </div>                                                                                                                                                          │
│                                                                                                                                                                 │
│ SEO: astro-seo + Schema.org                                                                                                                                     │
│                                                                                                                                                                 │
│ BaseLayout z automatycznym:                                                                                                                                     │
│ - Title, description, canonical                                                                                                                                 │
│ - Open Graph tags                                                                                                                                               │
│ - Hreflang dla wszystkich 3 języków                                                                                                                             │
│ - Favicon links                                                                                                                                                 │
│ - Schema.org JSON-LD (wielojęzyczny)                                                                                                                            │
│                                                                                                                                                                 │
│ Sitemap automatyczny przez @astrojs/sitemap:                                                                                                                    │
│ integrations: [                                                                                                                                                 │
│   sitemap({                                                                                                                                                     │
│     i18n: {                                                                                                                                                     │
│       defaultLocale: 'pl',                                                                                                                                      │
│       locales: { pl: 'pl', en: 'en', de: 'de' }                                                                                                                 │
│     }                                                                                                                                                           │
│   })                                                                                                                                                            │
│ ]                                                                                                                                                               │
│                                                                                                                                                                 │
│ Integracje                                                                                                                                                      │
│                                                                                                                                                                 │
│ Yabrix (analytics):                                                                                                                                             │
│ <script src="https://collect.yabrix.com/js/yabrix.min.js"                                                                                                       │
│         data-yx="1f3667d27b92c8b9" defer is:inline></script>                                                                                                    │
│                                                                                                                                                                 │
│ Google Analytics (lazy load on scroll/mousemove/touchstart):                                                                                                    │
│ <script is:inline>                                                                                                                                              │
│   function loadAnalytics() {                                                                                                                                    │
│     const script = document.createElement("script");                                                                                                            │
│     script.src = "https://www.googletagmanager.com/gtag/js?id=G-R3P2XT4WY8";                                                                                    │
│     script.defer = true;                                                                                                                                        │
│     document.head.appendChild(script);                                                                                                                          │
│     gtag("js", new Date());                                                                                                                                     │
│     gtag("config", "G-R3P2XT4WY8", { anonymize_ip: true });                                                                                                     │
│   }                                                                                                                                                             │
│   window.addEventListener("scroll", loadAnalytics, { once: true });                                                                                             │
│   window.addEventListener("mousemove", loadAnalytics, { once: true });                                                                                          │
│ </script>                                                                                                                                                       │
│                                                                                                                                                                 │
│ Bookero (rezerwacje, lazy load on scroll):                                                                                                                      │
│ <script is:inline>                                                                                                                                              │
│   var bookero_config = {                                                                                                                                        │
│     id: 'WmRe79H4lKFz',                                                                                                                                         │
│     container: 'bookero',                                                                                                                                       │
│     type: 'sticky',                                                                                                                                             │
│     position: 'bottom-right',                                                                                                                                   │
│     plugin_css: true,                                                                                                                                           │
│     lang: 'pl' // Dynamicznie: 'pl' | 'en' | 'de'                                                                                                               │
│   };                                                                                                                                                            │
│                                                                                                                                                                 │
│   function loadBookero() {                                                                                                                                      │
│     var s = document.createElement('script');                                                                                                                   │
│     s.src = 'https://cdn.bookero.pl/plugin/v2/js/bookero-compiled.js';                                                                                          │
│     document.body.appendChild(s);                                                                                                                               │
│   }                                                                                                                                                             │
│                                                                                                                                                                 │
│   window.addEventListener('scroll', loadBookero, { once: true });                                                                                               │
│ </script>                                                                                                                                                       │
│                                                                                                                                                                 │
│ Bookero validation (minimum 2 doby):                                                                                                                            │
│ <script is:inline>                                                                                                                                              │
│   document.body.addEventListener('bookero-plugin:days-changed', function (e) {                                                                                  │
│     var days = e.detail?.data?.number ||                                                                                                                        │
│                document.getElementById('bookero-plugin-days-number')?.value || 10;                                                                              │
│                                                                                                                                                                 │
│     if(days < 2 && document.getElementById('bookero-plugin-days-number')){                                                                                      │
│       setTimeout(function(){                                                                                                                                    │
│         document.getElementById('bookero-plugin-days-number').value = 2;                                                                                        │
│         setTimeout(function(){                                                                                                                                  │
│           var event = new Event('input');                                                                                                                       │
│           document.getElementById('bookero-plugin-days-number').dispatchEvent(event);                                                                           │
│         }, 100);                                                                                                                                                │
│       }, 100);                                                                                                                                                  │
│     }                                                                                                                                                           │
│   });                                                                                                                                                           │
│   // Podobnie dla 'bookero-plugin:service-updated' i 'bookero-plugin:loaded'                                                                                    │
│ </script>                                                                                                                                                       │
│                                                                                                                                                                 │
│ ---                                                                                                                                                             │
│ Plan Implementacji (8 faz)                                                                                                                                      │
│                                                                                                                                                                 │
│ FAZA 1: Setup & Infrastructure                                                                                                                                  │
│                                                                                                                                                                 │
│ Cel: Projekt Astro skonfigurowany, zależności zainstalowane, assety skopiowane                                                                                  │
│                                                                                                                                                                 │
│ Kroki:                                                                                                                                                          │
│ 1. Inicjalizacja projektu: npm create astro@latest                                                                                                              │
│ 2. Instalacja zależności:                                                                                                                                       │
│ npm install -D @astrojs/tailwind tailwindcss lightningcss                                                                                                       │
│ npm install astro-seo @astrojs/sitemap                                                                                                                          │
│ 3. Konfiguracja:                                                                                                                                                │
│   - astro.config.mjs: i18n, integrations, lightningcss                                                                                                          │
│   - tailwind.config.mjs: custom colors, breakpoints, fonts                                                                                                      │
│   - src/styles/global.css: @font-face, resets, custom CSS                                                                                                       │
│ 4. Migracja assetów:                                                                                                                                            │
│   - Fonty: las-bialas-obecnie/fonts/ → src/assets/fonts/                                                                                                        │
│   - Obrazy: las-bialas-obecnie/foto/ → src/assets/foto/                                                                                                         │
│   - Ikony: las-bialas-obecnie/images/ → src/assets/images/                                                                                                      │
│   - Favicon: las-bialas-obecnie/favicon/ → public/favicon/                                                                                                      │
│                                                                                                                                                                 │
│ Weryfikacja: npm run dev - projekt startuje bez błędów                                                                                                          │
│                                                                                                                                                                 │
│ ---                                                                                                                                                             │
│ FAZA 2: i18n Foundation                                                                                                                                         │
│                                                                                                                                                                 │
│ Cel: System tłumaczeń gotowy do użycia                                                                                                                          │
│                                                                                                                                                                 │
│ Kroki:                                                                                                                                                          │
│ 1. Ekstrakcja tekstów z HTML:                                                                                                                                   │
│   - Wyciągnij wszystkie teksty z index.html (PL), en/index.html, de/index.html                                                                                  │
│   - Zorganizuj w kategorie: nav, promo, buttons, sections, footer                                                                                               │
│   - ~150-200 kluczy tłumaczeń                                                                                                                                   │
│ 2. Stwórz src/i18n/ui.ts z obiektem ui zawierającym wszystkie tłumaczenia                                                                                       │
│ 3. Stwórz src/i18n/utils.ts z funkcjami:                                                                                                                        │
│   - getLangFromUrl(url: URL)                                                                                                                                    │
│   - useTranslations(lang)                                                                                                                                       │
│   - getLocalizedPath(path, lang)                                                                                                                                │
│                                                                                                                                                                 │
│ Weryfikacja: Test funkcji useTranslations() w dummy component                                                                                                   │
│                                                                                                                                                                 │
│ ---                                                                                                                                                             │
│ FAZA 3: Layouts                                                                                                                                                 │
│                                                                                                                                                                 │
│ Cel: BaseLayout i PageLayout gotowe z SEO                                                                                                                       │
│                                                                                                                                                                 │
│ Kroki:                                                                                                                                                          │
│ 1. BaseLayout.astro:                                                                                                                                            │
│   - HTML structure (doctype, html lang, head, body)                                                                                                             │
│   - SEO integration (astro-seo component)                                                                                                                       │
│   - Preload strategy (fonty + 3 krytyczne obrazy)                                                                                                               │
│   - Hreflang generation dla 3 języków                                                                                                                           │
│   - Schema.org component slot                                                                                                                                   │
│   - Global scripts (GA, Yabrix)                                                                                                                                 │
│   - Slots: head, default                                                                                                                                        │
│ 2. PageLayout.astro:                                                                                                                                            │
│   - Extends BaseLayout                                                                                                                                          │
│   - PromoBar component                                                                                                                                          │
│   - TopBar component                                                                                                                                            │
│   - Main content slot                                                                                                                                           │
│   - Footer component                                                                                                                                            │
│   - CookieBanner component                                                                                                                                      │
│                                                                                                                                                                 │
│ Weryfikacja: Test page z BaseLayout, sprawdź  w DevTools                                                                                                        │
│                                                                                                                                                                 │
│ ---                                                                                                                                                             │
│ FAZA 4: Core Components                                                                                                                                         │
│                                                                                                                                                                 │
│ Cel: Podstawowe komponenty layoutu działają                                                                                                                     │
│                                                                                                                                                                 │
│ Budowa priorytetowa:                                                                                                                                            │
│                                                                                                                                                                 │
│ 1. TopBar.astro (najważniejszy):                                                                                                                                │
│   - Logo (Picture component)                                                                                                                                    │
│   - H1 + subtitle                                                                                                                                               │
│   - Contact info (tel, whatsapp, email, instagram)                                                                                                              │
│   - LanguageSwitcher component                                                                                                                                  │
│   - Hamburger menu trigger                                                                                                                                      │
│   - Sticky position (top: 39px)                                                                                                                                 │
│   - Responsive collapse                                                                                                                                         │
│ 2. PromoBar.astro:                                                                                                                                              │
│   - Fixed position top (z-index: 1001)                                                                                                                          │
│   - Content z getEntry('site', 'config')                                                                                                                        │
│   - Conditional rendering (enabled/disabled)                                                                                                                    │
│   - HTML content (Fragment set:html)                                                                                                                            │
│ 3. MobileMenu.astro:                                                                                                                                            │
│   - Hamburger trigger                                                                                                                                           │
│   - Contact links (duplicate)                                                                                                                                   │
│   - Language switcher                                                                                                                                           │
│   - Toggle animation                                                                                                                                            │
│   - Outside click close                                                                                                                                         │
│ 4. Footer.astro:                                                                                                                                                │
│   - External links (Blog, Przewodnik)                                                                                                                           │
│   - Legal links (Regulamin, Polityka, RODO)                                                                                                                     │
│   - Copyright (dynamic year)                                                                                                                                    │
│   - Mobile: dropdown (details/summary)                                                                                                                          │
│   - Desktop: inline links                                                                                                                                       │
│ 5. CookieBanner.astro:                                                                                                                                          │
│   - LocalStorage check                                                                                                                                          │
│   - Accept button (zapisuje do localStorage)                                                                                                                    │
│   - Policy link (showCookiePolicy)                                                                                                                              │
│   - Fixed bottom position                                                                                                                                       │
│ 6. LanguageSwitcher.astro:                                                                                                                                      │
│   - Pokazuje 2 inne języki (nie obecny)                                                                                                                         │
│   - Generuje poprawne ścieżki (zachowuje current path)                                                                                                          │
│   - Style z Tailwind                                                                                                                                            │
│                                                                                                                                                                 │
│ Weryfikacja: Każdy component osobno na test page                                                                                                                │
│                                                                                                                                                                 │
│ ---                                                                                                                                                             │
│ FAZA 5: Gallery & Lightbox                                                                                                                                      │
│                                                                                                                                                                 │
│ Cel: Galeria z lightbox działa identycznie jak w obecnej stronie                                                                                                │
│                                                                                                                                                                 │
│ Kroki:                                                                                                                                                          │
│ 1. Gallery.astro:                                                                                                                                               │
│   - Import 8 głównych obrazów z assets                                                                                                                          │
│   - Picture component z widths: [400, 600, 834]                                                                                                                 │
│   - Tooltips na hover                                                                                                                                           │
│   - Click handler: onclick="openImage(index)"                                                                                                                   │
│   - Grid layout responsive (4→2→1 kolumny)                                                                                                                      │
│ 2. GalleryOverlay.astro:                                                                                                                                        │
│   - Fixed overlay (rgba(0,0,0,0.86))                                                                                                                            │
│   - Close button (×)                                                                                                                                            │
│   - Navigation buttons (❮ ❯)                                                                                                                                    │
│   - Image display                                                                                                                                               │
│   - Keyboard support prep (ESC, arrows)                                                                                                                         │
│ 3. src/scripts/lightbox.ts:                                                                                                                                     │
│   - openImage(index) - pokazuje overlay                                                                                                                         │
│   - closeImage() - ukrywa overlay                                                                                                                               │
│   - prevImage(), nextImage() - nawigacja                                                                                                                        │
│   - Keyboard listeners (ESC, ArrowLeft, ArrowRight)                                                                                                             │
│   - Touch swipe support (opcjonalnie)                                                                                                                           │
│                                                                                                                                                                 │
│ Weryfikacja: Kliknij zdjęcie → overlay → nawigacja działa                                                                                                       │
│                                                                                                                                                                 │
│ ---                                                                                                                                                             │
│ FAZA 6: Sections & Boxes                                                                                                                                        │
│                                                                                                                                                                 │
│ Cel: Wszystkie sekcje strony głównej gotowe                                                                                                                     │
│                                                                                                                                                                 │
│ Kroki:                                                                                                                                                          │
│ 1. AmenitiesSection.astro:                                                                                                                                      │
│   - Grid 9/3/2 kolumny (responsive)                                                                                                                             │
│   - 9 ikon + teksty (amenities)                                                                                                                                 │
│   - Background #f2f2f2                                                                                                                                          │
│   - Picture dla ikon (SVG/PNG)                                                                                                                                  │
│ 2. DescriptionBox.astro:                                                                                                                                        │
│   - Props: variant (default, promo, lato)                                                                                                                       │
│   - Border styles                                                                                                                                               │
│   - Padding responsive                                                                                                                                          │
│   - Slot dla content                                                                                                                                            │
│ 3. AvailabilityBox.astro:                                                                                                                                       │
│   - Fetch data: getEntry('site', 'config')                                                                                                                      │
│   - Display: nextAvailable dates                                                                                                                                │
│   - Promo codes z copy button                                                                                                                                   │
│   - Dynamic summer slots (lipiec, sierpień)                                                                                                                     │
│ 4. PromoCode.astro:                                                                                                                                             │
│   - Styled span (promo-code class)                                                                                                                              │
│   - Copy button z onclick                                                                                                                                       │
│   - copyCode(id, btn) function                                                                                                                                  │
│   - Visual feedback (zmiana tekstu "Skopiowano!")                                                                                                               │
│ 5. Button.astro:                                                                                                                                                │
│   - Props: variant (reserve, info, dostep)                                                                                                                      │
│   - Tailwind classes z config colors                                                                                                                            │
│   - Hover states                                                                                                                                                │
│   - Aria labels                                                                                                                                                 │
│                                                                                                                                                                 │
│ Weryfikacja: Wszystkie sekcje renderują się poprawnie                                                                                                           │
│                                                                                                                                                                 │
│ ---                                                                                                                                                             │
│ FAZA 7: Content Collections                                                                                                                                     │
│                                                                                                                                                                 │
│ Cel: System edytowalnych treści działa                                                                                                                          │
│                                                                                                                                                                 │
│ Kroki:                                                                                                                                                          │
│ 1. Define schema w src/content/config.ts:                                                                                                                       │
│   - promoBar (enabled, messages[pl/en/de])                                                                                                                      │
│   - availability (nextAvailable, summerSlots)                                                                                                                   │
│   - contact (phone, whatsapp, email)                                                                                                                            │
│ 2. Stwórz src/content/site/config.json z obecnymi danymi                                                                                                        │
│ 3. Integracja w komponentach:                                                                                                                                   │
│   - PromoBar fetch i display                                                                                                                                    │
│   - AvailabilityBox fetch i display                                                                                                                             │
│   - TopBar contact info fetch                                                                                                                                   │
│                                                                                                                                                                 │
│ Weryfikacja: Edytuj JSON → hot reload → zmiany widoczne                                                                                                         │
│                                                                                                                                                                 │
│ ---                                                                                                                                                             │
│ FAZA 8: Pages Creation                                                                                                                                          │
│                                                                                                                                                                 │
│ Cel: Wszystkie 18 stron (6 stron × 3 języki) gotowe                                                                                                             │
│                                                                                                                                                                 │
│ Kolejność:                                                                                                                                                      │
│ 1. PL pages (6 stron):                                                                                                                                          │
│   - src/pages/index.astro                                                                                                                                       │
│   - src/pages/dojazd.astro                                                                                                                                      │
│   - src/pages/regulamin.astro                                                                                                                                   │
│   - src/pages/polityka-prywatnosci.astro                                                                                                                        │
│   - src/pages/rodo.astro                                                                                                                                        │
│   - src/pages/404.astro                                                                                                                                         │
│ 2. EN pages (6 stron):                                                                                                                                          │
│   - src/pages/en/index.astro                                                                                                                                    │
│   - src/pages/en/local-directions.astro                                                                                                                         │
│   - src/pages/en/terms-and-conditions.astro                                                                                                                     │
│   - src/pages/en/privacy-policy.astro                                                                                                                           │
│   - src/pages/en/rodo.astro                                                                                                                                     │
│   - src/pages/en/404.astro                                                                                                                                      │
│ 3. DE pages (6 stron):                                                                                                                                          │
│   - src/pages/de/index.astro                                                                                                                                    │
│   - src/pages/de/anfahrt-vor-ort.astro                                                                                                                          │
│   - src/pages/de/hausordnung.astro                                                                                                                              │
│   - src/pages/de/datenschutzerklarung.astro                                                                                                                     │
│   - src/pages/de/rodo.astro                                                                                                                                     │
│   - src/pages/de/404.astro                                                                                                                                      │
│                                                                                                                                                                 │
│ Dla każdej strony:                                                                                                                                              │
│ - Import PageLayout                                                                                                                                             │
│ - Przekaż props: title, description                                                                                                                             │
│ - Compose components (TopBar, sections, Footer)                                                                                                                 │
│ - Apply translations (useTranslations)                                                                                                                          │
│                                                                                                                                                                 │
│ Weryfikacja: Wszystkie 18 stron renderują bez błędów                                                                                                            │
│                                                                                                                                                                 │
│ ---                                                                                                                                                             │
│ FAZA 9: SEO & Schema                                                                                                                                            │
│                                                                                                                                                                 │
│ Cel: Pełna optymalizacja SEO                                                                                                                                    │
│                                                                                                                                                                 │
│ Kroki:                                                                                                                                                          │
│ 1. SchemaOrg.astro:                                                                                                                                             │
│   - LodgingBusiness type                                                                                                                                        │
│   - Wielojęzyczne name/description/offers                                                                                                                       │
│   - Address, telephone, url, image                                                                                                                              │
│   - makesOffer array (2 oferty)                                                                                                                                 │
│   - Test w Google Rich Results Test                                                                                                                             │
│ 2. Sitemap:                                                                                                                                                     │
│   - Auto-generation przez @astrojs/sitemap                                                                                                                      │
│   - Hreflang dla wszystkich 18 stron                                                                                                                            │
│   - Test: /sitemap-index.xml, /sitemap-0.xml                                                                                                                    │
│ 3. Meta tags audit:                                                                                                                                             │
│   - Wszystkie strony: title, description, canonical                                                                                                             │
│   - OG image (lasbialas8.webp)                                                                                                                                  │
│   - Hreflang (4 linki: pl, en, de, x-default)                                                                                                                   │
│                                                                                                                                                                 │
│ Weryfikacja: Lighthouse SEO = 100, Rich Results validated                                                                                                       │
│                                                                                                                                                                 │
│ ---                                                                                                                                                             │
│ FAZA 10: Visual Testing & QA                                                                                                                                    │
│                                                                                                                                                                 │
│ Cel: 100% wizualna zgodność z obecną stroną                                                                                                                     │
│                                                                                                                                                                 │
│ Testing checklist:                                                                                                                                              │
│ - Desktop (1920px, 1440px, 1280px) - layout identical                                                                                                           │
│ - Tablet (1024px, 768px) - grid columns collapse correctly                                                                                                      │
│ - Mobile (600px, 375px) - mobile menu, contact collapse                                                                                                         │
│ - Typography: font-size, weight, line-height, letter-spacing                                                                                                    │
│ - Colors: all hex values match                                                                                                                                  │
│ - Spacing: margins, padding identical                                                                                                                           │
│ - Images: positions, sizes, alt texts                                                                                                                           │
│ - Hover states: all buttons, links                                                                                                                              │
│ - Animations: lightbox, mobile menu                                                                                                                             │
│ - Forms/buttons: styles, interactions                                                                                                                           │
│                                                                                                                                                                 │
│ Metoda:                                                                                                                                                         │
│ 1. Screenshot obecna strona (wszystkie breakpoints)                                                                                                             │
│ 2. Screenshot Astro strona (wszystkie breakpoints)                                                                                                              │
│ 3. Overlay comparison (50% opacity w Photoshop/Figma)                                                                                                           │
│ 4. Fix discrepancies                                                                                                                                            │
│ 5. Repeat until perfect match                                                                                                                                   │
│                                                                                                                                                                 │
│ Cross-browser: Chrome, Firefox, Safari, Edge                                                                                                                    │
│                                                                                                                                                                 │
│ Weryfikacja: Side-by-side comparison = identyczne                                                                                                               │
│                                                                                                                                                                 │
│ ---                                                                                                                                                             │
│ FAZA 11: Performance Audit                                                                                                                                      │
│                                                                                                                                                                 │
│ Cel: Lighthouse Performance >= 95                                                                                                                               │
│                                                                                                                                                                 │
│ Sprawdzenie:                                                                                                                                                    │
│ - Lighthouse Performance >= 95                                                                                                                                  │
│ - Lighthouse Accessibility >= 95                                                                                                                                │
│ - Lighthouse Best Practices >= 95                                                                                                                               │
│ - Lighthouse SEO = 100                                                                                                                                          │
│ - First Contentful Paint < 1.5s                                                                                                                                 │
│ - Largest Contentful Paint < 2.5s                                                                                                                               │
│ - Cumulative Layout Shift < 0.1                                                                                                                                 │
│ - Total Blocking Time < 200ms                                                                                                                                   │
│                                                                                                                                                                 │
│ Optymalizacje:                                                                                                                                                  │
│ - All images use Picture (AVIF/WebP)                                                                                                                            │
│ - Font preloads (3 wagi Montserrat)                                                                                                                             │
│ - Critical images preloaded (first 3)                                                                                                                           │
│ - Lazy loading (remaining images)                                                                                                                               │
│ - CSS minified (lightningcss)                                                                                                                                   │
│ - JS minimal (only interactions)                                                                                                                                │
│                                                                                                                                                                 │
│ Production build:                                                                                                                                               │
│ npm run build                                                                                                                                                   │
│ npm run preview                                                                                                                                                 │
│                                                                                                                                                                 │
│ Weryfikacja: Preview działa identycznie jak dev                                                                                                                 │
│                                                                                                                                                                 │
│ ---                                                                                                                                                             │
│ FAZA 12: Deployment                                                                                                                                             │
│                                                                                                                                                                 │
│ Cel: Strona wdrożona na produkcję                                                                                                                               │
│                                                                                                                                                                 │
│ Przygotowanie:                                                                                                                                                  │
│ 1. .gitignore:                                                                                                                                                  │
│ node_modules/                                                                                                                                                   │
│ dist/                                                                                                                                                           │
│ .astro/                                                                                                                                                         │
│ .env                                                                                                                                                            │
│ 2. Environment variables (jeśli potrzeba):                                                                                                                      │
│   - YABRIX_ID=1f3667d27b92c8b9                                                                                                                                  │
│   - GA_ID=G-R3P2XT4WY8                                                                                                                                          │
│   - BOOKERO_ID=WmRe79H4lKFz                                                                                                                                     │
│ 3. Build command: npm run build                                                                                                                                 │
│ 4. Output directory: dist/                                                                                                                                      │
│                                                                                                                                                                 │
│ Deployment opcje:                                                                                                                                               │
│ - Netlify: Drag & drop dist/ lub GitHub integration                                                                                                             │
│ - Vercel: GitHub integration, auto-deploy                                                                                                                       │
│ - CloudFlare Pages: GitHub integration                                                                                                                          │
│ - Własny serwer: Upload dist/ + konfiguracja Apache/Nginx                                                                                                       │
│                                                                                                                                                                 │
│ Weryfikacja: Produkcyjna strona działa, wszystkie linki, obrazy, skrypty OK                                                                                     │
│                                                                                                                                                                 │
│ ---                                                                                                                                                             │
│ Krytyczne Pliki do Implementacji                                                                                                                                │
│                                                                                                                                                                 │
│ Top 5 Reference Files (do czytania podczas implementacji):                                                                                                      │
│                                                                                                                                                                 │
│ 1. C:\Users\seo_srv1\Desktop\ai_tests\las-bialas-astro\las-bialas-obecnie\index.html (linie 1-2844)                                                             │
│   - Powód: Kompletna struktura strony głównej, wszystkie komponenty, CSS (1600+ linii), JavaScript, meta tags, Schema.org. Master blueprint.                    │
│ 2. C:\Users\seo_srv1\Desktop\ai_tests\las-bialas-astro\las-bialas-obecnie\en\index.html (~2524 linie)                                                           │
│   - Powód: Wersja angielska dla i18n, wszystkie tłumaczenia, różnice w content.                                                                                 │
│ 3. C:\Users\seo_srv1\Desktop\ai_tests\las-bialas-astro\las-bialas-obecnie\de\index.html (~2578 linii)                                                           │
│   - Powód: Wersja niemiecka dla pełnego pokrycia i18n.                                                                                                          │
│ 4. C:\Users\seo_srv1\Desktop\ai_tests\las-bialas-astro\las-bialas-obecnie\dojazd.html (131 linii)                                                               │
│   - Powód: Wzorzec dla prostych stron wewnętrznych, inny layout (zielony top-bar).                                                                              │
│ 5. C:\Users\seo_srv1\Desktop\ai_tests\las-bialas-astro\las-bialas-obecnie\regulamin.html (1851 linii)                                                           │
│   - Powód: Wzorzec dla stron prawnych (text-heavy content), typography, structure.                                                                              │
│                                                                                                                                                                 │
│ Katalogi Assets:                                                                                                                                                │
│                                                                                                                                                                 │
│ - Fonty: las-bialas-obecnie/fonts/ (Montserrat: Light, Regular, SemiBold WOFF2)                                                                                 │
│ - Obrazy: las-bialas-obecnie/foto/ (wszystkie WebP do optymalizacji)                                                                                            │
│ - Ikony: las-bialas-obecnie/images/ (PNG/WebP UI elements)                                                                                                      │
│ - Favicon: las-bialas-obecnie/favicon/ (7 plików)                                                                                                               │
│                                                                                                                                                                 │
│ ---                                                                                                                                                             │
│ Verification Strategy                                                                                                                                           │
│                                                                                                                                                                 │
│ End-to-End Testing Checklist:                                                                                                                                   │
│                                                                                                                                                                 │
│ Funkcjonalność:                                                                                                                                                 │
│ - Wszystkie 18 stron renderują się bez błędów                                                                                                                   │
│ - Language switcher działa (przełącza między PL/EN/DE)                                                                                                          │
│ - Mobile menu (hamburger) otwiera i zamyka się                                                                                                                  │
│ - Gallery lightbox: otwiera, nawigacja (prev/next), zamyka (X, ESC)                                                                                             │
│ - Promo codes: copy button kopiuje do clipboard                                                                                                                 │
│ - Bookero: sticky button pokazuje się, otwiera panel rezerwacji                                                                                                 │
│ - Bookero validation: minimum 2 doby egzekwowane                                                                                                                │
│ - Cookies banner: pokazuje się, "Akceptuję" ukrywa i zapisuje w localStorage                                                                                    │
│ - Google Analytics: ładuje się lazy (scroll/mousemove)                                                                                                          │
│ - Yabrix: script ładuje się                                                                                                                                     │
│ - Blog link: prowadzi do lasbialas.pl/blog                                                                                                                      │
│ - Przewodnik link: prowadzi do lasbialas.pl/info/                                                                                                               │
│ - Wszystkie linki wewnętrzne działają                                                                                                                           │
│ - Wszystkie obrazy ładują się (alt texts poprawne)                                                                                                              │
│                                                                                                                                                                 │
│ SEO:                                                                                                                                                            │
│ - Lighthouse SEO = 100 (wszystkie strony)                                                                                                                       │
│ - Google Rich Results Test: Schema.org validated                                                                                                                │
│ - Sitemap: /sitemap-index.xml dostępny, zawiera wszystkie 18 stron                                                                                              │
│ - Hreflang: każda strona ma 4 linki (pl, en, de, x-default)                                                                                                     │
│ - Canonical: poprawny dla każdej strony                                                                                                                         │
│ - Meta description: unikalna dla każdej strony                                                                                                                  │
│ - H1-H6: hierarchia zachowana                                                                                                                                   │
│                                                                                                                                                                 │
│ Performance:                                                                                                                                                    │
│ - Lighthouse Performance >= 95                                                                                                                                  │
│ - FCP < 1.5s                                                                                                                                                    │
│ - LCP < 2.5s                                                                                                                                                    │
│ - CLS < 0.1                                                                                                                                                     │
│ - Images: AVIF/WebP served, lazy loading działa                                                                                                                 │
│ - Fonts: preloaded, woff2 format                                                                                                                                │
│ - CSS: minified, < 50KB                                                                                                                                         │
│ - JS: minimal, < 30KB                                                                                                                                           │
│                                                                                                                                                                 │
│ Wizualna zgodność:                                                                                                                                              │
│ - Desktop (1920px): layout identyczny                                                                                                                           │
│ - Desktop (1280px): layout identyczny                                                                                                                           │
│ - Tablet (1024px): grid collapse 9→3 kolumny                                                                                                                    │
│ - Tablet (768px): mobile menu pojawia się                                                                                                                       │
│ - Mobile (600px): grid collapse 3→2 kolumny                                                                                                                     │
│ - Mobile (375px): wszystko czytelne, buttons dostępne                                                                                                           │
│ - Typography: wszystkie font-sizes, weights, line-heights identyczne                                                                                            │
│ - Colors: wszystkie kolory identyczne (hex match)                                                                                                               │
│ - Spacing: margins, padding identyczne                                                                                                                          │
│ - Hover states: wszystkie przyciski, linki                                                                                                                      │
│                                                                                                                                                                 │
│ Content:                                                                                                                                                        │
│ - Wszystkie teksty przeniesione (PL, EN, DE)                                                                                                                    │
│ - Wszystkie alt texts przeniesione                                                                                                                              │
│ - Wszystkie ikony przeniesione                                                                                                                                  │
│ - Promo bar: wyświetla content z config.json                                                                                                                    │
│ - Availability dates: wyświetla content z config.json                                                                                                           │
│ - Contact info: wyświetla content z config.json                                                                                                                 │
│ - Edycja config.json → hot reload → zmiany widoczne                                                                                                             │
│                                                                                                                                                                 │
│ Cross-browser:                                                                                                                                                  │
│ - Chrome: wszystko działa                                                                                                                                       │
│ - Firefox: wszystko działa                                                                                                                                      │
│ - Safari: wszystko działa                                                                                                                                       │
│ - Edge: wszystko działa                                                                                                                                         │
│                                                                                                                                                                 │
│ ---                                                                                                                                                             │
│ Edycja Treści z GitHuba                                                                                                                                         │
│                                                                                                                                                                 │
│ Po wdrożeniu, klient będzie mógł edytować zmienne treści bezpośrednio z GitHuba:                                                                                │
│                                                                                                                                                                 │
│ Ścieżka do edycji:                                                                                                                                              │
│                                                                                                                                                                 │
│ Repository → src/content/site/config.json → Edit file                                                                                                           │
│                                                                                                                                                                 │
│ Przykładowe zmiany:                                                                                                                                             │
│                                                                                                                                                                 │
│ Zmiana komunikatu promo bar:                                                                                                                                    │
│ "promoBar": {                                                                                                                                                   │
│   "enabled": true,                                                                                                                                              │
│   "messages": {                                                                                                                                                 │
│     "pl": "Rezerwacje <strong>WRZESIEŃ</strong> <strong>PAŹDZIERNIK</strong> tylko na telefon",                                                                 │
│     "en": "Reservations for <strong>SEPTEMBER</strong> <strong>OCTOBER</strong> only by phone",                                                                 │
│     "de": "Reservierungen für <strong>SEPTEMBER</strong> <strong>OKTOBER</strong> nur telefonisch"                                                              │
│   }                                                                                                                                                             │
│ }                                                                                                                                                               │
│                                                                                                                                                                 │
│ Zmiana dostępnych terminów:                                                                                                                                     │
│ "availability": {                                                                                                                                               │
│   "nextAvailable": {                                                                                                                                            │
│     "dates": "15-18 wrz",                                                                                                                                       │
│     "discountCode": "LB15WRZ"                                                                                                                                   │
│   },                                                                                                                                                            │
│   "summerSlots": {                                                                                                                                              │
│     "july": ["WSZYSTKIE ZAJĘTE"],                                                                                                                               │
│     "august": ["WSZYSTKIE ZAJĘTE"]                                                                                                                              │
│   }                                                                                                                                                             │
│ }                                                                                                                                                               │
│                                                                                                                                                                 │
│ Po zapisaniu: GitHub Action → auto build → auto deploy → zmiany live w 2-3 minuty                                                                               │
│                                                                                                                                                                 │
│ ---                                                                                                                                                             │
│ Timeline Estimate                                                                                                                                               │
│                                                                                                                                                                 │
│ Single developer, full-time:                                                                                                                                    │
│ - FAZA 1-3: 1.5 dnia (setup, i18n, layouts)                                                                                                                     │
│ - FAZA 4-5: 2 dni (components, gallery)                                                                                                                         │
│ - FAZA 6-8: 2 dni (sections, content, pages)                                                                                                                    │
│ - FAZA 9-10: 1.5 dnia (SEO, visual testing)                                                                                                                     │
│ - FAZA 11-12: 1 dzień (performance, deployment)                                                                                                                 │
│                                                                                                                                                                 │
│ Total: ~8 dni                                                                                                                                                   │
│                                                                                                                                                                 │
│ Part-time (4h/dzień): ~16 dni roboczych                                                                                                                         │
│                                                                                                                                                                 │
│ ---                                                                                                                                                             │
│ Podsumowanie                                                                                                                                                    │
│                                                                                                                                                                 │
│ Architektury Decisions:                                                                                                                                         │
│                                                                                                                                                                 │
│ 1. i18n: Folder-based, PL jako root, brak prefiksu dla default locale                                                                                           │
│ 2. CSS: Hybrid Tailwind + Custom CSS (złożone animacje custom)                                                                                                  │
│ 3. Obrazy: Astro Picture (AVIF/WebP, responsive srcsets)                                                                                                        │
│ 4. Content: Astro Content Collections (JSON, Git-editable)                                                                                                      │
│ 5. SEO: astro-seo + custom Schema.org, auto sitemap                                                                                                             │
│ 6. Analytics: Current lazy-load approach (prostsze niż Partytown)                                                                                               │
│ 7. Scripts: Mix inline (interactions) + external TypeScript                                                                                                     │
│                                                                                                                                                                 │
│ Korzyści migracji:                                                                                                                                              │
│                                                                                                                                                                 │
│ - ✅ Maintainability: Komponenty wielokrotnego użytku, jeden source of truth                                                                                    │
│ - ✅ Performance: Optymalizacja obrazów (AVIF/WebP), lazy loading, preloads                                                                                     │
│ - ✅ SEO: Automatyczny sitemap, hreflang, schema.org                                                                                                            │
│ - ✅ DX: TypeScript, Tailwind, hot reload, type safety                                                                                                          │
│ - ✅ Content: JSON-editable z GitHuba, bez CMS                                                                                                                  │
│ - ✅ Future-proof: Nowoczesny stack, łatwe utrzymanie                                                                                                           │
│                                                                                                                                                                 │
│ Gwarancje:                                                                                                                                                      │
│                                                                                                                                                                 │
│ - 100% wizualna zgodność z obecną stroną                                                                                                                        │
│ - Wszystkie SEO elements zachowane                                                                                                                              │
│ - Wszystkie integracje działają (Yabrix, GA, Bookero)                                                                                                           │
│ - Performance >= 95 (Lighthouse)                                                                                                                                │
│ - Accessibility >= 95 (Lighthouse)                                                                                                                              │
╰─────────────────────────────────────