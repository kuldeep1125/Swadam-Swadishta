"use client";

// [ADDED] Signature Menu Experience: 4 visual chapters (Breakfast, Lunch Thali, Evening Snacks, Specialties & Drinks)
// Now with 4K-quality food photography and original uploaded menu artworks viewer
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
import { Sparkles, Utensils, Check, ArrowRight, Flame, Coffee, Eye, X } from "lucide-react";

export function SignatureMenu() {
  const [activeCategory, setActiveCategory] = useState<
    "all" | "breakfast" | "lunch" | "evening" | "specialties"
  >("all");
  const [hoveredSnack, setHoveredSnack] = useState<MenuItem | null>(restaurant.menu.evening[0]);
  const [selectedArtwork, setSelectedArtwork] = useState<string | null>(null);

  return (
    <section id="menu" className="relative w-full transition-colors duration-700" aria-label="Our Authentic Menu">
      
      {/* Category Filter Navigation Bar */}
      <div className="sticky top-16 z-30 py-2.5 sm:py-4 px-3 sm:px-4 bg-cream-100/95 backdrop-blur-md border-y border-turmeric-400/40 shadow-sm">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center justify-between w-full md:w-auto">
            <div>
              <span className="font-devanagari text-lg sm:text-xl font-bold text-brown-900 mr-2">मेनू</span>
              <span className="font-display text-base sm:text-lg font-bold text-saffron-600">What&apos;s Cooking?</span>
            </div>
            <span className="text-[11px] text-brown-600 md:hidden font-mono bg-cream-200 px-2 py-0.5 rounded-full">
              Scroll tabs →
            </span>
          </div>

          {/* [FIXED] Horizontal swipeable rail for mobile screens with clean no-scrollbar styling */}
          <div className="w-full md:w-auto flex items-center gap-1.5 p-1 rounded-2xl sm:rounded-full bg-cream-200/80 border border-turmeric-400/50 overflow-x-auto no-scrollbar flex-nowrap sm:flex-wrap justify-start sm:justify-center">
            {(
              [
                { id: "all", label: "ALL DISHES", mr: "सर्व" },
                { id: "breakfast", label: "01 BREAKFAST", mr: "न्याहारी" },
                { id: "lunch", label: "02 LUNCH THALI", mr: "थाळी" },
                { id: "evening", label: "03 EVENING SNACKS", mr: "स्नॅक्स" },
                { id: "specialties", label: "04 SPECIALTIES & DRINKS", mr: "विशेष" },
              ] as const
            ).map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap px-3 sm:px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 flex-shrink-0 ${
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
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 pb-4 sm:pb-6 border-b border-turmeric-400/40">
              <div>
                <span className="text-xs font-mono font-bold tracking-widest text-saffron-600 uppercase">
                  CHAPTER 01 • SAKALCHI NYAHARI
                </span>
                {/* [FIXED] Fluid typography for breakfast headline */}
                <h3 className="font-display text-3xl xs:text-4xl sm:text-6xl font-black text-brown-900 mt-1">
                  Morning Breakfast.
                </h3>
                <span className="font-devanagari text-xl sm:text-2xl font-bold text-brandGreen-700 block mt-1">
                  गरमा-गरम नाश्ता (7:30 AM onwards)
                </span>
              </div>
              <p className="max-w-md text-sm sm:text-base text-brown-700 mt-4 md:mt-0 leading-relaxed font-sans">
                Prepared steaming hot every morning. Served with crunchy peanuts, fresh grated coconut, and fragrant lemon.
              </p>
            </div>

            {/* Breakfast Showcase Grid: Asymmetric Editorial Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-stretch">
              
              {/* Feature Dish: 4K Misal Pav (Col 1-7) */}
              {(() => {
                const misal = restaurant.menu.breakfast.find((i) => i.id === "misal-pav");
                if (!misal) return null;
                return (
                  <div className="md:col-span-7 rounded-3xl bg-white p-4 xs:p-6 sm:p-8 border-2 border-saffron-500/40 shadow-xl flex flex-col justify-between group hover:border-saffron-500 transition-all duration-300">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-saffron-50 text-saffron-700 border border-saffron-200">
                          <Flame className="w-3 h-3 text-saffron-600" />
                          {misal.badge}
                        </span>
                        <h4 className="font-display text-2xl xs:text-3xl sm:text-4xl font-black text-brown-900 mt-3 group-hover:text-saffron-600 transition-colors">
                          {misal.name}
                        </h4>
                        <span className="font-devanagari text-lg sm:text-xl font-bold text-saffron-600">
                          {misal.nameMarathi}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-mono text-brown-500 block">Price</span>
                        <span className="font-display text-3xl sm:text-4xl font-black text-brown-900 group-hover:text-saffron-600 transition-colors">
                          {misal.price}
                        </span>
                      </div>
                    </div>

                    {/* Misal Pav 4K Hero Image */}
                    <div className="relative w-full h-56 xs:h-72 sm:h-96 rounded-2xl overflow-hidden my-4 sm:my-6 bg-cream-100 group-hover:scale-[1.02] transition-transform duration-500 shadow-md">
                      <Image
                        src={misal.image}
                        alt="Authentic Pune Misal Pav"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-3 left-3 bg-brown-900/90 text-cream-100 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-xl text-[11px] sm:text-xs font-semibold backdrop-blur-sm border border-white/20">
                        झणझणीत कट + कुरकुरीत फरसाण + बटर लादी पाव
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-brown-700 leading-relaxed font-sans">
                      {misal.description}
                    </p>
                  </div>
                );
              })()}

              {/* Side Stack: Poha, Upma, Sheera, Sabudana Khichadi (Col 8-12) */}
              <div className="md:col-span-5 flex flex-col gap-3 sm:gap-4 justify-between">
                {restaurant.menu.breakfast
                  .filter((item) => item.id !== "misal-pav")
                  .map((item) => (
                    <div
                      key={item.id}
                      className="p-3 xs:p-4 sm:p-5 rounded-2xl bg-white border border-turmeric-400/50 shadow-sm hover:shadow-md hover:border-turmeric-gold transition-all duration-300 flex items-center justify-between gap-2.5 xs:gap-4 group"
                    >
                      <div className="relative w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-cream-100 flex-shrink-0 group-hover:scale-105 transition-transform duration-300 border border-cream-200">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[9px] xs:text-[10px] font-bold uppercase tracking-wider text-brandGreen-700">
                            {item.badge}
                          </span>
                        </div>
                        <h5 className="font-display text-base xs:text-lg sm:text-xl font-bold text-brown-900 truncate group-hover:text-saffron-600 transition-colors">
                          {item.name}
                        </h5>
                        <span className="font-devanagari text-xs xs:text-sm font-semibold text-brown-600 block">
                          {item.nameMarathi}
                        </span>
                        <p className="text-xs text-brown-500 line-clamp-1 mt-0.5 font-sans">
                          {item.description}
                        </p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <span className="font-display text-xl xs:text-2xl font-black text-brown-900">
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
          
          <div className="relative mx-auto max-w-7xl">
            
            {/* Thali Header */}
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brandGreen-800/80 border border-turmeric-400/40 text-xs font-bold text-turmeric-300">
                <Sparkles className="w-3.5 h-3.5" />
                <span>CHAPTER 02 • THE MIDDAY FEAST</span>
                <span className="font-devanagari">• दुपारचे जेवण</span>
              </div>

              {/* [FIXED] Fluid typography for Thali title */}
              <h3 className="font-display text-4xl xs:text-5xl sm:text-7xl md:text-8xl font-black text-cream-50 tracking-tight">
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* Left Components Breakdown (Col 1-4) */}
              <div className="lg:col-span-4 space-y-4">
                <div className="p-4 xs:p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-turmeric-400/30">
                  <h4 className="font-display text-xl xs:text-2xl font-bold text-turmeric-300 mb-4 flex items-center gap-2">
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

              {/* Center Plate Photography (Col 5-8) - 4K High Definition */}
              <div className="lg:col-span-5 relative flex items-center justify-center">
                {/* [FIXED] Max-w scales gracefully down to 280px on 320px viewports */}
                <div className="relative w-full max-w-[280px] xs:max-w-[360px] sm:max-w-[480px] aspect-square rounded-full p-2 xs:p-4 border-4 border-dashed border-turmeric-400/30 group">
                  <div className="absolute inset-0 rounded-full bg-turmeric-500/15 blur-2xl pointer-events-none" />

                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-turmeric-400/60 shadow-2xl shadow-black/60 group-hover:scale-105 transition-transform duration-700">
                    <Image
                      src="/images/hd_lunch_thali.jpg"
                      alt="Full Maharashtrian Lunch Thali with 3 Chapatis, 2 Sabjis, Rice, Dal, Papad and Pickle"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="absolute -top-3 right-4 sm:right-6 bg-gradient-to-r from-saffron-600 to-turmeric-gold text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-bold text-xs sm:text-sm shadow-xl flex items-center gap-1.5">
                    <PureVegBadge className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
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
                        src="/images/hd_lunch_thali_sweet.jpg"
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
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 pb-4 sm:pb-6 border-b border-white/10">
              <div>
                <span className="text-xs font-mono font-bold tracking-widest text-turmeric-400 uppercase">
                  CHAPTER 03 • SANDHYAKALCHI CHAV
                </span>
                {/* [FIXED] Fluid typography for snacks header */}
                <h3 className="font-display text-3xl xs:text-4xl sm:text-6xl md:text-7xl font-black text-cream-50 mt-1">
                  Let&apos;s Get Snackin&apos;.
                </h3>
                <span className="font-devanagari text-xl sm:text-2xl font-bold text-saffron-400 block mt-1">
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
                      className={`py-3.5 sm:py-6 flex items-center justify-between cursor-pointer transition-all duration-300 group ${
                        isHovered ? "pl-3 sm:pl-6 bg-white/5 rounded-2xl" : ""
                      }`}
                    >
                      <div className="flex items-center gap-2.5 sm:gap-6 min-w-0">
                        <span className="text-xs font-mono text-turmeric-400 font-bold opacity-60 flex-shrink-0">
                          0{idx + 1}
                        </span>
                        {/* Mobile Thumbnail */}
                        <div className="sm:hidden relative w-11 h-11 xs:w-12 xs:h-12 rounded-xl overflow-hidden flex-shrink-0 bg-brown-900 border border-turmeric-400/40">
                          <Image
                            src={snack.image}
                            alt={snack.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-baseline gap-1.5 sm:gap-3">
                            <span className="font-display text-lg xs:text-xl sm:text-4xl md:text-5xl font-black tracking-tight text-cream-100 group-hover:text-turmeric-gold transition-colors">
                              {snack.name}
                            </span>
                            <span className="font-devanagari text-xs xs:text-sm sm:text-xl text-saffron-400 font-bold">
                              {snack.nameMarathi}
                            </span>
                          </div>
                          <span className="text-xs text-cream-300 mt-0.5 sm:mt-1 block font-sans line-clamp-1 sm:line-clamp-none">
                            {snack.description}
                          </span>
                        </div>
                      </div>

                      <div className="text-right flex items-center gap-2 sm:gap-4 flex-shrink-0 ml-2">
                        <span className="font-display text-2xl xs:text-3xl sm:text-4xl font-black text-turmeric-400 group-hover:scale-110 transition-transform">
                          {snack.price}
                        </span>
                        <ArrowRight
                          className={`w-4 h-4 sm:w-5 sm:h-5 text-saffron-400 transition-transform duration-300 ${
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

                    <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden bg-brown-800 shadow-md">
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

      {/* ========================================================================= */}
      {/* CHAPTER 4: SPECIALTIES & REFRESHING DRINKS (From Attached Banner Reference)*/}
      {/* ========================================================================= */}
      {(activeCategory === "all" || activeCategory === "specialties") && (
        <div id="specialties" className="relative py-20 sm:py-28 px-4 sm:px-8 md:px-12 bg-cream-50 text-brown-900 overflow-hidden border-t-2 border-turmeric-400">
          <div className="mx-auto max-w-7xl">
            
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 pb-4 sm:pb-6 border-b border-turmeric-400/40">
              <div>
                <span className="text-xs font-mono font-bold tracking-widest text-saffron-600 uppercase">
                  CHAPTER 04 • MAHARASHTRIAN SPECIALTIES & DRINKS
                </span>
                {/* [FIXED] Fluid typography for specialties header */}
                <h3 className="font-display text-3xl xs:text-4xl sm:text-6xl font-black text-brown-900 mt-1">
                  Taste of Tradition.
                </h3>
                <span className="font-devanagari text-lg xs:text-xl sm:text-2xl font-bold text-brandGreen-800 block mt-1">
                  कोथिंबीर वडी, थालीपीठ, उकडीचे मोदक, सोलकढी आणि चहा
                </span>
              </div>
              <p className="max-w-md text-sm sm:text-base text-brown-700 mt-4 md:mt-0 leading-relaxed font-sans">
                Signature Maharashtrian delicacies made from time-honoured culinary practices. Perfectly paired with refreshing beverages.
              </p>
            </div>

            {/* Specialties Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {restaurant.menu.specialties.map((item) => (
                <div
                  key={item.id}
                  className="rounded-3xl p-5 bg-white border border-turmeric-400/50 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative w-full h-48 rounded-2xl overflow-hidden bg-cream-100 mb-4 border border-cream-200">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-bold text-brown-900 shadow-sm border border-turmeric-400/40">
                        {item.badge}
                      </div>
                    </div>

                    <div className="flex items-baseline justify-between mb-1">
                      <h4 className="font-display text-xl font-bold text-brown-900 group-hover:text-saffron-600 transition-colors">
                        {item.name}
                      </h4>
                      <span className="font-display text-2xl font-black text-saffron-600">
                        {item.price}
                      </span>
                    </div>

                    <span className="font-devanagari text-sm font-bold text-brandGreen-700 block mb-2">
                      {item.nameMarathi}
                    </span>

                    <p className="text-xs sm:text-sm text-brown-600 leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-cream-200 flex items-center justify-between text-xs font-semibold text-brandGreen-800">
                    <span className="flex items-center gap-1">
                      <PureVegBadge className="w-3.5 h-3.5" />
                      100% Pure Veg
                    </span>
                    <span className="text-brown-500">Fresh Daily</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* ORIGINAL SHOP MENU CARDS & FLYERS VIEWER                                   */}
      {/* ========================================================================= */}
      <div className="py-16 px-4 sm:px-8 md:px-12 bg-cream-200/60 border-t border-turmeric-400/40">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold tracking-widest text-saffron-600 uppercase">
              AUTHENTIC ORIGINAL ARTWORKS
            </span>
            <h4 className="font-display text-2xl sm:text-3xl font-black text-brown-900 mt-1">
              Real In-Store Menu Cards & Banners
            </h4>
            <p className="text-xs sm:text-sm text-brown-600 font-sans mt-1">
              Click any authentic menu design below to view full-size high resolution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Horizontal Full Menu */}
            <div
              onClick={() => setSelectedArtwork("/images/menu_original.jpg")}
              className="rounded-2xl p-3 bg-white border border-turmeric-400/60 shadow-md hover:shadow-xl cursor-pointer group transition-all"
            >
              <div className="relative w-full h-44 rounded-xl overflow-hidden bg-cream-100">
                <Image
                  src="/images/menu_original.jpg"
                  alt="Original Swadam Swadishta Menu Card"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-xs gap-1.5">
                  <Eye className="w-4 h-4" />
                  <span>Click to Expand</span>
                </div>
              </div>
              <span className="font-display font-bold text-sm text-brown-900 block mt-2.5 text-center">
                Original Full Menu Card
              </span>
            </div>

            {/* Card 2: Vertical Menu Flyer */}
            <div
              onClick={() => setSelectedArtwork("/images/menu_flyer_vertical.png")}
              className="rounded-2xl p-3 bg-white border border-turmeric-400/60 shadow-md hover:shadow-xl cursor-pointer group transition-all"
            >
              <div className="relative w-full h-44 rounded-xl overflow-hidden bg-cream-100">
                <Image
                  src="/images/menu_flyer_vertical.png"
                  alt="Original Vertical Menu Flyer with Vada Pav Sketch"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-xs gap-1.5">
                  <Eye className="w-4 h-4" />
                  <span>Click to Expand</span>
                </div>
              </div>
              <span className="font-display font-bold text-sm text-brown-900 block mt-2.5 text-center">
                In-Store Vertical Flyer
              </span>
            </div>

            {/* Card 3: Wide Kitchen Banner */}
            <div
              onClick={() => setSelectedArtwork("/images/banner_original.png")}
              className="rounded-2xl p-3 bg-white border border-turmeric-400/60 shadow-md hover:shadow-xl cursor-pointer group transition-all"
            >
              <div className="relative w-full h-44 rounded-xl overflow-hidden bg-cream-100">
                <Image
                  src="/images/banner_original.png"
                  alt="Swadam Snacks & Kitchen Banner"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-xs gap-1.5">
                  <Eye className="w-4 h-4" />
                  <span>Click to Expand</span>
                </div>
              </div>
              <span className="font-display font-bold text-sm text-brown-900 block mt-2.5 text-center">
                Swadam Kitchen Banner
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* [FIXED] Lightbox Modal with z-[80] to sit above z-[70] navigation header and responsive touch controls */}
      {selectedArtwork && (
        <div
          className="fixed inset-0 z-[80] bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setSelectedArtwork(null)}
        >
          <button
            onClick={() => setSelectedArtwork(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-[90] p-2.5 sm:p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors active:scale-95"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="relative max-w-4xl w-full max-h-[85vh] h-[75vh] sm:h-[80vh] rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedArtwork}
              alt="Full view original artwork"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

    </section>
  );
}
