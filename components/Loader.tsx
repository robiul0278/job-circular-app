'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';


const Loader = () => {
  const [showLoader, setShowLoader] = useState(false);
  const [pageReady, setPageReady] = useState(false);

  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      if (!pageReady) {
        setShowLoader(true);
      }
    }, 300);

    const fakeLoad = setTimeout(() => {
      setPageReady(true);
      setShowLoader(false);
    }, 1500);

    return () => {
      clearTimeout(delayTimeout);
      clearTimeout(fakeLoad);
    };
  }, [pageReady]);

  const text = 'Diploma Job Circular';

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const letterVariants: Variants  = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 100,
      },
    },
  };

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center dark:bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="flex text-2xl font-bold"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {text.split('').map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                animate={{
                  color: [
                    '#16a34a', // green
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
