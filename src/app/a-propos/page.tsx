'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function AProposPage() {
  const { t } = useLanguage();
  const bio = t.Method?.biography;

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#dbe5f3] via-[#d5e2f1] to-[#c8d8ec] text-slate-900 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-start pt-6 relative">
        
        {/* Colonne Gauche : Cadre photo ajusté + Titre dynamique sous la photo */}
        <div className="md:col-span-5 relative flex flex-col items-start space-y-6">
          <div className="absolute -top-10 -right-4 w-28 h-28 opacity-80 pointer-events-none hidden md:block">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <pattern id="stripedPattern" width="6" height="100" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="3" height="100" fill="#2b427b" />
                  <rect x="3" y="0" width="3" height="100" fill="transparent" />
                </pattern>
              </defs>
              <circle cx="50" cy="50" r="48" fill="url(#stripedPattern)" />
            </svg>
          </div>

          
          {/* Cadre entourant strictement la photo sans déformation ni bords vides */}
          <div className="inline-block rounded-[2rem] overflow-hidden border-[3px] border-[#8ea0be] bg-[#eef3f9] shadow-md max-w-[310px]">
            <img
              src="/flederic-payet-portrait.jpg"
              alt={bio?.name || "Flédéric Payet"}
              className="w-full h-auto block object-contain"
            />
          </div>

          {/* Titre dynamique depuis le dictionnaire (FR, EN, EL) sur deux lignes */}
          <div className="space-y-1">
            <h1 className="text-4xl sm:text-5xl font-black text-[#0f2851] tracking-tight leading-tight">
              {bio?.title_line1 || "Biographie"}
            </h1>
            <h1 className="text-4xl sm:text-5xl font-black text-[#0f2851] tracking-tight leading-tight">
              {bio?.title_line2 || "du fondateur"}
            </h1>
          </div>

        </div>

        {/* Colonne Droite : Texte biographique justifié + Chevrons */}
        <div className="md:col-span-7 flex flex-col justify-between space-y-6 pt-2 min-h-[480px]">
          
          <div className="space-y-5 text-[#1e293b] font-normal leading-relaxed text-base sm:text-[18px] text-justify">
            <p>{bio?.p1}</p>
            {bio?.p2 && <p>{bio.p2}</p>}
            {bio?.p3 && <p>{bio.p3}</p>}
          </div>

          {/* Chevrons décoratifs >>>>> */}
          <div className="flex justify-end pt-6 text-[#0f2851] text-4xl sm:text-5xl font-black tracking-tighter">
            <span>&gt;&gt;&gt;&gt;&gt;</span>
          </div>

        </div>

      </div>
    </main>
  );
}