import { LocationDetail } from "@/types";

export const locationsData: LocationDetail[] = [
  {
    id: "pattaya",
    name: "CoffeeHolic Pattaya",
    thaiName: "คอฟฟี่ฮอลิค พัทยา (CoffeeHolic Pattaya)",
    tagline: "5.0 ★ Rated Coffee Shop & Lounge in Jomtien, Pattaya.",
    address: "353/109 ม.12 หนองปรือ (Nong Prue), Bang Lamung District",
    district: "Jomtien / Nong Prue",
    city: "Chon Buri 20150, Thailand",
    hours: "Open Daily: 08:00 AM – 08:00 PM (Specialty Fresh Coffee & Bar)",
    phone: "+66 90 253 6659",
    email: "coffeeholic.pattaya@gmail.com",
    instagram: "@coffeeholic.pattaya",
    coordinates: {
      lat: 12.8986,
      lng: 100.8752
    },
    features: [
      "5.0 ★ Rated Specialty Coffee Destination on Google",
      "Signature Orange & Coconut Cold Brew Americano",
      "Bespoke Amber Neon Coffee Bar & Lounge Seating",
      "Fresh Espresso Machine & Pour-Over Rituals",
      "Comfort Food, Fusion Frappes & Signature Pastries"
    ],
    image: "/assets/real/storefront-entry.jpg",
    mapEmbedUrl: "https://maps.google.com/maps?q=353/109%20Nong%20Prue%20Bang%20Lamung%20Chon%20Buri%2020150&t=&z=15&ie=UTF8&iwloc=&output=embed",
    directGoogleMapsUrl: "https://share.google/wxRofuOiH8JTqgQco"
  }
];
