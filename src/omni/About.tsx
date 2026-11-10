import React from 'react';
import { Globe, Leaf, Award } from 'lucide-react';

const PILLARS = [
  {
    icon: Globe,
    title: '100% Traceable Fibers',
    desc: 'From the high steppes of Inner Mongolia to Tuscan vegetable-tanneries, every single raw material is certified with verifiable batch provenance.',
  },
  {
    icon: Leaf,
    title: 'Zero-Waste Patterning',
    desc: 'We engineer cut-and-sew templates digitally to eliminate textile excess, repurposing raw off-cuts into bespoke packaging and small leather accessories.',
  },
  {
    icon: Award,
    title: 'Direct Artisan Guilds',
    desc: 'We bypass intermediary distributors to partner directly with family-run workshops, ensuring transparent living wages and craft preservation.',
  },
];

const MILESTONES = [
  { year: '2018', title: 'Establishment of the Paris Flagship', desc: 'Launched with a curated capsule of 8 tailored overcoats and handmade knitwear.' },
  { year: '2021', title: 'Italian Guild Alliances', desc: 'Welcomed master artisans from Florence and Milan for certified leather and bespoke footwear.' },
  { year: '2026', title: '100% Carbon Neutral Global Fulfillment', desc: 'Full lifecycle verification and certified direct duty-paid courier logistics worldwide.' },
];

/**
 * ABOUT VARIANT 2 — Split Dossier.
 * Sticky portrait image on the left; manifesto, pillar rows and a horizontal
 * milestone rail on the right. Same content as About, editorial split.
 */
export const About: React.FC<{ data?: any }> = ({ data }) => {
  const Headline = data?.Headline || data?.headline || data?.title || "The Architecture of Permanence";
  const headline2 = data?.headline2 || data?.description || data?.subheadline || "Founded on the belief that true luxury is defined by longevity, ethical provenance, and master craftsmanship.";
  const Badge = data?.Badge || data?.badge || "Manifesto & Material Ethics";

  return (
  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 animate-fadeIn">

    {/* Left — sticky portrait */}
    <div className="lg:col-span-2">
      <div className="lg:sticky lg:top-24 space-y-4">
        <div className="rounded-3xl overflow-hidden aspect-[3/4] bg-zinc-950 relative shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1600&auto=format&fit=crop&q=80"
            alt="Workshop & Craft Studio"
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
            <span className="text-xs uppercase tracking-widest font-mono text-zinc-200">Florence • Paris • Milan</span>
          </div>
        </div>
        <p className="text-[11px] text-zinc-500 uppercase tracking-widest text-center">Est. 2018 — Craft Archive</p>
      </div>
    </div>

    {/* Right — content column */}
    <div className="lg:col-span-3 space-y-10">
      <div className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider">
          <Leaf className="w-3.5 h-3.5" />
          {Badge}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-zinc-900 dark:text-white">
          {Headline}
        </h1>
        <p className="text-sm text-zinc-500 leading-relaxed max-w-lg">
          {headline2}
        </p>
      </div>

      {/* Pillars as horizontal rows */}
      <div className="divide-y divide-zinc-200 dark divide-zinc-200 dark:divide-zinc-800 border-y border-zinc-200 dark:border-zinc-800">
        {PILLARS.map((pillar) => (
          <div key={pillar.title} className="py-5 flex gap-4 items-start">
            <div className="w-9 h-9 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-800 dark:text-zinc-200 shrink-0">
              <pillar.icon className="w-4.5 h-4.5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-zinc-900 dark:text-white font-display">{pillar.title}</h3>
              <p className="text-xs text-zinc-500 leading-relaxed mt-1">{pillar.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Milestones as horizontal steps */}
      <div>
        <h3 className="text-sm font-bold font-display text-zinc-900 dark:text-white mb-4">Our Trajectory</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {MILESTONES.map((m) => (
            <div key={m.year} className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 space-y-1.5">
              <span className="text-xl font-extrabold font-display text-zinc-900 dark:text-white">{m.year}</span>
              <h4 className="text-xs font-bold text-zinc-900 dark:text-white">{m.title}</h4>
              <p className="text-[11px] text-zinc-500 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  );
};
