import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import useServices from "../hooks/useServices";
import packageApis from "../services/packageApis";
import { motion, AnimatePresence } from "framer-motion";
import ModernVideoPlayer from "../utils/ModernVideoPlayer ";
import SinglePageSkeletonLoader from "../utils/singlePageSkeletonLoader";
import BookNowCTA from "../utils/BookNowCTA";
import { internalRoutes } from "../utils/internalRoutes";
import ProductCardV2 from "../components/Cards/ProductCardV2";
function SinglePackageNew() {
  const { serviceId, packageId } = useParams();
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const navigate = useNavigate();
  const [singlePageData, setSinglePageData] = useState();
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(0);
  const getAllPackages = useServices(packageApis.getOnePackage);
  const imageBaseUrl = process.env.REACT_APP_API_Aws_Image_BASE_URL;
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const handlegetOnePackage = async () => {
    setIsLoading(true);
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
    setIsLoading(false);
  };
  const isVideo = (url) => /\.(mp4|webm|ogg)$/i.test(url);
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
            {/* Main Display */}
            <div className="bg-[#DDCDE7] rounded-xl overflow-hidden mb-4 h-[400px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                {isVideo(imageBaseUrl + images[selectedImage]) ? (
                  <motion.div
                    key={`video-${selectedImage}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-full h-full flex items-center justify-center"
                  >
                    <ModernVideoPlayer
                      selectedUrl={`${imageBaseUrl}${images[selectedImage]}`}
                      className="max-h-[350px] mx-auto"
                    />
                  </motion.div>
                ) : (
                  <motion.img
                    key={`img-${selectedImage}`}
                    src={`${imageBaseUrl}${images[selectedImage]}`}
                    alt={`Product view ${selectedImage + 1}`}
                    className="max-h-[350px] object-contain"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </AnimatePresence>
            </div>

            {/* Thumbnails */}
            <div className="mt-6 overflow-x-auto pb-2 custom-scrollbar">
              <div className="flex gap-3 w-max">
                {images.map((file, index) => {
                  const url = `${imageBaseUrl}${file}`;
                  return (
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
                      <div className="relative bg-[#7575751A] w-20 h-20 flex items-center justify-center">
                        {isVideo(url) ? (
                          <>
                            <video
                              src={url}
                              className="h-16 object-contain"
                              muted
                              loop
                              playsInline
                            />
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-white opacity-75"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M6.5 5.5l7 4.5-7 4.5v-9z" />
                              </svg>
                            </div>
                          </>
                        ) : (
                          <img
                            src={url}
                            alt={`Thumbnail ${index + 1}`}
                            className="h-16 object-contain"
                          />
                        )}
                      </div>
                    </motion.div>
                  );
                })}
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
                const rating = (Math.random() * 1.3 + 3.5).toFixed(1);
                const customerCount = Math.floor(Math.random() * 451) + 50;
                const fullStars = Math.floor(rating);
                const hasHalfStar = rating % 1 >= 0.5;

                return (
                  <div className="flex items-center">
                    <div className="flex text-yellow-400 mr-2">
                      {[...Array(5)].map((_, i) => {
                        if (i < fullStars) {
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
                    <span className="text-gray-600 text-sm">
                      ({customerCount.toLocaleString()} customer reviews)
                    </span>
                  </div>
                );
              }, [])}
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
                <p className="text-sm text-gray-500 ml-2">
                  (exclusive of all taxes)
                </p>
              </div>
            </motion.div>

            <motion.div
              className="mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2 text-primary">
                Description
              </h3>
              <p className="text-textGray leading-relaxed">
                {singlePageData?.services?.[0]?.values?.description ||
                  "No description available."}
              </p>
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
                className="bg-[#6A1B9A] hover:bg-[#7B2CBF] text-white px-6 py-2.5 rounded-lg font-medium"
                onClick={() =>
                  navigate(
                    `${internalRoutes?.bookingForm}?sku=${singlePageData?.services?.[0]?.sku}&category=${category}`
                  )
                }
              >
                Book Now
              </motion.button>
            </motion.div>
          </div>
        </div>
        {/* <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse Similar</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[
          {
            _id: "1",
            serviceDetails: {
              values: {
                Title: "Premium Wedding Package",
                Price: "45,999",
                images: ["/wedding-package-1.jpg"]
              }
            }
          },
          {
            _id: "2",
            serviceDetails: {
              values: {
                Title: "Luxury Birthday Decor",
                StartingPrice: "24,999",
                images: ["/birthday-decor-1.jpg"]
              }
            }
          },
          {
            _id: "3",
            serviceDetails: {
              values: {
                VenueName: "Grand Ballroom",
                Price: "32,500",
                images: ["/venue-1.jpg"]
              }
            }
          },
          {
            _id: "4",
            serviceDetails: {
              values: {
                FoodTruckName: "Gourmet Street Eats",
                StartingPrice: "15,000",
                images: ["/food-truck-1.jpg"]
              }
            }
          }
        ].map((product, index) => (
          <ProductCardV2
            key={product._id || index}
            title={
              product.serviceDetails?.values?.Title ||
              product.serviceDetails?.values?.FoodTruckName ||
              product.serviceDetails?.values?.VenueName
            }
            price={
              product.serviceDetails?.values?.Price || 
              product.serviceDetails?.values?.StartingPrice || 
              "Price not available"
            }
            imageUrl={product.serviceDetails?.values?.images?.[0] || "/placeholder-product.jpg"}
            onClick={() => navigate(`${internalRoutes.SinglePackage}/${product?._id}/${product?.serviceDetails?._id}`)}
          />
        ))}
      </div>
    </section> */}

        {/* People Also Bought Section */}
        {/* <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">People Also Bought</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[
          {
            _id: "5",
            serviceDetails: {
              values: {
                Title: "Photography Basic Package",
                Price: "12,999",
                images: ["/photography-1.jpg"]
              }
            }
          },
          {
            _id: "6",
            serviceDetails: {
              values: {
                VenueName: "Beachside Pavilion",
                StartingPrice: "28,750",
                images: ["/venue-2.jpg"]
              }
            }
          },
          {
            _id: "7",
            serviceDetails: {
              values: {
                FoodTruckName: "Artisan Pizza Co.",
                Price: "18,500",
                images: ["/food-truck-2.jpg"]
              }
            }
          },
          {
            _id: "8",
            serviceDetails: {
              values: {
                Title: "DJ & Sound System",
                StartingPrice: "9,999",
                images: ["/dj-equipment.jpg"]
              }
            }
          }
        ].map((product, index) => (
          <ProductCardV2
            key={product._id || index}
            title={
              product.serviceDetails?.values?.Title ||
              product.serviceDetails?.values?.FoodTruckName ||
              product.serviceDetails?.values?.VenueName
            }
            price={
              product.serviceDetails?.values?.Price || 
              product.serviceDetails?.values?.StartingPrice || 
              "Price not available"
            }
            imageUrl={product.serviceDetails?.values?.images?.[0] || "/placeholder-product.jpg"}
            onClick={() => navigate(`${internalRoutes.SinglePackage}/${product?._id}/${product?.serviceDetails?._id}`)}
          />
        ))}
      </div>
    </section> */}
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
