"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header, { Locale } from "@/components/Header";
import Testimonials from "@/components/Testimonials";
import { getDictionary } from "@/lib/get-dictionary";

export default function HomePage() {
  const [lang, setLang] = useState<Locale>("fr");
  const dict = getDictionary(lang);

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header lang={lang} onLangChange={setLang} dict={dict.nav} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <span className="inline-block bg-brand-blue/10 text-brand-blue font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            {dict.hero.tag}
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-brand-dark tracking-tight mb-6 max-w-4xl mx-auto">
            {dict.hero.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            {dict.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/investisseurs"
              className="bg-brand-blue hover:bg-blue-700 text-white font-semibold px-6 py-3.5 rounded-lg shadow-md transition-all"
            >
              {dict.hero.cta_investors}
            </Link>
            <Link
              href="/methode-mmd"
              className="bg-white border border-gray-300 hover:border-brand-blue text-brand-dark font-semibold px-6 py-3.5 rounded-lg transition-all"
            >
              {dict.hero.cta_methode}
            </Link>
          </div>
        </section>

        {/* Section Fondateur */}
        <section className="py-16 bg-gray-50 border-y border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">
              {dict.founder.tag}
            </span>
            <h2 className="text-3xl font-bold text-brand-dark mt-2 mb-2">
              {dict.founder.title}
            </h2>
            <p className="text-sm font-medium text-brand-blue mb-8">
              {dict.founder.subtitle}
            </p>
            <div className="space-y-4 text-gray-700 max-w-3xl mx-auto text-left leading-relaxed">
              <p>{dict.founder.bio_1}</p>
              <p>{dict.founder.bio_2}</p>
            </div>
          </div>
        </section>

        {/* Section Piliers */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">
              {dict.pillars.tag}
            </span>
            <h2 className="text-3xl font-extrabold text-brand-dark mt-2">
              {dict.pillars.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-brand-blue mb-3">{dict.pillars.p1_title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{dict.pillars.p1_desc}</p>
            </div>
            <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-brand-blue mb-3">{dict.pillars.p2_title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{dict.pillars.p2_desc}</p>
            </div>
            <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-brand-blue mb-3">{dict.pillars.p3_title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{dict.pillars.p3_desc}</p>
            </div>
          </div>
        </section>

        {/* Section Témoignages */}
        <Testimonials dict={dict.testimonials} />
      </main>

      <footer className="bg-brand-dark text-white py-8 text-center text-sm">
        <p>© {new Date().getFullYear()} MetaboSync HealthTech. {dict.footer.rights}</p>
        <p className="text-xs text-gray-400 mt-2">{dict.footer.confidential}</p>
      </footer>
    </div>
  );
}