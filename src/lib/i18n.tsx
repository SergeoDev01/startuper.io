import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import en from '@/locales/en.json';
import fr from '@/locales/fr.json';

export type Locale = 'en' | 'fr';

type Messages = Record<string, string>;

const messagesMap: Record<Locale, Messages> = { en, fr };

const STORAGE_KEY = 'startuperio_locale';
const SUPPORTED_LOCALES: Locale[] = ['en', 'fr'];

interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

function detectBrowserLocale(): Locale {
  try {
    const lang = navigator.language?.split('-')[0];
    if (SUPPORTED_LOCALES.includes(lang as Locale)) return lang as Locale;
  } catch {}
  return 'en';
}

function getInitialLocale(): Locale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED_LOCALES.includes(stored as Locale)) return stored as Locale;
  } catch {}
  return detectBrowserLocale();
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem(STORAGE_KEY, newLocale);
    } catch {}
  };

  const t = (key: string): string => {
    return messagesMap[locale]?.[key] ?? messagesMap.en?.[key] ?? key;
  };

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useTranslation must be used within I18nProvider');
  return ctx;
}
