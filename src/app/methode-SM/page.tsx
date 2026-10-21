'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import AvatarBicyclette from '@/components/AvatarBicyclette';

export default function MethodeSMPage() {
  const { t } = useLanguage();
  const method = t?.Method || {};
  
  return (
    <main className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      
      {/* En-tête */}
      <section className="text-center space-y-4">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0f2851] tracking-tight">
          {method.page_title}
        </h1>
        <p className="text-xl text-[#0f2851] font-semibold">
          {method.subtitle}
        </p>
        <div className="p-6 bg-white/85 backdrop-blur-sm border border-[#8ea0be]/50 rounded-2xl shadow-md max-w-3xl mx-auto mt-6">
          <p className="text-lg text-[#1e293b] italic leading-relaxed">
            « {method.definition} »
          </p>
        </div>
      </section>

      {/* Liens d'accès direct vers les sous-pages de l'Option A */}
      <section className="bg-white/90 backdrop-blur-sm border border-[#8ea0be] rounded-2xl p-6 sm:p-8 space-y-6 shadow-md">
        <h2 className="text-2xl font-bold text-[#0f2851] text-center">
          {method.explore_title || "Explorez les sections de la Méthode"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Link href="/methode-SM/qecqs" className="p-4 bg-[#f0f4f9] hover:bg-[#0f2851] hover:text-white border border-[#8ea0be] rounded-xl transition-all text-[#0f2851] font-bold text-sm shadow-sm group">
            {method.link_qecqs || "Qu'est-ce que SM ?"} →
          </Link>
          <Link href="/methode-SM/pec" className="p-4 bg-[#f0f4f9] hover:bg-[#0f2851] hover:text-white border border-[#8ea0be] rounded-xl transition-all text-[#0f2851] font-bold text-sm shadow-sm group">
            {method.link_pec || "Public concerné"} →
          </Link>
          <Link href="/methode-SM/qcsmndf" className="p-4 bg-[#f0f4f9] hover:bg-[#0f2851] hover:text-white border border-[#8ea0be] rounded-xl transition-all text-[#0f2851] font-bold text-sm shadow-sm group">
            {method.link_qcsmndf || "Ce que SM ne fait pas"} →
          </Link>
          <Link href="/methode-SM/em" className="p-4 bg-[#f0f4f9] hover:bg-[#0f2851] hover:text-white border border-[#8ea0be] rounded-xl transition-all text-[#0f2851] font-bold text-sm shadow-sm group">
            {method.link_em || "Effort Métabolique"} →
          </Link>
          <Link href="/methode-SM/eeb" className="p-4 bg-[#f0f4f9] hover:bg-[#0f2851] hover:text-white border border-[#8ea0be] rounded-xl transition-all text-[#0f2851] font-bold text-sm shadow-sm group">
            {method.link_eeb || "Équipements & Bénéficiaires"} →
          </Link>
        </div>
      </section>

      {/* L'Analogie de la Bicyclette */}
      <section className="bg-white/80 backdrop-blur-sm border border-[#8ea0be]/50 rounded-2xl p-6 sm:p-8 space-y-8 shadow-md">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-[#0f2851] text-white rounded-xl">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f2851]">
              {method.analogy?.title || "L'Analogie de la Bicyclette"}
            </h2>
            <p className="text-slate-600 text-sm">
              Comprendre l'effort métabolique
            </p>
          </div>
        </div>

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

      {/* Appel à l'action */}
      <section className="text-center bg-white/80 backdrop-blur-sm border border-[#8ea0be]/50 rounded-2xl p-8 space-y-6 shadow-md">
        <p className="text-lg text-[#1e293b] max-w-2xl mx-auto">
          {method.cta}
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3 bg-[#0f2851] hover:bg-[#1a386d] text-white font-semibold rounded-xl shadow-md transition-all"
        >
          {method.cta_button}
        </Link>
      </section>

    </main>
  );
}