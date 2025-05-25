import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import expertImage from "../../assets/img11.webp";

const ExpertSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <motion.section 
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${expertImage})`,
          y 
        }}
      >
        {/* Gradient Overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ letterSpacing: "0.2em" }}
            whileInView={{ letterSpacing: "0.05em" }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            Speak to an Expert
          </motion.h2>
          
          <motion.p
            className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Get personalized guidance from our event specialists
          </motion.p>

          {/* Animated Button */}
          <motion.a
            href="/contact-expert"
            className="inline-block px-12 py-4 rounded-full bg-white text-slate-900 font-semibold text-lg relative overflow-hidden"
            whileHover={{
              scale: 1.05,
              backgroundColor: "#6366f1",
              color: "#ffffff"
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <span className="relative z-10">Schedule Consultation</span>
            {/* Button Glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0"
              whileHover={{ opacity: 0.2 }}
            />
          </motion.a>
        </motion.div>
      </div>

      {/* Scrolling Indicator */}
      <motion.div
        className="absolute bottom-8 left-0 right-0 text-center text-white/80"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ 
          y: { duration: 2, repeat: Infinity },
          opacity: { duration: 0.5 }
        }}
      >
        ↓ Scroll to explore ↓
      </motion.div>
    </motion.section>
  );
};

export default ExpertSection;