// Make this responsive for both mobile and other devices with bigger screen. Make it default for mobile and then use md for all the above devices.
import React from "react";
import { FcLike } from "react-icons/fc";
import formatCurrency from "../../utils/formatCurrency";
import Wishlist from "../../utils/Wishlist";
import { useDispatch } from "react-redux";
import { useAuth } from "../../context/AuthContext";
import useServices from "../../hooks/useServices";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import userApi from "../../services/userApi";
import { fetchUserWishlist } from "../../context/redux/slices/wishlistSlice";
import BookNowCTA from "../../utils/BookNowCTA";
function ProductDisplayCard({
  image,
  title,
  category,
  vendor,
  eventData,
  onClick,
  isFavourite,
  serviceId,
  packageId,
  discountPercentage,
}) {
  const keysToRender = [
    "Event Type",
    "EventType",
    "TypesofFlavours",
    "Inclusions",
    "Deliverables",
    "MealType",
    "MealTime",
    "Cuisines",
    "MenuBreakUp",
    "Description",
    "DurationofStall",
  ];
  const userId = Cookies.get("userId");
  const wishlist = useServices(userApi.toggleWishlist);
  const { auth } = useAuth();
  const dispatch = useDispatch();
  const sizeAndDimension = eventData?.values?.["SizeAndDimension"] || [];
  const sizeAndDimensionPrice = sizeAndDimension
    .filter((dimension) => parseFloat(dimension?.Price))
    .reduce((acc, dimension) => acc * parseFloat(dimension?.Price), 1);
  const price =
    eventData?.values?.Price ||
    eventData?.values?.price ||
    eventData?.values?.Pricing ||
    eventData?.values?.["OrderQuantity&Pricing"]?.[0]?.Rates ||
    eventData?.values?.["Duration&Pricing"]?.[0]?.Amount ||
    eventData?.values?.["SessionLength"]?.[0]?.Amount ||
    eventData?.values?.["SessionLength&Pricing"]?.[0]?.Amount ||
    eventData?.values?.Package?.[0]?.Rates ||
    eventData?.values?.QtyPricing?.[0]?.Rates ||
    sizeAndDimensionPrice;
  const toggleWishlistHandle = async () => {
    if (auth?.isAuthenticated && auth?.role === "user") {
      const formdata = new FormData();
      formdata.append("serviceId", serviceId);
      formdata.append("packageId", packageId);

      try {
        const response = await wishlist.callApi(userId, formdata);
        dispatch(fetchUserWishlist(userId));
        toast.success(response?.message);
      } catch (error) {
        toast.error("Failed to toggle wishlist. Please try again.");
        console.error(error);
      }
    } else {
      toast.info("You need to log in first to add items to the wishlist.");
    }
  };

  return (
    <div className=" w-full h-auto lg:h-[350px] xl:h-[250px] p-2 lg:p-0 border rounded-lg shadow-sm flex flex-col md:flex-row gap-4 cursor-pointer overflow-hidden">
      <img
        src={image}
        alt={title}
        className=" w-full lg:w-[30%] h-[13rem] lg:h-[15rem] rounded-lg object-fit aspect-w-16 aspect-h-9"
        onClick={onClick}
      />
      <div className="w-full flex flex-col my-4" onClick={onClick}>
        <div className=" w-full flex flex-row items-center mb-1 justify-between">
          <div className="w-[100%] gap-0 ">
            <h2 className="text-normal font-medium text-primary">{title}</h2>
            <p className="text-sm text-textGray">{category}</p>
          </div>
        </div>
        <div className="w-full flex flex-row border-borderPrimary mb-1 ">
          <div className="w-[80%] text-base font-semibold text-primary mb-2">
            <h3>{vendor}</h3>
          </div>
        </div>
        <div className="flex flex-row gap-2 lg:pr-4 flex-col">
          {keysToRender.map((key, index) => {
            const value = eventData?.values?.[key];
            if (Array.isArray(value) && value.length > 0) {
              return (
                <div className="mb-1 flex flex-row gap-3">
                  <h3 className="text-lg font-medium text-primary pt-1">
                    {key}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {value.map((item, index) => (
                      <span
                        key={index}
                        className="bg-gray-200 text-sm text-textGray px-3 py-1 rounded-md"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
      {/* Price */}
      <div className="flex flex-row-reverse md:flex-col lg:items-end justify-between lg:w-[20%] lg:pr-4 pt-4">
        <Wishlist
          isInWishlist={isFavourite}
          onWishlistToggle={() => toggleWishlistHandle(userId)}
        />
        <div className="flex flex-row-reverse md:block gap-2 md:gap-0">
    
          <div className="text-normal font-medium text-primary md:pt-2 pr-4 justify-start">
            Starting
          </div>
          <div className="text-normal font-bold text-primary mb-4">
            {formatCurrency(Number(price))}
            /-
            {discountPercentage?.discountPercentage && (
              <span className="text-sm text-[#F9D703] mx-2">
                {discountPercentage.discountPercentage}%
              </span>
            )}
          </div>
          <BookNowCTA/>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplayCard;
