import { motion } from "framer-motion";
import trustBg from "../../assets/WhyPeopleTrustEvaga.webp"; 

const WhyPeopleTrustEvaga = () => {
  const trustItems = [
    {
      title: "End To End Service ",
      text: "From Start to Finish, we provide end-to-end service."
    },
    {
      title: "Pricing You Can Trust",
      text: "Upfront, clear, and fair — no surprises, just honest deals."
    },
    {
      title: "Your Personal Event Partner",
      text: "Expert guidance tailored to your unique celebration."
    },
    {
      title: "Effortless Event Planning",
      text: "Smooth, simple, and stress-free from start to finish."
    }
  ];

 const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        mass: 0.5
      }
    }
  };
  return (
   <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img 
          src={trustBg} 
          alt="Trust Background" 
          className="w-full h-full object-cover"
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto">
        {/* Animated Title with Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl font-normal text-center text-white mb-6"
            initial={{ letterSpacing: "0.5em" }}
            animate={{ letterSpacing: "0.05em" }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Why People Trust Evaga?
          </motion.h2>
          <motion.div
            className="mx-auto h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"
            initial={{ width: 0 }}
            whileInView={{ width: "40%" }}
            transition={{ duration: 1.5, delay: 0.8 }}
          />
        </motion.div>

        {/* Cards Grid with Enhanced Interactions */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.5 }
            }
          }}
        >
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 cursor-pointer overflow-hidden"
              whileHover={{ 
                y: -15,
                scale: 1.03,
                boxShadow: "0 25px 50px -12px rgba(255, 255, 255, 0.15)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Animated Border Gradient */}
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{
                  opacity: 1,
                  background: "linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)"
                }}
                transition={{ duration: 0.4 }}
              />

              {/* Floating Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold text-white mb-4 relative">
                  <motion.span
                    className="absolute -left-2 h-full w-1 bg-white/40 rounded"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 0.6 }}
                  />
                  {item.title}
                </h3>
                <motion.p
                  className="text-white/85 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  {item.text}
                </motion.p>
              </motion.div>

              {/* Hover Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{
                  opacity: 0.3,
                  boxShadow: "0 0 40px 10px rgba(255,255,255,0.2)"
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Ambient Animation */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ backgroundPosition: "0% 0%" }}
        animate={{ backgroundPosition: "100% 100%" }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          background: `linear-gradient(
            45deg,
            rgba(255,255,255,0.01) 0%,
            rgba(255,255,255,0.03) 50%,
            rgba(255,255,255,0.01) 100%
          )`,
          backgroundSize: "200% 200%"
        }}
      />
    </section>
  );
};

export default WhyPeopleTrustEvaga;