'use client';

import { useRef } from "react";
import { motion, Variants, easeOut } from "framer-motion";
import SearchForm from "./SearchForm";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, duration: 0.8, ease: easeOut },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { ease: easeOut } },
};

const Hero = ({ query }: { query: string }) => {
  const waveRef = useRef<SVGPathElement | null>(null);

  return (
    <section className="relative w-full py-28 overflow-hidden bg-gradient-to-br from-green-50 via-slate to-slate-300 dark:from-gray-900 dark:via-gray dark:to-gray-900">
      {/* Static SVG Wave */}
      <div className="absolute inset-0 -z-10">
        <svg
          className="w-full h-full object-cover"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            ref={waveRef}
            fill="#d1d5db"
            className="dark:fill-[#374151]"
            d="M0,64L48,96C96,128,192,192,288,192C384,192,480,128,576,112C672,96,768,128,864,128C960,128,1056,96,1152,80C1248,64,1344,64,1392,64L1440,64L1440,320L0,320Z"
          />
        </svg>
      </div>
      {/* Hero Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto space-y-6"
      >
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl font-bold text-gray-900"
        >
         <span className="text-slate-700 dark:text-slate-300">“শুধুমাত্র ডিপ্লোমা ইঞ্জিনিয়ারদের জন্য চাকরির ওয়েবসাইট”</span>
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-sm font-medium md:text-lg lg:text-lg text-gray-700 dark:text-gray-300"
        >
          সরকারি হোক বা বেসরকারি — Civil, Electrical, Mechanical, Power বা Computer —
          প্রতিটি ট্রেডের চাকরির বিজ্ঞপ্তি এক জায়গায়।  
        </motion.p>
        <motion.div variants={itemVariants}>
          <SearchForm query={query} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
