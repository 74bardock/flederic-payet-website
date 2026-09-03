"use client";

import { useState } from "react";
import Header from "@/components/Header";
import { Locale, getDictionary } from "@/lib/get-dictionary";

export default function Investisseurs() {
  const [lang, setLang] = useState<Locale>("fr");
  const dict = getDictionary(lang);
  const content = dict.investorsPage;

  return (
    <div className="min-h-screen bg-brand-bg text-gray-900">
      <Header lang={lang} onLangChange={setLang} dict={dict.nav} />

      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <span className="text-brand-red font-bold text-xs uppercase tracking-widest">{content.tag}</span>
          <h1 className="text-4xl font-extrabold text-brand-dark mt-2 mb-4">{content.title}</h1>
          <p className="text-lg text-gray-600">
            {content.subtitle}
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-md border border-gray-200">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{content.formFullName}</label>
                <input
                  type="text"
                  required
                  placeholder="Jean Dupont"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{content.formOrg}</label>
                <input
                  type="text"
                  required
                  placeholder="Venture Capital / Family Office"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{content.formEmail}</label>
                <input
                  type="email"
                  required
                  placeholder="j.dupont@fonds.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{content.formTicket}</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none bg-white">
                  <option>&lt; 1000k €</option>
                  <option>1000k € - 5000k €</option>
                  <option>&gt; 5000k €</option>
                </select>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-2">
              <input type="checkbox" required id="nda" className="mt-1 h-4 w-4 text-brand-blue rounded border-gray-300" />
              <label htmlFor="nda" className="text-xs text-gray-600">
                {content.formNda}
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-brand-red hover:bg-brand-redHover text-white font-bold py-4 rounded-lg shadow-lg transition-all"
            >
              {content.formSubmit}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}