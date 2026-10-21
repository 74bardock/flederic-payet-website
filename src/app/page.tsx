'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function HomePage() {
  const { t, lang } = useLanguage();
  const hero = t.Hero;
  const isEn = lang === 'en';
  const isEl = lang === 'el';

  return (
    <main className="py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-10">
      
      {/* SECTION HAUTE : Logo à gauche, Texte à droite */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Bloc Logo à gauche */}
        <div className="lg:col-span-5 bg-[#0a1930] p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center border border-slate-800">
          <img
            src="/logo_metabo.png"
            alt="MetaboSync HealthTech"
            className="w-full max-w-[320px] h-auto object-contain"
          />
        </div>

        {/* Bloc Texte à droite */}
        <div className="lg:col-span-7 space-y-4">
          <p className="text-lg sm:text-xl font-medium text-[#1e293b] leading-relaxed italic">
            &ldquo;{hero.description}&rdquo;
          </p>
          <p className="text-sm font-semibold text-[#0f2851]">
            * {isEn ? 'Metabolic Synchronization' : isEl ? 'Μεταβολικός Συγχρονισμός' : 'Synchronisation Métabolique'}
          </p>
        </div>

      </div>

      {/* SECTION BASSE : Les 3 éléments côte à côte */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        
        {/* 1. Tapis de course */}
        <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden border-2 border-[#8ea0be] bg-white/50 shadow-md">
          <Image
            src="/tapis.jpg"
            alt="Tapis de course - Effort métabolique"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* 2. Cercles et formes géométriques */}
        <div className="relative h-64 sm:h-72 flex items-center justify-center p-4">
          <Image
            src="/cercles-home.jpg"
            alt="Synchronisation et formes"
            fill
            className="object-contain"
          />
        </div>

        {/* 3. Courbe / Écran ECG */}
        <div className="relative h-64 sm:h-72 flex items-center justify-center p-4">
          <Image
            src="/courbe.jpg"
            alt="Tracé de fréquence cardiaque ECG"
            fill
            className="object-contain"
          />
        </div>

      </div>

      {/* Liens de navigation rapide en bas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left pt-6 border-t border-[#8ea0be]/40">
        <Link 
          href="/methode-SM"
          className="p-5 bg-white/80 hover:bg-white border border-[#8ea0be] hover:border-[#0f2851] rounded-xl transition-all shadow-md group"
        >
          <h2 className="text-base font-bold text-[#0f2851] group-hover:text-blue-700 transition-colors mb-1">
            {hero.card_method_title} →
          </h2>
          <p className="text-slate-600 text-xs">
            {hero.card_method_desc}
          </p>
        </Link>

        <Link 
          href="/temoignages"
          className="p-5 bg-white/80 hover:bg-white border border-[#8ea0be] hover:border-[#0f2851] rounded-xl transition-all shadow-md group"
        >
          <h2 className="text-base font-bold text-[#0f2851] group-hover:text-blue-700 transition-colors mb-1">
            {hero.card_testimonials_title} →
          </h2>
          <p className="text-slate-600 text-xs">
            {hero.card_testimonials_desc}
          </p>
        </Link>

        <Link 
          href="/contact"
          className="p-5 bg-white/80 hover:bg-white border border-[#8ea0be] hover:border-[#0f2851] rounded-xl transition-all shadow-md group"
        >
          <h2 className="text-base font-bold text-[#0f2851] group-hover:text-blue-700 transition-colors mb-1">
            {hero.card_contact_title} →
          </h2>
          <p className="text-slate-600 text-xs">
            {hero.card_contact_desc}
          </p>
        </Link>
      </div>

    </main>
  );
}