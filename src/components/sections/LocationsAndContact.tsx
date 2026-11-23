"use client";

import { motion } from "framer-motion";
import { locationsData } from "@/data/locationsData";
import { MapPin, Clock, Phone, Mail, ExternalLink, Calendar } from "lucide-react";
import { InstagramIcon } from "@/components/common/BrandIcons";
import MagneticButton from "@/components/common/MagneticButton";
import { useLanguage } from "@/context/LanguageContext";

interface LocationsAndContactProps {
  onOpenReservation: () => void;
}

export default function LocationsAndContact({ onOpenReservation }: LocationsAndContactProps) {
  const { t } = useLanguage();
  const location = locationsData[0]; // Only CoffeeHolic Pattaya

  return (
    <section id="locations" className="relative py-28 sm:py-36 bg-dual-cream text-[#2C1F18] overflow-hidden">
      {/* Background dual glow effects */}
      <div className="absolute top-1/3 left-10 w-[600px] h-[600px] bg-gradient-to-tr from-[#FFA827]/30 to-[#FFD580]/20 rounded-full blur-[150px] pointer-events-none animate-glow-pulse" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-gradient-to-bl from-[#8B5E33]/30 to-[#D46B28]/25 rounded-full blur-[140px] pointer-events-none animate-float" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 sm:mb-16"
        >
        
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#2C1F18]">
            {t("loc.title", "Visit Our Atelier.")}
          </h2>
          <p className="text-sm text-[#8B5E33] font-mono uppercase tracking-widest mt-3 font-semibold">
            Jomtien, Pattaya — Thailand
          </p>
        </motion.div>

        {/* Single Location Card with Cream / White Warm Alabaster Palette */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 dual-glow-card rounded-3xl p-6 sm:p-10 relative overflow-hidden"
        >
          {/* Top Amber Light Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#8B5E33] to-transparent opacity-80" />

          {/* Left: Location Details & Contact */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            <div>
              
              <h3 className="font-serif text-3xl sm:text-4xl text-[#2C1F18] mb-2 font-normal">
                {location.name}
              </h3>
              <p className="text-sm text-[#6D5345] font-light italic mb-6">
                &ldquo;{location.tagline}&rdquo;
              </p>

              <div className="space-y-4 text-xs sm:text-sm text-[#4A352B]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#8B5E33] mt-1 shrink-0" />
                  <div>
                    <p className="font-medium text-[#2C1F18]">{location.district}</p>
                    <p className="opacity-80 font-light text-[#5A453A]">{location.address}</p>
                    <p className="opacity-80 font-light text-[#5A453A]">{location.city}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#8B5E33] mt-1 shrink-0" />
                  <div>
                    <p className="font-medium text-[#2C1F18]">Operating Hours</p>
                    <p className="opacity-80 font-light text-[#5A453A]">{location.hours}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#8B5E33] shrink-0" />
                  <a
                    href={`tel:${location.phone.replace(/[^0-9+]/g, "")}`}
                    className="hover:text-[#8B5E33] transition-colors font-mono text-[#5A453A]"
                  >
                    {location.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#8B5E33] shrink-0" />
                  <a
                    href={`mailto:${location.email}`}
                    className="hover:text-[#8B5E33] transition-colors font-mono text-[#5A453A]"
                  >
                    {location.email}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <InstagramIcon className="w-4 h-4 text-[#8B5E33] shrink-0" />
                  <a
                    href={`https://instagram.com/${location.instagram.replace("@", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#8B5E33] transition-colors font-mono flex items-center gap-1.5 text-[#5A453A]"
                  >
                    {location.instagram}
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a
                href={location.directGoogleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#8B5E33] text-[#FFF9F2] font-medium text-xs uppercase tracking-widest hover:bg-[#724B27] transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <MapPin className="w-3.5 h-3.5 text-[#FFF9F2]" />
                {t("loc.directions", "Open in Google Maps")}
              </a>
            </div>
          </div>

          {/* Right: Map & Photo */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {/* Google Maps Embed */}
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[#E2D5C8] bg-[#F7F2EC]">
              <iframe
                title="CoffeeHolic Pattaya Google Map"
                src={location.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
