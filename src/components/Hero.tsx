"use client";

// [ADDED] Hero Section: Interactive Maharashtrian Living Food Poster with cursor depth parallax and staggered reveals
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { restaurant } from "@/config/restaurant";
import {
  BrushStroke,
  BrushUnderline,
  DecorativeLeaf,
  SpiceSparkle,
  SteamSwirl,
  PureVegBadge,
} from "@/components/BrandMotifs";
import { ArrowDown, MapPin, MessageCircle, Sparkles, Utensils } from "lucide-react";

export function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check for desktop screen size for parallax
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop);

    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => {
      window.removeEventListener("resize", checkIsDesktop);
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || !isDesktop) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized mouse coordinates from -1 to 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [prefersReducedMotion, isDesktop]);

  // [FIXED] Parallax offsets active only on desktop to eliminate mobile horizontal jank
  const fgX = prefersReducedMotion || !isDesktop ? 0 : mousePos.x * 12;
  const fgY = prefersReducedMotion || !isDesktop ? 0 : mousePos.y * 12;
  const bgX = prefersReducedMotion || !isDesktop ? 0 : -mousePos.x * 8;
  const bgY = prefersReducedMotion || !isDesktop ? 0 : -mousePos.y * 8;

  return (
    <section
      className="relative min-h-[92vh] lg:min-h-screen pt-28 pb-16 sm:pb-24 px-4 sm:px-8 md:px-12 flex items-center justify-center overflow-hidden bg-cream-100"
      aria-label="Welcome to Swadam Swadishta"
    >
      {/* Background Decorative Graphic Layer (Depth Layer 1) */}
      <div
        className="absolute inset-0 pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(${bgX}px, ${bgY}px, 0)`,
        }}
      >
        {/* Subtle Watermark Marathi Typography */}
        <div className="absolute top-1/4 -left-12 select-none opacity-[0.04] text-brown-900 font-devanagari text-[16vw] font-black leading-none pointer-events-none">
          स्वादिष्ट
        </div>
        <div className="absolute bottom-10 right-4 select-none opacity-[0.035] text-saffron-600 font-devanagari text-[14vw] font-black leading-none pointer-events-none">
          महाराष्ट्र
        </div>

        {/* Floating Decorative Leaves */}
        <div className="absolute top-24 left-[10%] opacity-40 animate-float-gentle">
          <DecorativeLeaf className="w-12 h-12 text-brandGreen-700" />
        </div>
        <div className="absolute top-1/3 right-[8%] opacity-35 animate-float-reverse">
          <DecorativeLeaf className="w-16 h-16 text-brandGreen-800 rotate-45" />
        </div>
        <div className="absolute bottom-28 left-[15%] opacity-30 animate-float-gentle">
          <DecorativeLeaf className="w-10 h-10 text-brandGreen-600 -rotate-12" />
        </div>

        {/* Saffron & Turmeric Ambient Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] rounded-full border border-turmeric-400/20 opacity-60 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[780px] h-[780px] rounded-full border border-dashed border-saffron-500/15 opacity-40 pointer-events-none animate-spin-slow" />
      </div>

      {/* Main Content Layout Container */}
      <div className="relative z-10 mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Typography & Brand Manifesto (Col 1-7) */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          
          {/* Top Pill / Pure Veg Assurance - [ADDED] Bilingual English + Devanagari */}
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-cream-200/90 border border-brandGreen-600/30 text-xs sm:text-sm font-semibold text-brandGreen-800 shadow-sm animate-in fade-in slide-in-from-bottom-2 duration-500">
            <PureVegBadge className="w-3.5 h-3.5 flex-shrink-0" />
            <span>100% Pure Vegetarian Maharashtrian Kitchen</span>
            <span className="text-saffron-600 font-bold">•</span>
            <span className="font-devanagari font-bold text-brandGreen-800">१००% शुद्ध शाकाहारी</span>
            <span className="text-saffron-600 font-bold">•</span>
            <span className="text-brown-700">Baner, Pune</span>
          </div>

          {/* Master Headings: Marathi first, followed by English interpretation */}
          <div className="space-y-2 sm:space-y-3">
            <div className="relative inline-block max-w-full">
              {/* [FIXED] Fluid Marathi headline responsive down to 320px viewports without horizontal clipping */}
              <h1 className="font-devanagari text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-brown-900 tracking-tight leading-[1.08] break-words">
                चव महाराष्ट्राची.
              </h1>
              {/* Animated Brush Underline */}
              <div className="w-full mt-1">
                <BrushUnderline className="w-full h-3 sm:h-4 text-turmeric-gold" />
              </div>
            </div>

            {/* [FIXED] Secondary English Typography with fluid scaling */}
            <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-saffron-600 tracking-normal">
              {restaurant.taglineEnglish}
            </h2>
          </div>

          {/* Supporting Microcopy */}
          <p className="max-w-xl text-base sm:text-lg text-brown-700 leading-relaxed font-sans font-normal">
            {restaurant.subheading} Steaming hot <span className="font-semibold text-brown-900">Poha & Upma</span>, legendary <span className="font-semibold text-saffron-600">Misal Pav</span>, satisfying <span className="font-semibold text-brandGreen-800">Lunch Thalis</span>, and crisp evening snacks.
          </p>

          {/* Feature Highlights Pills - [ADDED] Bilingual tags */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/80 border border-turmeric-400/50 text-brown-800 flex items-center gap-1.5 shadow-sm">
              <Sparkles className="w-3 h-3 text-saffron-600" />
              <span>Garma-Garam Breakfast</span>
              <span className="font-devanagari text-[11px] text-saffron-700 font-bold">• गरम नाश्ता</span>
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/80 border border-turmeric-400/50 text-brown-800 flex items-center gap-1.5 shadow-sm">
              <Utensils className="w-3 h-3 text-brandGreen-700" />
              <span>Wholesome ₹110 Thali</span>
              <span className="font-devanagari text-[11px] text-brandGreen-800 font-bold">• परिपूर्ण थाळी</span>
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/80 border border-turmeric-400/50 text-brown-800 flex items-center gap-1.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-saffron-500 animate-ping" />
              <span>Evening Kravings</span>
              <span className="font-devanagari text-[11px] text-brown-700 font-bold">• चवदार स्नॅक्स</span>
            </span>
          </div>

          {/* [FIXED] Action CTAs with full-width stack on small phones (w-full xs:w-auto) - [ADDED] Bilingual */}
          <div className="flex flex-col xs:flex-row flex-wrap items-stretch xs:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-4 w-full">
            {/* Primary: Menu Explorer */}
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full text-sm sm:text-base font-bold text-white bg-gradient-to-r from-saffron-600 to-saffron-500 hover:from-saffron-500 hover:to-turmeric-gold shadow-lg shadow-saffron-600/25 active:scale-95 transition-all duration-300 group w-full xs:w-auto"
            >
              <span>Explore the Menu</span>
              <span className="font-devanagari text-xs opacity-90 font-normal">/ मेनू पहा</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>

            {/* Secondary: Location & Storefront */}
            <a
              href="#location"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-full text-sm sm:text-base font-bold text-brown-900 bg-white hover:bg-cream-200 border-2 border-turmeric-400/60 shadow-sm active:scale-95 transition-all duration-200 w-full xs:w-auto"
            >
              <MapPin className="w-4 h-4 text-saffron-600" />
              <span>Visit Us</span>
              <span className="font-devanagari text-xs opacity-90 font-normal">/ भेट द्या</span>
            </a>

            {/* Tertiary: WhatsApp Quick Enquiry */}
            <a
              href={`https://wa.me/${restaurant.whatsappNumber}?text=Namaskar%20Swadam%20Swadishta!%20I%20would%20like%20to%20order/enquire.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-sm font-semibold text-brandGreen-800 bg-brandGreen-50 hover:bg-brandGreen-100 border border-brandGreen-600/30 active:scale-95 transition-all duration-200 w-full xs:w-auto"
              title="Chat with Swadam on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-brandGreen-700" />
              <span>WhatsApp Us</span>
              <span className="font-devanagari text-xs opacity-90 font-normal">/ संपर्क</span>
            </a>
          </div>

          {/* Authentic Location Snippet */}
          <div className="pt-2 text-xs text-brown-600 flex flex-wrap items-center justify-center lg:justify-start gap-1.5 font-medium">
            <span className="font-semibold text-brown-800">Shop No. 5</span>, 34 Western Pavilion, Rohan Seher Lane, Baner, Pune
            <span className="font-devanagari text-brandGreen-700 font-bold ml-1">• बाणेर, पुणे</span>
          </div>
        </div>

        {/* Right Interactive Living Food Composition (Col 8-12) */}
        <div className="lg:col-span-5 relative flex items-center justify-center mt-4 lg:mt-0">
          
          {/* Main Visual Poster Card Container */}
          <div
            className="relative w-full max-w-[440px] aspect-square rounded-3xl p-4 sm:p-6 bg-gradient-to-b from-white to-cream-200/90 border-2 border-turmeric-400/50 shadow-2xl shadow-brown-900/10 transition-transform duration-500 ease-out"
            style={{
              transform: `translate3d(${fgX}px, ${fgY}px, 0)`,
            }}
          >
            {/* Top Swirl Steam Decoration */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-center gap-1">
              <SteamSwirl className="w-6 h-10 text-saffron-500 animate-pulse-subtle" />
              <SteamSwirl className="w-5 h-8 text-turmeric-gold -mt-2 animate-pulse-subtle delay-300" />
            </div>

            {/* [FIXED] Floating Brand Badge: positioned safely inside padding on small screens */}
            <div className="absolute -top-3 left-1 sm:-top-4 sm:-left-4 z-20 bg-white rounded-2xl p-2 sm:p-2.5 border-2 border-brandGreen-600 shadow-lg flex items-center gap-1.5 sm:gap-2 group hover:scale-105 transition-transform">
              <Image
                src="/images/logo.png"
                alt="Swadam Swadishta Badge"
                width={40}
                height={40}
                className="object-contain w-8 h-8 sm:w-11 sm:h-11"
              />
              <div className="pr-1 text-left">
                <p className="text-[10px] sm:text-[11px] font-bold text-brown-900 leading-tight">SWADAM</p>
                <p className="text-[9px] sm:text-[10px] font-devanagari text-brandGreen-700 font-bold">स्वाद घराचा</p>
              </div>
            </div>

            {/* [FIXED] Floating Pune Favorite Badge: positioned safely inside padding on small screens */}
            <div className="absolute -top-3 right-1 sm:-top-4 sm:-right-4 z-20 bg-gradient-to-r from-saffron-600 to-turmeric-gold text-white rounded-2xl px-2.5 sm:px-3.5 py-1 sm:py-1.5 shadow-lg flex items-center gap-1 sm:gap-1.5">
              <SpiceSparkle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cream-100" />
              <span className="text-[11px] sm:text-xs font-bold tracking-tight">Baner Hotspot</span>
            </div>

            {/* Centerpiece Food Photography: The Authentic Pune Lunch Thali & Misal */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-brown-900/5 flex items-center justify-center group">
              <Image
                src="/images/hd_lunch_thali.jpg"
                alt="Maharashtrian Lunch Thali with 3 Chapatis, 2 Sabjis, Rice, Dal, Papad, and Pickle"
                fill
                sizes="(max-width: 768px) 100vw, 440px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                priority
              />

              {/* Bottom Gradient Overlay on Image */}
              <div className="absolute inset-0 bg-gradient-to-t from-brown-900/80 via-transparent to-transparent opacity-80" />

              {/* In-Photo Highlights - [ADDED] Bilingual */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-end justify-between text-white">
                <div>
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-turmeric-300 font-bold block">
                    Authentic Maharashtrian • अस्सल चव
                  </span>
                  <span className="font-display text-xl sm:text-2xl font-bold text-cream-50 leading-tight block">
                    Full Lunch Thali
                  </span>
                  <p className="text-[11px] sm:text-xs text-cream-200 mt-0.5 font-medium">
                    3 Chapati • 2 Sabji • Rice • Dal • Papad
                  </p>
                  <p className="font-devanagari text-[10px] text-turmeric-200 hidden xs:block">
                    ३ चपात्या • २ भाज्या • भात • वरण • पापड
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-cream-300 block">Starting at</span>
                  <span className="font-display text-2xl sm:text-3xl font-black text-turmeric-400">
                    ₹110
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Satellite Dish: Misal Pav (sm+ only to prevent mobile overlap) - [ADDED] Bilingual */}
            <div
              className="hidden sm:flex absolute -bottom-6 -left-6 z-20 bg-white rounded-2xl p-2 border-2 border-saffron-500 shadow-xl items-center gap-2.5 max-w-[210px] hover:scale-105 transition-transform duration-300"
            >
              <div className="relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 bg-cream-100">
                <Image
                  src="/images/hd_misal_pav.jpg"
                  alt="Pune Misal Pav"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <span className="text-[11px] font-bold text-brown-900 block leading-tight">
                  Spicy Misal Pav
                </span>
                <span className="text-[10px] text-saffron-600 font-semibold font-devanagari">
                  झणझणीत मिसळ
                </span>
                <span className="text-xs font-bold text-brown-800 block">₹90</span>
              </div>
            </div>

            {/* Floating Satellite Dish: Wada Pav (sm+ only to prevent mobile overlap) - [ADDED] Bilingual */}
            <div
              className="hidden sm:flex absolute -bottom-6 -right-4 z-20 bg-white rounded-2xl p-2 border-2 border-turmeric-400 shadow-xl items-center gap-2 max-w-[170px] hover:scale-105 transition-transform duration-300"
            >
              <div className="relative w-11 h-11 rounded-xl overflow-hidden flex-shrink-0 bg-cream-100">
                <Image
                  src="/images/hd_wada_pav.jpg"
                  alt="Maharashtra Wada Pav"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <span className="text-[11px] font-bold text-brown-900 block leading-tight">
                  Wada Pav
                </span>
                <span className="text-[10px] font-semibold text-brandGreen-700 font-devanagari block">
                  गरमा-गरम वडा
                </span>
                <span className="text-xs font-black text-brandGreen-700 block">₹25</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
