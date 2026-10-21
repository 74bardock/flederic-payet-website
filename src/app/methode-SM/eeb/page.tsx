'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function EebPage() {
  const { t } = useLanguage();
  const page = (t as any).MethodPages?.equipment;
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
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-[#0f2851]">{page?.tools_title}</h2>
            <p className="text-slate-800 text-base leading-relaxed">{page?.tools_desc}</p>
          </div>

          <div className="p-6 bg-[#0f2851] text-white rounded-2xl space-y-2 shadow-lg">
            <h3 className="text-lg font-bold">{page?.access_title}</h3>
            <p className="text-sm leading-relaxed text-slate-200">{page?.access_desc}</p>
          </div>

          <div className="p-4 bg-slate-900 text-slate-300 rounded-2xl text-xs space-y-1">
            <span className="font-bold text-amber-400">🔒 Propriété Intellectuelle</span>
            <p className="italic">{page?.ip_desc}</p>
          </div>
        </section>

        {/* Navigation inter-pages traduisible */}
        <div className="flex justify-between items-center pt-4">
          <Link href="/methode-SM/em" className="text-[#0f2851] font-bold text-sm hover:underline">
            ← {header?.method_submenu?.metabolic_effort}
          </Link>
          <Link href="/contact" className="px-6 py-3 bg-[#0f2851] hover:bg-[#1a386d] text-white rounded-2xl font-bold transition-all shadow-lg text-sm">
            {header?.nav_contact} →
          </Link>
        </div>

      </div>
    </main>
  );
}