"use client";

// [ADDED] Signature Menu Experience: 3 distinct visual chapters (Breakfast, Lunch Thali, Evening Snacks)
// Includes category filtering, interactive thali breakdown, hover image tracking and rich editorial presentations
import React, { useState } from "react";
import Image from "next/image";
import { restaurant, MenuItem } from "@/config/restaurant";
import {
  BrushStroke,
  BrushUnderline,
  DecorativeLeaf,
  SpiceSparkle,
  PureVegBadge,
} from "@/components/BrandMotifs";
import { Sparkles, Utensils, Check, ArrowRight, Flame } from "lucide-react";

export function SignatureMenu() {
  const [activeCategory, setActiveCategory] = useState<"all" | "breakfast" | "lunch" | "evening">("all");
  const [hoveredSnack, setHoveredSnack] = useState<MenuItem | null>(restaurant.menu.evening[0]);

  return (
    <section id="menu" className="relative w-full transition-colors duration-700" aria-label="Our Authentic Menu">
      
      {/* Category Filter Navigation Bar */}
      <div className="sticky top-16 z-30 py-4 px-4 bg-cream-100/90 backdrop-blur-md border-y border-turmeric-400/40 shadow-sm">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-devanagari text-xl font-bold text-brown-900 mr-2">मेनू</span>
            <span className="font-display text-lg font-bold text-saffron-600">What&apos;s Cooking?</span>
            <span className="text-xs text-brown-600 ml-2 hidden md:inline">Breakfast • Lunch • Evening Snacks</span>
          </div>

          <div className="flex items-center gap-1.5 p-1 rounded-full bg-cream-200/80 border border-turmeric-400/50">
            {(
              [
                { id: "all", label: "ALL DISHES", mr: "सर्व" },
                { id: "breakfast", label: "01 BREAKFAST", mr: "न्याहारी" },
                { id: "lunch", label: "02 LUNCH THALI", mr: "थाळी" },
                { id: "evening", label: "03 EVENING SNACKS", mr: "स्नॅक्स" },
              ] as const
            ).map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-brown-900 text-cream-100 shadow-md scale-105"
                    : "text-brown-800 hover:text-saffron-600 hover:bg-cream-100"
                }`}
                aria-pressed={activeCategory === cat.id}
              >
                <span>{cat.label}</span>
                <span className="hidden sm:inline font-devanagari ml-1 opacity-70">({cat.mr})</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* CHAPTER 1: BREAKFAST (Warm Cream / Saffron Environment)                   */}
      {/* ========================================================================= */}
      {(activeCategory === "all" || activeCategory === "breakfast") && (
        <div className="relative py-20 px-4 sm:px-8 md:px-12 bg-cream-100 border-b border-turmeric-400/30">
          <div className="mx-auto max-w-7xl">
            
            {/* Chapter Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-turmeric-400/40">
              <div>
                <span className="text-xs font-mono font-bold tracking-widest text-saffron-600 uppercase">
                  CHAPTER 01 • SAKALCHI NYAHARI
                </span>
                <h3 className="font-display text-4xl sm:text-6xl font-black text-brown-900 mt-1">
                  Morning Breakfast.
                </h3>
                <span className="font-devanagari text-2xl font-bold text-brandGreen-700 block mt-1">
                  गरमा-गरम नाश्ता
                </span>
              </div>
              <p className="max-w-md text-sm sm:text-base text-brown-700 mt-4 md:mt-0 leading-relaxed font-sans">
                Prepared steaming hot every morning from 7:30 AM. Served with crunchy peanuts, fresh grated coconut, and fragrant lemon.
              </p>
            </div>

            {/* Breakfast Showcase Grid: Asymmetric Editorial Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
              
              {/* Feature Dish: Misal Pav (Col 1-7) */}
              {(() => {
                const misal = restaurant.menu.breakfast.find((i) => i.id === "misal-pav");
                if (!misal) return null;
                return (
                  <div className="md:col-span-7 rounded-3xl bg-white p-6 sm:p-8 border-2 border-saffron-500/40 shadow-xl flex flex-col justify-between group hover:border-saffron-500 transition-all duration-300">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-saffron-50 text-saffron-700 border border-saffron-200">
                          <Flame className="w-3 h-3 text-saffron-600" />
                          {misal.badge}
                        </span>
                        <h4 className="font-display text-3xl sm:text-4xl font-black text-brown-900 mt-3 group-hover:text-saffron-600 transition-colors">
                          {misal.name}
                        </h4>
                        <span className="font-devanagari text-xl font-bold text-saffron-600">
                          {misal.nameMarathi}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-mono text-brown-500 block">Price</span>
                        <span className="font-display text-4xl font-black text-brown-900 group-hover:text-saffron-600 transition-colors">
                          {misal.price}
                        </span>
                      </div>
                    </div>

                    {/* Misal Pav Hero Image */}
                    <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden my-6 bg-cream-100 group-hover:scale-[1.02] transition-transform duration-500">
                      <Image
                        src={misal.bannerImage || misal.image}
                        alt="Authentic Pune Misal Pav"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-3 left-3 bg-brown-900/85 text-cream-100 px-3 py-1 rounded-lg text-xs font-medium backdrop-blur-sm">
                        झणझणीत कट + कुरकुरीत फरसाण + लादी पाव
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-brown-700 leading-relaxed font-sans">
                      {misal.description}
                    </p>
                  </div>
                );
              })()}

              {/* Side Stack: Poha, Upma, Sheera, Sabudana Khichadi (Col 8-12) */}
              <div className="md:col-span-5 flex flex-col gap-5 justify-between">
                {restaurant.menu.breakfast
                  .filter((item) => item.id !== "misal-pav")
                  .map((item) => (
                    <div
                      key={item.id}
                      className="p-5 rounded-2xl bg-white border border-turmeric-400/50 shadow-sm hover:shadow-md hover:border-turmeric-gold transition-all duration-300 flex items-center justify-between gap-4 group"
                    >
                      <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-cream-100 flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                        <Image
                          src={item.bannerImage || item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-brandGreen-700">
                            {item.badge}
                          </span>
                        </div>
                        <h5 className="font-display text-xl font-bold text-brown-900 truncate group-hover:text-saffron-600 transition-colors">
                          {item.name}
                        </h5>
                        <span className="font-devanagari text-sm font-semibold text-brown-600 block">
                          {item.nameMarathi}
                        </span>
                        <p className="text-xs text-brown-500 line-clamp-1 mt-0.5 font-sans">
                          {item.description}
                        </p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <span className="font-display text-2xl font-black text-brown-900">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>

            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* CHAPTER 2: LUNCH THALI (The Hero Moment — Lush Green & Terracotta)         */}
      {/* ========================================================================= */}
      {(activeCategory === "all" || activeCategory === "lunch") && (
        <div id="thali" className="relative py-24 sm:py-32 px-4 sm:px-8 md:px-12 bg-gradient-to-b from-[#143D22] via-[#0D2B16] to-[#1A0E08] text-cream-100 overflow-hidden">
          
          {/* Subtle Maharashtrian Traditional Motifs in Background */}
          <div className="absolute top-10 left-10 opacity-20 pointer-events-none">
            <DecorativeLeaf className="w-36 h-36 text-turmeric-400" />
          </div>
          <div className="absolute bottom-10 right-10 opacity-15 pointer-events-none">
            <DecorativeLeaf className="w-48 h-48 text-saffron-500 rotate-90" />
          </div>

          <div className="relative mx-auto max-w-7xl">
            
            {/* Thali Header */}
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brandGreen-800/80 border border-turmeric-400/40 text-xs font-bold text-turmeric-300">
                <Sparkles className="w-3.5 h-3.5" />
                <span>CHAPTER 02 • THE MIDDAY FEAST</span>
                <span className="font-devanagari">• दुपारचे जेवण</span>
              </div>

              <h3 className="font-display text-5xl sm:text-7xl md:text-8xl font-black text-cream-50 tracking-tight">
                THE THALI.
              </h3>

              <div className="w-32 mx-auto">
                <BrushUnderline className="w-full h-3 text-saffron-500" />
              </div>

              <p className="text-base sm:text-xl text-cream-200 leading-relaxed font-sans pt-2">
                A proper Maharashtrian-style lunch, served with variety, aroma, and everyday comfort. Freshly made chapatis paired with comforting home-style sabjis.
              </p>
            </div>

            {/* Giant Centerpiece Thali Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Components Breakdown (Col 1-4) */}
              <div className="lg:col-span-4 space-y-4">
                <div className="p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-turmeric-400/30">
                  <h4 className="font-display text-2xl font-bold text-turmeric-300 mb-4 flex items-center gap-2">
                    <Utensils className="w-5 h-5 text-saffron-400" />
                    What&apos;s on the Plate?
                  </h4>
                  <ul className="space-y-3 text-sm text-cream-100 font-sans">
                    {[
                      { item: "3 Hot Chapatis", note: "Soft, freshly rolled whole wheat" },
                      { item: "2 Daily Sabjis", note: "1 Sukhi (dry) + 1 Rassa (gravy)" },
                      { item: "Steamed Rice", note: "Fluffy & comforting" },
                      { item: "Aromatic Dal", note: "Traditional tempered lentil curry" },
                      { item: "Crispy Papad", note: "Roasted authentic papad" },
                      { item: "Spicy Pickle & Salad", note: "Fresh onion, lemon, and mango pickle" },
                    ].map((comp, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-1 w-4 h-4 rounded-full bg-saffron-500/30 border border-saffron-400 flex items-center justify-center flex-shrink-0">
                          <Check className="w-2.5 h-2.5 text-turmeric-300" />
                        </div>
                        <div>
                          <span className="font-bold text-cream-50">{comp.item}</span>
                          <p className="text-xs text-cream-300/80">{comp.note}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Center Plate Photography (Col 5-8) */}
              <div className="lg:col-span-5 relative flex items-center justify-center">
                <div className="relative w-full max-w-[480px] aspect-square rounded-full p-4 border-4 border-dashed border-turmeric-400/30 group">
                  
                  {/* Subtle Glow Behind Thali */}
                  <div className="absolute inset-0 rounded-full bg-turmeric-500/15 blur-2xl pointer-events-none" />

                  {/* Steel Thali Plate Visual */}
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-turmeric-400/60 shadow-2xl shadow-black/60 group-hover:scale-105 transition-transform duration-700">
                    <Image
                      src="/images/lunch_thali.jpg"
                      alt="Full Maharashtrian Lunch Thali with 3 Chapatis, 2 Sabjis, Rice, Dal, Papad and Pickle"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Circular Orbiting Badge */}
                  <div className="absolute -top-3 right-6 bg-gradient-to-r from-saffron-600 to-turmeric-gold text-white px-4 py-2 rounded-full font-bold text-xs sm:text-sm shadow-xl flex items-center gap-1.5">
                    <PureVegBadge className="w-4 h-4" />
                    <span>Pure Veg Feast</span>
                  </div>
                </div>
              </div>

              {/* Right Pricing & Sweet Upgrade (Col 9-12) */}
              <div className="lg:col-span-3 space-y-6">
                
                {/* Standard Thali Card */}
                <div className="p-6 rounded-3xl bg-cream-100 text-brown-900 border-2 border-turmeric-400 shadow-xl group hover:-translate-y-1 transition-transform">
                  <span className="text-xs font-bold uppercase tracking-wider text-brandGreen-700">
                    EVERYDAY LUNCH
                  </span>
                  <h5 className="font-display text-2xl font-bold text-brown-900 mt-1">
                    Lunch Thali
                  </h5>
                  <p className="text-xs text-brown-600 mt-1">
                    3 Chapati, 2 Sabji, Rice, Dal, Papad, Pickle & Salad.
                  </p>
                  <div className="mt-4 pt-4 border-t border-cream-300 flex items-baseline justify-between">
                    <span className="text-xs text-brown-500 font-mono">Total</span>
                    <span className="font-display text-4xl font-black text-brandGreen-800">
                      ₹110
                    </span>
                  </div>
                </div>

                {/* Thali With Sweet Upgrade Card */}
                <div className="p-6 rounded-3xl bg-gradient-to-br from-saffron-600 to-saffron-deep text-white border-2 border-turmeric-400 shadow-xl group hover:-translate-y-1 transition-transform relative overflow-hidden">
                  <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-turmeric-400/20 blur-xl pointer-events-none" />
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-turmeric-200">
                      WITH DESSERT
                    </span>
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/40">
                      <Image
                        src="/images/lunch_sweet.jpg"
                        alt="Sweet of the day"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <h5 className="font-display text-2xl font-bold text-cream-50 mt-1">
                    Thali With Sweet
                  </h5>
                  <p className="text-xs text-cream-200 mt-1">
                    Complete thali + traditional sweet of the day (Shrikhand / Basundi / Sheera).
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/20 flex items-baseline justify-between">
                    <span className="text-xs text-cream-200 font-mono">Special Price</span>
                    <span className="font-display text-4xl font-black text-turmeric-300">
                      ₹130
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* CHAPTER 3: EVENING SNACKS (Warm Chocolate Brown & Street Energy)          */}
      {/* ========================================================================= */}
      {(activeCategory === "all" || activeCategory === "evening") && (
        <div id="snacks" className="relative py-20 sm:py-28 px-4 sm:px-8 md:px-12 bg-brown-800 text-cream-100 overflow-hidden border-t-2 border-turmeric-400">
          
          <div className="mx-auto max-w-7xl">
            
            {/* Evening Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
              <div>
                <span className="text-xs font-mono font-bold tracking-widest text-turmeric-400 uppercase">
                  CHAPTER 03 • SANDHYAKALCHI CHAV
                </span>
                <h3 className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-cream-50 mt-1">
                  Let&apos;s Get Snackin&apos;.
                </h3>
                <span className="font-devanagari text-2xl font-bold text-saffron-400 block mt-1">
                  गरमा-गरम भजी, वडा पाव आणि चहा
                </span>
              </div>
              <p className="max-w-md text-sm sm:text-base text-cream-200 mt-4 md:mt-0 leading-relaxed font-sans">
                Pune evenings demand sizzling hot wada pav, crisp kanda bhaji, and tea. Freshly fried straight out of the kadhai from 4:00 PM onwards.
              </p>
            </div>

            {/* Dynamic Interactive List with Live Image Highlight */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left: Oversized Snack Titles List (Col 1-7) */}
              <div className="lg:col-span-7 divide-y divide-white/10">
                {restaurant.menu.evening.map((snack, idx) => {
                  const isHovered = hoveredSnack?.id === snack.id;
                  return (
                    <div
                      key={snack.id}
                      onMouseEnter={() => setHoveredSnack(snack)}
                      onClick={() => setHoveredSnack(snack)}
                      className={`py-5 sm:py-6 flex items-center justify-between cursor-pointer transition-all duration-300 group ${
                        isHovered ? "pl-4 sm:pl-6 bg-white/5 rounded-2xl" : ""
                      }`}
                    >
                      <div className="flex items-center gap-4 sm:gap-6">
                        <span className="text-xs font-mono text-turmeric-400 font-bold opacity-60">
                          0{idx + 1}
                        </span>
                        <div>
                          <div className="flex items-baseline gap-3">
                            <span className="font-display text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-cream-100 group-hover:text-turmeric-gold transition-colors">
                              {snack.name}
                            </span>
                            <span className="font-devanagari text-lg sm:text-xl text-saffron-400 font-bold">
                              {snack.nameMarathi}
                            </span>
                          </div>
                          <span className="text-xs text-cream-300 mt-1 block font-sans">
                            {snack.description}
                          </span>
                        </div>
                      </div>

                      <div className="text-right flex items-center gap-4 flex-shrink-0">
                        <span className="font-display text-3xl sm:text-4xl font-black text-turmeric-400 group-hover:scale-110 transition-transform">
                          {snack.price}
                        </span>
                        <ArrowRight
                          className={`w-5 h-5 text-saffron-400 transition-transform duration-300 ${
                            isHovered ? "translate-x-1 opacity-100" : "opacity-0"
                          }`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right: Dynamic Highlight Card (Col 8-12) */}
              <div className="lg:col-span-5 relative flex items-center justify-center">
                {hoveredSnack && (
                  <div className="relative w-full max-w-[420px] rounded-3xl p-6 bg-brown-900 border-2 border-turmeric-400/50 shadow-2xl animate-in fade-in duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold text-turmeric-300 uppercase tracking-widest">
                        {hoveredSnack.badge || "Evening Special"}
                      </span>
                      <span className="font-display text-3xl font-black text-turmeric-gold">
                        {hoveredSnack.price}
                      </span>
                    </div>

                    <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden bg-brown-800">
                      <Image
                        src={hoveredSnack.image}
                        alt={hoveredSnack.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="mt-4">
                      <h4 className="font-display text-2xl font-bold text-cream-50">
                        {hoveredSnack.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-cream-200 mt-1 font-sans leading-relaxed">
                        {hoveredSnack.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
