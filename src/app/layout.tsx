import type { Metadata, Viewport } from "next";
import { Outfit, Rozha_One, Kalam } from "next/font/google";
import "./globals.css";
import { restaurant } from "@/config/restaurant";

// [ADDED] Google Fonts for modern sans, authentic Devanagari display, and brush typography
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

const kalam = Kalam({
  weight: ["300", "400", "700"],
  subsets: ["latin", "devanagari"],
  variable: "--font-brush",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FFF7E3",
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
    <html lang="en" className={`${outfit.variable} ${rozhaOne.variable} ${kalam.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-cream-bg text-brown-900 antialiased selection:bg-saffron-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
