"use client";

// [ADDED] Food Showcase: Cinematic gallery with parallax depth, oversized authentic image crops and appetizing food storytelling
import React from "react";
import Image from "next/image";
import { BrushUnderline, DecorativeLeaf, SpiceSparkle } from "@/components/BrandMotifs";

export function FoodShowcase() {
  const showcaseItems = [
    {
      title: "Spicy Misal Pav",
      marathi: "झणझणीत मिसळ पाव",
      desc: "Pune's signature spicy moth bean curry crowned with crunchy farsan and served with buttery pav.",
      image: "/images/hd_misal_pav.jpg",
      tag: "Pune Icon",
      tagMarathi: "पुणेरी ओळख",
      price: "₹90",
    },
    {
      title: "Poha & Peanuts",
      marathi: "कांदे पोहे",
      desc: "Fluffy flattened rice with roasted peanuts, fresh coriander, mustard temper, and lemon.",
      image: "/images/hd_poha_plate.jpg",
      tag: "Morning Must",
      tagMarathi: "सकाळचा नाश्ता",
      price: "₹40",
    },
    {
      title: "Full Lunch Thali",
      marathi: "महाराष्ट्रीयन लंच थाळी",
      desc: "Complete meal with 3 Chapatis, 2 Sabjis, Steamed Rice, Dal, Papad, and Pickle.",
      image: "/images/hd_lunch_thali.jpg",
      tag: "Wholesome Feast",
      tagMarathi: "परिपूर्ण जेवण",
      price: "₹110",
    },
    {
      title: "Pure Ghee Sheera",
      marathi: "रवा शिरा",
      desc: "Warm golden semolina dessert slow-cooked in pure desi ghee with cashews and saffron.",
      image: "/images/hd_sheera.jpg",
      tag: "Sweet Craving",
      tagMarathi: "गोड पदार्थ",
      price: "₹40",
    },
    {
      title: "Kadak Cutting Tea",
      marathi: "गरमा-गरम चहा",
      desc: "Steaming aromatic tea brewed with ginger and cardamom, the ultimate partner to evening snacks.",
      image: "/images/hd_tea.jpg",
      tag: "Chai Time",
      tagMarathi: "कटिंग चहा",
      price: "Authentic",
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-8 md:px-12 bg-cream-100 overflow-hidden" aria-label="Food Showcase">
      
      {/* Decorative leaf motifs */}
      <div className="absolute top-12 left-6 opacity-30 pointer-events-none">
        <DecorativeLeaf className="w-16 h-16 text-brandGreen-700" />
      </div>
      <div className="absolute bottom-12 right-8 opacity-25 pointer-events-none">
        <DecorativeLeaf className="w-24 h-24 text-saffron-500 rotate-45" />
      </div>

      <div className="mx-auto max-w-7xl">
        
        {/* Section Header - [ADDED] Bilingual */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-cream-200 border border-turmeric-400/50 text-xs font-bold text-brown-800">
            <SpiceSparkle className="w-3.5 h-3.5 text-saffron-600" />
            <span>AUTHENTIC VISUAL GALLERY</span>
            <span className="font-devanagari text-xs text-saffron-700 font-bold">• अस्सल खाद्यसंस्कृती</span>
          </div>

          {/* [FIXED] Fluid typography for showcase heading */}
          <h2 className="font-display text-3xl xs:text-4xl sm:text-6xl md:text-7xl font-black text-brown-900 tracking-tight leading-tight">
            Made to make you hungry.
          </h2>
          <span className="font-devanagari text-xl sm:text-2xl text-saffron-600 font-bold block mt-1">
            तोंडात पाणी आणणारी खास चव.
          </span>

          <div className="w-36 mx-auto">
            <BrushUnderline className="w-full h-3 text-turmeric-gold" />
          </div>

          <p className="text-base sm:text-lg text-brown-700 font-sans leading-relaxed">
            Every dish at Swadam Swadishta is made fresh upon order — using traditional Maharashtrian seasonings, pure desi ingredients, and warmth.
          </p>
        </div>

        {/* Cinematic Grid of Real Food Photography */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {showcaseItems.map((item, index) => (
            <div
              key={index}
              className={`rounded-3xl overflow-hidden bg-white border border-turmeric-400/50 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between group ${
                index === 2 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* [FIXED] Image Frame with responsive height */}
              <div className="relative w-full h-56 xs:h-64 sm:h-72 overflow-hidden bg-cream-200/50">
                {/* // [FIXED] Added responsive sizes attribute to optimize mobile/tablet bandwidth */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brown-900 shadow-sm border border-turmeric-400/40">
                  <span>{item.tag}</span>
                  <span className="font-devanagari text-brandGreen-800 ml-1 font-semibold">• {item.tagMarathi}</span>
                </div>
                <div className="absolute bottom-3 right-3 bg-brown-900/90 text-turmeric-gold px-3 sm:px-3.5 py-1 rounded-xl text-base sm:text-lg font-black font-display shadow-md backdrop-blur-sm">
                  {item.price}
                </div>
              </div>

              {/* Dish Meta */}
              <div className="p-4 xs:p-6">
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="font-display text-2xl font-bold text-brown-900 group-hover:text-saffron-600 transition-colors">
                    {item.title}
                  </h3>
                  <span className="font-devanagari text-base font-bold text-brandGreen-700">
                    {item.marathi}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-brown-600 leading-relaxed font-sans mt-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
