'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function PecPage() {
  const { t } = useLanguage();
  const page = (t as any).MethodPages?.who_is_concerned;
  const header = (t as any).Header;

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#dbe5f3] via-[#d5e2f1] to-[#c8d8ec] text-slate-900 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-10 relative">
        
        {/* En-tête */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b-2 border-[#0f2851]/20 pb-6">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl font-black text-[#0f2851] tracking-tight">
              {page?.title}
            </h1>
            <p className="text-lg text-slate-700 font-medium">
              {page?.subtitle}
            </p>
          </div>
          <div className="bg-[#0a1930] p-4 rounded-2xl border border-slate-800 shrink-0">
            <img src="/logo_metabo.png" alt="MetaboSync Logo" className="h-10 w-auto object-contain" />
          </div>
        </div>

        {/* Grille des 3 Cibles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Cible 1 : Santé */}
          <div className="bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-[#8ea0be] shadow-xl flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-all">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[#0f2851] text-white flex items-center justify-center font-bold">1</div>
              <h3 className="text-lg font-bold text-[#0f2851]">{page?.target1_title}</h3>
              <p className="text-slate-700 text-sm leading-relaxed text-justify">{page?.target1_desc}</p>
            </div>
          </div>

          {/* Cible 2 : Athlètes */}
          <div className="bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-[#8ea0be] shadow-xl flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-all">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[#0f2851] text-white flex items-center justify-center font-bold">2</div>
              <h3 className="text-lg font-bold text-[#0f2851]">{page?.target2_title}</h3>
              <p className="text-slate-700 text-sm leading-relaxed text-justify">{page?.target2_desc}</p>
            </div>
          </div>

          {/* Cible 3 : Forces Spéciales */}
          <div className="bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-[#8ea0be] shadow-xl flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-all">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[#0f2851] text-white flex items-center justify-center font-bold">3</div>
              <h3 className="text-lg font-bold text-[#0f2851]">{page?.target3_title}</h3>
              <p className="text-slate-700 text-sm leading-relaxed text-justify">{page?.target3_desc}</p>
            </div>
          </div>

        </div>

        {/* Navigation inter-pages traduisible */}
        <div className="flex justify-between items-center pt-6">
          <Link href="/methode-SM/qecqs" className="text-[#0f2851] font-bold text-sm hover:underline">
            ← {header?.method_submenu?.what_is_sm}
          </Link>
          <Link href="/methode-SM/qcsmndf" className="px-6 py-3 bg-[#0f2851] hover:bg-[#1a386d] text-white rounded-2xl font-bold transition-all shadow-lg text-sm">
            {header?.method_submenu?.what_sm_does_not_do} →
          </Link>
        </div>

      </div>
    </main>
  );
}