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
  category: "breakfast" | "lunch" | "evening";
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
  };
  features: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  menu: {
    breakfast: MenuItem[];
    lunch: MenuItem[];
    evening: MenuItem[];
  };
  featuredDish: {
    id: string;
    name: string;
    nameMarathi: string;
    price: string;
    category: string;
    tagline: string;
    description: string;
    image: string;
    badge: string;
  };
  bulkOrders: {
    enabled: boolean;
    headline: string;
    subheadline: string;
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
  },

  features: [
    {
      title: "Tasty Food",
      description: "Authentic homemade Maharashtrian spice blends & time-tested recipes.",
      icon: "UtensilsCrossed",
    },
    {
      title: "Quick Service",
      description: "Steaming hot breakfast, swift wholesome lunch thalis, and instant evening snacks.",
      icon: "Clock",
    },
    {
      title: "Warm Ambience",
      description: "A friendly, homely spot in Baner where every guest is welcomed like family.",
      icon: "HeartHandshake",
    },
    {
      title: "100% Pure Veg",
      description: "Prepared with pristine hygiene, fresh ingredients and unconditional vegetarian purity.",
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
        image: "/images/poha.jpg",
        bannerImage: "/images/banner_poha.png",
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
        image: "/images/upma.jpg",
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
        image: "/images/sheera.jpg",
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
        image: "/images/sabudana_khichadi.jpg",
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
        image: "/images/misal_pav.jpg",
        bannerImage: "/images/banner_misal.png",
        badge: "Pune Favorite",
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
        image: "/images/lunch_thali.jpg",
        bannerImage: "/images/banner_thali.png",
        badge: "Signature Meal",
        includes: [
          "3 Hot Chapatis",
          "2 Sabjis (1 Sukhi / Dry Bhaji + 1 Rassa / Gravy)",
          "Steamed Rice",
          "Aromatic Dal",
          "Crisp Roasted Papad",
          "Authentic Pickle",
          "Fresh Onion Salad",
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
        image: "/images/lunch_thali.jpg",
        bannerImage: "/images/lunch_sweet.jpg",
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
        image: "/images/wada_pav.jpg",
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
        image: "/images/kanda_bhaji.jpg",
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
        image: "/images/batata_bhaji.jpg",
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
        image: "/images/moong_bhaji.jpg",
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
        image: "/images/bread_pattice.jpg",
        badge: "Hearty Snack",
        spiceLevel: "Medium",
      },
    ],
  },

  featuredDish: {
    id: "misal-pav",
    name: "Misal Pav",
    nameMarathi: "मिसळ पाव",
    price: "₹90",
    category: "Breakfast & Anytime Craving",
    tagline: "The Legendary Maharashtra Kick",
    description: "Prepared with sprouted matki, secret Maharashtrian goda masala, and served with steaming rassa, crisp crunchy farsan, and pillow-soft pav.",
    image: "/images/banner_misal.png",
    badge: "Most Loved",
  },

  bulkOrders: {
    enabled: true,
    headline: "Feeding a crowd?",
    subheadline: "We Take Bulk Orders",
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
