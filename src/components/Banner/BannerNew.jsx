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
  const itemVariants = {
    hidden: { x: -40, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 20 },
    },
  };

  const listItemVariants = {
    hover: {
      x: 10,
      color: "#6A1B9A", // Changed from #FFE500
      transition: { type: "spring", stiffness: 300 },
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
          <motion.div className="w-1/2 pr-12 space-y-8" variants={textVariants}>
            <motion.div variants={itemVariants}>
              <motion.h1
                className="text-5xl font-bold text-white leading-tight mb-6"
                whileHover={{ y: -3 }}
              >
              Celebrate Without the &nbsp; 
                <motion.span
                  className="inline-block text-white border-b-4 border-[#FFE500] pb-1"
                  whileHover={{
                    rotate: [0, -2, 2, 0],
                    scale: 1.05,
                  }}
                >
                Stress  
                </motion.span>
              </motion.h1>
            </motion.div>
{/* 
            <motion.div variants={itemVariants}>
              <motion.p
                className="text-xl text-white/80 leading-relaxed mb-8 max-w-[500px]"
                whileHover={{ x: 5 }}
              >
                Create unforgettable experiences with our comprehensive event
                management platform
              </motion.p>
            </motion.div>

            <motion.ul
              className="space-y-5 relative pl-2"
              variants={textVariants}
            >
              <motion.li
                className="flex items-center text-white text-lg group"
                variants={itemVariants}
                whileHover="hover"
              >
                <span className="w-3 h-3 bg-[#FFE500] rounded-full mr-4 transform group-hover:scale-125 transition-all" />
                <span className="group-hover:text-[#FFE500] transition-colors">
                  Customizable event packages
                </span>
              </motion.li>

              <motion.li
                className="flex items-center text-white text-lg group"
                variants={itemVariants}
                whileHover="hover"
              >
                <span className="w-3 h-3 bg-[#FFE500] rounded-full mr-4 transform group-hover:scale-125 transition-all" />
                <span className="group-hover:text-[#FFE500] transition-colors">
                  Secure payment processing
                </span>
              </motion.li>

              <motion.li
                className="flex items-center text-white text-lg group"
                variants={itemVariants}
                whileHover="hover"
              >
                <span className="w-3 h-3 bg-[#FFE500] rounded-full mr-4 transform group-hover:scale-125 transition-all" />
                <span className="group-hover:text-[#FFE500] transition-colors">
                  Real-time availability tracking
                </span>
              </motion.li>
            </motion.ul> */}

            {/* Decorative Element */}
            <motion.div
              className="absolute left-0 -bottom-20 w-64 h-64 bg-[#6A1B9A]/30 blur-[80px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
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
