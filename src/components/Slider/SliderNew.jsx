import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import BannerSkeleton from "../Banner/BannerSkeleton";
import BannerImg from "../../assets/banner.webp";
import BannerNew from "../Banner/BannerNew";

function SliderNew({ bannerData = [], height, isLoading }) {
  const responsive = {
    0: { items: 1 },
    1024: { items: 1, itemsFit: "contain" },
  };

  const itemsToRender =
    bannerData?.length > 0 ? bannerData : [{ BannerUrl: BannerImg }];

  return (
    <div className="relative w-full">
      <AliceCarousel
        mouseTracking
        responsive={responsive}
        disableButtonsControls
        autoPlay
        infinite
        autoPlayInterval={4000}
        paddingRight={0}
        paddingLeft={0}
        disableDotsControls={isLoading === "loading"}
        renderKey={isLoading === "loading" ? "loading" : itemsToRender.length}
      >
        {/* {isLoading === "loading" ? (
          Array.from({ length: 3 }).map((_, index) => (
            <BannerSkeleton key={`skeleton-${index}`} height={height} />
          ))
        ) : (
          itemsToRender.map((item) => ( */}
        <BannerNew image={BannerImg} />
        {/* ))
        )} */}
      </AliceCarousel>
    </div>
  );
}

export default SliderNew;
