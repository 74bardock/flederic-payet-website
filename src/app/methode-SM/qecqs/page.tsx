'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function QecqsPage() {
  const { t } = useLanguage();
  const page = (t as any).MethodPages?.what_is_sm;
  const method = (t as any).Method;
  const header = (t as any).Header;

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#dbe5f3] via-[#d5e2f1] to-[#c8d8ec] text-slate-900 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Motif décoratif en filigrane */}
      <div className="absolute top-10 right-10 w-48 h-48 opacity-20 pointer-events-none hidden md:block">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <pattern id="circlePattern" width="6" height="100" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="3" height="100" fill="#0f2851" />
            <rect x="3" y="0" width="3" height="100" fill="transparent" />
          </pattern>
          <circle cx="50" cy="50" r="48" fill="url(#circlePattern)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto space-y-10 relative">
        {/* En-tête de la page */}
        <section className="space-y-3 border-b-2 border-[#0f2851]/20 pb-6">
          <h1 className="text-3xl sm:text-5xl font-black text-[#0f2851] tracking-tight">
            {page?.title}
          </h1>
          <p className="text-lg text-slate-700 font-medium">
            {page?.subtitle}
          </p>
        </section>

        {/* Carte Principale */}
        <section className="bg-white/90 backdrop-blur-md border border-[#8ea0be] rounded-3xl p-6 sm:p-10 space-y-6 shadow-xl">
          <p className="text-lg sm:text-xl font-medium text-[#1e293b] leading-relaxed text-justify">
            {page?.intro}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-[#8ea0be]/30">
            {/* Dopamine */}
            <div className="bg-[#f0f4f9] p-5 rounded-2xl border border-[#8ea0be]/50 space-y-2">
              <span className="text-2xl">⚡</span>
              <h3 className="font-bold text-[#0f2851] text-sm uppercase">
                {page?.dopamine_title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {page?.dopamine}
              </p>
            </div>

            {/* Endorphines */}
            <div className="bg-[#f0f4f9] p-5 rounded-2xl border border-[#8ea0be]/50 space-y-2">
              <span className="text-2xl">🌱</span>
              <h3 className="font-bold text-[#0f2851] text-sm uppercase">
                {page?.endorphins_title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {page?.endorphins}
              </p>
            </div>

            {/* Sérotonine */}
            <div className="bg-[#f0f4f9] p-5 rounded-2xl border border-[#8ea0be]/50 space-y-2">
              <span className="text-2xl">✨</span>
              <h3 className="font-bold text-[#0f2851] text-sm uppercase">
                {page?.serotonin_title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {page?.serotonin}
              </p>
            </div>
          </div>
        </section>

        {/* Navigation inter-pages traduisible */}
        <div className="flex justify-between items-center pt-4">
          <Link href="/methode-SM" className="text-[#0f2851] font-bold text-sm hover:underline">
            ← {method?.nav_overview}
          </Link>
          <Link
            href="/methode-SM/pec"
            className="px-6 py-3 bg-[#0f2851] hover:bg-[#1a386d] text-white rounded-2xl font-bold transition-all shadow-lg text-sm"
          >
            {header?.method_submenu?.who_is_concerned} →
          </Link>
        </div>
      </div>
    </main>
  );
}