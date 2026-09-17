'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function AvatarBicyclette() {
  const { lang } = useLanguage();
  const isEn = lang === 'en';

  const [isPlaying, setIsPlaying] = useState(false);
  const [mouthFrame, setMouthFrame] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setMouthFrame((prev) => (prev + 1) % 4);
      }, 140);
    } else {
      setMouthFrame(0);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        alert(isEn 
          ? "Audio file missing at: public/audio/explication-bicyclette-en.mp3" 
          : "Fichier audio introuvable sous : public/audio/explication-bicyclette.mp3");
      });
    }
  };

  return (
    <div className="relative my-8 p-6 bg-slate-900/90 border border-blue-900/40 rounded-2xl shadow-2xl overflow-hidden">
      <audio
        ref={audioRef}
        src={isEn ? "/audio/explication-bicyclette-en.mp3" : "/audio/explication-bicyclette.mp3"}
        onEnded={() => setIsPlaying(false)}
        onPause={() => setIsPlaying(false)}
      />

      <div className="flex flex-col md:flex-row items-center gap-6">
        
        {/* Personnage / Avatar Flédéric */}
        <div className="relative flex-shrink-0">
          <div className={`w-44 h-44 md:w-52 md:h-52 rounded-full bg-gradient-to-b from-blue-600/30 via-slate-900 to-slate-950 border-2 border-blue-400/60 flex items-center justify-center shadow-2xl transition-all duration-300 ${isPlaying ? 'ring-4 ring-blue-500/50 scale-105' : 'hover:scale-102'}`}>
            
            <svg
              className={`w-36 h-36 md:w-44 md:h-44 drop-shadow-xl transition-transform duration-300 ${isPlaying ? 'translate-y-[-2px]' : ''}`}
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse cx="60" cy="112" rx="38" ry="5" fill="#000000" opacity="0.4" />
              <path d="M18 112 C 18 78, 102 78, 102 112 Z" fill="#0F172A" />
              <path d="M30 112 C 30 83, 90 83, 90 112 Z" fill="#1E40AF" />
              <path d="M48 80 L 60 93 L 72 80" stroke="#3B82F6" strokeWidth="2.5" fill="none" />
              <path d="M60 93 L 60 112" stroke="#60A5FA" strokeWidth="1.5" strokeDasharray="2 2" />

              <rect x="49" y="64" width="22" height="20" rx="5" fill="#8D5B36" />
              <path d="M49 72 C 57 77, 63 77, 71 72" stroke="#6E4223" strokeWidth="2" fill="none" />

              <circle cx="60" cy="48" r="24" fill="#8D5B36" />
              <circle cx="34" cy="50" r="5.5" fill="#8D5B36" />
              <circle cx="86" cy="50" r="5.5" fill="#8D5B36" />

              <path d="M36 44 C 36 22, 84 22, 84 44 C 78 24, 68 22, 60 22 C 52 22, 42 24, 36 44 Z" fill="#334155" />
              <path d="M38 38 C 42 26, 50 24, 60 24 C 70 24, 78 26, 82 38 C 78 27, 70 25, 60 25 C 50 25, 42 27, 38 38 Z" fill="#94A3B8" opacity="0.7" />

              <circle cx="48" cy="46" r="3.2" fill="#1E1B18" />
              <circle cx="72" cy="46" r="3.2" fill="#1E1B18" />
              <circle cx="49" cy="45" r="1" fill="#FFFFFF" />
              <circle cx="73" cy="45" r="1" fill="#FFFFFF" />

              <path d={isPlaying ? "M42 38 Q 48 35 54 39" : "M42 40 Q 48 37 54 41"} stroke="#1E293B" strokeWidth="2.8" strokeLinecap="round" fill="none" />
              <path d={isPlaying ? "M66 39 Q 71 36 76 38" : "M66 41 Q 71 37 78 40"} stroke="#1E293B" strokeWidth="2.8" strokeLinecap="round" fill="none" />

              <path d="M34 52 Q 26 58 42 64" stroke="#64748B" strokeWidth="2" fill="none" strokeLinecap="round" />
              <circle cx="43" cy="64" r="3" fill={isPlaying ? "#EF4444" : "#475569"} />

              <path d="M60 43 L 56 53 C 58 55, 62 55, 64 53 L 60 43 Z" fill="#7A4C2A" opacity="0.4" />
              <path d="M55 53 C 58 56, 62 56, 65 53" stroke="#5C361A" strokeWidth="2" strokeLinecap="round" fill="none" />

              <path d="M52 57 Q 60 59 68 57" stroke="#475569" strokeWidth="1.5" strokeDasharray="1 1" fill="none" opacity="0.6" />

              {!isPlaying && (
                <path d="M51 60 Q 60 65 69 60" stroke="#1E1B18" strokeWidth="2.2" strokeLinecap="round" fill="none" />
              )}

              {isPlaying && mouthFrame === 0 && (
                <ellipse cx="60" cy="61" rx="4.5" ry="2" fill="#1E1B18" />
              )}

              {isPlaying && mouthFrame === 1 && (
                <ellipse cx="60" cy="62" rx="5.5" ry="4" fill="#1E1B18" />
              )}

              {isPlaying && mouthFrame === 2 && (
                <g>
                  <ellipse cx="60" cy="62" rx="6.5" ry="6" fill="#1E1B18" />
                  <path d="M55 65 C 58 63, 62 63, 65 65" stroke="#EF4444" strokeWidth="2" fill="none" />
                </g>
              )}

              {isPlaying && mouthFrame === 3 && (
                <path d="M51 61 Q 60 66 69 61 Z" fill="#1E1B18" />
              )}
            </svg>

          </div>

          <button
            onClick={toggleAudio}
            className={`absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1.5 text-xs font-semibold rounded-full shadow-lg transition-all flex items-center gap-2 whitespace-nowrap ${
              isPlaying
                ? 'bg-amber-600 hover:bg-amber-500 text-white animate-pulse'
                : 'bg-blue-600 hover:bg-blue-500 text-white'
            }`}
          >
            {isPlaying 
              ? (isEn ? '⏸️ Pause' : '⏸️ Mettre en pause') 
              : (isEn ? '🎙️ Listen to Flédéric' : '🎙️ Écouter Flédéric')}
          </button>
        </div>

        {/* Bulle de dialogue */}
        <div className="relative flex-1 bg-slate-950 border border-slate-800 p-5 rounded-2xl rounded-tl-none space-y-3">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-2">
              <span className="text-SM font-bold text-blue-400">
                {isEn ? 'Flédéric Payet (SM Coach)' : 'Flédéric Payet (Coach SM)'}
              </span>
              {isPlaying && (
                <span className="flex items-center gap-1 text-xs text-blue-400 font-mono">
                  <span className="w-1 h-3 bg-blue-500 animate-bounce"></span>
                  <span className="w-1 h-4 bg-blue-400 animate-bounce delay-75"></span>
                  <span className="w-1 h-2 bg-blue-600 animate-bounce delay-150"></span>
                </span>
              )}
            </div>
            <span className="text-xs text-slate-500">
              {isEn ? 'Interactive explanation' : 'Explication interactive'}
            </span>
          </div>

          <p className="text-slate-200 text-SM md:text-base italic leading-relaxed">
            {isEn
              ? '“Imagine your body is a bicycle and that, for it to function properly, it requires regular maintenance. You need to oil the chain, tighten the brakes, change the tires, retighten the bolts, and ensure the suspension is in good condition.”'
              : '« Imaginez que votre corps est une bicyclette et que, pour son bon fonctionnement, il faut un entretien régulier. Il faut huiler la chaîne, resserrer les freins, changer les pneus, revisser les boulons et s\'assurer que les suspensions sont en bon état. »'
            }
          </p>

          <p className="text-slate-300 text-xs md:text-SM leading-relaxed">
            {isEn ? (
              <>Why this analogy? Because it brings me back to the body's metabolic mechanics: the <strong>chain</strong> represents blood flow, the <strong>chainring</strong> represents cardiac resistance, and the <strong>sprockets</strong> represent heart rate and pulsation.</>
            ) : (
              <>Pourquoi cette analogie ? Car elle me ramène au fonctionnement métabolique du corps : la <strong>chaîne</strong> représente le flux sanguin, le <strong>plateau</strong> la résistance cardiaque, et les <strong>pignons</strong> la fréquence cardiaque.</>
            )}
          </p>
        </div>

      </div>
    </div>
  );
}