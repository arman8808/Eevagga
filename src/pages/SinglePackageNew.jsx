import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useServices from "../hooks/useServices";
import packageApis from "../services/packageApis";
import { motion, AnimatePresence } from "framer-motion";
function SinglePackageNew() {
  const { serviceId, packageId } = useParams();
  const [singlePageData, setSinglePageData] = useState();
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(0);
  const getAllPackages = useServices(packageApis.getOnePackage);
   const imageBaseUrl = process.env.REACT_APP_API_Aws_Image_BASE_URL; 
  const handlegetOnePackage = async () => {
    const response = await getAllPackages.callApi(serviceId, packageId);
    setSinglePageData(response && response?.data);

    const allMedia = [];
    if (response?.data?.services?.[0]?.values?.CoverImage) {
      const coverImage = response.data.services[0].values.CoverImage;
      if (Array.isArray(coverImage)) {
        allMedia.push(...coverImage);
      } else {
        allMedia.push(coverImage);
      }
    }
    if (response?.data?.services?.[0]?.values?.ProductImage) {
      const ProductImage = response.data.services[0].values.ProductImage;
      if (Array.isArray(ProductImage)) {
        allMedia.push(...ProductImage);
      } else {
        allMedia.push(ProductImage);
      }
    }

    if (response?.data?.services?.[0]?.values?.Portfolio?.photos) {
      const photos = response.data.services[0].values.Portfolio.photos;
      if (Array.isArray(photos)) {
        allMedia.push(...photos);
      } else {
        allMedia.push(photos);
      }
    }

    if (response?.data?.services?.[0]?.values?.Portfolio?.videos) {
      const videos = response.data.services[0].values.Portfolio.videos;
      if (Array.isArray(videos)) {
        allMedia.push(...videos);
      } else {
        allMedia.push(videos);
      }
    }

    setImages(allMedia);
  };
  useEffect(() => {
    handlegetOnePackage();
  }, [serviceId, packageId]);
  const product = {
    title: "Minimalist Wireless Headphones",
    price: 1299.99,
    description:
      "Premium sound quality with noise cancellation. Comfortable over-ear design with 30-hour battery life. Perfect for work and travel.",
    features: [
      "Bluetooth 5.2 connectivity",
      "Active Noise Cancellation",
      "Memory foam ear cushions",
      "Foldable design",
    ],
  };
  return (
<div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Gallery - 45% on desktop */}
          <div className="md:w-[45%]">
            {/* Main Image */}
            <div className="bg-[#DDCDE7] rounded-xl overflow-hidden mb-4 h-[400px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedImage}
                  src={`${imageBaseUrl}${images[selectedImage]}`}
                  alt={`Product view ${selectedImage + 1}`}
                  className="max-h-[350px] object-contain"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              </AnimatePresence>
            </div>

            {/* Thumbnails - Scrollable container */}
            <div className="mt-6 overflow-x-auto pb-2 custom-scrollbar">
              <div className="flex gap-3 w-max">
                {images.map((img, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-shrink-0 cursor-pointer rounded-lg overflow-hidden border-2 ${
                      selectedImage === index
                        ? "border-[#6A1B9A] shadow-md"
                        : "border-transparent"
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <div className="bg-[#7575751A] w-20 h-20 flex items-center justify-center">
                      <img
                        src={`${imageBaseUrl}${img}`}
                        alt={`Thumbnail ${index + 1}`}
                        className="h-16 object-contain"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Product Details - 55% on desktop */}
          <div className="md:w-[55%] md:pl-6">
            <motion.h1
              className="text-3xl font-bold mb-3 text-[#4A0072]"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {product.title}
            </motion.h1>

            {/* Rating and Reviews */}
            <motion.div
              className="mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15 }}
            >
              <div className="flex items-center">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-[#757575] text-sm">(128 customer reviews)</span>
              </div>
            </motion.div>

            <motion.div
              className="mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-baseline">
                <span className="text-2xl font-semibold text-[#6A1B9A]">
                  ₹{product.price.toFixed(2)}
                </span>
                <span className="ml-2 text-[#757575] line-through">$299.99</span>
                <span className="ml-2 text-green-600 font-medium">Save 17%</span>
              </div>
              <p className="text-sm text-[#757575] mt-1">Inclusive of all taxes</p>
            </motion.div>

            <motion.p
              className="text-[#757575] mb-8 leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {product.description}
            </motion.p>

            <motion.div
              className="mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="font-semibold text-[#4A0072] mb-3 text-lg">Key Features:</h3>
              <ul className="text-[#757575] space-y-2">
                {product.features.map((feature, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <span className="text-[#6A1B9A] mr-2">•</span> {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Color Selection */}
            <motion.div
              className="mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              <h3 className="font-semibold text-[#4A0072] mb-3">Color:</h3>
              <div className="flex gap-3">
                {['#6A1B9A', '#4A0072', '#000000', '#757575'].map((color, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full cursor-pointer border-2 border-gray-300"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Quantity Selector */}
            <motion.div
              className="mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="font-semibold text-[#4A0072] mb-3">Quantity:</h3>
              <div className="flex items-center w-32">
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-l-md bg-[#DDCDE7] flex items-center justify-center text-[#6A1B9A] font-bold"
                >
                  -
                </motion.button>
                <div className="w-16 h-10 flex items-center justify-center bg-white border-y border-gray-300">
                  <span className="text-lg">1</span>
                </div>
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-r-md bg-[#DDCDE7] flex items-center justify-center text-[#6A1B9A] font-bold"
                >
                  +
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#6A1B9A] text-white px-8 py-3 rounded-lg font-medium flex-1 min-w-[200px]"
              >
                Add to Cart
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="border border-[#6A1B9A] text-[#6A1B9A] px-8 py-3 rounded-lg font-medium flex-1 min-w-[200px]"
              >
                Buy Now
              </motion.button>
            </motion.div>
            
            {/* Delivery Info */}
            <motion.div
              className="mt-8 p-4 bg-[#7575751A] rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#6A1B9A] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-medium text-[#4A0072]">Free delivery</p>
                  <p className="text-sm text-[#757575]">Get it by tomorrow with Express Shipping</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Custom scrollbar styling */}
      <style jsx global>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #DDCDE7 #f1f1f1;
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          height: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #DDCDE7;
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #6A1B9A;
        }
      `}</style>
    </div>

  );
}

export default SinglePackageNew;
