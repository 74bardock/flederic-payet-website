'use client';

import React from 'react';

export default function TestimonialCard({
  testimonial,
  onOpenModal,
  labels,
}: {
  testimonial: any;
  onOpenModal?: (t: any) => void;
  labels?: any;
}) {
  if (!testimonial) return null;

  const isBeforeAfter =
    testimonial.gallery_type === 'before_after' ||
    Boolean(testimonial.before_image && testimonial.after_image);

  const isGallery =
    testimonial.gallery_type === 'gallery' &&
    Array.isArray(testimonial.images) &&
    testimonial.images.length > 0;

  return (
    <div className="bg-white/90 backdrop-blur-md border border-[#8ea0be] rounded-3xl p-6 shadow-xl flex flex-col justify-between hover:-translate-y-1 transition-all">
      <div className="space-y-4">
        
        {/* CAS 1 : Photos Avant / Après */}
        {isBeforeAfter ? (
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-1 text-center">
              <span className="text-xs font-bold text-slate-500 uppercase">
                {labels?.before || 'AVANT'}
              </span>
              <div className="relative h-36 w-full rounded-2xl overflow-hidden border border-slate-200">
                <img
                  src={testimonial.before_image}
                  alt={`${testimonial.name || 'Témoin'} - Avant`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-1 text-center">
              <span className="text-xs font-bold text-slate-500 uppercase">
                {labels?.after || 'APRÈS'}
              </span>
              <div className="relative h-36 w-full rounded-2xl overflow-hidden border border-slate-200">
                <img
                  src={testimonial.after_image}
                  alt={`${testimonial.name || 'Témoin'} - Après`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ) : isGallery ? (
          /* CAS 2 : Galerie de photos */
          <div className="grid grid-cols-2 gap-2">
            {testimonial.images?.slice(0, 2).map((imgUrl: string, index: number) => (
              <div
                key={index}
                className="relative h-36 w-full rounded-2xl overflow-hidden border border-slate-200"
              >
                <img
                  src={imgUrl}
                  alt={`${testimonial.name || 'Témoin'} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        ) : (
          /* CAS 3 : Une seule photo portrait */
          <div className="relative h-48 w-full rounded-2xl overflow-hidden border border-slate-200">
            <img
              src={testimonial.image}
              alt={testimonial.name || 'Témoin'}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Informations Profil */}
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-[#0f2851]">{testimonial.name}</h3>
            {testimonial.age && (
              <span className="text-xs font-semibold bg-[#0f2851]/10 text-[#0f2851] px-2.5 py-1 rounded-full">
                {testimonial.age} {labels?.yearsOld || 'ans'}
              </span>
            )}
          </div>
          <p className="text-xs text-slate-500 font-medium mt-0.5">{testimonial.role}</p>
        </div>

        {/* Citation courte */}
        <p className="text-sm text-slate-700 italic leading-relaxed border-l-2 border-[#0f2851]/30 pl-3">
          « {testimonial.short_quote} »
        </p>
      </div>

      {/* Bouton Fiche Complète */}
      <button
        onClick={() => onOpenModal && onOpenModal(testimonial)}
        className="mt-6 w-full py-3 bg-[#0f2851] hover:bg-[#1a386d] text-white rounded-2xl font-bold transition-all shadow-md text-xs sm:text-sm"
      >
        {labels?.viewRecord || 'Consulter la fiche complète →'}
      </button>
    </div>
  );
}