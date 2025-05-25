import { motion } from "framer-motion";
import expertImage from "../../assets/whychooseus.webp";
import { internalRoutes } from "../../utils/internalRoutes";

const ExpertSection = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-primary text-4xl md:text-5xl font-normal text-center"
        >
          Professional guidance for a seamless, stress-free event
        </motion.h2>

        {/* Image */}
        <motion.div
          className="w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img
            src={expertImage}
            alt="Expert consultation"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Button */}
        <motion.a
          href={internalRoutes?.bookingForm}
          className="px-12 py-4 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-primary-700 transition-colors bg-primary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
         Speak to an advisor 
        </motion.a>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Animated background dots */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0.5, 1, 0.5],
              transition: {
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              },
            }}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default ExpertSection;
