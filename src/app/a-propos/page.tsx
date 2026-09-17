'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function AProposPage() {
  const { lang, t } = useLanguage();
  const isEn = lang === 'en';
  const bio = t.Method.biography;

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 SM:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* En-tête */}
        <section className="text-center space-y-4">
          <h1 className="text-3xl SM:text-5xl font-extrabold text-blue-400 tracking-tight">
            {isEn ? 'About Flédéric Payet' : 'À propos de Flédéric Payet'}
          </h1>
          <p className="text-xl text-slate-300 font-medium">
            {t.Hero.subtitle}
          </p>
        </section>

        {/* Disposition avec photo à gauche et bloc texte à droite */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Photo de Flédéric à gauche (Cadre rouge) */}
          <div className="lg:col-span-5 relative w-full min-h-[350px] lg:min-h-full rounded-2xl overflow-hidden border-2 border-blue-500/50 shadow-2xl">
            <Image
              src="/flederic-payet.jpg"
              alt="Flédéric Payet"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Carte Parcours & Engagement à droite */}
          <section className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 SM:p-8 space-y-6 shadow-xl flex flex-col justify-between">
            <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-3">
              {isEn ? 'My Commitment & My Journey' : 'Mon Engagement & Mon Parcours'}
            </h2>
            
            <div className="space-y-4 text-slate-300 leading-relaxed text-base SM:text-lg">
              <p>{bio?.p1 || t.Hero.bio}</p>
              {bio?.p2 && <p>{bio.p2}</p>}
              {bio?.p3 && <p>{bio.p3}</p>}
            </div>
          </section>

        </div>

        {/* Encadré Philosophie */}
        <section className="bg-gradient-to-r from-blue-950/40 to-slate-900 border border-blue-800/50 rounded-2xl p-6 SM:p-8 space-y-4">
          <h3 className="text-xl font-bold text-blue-300">
            {isEn ? 'A Preventive Sanctuary' : 'Une approche préventive et curative'}
          </h3>
          <p className="text-slate-300 leading-relaxed">
            {isEn 
              ? 'By adapting metabolic protocols to individual capacities, the gym turns into a space for rehabilitation, performance optimization, and lasting health recovery.'
              : 'En adaptant les protocoles d’effort métabolique aux capacités de chacun, la salle de sport devient un espace de réhabilitation, d’optimisation des performances et de reconquête de la santé durable.'
            }
          </p>
        </section>

        {/* Appel à l'action */}
        <div className="text-center pt-4">
          <Link
            href="/methode-SM"
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl shadow-lg transition-all"
          >
            {isEn ? 'Discover the SM Method →' : 'Découvrir la Méthode SM →'}
          </Link>
        </div>

      </div>
    </main>
  );
}