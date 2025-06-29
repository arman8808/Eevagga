const SkeletonProductCardV2 = () => (
  <div className="w-full text-primary h-full flex flex-col border border-gray-100 rounded-xl overflow-hidden bg-gray-50">
    <div className="relative pt-[60%] overflow-hidden bg-gray-200 animate-pulse">
      <div className="absolute top-0 left-0 w-full h-full" />
    </div>

    <div className="p-3 flex flex-col flex-1">
      <div className="h-5 bg-gray-200 rounded mb-2 w-3/4 animate-pulse"></div>
      <div className="h-4 bg-gray-200 rounded mb-3 w-1/2 animate-pulse"></div>

      <div className="mt-auto flex justify-between items-center">
        <div>
          <div className="h-3 bg-gray-200 rounded mb-1 w-20 animate-pulse"></div>
          <div className="h-5 bg-gray-200 rounded w-16 animate-pulse"></div>
        </div>
        <div className="h-8 w-20 bg-gray-300 rounded-md animate-pulse"></div>
      </div>
    </div>
  </div>
);
export default SkeletonProductCardV2;
