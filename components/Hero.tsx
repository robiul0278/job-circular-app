'use client';

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

  return (
    <section className="hero relative w-full py-28 overflow-hidden bg-gradient-to-br dark:from-gray-900 dark:via-gray dark:to-gray-900">

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
