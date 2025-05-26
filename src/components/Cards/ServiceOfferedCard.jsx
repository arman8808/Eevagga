import { motion } from "framer-motion";
export const ServiceOfferedCard = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
    >
      <div className="text-amber-600 mb-4">{icon}</div>
      <h3 className="text-xl font-serif font-medium text-gray-800 mb-3">
        {title}
      </h3>
      <p className="text-gray-600 font-light leading-relaxed">{description}</p>
    </motion.div>
  );
};
