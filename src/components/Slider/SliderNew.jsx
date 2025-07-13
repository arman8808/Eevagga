import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import BannerNew from "../Banner/BannerNew";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserBanner } from "../../context/redux/slices/bannerSlice.js";
function SliderNew() {
  const dispatch = useDispatch();
  const {
    banner: { userBanner, loading },
  } = useSelector((state) => ({
    banner: state.banner,
  }));

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!userBanner || userBanner.length === 0) {
      dispatch(fetchUserBanner());
    }
  }, [dispatch, userBanner]);

  useEffect(() => {
    // Simulate loading delay for skeleton
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const responsive = {
    0: { items: 1 },
    1024: { items: 1, itemsFit: "contain" },
  };

  // Skeleton loader item
  const skeletonItem = (
    <div className="relative w-full min-h-[85dvh] overflow-hidden">
      <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
      <div className="relative z-10 container mx-auto px-6 h-full min-h-[80dvh] flex flex-col justify-end pb-[10%]">
        <div className="text-center space-y-8">
          <div className="h-16 w-3/4 mx-auto bg-gray-300 rounded animate-pulse"></div>
          <div className="h-12 w-48 mx-auto bg-gray-300 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <style jsx global>{`
        @keyframes pulse {
          0% { opacity: 0.6; }
          50% { opacity: 1; }
          100% { opacity: 0.6; }
        }
        .animate-pulse {
          animation: pulse 1.5s infinite;
        }
      `}</style>

      {isLoading || loading ? (
        <AliceCarousel
          mouseTracking
          responsive={responsive}
          disableButtonsControls
          infinite
        >
          {[1, 2, 3].map((item) => (
            <div key={`skeleton-${item}`}>{skeletonItem}</div>
          ))}
        </AliceCarousel>
      ) : (
        <AliceCarousel
          mouseTracking
          responsive={responsive}
          disableButtonsControls
          autoPlay
          infinite
          autoPlayInterval={3000}
          paddingRight={0}
          paddingLeft={0}
        >
          {userBanner?.map((item) => (
            <BannerNew 
              key={item.id} 
              image={item?.BannerUrl} 
              preview={item?.bannerPreview} 
            />
          ))}
        </AliceCarousel>
      )}
    </>
  );
}

export default SliderNew;
