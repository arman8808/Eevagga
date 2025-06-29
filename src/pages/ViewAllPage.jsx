import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ProductCardV2 from "../components/Cards/ProductCardV2";
const ViewAllPage = () => {
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      title: "Premium Yoga Mat",
      price: "2,499",
      imageUrl:
        "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80",
    },
    {
      id: 2,
      title: "Meditation Cushion Set",
      price: "1,799",
      imageUrl:
        "https://images.unsplash.com/photo-1593810450967-f9c42742e326?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80",
    },
    {
      id: 3,
      title: "Ayurvedic Herbal Tea Collection",
      price: "899",
      imageUrl:
        "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80",
    },
    {
      id: 4,
      title: "Handcrafted Incense Sticks",
      price: "349",
      imageUrl:
        "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80",
    },
    {
      id: 5,
      title: "Organic Cotton Yoga Pants",
      price: "1,299",
      imageUrl:
        "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80",
    },
    {
      id: 6,
      title: "Copper Tongue Cleaner",
      price: "199",
      imageUrl:
        "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80",
    },
    {
      id: 7,
      title: "Sandalwood Mala Beads",
      price: "1,599",
      imageUrl:
        "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80",
    },
    {
      id: 8,
      title: "Himalayan Salt Lamp",
      price: "1,199",
      imageUrl:
        "https://images.unsplash.com/photo-1517825738774-7de9363ef735?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80",
    },
  ];
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white p-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <motion.h1
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-3xl font-semibold text-[#4A0072]"
          >
            All Products
          </motion.h1>

          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#4A0072" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(-1)}
            className="px-4 py-2 rounded-lg text-white text-sm font-medium bg-[#6A1B9A]"
          >
            Go Back
          </motion.button>
        </div>

        {/* Products Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
        >
          {products.map((product, index) => (
            <ProductCardV2
              title={product.title}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ViewAllPage;
