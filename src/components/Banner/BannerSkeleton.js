import React from "react";
import './Banner.css'
const BannerSkeleton = () => {
  return (
    <div className="w-full">
      <div className={`w-full bg-gray-200 banner-skeleton shimmer h-[16rem]`}></div>
    </div>
  );
};

export default BannerSkeleton;
