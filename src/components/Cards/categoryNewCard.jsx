import { motion } from "framer-motion";

const CategoryNewCard = ({ imageUrl, title,text, link }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block w-full overflow-hidden rounded-xl shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background Image */}
      <div className="relative min-h-[300px] md:min-h-[400px]">
        <img
          src={imageUrl}
          alt="Card background"
          className="object-cover w-full h-full"
          loading="lazy"
        />

        {/* Glass Overlay */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <motion.h3
            className="text-3xl font-bold text-white md:text-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {title}
          </motion.h3>
          <motion.p
            className="text-3xl font-bold text-white md:text-normal"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {text}
          </motion.p>

          <motion.div
            className="mt-4 h-[2px] w-16 bg-white"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.4 }}
          />
        </div>
      </div>
    </motion.a>
  );
};

export default CategoryNewCard;
