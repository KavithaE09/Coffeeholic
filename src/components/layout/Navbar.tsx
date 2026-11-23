"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, ChevronRight, Check } from "lucide-react";
import MagneticButton from "@/components/common/MagneticButton";
import BrandLogo from "@/components/common/BrandLogo";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

interface NavbarProps {
  onOpenReservation: () => void;
}

export default function Navbar({ onOpenReservation }: NavbarProps) {
  const { t, language, setLanguage, languages } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bkkTime, setBkkTime] = useState("");

  // Live Bangkok / Thailand Time (UTC+7)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Bangkok",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setBkkTime(new Intl.DateTimeFormat("en-GB", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Scroll detection for header background blur intensification
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop (>= 1024px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: t("nav.philosophy", "Philosophy"), href: "#about" },
    { name: t("nav.collection", "Collection"), href: "#collection" },
    { name: t("nav.experience", "Experience"), href: "#experience" },
    { name: t("nav.motion", "Motion"), href: "#motion" },
    { name: t("nav.gallery", "Gallery"), href: "#gallery" },
    { name: t("nav.ateliers", "Ateliers"), href: "#locations" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? "bg-[#3B2A22]/95 backdrop-blur-2xl border-b border-[#C4A77D]/25 py-2.5 sm:py-3.5 shadow-2xl"
          : "bg-gradient-to-b from-[#3B2A22]/95 via-[#3B2A22]/50 to-transparent py-3 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo - Responsive on mobile, tablet, and desktop */}
          <BrandLogo href="/" size="md" variant="combined" priority />

          {/* ========================================================
              DESKTOP NAVIGATION (1024px+ / lg: and xl:)
             ======================================================== */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-7">
            <nav className="flex items-center gap-4 xl:gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[11px] xl:text-xs uppercase tracking-widest text-[#E8DBCE]/85 hover:text-[#D49B55] transition-colors relative py-1 group font-medium"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D49B55] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Language Switcher Dropdown */}
            <LanguageSwitcher variant="desktop" />

        
          </div>

          {/* ========================================================
              MOBILE & TABLET CONTROLS (< 1024px / lg:hidden)
             ======================================================== */}
          <div className="flex lg:hidden items-center gap-2 sm:gap-3">
            {/* Language Switcher for Mobile */}
            <LanguageSwitcher variant="mobile" />

            {/* Hamburger / Close Drawer Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 text-[#F4F0E8] hover:text-[#FFA827] transition-colors rounded-lg bg-white/5 border border-white/10 active:scale-95"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================
          FULL LUXURY MOBILE & TABLET DRAWER OVERLAY
         ======================================================== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-[#3B2A22]/98 border-b border-[#C4A77D]/25 px-5 sm:px-8 pt-4 pb-8 overflow-y-auto max-h-[calc(100vh-4.5rem)] shadow-2xl"
          >
            {/* Navigation Links List */}
            <nav className="flex flex-col gap-1 divide-y divide-white/5">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="group flex items-center justify-between text-sm sm:text-base uppercase tracking-widest text-[#F4F0E8]/85 hover:text-[#FFA827] py-3 transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-[#D9CBB8]/40 group-hover:text-[#FFA827] group-hover:translate-x-1 transition-all" />
                </motion.a>
              ))}
            </nav>

            {/* Quick In-Drawer Language Switcher */}
            <div className="pt-5 mt-3 border-t border-white/10">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B69A70] block mb-2">
                Language / ภาษา / Язык / 语言
              </span>
              <div className="grid grid-cols-2 gap-2">
                {languages.map((l) => {
                  const isSelected = language === l.code;
                  return (
                    <button
                      key={l.code}
                      onClick={() => setLanguage(l.code)}
                      className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-mono transition-all ${
                        isSelected
                          ? "bg-[#FFA827]/20 border border-[#FFA827] text-[#FFA827] font-semibold"
                          : "bg-white/5 border border-white/5 text-[#D9CBB8]/70 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-bold opacity-60">{l.countryCode}</span>
                        <span>{l.nativeName}</span>
                      </div>
                      {isSelected && <Check className="w-3.5 h-3.5 text-[#FFA827]" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Drawer Bottom Local Time */}
            <div className="pt-5 mt-4 flex flex-col gap-3">
              <div className="text-xs font-mono text-[#D9CBB8]/60 flex items-center justify-between px-1">
                <span>{t("nav.location_time", "Pattaya, Thailand (GMT+7)")}</span>
                <span className="text-[#FFA827] font-semibold">{bkkTime}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
