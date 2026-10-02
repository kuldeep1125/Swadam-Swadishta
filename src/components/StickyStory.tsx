"use client";

// [ADDED] Sticky Scroll Story Experience: Full-screen interactive sequence with crystal-clear contrast and typography
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
      description:
        "Rooted in authentic homemade Maharashtrian seasonings, balancing spicy, tangy, and savoury perfection.",
      bg: "bg-cream-100",
      textColor: "text-brown-900",
      accentColor: "text-saffron-600",
      subtitleColor: "text-brown-900 font-bold",
      descColor: "text-brown-800",
      tagClasses: "bg-saffron-100 border-saffron-300 text-saffron-800",
      tagIconColor: "text-saffron-600",
      cardBorder: "border-turmeric-400",
      image: "/images/banner_misal.png",
      tag: "Authentic Flavor",
      dishCaption: "Spicy Pune Misal Pav",
    },
    {
      word: "MASALA",
      marathi: "मसाला",
      subtitle: "The Soul of Marathi Spice",
      description:
        "Aromatic goda masala, roasted dry coconut, pungent mustard, and carom seeds roasted to peak fragrance.",
      bg: "bg-gradient-to-br from-saffron-600 to-saffron-deep",
      textColor: "text-white",
      accentColor: "text-turmeric-300",
      subtitleColor: "text-cream-50 font-bold",
      descColor: "text-cream-100",
      tagClasses: "bg-white/20 border-white/40 text-white",
      tagIconColor: "text-turmeric-300",
      cardBorder: "border-turmeric-300/40",
      image: "/images/kanda_bhaji.jpg",
      tag: "Tempering & Spices",
      dishCaption: "Crispy Golden Kanda Bhaji",
    },
    {
      word: "GARMA-GARAM",
      marathi: "गरमा-गरम",
      subtitle: "Fresh From the Kadhai & Tawa",
      description:
        "Never pre-packaged or stale. Food cooked right when you order it, steaming hot onto your plate.",
      bg: "bg-gradient-to-br from-[#2D1810] to-[#1A0E08]",
      textColor: "text-cream-50",
      accentColor: "text-turmeric-gold",
      subtitleColor: "text-turmeric-200 font-bold",
      descColor: "text-cream-200",
      tagClasses: "bg-white/10 border-turmeric-400/40 text-turmeric-300",
      tagIconColor: "text-turmeric-gold",
      cardBorder: "border-turmeric-400/50",
      image: "/images/wada_pav.jpg",
      tag: "Cooked Fresh",
      dishCaption: "Iconic Maharashtra Wada Pav",
    },
    {
      word: "MAHARASHTRA",
      marathi: "महाराष्ट्र",
      subtitle: "Culinary Heritage of the Soil",
      description:
        "From the breakfast streets of Pune to the thali traditions of rural Maharashtra, pure veg comfort in every bite.",
      bg: "bg-gradient-to-br from-[#143D22] to-[#0D2B16]",
      textColor: "text-white",
      accentColor: "text-turmeric-300",
      subtitleColor: "text-cream-50 font-bold",
      descColor: "text-cream-100",
      tagClasses: "bg-white/20 border-white/40 text-white",
      tagIconColor: "text-turmeric-300",
      cardBorder: "border-turmeric-400/40",
      image: "/images/lunch_thali.jpg",
      tag: "Culture on a Plate",
      dishCaption: "Maharashtrian Lunch Thali",
    },
    {
      word: "SWADAM",
      marathi: "स्वादिष्ट",
      subtitle: "चव महाराष्ट्राची",
      description:
        "Shop No. 5, 34 Western Pavilion, Pan Card Club Road, Baner. Where Pune comes home for true Swad.",
      bg: "bg-gradient-to-br from-[#1A0E08] via-brown-900 to-[#2D1810]",
      textColor: "text-cream-50",
      accentColor: "text-saffron-400",
      subtitleColor: "text-turmeric-300 font-bold",
      descColor: "text-cream-200",
      tagClasses: "bg-saffron-500/30 border-saffron-400 text-turmeric-200",
      tagIconColor: "text-turmeric-gold",
      cardBorder: "border-turmeric-400/60",
      image: "/images/storefront.jpg",
      tag: "Visit Us in Baner",
      dishCaption: "Shop No. 5, Baner, Pune",
    },
  ];

  const current = stages[activeStep];

  return (
    <section
      className="relative py-20 sm:py-28 px-4 sm:px-8 md:px-12 bg-brown-900 text-cream-100 overflow-hidden"
      aria-label="Interactive Brand Story"
    >
      <div className="mx-auto max-w-7xl">
        {/* Navigation Indicator / Step Dots */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold tracking-widest text-turmeric-400">
              STORY CHAPTER 0{activeStep + 1} OF 0{stages.length}
            </span>
          </div>

          {/* Stepper Tabs with Labels */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {stages.map((stg, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-1 ${
                  activeStep === i
                    ? "bg-turmeric-gold text-brown-900 shadow-md scale-105"
                    : "bg-white/10 text-cream-200 hover:bg-white/20"
                }`}
                aria-label={`Jump to stage ${i + 1}: ${stg.word}`}
              >
                <span>{stg.word}</span>
              </button>
            ))}
          </div>

          {/* Arrow Controls */}
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
        <div
          className={`rounded-3xl p-8 sm:p-12 md:p-16 border-2 shadow-2xl transition-all duration-500 ${current.bg} ${current.cardBorder}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Typography (Col 1-7) */}
            <div className="lg:col-span-7 space-y-5">
              {/* Stage Pill Badge with explicit high-contrast colors */}
              <div className="inline-block">
                <span
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold border shadow-sm ${current.tagClasses}`}
                >
                  <SpiceSparkle className={`w-3.5 h-3.5 ${current.tagIconColor}`} />
                  <span>{current.tag}</span>
                </span>
              </div>

              {/* Main Headline & Marathi script */}
              <div className="space-y-1">
                <h3
                  className={`font-display text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-none ${current.textColor}`}
                >
                  {current.word}
                </h3>
                <span
                  className={`font-devanagari text-3xl sm:text-5xl font-black block pt-1 ${current.accentColor}`}
                >
                  {current.marathi}
                </span>
              </div>

              {/* Subtitle - explicitly styled */}
              <h4 className={`font-display text-2xl sm:text-3xl leading-snug ${current.subtitleColor}`}>
                {current.subtitle}
              </h4>

              {/* Description - explicitly styled */}
              <p
                className={`text-base sm:text-lg leading-relaxed font-sans max-w-xl ${current.descColor}`}
              >
                {current.description}
              </p>

              {/* Bottom chapter navigator within card */}
              <div className="pt-4 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
                <span className={`text-xs font-mono font-bold ${current.descColor}`}>
                  Chapter 0{activeStep + 1} of 05
                </span>
                {activeStep < stages.length - 1 ? (
                  <button
                    onClick={() => setActiveStep((prev) => prev + 1)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold underline underline-offset-4 hover:opacity-80 transition-opacity"
                  >
                    <span>Next: {stages[activeStep + 1].word}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <span className="font-devanagari text-sm font-bold text-turmeric-gold">
                    चव महाराष्ट्राची — Baner, Pune
                  </span>
                )}
              </div>
            </div>

            {/* Right Visual Image Frame (Col 8-12) */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-3xl overflow-hidden border-4 border-white/30 shadow-2xl bg-black/40 group">
                <Image
                  src={current.image}
                  alt={current.dishCaption}
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Clean Bottom Caption Tag */}
                <div className="absolute bottom-3 left-3 right-3 bg-black/75 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/20 text-white flex items-center justify-between">
                  <span className="font-display font-bold text-xs sm:text-sm truncate">
                    {current.dishCaption}
                  </span>
                  <span className="text-[10px] font-mono text-turmeric-400 font-bold uppercase tracking-wider flex-shrink-0 ml-2">
                    Pure Veg
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
