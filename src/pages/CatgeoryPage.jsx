import BookingSection from "../components/BookingSection/BookingSection";
import FAQSection from "../components/FAQSection/FAQSection";
import HeroSection from "../components/HeroSection/HeroSectionCategoryPage";
import ProductSection from "../components/ProductSection/ProductSection";
import { NavLink, useParams } from "react-router-dom";
import useServices from "../hooks/useServices";
import commonApis from "../services/commonApis";
import { useEffect, useState } from "react";
import SkeletonProductCardV2 from "../components/Cards/SkeletonProductCardV2";
function CatgeoryPage() {
  const { category } = useParams();
  const [packageData, setPackageData] = useState([]);
  const queryParams = {
    search: category || "",
  };
  const categoryWissPackageApi = useServices(commonApis.categoryWissPackage);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const categoryWissPackageApiHandle = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await categoryWissPackageApi.callApi(queryParams);
      setPackageData(response?.data || []);
    } catch (err) {
      setError(err);
      setPackageData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (category) categoryWissPackageApiHandle();
  }, [category]);

  // Skeleton loader state
  if (loading) {
    return (
      <div>
        <SkeletonHeroSection />
        {[...Array(2)].map((_, index) => (
          <SkeletonProductSection key={index} />
        ))}
      </div>
    );
  }
  console.log(category);

  if (error) {
    return (
      <div className="text-center py-20">
        <div className="text-red-500 text-xl mb-4">Error loading data</div>
        <button
          onClick={categoryWissPackageApiHandle}
          className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div>
      <HeroSection />
      <div
        className="category-tabs-container"
        style={{
          backgroundColor: "#fff",
          padding: "1rem 0",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1rem",
            overflowX: "auto",
            scrollbarWidth: "none" /* For Firefox */,
            msOverflowStyle: "none" /* For IE and Edge */,
          }}
        >
          <div
            className="tabs"
            style={{
              display: "flex",
              gap: "0.75rem",
              padding: "0.5rem 0",
              width: "max-content",
              margin: "0 auto",
            }}
          >
            {[
              "Wedding",
              "Birthdays",
              "Corporate%20Events",
              "College%20School",
              "Private%20Parties",
            ].map((tab) => {
              // Decode URL-encoded strings for comparison
              const decodedTab = decodeURIComponent(tab);
              const decodedCategory = category
                ? decodeURIComponent(category)
                : "";
              const isActive = decodedCategory === decodedTab;

              return (
                <NavLink
                  key={tab}
                  to={`/category/${tab}`}
                  className={`tab ${isActive ? "active" : ""}`}
                  style={{
                    padding: "0.75rem 1.5rem",
                    borderRadius: "2rem",
                    fontWeight: "600",
                    textDecoration: "none",
                    color: isActive ? "#fff" : "#333",
                    backgroundColor: isActive ? "#ff6b6b" : "#f5f5f5",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    textTransform: "capitalize",
                    whiteSpace: "nowrap",
                    fontSize: "clamp(0.875rem, 2vw, 1rem)",
                    flexShrink: 0,
                  }}
                >
                  {decodedTab}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>

      {packageData?.length > 0 &&
        packageData?.map((categoryItem, index) => {
          const backgroundColors = ["#f8f3e7", "#f7ead7"];
          const backgroundColor =
            backgroundColors[index % backgroundColors.length];

          const cards =
            categoryItem.packages?.map((pkg) => {
              let imageUrl =
                (Array.isArray(pkg.serviceDetails?.values?.CoverImage)
                  ? pkg.serviceDetails?.values?.CoverImage[0]
                  : pkg.serviceDetails?.values?.CoverImage) ||
                (Array.isArray(pkg.serviceDetails?.values?.ProductImage)
                  ? pkg.serviceDetails?.values?.ProductImage[0]
                  : pkg.serviceDetails?.values?.ProductImage);

              const processedImageUrl = imageUrl?.startsWith("service/")
                ? `${process.env.REACT_APP_API_Aws_Image_BASE_URL}${imageUrl}`
                : imageUrl;

              // Parse price to number
              const rawPrice =
                pkg.serviceDetails?.values?.Price ||
                pkg.serviceDetails?.values?.StartingPrice ||
                pkg.serviceDetails?.values?.price ||
                pkg.serviceDetails?.values?.Pricing ||
                pkg.serviceDetails?.values?.Package?.[0]?.Rates ||
                pkg.serviceDetails?.values?.["OrderQuantity&Pricing"]?.[0]
                  ?.Rates ||
                pkg.serviceDetails?.values?.["Duration&Pricing"]?.[0]?.Amount ||
                pkg.serviceDetails?.values?.["SessionLength"]?.[0]?.Amount ||
                pkg.serviceDetails?.values?.["SessionLength&Pricing"]?.[0]
                  ?.Amount ||
                pkg.serviceDetails?.values?.["QtyPricing"]?.[0]?.Rates;

              // Convert to number if it's a string with numbers
              const price =
                typeof rawPrice === "string"
                  ? parseFloat(rawPrice.replace(/[^0-9.]/g, "")) || 0
                  : Number(rawPrice) || 0;

              return {
                title:
                  pkg.serviceDetails?.values?.Title ||
                  pkg.serviceDetails?.values?.FoodTruckName ||
                  pkg.serviceDetails?.values?.VenueName ||
                  "Untitled Service",
                price,
                imageUrl: processedImageUrl || "default-image.jpg",
                id: pkg._id,
                packageId: pkg.serviceDetails?._id,
              };
            }) || [];

          return (
            <ProductSection
              key={categoryItem.category?._id || index}
              title={categoryItem.category?.name?.[0] || "Uncategorized"}
              backgroundColor={backgroundColor}
              cards={cards}
              categoryId={categoryItem.category?._id}
              category={category}
            />
          );
        })}
      <FAQSection />
      <BookingSection />
    </div>
  );
}

export default CatgeoryPage;
const SkeletonHeroSection = () => (
  <div className="h-80 bg-gray-200 animate-pulse w-full"></div>
);
const SkeletonProductSection = () => (
  <section className="py-12 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="relative w-full mb-10 text-center">
        <div className="h-10 bg-gray-200 rounded-md mx-auto w-64 animate-pulse"></div>
        <div className="absolute top-0 right-0 h-6 bg-gray-200 rounded w-20 animate-pulse"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 w-11/12 mx-auto">
        {[...Array(5)].map((_, i) => (
          <div key={i}>
            <SkeletonProductCardV2 />
          </div>
        ))}
      </div>
    </div>
  </section>
);
