'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const nav = t.Header;

  return (
    <header className="border-b border-slate-200 bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-24 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="MetaboSync Icône"
            className="w-28 h-auto" 
          />
          <img
            src="/logo_metabo.png"
            alt="MetaboSync HealthTech"
            className="w-52 h-auto"
          />
        </Link>

        {/* Navigation principale (4 liens) */}
        <nav className="hidden md:flex items-center space-x-6 text-SM font-medium text-slate-700">
          <Link href="/a-propos" className="hover:text-blue-600 transition-colors">
            {nav.nav_about}
          </Link>
          <Link href="/methode-SM" className="hover:text-blue-600 transition-colors">
            {nav.nav_method}
          </Link>
          <Link href="/temoignages" className="hover:text-blue-600 transition-colors">
            {nav.nav_testimonials}
          </Link>
          <Link href="/contact" className="hover:text-blue-600 transition-colors">
            {nav.nav_contact}
          </Link>
        </nav>

        {/* Sélecteur de langue */}
        <div className="flex items-center space-x-2 text-xs font-semibold">
          <button
            onClick={() => setLang('fr')}
            className={`px-2 py-1 rounded transition-colors ${
              lang === 'fr' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            FR
          </button>
          <button
            onClick={() => setLang('en')}
            className={`px-2 py-1 rounded transition-colors ${
              lang === 'en' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
}