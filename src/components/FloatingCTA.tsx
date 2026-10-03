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
          aria-label="Visit Swadam Swadishta on Google Maps (भेट द्या)"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-saffron-600 to-turmeric-gold text-white font-bold text-xs shadow-md hover:scale-105 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turmeric-gold"
        >
          <MapPin className="w-3.5 h-3.5" />
          <span>Visit Swadam / भेट द्या</span>
          <ArrowUpRight className="w-3 h-3 opacity-80" />
        </a>

        <a
          href={`https://wa.me/${restaurant.whatsappNumber}?text=Namaskar%20Swadam%20Swadishta!%20I%20would%20like%20to%20enquire%20about%20your%20menu.`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Enquiry (विचारपूस)"
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-cream-100 font-semibold text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turmeric-gold"
          title="WhatsApp Enquiry (विचारपूस)"
        >
          <MessageCircle className="w-3.5 h-3.5 text-brandGreen-400" />
          <span>Enquire / विचारपूस</span>
        </a>

        <a
          href={`tel:${restaurant.phoneRaw}`}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-cream-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turmeric-gold"
          title="Call Restaurant (कॉल करा)"
          aria-label="Call Restaurant +91 84211 02810"
        >
          <Phone className="w-3.5 h-3.5 text-turmeric-400" />
        </a>
      </div>

      {/* [FIXED] Mobile Sticky Bottom Action Bar with iOS safe-area-inset-bottom support and fluid bilingual labels */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 px-2 sm:px-3 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] bg-brown-900/95 backdrop-blur-lg border-t border-turmeric-400/40 shadow-2xl flex items-center justify-around gap-1.5 sm:gap-2 animate-in slide-in-from-bottom duration-300">
        {/* Call Button */}
        <a
          href={`tel:${restaurant.phoneRaw}`}
          aria-label="Call Restaurant"
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 min-h-[44px] rounded-xl bg-white/10 text-cream-100 active:scale-95 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turmeric-gold"
        >
          <Phone className="w-4 h-4 text-turmeric-400 mb-0.5 flex-shrink-0" />
          <span className="text-[10px] xs:text-[11px] font-bold leading-tight text-center">
            Call <span className="hidden xs:inline">/ कॉल</span>
          </span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${restaurant.whatsappNumber}?text=Namaskar%20Swadam%20Swadishta!%20I%20would%20like%20to%20enquire%20about%20your%20menu.`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Enquiry"
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 min-h-[44px] rounded-xl bg-brandGreen-700 text-white active:scale-95 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brandGreen-400"
        >
          <MessageCircle className="w-4 h-4 mb-0.5 flex-shrink-0" />
          <span className="text-[10px] xs:text-[11px] font-bold leading-tight text-center">
            WhatsApp <span className="hidden xs:inline">/ व्हॉट्सॲप</span>
          </span>
        </a>

        {/* Directions Button */}
        <a
          href={restaurant.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Get Directions on Google Maps"
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 min-h-[44px] rounded-xl bg-gradient-to-r from-saffron-600 to-turmeric-gold text-white shadow-md active:scale-95 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turmeric-gold"
        >
          <MapPin className="w-4 h-4 mb-0.5 flex-shrink-0" />
          <span className="text-[10px] xs:text-[11px] font-bold leading-tight text-center">
            Directions <span className="hidden xs:inline">/ मार्ग</span>
          </span>
        </a>
      </div>
    </>
  );
}
