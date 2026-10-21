'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function QcsmndfPage() {
  const { t } = useLanguage();
  const page = (t as any).MethodPages?.what_sm_does_not_do;
  const header = (t as any).Header;

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#dbe5f3] via-[#d5e2f1] to-[#c8d8ec] text-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* En-tête */}
        <section className="space-y-3 border-b-2 border-[#0f2851]/20 pb-6">
          <h1 className="text-3xl sm:text-5xl font-black text-[#0f2851] tracking-tight">
            {page?.title}
          </h1>
          <p className="text-lg text-slate-700 font-medium">
            {page?.subtitle}
          </p>
        </section>

        <section className="bg-white/90 backdrop-blur-md border border-[#8ea0be] rounded-3xl p-8 space-y-6 shadow-xl">
          <div className="p-6 bg-[#0f2851]/10 border-l-4 border-[#0f2851] rounded-r-2xl">
            <p className="text-lg sm:text-xl font-bold text-[#0f2851] leading-relaxed">
              « {page?.main_text} »
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-[#8ea0be]/30">
            <h2 className="text-xl font-bold text-[#0f2851]">{page?.progress_title}</h2>
            <p className="text-slate-800 text-base sm:text-lg leading-relaxed text-justify">
              {page?.progress_desc}
            </p>
          </div>
        </section>

        {/* Navigation inter-pages traduisible */}
        <div className="flex justify-between items-center pt-4">
          <Link href="/methode-SM/pec" className="text-[#0f2851] font-bold text-sm hover:underline">
            ← {header?.method_submenu?.who_is_concerned}
          </Link>
          <Link href="/methode-SM/em" className="px-6 py-3 bg-[#0f2851] hover:bg-[#1a386d] text-white rounded-2xl font-bold transition-all shadow-lg text-sm">
            {header?.method_submenu?.metabolic_effort} →
          </Link>
        </div>

      </div>
    </main>
  );
}