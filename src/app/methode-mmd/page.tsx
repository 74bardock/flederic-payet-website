"use client";

import React, { useState } from "react";
import Header, { Locale } from "@/components/Header";
import Testimonials from "@/components/Testimonials";
import Link from "next/link";
import { getDictionary } from "@/lib/get-dictionary";

export default function MethodeMMD() {
  const [lang, setLang] = useState<Locale>("fr");
  const dict = getDictionary(lang);
  const content = dict.methodePage;

  if (!content) return null;

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg text-gray-900">
      <Header lang={lang} onLangChange={setLang} dict={dict.nav} />

      <main className="flex-1 max-w-4xl mx-auto px-4 py-16 w-full">
        <div className="text-center mb-12">
          <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">
            {content.tag}
          </span>
          <h1 className="text-4xl font-extrabold text-brand-dark mt-2 mb-4">
            {content.title}
          </h1>
          <p className="text-lg text-gray-600">
            {content.subtitle}
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-200 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-brand-blue mb-4">
              {content.sec1Title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {content.sec1Desc}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-blue mb-4">
              {content.sec2Title}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {content.sec2Desc}
            </p>
            <div className="bg-brand-bg p-4 rounded-lg border-l-4 border-brand-red text-sm text-gray-700">
              {content.sec2Highlight}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-blue mb-4">
              {content.sec3Title}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {content.sec3Desc}
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/investisseurs"
            className="inline-block bg-brand-red hover:bg-brand-redHover text-white font-semibold px-8 py-3.5 rounded-lg shadow-md transition-all"
          >
            {content.btnLicensing}
          </Link>
        </div>
      </main>

      <Testimonials dict={dict.testimonials} />

      <footer className="bg-brand-dark text-white py-8 text-center text-sm">
        <p>© {new Date().getFullYear()} MetaboSync HealthTech. {dict.footer.rights}</p>
        <p className="text-xs text-gray-400 mt-2">{dict.footer.confidential}</p>
      </footer>
    </div>
  );
}