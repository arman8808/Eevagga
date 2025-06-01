import { motion } from "framer-motion";

const ProductCardV2 = ({ 
  imageUrl, 
  title, 
  price,
  primaryColor = "#2563eb", // Default primary color (blue-600)
  textColor = "#1e40af"     // Default text color (blue-800)
}) => (
  <motion.div
    whileHover={{ y: -8 }}
    whileTap={{ scale: 0.98 }}
    className="w-full text-primary h-full flex flex-col border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300"
  >
    <div className="relative pt-[70%] overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="absolute top-0 left-0 w-full h-full object-cover"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-sm">
        <span 
          className="text-sm font-bold"
        >
          ₹{price}
        </span>
      </div>
    </div>

    <div className="p-5 flex flex-col flex-1">
      <h3 
        className="font-bold text-lg mb-3 line-clamp-2"
        
      >
        {title}
      </h3>
      
      <div className="mt-auto flex justify-between items-center">
        <div>
          <span className="text-esm text-textGray">Starting from</span>
          <p 
            className="text-xl font-bold"
           
          >
            ₹{price}
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 text-white text-sm font-medium rounded-lg transition-all bg-primary"
        
        >
          Book Now
        </motion.button>
      </div>
    </div>
  </motion.div>
);

export default ProductCardV2;