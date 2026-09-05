"use client";

import { useState } from "react";
import fr from "@/dictionaries/fr.json";
import en from "@/dictionaries/en.json";
import MetaboSyncLogo from "@/components/MetaboSyncLogo";

export default function Page() {
  const [lang, setLang] = useState<"fr" | "en">("fr");
  const dict = lang === "fr" ? fr : en;
  const t = dict || fr;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
      {/* Navigation */}
      <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50 px-6 py-3 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <MetaboSyncLogo className="h-10 w-auto" />
          <div className="text-xs font-bold tracking-wider text-slate-400 border-l border-slate-800 pl-4 hidden lg:block">
            FLÉDERIC PAYET
          </div>
        </div>

        <div className="hidden md:flex gap-8 text-sm text-slate-300 font-medium">
          <a href="#method" className="hover:text-blue-400 transition-colors">{t.nav?.method}</a>
          <a href="#proofs" className="hover:text-blue-400 transition-colors">{t.nav?.proofs}</a>
          <a href="#science" className="hover:text-blue-400 transition-colors">{t.nav?.science}</a>
        </div>

        <div className="flex items-center gap-4">
          {/* Sélecteur de langue */}
          <div className="flex items-center bg-slate-900 border border-slate-700 rounded-lg p-1">
            <button
              type="button"
              onClick={() => setLang("fr")}
              className={`px-2.5 py-1 text-xs font-semibold rounded transition-all ${
                lang === "fr"
                  ? "bg-blue-600 text-white shadow"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              FR 🇫🇷
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`px-2.5 py-1 text-xs font-semibold rounded transition-all ${
                lang === "en"
                  ? "bg-blue-600 text-white shadow"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              EN 🇺🇸
            </button>
          </div>

          <a
            href="/contact"
            className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded-lg transition-all shadow-lg shadow-blue-600/20"
          >
            {t.nav?.contact}
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 px-6 max-w-6xl mx-auto text-center">
        {/* Grand logo dans le Hero */}
        <div className="flex justify-center mb-8">
          <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-2xl backdrop-blur-sm shadow-2xl">
            <MetaboSyncLogo className="h-20 md:h-24 w-auto" />
          </div>
        </div>

        <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 text-xs font-bold tracking-widest uppercase">
          {t.hero?.badge}
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-tight mb-6">
          {t.hero?.titleLine1} <br />
          <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-400 bg-clip-text text-transparent">
            {t.hero?.titleLine2}
          </span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-300 leading-relaxed mb-10">
          {t.hero?.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#science"
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl shadow-xl shadow-blue-600/25 transition-all text-base"
          >
            {t.hero?.ctaPrimary}
          </a>
          <a
            href="#proofs"
            className="border border-slate-700 hover:border-slate-500 bg-slate-900/50 text-slate-200 font-semibold px-8 py-4 rounded-xl transition-all text-base"
          >
            {t.hero?.ctaSecondary}
          </a>
        </div>
      </section>

      {/* Section Contraste */}
      <section id="method" className="py-20 px-6 bg-slate-900/50 border-y border-slate-800/60">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-14 text-white">
            {t.contrast?.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-slate-950 border border-red-950/40 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-red-500/60"></div>
              <h3 className="text-xl font-bold text-red-400 mb-6">{t.contrast?.tradTitle}</h3>
              <ul className="space-y-4 text-slate-300 text-sm">
                <li className="flex items-start gap-3"><span className="text-red-500 font-bold">✕</span><span>{t.contrast?.tradPoint1}</span></li>
                <li className="flex items-start gap-3"><span className="text-red-500 font-bold">✕</span><span>{t.contrast?.tradPoint2}</span></li>
                <li className="flex items-start gap-3"><span className="text-red-500 font-bold">✕</span><span>{t.contrast?.tradPoint3}</span></li>
                <li className="flex items-start gap-3"><span className="text-red-500 font-bold">✕</span><span>{t.contrast?.tradPoint4}</span></li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-slate-950 border border-blue-500/40 relative overflow-hidden shadow-2xl shadow-blue-900/10">
              <div className="absolute top-0 left-0 w-2 h-full bg-blue-500"></div>
              <h3 className="text-xl font-bold text-blue-400 mb-6">{t.contrast?.fledericTitle}</h3>
              <ul className="space-y-4 text-slate-200 text-sm">
                <li className="flex items-start gap-3"><span className="text-blue-400 font-bold">✓</span><span>{t.contrast?.fledericPoint1}</span></li>
                <li className="flex items-start gap-3"><span className="text-blue-400 font-bold">✓</span><span>{t.contrast?.fledericPoint2}</span></li>
                <li className="flex items-start gap-3"><span className="text-blue-400 font-bold">✓</span><span>{t.contrast?.fledericPoint3}</span></li>
                <li className="flex items-start gap-3"><span className="text-blue-400 font-bold">✓</span><span>{t.contrast?.fledericPoint4}</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section id="proofs" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-3">
            {t.stories?.badge}
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            {t.stories?.title}
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 text-base">
            {t.stories?.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <span className="text-xs font-extrabold px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400">
                {t.stories?.card1?.tag}
              </span>
              <p className="mt-6 text-slate-300 italic leading-relaxed text-base">
                {t.stories?.card1?.text}
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-800">
              <h4 className="font-bold text-white text-lg">{t.stories?.card1?.name}</h4>
              <p className="text-sm text-slate-400">{t.stories?.card1?.role}</p>
            </div>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <span className="text-xs font-extrabold px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                {t.stories?.card2?.tag}
              </span>
              <p className="mt-6 text-slate-300 italic leading-relaxed text-base">
                {t.stories?.card2?.text}
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-800">
              <h4 className="font-bold text-white text-lg">{t.stories?.card2?.name}</h4>
              <p className="text-sm text-slate-400">{t.stories?.card2?.role}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Science */}
      <section id="science" className="py-20 px-6 bg-slate-900/40 border-t border-slate-800">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-3">
              {t.science?.badge}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t.science?.title}
            </h2>
            <p className="max-w-2xl mx-auto text-slate-400 text-sm leading-relaxed">
              {t.science?.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
              <h3 className="font-bold text-blue-400 text-lg mb-3">{t.science?.step1Title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{t.science?.step1Text}</p>
            </div>
            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
              <h3 className="font-bold text-blue-400 text-lg mb-3">{t.science?.step2Title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{t.science?.step2Text}</p>
            </div>
            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
              <h3 className="font-bold text-blue-400 text-lg mb-3">{t.science?.step3Title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{t.science?.step3Text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
          {t.ctaBottom?.title}
        </h2>
        <p className="text-slate-400 text-base mb-10 max-w-2xl mx-auto">
          {t.ctaBottom?.subtitle}
        </p>
        <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-lg px-10 py-5 rounded-2xl shadow-2xl shadow-blue-600/30 transition-all transform hover:-translate-y-0.5"
        >
          {t.ctaBottom?.button}
        </a>
      </section>

      <footer className="border-t border-slate-900 py-8 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} Flédéric Payet — MetaboSync / FRHRP Protocol.
      </footer>
    </div>
  );
}