import { motion } from "framer-motion";
import ProductCardV2 from "../Cards/ProductCardV2";

const ProductSection = ({ title, backgroundColor, cards }) => (
  <section
    className={`py-12 ${backgroundColor} transition-colors duration-300`}
    style={backgroundColor.startsWith("#") ? { backgroundColor } : {}}
  >
    <div className="container mx-auto px-4 flex items-center flex-col">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-semibold text-center mb-10 text-primary"
      >
        {title}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12">
        {cards.slice(0, 3).map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ProductCardV2
              title={card.title}
              price={card.price}
              imageUrl={card.imageUrl}
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductSection;
