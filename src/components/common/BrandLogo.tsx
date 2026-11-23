"use client";

import Image from "next/image";
import Link from "next/link";
import { Sparkles } from "lucide-react";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "cutout" | "combined" | "badge";
  showTagline?: boolean;
  priority?: boolean;
  href?: string;
}

export default function BrandLogo({
  className = "",
  size = "md",
  variant = "combined",
  showTagline = true,
  priority = false,
  href,
}: BrandLogoProps) {
  // Dimension presets for the cutout image (aspect ratio ~ 1.71 : 1)
  const dimensions = {
    sm: { width: 100, height: 42, text: "text-base", subText: "text-[8px]" },
    md: { width: 130, height: 52, text: "text-lg", subText: "text-[9px]" },
    lg: { width: 170, height: 68, text: "text-2xl", subText: "text-[10px]" },
    xl: { width: 240, height: 96, text: "text-3xl", subText: "text-xs" },
  };

  const dim = dimensions[size];

  const content = (
    <div
      className={`group inline-flex items-center gap-3 select-none transition-transform duration-300 hover:scale-[1.02] ${className}`}
    >
      {/* Authentic Transparent Neon Cutout Asset */}
      <div
        className="relative flex-shrink-0 transition-all duration-300 group-hover:brightness-110 w-[90px] h-[36px] sm:w-[125px] sm:h-[50px]"
      >
        <Image
          src="/assets/logo/coffeeholic-cutout.webp"
          alt="Coffee HOLIC Cafe & Bar Pattaya"
          fill
          priority={priority}
          sizes="(max-width: 640px) 180px, 260px"
          className="object-contain filter drop-shadow-[0_0_12px_rgba(255,168,39,0.45)] group-hover:drop-shadow-[0_0_20px_rgba(255,168,39,0.7)] transition-all duration-300"
        />
      </div>

      {/* Editorial Typographic Companion for "combined" variant */}
      {variant === "combined" && (
        <div className="hidden sm:flex flex-col justify-center border-l border-[#FFA827]/30 pl-3">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-serif tracking-wider font-semibold text-[#F4F0E8] leading-tight ${dim.text}`}
            >
              COFFEE <span className="text-[#FFA827] italic font-medium">HOLIC</span>
            </span>
          </div>

          {showTagline && (
            <div className="flex items-center gap-1.5 mt-0.5">
              <span
                className={`font-mono uppercase tracking-[0.25em] text-[#D9CBB8]/75 font-light ${dim.subText}`}
              >
                Cafe & Bar • Pattaya
              </span>
              <span className="w-1 h-1 rounded-full bg-[#FFA827] animate-pulse" />
            </div>
          )}
        </div>
      )}

      {/* Minimalist Badge variant */}
      {variant === "badge" && (
        <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FFA827]/10 border border-[#FFA827]/25 text-[10px] font-mono uppercase tracking-wider text-[#FFA827]">
          <Sparkles className="w-3 h-3 text-[#FFA827]" />
          <span>Jomtien</span>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block focus:outline-none">
        {content}
      </Link>
    );
  }

  return content;
}

