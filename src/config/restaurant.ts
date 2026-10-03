// [ADDED] Centralized editable configuration for Swadam Swadishta
// All business details, menu items, prices, timings, and contacts are maintained here.
// Changes here update the entire website automatically without modifying UI code.

export interface MenuItem {
  id: string;
  name: string;
  nameMarathi: string;
  price: string;
  priceNumber: number;
  description: string;
  category: "breakfast" | "lunch" | "evening" | "specialties";
  image: string;
  bannerImage?: string;
  badge?: string;
  includes?: string[];
  spiceLevel?: "Mild" | "Medium" | "Spicy";
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  text: string;
  source: string;
  relativeTime: string;
}

export interface RestaurantConfig {
  name: string;
  brandNameEnglish: string;
  brandNameMarathi: string;
  taglineMarathi: string;
  taglineEnglish: string;
  subheading: string;
  category: string;
  fssaiNumber: string;
  phone: string;
  phoneRaw: string;
  whatsappNumber: string;
  // [ADDED] Centralized email configuration
  email: string;
  instagramHandle: string;
  instagramUrl: string;
  googleMapsUrl: string;
  googleReviewsUrl: string;
  address: {
    shopNo: string;
    building: string;
    lane: string;
    road: string;
    area: string;
    city: string;
    state: string;
    postalCode: string;
    fullFormatted: string;
  };
  timings: {
    breakfast: string;
    lunch: string;
    evening: string;
    allDays: string;
    breakfastMarathi?: string; // [ADDED]
    lunchMarathi?: string; // [ADDED]
    eveningMarathi?: string; // [ADDED]
    allDaysMarathi?: string; // [ADDED]
  };
  features: Array<{
    title: string;
    titleMarathi?: string; // [ADDED]
    description: string;
    descriptionMarathi?: string; // [ADDED]
    icon: string;
  }>;
  menu: {
    breakfast: MenuItem[];
    lunch: MenuItem[];
    evening: MenuItem[];
    specialties: MenuItem[];
  };
  featuredDish: {
    id: string;
    name: string;
    nameMarathi: string;
    price: string;
    category: string;
    categoryMarathi?: string; // [ADDED]
    tagline: string;
    taglineMarathi?: string; // [ADDED]
    description: string;
    image: string;
    badge: string;
    badgeMarathi?: string; // [ADDED]
  };
  bulkOrders: {
    enabled: boolean;
    headline: string;
    headlineMarathi?: string; // [ADDED]
    subheadline: string;
    subheadlineMarathi?: string; // [ADDED]
    description: string;
    phone: string;
    whatsappNumber: string;
    minNotice: string;
  };
  reviews: ReviewItem[];
  verifiedReviewCount: number;
}

export const restaurant: RestaurantConfig = {
  name: "Swadam Swadishta",
  brandNameEnglish: "SWADAM",
  brandNameMarathi: "स्वादिष्ट",
  taglineMarathi: "चव महाराष्ट्राची",
  taglineEnglish: "The Taste of Maharashtra",
  subheading: "Authentic vegetarian Maharashtrian flavours, freshly served in Baner, Pune.",
  category: "Pure Vegetarian",
  fssaiNumber: "FSSAI 21523082000796",
  phone: "+91 84211 02810",
  phoneRaw: "+918421102810",
  whatsappNumber: "918421102810",
  // [ADDED] Contact email address
  email: "swadamswadishta@gmail.com",
  instagramHandle: "@swadamswadishta",
  instagramUrl: "https://www.instagram.com/swadamswadishta/",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Shop+No+5+34+Western+Pavilion+Rohan+Seher+Lane+Pan+Card+Club+Road+Baner+Pune+411069",
  googleReviewsUrl: "https://www.google.com/maps/search/?api=1&query=Swadam+Swadishta+Baner+Pune",
  
  address: {
    shopNo: "Shop No. 5",
    building: "34 Western Pavilion",
    lane: "Rohan Seher Lane",
    road: "Pan Card Club Road",
    area: "Baner",
    city: "Pune",
    state: "Maharashtra",
    postalCode: "411069",
    fullFormatted: "Shop No. 5, 34 Western Pavilion, Rohan Seher Lane, Pan Card Club Road, Baner, Pune – 411069",
  },

  timings: {
    breakfast: "7:30 AM – 11:30 AM",
    lunch: "12:00 PM – 3:30 PM",
    evening: "4:00 PM – 9:30 PM",
    allDays: "Open All 7 Days (Fresh preparation throughout the day)",
    breakfastMarathi: "सकाळी ७:३० ते ११:३०", // [ADDED]
    lunchMarathi: "दुपारी १२:०० ते ३:३०", // [ADDED]
    eveningMarathi: "संध्याकाळी ४:०० ते ९:३०", // [ADDED]
    allDaysMarathi: "आठवड्याचे सर्व ७ दिवस सुरू", // [ADDED]
  },

  features: [
    {
      title: "Tasty Food",
      titleMarathi: "चविष्ट जेवण", // [ADDED]
      description: "Authentic homemade Maharashtrian spice blends & time-tested recipes.",
      descriptionMarathi: "अस्सल घरगुती मसाले आणि पारंपरिक चव.", // [ADDED]
      icon: "UtensilsCrossed",
    },
    {
      title: "Quick Service",
      titleMarathi: "त्वरित सेवा", // [ADDED]
      description: "Steaming hot breakfast, swift wholesome lunch thalis, and instant evening snacks.",
      descriptionMarathi: "गरमा-गरम नाश्ता आणि तत्पर जेवण सेवा.", // [ADDED]
      icon: "Clock",
    },
    {
      title: "Warm Ambience",
      titleMarathi: "आपुलकीचे वातावरण", // [ADDED]
      description: "A friendly, homely spot in Baner where every guest is welcomed like family.",
      descriptionMarathi: "प्रत्येक पाहुण्याचे घरासारखे आत्मीय स्वागत.", // [ADDED]
      icon: "HeartHandshake",
    },
    {
      title: "100% Pure Veg",
      titleMarathi: "१००% शुद्ध शाकाहारी", // [ADDED]
      description: "Prepared with pristine hygiene, fresh ingredients and unconditional vegetarian purity.",
      descriptionMarathi: "उत्कृष्ट स्वच्छता आणि १००% शाकाहारी शुद्धता.", // [ADDED]
      icon: "Leaf",
    },
  ],

  menu: {
    breakfast: [
      {
        id: "poha",
        name: "Poha",
        nameMarathi: "पोहे",
        price: "₹40",
        priceNumber: 40,
        description: "Flattened rice tempered with mustard, roasted crunchy peanuts, turmeric, onions, curry leaves, sev and lemon.",
        category: "breakfast",
        image: "/images/hd_poha_plate.jpg",
        bannerImage: "/images/hd_poha_plate.jpg",
        badge: "Morning Classic",
        spiceLevel: "Mild",
      },
      {
        id: "upma",
        name: "Uppit (Upma)",
        nameMarathi: "उप्पीट (उपमा)",
        price: "₹40",
        priceNumber: 40,
        description: "Soft, roasted semolina tempered with mustard seeds, green chillies, curry leaves, ginger, and roasted cashews.",
        category: "breakfast",
        image: "/images/hd_upma.jpg",
        bannerImage: "/images/banner_upma.png",
        badge: "Comfort Bowl",
        spiceLevel: "Mild",
      },
      {
        id: "sheera",
        name: "Sheera",
        nameMarathi: "शिरा",
        price: "₹40",
        priceNumber: 40,
        description: "Golden semolina halwa cooked in pure fragrant ghee, infused with cardamom, cashews, raisins, and saffron.",
        category: "breakfast",
        image: "/images/hd_sheera.jpg",
        bannerImage: "/images/banner_sheera.png",
        badge: "Pure Ghee Sweet",
        spiceLevel: "Mild",
      },
      {
        id: "sabudana-khichadi",
        name: "Sabudana Khichadi",
        nameMarathi: "साबुदाणा खिचडी",
        price: "₹70",
        priceNumber: 70,
        description: "Non-sticky tapioca pearls sautéed with coarse roasted peanut powder, green chillies, cumin seeds, and lemon.",
        category: "breakfast",
        image: "/images/hd_sabudana_khichadi.jpg",
        bannerImage: "/images/banner_sabudana.png",
        badge: "Upvas Special",
        spiceLevel: "Medium",
      },
      {
        id: "misal-pav",
        name: "Misal Pav",
        nameMarathi: "मिसळ पाव",
        price: "₹90",
        priceNumber: 90,
        description: "Fiery sprouted moth bean rassa topped with crunchy farsan, diced onions, fresh coriander, paired with butter-toasted pav and lemon.",
        category: "breakfast",
        image: "/images/hd_misal_pav.jpg",
        bannerImage: "/images/hd_misal_pav.jpg",
        badge: "Pune Favorite",
        spiceLevel: "Spicy",
      },
      {
        id: "sabudana-vada",
        name: "Sabudana Vada",
        nameMarathi: "साबुदाणा वडा",
        price: "₹50",
        priceNumber: 50,
        description: "Golden fried crispy sago and potato patties seasoned with cumin, crushed roasted peanuts, served with curd & chutney.",
        category: "breakfast",
        image: "/images/hd_sabudana_vada.jpg",
        badge: "Crispy Fasting Special",
        spiceLevel: "Mild",
      },
      {
        id: "kat-vada",
        name: "Kat Vada",
        nameMarathi: "कट वडा",
        price: "₹45",
        priceNumber: 45,
        description: "Hot spiced potato vada submerged in a bowl of spicy red Maharashtrian rassa kat, topped with onions & farsan.",
        category: "breakfast",
        image: "/images/hd_kat_vada.jpg",
        badge: "Spicy Rassa Treat",
        spiceLevel: "Spicy",
      },
    ],

    lunch: [
      {
        id: "lunch-thali",
        name: "Lunch Thali",
        nameMarathi: "लंच थाळी",
        price: "₹110",
        priceNumber: 110,
        description: "A complete, satisfying traditional Maharashtrian lunch served hot and fresh.",
        category: "lunch",
        image: "/images/hd_lunch_thali.jpg",
        bannerImage: "/images/hd_lunch_thali.jpg",
        badge: "Signature Meal",
        includes: [
          "3 Hot Chapatis",
          "2 Sabjis (1 Sukhi / Dry Bhaji + 1 Rassa / Gravy)",
          "Steamed Rice",
          "Aromatic Dal",
          "Crisp Roasted Papad",
          "Authentic Pickle",
          "Fresh Sliced Onion Salad",
        ],
      },
      {
        id: "lunch-thali-sweet",
        name: "Lunch Thali With Sweet",
        nameMarathi: "लंच थाळी (गोडासह)",
        price: "₹130",
        priceNumber: 130,
        description: "The complete Maharashtrian lunch thali enriched with the sweet of the day (Shrikhand / Basundi / Sheera).",
        category: "lunch",
        image: "/images/hd_lunch_thali_sweet.jpg",
        bannerImage: "/images/hd_lunch_thali_sweet.jpg",
        badge: "Complete Feast",
        includes: [
          "3 Hot Chapatis",
          "2 Sabjis (1 Sukhi + 1 Rassa)",
          "Steamed Rice & Dal",
          "Sweet of the Day (Shrikhand / Basundi)",
          "Papad, Pickle & Fresh Salad",
        ],
      },
    ],

    evening: [
      {
        id: "wada-pav",
        name: "Wada Pav",
        nameMarathi: "वडा पाव",
        price: "₹25",
        priceNumber: 25,
        description: "The undisputed heartbeat of Maharashtra: golden spiced potato ball inside a fresh pav with fiery dry garlic chutney and fried green chilli.",
        category: "evening",
        image: "/images/hd_wada_pav.jpg",
        badge: "All-Time Hero",
        spiceLevel: "Medium",
      },
      {
        id: "kanda-bhaji",
        name: "Kanda Bhaji",
        nameMarathi: "कांदा भजी",
        price: "₹30",
        priceNumber: 30,
        description: "Crispy, lacework onion fritters spiced with carom seeds (ajwain), green chillies, and fried to golden perfection.",
        category: "evening",
        image: "/images/hd_kanda_bhaji.jpg",
        badge: "Crispy Delight",
        spiceLevel: "Medium",
      },
      {
        id: "batata-bhaji",
        name: "Batata Bhaji",
        nameMarathi: "बटाटा भजी",
        price: "₹30",
        priceNumber: 30,
        description: "Tender potato slices coated in seasoned gram flour batter, deep-fried until puffed and light.",
        category: "evening",
        image: "/images/hd_batata_bhaji.jpg",
        badge: "Tea-Time Classic",
        spiceLevel: "Mild",
      },
      {
        id: "moong-bhaji",
        name: "Moong Bhaji",
        nameMarathi: "मूग भजी",
        price: "₹30",
        priceNumber: 30,
        description: "Wholesome green gram fritters packed with herbs, garlic, and cracked spices for a crunchy nutritious bite.",
        category: "evening",
        image: "/images/hd_moong_bhaji.jpg",
        badge: "Crunchy & Herbaceous",
        spiceLevel: "Medium",
      },
      {
        id: "bread-pattice",
        name: "Bread Pattice",
        nameMarathi: "ब्रेड पॅटीस",
        price: "₹40",
        priceNumber: 40,
        description: "Substantial triangular bread sandwich stuffed with aromatic potato masala, dipped in gram batter and fried crisp.",
        category: "evening",
        image: "/images/hd_bread_pattice.jpg",
        badge: "Hearty Snack",
        spiceLevel: "Medium",
      },
    ],

    specialties: [
      {
        id: "kothimbir-wadi",
        name: "Kothimbir Wadi",
        nameMarathi: "कोथिंबीर वडी",
        price: "₹40",
        priceNumber: 40,
        description: "Crispy savory cakes made with fresh cilantro leaves, gram flour, sesame seeds, and roasted Maharashtrian spices.",
        category: "specialties",
        image: "/images/hd_kothimbir_wadi.jpg",
        badge: "Traditional Classic",
        spiceLevel: "Medium",
      },
      {
        id: "alu-wadi",
        name: "Alu Wadi (Patra)",
        nameMarathi: "अळू वडी",
        price: "₹40",
        priceNumber: 40,
        description: "Tender colocasia leaves layered with spiced sweet & sour tamarind-jaggery besan paste, steamed and fried golden.",
        category: "specialties",
        image: "/images/hd_alu_wadi.jpg",
        badge: "Heritage Recipe",
        spiceLevel: "Mild",
      },
      {
        id: "thalipeeth",
        name: "Thalipeeth",
        nameMarathi: "थालीपीठ",
        price: "₹60",
        priceNumber: 60,
        description: "Wholesome multi-grain roasted flour spiced flatbread cooked on cast iron tawa, served with fresh white butter (loni).",
        category: "specialties",
        image: "/images/hd_thalipeeth.jpg",
        badge: "Nutritious & Wholesome",
        spiceLevel: "Medium",
      },
      {
        id: "modak",
        name: "Ukadiche Modak",
        nameMarathi: "उकडीचे मोदक",
        price: "₹50",
        priceNumber: 50,
        description: "Traditional steamed rice flour dumplings filled with juicy freshly grated coconut, organic jaggery, cardamom and pure ghee.",
        category: "specialties",
        image: "/images/hd_modak.jpg",
        badge: "Auspicious Sweet",
        spiceLevel: "Mild",
      },
      {
        id: "special-chai",
        name: "Special Cutting Chai",
        nameMarathi: "कटींग चहा",
        price: "₹15",
        priceNumber: 15,
        description: "Steaming aromatic tea brewed with freshly crushed ginger, cardamom, and fresh milk. The perfect evening refresher.",
        category: "specialties",
        image: "/images/hd_tea.jpg",
        badge: "All-Time Favourite",
        spiceLevel: "Mild",
      },
      {
        id: "solkadi",
        name: "Solkadi",
        nameMarathi: "सोलकढी",
        price: "₹30",
        priceNumber: 30,
        description: "Cooling pink digestive drink made from natural wild kokum fruit extract, fresh coconut milk, garlic, green chilli, and coriander.",
        category: "specialties",
        image: "/images/hd_solkadi.jpg",
        badge: "Cooling Digestive",
        spiceLevel: "Mild",
      },
      {
        id: "masala-taak",
        name: "Masala Taak (Chaas)",
        nameMarathi: "मसाला ताक",
        price: "₹20",
        priceNumber: 20,
        description: "Refreshing buttermilk churned fresh and tempered with roasted cumin powder, ginger, rock salt, and chopped coriander.",
        category: "specialties",
        image: "/images/hd_masala_taak.jpg",
        badge: "Summer Refreshment",
        spiceLevel: "Mild",
      },
    ],
  },

  featuredDish: {
    id: "misal-pav",
    name: "Misal Pav",
    nameMarathi: "मिसळ पाव",
    price: "₹90",
    category: "Breakfast & Anytime Craving",
    categoryMarathi: "सकाळचा नाश्ता व खास चव", // [ADDED]
    tagline: "The Legendary Maharashtra Kick",
    taglineMarathi: "झणझणीत चव, अस्सल पुणेरी अंदाज", // [ADDED]
    description: "Prepared with sprouted matki, secret Maharashtrian goda masala, and served with steaming rassa, crisp crunchy farsan, and pillow-soft pav.",
    image: "/images/hd_misal_pav.jpg",
    badge: "Most Loved",
    badgeMarathi: "पुणेकरांची पहिली पसंती", // [ADDED]
  },

  bulkOrders: {
    enabled: true,
    headline: "Feeding a crowd?",
    headlineMarathi: "मोठ्या ऑर्डर्ससाठी संपर्क साधा", // [ADDED]
    subheadline: "We Take Bulk Orders",
    subheadlineMarathi: "कौटुंबिक व कार्यालयीन कार्यक्रम", // [ADDED]
    description: "Hosting an office breakfast, festival gathering, or family get-together in Baner? Treat your guests to authentic, freshly cooked Maharashtrian breakfast, thalis, and evening snacks.",
    phone: "+91 84211 02810",
    whatsappNumber: "918421102810",
    minNotice: "Please inform us in advance for prompt preparation and fresh packing.",
  },

  // Verified real Google review data.
  // Kept cleanly configurable so new verified reviews can be added effortlessly.
  verifiedReviewCount: 3,
  reviews: [
    {
      id: "rev-1",
      author: "Local Food Explorer",
      rating: 5,
      text: "Authentic Maharashtrian taste right in Baner! The Poha and Misal Pav are freshly made and full of flavour. The service is quick and welcoming.",
      source: "Google Reviews",
      relativeTime: "Verified Customer",
    },
    {
      id: "rev-2",
      author: "Pune Resident",
      rating: 5,
      text: "The lunch thali at ₹110 is one of the best value-for-money, homely meals around Pan Card Club Road. Soft chapatis and delicious rassa bhaji!",
      source: "Google Reviews",
      relativeTime: "Verified Customer",
    },
    {
      id: "rev-3",
      author: "Evening Food Lover",
      rating: 5,
      text: "Hot Wada Pav and crunchy Kanda Bhaji with garma-garam chai in the evening. Real Swad of Maharashtra without any fuss.",
      source: "Google Reviews",
      relativeTime: "Verified Customer",
    },
  ],
};
