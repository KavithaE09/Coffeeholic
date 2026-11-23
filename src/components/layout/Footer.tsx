"use client";

import { useState } from "react";
import { ArrowUp, Music2, CheckCircle2 } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/common/BrandIcons";
import BrandLogo from "@/components/common/BrandLogo";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#180E09] via-[#24150E] to-[#0D0704] text-[#FDF9F3] border-t border-[#D49B55]/30 pt-20 pb-12 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#D49B55]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Column 1: Brand & Logo (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            <BrandLogo href="/" size="md" variant="combined" />

            <p className="text-xs sm:text-sm text-[#E8DBCE]/85 font-light max-w-sm leading-relaxed">
              {t("footer.desc", "An architectural coffee sanctuary and twilight mixology bar founded on Japanese precision and Northern Thai single-origin terroir.")}
            </p>

            <div className="flex items-center gap-3 text-xs font-mono text-[#D49B55]">
              <span>Coffee HOLIC Pattaya</span>
              <span>•</span>
              <span>Jomtien, Thailand</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#48332A] border border-[#C4A77D]/30 flex items-center justify-center text-[#E8DBCE] hover:text-[#D49B55] hover:border-[#D49B55]/50 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#48332A] border border-[#C4A77D]/30 flex items-center justify-center text-[#E8DBCE] hover:text-[#D49B55] hover:border-[#D49B55]/50 transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://spotify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#48332A] border border-[#C4A77D]/30 flex items-center justify-center text-[#E8DBCE] hover:text-[#D49B55] hover:border-[#D49B55]/50 transition-colors"
                aria-label="Spotify Atelier Playlist"
              >
                <Music2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-[0.2em] text-[#C4A77D]">
              Atelier Directory
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#E8DBCE]/85 font-light">
              <li>
                <a href="#about" className="hover:text-[#D49B55] transition-colors">
                  Philosophy &amp; Terroir
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-[#D49B55] transition-colors">
                  Curated Coffee &amp; Cocktail Menu
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#FFA827] transition-colors">
                  Day Sanctuary • Night Bar
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#FFA827] transition-colors">
                  Visual Archive &amp; Architecture
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-[#FFA827] transition-colors">
                  Pattaya Atelier Location
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: VIP Newsletter & Private Tastings (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-[0.2em] text-[#B69A70]">
              The Coffee HOLIC Gazette
            </h4>
            <p className="text-xs text-[#D9CBB8]/75 font-light leading-relaxed">
              Receive private invitations to seasonal single-origin micro-lot arrivals, barista omakase sessions, and evening vinyl cocktail nights.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#241C17] border border-[#B69A70]/30 rounded-lg px-3.5 py-2 text-xs text-[#FDFBF7] placeholder:text-[#D9CBB8]/40 focus:border-[#FFA827] focus:outline-none transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#FFA827] text-[#140F0B] rounded-lg font-semibold text-xs uppercase tracking-wider hover:brightness-110 transition-all shrink-0"
                  >
                    Join
                  </button>
                </div>
                <p className="text-[10px] text-[#D9CBB8]/50">
                  Strictly curated correspondence. Unsubscribe at any time.
                </p>
              </form>
            ) : (
              <div className="p-3 bg-[#FFA827]/10 border border-[#FFA827]/30 rounded-lg text-xs text-[#FFA827] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Welcome to the private tasting circle. Check your inbox soon.</span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Giant Watermark & Copyright */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#D9CBB8]/50">
          <p>
            &copy; {new Date().getFullYear()} Coffee HOLIC – Cafe &amp; Bar. All rights reserved. Pattaya, Thailand.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-[#FFA827] transition-colors text-xs font-mono uppercase tracking-wider group"
          >
            <span>{t("footer.back_to_top", "Back to top")}</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform text-[#FFA827]" />
          </button>
        </div>

        {/* Giant Watermark Typography */}
        <div className="mt-8 select-none pointer-events-none text-center">
          <p className="font-serif text-[11vw] tracking-tighter leading-none text-white/[0.02] font-black uppercase">
            COFFEE HOLIC
          </p>
        </div>
      </div>
    </footer>
  );
}
