"use client";

// [ADDED] Location Section with stylized custom SVG map of Baner, Pune landmarks and direct directions
import React from "react";
import Image from "next/image";
import { restaurant } from "@/config/restaurant";
import { BrushUnderline, DecorativeLeaf, PureVegBadge } from "@/components/BrandMotifs";
import { MapPin, Navigation, Phone, Instagram, Clock, ArrowUpRight } from "lucide-react";

export function LocationSection() {
  return (
    <section id="location" className="relative py-24 sm:py-32 px-4 sm:px-8 md:px-12 bg-cream-50 overflow-hidden" aria-label="Restaurant Location and Directions">
      
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream-200 border border-turmeric-400/50 text-xs font-bold text-brown-800">
            <MapPin className="w-4 h-4 text-saffron-600" />
            <span>FIND SWADAM IN BANER</span>
          </div>

          {/* [FIXED] Fluid typography for Location heading */}
          <h2 className="font-display text-3xl xs:text-4xl sm:text-6xl md:text-7xl font-black text-brown-900 tracking-tight leading-tight">
            Come taste Maharashtra.
          </h2>

          <div className="w-40 mx-auto">
            <BrushUnderline className="w-full h-3 text-turmeric-gold" />
          </div>

          <span className="font-devanagari text-xl sm:text-2xl font-bold text-brandGreen-800 block">
            भेट द्या — बाणेर, पुणे
          </span>
        </div>

        {/* Location Box & Stylized Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Details Card (Col 1-5) */}
          <div className="lg:col-span-5 rounded-3xl p-5 xs:p-6 sm:p-8 bg-white border-2 border-turmeric-400/60 shadow-xl flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-brandGreen-600">
                  <Image
                    src="/images/logo.png"
                    alt="Swadam Swadishta"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-brown-900 leading-tight">
                    SWADAM SWADISHTA
                  </h3>
                  <span className="font-devanagari text-xs text-brandGreen-700 font-bold">
                    चव महाराष्ट्राची
                  </span>
                </div>
              </div>

              {/* Formatted Address */}
              <div className="space-y-1.5 text-sm sm:text-base text-brown-800 font-sans border-t border-cream-200 pt-4">
                <p className="font-bold text-brown-900 text-lg">
                  {restaurant.address.shopNo}, {restaurant.address.building}
                </p>
                <p>{restaurant.address.lane}</p>
                <p>{restaurant.address.road}</p>
                <p className="font-semibold text-brandGreen-800">
                  {restaurant.address.area}, {restaurant.address.city} – {restaurant.address.postalCode}
                </p>
                <p className="text-xs text-brown-500 pt-1">
                  Maharashtra, India
                </p>
              </div>

              {/* Operating Hours */}
              <div className="mt-6 pt-4 border-t border-cream-200 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-brown-700 uppercase tracking-wider">
                  <Clock className="w-4 h-4 text-saffron-600" />
                  <span>Serving Timings</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-brown-800">
                  <div className="bg-cream-100 p-2.5 rounded-xl border border-turmeric-400/30">
                    <span className="font-bold block text-saffron-700">Breakfast</span>
                    <span>{restaurant.timings.breakfast}</span>
                  </div>
                  <div className="bg-cream-100 p-2.5 rounded-xl border border-turmeric-400/30">
                    <span className="font-bold block text-brandGreen-700">Lunch Thali</span>
                    <span>{restaurant.timings.lunch}</span>
                  </div>
                  <div className="col-span-2 bg-cream-100 p-2.5 rounded-xl border border-turmeric-400/30 flex items-center justify-between">
                    <div>
                      <span className="font-bold block text-brown-900">Evening Snacks</span>
                      <span>{restaurant.timings.evening}</span>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-brandGreen-700 text-white">
                      All 7 Days
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct CTAs */}
            <div className="pt-4 border-t border-cream-200 flex flex-col sm:flex-row gap-3">
              <a
                href={restaurant.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-gradient-to-r from-saffron-600 to-saffron-500 hover:from-saffron-500 hover:to-turmeric-gold text-white font-bold text-sm shadow-md active:scale-95 transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions ↗</span>
              </a>

              <a
                href={`tel:${restaurant.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-cream-200 hover:bg-turmeric-400/40 text-brown-900 font-bold text-sm border border-turmeric-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-brandGreen-700" />
                <span>Call</span>
              </a>
            </div>
          </div>

          {/* Right Stylized SVG Map Representation (Col 6-12) */}
          {/* [FIXED] Responsive padding and min-height for small mobile screens */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden bg-gradient-to-br from-[#2D1810] to-[#1A0E08] border-2 border-turmeric-400/60 p-4 xs:p-6 sm:p-8 flex flex-col justify-between text-cream-100 relative min-h-[340px] sm:min-h-[420px] shadow-2xl">
            
            {/* Background Stylized Road Grid Network */}
            <svg
              className="absolute inset-0 w-full h-full opacity-25 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="roadPattern" width="120" height="120" patternUnits="userSpaceOnUse">
                  <path d="M 0 60 L 120 60 M 60 0 L 60 120" stroke="#FFF7E3" strokeWidth="2" strokeDasharray="6 4" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#roadPattern)" />
              {/* Major Roads in Baner */}
              <line x1="10%" y1="90%" x2="90%" y2="10%" stroke="#FFB703" strokeWidth="6" strokeLinecap="round" opacity="0.6" />
              <line x1="20%" y1="10%" x2="80%" y2="90%" stroke="#E85D04" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
              <line x1="5%" y1="50%" x2="95%" y2="50%" stroke="#2D6A4F" strokeWidth="5" strokeLinecap="round" opacity="0.6" />
            </svg>

            {/* Top Map Labels */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 text-xs">
                <span className="text-turmeric-400 font-bold">Baner, Pune</span>
                <span className="text-cream-300 ml-1">411069</span>
              </div>
              <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 text-xs text-cream-200">
                Pan Card Club Road Area
              </div>
            </div>

            {/* Center Animated Location Pin Marker */}
            <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center py-6">
              
              {/* Pulsing Target Waves */}
              <div className="relative flex items-center justify-center">
                <div className="absolute w-24 h-24 rounded-full bg-saffron-500/20 animate-ping" />
                <div className="absolute w-16 h-16 rounded-full bg-turmeric-gold/30 animate-pulse" />
                
                {/* Pin Badge */}
                <div className="relative z-20 w-16 h-16 rounded-full bg-white border-4 border-saffron-500 shadow-2xl flex items-center justify-center p-1 group hover:scale-110 transition-transform">
                  <Image
                    src="/images/logo.png"
                    alt="Swadam Pin"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Pin Callout Bubble */}
              <div className="mt-4 bg-white text-brown-900 rounded-2xl p-4 shadow-2xl border-2 border-turmeric-400 max-w-xs text-center">
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <PureVegBadge className="w-3.5 h-3.5" />
                  <span className="font-display font-black text-sm">SWADAM SWADISHTA</span>
                </div>
                <p className="text-xs text-brown-700 font-sans font-medium">
                  Shop No. 5, 34 Western Pavilion, Rohan Seher Lane
                </p>
                <div className="mt-2 pt-2 border-t border-cream-200 text-[11px] font-bold text-saffron-600">
                  Ready to serve you fresh & warm!
                </div>
              </div>
            </div>

            {/* Bottom Landmark Breadcrumbs */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pt-4 border-t border-white/20 text-xs text-cream-300">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-brandGreen-400" />
                Near Rohan Seher
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-turmeric-400" />
                Pan Card Club Road
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-saffron-500" />
                Baner Pune
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
