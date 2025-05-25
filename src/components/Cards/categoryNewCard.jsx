import { motion } from "framer-motion";

const CategoryNewCard = ({
  imageUrl,
  title,
  text,
  link,
  className = "",
}) => {
  return (
   <motion.a
      href={link}
      rel="noopener noreferrer"
      className="relative block h-[480px] w-full overflow-hidden rounded-[1.5rem] shadow-2xl"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20%" }}
      whileHover="hover"
      whileTap="tap"
    >
      {/* Parallax Background Layer */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
        variants={{
          hover: { scale: 1.05 },
          tap: { scale: 1.03 }
        }}
        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
      />

      {/* Dynamic Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
        variants={{
          hover: { opacity: 0.9 },
          tap: { opacity: 0.95 }
        }}
      />

      {/* Floating Content Panel */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 px-8 pb-8"
        variants={{
          hover: { y: -20 },
          tap: { y: -10 }
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.div
          className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
          variants={{
            hover: { 
              backgroundColor: 'rgba(255,255,255,0.08)',
              boxShadow: '0 12px 40px rgba(0,0,0,0.4)'
            }
          }}
        >
          {/* Inner Glow Effect */}
          <div className="absolute inset-0 rounded-2xl pointer-events-none mix-blend-overlay shadow-[inset_0_1px_2px_rgba(255,255,255,0.15)]" />

          <div className="p-6 space-y-4 relative">
            {/* Title with Decorative Line */}
            <motion.h3
              className="text-3xl font-bold text-white"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {title}
              <motion.div
                className="h-[2px] w-16 bg-white/40 mt-2"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.4 }}
              />
            </motion.h3>

            {/* Description Text */}
            <motion.p
              className="text-white/85 leading-relaxed line-clamp-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {text}
            </motion.p>

            {/* Animated CTA */}
            <motion.div
              className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <span className="font-medium">Explore Packages</span>
              <motion.span
                className="text-xl"
                variants={{
                  hover: { x: 5 },
                  tap: { x: 3 }
                }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                ↗
              </motion.span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Interactive Border Glow */}
      <motion.div
        className="absolute inset-0 rounded-[1.5rem] pointer-events-none border-2 border-transparent"
        variants={{
          hover: {
            borderColor: 'rgba(255,255,255,0.15)',
            boxShadow: '0 0 40px rgba(255,255,255,0.1)'
          }
        }}
        transition={{ duration: 0.4 }}
      />
    </motion.a>
  );
};

export default CategoryNewCard;