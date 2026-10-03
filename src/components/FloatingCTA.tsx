"use client";

// [ADDED] Floating CTA: Magnetic pill for desktop and streamlined bottom action bar for mobile devices
import React, { useState, useEffect } from "react";
import { restaurant } from "@/config/restaurant";
import { Phone, MessageCircle, MapPin, ArrowUpRight } from "lucide-react";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating CTA once user has scrolled past hero (~350px)
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Desktop Floating Magnetic Pill (Bottom Right) */}
      <div className="hidden lg:flex fixed bottom-6 right-6 z-40 items-center gap-2 p-1.5 rounded-full bg-brown-900/95 backdrop-blur-md border border-turmeric-400/60 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-300">
        <a
          href={restaurant.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-saffron-600 to-turmeric-gold text-white font-bold text-xs shadow-md hover:scale-105 active:scale-95 transition-all"
        >
          <MapPin className="w-3.5 h-3.5" />
          <span>Visit Swadam</span>
          <ArrowUpRight className="w-3 h-3 opacity-80" />
        </a>

        <a
          href={`https://wa.me/${restaurant.whatsappNumber}?text=Namaskar%20Swadam%20Swadishta!%20I%20would%20like%20to%20enquire%20about%20your%20menu.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-cream-100 font-semibold text-xs transition-colors"
          title="WhatsApp Enquiry"
        >
          <MessageCircle className="w-3.5 h-3.5 text-brandGreen-400" />
          <span>Enquire</span>
        </a>

        <a
          href={`tel:${restaurant.phoneRaw}`}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-cream-100 transition-colors"
          title="Call Restaurant"
          aria-label="Call Restaurant"
        >
          <Phone className="w-3.5 h-3.5 text-turmeric-400" />
        </a>
      </div>

      {/* [FIXED] Mobile Sticky Bottom Action Bar with iOS safe-area-inset-bottom support */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 px-3 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] bg-brown-900/95 backdrop-blur-lg border-t border-turmeric-400/40 shadow-2xl flex items-center justify-around gap-2 animate-in slide-in-from-bottom duration-300">
        {/* Call Button */}
        <a
          href={`tel:${restaurant.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-white/10 text-cream-100 text-xs font-bold active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-turmeric-400" />
          <span>Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${restaurant.whatsappNumber}?text=Namaskar%20Swadam%20Swadishta!%20I%20would%20like%20to%20enquire%20about%20your%20menu.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-brandGreen-700 text-white text-xs font-bold active:scale-95 transition-transform"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        {/* Directions Button */}
        <a
          href={restaurant.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-gradient-to-r from-saffron-600 to-turmeric-gold text-white text-xs font-bold shadow-md active:scale-95 transition-transform"
        >
          <MapPin className="w-4 h-4" />
          <span>Directions</span>
        </a>
      </div>
    </>
  );
}
