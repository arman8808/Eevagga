import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiPhone, FiX } from "react-icons/fi";

const StickyAd = () => {
  const [showAd, setShowAd] = useState(false);

  useEffect(() => {
    const adDismissed = Cookies.get("adDismissed");
    if (!adDismissed) setTimeout(() => setShowAd(true), 1000);
  }, []);

  const handleDismiss = () => {
    Cookies.set("adDismissed", "true", { expires: 30 });
    setShowAd(false);
  };

  // Animation variants
  const containerVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        ease: [0.25, 0.1, 0.25, 1],
        duration: 0.6
      }
    },
    exit: {
      y: "100%",
      opacity: 0,
      transition: { ease: "easeIn", duration: 0.3 }
    }
  };

  const textVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: "100%",
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
        delay: 0.3
      }
    }
  };

  const buttonVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.6,
        duration: 0.8
      }
    }
  };

  return (
    <AnimatePresence>
      {showAd && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-x-0 bottom-0 flex justify-center z-50 px-4 pb-4"
        >
          <div className="w-full max-w-xl bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="relative p-6">
              {/* Close button */}
              <motion.button
                onClick={handleDismiss}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ rotate: 90, scale: 1.1 }}
                transition={{ type: "spring", delay: 0.8 }}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 p-1.5 rounded-full bg-gray-100"
                aria-label="Close"
              >
                <FiX className="text-lg" />
              </motion.button>

              {/* Content */}
              <div className="text-center space-y-2">
                {/* Typing effect with cursor */}
                <div className="overflow-hidden mx-auto max-w-max">
                  <motion.h3
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-2xl font-medium text-gray-900 whitespace-nowrap relative"
                  >
                    Wedding Planning Overload?
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ repeat: Infinity, duration: 0.8 }}
                      className="absolute -right-3 top-0.5 text-gray-400"
                    >
                      |
                    </motion.span>
                  </motion.h3>
                </div>

                {/* Subtext */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: 1,
                    transition: { delay: 1.1, duration: 0.4 }
                  }}
                  className="text-gray-500 text-sm"
                >
                  We handle the details so you can enjoy the magic
                </motion.p>

                {/* Bouncing buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
                  <motion.a
                    variants={buttonVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ y: -3 }}
                    href="mailto:info@evagaentertainment.com"
                    className="flex items-center justify-center gap-2 bg-[#6A1B9A] text-white px-6 py-3.5 rounded-xl font-medium"
                  >
                    <FiMail className="text-lg" /> Email Experts
                  </motion.a>

                  <motion.a
                    variants={buttonVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ y: -3 }}
                    transition={{ delay: 0.1 }}
                    href="tel:+918050279101"
                    className="flex items-center justify-center gap-2 bg-[#F9D703] text-gray-900 px-6 py-3.5 rounded-xl font-medium"
                  >
                    <FiPhone className="text-lg" /> Instant Call
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyAd;