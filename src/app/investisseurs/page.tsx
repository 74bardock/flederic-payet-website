"use client";

import { useState } from "react";
import Header from "@/components/Header";
import fr from "@/dictionaries/fr.json";
import en from "@/dictionaries/en.json";

export default function InvestorsPage() {
  const [lang, setLang] = useState<"fr" | "en">("fr");
  const dict = lang === "fr" ? fr : en;
  const content = dict.investorsPage;

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-brand-bg text-gray-900">
      <Header lang={lang} onLangChange={setLang} dict={dict.nav} />

      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <span className="text-brand-red font-bold text-xs uppercase tracking-widest">
            {content.tag}
          </span>
          <h1 className="text-4xl font-extrabold text-brand-dark mt-2 mb-4">
            {content.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-brand-dark mb-2">
              {content.formTitle}
            </h2>
            <p className="text-gray-600 text-sm">{content.formSubtitle}</p>
          </div>

          {submitted ? (
            <div className="text-center py-8">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-xl font-bold text-brand-dark mb-2">
                {content.successTitle}
              </h3>
              <p className="text-gray-600">{content.successText}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {content.formFullName}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={content.formFullNamePlaceholder}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {content.formEmail}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder={content.formEmailPlaceholder}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {content.formOrg}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={content.formOrgPlaceholder}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {content.formRole}
                  </label>
                  <input
                    type="text"
                    placeholder={content.formRolePlaceholder}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {content.formMessage}
                </label>
                <textarea
                  rows={4}
                  placeholder={content.formMessagePlaceholder}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-red hover:bg-red-700 text-white font-bold py-4 rounded-xl shadow-lg transition duration-200"
              >
                {content.formSubmit}
              </button>
            </form>
          )}
        </div>
      </main>
    </div>
  );
}