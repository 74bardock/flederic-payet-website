// src/components/Header.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const nav = t.Header;
  const methodNav = t.Header?.method_submenu;
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const subMenuItems = [
    { href: '/methode-SM/qecqs', label: methodNav?.what_is_sm || "Qu'est-ce que SM ?" },
    { href: '/methode-SM/pec', label: methodNav?.who_is_concerned || "Qui est concerné ?" },
    { href: '/methode-SM/qcsmndf', label: methodNav?.what_sm_does_not_do || "Ce que SM ne fait pas" },
    { href: '/methode-SM/em', label: methodNav?.metabolic_effort || "Effort Métabolique" },
    { href: '/methode-SM/eeb', label: methodNav?.equipment_used || "Équipements & Bénéficiaires" },
  ];

  return (
    <header className="border-b border-slate-200 bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center gap-3">
        <Link href="/" className="flex items-center gap-2 shrink-0 min-w-0" onClick={() => setMenuOpen(false)}>
          <img
            src="/logo.png"
            alt="MetaboSync Icône"
            className="h-12 w-auto"
          />
          <img
            src="/logo_metabo.png"
            alt="MetaboSync HealthTech"
            className="h-9 w-auto max-w-[160px] object-contain"
          />
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex flex-1 items-center justify-end gap-4 lg:gap-5 text-sm font-medium text-slate-700 whitespace-nowrap">
          <Link href="/a-propos" className="hover:text-blue-600 transition-colors">
            {nav.nav_about}
          </Link>

          {/* Menu déroulant La Méthode SM */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              onMouseEnter={() => setDropdownOpen(true)}
              className="flex items-center gap-1 hover:text-blue-600 transition-colors py-2 focus:outline-none"
            >
              <Link href="/methode-SM">{nav.nav_method}</Link>
              <svg className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {dropdownOpen && (
              <div 
                className="absolute left-0 mt-1 w-64 bg-white border border-slate-200 rounded-xl shadow-lg py-2 z-50 text-xs"
                onMouseLeave={() => setDropdownOpen(false)}
              >
                {subMenuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2.5 hover:bg-slate-50 hover:text-blue-600 transition-colors text-slate-700 font-semibold"
                    onClick={() => setDropdownOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/temoignages" className="hover:text-blue-600 transition-colors">
            {nav.nav_testimonials}
          </Link>

          <Link href="/contact" className="hover:text-blue-600 transition-colors">
            {nav.nav_contact}
          </Link>
        </nav>

        {/* Sélecteur de langue */}
        <div className="ml-auto md:ml-0 flex items-center gap-2 shrink-0">
          <div className="flex items-center space-x-1 text-xs font-semibold">
            <button
              onClick={() => setLang('fr')}
              className={`px-2 py-1 rounded transition-colors ${
                lang === 'fr' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              FR
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-2 py-1 rounded transition-colors ${
                lang === 'en' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('el')}
              className={`px-2 py-1 rounded transition-colors ${
                lang === 'el' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              EL
            </button>
          </div>

          {/* Bouton Hamburger Mobile */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:bg-slate-100"
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Navigation Mobile */}
      {menuOpen && (
        <nav className="md:hidden border-t border-slate-200 bg-white px-4 py-3 flex flex-col gap-3 text-sm font-medium text-slate-700">
          <Link href="/a-propos" className="py-1 hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>
            {nav.nav_about}
          </Link>
          
          <div className="flex flex-col gap-1">
            <Link href="/methode-SM" className="font-bold text-blue-600 py-1" onClick={() => setMenuOpen(false)}>
              {nav.nav_method}
            </Link>
            <div className="pl-4 flex flex-col gap-2 text-xs text-slate-600 border-l-2 border-slate-200 my-1">
              {subMenuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-blue-600 transition-colors py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/temoignages" className="py-1 hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>
            {nav.nav_testimonials}
          </Link>
          
          <Link href="/contact" className="py-1 hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>
            {nav.nav_contact}
          </Link>
        </nav>
      )}
    </header>
  );
}