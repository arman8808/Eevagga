import { motion } from "framer-motion";

const CategoryNewCard = ({ imageUrl, title, text, link }) => {
  return (
    <motion.a
      href={link}
      className="block group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-[#6A1B9A]"
      initial={{ opacity: 0, y: 40, rotateX: -15, scale: 0.95 }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        rotateX: 0,
        scale: 1,
        transition: { 
          type: "spring", 
          stiffness: 120,
          damping: 20,
          mass: 0.5
        } 
      }}
      viewport={{ once: true, margin: "-20%" }}
      whileHover={{ 
        scale: 1.03,
        y: -8,
        transition: { type: "spring", stiffness: 300 }
      }}
      whileTap={{ scale: 0.97 }}
    >
      <div className="p-[8%]">
        {/* Image Container */}
        <motion.div
          className="relative overflow-hidden rounded-xl mb-6"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ 
            scale: 1,
            opacity: 1,
            transition: { 
              delay: 0.2,
              type: "spring", 
              bounce: 0.4 
            }
          }}
        >
          <motion.img
            src={imageUrl}
            alt={title}
            className="w-full h-64 object-cover mx-auto"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            whileHover={{ 
              scale: 1.15,
              transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
            }}
          />
          
          {/* Animated Gradient Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/15 to-transparent"
            initial={{ opacity: 0 }}
            whileHover={{ 
              opacity: 1,
              transition: { duration: 0.4 }
            }}
          />
        </motion.div>

        {/* Text Content */}
        <div className="space-y-4 text-center">
          <motion.h3
            className="text-[1.125rem] leading-[1.125rem] font-normal text-[#6A1B9A]"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ 
              y: 0, 
              opacity: 1,
              transition: { 
                delay: 0.3,
                type: "spring", 
                stiffness: 150 
              }
            }}
          >
            {title}
          </motion.h3>
          
          <motion.p
            className="text-[#757575] font-light text-sm leading-5"
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ 
              y: 0, 
              opacity: 1,
              transition: { 
                delay: 0.4,
                type: "spring", 
                stiffness: 150 
              }
            }}
          >
            {text}
          </motion.p>
        </div>
      </div>

      {/* Animated Border Layer */}
      <motion.div
        className="absolute inset-0 border-2 border-[#6A1B9A] rounded-2xl pointer-events-none"
        initial={{ 
          opacity: 0,
          scale: 0.98
        }}
        whileHover={{ 
          opacity: 1,
          scale: 1,
          transition: { 
            duration: 0.4,
            ease: "easeOut"
          }
        }}
      />
      
      {/* Subtle Shadow Animation */}
      <motion.div
        className="absolute inset-0 shadow-2xl opacity-0"
        whileHover={{ 
          opacity: 0.2,
          transition: { duration: 0.3 }
        }}
      />
    </motion.a>
  );
};

export default CategoryNewCard;