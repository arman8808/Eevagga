
import { motion } from "framer-motion";


function BannerNew({ image, height, category }) {


  const handleBooking = () => {
    // Scroll to booking section
    const section = document.getElementById("booking-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Updated animation variants
  const containerVariants = {
    hidden: { scale: 1.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 0.5,
        duration: 1.2,
      },
    },
  };

  const textVariants = {
    hidden: { y: 50, opacity: 0 }, // Changed from x to y
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.4, duration: 0.8, ease: "easeOut" },
    },
  };



  const itemVariants = {
    hidden: { y: 30, opacity: 0 }, // Changed from x to y
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 20 },
    },
  };

  return (
    <motion.div
      className="relative w-full min-h-[85dvh] overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ scale: 1.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Fixed image styling */}
        <img
          src={image}
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover min-w-full min-h-full"
          decoding="async"
          style={{
            aspectRatio: "16 / 9",
          }}
        />
        <div className="absolute inset-0 bg-black/45 backdrop-blur-[1px]"></div>
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 h-full min-h-[80dvh] flex flex-col justify-end pb-[10%]">
        <motion.div className="text-center space-y-8" variants={textVariants}>
          <motion.div variants={itemVariants}>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              whileHover={{ y: -3 }}
            >
              Celebrate Without the Stress
            </motion.h1>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center"
          >
            <motion.button
              className="px-12 py-4 bg-[#FFE500] rounded-[0.5rem] text-xl font-bold text-primary relative z-10"
              onClick={handleBooking}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              style={{ pointerEvents: "auto" }}
              // transition={{ duration: 0.2, delay: 0.2, type: "spring" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Free Expert Advice
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Decorative Element */}
        <motion.div
          className="absolute left-1/2 -bottom-20 w-64 h-64 bg-[#6A1B9A]/30 blur-[80px] -translate-x-1/2 z-[-1]" // 👈 Add negative z-index
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
    </motion.div>
  );
}

export default BannerNew;
