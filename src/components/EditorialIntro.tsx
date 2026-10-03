"use client";

// [ADDED] Editorial Introduction: Rich narrative layout with scroll-reactive typography and authentic brand values
import React, { useEffect, useState } from "react";
import { restaurant } from "@/config/restaurant";
import { BrushUnderline, DecorativeLeaf, PureVegBadge } from "@/components/BrandMotifs";
import { UtensilsCrossed, Clock, HeartHandshake, Leaf } from "lucide-react";

export function EditorialIntro() {
  const [scrollY, setScrollY] = useState(0);
  const [isTabletOrDesktop, setIsTabletOrDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsTabletOrDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // [FIXED] Smooth scroll shift active on tablet & desktop only; disabled on mobile (<768px) to prevent horizontal overflow
  const rawShift = Math.max(-50, Math.min(50, (scrollY - 600) * 0.08));
  const shiftLeft = isTabletOrDesktop ? rawShift : 0;
  const shiftRight = isTabletOrDesktop ? -rawShift : 0;

  const iconMap: Record<string, React.ReactNode> = {
    UtensilsCrossed: <UtensilsCrossed className="w-6 h-6 text-saffron-600" />,
    Clock: <Clock className="w-6 h-6 text-turmeric-gold" />,
    HeartHandshake: <HeartHandshake className="w-6 h-6 text-terracotta-500" />,
    Leaf: <Leaf className="w-6 h-6 text-brandGreen-600" />,
  };

  return (
    <section
      id="experience"
      className="relative py-20 sm:py-28 px-4 sm:px-8 md:px-12 bg-cream-50 overflow-hidden"
      aria-label="About Swadam Swadishta"
    >
      {/* Subtle Grain Background */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-60" />

      {/* Background Decorative Accent */}
      <div className="absolute -top-12 -right-12 opacity-20 pointer-events-none">
        <DecorativeLeaf className="w-48 h-48 text-brandGreen-700" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        
        {/* Editorial Sub-Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-[2px] w-12 bg-saffron-500 rounded-full" />
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-brown-600">
            Our Food Philosophy
          </span>
          <span className="font-devanagari text-xs text-brandGreen-700 font-bold">
            • घरची चव
          </span>
        </div>

        {/* Primary Editorial Heading */}
        <div className="space-y-3 sm:space-y-4 max-w-4xl">
          {/* [FIXED] Responsive typography down to 320px viewports - [ADDED] Bilingual statement */}
          <h2 className="font-display text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-black text-brown-900 leading-[1.18] tracking-tight">
            Some food fills you up. <br />
            <span className="text-saffron-600 font-bold">
              Some food reminds you of home.
            </span>
          </h2>

          <p className="font-devanagari text-lg sm:text-2xl text-brandGreen-800 font-bold">
            काही अन्न पोट भरतं, काही अन्न घराची आठवण करून देतं.
          </p>

          <p className="text-base sm:text-lg text-brown-700 leading-relaxed font-sans max-w-2xl pt-1">
            Swadam Swadishta brings the familiar flavours of Maharashtra to Baner, serving vegetarian breakfast, lunch and evening favourites fresh and warm.
          </p>
        </div>

        {/* Oversized Scroll-Reactive Typographic Statement */}
        <div className="my-14 sm:my-24 py-6 sm:py-8 border-y border-turmeric-400/40 select-none overflow-hidden">
          {/* [FIXED] Fluid typography with break-words and mobile-safe alignment */}
          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 font-display font-black text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight transition-transform duration-300 text-center sm:text-left"
            style={{ transform: `translateX(${shiftLeft}px)` }}
          >
            <span className="text-brown-900">Simple food.</span>
            <div className="relative inline-block" style={{ transform: `translateX(${shiftRight}px)` }}>
              <span className="text-saffron-600">Big swad.</span>
              <div className="w-full">
                <BrushUnderline className="w-full h-2.5 sm:h-3 text-turmeric-gold" />
              </div>
            </div>
          </div>
          <div className="text-center mt-3">
            <span className="font-devanagari text-lg sm:text-2xl text-brandGreen-800 font-bold">
              स्वाद जो आठवणीत राहतो.
            </span>
          </div>
        </div>

        {/* The 4 Authentic Pillars from Storefront Identity - [ADDED] Bilingual titles and descriptions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
          {restaurant.features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-turmeric-400/40 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-cream-100 border border-turmeric-400/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {iconMap[feature.icon] || <PureVegBadge className="w-6 h-6" />}
                </div>
                <div className="flex items-baseline justify-between mb-1.5 flex-wrap gap-1">
                  <h3 className="font-display font-bold text-lg text-brown-900">
                    {feature.title}
                  </h3>
                  {feature.titleMarathi && (
                    <span className="font-devanagari text-xs font-bold text-brandGreen-700">
                      {feature.titleMarathi}
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-brown-600 leading-relaxed font-sans">
                  {feature.description}
                </p>
                {feature.descriptionMarathi && (
                  <p className="font-devanagari text-[11px] text-brown-500 mt-1">
                    {feature.descriptionMarathi}
                  </p>
                )}
              </div>
              <div className="mt-4 pt-3 border-t border-cream-200 flex items-center justify-between text-[11px] font-semibold text-brown-500 font-mono">
                <span>0{idx + 1}</span>
                <span className="text-brandGreen-700">Swadam Quality • शुद्धता</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
