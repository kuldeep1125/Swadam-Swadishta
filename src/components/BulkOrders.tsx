"use client";

// [ADDED] Bulk Orders Section: Highlights authentic catering / gathering capability for Pune offices and events without checkout/payments
import React from "react";
import Image from "next/image";
import { restaurant } from "@/config/restaurant";
import { BrushUnderline, DecorativeLeaf, PureVegBadge } from "@/components/BrandMotifs";
import { Phone, MessageCircle, Users, CheckCircle2, Calendar } from "lucide-react";

export function BulkOrders() {
  return (
    <section id="bulk-orders" className="relative py-20 sm:py-28 px-4 sm:px-8 md:px-12 bg-cream-50 overflow-hidden scroll-mt-20" aria-label="Bulk Orders and Gatherings">
      
      {/* Decorative leaf motifs */}
      <div className="absolute top-10 right-10 opacity-30 pointer-events-none">
        <DecorativeLeaf className="w-20 h-20 text-brandGreen-700" />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* [FIXED] Padding adjusted to p-5 on small screens */}
        <div className="rounded-3xl p-5 xs:p-8 sm:p-12 md:p-16 bg-gradient-to-br from-white via-cream-100 to-cream-200 border-2 border-turmeric-400 shadow-xl relative overflow-hidden">
          
          {/* Subtle Banner Tag - [ADDED] Bilingual */}
          <div className="inline-flex flex-wrap items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-turmeric-400/30 border border-turmeric-gold text-xs font-bold text-brown-900 mb-6">
            <Users className="w-4 h-4 text-saffron-600 flex-shrink-0" />
            <span>SPECIAL OCCASIONS & OFFICE GATHERINGS</span>
            <span className="font-devanagari text-xs text-brandGreen-800 font-bold">• कौटुंबिक व कार्यालयीन कार्यक्रम</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content (Col 1-7) */}
            <div className="lg:col-span-7 space-y-4">
              {/* [FIXED] Fluid typography for heading - [ADDED] Bilingual */}
              <h2 className="font-display text-3xl xs:text-4xl sm:text-6xl font-black text-brown-900 tracking-tight leading-tight">
                Feeding a crowd?
              </h2>

              <div className="w-36 sm:w-40">
                <BrushUnderline className="w-full h-3 text-saffron-500" />
              </div>

              <span className="font-devanagari text-xl sm:text-2xl font-bold text-brandGreen-800 block">
                मोठ्या ऑर्डर्ससाठी संपर्क साधा (बल्क ऑर्डर्स)
              </span>

              <p className="text-base sm:text-lg text-brown-700 font-sans leading-relaxed">
                {restaurant.bulkOrders.description} Whether it&apos;s 10 or 100 boxes of morning Poha, piping hot Misal Pav, or satisfying Lunch Thalis, we ensure fresh packing and punctual service.
              </p>

              {/* Service Features - [ADDED] Bilingual */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  { en: "Freshly cooked in pure veg kitchen", mr: "शुद्ध शाकाहारी स्वयंपाक" },
                  { en: "Hygienic, leak-proof packaging", mr: "स्वच्छ व सुरक्षित पॅकिंग" },
                  { en: "Customized meal box combinations", mr: "आवडीनुसार मील बॉक्स" },
                  { en: "Advance booking & coordination", mr: "वेळेवर खात्रीशीर डिलिव्हरी" },
                ].map((perk, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-brown-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-brandGreen-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span>{perk.en}</span>
                      <span className="font-devanagari text-xs text-brandGreen-700 font-semibold block">({perk.mr})</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* [FIXED] CTAs stack cleanly on mobile - [ADDED] Bilingual */}
              <div className="flex flex-col xs:flex-row flex-wrap items-stretch xs:items-center gap-3 pt-6">
                <a
                  href={`https://wa.me/${restaurant.bulkOrders.whatsappNumber}?text=Namaskar%20Swadam%20Swadishta!%20I%20would%20like%20to%20enquire%20about%20a%20bulk%20order%20for%20an%20upcoming%20event.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-white bg-brandGreen-700 hover:bg-brandGreen-800 shadow-md active:scale-95 transition-all w-full xs:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brandGreen-500"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire on WhatsApp</span>
                  <span className="font-devanagari text-xs opacity-90 font-normal">/ व्हॉट्सॲप</span>
                </a>

                <a
                  href={`tel:${restaurant.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-brown-900 bg-white hover:bg-cream-200 border-2 border-turmeric-400 shadow-sm active:scale-95 transition-all w-full xs:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-500"
                >
                  <Phone className="w-4 h-4 text-saffron-600" />
                  <span>Call {restaurant.phone}</span>
                  <span className="font-devanagari text-xs opacity-90 font-normal">/ कॉल</span>
                </a>
              </div>

              <p className="text-xs text-brown-500 font-sans italic pt-1">
                {restaurant.bulkOrders.minNotice}
              </p>
            </div>

            {/* Right Graphic Badge (Col 8-12) */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="p-8 rounded-3xl bg-brown-900 text-cream-100 border-2 border-turmeric-400 text-center shadow-xl w-full max-w-[340px] space-y-4">
                <div className="relative w-16 h-16 mx-auto">
                  {/* // [FIXED] Explicit sizes attribute */}
                  <Image
                    src="/images/logo.png"
                    alt="Swadam Swadishta"
                    fill
                    sizes="64px"
                    className="object-contain"
                  />
                </div>
                <div className="space-y-1">
                  <span className="font-display text-2xl font-bold text-turmeric-gold block">
                    We Take Bulk Orders
                  </span>
                  <span className="font-devanagari text-lg text-cream-200 font-bold block">
                    घरगुती चव • मोठे प्रसंग
                  </span>
                </div>
                <p className="text-xs text-cream-300 font-sans leading-relaxed">
                  Offices in Baner & Balewadi, family poojas, birthdays, and sports gatherings.
                </p>
                <div className="pt-2 border-t border-white/20 text-xs font-mono text-turmeric-300">
                  {restaurant.phone}
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
