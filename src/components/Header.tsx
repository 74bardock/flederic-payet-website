"use client";

import Link from "next/link";
import React from "react";

export type Locale = "fr" | "en";

interface HeaderProps {
  lang: Locale;
  onLangChange: (lang: Locale) => void;
  dict: {
    vision: string;
    methode: string;
    investors: string;
    testimonials: string;
    dealroom: string;
  };
}

export default function Header({ lang, onLangChange, dict }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-bold text-xl text-brand-dark tracking-tight">
            MetaboSync <span className="text-brand-blue font-normal text-sm">HealthTech</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-700">
          <Link href="/" className="hover:text-brand-blue transition-colors">
            {dict?.vision || "La Vision"}
          </Link>
          <Link href="/methode-mmd" className="hover:text-brand-blue transition-colors">
            {dict?.methode || "La Méthode MMD™"}
          </Link>
          <Link href="/investisseurs" className="hover:text-brand-blue transition-colors">
            {dict?.investors || "Investisseurs"}
          </Link>
          <a href="#testimonials" className="hover:text-brand-blue transition-colors">
            {dict?.testimonials || "Témoignages"}
          </a>
        </nav>

        <div className="flex items-center gap-4">
          {/* Sélecteur de langue FR / EN */}
          <div className="flex bg-gray-100 p-1 rounded-lg border border-gray-200 text-xs font-bold">
            <button
              type="button"
              onClick={() => onLangChange("fr")}
              className={`px-2 py-1 rounded transition-all ${
                lang === "fr" ? "bg-brand-blue text-white shadow-sm" : "text-gray-600 hover:text-black"
              }`}
            >
              FR
            </button>
            <button
              type="button"
              onClick={() => onLangChange("en")}
              className={`px-2 py-1 rounded transition-all ${
                lang === "en" ? "bg-brand-blue text-white shadow-sm" : "text-gray-600 hover:text-black"
              }`}
            >
              EN
            </button>
          </div>

          <Link
            href="/investisseurs"
            className="px-4 py-2 text-sm font-bold text-white bg-brand-blue rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
          >
            {dict?.dealroom || "Accès Deal Room"}
          </Link>
        </div>
      </div>
    </header>
  );
}