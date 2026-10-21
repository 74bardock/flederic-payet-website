'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function PublicConcernePage() {
  const { t } = useLanguage();
  const targets = t.Method?.targets_slide;

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#dbe5f3] via-[#d5e2f1] to-[#c8d8ec] text-slate-900 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center min-h-[80vh]">
        
        {/* COLONNE GAUCHE : Logo + Cercles géométriques */}
        <div className="lg:col-span-5 flex flex-col justify-between items-center lg:items-start h-full space-y-12">
          
          {/* Bloc Logo en haut à gauche */}
          <div className="w-full max-w-[340px] bg-[#0a1930] p-6 rounded-2xl shadow-2xl border border-slate-800 flex items-center justify-center">
            <img
              src="/logo_metabo.png"
              alt="MetaboSync HealthTech"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Motif géométrique en bas à gauche : Cercle bleu plein superposé au cercle hachuré */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 my-auto flex items-center justify-center">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <defs>
                <pattern id="slideStripes" width="10" height="200" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="5" height="200" fill="#2b427b" />
                  <rect x="5" y="0" width="5" height="200" fill="transparent" />
                </pattern>
              </defs>
              {/* Cercle hachuré en arrière-plan */}
              <circle cx="115" cy="115" r="70" fill="url(#slideStripes)" opacity="0.85" />
              {/* Cercle bleu foncé au premier plan à gauche */}
              <circle cx="75" cy="75" r="55" fill="#0f2851" />
              {/* Évidement central du cercle bleu */}
              <circle cx="75" cy="75" r="32" fill="#d5e2f1" />
            </svg>
          </div>

        </div>

        {/* COLONNE DROITE : Les 3 sections de texte */}
        <div className="lg:col-span-7 space-y-8 py-4">
          
          {/* Section 1 : Problèmes de santé */}
          <section className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f2851] tracking-tight">
              {targets?.health_title || "Personnes avec des problèmes de santé (mineurs à majeurs)"}
            </h2>
            <p className="text-slate-800 text-sm sm:text-base leading-relaxed text-justify">
              {targets?.health_desc}
            </p>
          </section>

          {/* Section 2 : Athlètes */}
          <section className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f2851] tracking-tight">
              {targets?.athletes_title || "Athlètes professionnels et amateurs"}
            </h2>
            <p className="text-slate-800 text-sm sm:text-base leading-relaxed text-justify">
              {targets?.athletes_desc}
            </p>
          </section>

          {/* Section 3 : Forces Spéciales */}
          <section className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f2851] tracking-tight">
              {targets?.forces_title || "Armée & Forces Spéciales"}
            </h2>
            <p className="text-slate-800 text-sm sm:text-base leading-relaxed text-justify">
              {targets?.forces_desc}
            </p>
          </section>

        </div>

      </div>
    </main>
  );
}