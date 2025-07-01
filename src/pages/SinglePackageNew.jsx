import React, { useEffect, useMemo, useState } from "react";
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
              className="text-3xl font-bold mb-3 text-primary"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {singlePageData?.services?.[0]?.values?.Title ||
                singlePageData?.services?.[0]?.values?.VenueName ||
                singlePageData?.services?.[0]?.values?.VenueName}
            </motion.h1>

            {/* Rating and Reviews */}
            <motion.div
              className="mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15 }}
            >
              {useMemo(() => {
                // Generate random rating between 3.5 and 4.8
                const rating = (Math.random() * 1.3 + 3.5).toFixed(1);
                // Generate random customer count between 50 and 500
                const customerCount = Math.floor(Math.random() * 451) + 50;

                // Calculate number of full stars (yellow) and whether there's a half star
                const fullStars = Math.floor(rating);
                const hasHalfStar = rating % 1 >= 0.5;

                return (
                  <div className="flex items-center">
                    <div className="flex text-yellow-400 mr-2">
                      {[...Array(5)].map((_, i) => {
                        if (i < fullStars) {
                          // Full star
                          return (
                            <svg
                              key={i}
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 fill-current"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          );
                        } else if (i === fullStars && hasHalfStar) {
                          // Half star
                          return (
                            <svg
                              key={i}
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 fill-current"
                              viewBox="0 0 24 24"
                            >
                              <defs>
                                <linearGradient
                                  id="half-star"
                                  x1="0"
                                  x2="100%"
                                  y1="0"
                                  y2="0"
                                >
                                  <stop offset="50%" stopColor="#fbbf24" />
                                  <stop offset="50%" stopColor="#d1d5db" />
                                </linearGradient>
                              </defs>
                              <path
                                fill="url(#half-star)"
                                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                              />
                            </svg>
                          );
                        } else {
                          // Empty star
                          return (
                            <svg
                              key={i}
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 fill-current text-gray-300"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          );
                        }
                      })}
                    </div>
                    <span className="text-[#757575] text-sm">
                      ({customerCount.toLocaleString()} customer reviews)
                    </span>
                  </div>
                );
              }, [])}{" "}
              {/* Empty dependency array means it only runs once */}
            </motion.div>

            <motion.div
              className="mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-baseline">
                <span className="text-2xl font-semibold text-[#6A1B9A]">
                  ₹
                  {singlePageData?.services?.[0]?.values?.Price ||
                    singlePageData?.services?.[0]?.values?.StartingPrice ||
                    singlePageData?.services?.[0]?.values?.price ||
                    singlePageData?.services?.[0]?.values?.Pricing ||
                    singlePageData?.services?.[0]?.values?.Package?.[0]
                      ?.Rates ||
                    singlePageData?.services?.[0]?.values?.[
                      "OrderQuantity&Pricing"
                    ]?.[0]?.Rates ||
                    singlePageData?.services?.[0]?.values?.[
                      "Duration&Pricing"
                    ]?.[0]?.Amount ||
                    singlePageData?.services?.[0]?.values?.[
                      "SessionLength"
                    ]?.[0]?.Amount ||
                    singlePageData?.services?.[0]?.values?.[
                      "SessionLength&Pricing"
                    ]?.[0]?.Amount ||
                    singlePageData?.services?.[0]?.values?.["QtyPricing"]?.[0]
                      ?.Rates}
                </span>
                {/* <span className="ml-2 text-[#757575] line-through">
                  $299.99
                </span>
                <span className="ml-2 text-green-600 font-medium">
                  Save 17%
                </span> */}
              </div>
              <p className="text-sm text-[#757575] mt-1">
                exclusive of all taxes
              </p>
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
          </div>
        </div>
      </div>

      {/* Custom scrollbar styling */}
      <style jsx global>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #ddcde7 #f1f1f1;
        }

        .custom-scrollbar::-webkit-scrollbar {
          height: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #ddcde7;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #6a1b9a;
        }
      `}</style>
    </div>
  );
}

export default SinglePackageNew;
