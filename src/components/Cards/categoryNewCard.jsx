import { motion } from "framer-motion";

const CategoryNewCard = ({ imageUrl, title, text, link }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block w-full overflow-hidden rounded-2xl shadow-2xl group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20%" }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ 
        duration: 0.6,
        type: "spring",
        bounce: 0.2
      }}
    >
      {/* Background Image */}
      <div className="relative aspect-square md:aspect-[1.2/1]">
        <img
          src={imageUrl}
          alt="Card background"
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Glass Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30 backdrop-blur-[2px] transition-all duration-300 group-hover:backdrop-blur-[3px]" />

        {/* Content Container */}
        <div className="absolute bottom-[20%] left-0 right-0 px-6 transform transition-all duration-500 group-hover:bottom-[22%]">
          <div className="space-y-4 cursor-pointer">
            <motion.h3
              className="text-2xl font-bold text-white md:text-3xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {title}
            </motion.h3>

            <motion.p
              className="text-base font-medium text-gray-200 md:text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {text}
            </motion.p>

            <motion.div
              className="h-[2px] bg-white/80 w-[60%]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
          </div>
        </div>
      </div>
    </motion.a>
  );
};

export default CategoryNewCard;