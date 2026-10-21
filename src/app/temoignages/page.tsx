'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import TestimonialCard from '@/components/TestimonialCard';

import testimonialsFr from '@/data/data_fr.json';
import testimonialsEn from '@/data/data_en.json';
import testimonialsEl from '@/data/data_el.json';

type CategoryKey = 'sante' | 'convalescence' | 'perte_de_poids' | 'performance' | 'fatigue' | 'energie';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  age?: number;
  location?: string;
  category: CategoryKey;
  short_quote: string;
  image?: string;
  images?: string[];
  gallery_type?: 'before_after' | 'gallery';
  before_image?: string;
  after_image?: string;
  full_story: string[];
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
  
  // Sélection des données selon la langue active (fr, en, el)
  const testimonialsData: Testimonial[] = useMemo(() => {
    if (lang === 'en') return testimonialsEn as Testimonial[];
    if (lang === 'el') return testimonialsEl as Testimonial[];
    return testimonialsFr as Testimonial[];
  }, [lang]);

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
        item.role.toLowerCase().includes(query) ||
        item.short_quote.toLowerCase().includes(query) ||
        item.full_story.some((paragraph) => paragraph.toLowerCase().includes(query));

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
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0f2851] tracking-tight">
          {ui?.title || "Témoignages & Retours d'expérience"}
        </h1>
        <p className="text-lg sm:text-xl text-[#0f2851] font-medium max-w-2xl mx-auto">
          {ui?.subtitle || "Découvrez les résultats observés selon votre domaine d'intérêt."}
        </p>
      </section>

      {/* Recherche et filtres */}
      <div className="space-y-4 bg-white/90 backdrop-blur-md border border-[#8ea0be] rounded-3xl p-6 shadow-xl">
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={ui?.searchPlaceholder || "Rechercher par nom, mot-clé..."}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#8ea0be] rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0f2851] text-sm transition-colors"
          />
          <span className="absolute left-3.5 top-3 text-slate-400 text-sm">🔍</span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-2.5 text-xs text-slate-500 hover:text-black bg-slate-200 rounded-full w-5 h-5 flex items-center justify-center"
            >
              ✕
            </button>
          )}
        </div>

        {/* Boutons des catégories */}
        <div className="flex flex-wrap justify-center gap-2 pt-2">
          <button
            onClick={() => handleCategoryChange()}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              !selectedCategory
                ? 'bg-[#0f2851] text-white shadow-md'
                : 'bg-white border border-[#8ea0be] text-slate-700 hover:border-[#0f2851]'
            }`}
          >
            {ui?.allProfiles || "Tous les profils"} ({testimonialsData.length})
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
                    ? 'bg-[#0f2851] text-white shadow-md'
                    : 'bg-white border border-[#8ea0be] text-slate-700 hover:border-[#0f2851]'
                }`}
              >
                {getCategoryLabel(slug)} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Compteur de résultats */}
      <div className="flex items-center justify-between px-2 text-xs text-slate-600 font-medium">
        <span>
          {filteredTestimonials.length} {ui?.profilesFound || "profils correspondants"}
        </span>
        {selectedCategory && (
          <button
            onClick={() => handleCategoryChange()}
            className="text-[#0f2851] hover:underline"
          >
            {ui?.resetFilter || "Réinitialiser le filtre"}
          </button>
        )}
      </div>

      {/* Grille des témoins utilisant le composant TestimonialCard */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredTestimonials.length > 0 ? (
          filteredTestimonials.map((item) => (
            <div key={item.id} onClick={() => setActiveTestimonial(item)} className="cursor-pointer">
              <TestimonialCard
                testimonial={item}
                onOpenModal={(t) => setActiveTestimonial(t)}
                labels={{
                  before: ui?.before || 'AVANT',
                  after: ui?.after || 'APRÈS',
                  viewRecord: ui?.viewRecord || 'Consulter la fiche complète →',
                  yearsOld: ui?.yearsOld || 'ans',
                }}
              />
            </div>
          ))
        ) : (
          <div className="col-span-full bg-white/90 border border-[#8ea0be] rounded-3xl p-12 text-center space-y-3 shadow-xl">
            <span className="text-3xl block">🔍</span>
            <p className="text-slate-700 font-medium">
              {ui?.noResults || "Aucun témoignage ne correspond à votre recherche."}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                handleCategoryChange();
              }}
              className="text-xs text-[#0f2851] font-bold hover:underline pt-2"
            >
              {ui?.showAll || "Afficher tous les témoignages"}
            </button>
          </div>
        )}
      </section>

      {/* Modale détaillée du témoignage complet */}
      {activeTestimonial && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveTestimonial(null)}
        >
          <div
            className="bg-[#dbe5f3] border border-[#8ea0be] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative text-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveTestimonial(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-slate-800 flex items-center justify-center transition-colors text-sm font-bold shadow-sm"
            >
              ✕
            </button>

            <div className="border-b border-[#8ea0be] pb-4 space-y-1">
              <div className="flex items-center gap-3 flex-wrap">
                <h2 className="text-2xl font-bold text-[#0f2851]">
                  {activeTestimonial.name}
                </h2>
                {activeTestimonial.age && (
                  <span className="text-sm font-normal text-slate-600">
                    ({activeTestimonial.age} {ui?.yearsOld || 'ans'})
                  </span>
                )}
              </div>
              <p className="text-sm font-semibold text-slate-600">{activeTestimonial.role}</p>
              <span className="inline-block px-3 py-1 bg-[#0f2851] text-white rounded-full text-xs font-semibold mt-1">
                {getCategoryLabel(activeTestimonial.category)}
              </span>
            </div>

            {/* Affichage des images dans la modale */}
            {activeTestimonial.gallery_type === 'before_after' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-slate-600 block text-center uppercase">
                    {ui?.before || 'AVANT'}
                  </span>
                  <div className="relative h-60 rounded-xl overflow-hidden bg-white border border-[#8ea0be]">
                    <img
                      src={activeTestimonial.before_image}
                      alt={`${activeTestimonial.name} Avant`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-[#0f2851] block text-center uppercase">
                    {ui?.after || 'APRÈS'}
                  </span>
                  <div className="relative h-60 rounded-xl overflow-hidden bg-white border border-[#0f2851]">
                    <img
                      src={activeTestimonial.after_image}
                      alt={`${activeTestimonial.name} Après`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ) : activeTestimonial.gallery_type === 'gallery' && activeTestimonial.images ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeTestimonial.images.map((img, idx) => (
                  <div key={idx} className="relative h-60 rounded-xl overflow-hidden bg-white border border-[#8ea0be]">
                    <img
                      src={img}
                      alt={`${activeTestimonial.name} ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="relative h-72 rounded-xl overflow-hidden bg-white border border-[#8ea0be] max-w-sm mx-auto">
                <img
                  src={activeTestimonial.image}
                  alt={activeTestimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Histoire complète paragraphe par paragraphe */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#0f2851]">
                {ui?.detailedFeedback || "Témoignage détaillé"}
              </h3>
              <div className="space-y-3 text-slate-800 leading-relaxed bg-white/70 p-5 rounded-xl border border-[#8ea0be] text-sm sm:text-base">
                {activeTestimonial.full_story?.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function TemoignagesPage() {
  const { t } = useLanguage();
  return (
    <main className="py-12 px-4 sm:px-6 lg:px-8">
      <Suspense fallback={<div className="text-center text-slate-600">{t.TestimonialsUI?.loading || "Chargement..."}</div>}>
        <TestimonialsContent />
      </Suspense>
    </main>
  );
}