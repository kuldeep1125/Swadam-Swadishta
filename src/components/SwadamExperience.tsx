"use client";

// [ADDED] The Swadam Experience: Giant typographic rhythm (FRESH, WARM, QUICK, VEG, LOCAL, MAHARASHTRIAN)
import React, { useState } from "react";
// [FIXED] Removed unused DecorativeLeaf and SpiceSparkle imports

export function SwadamExperience() {
  const [activeWordIndex, setActiveWordIndex] = useState(0);

  const pillars = [
    {
      word: "FRESH",
      marathi: "ताजे",
      microcopy: "Prepared hot and served right for the day's cravings. (कढईतून थेट ताटात गरमा-गरम जेवण)",
      color: "text-brandGreen-700",
      bg: "bg-brandGreen-50",
    },
    {
      word: "WARM",
      marathi: "आपुलकी",
      microcopy: "Heartfelt hospitality where every guest is welcomed like family. (घरासारखी आपुलकी आणि प्रेम)",
      color: "text-saffron-600",
      bg: "bg-saffron-50",
    },
    {
      word: "QUICK",
      marathi: "त्वरित",
      microcopy: "Prompt service so your busy morning and lunch hours move effortlessly. (कामाच्या घाईतही झटपट व दर्जेदार सेवा)",
      color: "text-turmeric-gold",
      bg: "bg-cream-200",
    },
    {
      word: "VEG",
      marathi: "शुद्ध शाकाहारी",
      microcopy: "100% pure vegetarian culinary purity and hygiene you can trust. (१००% शुद्ध शाकाहारी आणि स्वच्छतेची हमी)",
      color: "text-brandGreen-800",
      bg: "bg-brandGreen-100",
    },
    {
      word: "LOCAL",
      marathi: "स्थानिक",
      microcopy: "Deeply rooted in Baner, Pune, feeding neighbours and food lovers daily. (बाणेर, पुण्यात दररोज शेकडो खवय्यांची पसंती)",
      color: "text-terracotta-500",
      bg: "bg-terracotta-50",
    },
    {
      word: "MAHARASHTRIAN",
      marathi: "महाराष्ट्रीयन",
      microcopy: "Authentic regional taste and time-honoured culinary identity. (पिढ्यानपिढ्या चालत आलेली अस्सल मराठमोळी चव)",
      color: "text-brown-900",
      bg: "bg-cream-300",
    },
  ];

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-8 md:px-12 bg-cream-100 border-b border-turmeric-400/40 relative overflow-hidden" aria-label="The Swadam Experience">
      
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="mb-14 pb-4 border-b border-turmeric-400/40 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-saffron-600 uppercase">
              THE SWADAM ESSENCE • आमची मूल्ये
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-brown-900 mt-1">
              What defines us.
            </h2>
          </div>
          <span className="font-devanagari text-xl font-bold text-brandGreen-700">
            चव, स्वच्छता आणि आपुलकी
          </span>
        </div>

        {/* Interactive Oversized Typography Rhythm */}
        <div className="divide-y divide-turmeric-400/40">
          {pillars.map((item, idx) => {
            const isActive = activeWordIndex === idx;
            return (
              <div
                key={idx}
                onMouseEnter={() => setActiveWordIndex(idx)}
                onClick={() => setActiveWordIndex(idx)}
                className={`py-5 sm:py-10 transition-all duration-300 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-2.5 sm:gap-4 ${
                  isActive ? "p-3 sm:p-4 sm:pl-8 bg-white/70 rounded-2xl shadow-sm" : "opacity-80 hover:opacity-100"
                }`}
              >
                <div className="flex items-baseline gap-3 sm:gap-8 min-w-0">
                  <span className="font-mono text-xs sm:text-sm text-brown-400 font-bold flex-shrink-0">
                    0{idx + 1}
                  </span>
                  {/* [FIXED] flex-wrap and fluid sizing prevents long word (MAHARASHTRIAN) from clipping on 320px viewports */}
                  <div className="flex flex-wrap items-baseline gap-2 sm:gap-6 min-w-0">
                    <span
                      className={`font-display text-2xl xs:text-3xl sm:text-6xl md:text-7xl font-black tracking-tight transition-colors break-words ${
                        isActive ? item.color : "text-brown-800"
                      }`}
                    >
                      {item.word}
                    </span>
                    <span className="font-devanagari text-base xs:text-xl sm:text-3xl font-bold text-brown-500">
                      ({item.marathi})
                    </span>
                  </div>
                </div>

                <div className="md:max-w-md md:text-right pl-6 sm:pl-10 md:pl-0">
                  <p className="text-xs sm:text-base text-brown-700 font-sans font-medium leading-relaxed">
                    {item.microcopy}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
