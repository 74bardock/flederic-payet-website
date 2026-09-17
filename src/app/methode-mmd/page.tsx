'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import AvatarBicyclette from '@/components/AvatarBicyclette';

export default function MethodeMMDPage() {
  const { lang, t } = useLanguage();
  const method = t.Method;
  const testimonials = t.TestimonialsUI;
  
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* En-tête */}
        <section className="text-center space-y-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-blue-400 tracking-tight">
            {method.page_title}
          </h1>
          <p className="text-xl text-slate-300 font-medium">
            {method.subtitle}
          </p>
          <div className="p-6 bg-slate-900/80 border border-slate-800 rounded-2xl shadow-xl max-w-3xl mx-auto mt-6">
            <p className="text-lg text-slate-200 italic leading-relaxed">
              « {method.definition} »
            </p>
          </div>
        </section>

        {/* Biographie du fondateur */}
        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-32 h-32 rounded-full bg-slate-800 border-2 border-blue-500 overflow-hidden flex-shrink-0 flex items-center justify-center text-slate-400">
              <span className="text-sm">Coach Avatar</span>
            </div>
            <div className="space-y-3 text-center md:text-left">
              <h2 className="text-2xl font-bold text-white">
                {method.biography?.title || "Biographie du fondateur"} — {method.biography?.name || "Flédéric Payet"}
              </h2>
              <p className="text-slate-300 leading-relaxed">
                {method.biography?.p1 || t.Hero.bio}
              </p>
              {method.biography?.p2 && (
                <p className="text-slate-300 leading-relaxed">{method.biography.p2}</p>
              )}
              {method.biography?.p3 && (
                <p className="text-slate-300 leading-relaxed">{method.biography.p3}</p>
              )}
            </div>
          </div>
        </section>

        {/* L'Analogie de la Bicyclette */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950/40 border border-blue-900/50 rounded-2xl p-6 sm:p-8 space-y-8 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-600/20 text-blue-400 rounded-xl">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                {method.analogy?.title || (lang === 'en' ? 'The Bicycle Analogy' : 'L\'Analogie de la Bicyclette')}
              </h2>
              <p className="text-blue-400 text-sm">
                {method.analogy?.why || (lang === 'en' ? 'Understanding metabolic effort' : 'Comprendre l\'effort métabolique')}
              </p>
            </div>
          </div>

          <AvatarBicyclette />

          {/* Tableau d'équivalence visuel */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="p-5 bg-slate-950/80 border border-slate-800 rounded-xl space-y-2">
              <div className="text-3xl">⛓️</div>
              <h3 className="font-semibold text-blue-400">
                {lang === 'en' ? 'The Chain' : 'La Chaîne'}
              </h3>
              <p className="text-slate-300 text-sm">
                {method.analogy?.chain || (lang === 'en' ? 'Represents blood flow' : 'Représente le flux sanguin')}
              </p>
            </div>
            <div className="p-5 bg-slate-950/80 border border-slate-800 rounded-xl space-y-2">
              <div className="text-3xl">⚙️</div>
              <h3 className="font-semibold text-blue-400">
                {lang === 'en' ? 'The Chainring' : 'Le Plateau'}
              </h3>
              <p className="text-slate-300 text-sm">
                {method.analogy?.chainring || (lang === 'en' ? 'Represents cardiac resistance' : 'Représente la résistance cardiaque')}
              </p>
            </div>
            <div className="p-5 bg-slate-950/80 border border-slate-800 rounded-xl space-y-2">
              <div className="text-3xl">🚴</div>
              <h3 className="font-semibold text-blue-400">
                {lang === 'en' ? 'The Sprockets' : 'Les Pignons'}
              </h3>
              <p className="text-slate-300 text-sm">
                {method.analogy?.cogs || (lang === 'en' ? 'Represent heart rate & pulsation' : 'Représentent la fréquence cardiaque')}
              </p>
            </div>
          </div>

          {method.analogy?.conclusion && (
            <p className="text-slate-300 leading-relaxed text-center font-medium bg-blue-950/30 p-4 rounded-xl border border-blue-900/30">
              {method.analogy.conclusion}
            </p>
          )}
        </section>

        {/* Équipements */}
        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-2xl font-bold text-white">
            {method.equipment_title}
          </h2>
          <p className="text-slate-300 leading-relaxed">
            {method.equipment_desc}
          </p>
        </section>

        {/* Appel à l'action */}
        <section className="text-center bg-gradient-to-r from-blue-900/40 to-slate-900 border border-blue-800/50 rounded-2xl p-8 space-y-6">
          <p className="text-lg text-slate-200 max-w-2xl mx-auto">
            {method.cta}
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl shadow-lg transition-all"
          >
            {method.cta_button}
          </Link>
        </section>

        {/* Catégories de témoignages */}
        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
          <h2 className="text-2xl font-bold text-white text-center">
            {testimonials.title}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {Object.entries(testimonials.categories).map(([slug, label]) => (
              <Link
                key={slug}
                href={`/temoignages?category=${slug}`}
                className="p-3 bg-slate-950 border border-slate-800 hover:border-blue-500 text-slate-200 hover:text-blue-400 text-center rounded-xl font-medium text-sm transition-all"
              >
                {label} →
              </Link>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}