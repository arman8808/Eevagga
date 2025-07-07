import { motion } from "framer-motion";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import ProductCardV2 from "../components/Cards/ProductCardV2";
import useServices from "../hooks/useServices";
import commonApis from "../services/commonApis";
import { useEffect, useState } from "react";
import CustomPagination from "../utils/CustomPagination";
import SkeletonProductCardV2 from "../components/Cards/SkeletonProductCardV2";
import { internalRoutes } from "../utils/internalRoutes";
const ViewAllPage = () => {
  const navigate = useNavigate();
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get("categoryId");
  const [packageData, setPackageData] = useState([]);
  const [pages, setPages] = useState({
    currentPage: 1,
    totalPages: 0,
    totalData: 0,
  });
  const queryParams = {
    categoryId: categoryId || "",
    category: category || "",
    page: pages.currentPage || 1,
  };
  const categoryViewAllPackageApi = useServices(
    commonApis.categoryViewAllPackage
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handlePageChange = (event, value) => {
    setPages({ ...pages, currentPage: value });
  };
  const categoryViewAllPackageApiHandle = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await categoryViewAllPackageApi.callApi(queryParams);
      setPackageData(response?.data || []);
      setPages({
        ...pages,
        currentPage: response?.currentPage || 1,
        totalData: response?.total || 0,
        totalPages: response?.totalPages || 1,
      });
    } catch (err) {
      setError(err);
      setPackageData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (category) categoryViewAllPackageApiHandle();
  }, [category, pages.currentPage]);

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
            className="text-3xl font-semibold text-primary"
          >
            All Packages
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

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
        >
          {loading
            ? 
              Array.from({ length: 8 }).map((_, index) => (
                <SkeletonProductCardV2 key={`skeleton-${index}`} />
              ))
            : 
              packageData.map((product, index) => {
                let imageUrl =
                  (Array.isArray(product.serviceDetails?.values?.CoverImage)
                    ? product.serviceDetails?.values?.CoverImage[0]
                    : product.serviceDetails?.values?.CoverImage) ||
                  (Array.isArray(product.serviceDetails?.values?.ProductImage)
                    ? product.serviceDetails?.values?.ProductImage[0]
                    : product.serviceDetails?.values?.ProductImage);

                const processedImageUrl = imageUrl?.startsWith("service/")
                  ? `${process.env.REACT_APP_API_Aws_Image_BASE_URL}${imageUrl}`
                  : imageUrl;

                // Parse price to number
                const rawPrice =
                  product.serviceDetails?.values?.Price ||
                  product.serviceDetails?.values?.StartingPrice ||
                  product.serviceDetails?.values?.price ||
                  product.serviceDetails?.values?.Pricing ||
                  product.serviceDetails?.values?.Package?.[0]?.Rates ||
                  product.serviceDetails?.values?.["OrderQuantity&Pricing"]?.[0]
                    ?.Rates ||
                  product.serviceDetails?.values?.["Duration&Pricing"]?.[0]
                    ?.Amount ||
                  product.serviceDetails?.values?.["SessionLength"]?.[0]
                    ?.Amount ||
                  product.serviceDetails?.values?.["SessionLength&Pricing"]?.[0]
                    ?.Amount ||
                  product.serviceDetails?.values?.["QtyPricing"]?.[0]?.Rates;

           
                const price =
                  typeof rawPrice === "string"
                    ? parseFloat(rawPrice.replace(/[^0-9.]/g, "")) || 0
                    : Number(rawPrice) || 0;

                return (
                  <ProductCardV2
                    key={product._id || index}
                    title={
                      product.serviceDetails?.values?.Title ||
                      product.serviceDetails?.values?.FoodTruckName ||
                      product.serviceDetails?.values?.VenueName
                    }
                    price={price}
                    imageUrl={processedImageUrl}
                    onClick={() => navigate(`${internalRoutes.SinglePackage}/${product?._id}/${product?.serviceDetails?._id}?category=${category}`)}
                  />
                );
              })}
        </motion.div>

        {!loading && packageData?.length > 0 && (
          <CustomPagination
            totalPage={pages.totalPages}
            currentPage={pages?.currentPage}
            onChange={handlePageChange}
          />
        )}
      </div>
    </motion.div>
  );
};

export default ViewAllPage;
