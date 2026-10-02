"use client";

// [ADDED] Final CTA & Footer Component: Powerful closing statement with animated Devanagari typography reveal and substantial brand footer
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { restaurant } from "@/config/restaurant";
import { BrushUnderline, DecorativeLeaf, PureVegBadge, SpiceSparkle } from "@/components/BrandMotifs";
import { MapPin, Phone, Instagram, MessageCircle, ArrowUpRight, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#2D1810] via-[#1A0E08] to-[#120905] text-cream-100 overflow-hidden" aria-label="Footer & Final Call to Action">
      
      {/* ========================================================================= */}
      {/* FINAL HIGH-IMPACT CTA ("Hungry Yet? Come Taste Maharashtra.")             */}
      {/* ========================================================================= */}
      <div className="relative py-24 sm:py-32 px-4 sm:px-8 md:px-12 border-b border-white/10">
        
        {/* Ambient Decorative Leaves */}
        <div className="absolute top-12 left-8 opacity-20 pointer-events-none">
          <DecorativeLeaf className="w-28 h-28 text-turmeric-400" />
        </div>
        <div className="absolute bottom-12 right-12 opacity-15 pointer-events-none">
          <DecorativeLeaf className="w-36 h-36 text-saffron-500 rotate-45" />
        </div>

        <div className="relative mx-auto max-w-5xl text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-turmeric-400/40 text-xs font-bold text-turmeric-300">
            <SpiceSparkle className="w-3.5 h-3.5" />
            <span>AUTHENTIC TASTE OF MAHARASHTRA IN BANER</span>
          </div>

          <div className="space-y-2">
            <span className="font-brush text-3xl sm:text-5xl text-saffron-400 font-bold block">
              Hungry yet?
            </span>
            <h2 className="font-display text-5xl sm:text-7xl md:text-8xl font-black text-cream-50 tracking-tight leading-none">
              Come taste Maharashtra.
            </h2>
            <div className="w-48 sm:w-64 mx-auto pt-2">
              <BrushUnderline className="w-full h-4 text-turmeric-gold" />
            </div>
          </div>

          <p className="max-w-xl mx-auto text-base sm:text-lg text-cream-200 font-sans leading-relaxed">
            Fresh hot Poha at sunrise, a fulfilling ₹110 Thali for lunch, and crispy Wada Pav & Bhaji in the evening. We are ready to serve you!
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <a
              href={restaurant.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-saffron-600 to-turmeric-gold hover:from-saffron-500 hover:to-turmeric-400 text-white font-bold text-sm sm:text-base shadow-xl hover:shadow-saffron-500/25 active:scale-95 transition-all"
            >
              <MapPin className="w-4 h-4" />
              <span>Get Directions</span>
              <ArrowUpRight className="w-4 h-4 opacity-80" />
            </a>

            <a
              href={`tel:${restaurant.phoneRaw}`}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-cream-100 font-bold text-sm sm:text-base border border-white/20 active:scale-95 transition-all"
            >
              <Phone className="w-4 h-4 text-turmeric-400" />
              <span>Call {restaurant.phone}</span>
            </a>

            <a
              href={`https://wa.me/${restaurant.whatsappNumber}?text=Namaskar%20Swadam%20Swadishta!%20I%20am%20planning%20to%20visit.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-brandGreen-700 hover:bg-brandGreen-800 text-white font-bold text-sm sm:text-base shadow-lg active:scale-95 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* MAIN FOOTER DIRECTORY & BRAND STATEMENT                                   */}
      {/* ========================================================================= */}
      <div className="py-16 sm:py-24 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          
          {/* Brand Column (Col 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-brandGreen-500 bg-white p-0.5">
                <Image
                  src="/images/logo.png"
                  alt="Swadam Swadishta"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-display font-black text-2xl text-cream-50 tracking-tight">
                  SWADAM SWADISHTA
                </h3>
                <span className="font-devanagari text-sm font-bold text-brandGreen-400">
                  {restaurant.brandNameMarathi} • {restaurant.taglineMarathi}
                </span>
              </div>
            </div>

            <p className="text-sm text-cream-300 leading-relaxed font-sans max-w-sm">
              Authentic Maharashtrian vegetarian breakfast, lunch and evening snacks freshly served in Baner, Pune. 100% Pure Veg kitchen.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={restaurant.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-saffron-600 text-cream-100 flex items-center justify-center transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={`tel:${restaurant.phoneRaw}`}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-brandGreen-600 text-cream-100 flex items-center justify-center transition-colors"
                aria-label="Call Us"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href={restaurant.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-turmeric-gold hover:text-brown-900 text-cream-100 flex items-center justify-center transition-colors"
                aria-label="Find on Google Maps"
              >
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links (Col 6-8) */}
          <div className="lg:col-span-3 space-y-3 font-sans">
            <h4 className="font-display font-bold text-base text-turmeric-gold uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-cream-200">
              <li>
                <a href="#menu" className="hover:text-saffron-400 transition-colors">
                  Breakfast Menu (न्याहारी)
                </a>
              </li>
              <li>
                <a href="#thali" className="hover:text-saffron-400 transition-colors">
                  Lunch Thali (लंच थाळी)
                </a>
              </li>
              <li>
                <a href="#snacks" className="hover:text-saffron-400 transition-colors">
                  Evening Snacks (स्नॅक्स)
                </a>
              </li>
              <li>
                <a href="#storefront" className="hover:text-saffron-400 transition-colors">
                  Storefront & Dine-in
                </a>
              </li>
              <li>
                <a href="#bulk-orders" className="hover:text-saffron-400 transition-colors">
                  Bulk Orders & Gatherings
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-saffron-400 transition-colors">
                  Google Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Timings (Col 9-12) */}
          <div className="lg:col-span-4 space-y-3 font-sans">
            <h4 className="font-display font-bold text-base text-turmeric-gold uppercase tracking-wider">
              Visit the Restaurant
            </h4>
            <div className="text-sm text-cream-200 leading-relaxed space-y-1">
              <p className="font-bold text-white">
                {restaurant.address.shopNo}, {restaurant.address.building}
              </p>
              <p>{restaurant.address.lane}, {restaurant.address.road}</p>
              <p>{restaurant.address.area}, {restaurant.address.city} – {restaurant.address.postalCode}</p>
              <p className="text-xs text-turmeric-300 font-mono pt-1">
                Phone: {restaurant.phone}
              </p>
              <p className="text-xs text-cream-300">
                Instagram: {restaurant.instagramHandle}
              </p>
            </div>

            <div className="pt-2 text-xs text-cream-300">
              <span className="font-semibold text-turmeric-gold block">Hours:</span>
              <span>Daily 7:30 AM – 9:30 PM</span>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* FINAL FOOTER GRAND MARATHI STATEMENT REVEAL                               */}
        {/* ========================================================================= */}
        <div className="pt-12 text-center select-none overflow-hidden space-y-2">
          <div className="font-display font-black text-6xl sm:text-8xl md:text-9xl text-white/5 tracking-tight leading-none">
            SWADAM
          </div>
          <div className="font-devanagari font-black text-5xl sm:text-7xl md:text-8xl text-turmeric-gold/20 -mt-6 sm:-mt-10 leading-none">
            स्वादिष्ट
          </div>
          <div className="font-devanagari font-black text-3xl sm:text-5xl md:text-6xl text-saffron-500/80 -mt-2 sm:-mt-4">
            चव महाराष्ट्राची.
          </div>
        </div>

        {/* Bottom Copyright & Pure Veg Badge */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-300/80 font-sans">
          <div className="flex items-center gap-2">
            <PureVegBadge className="w-3.5 h-3.5" />
            <span>100% Pure Vegetarian Kitchen • {restaurant.fssaiNumber}</span>
          </div>

          <p>
            © {new Date().getFullYear()} {restaurant.name}. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
