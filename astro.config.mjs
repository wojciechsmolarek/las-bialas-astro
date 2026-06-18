// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://lasbialas.pl',

  i18n: {
    defaultLocale: 'pl',
    locales: ['pl', 'en', 'de'],
    routing: {
      prefixDefaultLocale: false,
      strategy: 'pathname'
    }
  },

  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: 'pl',
        locales: {
          pl: 'pl',
          en: 'en',
          de: 'de'
        }
      }
    })
  ]
});
