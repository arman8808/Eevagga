import { motion } from "framer-motion";

const CategoryNewCard = ({ imageUrl, title, text, link }) => {
  return (
    <motion.a
      href={link}
      className="block group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-2 border-[#6A1B9A] duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20%" }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="p-[8%]">
        {/* Image Container with Border */}
        <motion.div
          className="relative overflow-hidden rounded-xl  mb-6"
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110 mx-auto"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent" />
        </motion.div>

        {/* Text Content */}
        <div className="space-y-4 text-center">
          <motion.h3
            className="text-[1.125rem] leading-[1.125rem] font-normal text-[#6A1B9A]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {title}
          </motion.h3>
          
          <motion.p
            className="text-[#757575] font-light text-sm leading-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {text}
          </motion.p>
        </div>
      </div>

      {/* Hover Indicator */}
      <motion.div
        className="absolute inset-0 border-2 border-[#6A1B9A] rounded-2xl pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />
    </motion.a>
  );
};

export default CategoryNewCard;