import type { Metadata, Viewport } from "next";
import { Outfit, Rozha_One, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import { restaurant } from "@/config/restaurant";
import { ErrorBoundary } from "@/components/ErrorBoundary"; // [ADDED]

// [REFACTORED] Existing display and bilingual sans fonts with fewer loaded weights.
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const rozhaOne = Rozha_One({
  weight: "400",
  subsets: ["latin", "devanagari"],
  variable: "--font-display",
  display: "swap",
});

// [FIXED] C-1: Dedicated Noto Sans Devanagari font loader for all Marathi/Devanagari typography
const notoDevanagari = Noto_Sans_Devanagari({
  weight: "variable",
  subsets: ["devanagari"],
  variable: "--font-devanagari",
  display: "swap",
});

export const viewport: Viewport = {
  // [REFACTORED] Forest-green browser chrome matches the editorial palette.
  themeColor: "#173E2C",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://swadamswadishta.com"),
  title: "Swadam Swadishta | Maharashtrian Vegetarian Food in Baner, Pune",
  description:
    "Swadam Swadishta serves authentic Maharashtrian vegetarian breakfast, lunch and evening snacks in Baner, Pune. Explore the menu and visit us.",
  keywords: [
    "Swadam Swadishta",
    "Maharashtrian food Pune",
    "Pure vegetarian Baner",
    "Misal Pav Baner",
    "Lunch Thali Baner",
    "Poha Baner Pune",
    "Wada Pav Baner",
    "Pan Card Club Road restaurant",
    "Authentic Marathi food",
  ],
  authors: [{ name: "Swadam Swadishta" }],
  openGraph: {
    title: "Swadam Swadishta | Authentic Maharashtrian Vegetarian Food in Pune",
    description:
      "चव महाराष्ट्राची — The Taste of Maharashtra. Serving hot Poha, fiery Misal Pav, satisfying Lunch Thalis, and crunchy evening snacks at Pan Card Club Road, Baner, Pune.",
    url: "https://swadamswadishta.com",
    siteName: "Swadam Swadishta",
    images: [
      {
        url: "/images/poster_original.jpg",
        width: 1020,
        height: 1020,
        alt: "Swadam Swadishta Restaurant Baner Pune",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swadam Swadishta | Pure Vegetarian Maharashtrian Food",
    description: "Breakfast, Lunch Thali & Evening Snacks in Baner, Pune.",
    images: ["/images/poster_original.jpg"],
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  // [ADDED] Canonical URL
  alternates: {
    canonical: "https://swadamswadishta.com/",
  },
  // [ADDED] Progressive Web App Manifest
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // [ADDED] Structured Data for Google LocalBusiness / Restaurant
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: restaurant.name,
    image: "/images/poster_original.jpg",
    telephone: restaurant.phone,
    servesCuisine: "Maharashtrian, Indian Vegetarian",
    priceRange: "₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${restaurant.address.shopNo}, ${restaurant.address.building}, ${restaurant.address.lane}, ${restaurant.address.road}`,
      addressLocality: restaurant.address.city,
      addressRegion: restaurant.address.state,
      postalCode: restaurant.address.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "18.5590",
      longitude: "73.7868",
    },
    url: "https://swadamswadishta.com",
    menu: "https://swadamswadishta.com/#menu",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "07:30",
        closes: "21:30",
      },
    ],
    hasMenu: {
      "@type": "Menu",
      name: "Swadam Swadishta Pure Veg Menu",
      hasMenuSection: [
        {
          "@type": "MenuSection",
          name: "Breakfast",
          hasMenuItem: restaurant.menu.breakfast.map((item) => ({
            "@type": "MenuItem",
            name: item.name,
            offers: {
              "@type": "Offer",
              price: item.priceNumber,
              priceCurrency: "INR",
            },
          })),
        },
        {
          "@type": "MenuSection",
          name: "Lunch",
          hasMenuItem: restaurant.menu.lunch.map((item) => ({
            "@type": "MenuItem",
            name: item.name,
            offers: {
              "@type": "Offer",
              price: item.priceNumber,
              priceCurrency: "INR",
            },
          })),
        },
        {
          "@type": "MenuSection",
          name: "Evening Snacks",
          hasMenuItem: restaurant.menu.evening.map((item) => ({
            "@type": "MenuItem",
            name: item.name,
            offers: {
              "@type": "Offer",
              price: item.priceNumber,
              priceCurrency: "INR",
            },
          })),
        },
      ],
    },
  };

  return (
    // [FIXED] C-2: Set lang to en-IN for Indian bilingual context and attach all font variables including dedicated Devanagari font
    <html
      lang="en-IN"
      className={`${outfit.variable} ${rozhaOne.variable} ${notoDevanagari.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {/* [ADDED] WCAG AA 2.4.1 Skip-to-content link for keyboard & screen reader accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-5 focus:py-2.5 focus:bg-saffron-600 focus:text-white focus:font-bold focus:text-sm focus:rounded-full focus:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-saffron-500"
        >
          Skip to main content / मुख्य मजकुराकडे जा
        </a>
        <ErrorBoundary>{children}</ErrorBoundary>
      </body>
    </html>
  );
}
