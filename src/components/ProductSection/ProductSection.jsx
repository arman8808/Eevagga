import { motion } from "framer-motion";
import ProductCardV2 from "../Cards/ProductCardV2";
import { useNavigate } from "react-router-dom";
import { internalRoutes } from "../../utils/internalRoutes";

const ProductSection = ({
  title,
  backgroundColor,
  cards,
  categoryId,
  category,
}) => {
  const navigate = useNavigate();

  return (
    <section
      className={`py-12 transition-colors duration-300 relative`}
      style={{ backgroundColor }}
    >
      <div className="container mx-auto px-4">
        {/* Header with centered title and right-aligned button */}
        <div className="relative w-full mb-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-semibold text-primary inline-block"
          >
            {category + " " + title}
          </motion.h2>

          {cards?.length > 0 && (
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="absolute underline top-0 right-0 text-sm font-medium text-primary hover:text-primary-dark flex items-center gap-1"
              onClick={() =>
                navigate(
                  `${internalRoutes.viewAllPage}/${category}?categoryId=${categoryId}`
                )
              }
            >
              View All
            </motion.button>
          )}
        </div>

        {/* Product cards grid - only render if cards exist */}
        {cards?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 w-11/12 mx-auto">
            {cards.slice(0, 5).map((card, index) => (
              <motion.div
                key={card.id || index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => navigate(`${internalRoutes.SinglePackage}/${card.id}/${card.packageId}?category=${title}`)}
                className="cursor-pointer"
              >
                <ProductCardV2
                  title={card.title}
                  price={Number(card.price)}
                  imageUrl={card.imageUrl}
                  onClick={() => navigate(`${internalRoutes.SinglePackage}/${card.id}/${card.packageId}?category=${title}`)}
                />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-500">
              No packages available in this category
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductSection;
