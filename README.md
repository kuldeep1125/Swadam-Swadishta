# Swadam Swadishta — Pure Vegetarian Sweets, Snacks & Delicacies 🪔

<!-- [ADDED] Comprehensive project documentation and overview -->
A modern, responsive, and immersive digital brand experience for **Swadam Swadishta**, celebrating traditional culinary craftsmanship with contemporary web aesthetics.

Built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **Framer Motion**, featuring fluid animations, high-contrast accessible typography, rich curated photography, and interactive menu showcases.

---

## ✨ Features

- **Hero & Storytelling Experience**: Atmospheric visuals with dual-tone branding, authentic motifs, and fluid animations.
- **Interactive Signature Menu**: Category-filtered catalog (Traditional Mithai, Premium Dry Fruit Sweets, Savory Namkeen, Street-Style Chaat, Festive Gift Boxes).
- **Bulk & Corporate Gifting**: Seamless inquiry interface with instant WhatsApp redirection and order customization.
- **Storefront & Ambience Showcase**: Dual-perspective photography highlighting both the warm retail experience and fresh kitchen prep.
- **Location & Visit Planning**: Interactive timings, Google Maps navigation direct links, and verified customer testimonials.
- **Fully Responsive & Accessible**: Optimized for mobile, tablet, and desktop viewports with strict high-contrast compliance.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (Static Export / SSG)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://gsap.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18.17+ or v20+) installed.

### Installation

```bash
# Clone the repository
git clone https://github.com/kuldeep1125/Swadam-Swadishta.git

# Navigate to the project directory
cd Swadam-Swadishta

# Install dependencies
npm install
```

### Development Server

Run the development server locally:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Production Build

To build the static optimized application:

```bash
npm run build
```

---

## 📁 Project Structure

```
├── public/                 # Static assets, icons, and HD photography
│   └── images/
├── src/
│   ├── app/                # Next.js App Router (layout, page, metadata)
│   ├── components/         # Modular UI sections & animated components
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── SignatureMenu.tsx
│   │   ├── StickyStory.tsx
│   │   ├── StorefrontSection.tsx
│   │   ├── BulkOrders.tsx
│   │   ├── EnquirySection.tsx
│   │   └── ...
│   └── config/             # Site configuration, menu data & contact info
├── tailwind.config.ts      # Custom theme colors, fonts & utility extensions
└── package.json
```

---

## 📄 License

This project is licensed under the MIT License.
