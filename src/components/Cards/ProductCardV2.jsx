import { motion } from "framer-motion";

const ProductCardV2 = ({ imageUrl, title, price, onClick }) => (
  <motion.div
    whileHover={{ y: -4 }}
    whileTap={{ scale: 0.98 }}
    className="cursor-pointer w-full text-primary h-full flex flex-col border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow transition-all duration-200"
    onClick={onClick}
  >
    <div className="relative pt-[60%] overflow-hidden">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={title}
          className="absolute top-0 left-0 w-full h-full object-cover"
          loading="lazy"
          decoding="async"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "default-image.jpg";
          }}
        />
      ) : (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-200 flex items-center justify-center">
          <span className="text-gray-400">No Image</span>
        </div>
      )}
      <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full shadow-xs">
        <span className="text-xs font-semibold">
          ₹{price.toLocaleString("en-IN")}
        </span>
      </div>
    </div>

    <div className="p-3 flex flex-col flex-1">
      <h3 className="font-semibold text-normal mb-2 line-clamp-2">{title}</h3>

      <div className="mt-auto flex justify-between items-center">
        <div>
          <span className="text-xs text-gray-500">Starting From</span>
          <p className="text-lg font-semibold">
            ₹{price.toLocaleString("en-IN")}
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="px-3 py-1.5 text-white text-xs font-medium rounded-md transition-all bg-primary hover:bg-primary-dark"
          onClick={(e) => {
            e.stopPropagation();
            // Handle book now action
          }}
        >
          Book Now
        </motion.button>
      </div>
    </div>
  </motion.div>
);

export default ProductCardV2;
