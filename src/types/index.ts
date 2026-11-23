export interface MenuItem {
  id: string;
  name: string;
  thaiName: string;
  category: "caffeine" | "iced" | "frappe" | "fizzy" | "signature" | "clouds" | "tea" | "cocktail" | string;
  description?: string;
  notes?: string[];
  roastLevel?: "Light" | "Medium" | "Omni-Roast" | "Dark" | "Medium-Dark" | string;
  origin: string;
  priceTHB: number;
  priceUSD?: number;
  priceHotTHB?: number;
  priceIcedTHB?: number;
  image: string;
  isPopular?: boolean;
  servingTemp: "Hot" | "Iced" | "Both" | "Frappe" | "Sparkling" | string;
}

export interface LocationDetail {
  id: "pattaya" | string;
  name: string;
  thaiName: string;
  tagline: string;
  address: string;
  district: string;
  city: string;
  hours: string;
  phone: string;
  email: string;
  instagram: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  features: string[];
  image: string;
  mapEmbedUrl: string;
  directGoogleMapsUrl?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: "Interior" | "Craft" | "Beans" | "Ambience";
  image: string;
  aspect: "landscape" | "portrait" | "square";
}
