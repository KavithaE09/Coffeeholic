"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface NeonSignProps {
  className?: string;
  size?: "split" | "large" | "full";
  align?: "left" | "center";
}

export default function NeonSign({
  className = "",
  size = "large",
  align = "center",
}: NeonSignProps) {
  const sizeClasses =
    size === "split"
      ? "w-[70vw] max-w-[12rem] sm:max-w-[15rem] md:max-w-[18rem] lg:max-w-[21rem] xl:max-w-[23rem] aspect-[826/388]"
      : size === "large"
      ? "w-[75vw] max-w-[14rem] sm:max-w-[19rem] md:max-w-[23rem] lg:max-w-[26rem] xl:max-w-[28rem] aspect-[826/388]"
      : "w-[80vw] max-w-[16rem] sm:max-w-[22rem] md:max-w-[27rem] lg:max-w-[31rem] xl:max-w-[34rem] aspect-[826/388]";

  const objectPosition = align === "left" ? "object-left" : "object-center";

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative inline-flex items-center justify-center max-w-full ${className}`}
    >
      <div className={`relative ${sizeClasses} max-w-full`}>
        <Image
          src="/assets/logo/coffeeholic-cutout.webp"
          alt="Coffee HOLIC – Cafe & Bar"
          fill
          priority
          sizes="(max-width: 640px) 320px, (max-width: 768px) 480px, (max-width: 1024px) 640px, 800px"
          className={`object-contain ${objectPosition} filter drop-shadow-[0_0_20px_rgba(255,168,39,0.55)] drop-shadow-[0_0_45px_rgba(255,168,39,0.25)]`}
        />
      </div>
    </motion.div>
  );
}
