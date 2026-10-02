"use client";

// [ADDED] Food Marquee with scroll-direction and velocity sensitivity, oversized typography and Maharashtrian cultural accents
import React, { useEffect, useRef, useState } from "react";
import { SpiceSparkle, DecorativeLeaf } from "@/components/BrandMotifs";

export function FoodMarquee() {
  const [scrollDir, setScrollDir] = useState<"forward" | "reverse">("forward");
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          if (currentScrollY > lastScrollY.current + 5) {
            setScrollDir("forward");
          } else if (currentScrollY < lastScrollY.current - 5) {
            setScrollDir("reverse");
          }
          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const marqueeItems = [
    { en: "POHA", mr: "पोहे" },
    { en: "UPMA", mr: "उप्पीट" },
    { en: "SHEERA", mr: "शिरा" },
    { en: "SABUDANA KHICHADI", mr: "साबुदाणा" },
    { en: "MISAL PAV", mr: "मिसळ पाव" },
    { en: "LUNCH THALI", mr: "लंच थाळी" },
    { en: "WADA PAV", mr: "वडा पाव" },
    { en: "KANDA BHAJI", mr: "कांदा भजी" },
    { en: "BATATA BHAJI", mr: "बटाटा भजी" },
    { en: "MOONG BHAJI", mr: "मूग भजी" },
    { en: "BREAD PATTICE", mr: "ब्रेड पॅटीस" },
  ];

  return (
    <div
      className="relative w-full py-5 sm:py-7 bg-brown-900 border-y-2 border-turmeric-400 overflow-hidden select-none"
      aria-label="Popular Dishes Marquee"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-saffron-600/10 via-transparent to-brandGreen-700/10 pointer-events-none" />

      {/* Marquee Track */}
      <div
        className="flex whitespace-nowrap will-change-transform"
        style={{
          animation: `marquee 45s linear infinite ${
            scrollDir === "reverse" ? "reverse" : "normal"
          }`,
        }}
      >
        {/* Render twice for infinite loop */}
        {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
          <div
            key={index}
            className="inline-flex items-center gap-4 sm:gap-6 mx-4 sm:mx-6 group cursor-default"
          >
            <span className="font-display text-2xl sm:text-4xl md:text-5xl font-black tracking-wider text-cream-100 group-hover:text-turmeric-gold transition-colors">
              {item.en}
            </span>
            <span className="font-devanagari text-lg sm:text-2xl text-saffron-400 font-bold opacity-80 group-hover:opacity-100 transition-opacity">
              ({item.mr})
            </span>
            <div className="flex items-center gap-1.5 text-turmeric-400 opacity-70 group-hover:opacity-100">
              <SpiceSparkle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-turmeric-400" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
