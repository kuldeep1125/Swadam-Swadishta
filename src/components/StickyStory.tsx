"use client";

// [ADDED] Sticky Scroll Story Experience: Full-screen pinned sequence (SWAD -> MASALA -> GARMA-GARAM -> MAHARASHTRA -> SWADAM -> चव महाराष्ट्राची)
import React, { useState } from "react";
import Image from "next/image";
import { BrushUnderline, DecorativeLeaf, SpiceSparkle } from "@/components/BrandMotifs";
import { ChevronRight, ChevronLeft } from "lucide-react";

export function StickyStory() {
  const [activeStep, setActiveStep] = useState(0);

  const stages = [
    {
      word: "SWAD",
      marathi: "स्वाद",
      subtitle: "The Taste that Defines Us",
      description: "Rooted in authentic homemade Maharashtrian seasonings, balancing spicy, tangy, and savoury perfection.",
      bg: "bg-cream-100",
      textColor: "text-brown-900",
      accentColor: "text-saffron-600",
      image: "/images/banner_misal.png",
      tag: "Authentic Flavor",
    },
    {
      word: "MASALA",
      marathi: "मसाला",
      subtitle: "The Soul of Marathi Spice",
      description: "Aromatic goda masala, roasted dry coconut, pungent mustard, and carom seeds roasted to peak fragrance.",
      bg: "bg-gradient-to-br from-saffron-600 to-saffron-deep",
      textColor: "text-white",
      accentColor: "text-turmeric-300",
      image: "/images/kanda_bhaji.jpg",
      tag: "Tempering & Spices",
    },
    {
      word: "GARMA-GARAM",
      marathi: "गरमा-गरम",
      subtitle: "Fresh From the Kadhai & Tawa",
      description: "Never pre-packaged or stale. Food cooked right when you order it, steaming hot onto your plate.",
      bg: "bg-brown-900",
      textColor: "text-cream-100",
      accentColor: "text-turmeric-gold",
      image: "/images/wada_pav.jpg",
      tag: "Cooked Fresh",
    },
    {
      word: "MAHARASHTRA",
      marathi: "महाराष्ट्र",
      subtitle: "Culinary Heritage of the Soil",
      description: "From the breakfast streets of Pune to the thali traditions of rural Maharashtra, pure veg comfort in every bite.",
      bg: "bg-gradient-to-br from-brandGreen-800 to-brandGreen-900",
      textColor: "text-white",
      accentColor: "text-turmeric-300",
      image: "/images/lunch_thali.jpg",
      tag: "Culture on a Plate",
    },
    {
      word: "SWADAM",
      marathi: "स्वादिष्ट",
      subtitle: "चव महाराष्ट्राची",
      description: "Shop No. 5, 34 Western Pavilion, Pan Card Club Road, Baner. Where Pune comes home for true Swad.",
      bg: "bg-gradient-to-br from-[#1A0E08] via-brown-900 to-[#2D1810]",
      textColor: "text-cream-50",
      accentColor: "text-saffron-400",
      image: "/images/storefront.jpg",
      tag: "Visit Us in Baner",
    },
  ];

  const current = stages[activeStep];

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-8 md:px-12 bg-brown-900 text-cream-100 overflow-hidden" aria-label="Interactive Brand Story">
      
      <div className="mx-auto max-w-7xl">
        
        {/* Navigation Indicator / Step Dots */}
        <div className="flex items-center justify-between pb-8 mb-8 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold tracking-widest text-turmeric-400">
              STORY CHAPTER {activeStep + 1} OF {stages.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {stages.map((stg, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeStep === i
                    ? "w-8 bg-turmeric-gold shadow-md"
                    : "w-2.5 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Jump to stage ${i + 1}: ${stg.word}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
              disabled={activeStep === 0}
              className="p-2 rounded-full border border-white/20 hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none transition-colors"
              aria-label="Previous story stage"
            >
              <ChevronLeft className="w-5 h-5 text-cream-100" />
            </button>
            <button
              onClick={() => setActiveStep((prev) => Math.min(stages.length - 1, prev + 1))}
              disabled={activeStep === stages.length - 1}
              className="p-2 rounded-full border border-white/20 hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none transition-colors"
              aria-label="Next story stage"
            >
              <ChevronRight className="w-5 h-5 text-cream-100" />
            </button>
          </div>
        </div>

        {/* Dynamic Stage Display Box */}
        <div className={`rounded-3xl p-8 sm:p-12 md:p-16 border-2 border-turmeric-400/40 shadow-2xl transition-all duration-700 ${current.bg}`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Typography (Col 1-7) */}
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-sm border border-white/30 text-white">
                <SpiceSparkle className="w-3.5 h-3.5 text-turmeric-300" />
                {current.tag}
              </span>

              <div className="space-y-1">
                <h3 className={`font-display text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-none ${current.textColor}`}>
                  {current.word}
                </h3>
                <span className={`font-devanagari text-3xl sm:text-5xl font-black block ${current.accentColor}`}>
                  {current.marathi}
                </span>
              </div>

              <h4 className="font-display text-xl sm:text-2xl font-bold opacity-90">
                {current.subtitle}
              </h4>

              <p className="text-sm sm:text-lg opacity-85 leading-relaxed font-sans max-w-xl">
                {current.description}
              </p>

              {/* Final reveal footer on last step */}
              {activeStep === stages.length - 1 && (
                <div className="pt-4 border-t border-white/20 mt-4">
                  <span className="font-devanagari text-2xl sm:text-3xl font-bold text-turmeric-gold block">
                    चव महाराष्ट्राची — Shop No. 5, Baner, Pune
                  </span>
                </div>
              )}
            </div>

            {/* Right Visual Image (Col 8-12) */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-[380px] aspect-square rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl group">
                <Image
                  src={current.image}
                  alt={current.word}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="font-display font-bold text-lg block">{current.word}</span>
                  <span className="font-devanagari text-sm text-turmeric-300 font-semibold">{current.marathi}</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
