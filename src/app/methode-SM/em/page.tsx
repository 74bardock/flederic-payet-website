'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import AvatarBicyclette from '@/components/AvatarBicyclette';

export default function EmPage() {
  const { t } = useLanguage();
  const page = (t as any).MethodPages?.metabolic_effort;
  const method = (t as any).Method;
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
          <p className="text-base sm:text-lg text-slate-800 leading-relaxed text-justify font-medium">
            {page?.intro}
          </p>

          <AvatarBicyclette />

			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
			  <div className="p-5 bg-white/60 border border-[#8ea0be] rounded-xl space-y-2">
				<div className="text-3xl">⛓️</div>
				<h3 className="font-bold text-[#0f2851]">{method.analogy?.chain_label || "La Chaîne"}</h3>
				<p className="text-slate-700 text-sm">{method.analogy?.chain}</p>
			  </div>
			  <div className="p-5 bg-white/60 border border-[#8ea0be] rounded-xl space-y-2">
				<div className="text-3xl">⚙️</div>
				<h3 className="font-bold text-[#0f2851]">{method.analogy?.chainring_label || "Le Plateau"}</h3>
				<p className="text-slate-700 text-sm">{method.analogy?.chainring}</p>
			  </div>
			  <div className="p-5 bg-white/60 border border-[#8ea0be] rounded-xl space-y-2">
				<div className="text-3xl">🚴</div>
				<h3 className="font-bold text-[#0f2851]">{method.analogy?.cogs_label || "Les Pignons"}</h3>
				<p className="text-slate-700 text-sm">{method.analogy?.cogs}</p>
			  </div>
			</div>
        </section>

        {/* Navigation inter-pages traduisible */}
        <div className="flex justify-between items-center pt-4">
          <Link href="/methode-SM/qcsmndf" className="text-[#0f2851] font-bold text-sm hover:underline">
            ← {header?.method_submenu?.what_sm_does_not_do}
          </Link>
          <Link href="/methode-SM/eeb" className="px-6 py-3 bg-[#0f2851] hover:bg-[#1a386d] text-white rounded-2xl font-bold transition-all shadow-lg text-sm">
            {header?.method_submenu?.equipment_used} →
          </Link>
        </div>

      </div>
    </main>
  );
}