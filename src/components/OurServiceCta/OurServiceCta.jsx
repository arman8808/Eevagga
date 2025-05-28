import { motion } from "framer-motion";

const OurServiceCta = () => {
  const handleBooking = () => {
    // Scroll to booking section
    const section = document.getElementById("booking-section1");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="h-[40dvh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-4 py-8">
   

      {/* Content Container */}
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Left Section - centered content */}
          <motion.div
            className="flex-1 text-center lg:text-left max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
              whileHover={{ scale: 1.02 }}
            >
              Transform Your Digital Experience
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Discover innovative solutions that redefine how you interact with
              technology. Our platform combines cutting-edge design with
              intuitive functionality.
            </motion.p>
          </motion.div>

          {/* Right Section - centered button */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold py-5 px-10 rounded-full text-xl shadow-lg relative overflow-hidden group"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBooking}
            >
              <span className="relative z-10">Get Started Now</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurServiceCta;
