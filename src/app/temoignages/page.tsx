'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

import testimonialsFr from '@/data/data_fr.json';
import testimonialsEn from '@/data/data_en.json';

type CategoryKey = 'sante' | 'convalescence' | 'perte_de_poids' | 'performance' | 'fatigue' | 'energie';

interface DocumentRef {
  title: string;
  fileUrl: string;
  type: string;
}

interface Testimonial {
  id: string;
  name: string;
  age: number;
  location: string;
  category: CategoryKey;
  shortText: string;
  fullText: string;
  photoBeforeUrl: string;
  photoAfterUrl: string;
  documents?: DocumentRef[];
}

const CATEGORIES: CategoryKey[] = [
  'sante',
  'convalescence',
  'perte_de_poids',
  'performance',
  'fatigue',
  'energie'
];

function TestimonialsContent() {
  const { lang, t } = useLanguage();
  const searchParams = useSearchParams();
  const router = useRouter();

  const ui = t.TestimonialsUI;
  const testimonialsData: Testimonial[] = lang === 'en' ? (testimonialsEn as Testimonial[]) : (testimonialsFr as Testimonial[]);

  const selectedCategory = searchParams.get('category') as CategoryKey | null;
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTestimonial, setActiveTestimonial] = useState<Testimonial | null>(null);

  const filteredTestimonials = useMemo(() => {
    return testimonialsData.filter((item) => {
      const matchCategory = !selectedCategory || item.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.location.toLowerCase().includes(query) ||
        item.shortText.toLowerCase().includes(query) ||
        item.fullText.toLowerCase().includes(query);

      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery, testimonialsData]);

  const handleCategoryChange = (slug?: string) => {
    if (slug) {
      router.push(`/temoignages?category=${slug}`, { scroll: false });
    } else {
      router.push('/temoignages', { scroll: false });
    }
  };

  const getCategoryLabel = (categoryKey: string) => {
    return ui?.categories?.[categoryKey as keyof typeof ui.categories] || categoryKey;
  };

  return (
    <div className="max-w-6xl mx-auto space-y-10">
      
      {/* En-tête */}
      <section className="text-center space-y-4">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-blue-400 tracking-tight">
          {ui?.title}
        </h1>
        <p className="text-lg sm:text-xl text-slate-300 font-medium max-w-2xl mx-auto">
          {ui?.subtitle}
        </p>
      </section>

      {/* Recherche et filtres par catégories */}
      <div className="space-y-4 bg-slate-900/80 border border-slate-800 p-4 sm:p-6 rounded-2xl shadow-xl">
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={ui?.searchPlaceholder}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm transition-colors"
          />
          <span className="absolute left-3.5 top-3 text-slate-500 text-sm">🔍</span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-white bg-slate-800 rounded-full w-5 h-5 flex items-center justify-center"
            >
              ✕
            </button>
          )}
        </div>

        {/* Boutons des 6 catégories dynamiques */}
        <div className="flex flex-wrap justify-center gap-2 pt-2">
          <button
            onClick={() => handleCategoryChange()}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              !selectedCategory
                ? 'bg-blue-600 text-white shadow-lg scale-105'
                : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
            }`}
          >
            {ui?.allProfiles} ({testimonialsData.length})
          </button>

          {CATEGORIES.map((slug) => {
            const count = testimonialsData.filter((i) => i.category === slug).length;
            const isSelected = selectedCategory === slug;
            return (
              <button
                key={slug}
                onClick={() => handleCategoryChange(slug)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                {getCategoryLabel(slug)} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Compteur de résultats */}
      <div className="flex items-center justify-between px-2 text-xs text-slate-400">
        <span>
          {filteredTestimonials.length} {ui?.profilesFound}
        </span>
        {selectedCategory && (
          <button
            onClick={() => handleCategoryChange()}
            className="text-blue-400 hover:underline"
          >
            {ui?.resetFilter}
          </button>
        )}
      </div>

      {/* Grille des témoins */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredTestimonials.length > 0 ? (
          filteredTestimonials.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveTestimonial(item)}
              className="bg-slate-900 border border-slate-800 hover:border-blue-500/60 p-5 sm:p-6 rounded-2xl cursor-pointer transition-all duration-300 space-y-4 shadow-lg hover:shadow-2xl hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {item.age} {ui?.yearsOld} — {item.location}
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-blue-950 text-blue-400 border border-blue-800/50 rounded-full text-[11px] font-semibold">
                    {getCategoryLabel(item.category)}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 block text-center">
                      {ui?.before}
                    </span>
                    <div className="relative h-36 rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
                      <Image
                        src={item.photoBeforeUrl}
                        alt={`${item.name} ${ui?.before}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-blue-400 block text-center">
                      {ui?.after}
                    </span>
                    <div className="relative h-36 rounded-xl overflow-hidden bg-slate-950 border border-blue-900/50">
                      <Image
                        src={item.photoAfterUrl}
                        alt={`${item.name} ${ui?.after}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed italic bg-slate-950/50 p-3 rounded-xl border border-slate-800/60">
                  « {item.shortText} »
                </p>
              </div>

              <div className="text-right pt-2 border-t border-slate-800/40">
                <span className="text-xs font-semibold text-blue-400 group-hover:underline inline-flex items-center gap-1">
                  {ui?.viewRecord}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full bg-slate-900 border border-slate-800 rounded-2xl p-12 text-center space-y-3">
            <span className="text-3xl block">🔍</span>
            <p className="text-slate-300 font-medium">
              {ui?.noResults}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                handleCategoryChange();
              }}
              className="text-xs text-blue-400 hover:underline pt-2"
            >
              {ui?.showAll}
            </button>
          </div>
        )}
      </section>

      {/* Modale détaillée / Dossier témoin */}
      {activeTestimonial && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setActiveTestimonial(null)}
        >
          <div
            className="bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveTestimonial(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors text-sm font-bold"
            >
              ✕
            </button>

            <div className="border-b border-slate-800 pb-4 space-y-1">
              <div className="flex items-center gap-3 flex-wrap">
                <h2 className="text-2xl font-bold text-white">
                  {activeTestimonial.name}
                </h2>
                <span className="text-sm font-normal text-slate-400">
                  ({activeTestimonial.age} {ui?.yearsOld}, {activeTestimonial.location})
                </span>
              </div>
              <span className="inline-block px-3 py-1 bg-blue-950 text-blue-400 border border-blue-800/50 rounded-full text-xs font-semibold">
                {getCategoryLabel(activeTestimonial.category)}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <span className="text-xs font-semibold text-slate-400 block text-center">
                  {ui?.before}
                </span>
                <div className="relative h-60 rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
                  <Image
                    src={activeTestimonial.photoBeforeUrl}
                    alt={`${activeTestimonial.name} ${ui?.before}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <span className="text-xs font-semibold text-blue-400 block text-center">
                  {ui?.after}
                </span>
                <div className="relative h-60 rounded-xl overflow-hidden bg-slate-950 border border-blue-900/50">
                  <Image
                    src={activeTestimonial.photoAfterUrl}
                    alt={`${activeTestimonial.name} ${ui?.after}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                {ui?.detailedFeedback}
              </h3>
              <p className="text-slate-200 leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800 text-sm sm:text-base">
                {activeTestimonial.fullText}
              </p>
            </div>

            {activeTestimonial.documents && activeTestimonial.documents.length > 0 && (
              <div className="space-y-3 pt-2">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {ui?.documentation}
                </h3>
                <div className="space-y-2">
                  {activeTestimonial.documents.map((doc, idx) => (
                    <a
                      key={idx}
                      href={doc.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3.5 bg-slate-950 hover:bg-slate-800/80 border border-slate-800 hover:border-blue-500 rounded-xl transition-all group"
                    >
                      <span className="text-sm text-slate-200 font-medium group-hover:text-blue-400 transition-colors">
                        📄 {doc.title}
                      </span>
                      <span className="text-[10px] bg-blue-950 text-blue-400 px-2.5 py-1 rounded-md font-mono border border-blue-800/40">
                        {doc.type} ↗
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function TemoignagesPage() {
  const { t } = useLanguage();
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <Suspense fallback={<div className="text-center text-slate-400">{t.TestimonialsUI?.loading}</div>}>
        <TestimonialsContent />
      </Suspense>
    </main>
  );
}