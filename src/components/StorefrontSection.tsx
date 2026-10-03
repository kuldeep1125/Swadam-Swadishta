"use client";

// [ADDED] Authentic Storefront Section: Reveals the real physical restaurant in Baner, building visitor trust and brand authenticity
import React from "react";
import Image from "next/image";
import { restaurant } from "@/config/restaurant";
import { BrushUnderline, DecorativeLeaf, PureVegBadge } from "@/components/BrandMotifs";
import { MapPin, Navigation, Clock, ShieldCheck, ArrowUpRight } from "lucide-react";

export function StorefrontSection() {
  const [activePhoto, setActivePhoto] = React.useState<"street" | "counter">("street");

  const photos = {
    street: {
      src: "/images/real_storefront_street.png",
      alt: "Authentic Swadam Swadishta street storefront at Shop No. 5, Baner Pune",
      badge: "STREET VIEW & SEATING",
      title: "Real Shopfront on Pan Card Club Road",
      desc: "Outdoor street seating, marigold toran, and clean welcoming facade in Baner, Pune.",
    },
    counter: {
      src: "/images/storefront.jpg",
      alt: "Swadam Swadishta counter and welcoming entrance",
      badge: "SERVICE COUNTER",
      title: "Welcoming Counter & Kitchen",
      desc: "Spotless hygienic kitchen counter with fresh Maharashtrian dishes prepared before you.",
    },
  };

  const current = photos[activePhoto];

  return (
    <section id="storefront" className="relative py-24 sm:py-32 px-4 sm:px-8 md:px-12 bg-cream-50 overflow-hidden" aria-label="Our Real Storefront in Baner Pune">
      
      {/* Background grain */}
      <div className="absolute inset-0 bg-grain opacity-50 pointer-events-none" />

      <div className="mx-auto max-w-7xl relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream-200 border border-turmeric-400/50 text-xs font-bold text-brown-800">
            <ShieldCheck className="w-4 h-4 text-brandGreen-700" />
            <span>REAL PHYSICAL DESTINATION IN PUNE</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-brown-900 tracking-tight leading-tight">
            Come find us.
          </h2>

          <div className="w-32 mx-auto">
            <BrushUnderline className="w-full h-3 text-saffron-500" />
          </div>

          <p className="text-base sm:text-lg text-brown-700 font-sans leading-relaxed">
            Step into our welcoming shop on Pan Card Club Road, Baner. Pull up a chair under the marigold toran, smell the sizzling tempering, and enjoy genuine Maharashtrian hospitality.
          </p>

          {/* [FIXED] Photo Switcher Pills with flex-wrap and responsive sizing for small screens */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setActivePhoto("street")}
              className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                activePhoto === "street"
                  ? "bg-brown-900 text-cream-100 shadow-md scale-105"
                  : "bg-white text-brown-800 border border-turmeric-400/60 hover:bg-cream-100"
              }`}
            >
              🏢 Street Front & Outdoor View
            </button>
            <button
              onClick={() => setActivePhoto("counter")}
              className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                activePhoto === "counter"
                  ? "bg-brown-900 text-cream-100 shadow-md scale-105"
                  : "bg-white text-brown-800 border border-turmeric-400/60 hover:bg-cream-100"
              }`}
            >
              🛎️ Entrance & Counter View
            </button>
          </div>
        </div>

        {/* Real Storefront Visual Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Real Photo Frame (Col 1-8) */}
          <div className="lg:col-span-8 rounded-3xl overflow-hidden bg-white p-2.5 sm:p-4 border-2 border-turmeric-400 shadow-2xl group">
            {/* [FIXED] Responsive height starting at 260px on 320px screens */}
            <div className="relative w-full h-[260px] xs:h-[320px] sm:h-[460px] md:h-[540px] rounded-2xl overflow-hidden bg-brown-900">
              <Image
                src={current.src}
                alt={current.alt}
                fill
                className="object-contain sm:object-cover object-center group-hover:scale-105 transition-transform duration-700"
                priority
              />
              
              {/* [FIXED] Badge positioned safely within image bounds on small screens */}
              <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 max-w-[calc(100%-1.25rem)] bg-brown-900/90 text-white backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl border border-turmeric-400/50 flex items-center gap-2 shadow-lg">
                <PureVegBadge className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                <div className="min-w-0">
                  <span className="font-display font-bold text-[11px] sm:text-sm block leading-tight truncate">
                    SS KITCHEN&apos;S SWADAM SWADISHTA
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-turmeric-300 font-mono block truncate">
                    {restaurant.fssaiNumber} • {current.badge}
                  </span>
                </div>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-4 sm:right-4 bg-gradient-to-t from-black/85 via-black/50 to-transparent p-3 sm:p-4 rounded-xl text-white">
                <p className="font-display text-base sm:text-xl font-bold">
                  {current.title}
                </p>
                <p className="text-xs sm:text-sm text-cream-200 mt-0.5 line-clamp-2 sm:line-clamp-none">
                  {current.desc}
                </p>
              </div>
            </div>
          </div>

          {/* Location Info & Quick Action Card (Col 9-12) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Address Card */}
            <div className="p-4 xs:p-6 rounded-3xl bg-white border border-turmeric-400/50 shadow-md">
              <div className="flex items-center gap-2 text-saffron-600 mb-3">
                <MapPin className="w-5 h-5" />
                <span className="font-display font-bold text-lg text-brown-900">Baner Location</span>
              </div>
              <p className="text-sm text-brown-800 leading-relaxed font-sans">
                <span className="font-bold">{restaurant.address.shopNo}, {restaurant.address.building}</span><br />
                {restaurant.address.lane},<br />
                {restaurant.address.road},<br />
                {restaurant.address.area}, {restaurant.address.city} – {restaurant.address.postalCode}
              </p>

              <div className="mt-4 pt-4 border-t border-cream-200">
                <div className="flex items-center gap-2 text-xs text-brown-600 font-semibold mb-1">
                  <Clock className="w-4 h-4 text-brandGreen-700" />
                  <span>Daily Timings</span>
                </div>
                <p className="text-xs text-brown-700 leading-tight">
                  7:30 AM – 9:30 PM (Fresh cooking all day)
                </p>
              </div>
            </div>

            {/* Direct Google Maps Navigation Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-brown-900 to-brown-800 text-cream-100 border border-turmeric-400 shadow-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-turmeric-300">
                PLAN YOUR VISIT
              </span>
              <h3 className="font-display text-2xl font-bold text-cream-50 mt-1 mb-2">
                Easy to Reach in Baner
              </h3>
              <p className="text-xs text-cream-200 leading-relaxed font-sans mb-5">
                Located near Pan Card Club Road, conveniently accessible from Balewadi High Street, Mumbai-Pune Expressway, and Baner Road.
              </p>
              
              <a
                href={restaurant.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-gradient-to-r from-saffron-600 to-turmeric-gold text-white font-bold text-sm shadow-lg hover:shadow-saffron-500/30 active:scale-95 transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps</span>
                <ArrowUpRight className="w-4 h-4 opacity-80" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
