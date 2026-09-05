"use client";

import { useState } from "react";
import fr from "@/dictionaries/fr.json";
import en from "@/dictionaries/en.json";
import MetaboSyncLogo from "@/components/MetaboSyncLogo";

export default function ContactPage() {
  const [lang, setLang] = useState<"fr" | "en">("fr");
  const t = lang === "fr" ? fr : en;

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
      {/* Navigation */}
      <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50 px-6 py-3 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <a href="/" className="hover:opacity-90 transition-opacity">
            <MetaboSyncLogo className="h-10 w-auto" />
          </a>
          <div className="text-xs font-bold tracking-wider text-slate-400 border-l border-slate-800 pl-4 hidden lg:block">
            FLÉDERIC PAYET
          </div>
        </div>

        <div className="hidden md:flex gap-8 text-sm text-slate-300 font-medium">
          <a href="/#method" className="hover:text-blue-400 transition-colors">
            {t.nav.method}
          </a>
          <a href="/#proofs" className="hover:text-blue-400 transition-colors">
            {t.nav.proofs}
          </a>
          <a href="/#science" className="hover:text-blue-400 transition-colors">
            {t.nav.science}
          </a>
        </div>

        <div className="flex items-center gap-4">
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
            href="/"
            className="border border-slate-700 hover:border-slate-500 bg-slate-900/50 text-slate-200 text-xs font-semibold px-4 py-2 rounded-lg transition-all"
          >
            {t.nav.home}
          </a>
        </div>
      </nav>

      {/* Hero Contact */}
      <section className="pt-16 pb-12 px-6 max-w-4xl mx-auto text-center">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 text-xs font-bold tracking-widest uppercase">
          {t.contact.badge}
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
          {t.contact.title}
        </h1>
        <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto">
          {t.contact.subtitle}
        </p>
      </section>

      {/* Main Content Form / Info */}
      <section className="pb-24 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-white mb-2">Flédéric Payet</h3>
              <p className="text-xs text-blue-400 font-semibold mb-4">
                {t.contact.info.role}
              </p>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                {t.contact.info.bio}
              </p>

              <div className="space-y-4 pt-4 border-t border-slate-800/80 text-xs">
                <div className="flex items-center gap-3 text-slate-300">
                  <span className="p-2 rounded-lg bg-blue-950 border border-blue-800/40 text-blue-400 font-mono">
                    ✉
                  </span>
                  <div>
                    <div className="text-slate-500 text-[10px] uppercase font-bold">
                      {t.contact.info.emailLabel}
                    </div>
                    <a
                      href="mailto:contact@fledericpayet.com"
                      className="hover:text-blue-400 font-medium transition-colors"
                    >
                      contact@fledericpayet.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <span className="p-2 rounded-lg bg-blue-950 border border-blue-800/40 text-blue-400 font-mono">
                    📍
                  </span>
                  <div>
                    <div className="text-slate-500 text-[10px] uppercase font-bold">
                      {t.contact.info.locationLabel}
                    </div>
                    <div className="font-medium">{t.contact.info.locationValue}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-blue-950/20 border border-blue-900/40 rounded-2xl">
              <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">
                {t.contact.info.responseTimeTitle}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {t.contact.info.responseTimeText}
              </p>
            </div>
          </div>

          <div className="md:col-span-3 bg-slate-900/80 border border-slate-800 p-8 rounded-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-blue-600/20 text-blue-400 border border-blue-500/40 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {t.contact.form.successTitle}
                </h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  {t.contact.form.successText}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="mt-6 text-xs text-blue-400 hover:text-blue-300 underline font-medium"
                >
                  {t.contact.form.resetButton}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-slate-300 uppercase mb-2">
                    {t.contact.form.nameLabel}
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t.contact.form.namePlaceholder}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-300 uppercase mb-2">
                    {t.contact.form.emailLabel}
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t.contact.form.emailPlaceholder}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-bold text-slate-300 uppercase mb-2">
                    {t.contact.form.subjectLabel}
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder={t.contact.form.subjectPlaceholder}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-300 uppercase mb-2">
                    {t.contact.form.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.contact.form.messagePlaceholder}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/25 transition-all text-sm"
                >
                  {t.contact.form.submitButton}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-900 py-8 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} Flédéric Payet — MetaboSync.
      </footer>
    </div>
  );
}