'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const VIDEO_SRC = encodeURI('/vidéos/parle.mp4');

export default function AvatarBicyclette() {
  const { lang } = useLanguage();
  const isEn = lang === 'en';

  return (
    <div className="relative my-8 p-6 bg-white/70 border border-[#8ea0be] rounded-2xl shadow-md overflow-hidden">
      
      <div className="flex flex-col md:flex-row items-center gap-6">
        
        <div className="relative flex-shrink-0 w-full md:w-1/2">
          <video
            src={VIDEO_SRC}
            controls
            className="w-full rounded-xl border border-[#8ea0be] shadow-sm"
          />
        </div>

        {/* Bulle de dialogue explicative */}
        <div className="relative flex-1 bg-white/80 border border-[#8ea0be] p-5 rounded-2xl space-y-3">
          <div className="flex items-center justify-between border-b border-[#8ea0be]/30 pb-2">
            <span className="text-sm font-bold text-[#0f2851]">
              {isEn ? 'Flédéric Payet (SM Coach)' : 'Flédéric Payet (Coach SM)'}
            </span>
            <span className="text-xs text-slate-500">
              {isEn ? 'Interactive video explanation' : 'Explication vidéo interactive'}
            </span>
          </div>

          <p className="text-slate-800 text-sm md:text-base italic leading-relaxed">
            {isEn
              ? '“Imagine your body is a bicycle and that, for it to function properly, it requires regular maintenance...”'
              : '« Imaginez que votre corps est une bicyclette et que, pour son bon fonctionnement, il faut un entretien régulier... »'
            }
          </p>
        </div>

      </div>
    </div>
  );
}