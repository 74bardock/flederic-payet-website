'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import fr from '@/dictionaries/fr.json';
import en from '@/dictionaries/en.json';
import el from '@/dictionaries/el.json';

type Language = 'fr' | 'en' | 'el';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof fr;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('fr');

  let t = fr;
  if (lang === 'en') t = en as any;
  if (lang === 'el') t = el as any;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage doit être utilisé au sein d\'un LanguageProvider');
  }
  return context;
}