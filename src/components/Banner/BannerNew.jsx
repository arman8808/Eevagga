import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import BookingForm from "../../pages/BookingForm";

function BannerNew({ image, height, category }) {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const handleSearch = () => {
    const query = new URLSearchParams({
      q: "",
      category: category,
    }).toString();
    navigate(`/search?${query}`);
  };

  // Animation variants
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
    hidden: { x: -80, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { delay: 0.4, duration: 0.8, ease: "easeOut" },
    },
  };

  const formVariants = {
    hidden: { x: 80, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { delay: 0.6, duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="relative w-full min-h-screen overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Scaled Background Image */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ scale: 1.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <img
          src={image}
          alt="Banner"
          className="object-cover w-full h-full"
          decoding="async"
        />
        {/* Ultra Subtle Glass Effect (5% opacity) */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px]"></div>
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 h-full min-h-screen flex flex-col justify-center">
        <div className="hidden lg:flex items-center justify-between h-full">
          {/* Left Text Content */}
          <motion.div className="w-1/2 pr-12" variants={textVariants}>
            <motion.h1
              className="text-5xl font-bold text-white mb-6"
              whileHover={{ y: -3 }}
            >
              Plan Your Perfect Event.
            </motion.h1>
            <motion.p
              className="text-xl text-white/90 mb-8"
              whileHover={{ x: 5 }}
            >
              An all-in-one event booking platform
            </motion.p>
            <motion.div
              className="text-white px-8 py-1 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ul className="list-disc pl-5 space-y-2">
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Choose Your Package
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Pay Securely
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Confirm Your Date
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Right Form */}
          <motion.div className="w-1/2 pl-12" variants={formVariants}>
          
              <BookingForm />
           
          </motion.div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col items-center justify-center h-full pt-24 pb-16">
          <motion.div
            className="w-full text-center mb-12"
            variants={textVariants}
          >
            <motion.h1
              className="text-3xl font-bold text-white mb-4"
              whileHover={{ y: -2 }}
            >
              Discover Amazing Products
            </motion.h1>
            <motion.p
              className="text-lg text-white/90 mb-6"
              whileHover={{ x: 3 }}
            >
              Find exactly what you're looking for.
            </motion.p>
            <motion.button
              className="bg-[#FFE500] text-[#6A1B9A] px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
              onClick={category ? handleSearch : undefined}
              whileTap={{ scale: 0.95 }}
            >
              Shop Now
            </motion.button>
          </motion.div>

          <motion.div className="w-full max-w-md" variants={formVariants}>
           
              <BookingForm />
            
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default BannerNew;
