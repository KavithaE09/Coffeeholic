import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/common/LenisProvider";
import CustomCursor from "@/components/common/CustomCursor";
import { LanguageProvider } from "@/context/LanguageContext";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://coffeeholic.th"),
  title: "Coffee HOLIC – Cafe & Bar | Luxury Specialty Coffee Atelier Pattaya",
  description:
    "An ultra-premium specialty coffee sanctuary and evening mixology salon in Pattaya, Thailand. Japanese-inspired slow drip, single-origin micro-lots, and artisanal coffee cocktails.",
  keywords: [
    "Specialty coffee in Pattaya",
    "Coffee HOLIC Pattaya",
    "Best coffee shop Pattaya",
    "Luxury café in Pattaya Thailand",
    "Best coffee experience in Thailand",
    "Coffee HOLIC Cafe and Bar",
    "Jomtien specialty coffee",
    "Pattaya coffee cocktail lounge",
  ],
  authors: [{ name: "Coffee HOLIC Atelier" }],
  creator: "Coffee HOLIC",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://coffeeholic.th",
    siteName: "Coffee HOLIC – Cafe & Bar",
    title: "Coffee HOLIC – Cafe & Bar | Luxury Specialty Coffee Atelier",
    description:
      "A different kind of coffee ritual. Single-origin micro-lots by day, intimate coffee mixology by night in Pattaya.",
    images: [
      {
        url: "/assets/logo/coffeeholic-neon.jpg",
        width: 1200,
        height: 630,
        alt: "Coffee HOLIC – Cafe & Bar Pattaya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coffee HOLIC – Cafe & Bar | Luxury Coffee Atelier",
    description:
      "A different kind of coffee ritual in Pattaya, Thailand.",
    images: ["/assets/logo/coffeeholic-neon.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Rich JSON-LD LocalBusiness & CafeOrCoffeeShop Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: "Coffee HOLIC – Cafe & Bar",
    image: "https://coffeeholic.th/assets/logo/coffeeholic-neon.jpg",
    priceRange: "$$$",
    servesCuisine: "Specialty Coffee, Coffee Mixology, Artisanal Pastries",
    address: {
      "@type": "PostalAddress",
      streetAddress: "353/109 ม.12 หนองปรือ, Bang Lamung District",
      addressLocality: "Pattaya",
      postalCode: "20150",
      addressCountry: "TH",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 12.8986,
      longitude: 100.8752,
    },
    telephone: "+66-90-253-6659",
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
        opens: "08:00",
        closes: "20:00",
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#3B2A22] text-[#FDF9F3] font-sans selection:bg-[#8B5E33] selection:text-[#FFFFFF]">
        <LanguageProvider>
          <LenisProvider>
            {children}
          </LenisProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
