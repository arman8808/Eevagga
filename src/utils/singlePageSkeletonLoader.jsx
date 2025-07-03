import React from "react";

function SinglePageSkeletonLoader() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Gallery Skeleton - 45% on desktop */}
          <div className="md:w-[45%]">
            {/* Main Image Skeleton */}
            <div className="bg-gray-200 rounded-xl overflow-hidden mb-4 h-[400px] animate-pulse"></div>

            {/* Thumbnails Skeleton */}
            <div className="mt-6 overflow-x-auto pb-2">
              <div className="flex gap-3 w-max">
                {[...Array(4)].map((_, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 rounded-lg overflow-hidden"
                  >
                    <div className="bg-gray-200 w-20 h-20 animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Product Details Skeleton - 55% on desktop */}
          <div className="md:w-[55%] md:pl-6">
            {/* Title Skeleton */}
            <div className="h-8 bg-gray-200 rounded-full w-3/4 mb-4 animate-pulse"></div>

            {/* Rating Skeleton */}
            <div className="flex items-center mb-4">
              <div className="flex mr-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-5 h-5 bg-gray-200 rounded-full mr-1 animate-pulse"
                  ></div>
                ))}
              </div>
              <div className="h-4 bg-gray-200 rounded-full w-32 animate-pulse"></div>
            </div>

            {/* Price Skeleton */}
            <div className="mb-6">
              <div className="h-6 bg-gray-200 rounded-full w-24 mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded-full w-40 animate-pulse"></div>
            </div>

            {/* Description Skeleton */}
            <div className="mb-8 space-y-2">
              <div className="h-4 bg-gray-200 rounded-full animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded-full w-5/6 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded-full w-4/6 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded-full w-3/6 animate-pulse"></div>
            </div>

            {/* Button Skeleton */}
            <div className="flex flex-wrap gap-4">
              <div className="bg-gray-200 h-12 rounded-lg flex-1 min-w-[200px] animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePageSkeletonLoader;
