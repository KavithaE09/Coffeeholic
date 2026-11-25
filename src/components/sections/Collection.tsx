"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { menuItems, extraRemedies } from "@/data/menuData";
import { MenuItem } from "@/types";
import { useLanguage } from "@/context/LanguageContext";

export default function Collection() {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const categories = [
    { id: "all", label: t("collection.tab_all", "All Items") },
    { id: "caffeine", label: t("collection.tab_caffeine", "Caffeine Stimulants") },
    { id: "iced", label: t("collection.tab_iced", "Daily Dose of Iced") },
    { id: "frappe", label: t("collection.tab_frappe", "First Aid Fusion Frappe") },
    { id: "fizzy", label: t("collection.tab_fizzy", "Fizzy Antidote") },
  ];

  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  const displayedItems = isExpanded ? filteredItems : filteredItems.slice(0, 6);
  const hasMore = filteredItems.length > 6;

  const getItemName = (item: MenuItem) => {
    if (language === "th") return item.thaiName || item.name;
    if (language === "ru") return item.ruName || item.name;
    if (language === "zh") return item.zhName || item.name;
    return item.name;
  };

  const getServingTemp = (temp: string) => {
    if (temp === "Both") return t("temp.both", "Hot / Iced");
    if (temp === "Hot") return t("temp.hot", "Hot");
    if (temp === "Iced") return t("temp.iced", "Iced");
    if (temp === "Frappe") return t("temp.frappe", "Frappe");
    if (temp === "Sparkling") return t("temp.sparkling", "Sparkling");
    return temp;
  };

  return (
    <section id="collection" className="relative py-28 sm:py-36 bg-gradient-to-br from-[#FFFBF5] via-[#F5EAD9] to-[#EBD5BC] text-[#241711] overflow-hidden">
      {/* Dynamic Dual-Color Glowing Orbs */}
      <div className="absolute top-1/4 right-0 w-[650px] h-[650px] bg-gradient-to-tr from-[#FFA827]/25 to-[#FFD580]/15 rounded-full blur-[150px] pointer-events-none animate-glow-pulse" />
      <div className="absolute bottom-10 left-0 w-[550px] h-[550px] bg-gradient-to-br from-[#8B5E33]/25 to-[#D46B28]/20 rounded-full blur-[150px] pointer-events-none animate-float" />
      <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-[#FFA827]/15 rounded-full blur-[130px] pointer-events-none animate-float-delayed" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#241711]">
              {t("collection.title", "Single-Origin Brews & Crafted Beverages")}
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setIsExpanded(false);
                }}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-[#8B5E33] via-[#D49B55] to-[#8B5E33] text-[#FFF9F2] font-semibold shadow-[0_4px_20px_rgba(139,94,51,0.4)] border border-[#F5C842]/50 scale-105"
                    : "bg-white/80 text-[#5A453A] border border-[#D5C2B0] hover:border-[#8B5E33] hover:text-[#2C1F18]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
        {/* Product Cards Grid with 3D Tilt and Luxury Card Elevation */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {displayedItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedProduct(item)}
                className="card-3d dual-glow-card group relative rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-between"
              >
                {/* Product Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF5EE]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-60" />
                </div>

                {/* Product Info */}
                <div className="p-6 flex flex-col flex-grow justify-between bg-white">
                  <div>
                    <div className="flex items-baseline justify-between gap-2 mb-1.5">
                      <h3 className="font-serif text-xl sm:text-2xl text-[#2C1F18] group-hover:text-[#8B5E33] transition-colors leading-snug">
                        {getItemName(item)}
                      </h3>
                      <div className="text-right shrink-0">
                        {item.priceHotTHB && item.priceIcedTHB ? (
                          <div className="text-xs sm:text-sm font-mono text-[#8B5E33] font-semibold whitespace-nowrap">
                            <span className="text-[#6D5345] text-[10px]">{t("common.hot", "HOT")} </span>฿{item.priceHotTHB}
                            <span className="text-[#C4A77D] mx-1">/</span>
                            <span className="text-[#6D5345] text-[10px]">{t("common.iced", "ICED")} </span>฿{item.priceIcedTHB}
                          </div>
                        ) : (
                          <span className="font-mono text-base font-semibold text-[#8B5E33]">
                            ฿{item.priceTHB}
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-xs font-mono text-[#8B5E33] tracking-wider mb-2">
                      {item.origin}
                    </p>
                  </div>

                  {/* Clean Card Footer with Details Action */}
                  <div className="pt-3 border-t border-[#E2D5C8] flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#6D5345] tracking-wider">
                      {getServingTemp(item.servingTemp)}
                    </span>
                    <span className="text-[11px] text-[#8B5E33] font-mono uppercase tracking-wider group-hover:translate-x-1.5 transition-transform font-semibold flex items-center gap-1">
                      {t("common.details", "Details")} <span>&rarr;</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Explore All / Show Less Button with Metallic Gold Gradient */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-14 sm:mt-16 flex flex-col items-center justify-center gap-2.5"
          >
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setIsExpanded(!isExpanded)}
              className="btn-dual-glow group px-9 py-4 rounded-full text-[#FFF9F2] text-xs font-mono uppercase tracking-[0.2em] font-semibold border border-[#F5C842]/60 flex items-center gap-3 cursor-pointer"
            >
              <span>
                {isExpanded
                  ? t("collection.show_less", "Show Less")
                  : `${t("collection.explore_full", "Explore Full Menu")} (${filteredItems.length})`}
              </span>
              <span className={`text-[#FFF9F2] transition-transform duration-300 font-bold ${isExpanded ? "rotate-180" : "group-hover:translate-y-1"}`}>
                &darr;
              </span>
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-[#241C17] border border-[#FFA827]/40 rounded-2xl overflow-hidden shadow-2xl z-10 text-[#FDFBF7] my-8"
            >
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#241C17] via-[#241C17]/30 to-transparent" />
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:text-[#FFA827] transition-colors"
                >
                  &times;
                </button>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#FFA827]">
                      {selectedProduct.origin}
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl text-[#F4F0E8] mt-1">
                      {getItemName(selectedProduct)}
                    </h3>
                    <p className="text-xs text-[#B69A70] font-mono mt-1">
                      {selectedProduct.servingTemp === "Both"
                        ? t("collection.hot_iced_available", "Hot & Iced Available")
                        : `${getServingTemp(selectedProduct.servingTemp)} ${t("collection.served", "Served")}`}
                    </p>
                  </div>
                  <div className="text-right">
                    {selectedProduct.priceHotTHB && selectedProduct.priceIcedTHB ? (
                      <div className="font-mono text-xl sm:text-2xl font-bold text-[#FFA827]">
                        <span className="text-xs text-[#D9CBB8]/70 mr-1 font-normal">{t("common.hot", "HOT")}</span>฿{selectedProduct.priceHotTHB}
                        <span className="mx-2 text-[#FFA827]/40">/</span>
                        <span className="text-xs text-[#D9CBB8]/70 mr-1 font-normal">{t("common.iced", "ICED")}</span>฿{selectedProduct.priceIcedTHB}
                      </div>
                    ) : (
                      <span className="font-mono text-2xl font-bold text-[#FFA827]">
                        ฿{selectedProduct.priceTHB}
                      </span>
                    )}
                  </div>
                </div>

                {selectedProduct.description && (
                  <p className="text-sm text-[#D9CBB8] font-light leading-relaxed">
                    {selectedProduct.description}
                  </p>
                )}

                {selectedProduct.notes && selectedProduct.notes.length > 0 && (
                  <div className="pt-4 border-t border-white/10 space-y-3">
                    <h4 className="text-xs uppercase font-mono tracking-widest text-[#B69A70]">
                      {t("collection.cupping_notes", "Cupping & Sensory Notes")}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.notes.map((note, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full text-xs font-mono tracking-wider text-[#FFA827] bg-[#FFA827]/10 border border-[#FFA827]/30"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-4 flex items-center justify-between text-xs font-mono text-[#D9CBB8]/70">
                  <span>{t("collection.serving_style", "Serving Style")}: {getServingTemp(selectedProduct.servingTemp)}</span>
                  <span>{t("collection.roast_profile", "Roast Profile")}: {selectedProduct.roastLevel || t("collection.artisanal_blend", "Artisanal Blend")}</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
