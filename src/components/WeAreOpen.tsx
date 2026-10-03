"use client";

// [ADDED] "We Are Open" Moment: Directly translating the authentic promotional banner artwork into an animated digital celebration
import React from "react";
import Image from "next/image";
import { restaurant } from "@/config/restaurant";
import { BrushStroke, DecorativeLeaf, ToranMotif, PureVegBadge } from "@/components/BrandMotifs";
import { MapPin, Phone, MessageCircle } from "lucide-react";

export function WeAreOpen() {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-8 md:px-12 bg-gradient-to-b from-cream-100 via-white to-cream-50 overflow-hidden" aria-label="We Are Open">
      
      {/* Decorative Toran Garland along the top */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none opacity-80">
        <ToranMotif className="w-full h-8 text-saffron-500" />
      </div>

      <div className="mx-auto max-w-6xl">
        
        {/* Main Artwork Badge Box inspired by the physical storefront poster */}
        <div className="relative rounded-3xl p-5 xs:p-8 sm:p-12 md:p-16 bg-gradient-to-br from-[#FFF9EE] via-[#FFF7E3] to-[#FDF2CE] border-4 border-turmeric-400/60 shadow-2xl overflow-hidden text-center">
          
          {/* Subtle Corner Leaves */}
          <div className="absolute -top-6 -left-6 opacity-30 pointer-events-none">
            <DecorativeLeaf className="w-24 h-24 text-brandGreen-700" />
          </div>
          <div className="absolute -bottom-6 -right-6 opacity-30 pointer-events-none">
            <DecorativeLeaf className="w-24 h-24 text-brandGreen-700 rotate-180" />
          </div>

          {/* Top Brand Logo & Pure Veg */}
          <div className="flex flex-col items-center justify-center space-y-2 mb-6">
            <div className="relative w-14 h-14 sm:w-20 sm:h-20">
              <Image
                src="/images/logo.png"
                alt="Swadam Swadishta Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-brandGreen-600/30 text-xs font-bold text-brandGreen-800">
              <PureVegBadge className="w-3.5 h-3.5" />
              <span>100% PURE VEGETARIAN</span>
            </div>
          </div>

          {/* [FIXED] Dramatic "WE ARE OPEN" Typographic Stamp with fluid scaling */}
          <div className="relative inline-block my-2">
            <span className="font-brush text-2xl xs:text-3xl sm:text-4xl text-saffron-600 font-bold block -mb-2">
              We are
            </span>
            <h2 className="font-display text-5xl xs:text-6xl sm:text-8xl md:text-9xl font-black text-brown-900 tracking-tight leading-none uppercase drop-shadow-sm">
              OPEN.
            </h2>
            <div className="w-36 xs:w-48 sm:w-64 mx-auto mt-2">
              <BrushStroke className="w-full h-3.5 sm:h-4 text-turmeric-gold" />
            </div>
          </div>

          {/* Subtitle */}
          <p className="font-display text-lg xs:text-xl sm:text-2xl font-bold text-brown-800 mt-4">
            Come, enjoy delicious food, freshly served!
          </p>
          <span className="font-devanagari text-base xs:text-lg sm:text-xl text-saffron-600 font-bold block mt-1">
            ताजेतवाने अन्न, आत्मीय स्वागत!
          </span>

          {/* The 3 Core Badges from the Physical Poster */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto my-12">
            
            {/* Badge 1: Tasty Food */}
            <div className="flex flex-col items-center p-4 rounded-2xl bg-white/80 border border-turmeric-400/40 shadow-sm">
              <div className="relative w-14 h-14 mb-2">
                <Image
                  src="/images/badge_tasty.png"
                  alt="Tasty Food"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-display font-bold text-base text-brown-900">Tasty Food</span>
              <span className="text-xs text-brown-600 font-sans">चविष्ट घरगुती चव</span>
            </div>

            {/* Badge 2: Quick Service */}
            <div className="flex flex-col items-center p-4 rounded-2xl bg-white/80 border border-turmeric-400/40 shadow-sm">
              <div className="relative w-14 h-14 mb-2">
                <Image
                  src="/images/badge_quick.png"
                  alt="Quick Service"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-display font-bold text-base text-brown-900">Quick Service</span>
              <span className="text-xs text-brown-600 font-sans">त्वरित आणि तत्पर सेवा</span>
            </div>

            {/* Badge 3: Warm Ambience */}
            <div className="flex flex-col items-center p-4 rounded-2xl bg-white/80 border border-turmeric-400/40 shadow-sm">
              <div className="relative w-14 h-14 mb-2">
                <Image
                  src="/images/badge_warm.png"
                  alt="Warm Ambience"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-display font-bold text-base text-brown-900">Warm Ambience</span>
              <span className="text-xs text-brown-600 font-sans">आपुलकीचे वातावरण</span>
            </div>

          </div>

          {/* Meal Timings Ribbon */}
          <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 py-3 px-6 rounded-2xl bg-brown-900 text-cream-100 font-medium text-xs sm:text-sm shadow-md mb-8">
            <span className="font-bold text-turmeric-300">Breakfast</span>
            <span className="text-saffron-500 font-bold">•</span>
            <span className="font-bold text-cream-100">Lunch</span>
            <span className="text-saffron-500 font-bold">•</span>
            <span className="font-bold text-turmeric-300">Evening Snacks</span>
            <span className="text-saffron-500 font-bold">•</span>
            <span className="text-brandGreen-400 font-bold">Open Daily</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={restaurant.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-saffron-600 to-saffron-500 hover:from-saffron-500 hover:to-turmeric-gold shadow-lg active:scale-95 transition-all"
            >
              <MapPin className="w-4 h-4" />
              <span>Visit Us Today!</span>
            </a>

            <a
              href={`tel:${restaurant.phoneRaw}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-brown-900 bg-white hover:bg-cream-200 border-2 border-turmeric-400 shadow-sm active:scale-95 transition-all"
            >
              <Phone className="w-4 h-4 text-brandGreen-700" />
              <span>{restaurant.phone}</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
