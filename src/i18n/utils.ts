import { ui, defaultLang } from './ui';

type Lang = 'pl' | 'en' | 'de';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en' || lang === 'de') return lang;
  return 'pl';
}

export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    const translations = ui as any;
    return translations[key]?.[lang] || translations[key]?.['pl'] || key;
  }
}

export function getLocalizedPath(path: string, lang: Lang): string {
  if (lang === defaultLang) {
    return path;
  }
  return `/${lang}${path}`;
}

export function getAlternateLanguages(currentLang: Lang): Lang[] {
  const allLangs: Lang[] = ['pl', 'en', 'de'];
  return allLangs.filter(lang => lang !== currentLang);
}
