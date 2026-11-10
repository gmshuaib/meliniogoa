import React, { useEffect, useState } from 'react';
import { useStore } from './OmniStoreContext';
import { ArrowRight, ArrowUpRight, Gem, Truck } from 'lucide-react';

/**
 * HERO VARIANT 3 — Full-Bleed Centered.
 * Edge-to-edge image, centered headline stack, arrows at screen edges.
 * Same banners, same CTAs, same auto-rotation.
 */
export const Hero: React.FC = () => {
  const { activePreset, navigateTo, setFilterState } = useStore();
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  const banners = activePreset?.banners && activePreset.banners.length > 0
    ? activePreset.banners
    : [
        {
          id: 'default-hero',
          title: activePreset?.name || 'Curated Essentials',
          subtitle: activePreset?.tagline || 'Modern elegance, uncompromising craft, and timeless design.',
          tag: activePreset?.categoryTag || 'NEW COLLECTION',
          ctaText: 'Explore Collection',
          image: activePreset?.categories?.[0]?.bannerImage || activePreset?.categories?.[0]?.image || 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=1600&auto=format&fit=crop&q=80',
        },
      ];

  const activeBanner = banners[currentBannerIndex % banners.length] || banners[0];
  const Headline = (activeBanner as any).Headline || (activeBanner as any).headline || activeBanner.title;
  const headline2 = (activeBanner as any).headline2 || (activeBanner as any).subheadline || activeBanner.subtitle;
  const Badge = (activeBanner as any).Badge || (activeBanner as any).badge || activeBanner.tag || activePreset.categoryTag;
  const CTA1 = (activeBanner as any).CTA1 || (activeBanner as any).cta || activeBanner.ctaText || 'Explore Collection';
  const CTA2 = (activeBanner as any).CTA2 || (activeBanner as any).secondaryCta || `${activePreset?.name || 'Store'} New Arrivals`;

  useEffect(() => {
    if (banners.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentBannerIndex((prev) => (prev + 1) % banners.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [banners.length]);

  return (
    <section className="relative w-full min-h-[560px] sm:min-h-[640px] overflow-hidden bg-zinc-950 text-white">
      {/* Full-bleed background */}
      <div className="absolute inset-0">
        {activeBanner.image && (
          <img
            key={activeBanner.id || activeBanner.title}
            src={activeBanner.image}
            alt={activeBanner.title}
            className="w-full h-full object-cover object-center opacity-60 animate-fade-in transition-transform duration-1000"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      </div>

      {/* Centered content stack */}
      <div className="relative z-10 h-full max-w-3xl mx-auto px-6 flex flex-col items-center justify-center text-center py-24 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-zinc-200 text-xs font-semibold tracking-wider uppercase">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{Badge}</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-medium tracking-tight font-display leading-[1.05] text-white">
          {Headline}
        </h1>
        <p className="text-sm sm:text-lg text-zinc-200 leading-relaxed max-w-xl">
          {headline2}
        </p>

        {/* Action Buttons — same targets as HeroV1 */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
          <button
            onClick={() => {
              setFilterState((prev) => ({ ...prev, categoryId: undefined }));
              navigateTo({ name: 'plp' });
            }}
            className="bg-white text-zinc-950 hover:bg-zinc-100 font-bold text-xs sm:text-sm px-8 py-4 rounded-none transition-all duration-200 flex items-center gap-2.5 shadow-lg hover:shadow-xl hover:scale-102 active:scale-98"
            id="hero-primary-cta"
          >
            <span>{CTA1}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              setFilterState((prev) => ({ ...prev, isFeatured: true }));
              navigateTo({ name: 'plp' });
            }}
            className="border border-white/40 hover:border-white text-white font-semibold text-xs sm:text-sm px-7 py-4 rounded-none backdrop-blur-sm transition-all flex items-center gap-2"
            id="hero-secondary-cta"
          >
            <span>{CTA2}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-300" />
          </button>
        </div>

        {/* Trust highlights row */}
        <div className="pt-6 flex items-center gap-8 text-[11px] text-zinc-300 uppercase tracking-widest">
          <div className="flex items-center gap-1.5">
            <Gem className="w-3.5 h-3.5" />
            <span>Artisan Provenance</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Truck className="w-3.5 h-3.5" />
            <span>Complimentary Shipping</span>
          </div>
        </div>
      </div>

      {/* Edge arrows (same rotation state) */}
      {banners.length > 1 && (
        <>
          <button
            onClick={() => setCurrentBannerIndex((prev) => (prev - 1 + banners.length) % banners.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-white hover:bg-black/60 transition-colors"
            aria-label="Previous Slide"
          >
            <ArrowRight className="w-5 h-5 rotate-180" />
          </button>
          <button
            onClick={() => setCurrentBannerIndex((prev) => (prev + 1) % banners.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-white hover:bg-black/60 transition-colors"
            aria-label="Next Slide"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-xs font-mono text-zinc-200 tracking-widest">
            0{currentBannerIndex + 1} — 0{banners.length}
          </div>
        </>
      )}
    </section>
  );
};
