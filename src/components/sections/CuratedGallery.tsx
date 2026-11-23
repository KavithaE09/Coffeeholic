"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { galleryItems } from "@/data/galleryData";
import { GalleryItem } from "@/types";
import { Maximize2, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function CuratedGallery() {
  const { t } = useLanguage();
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="relative py-28 sm:py-36 bg-gradient-to-br from-[#FFFBF5] via-[#F5EAD9] to-[#EBD5BC] text-[#241711] overflow-hidden">
      {/* Dynamic Dual-Color Glowing Orbs */}
      <div className="absolute top-1/4 left-10 w-[600px] h-[600px] bg-gradient-to-tr from-[#FFA827]/25 to-[#FFD580]/15 rounded-full blur-[140px] pointer-events-none animate-glow-pulse" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-gradient-to-bl from-[#8B5E33]/25 to-[#D46B28]/20 rounded-full blur-[140px] pointer-events-none animate-float" />
      <div className="absolute top-1/2 right-1/4 w-[350px] h-[350px] bg-[#FFA827]/15 rounded-full blur-[120px] pointer-events-none animate-float-delayed" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#241711]">
              {t("gallery.title", "Scenes from the Cafe.")}
            </h2>
          </div>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => {
            // Give specific cards dramatic editorial aspect variations
            const isTall = index === 0 || index === 4;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                onClick={() => setActiveItem(item)}
                className={`card-3d dual-glow-card group relative rounded-2xl overflow-hidden cursor-pointer ${
                  isTall ? "md:row-span-2 aspect-[3/4]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Ambient warm roasted mocha gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3B2A22] via-black/20 to-transparent opacity-85 group-hover:opacity-65 transition-opacity" />

                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#3B2A22]/70 backdrop-blur-md border border-[#C4A77D]/30 flex items-center justify-center text-[#FDF9F3] opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5 text-[#D49B55]" />
                </div>

                {/* Caption Details */}
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="font-serif text-lg sm:text-xl text-[#FDF9F3] group-hover:text-[#D49B55] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#E8DBCE]/85 font-light line-clamp-1 mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveItem(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-lg"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-4xl w-full bg-[#28201A] border border-[#FFA827]/40 rounded-2xl overflow-hidden shadow-2xl z-10 text-[#FDFBF7]"
            >
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={activeItem.image}
                  alt={activeItem.title}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={() => setActiveItem(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/70 text-white hover:text-[#FFA827] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-[#FFA827] uppercase tracking-wider">
                    {activeItem.category} • Coffee HOLIC Archive
                  </span>
                  <h3 className="font-serif text-2xl text-[#F4F0E8]">
                    {activeItem.title}
                  </h3>
                  <p className="text-xs text-[#D9CBB8]/80 font-light mt-1">
                    {activeItem.subtitle}
                  </p>
                </div>
                <button
                  onClick={() => setActiveItem(null)}
                  className="px-4 py-2 rounded-full border border-white/20 text-xs uppercase tracking-wider text-[#D9CBB8] hover:text-white"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
