'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function HomePage() {
  const { t } = useLanguage();
  const hero = t.Hero;

  return (
    <main className="min-h-[calc(100vh-6rem)] bg-slate-950 text-slate-100 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12 text-center">
        
        {/* Titre et bio */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-400 tracking-tight">
            MetaboSync
          </h1>
          <p className="text-xl sm:text-2xl font-semibold text-slate-300">
            {hero.subtitle}
          </p>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed text-base sm:text-lg">
            {hero.bio}
          </p>
        </div>

        {/* Cartes d'accès rapide */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <Link 
            href="/methode-mmd"
            className="p-6 bg-slate-900 border border-slate-800 hover:border-blue-500 rounded-2xl transition-all group shadow-lg"
          >
            <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
              {hero.card_method_title} →
            </h2>
            <p className="text-slate-400 text-sm">
              {hero.card_method_desc}
            </p>
          </Link>

          <Link 
            href="/temoignages"
            className="p-6 bg-slate-900 border border-slate-800 hover:border-blue-500 rounded-2xl transition-all group shadow-lg"
          >
            <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
              {hero.card_testimonials_title} →
            </h2>
            <p className="text-slate-400 text-sm">
              {hero.card_testimonials_desc}
            </p>
          </Link>

          <Link 
            href="/contact"
            className="p-6 bg-slate-900 border border-slate-800 hover:border-blue-500 rounded-2xl transition-all group shadow-lg"
          >
            <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
              {hero.card_contact_title} →
            </h2>
            <p className="text-slate-400 text-sm">
              {hero.card_contact_desc}
            </p>
          </Link>
        </div>

      </div>
    </main>
  );
}