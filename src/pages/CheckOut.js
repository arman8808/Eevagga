import React, { useCallback, useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { internalRoutes } from "../utils/internalRoutes";
import CheckoutSummary from "../components/Cards/CheckoutSummary";
import AddressSelector from "../components/Cards/AddressSelector";
import CheckOutCard from "../components/Cards/CheckOutCard";
import { SelectAddressCard } from "../components/Cards/SelectAddressCard";
import ReusableModal from "../components/Modal/Modal";
import { useForm } from "react-hook-form";
import useServices from "../hooks/useServices";
import userApi from "../services/userApi";
import { toast } from "react-toastify";
import { fetchUserProfile } from "../context/redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import DeleteForm from "../components/Admin/DeleteForm";
import CouponsCard from "../components/Cards/CouponsCard";
import Tag from "../assets/Temporary Images/tags1.png";
import { fetchUserCart } from "../context/redux/slices/cartSlice";
import couponApi from "../services/couponApi";
import orderApis from "../services/orderApis";
import { IoMdArrowRoundBack } from "react-icons/io";
import PaymentOptions from "../utils/PaymentOptions";
import axios from "axios";
import RecentlyViewedCard from "../components/Cards/RecentlyViewedCard";
import HorizontalScroll from "../utils/HorizontalScroll";
import BackButton from "../utils/globalBackButton";
import commonApis from "../services/commonApis";
function CheckOut() {
  const { auth } = useAuth();
  const history = useNavigate();
  const { cart } = useSelector((state) => state.cart);
  const [allCoupon, setAllCoupon] = useState([]);
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [couponCode, setCouponCode] = useState(null);
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [userSelectedAddress, setUserSelectedAddress] = useState(null);
  const addUserAddress = useServices(userApi.addUserAdress);
  const updateOneAddress = useServices(userApi.updateOneAddress);
  const getOneUserAddress = useServices(userApi.getOneAddress);
  const getUserAllAddress = useServices(userApi.getUserAllAddress);
  const getUserSelectedAddressApi = useServices(userApi.getUserSelectedAddress);
  const RemoveFromCartApi = useServices(userApi.RemoveFromCart);
  const deleteOneAddress = useServices(userApi.deleteOneAddress);
  const selectOneUserAddress = useServices(userApi.selectOneUserAddress);
  const getAllCoupon = useServices(couponApi.getAllValidCoupons);
  const [userAllAddress, setUserAllAddress] = useState(null);
  const [open, setOpen] = useState();
  const [modalType, setModalType] = useState("addAddress");
  const dispatch = useDispatch();
  const userId = Cookies.get("userId");
  const [userData, setUserData] = useState();
  const createOrderApi = useServices(orderApis.createUserOrder);
  const validateOrderApi = useServices(orderApis.valiDateUserOrder);
  const getUserProfileApi = useServices(userApi.getUserProfile);
  const SuggestSimilarServicesApi = useServices(userApi.SuggestSimilarServices);
  const calculatedistanceApi = useServices(commonApis.calculatedistance);
  const getVendorPincodeApi = useServices(commonApis.getVendorPincode);
  const [distanceAndCostData, setDistanceAndCostData] = useState([]);
  const getUserdetailhandle = async () => {
    const response = await getUserProfileApi.callApi(userId);
    setUserData(response);
  };
  const [suggestions, setSuggestions] = useState([]);
  const SuggestSimilarServicesApihandle = async () => {
    const formdata = new FormData();
    formdata.append("items", JSON.stringify(cart?.items));
    const response = await SuggestSimilarServicesApi.callApi(formdata);
    setSuggestions(response?.suggestions ?? []);
    console.log(response);
  };
  useEffect(() => {
    if (cart && userId) SuggestSimilarServicesApihandle();
  }, [cart, userId]);
  useEffect(() => {
    if (userId) {
      getUserdetailhandle();
    }
  }, [userId]);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const {
    register: registerAddAddress,
    handleSubmit: handleAddSubmit,
    setValue: setValueAddAddress,
    formState: { errors: errorsAddAddress },
    reset: resetAddAddress,
  } = useForm({});

  const {
    register: registerEditAddress,
    handleSubmit: handleEditSubmit,
    setValue: setValueEditAddress,
    formState: { errors: errorsEditAddress },
    reset: resetEditAddress,
  } = useForm({});
  const handleAddUserAddress = async (data) => {
    try {
      const formData = new FormData();
      formData.append("Name", data?.addressName);
      formData.append("address", data?.Address);
      formData.append("addressLine1", data?.AddressLine1);
      formData.append("addressLine2", data?.AddressLine2);
      formData.append("City", data?.City);
      formData.append("state", data?.State);
      formData.append("pinCode", data?.Pincode);
      formData.append("Phone", data?.Phone);
      formData.append("alternatePhone", data?.alternatePhone);
      formData.append("AddressType", data?.AddressType);

      const response = await addUserAddress.callApi(userId, formData);

      handleClose();
      toast.success(response?.message || "Address added successfully!");
      handleGetAllUserAddress();
      resetAddAddress({
        addressName: "",
        Address: "",
        AddressLine1: "",
        AddressLine2: "",
        City: "",
        State: "",
        Pincode: "",
      });
    } catch (error) {
      console.error("Error adding user address:", error);
      toast.error(error.message || "Failed to add address. Please try again.");
    }
  };
  const handleEditUserAddress = async (data) => {
    try {
      console.log(data);

      const formData = new FormData();
      formData.append("Name", data?.addressName);
      formData.append("address", data?.Address);
      formData.append("addressLine1", data?.AddressLine1);
      formData.append("addressLine2", data?.AddressLine2);
      formData.append("City", data?.City);
      formData.append("state", data?.State);
      formData.append("pinCode", data?.Pincode);
      formData.append("Phone", data?.Phone);
      formData.append("alternatePhone", data?.alternatePhone);
      formData.append("AddressType", data?.AddressType);
      const response = await updateOneAddress.callApi(
        selectedAddressId,
        formData
      );

      if (response) {
        dispatch(fetchUserProfile(userId));
        toast.success(response?.message || "Address updated successfully!");
        handleClose();
        handleGetAllUserAddress();
      } else {
        toast.error("Failed to update the address. Please try again.");
      }
    } catch (error) {
      console.error("Error updating the address:", error);
      toast.error("An error occurred while updating the address.");
    }
  };
  const handleGetOneAddress = async (addressId) => {
    const response = await getOneUserAddress.callApi(addressId);
    setSelectedAddressId(response?.addresses?._id);
    setValueEditAddress("addressName", response?.addresses.Name || "");
    setValueEditAddress("Address", response?.addresses.address || "");
    setValueEditAddress("AddressLine1", response?.addresses.addressLine1 || "");
    setValueEditAddress("AddressLine2", response?.addresses.addressLine2 || "");
    setValueEditAddress("City", response?.addresses.City || "");
    setValueEditAddress("State", response?.addresses.state || "");
    setValueEditAddress("Pincode", response?.addresses.pinCode || "");
    setValueEditAddress("Pincode", response?.addresses.pinCode || "");
    setValueEditAddress("Phone", response?.addresses.Phone || "");
    setValueEditAddress(
      "alternatePhone",
      response?.addresses.alternatePhone || ""
    );
    setValueEditAddress("AddressType", response?.addresses.AddressType || "");
  };
  const handleDeleteOneUserAddress = async () => {
    const response = await deleteOneAddress.callApi(selectedAddressId);
    handleClose();
    handleGetAllUserAddress();
  };
  const handleSelectOneAddressWithUserId = async (addressId) => {
    try {
      const response = await selectOneUserAddress.callApi(userId, addressId);
      handleGetAllUserAddress();
      setIsEditingAddress(false);
    } catch (error) {
      console.log("error while selecting address");
    }
  };
  const handleGetAllUserAddress = useCallback(async () => {
    try {
      const response = await getUserAllAddress.callApi(userId);
      setUserAllAddress(response?.addresses);
    } catch (error) {
      console.error("Error fetching user addresses:", error);
    }
  }, [isEditingAddress]);
  const getUserSelectedAddressApiHandle = async () => {
    if (userId) {
      const response = await getUserSelectedAddressApi.callApi(userId);
      setUserSelectedAddress(response ? response?.addresses : null);
    }
  };
  const RemoveFromCartApihandle = async (packageId) => {
    const response = await RemoveFromCartApi.callApi(userId, packageId);
    dispatch(fetchUserCart({ userId })).then((response) => {
      if (!response || response.length === 0) {
        console.log("Server response is empty. No cart items fetched.");
      }
    });
  };
  useEffect(() => {
    if (!isEditingAddress) {
      getUserSelectedAddressApiHandle();
    }
  }, [!isEditingAddress]);
  const getAllCouponHandle = async () => {
    const response = await getAllCoupon.callApi();
    setAllCoupon(response?.coupons);
  };

  useEffect(() => {
    getAllCouponHandle();
  }, []);
  useEffect(() => {
    if (isEditingAddress) {
      handleGetAllUserAddress();
    }
  }, [isEditingAddress, handleGetAllUserAddress]);

  useEffect(() => {
    if (userId && (!cart || cart.length === 0)) {
      dispatch(fetchUserCart({ userId })).then((response) => {
        if (!response || response.length === 0) {
          console.log("Server response is empty. No cart items fetched.");
        }
      });
    }
  }, [userId, cart, dispatch]);
  const handleApplyCoupon = (couponCode) => {
    dispatch(
      fetchUserCart({ userId: userId, query: { couponCode: couponCode } })
    );
  };
  const RemoveCouponApi = useServices(couponApi.RemoveCoupon);
  const RemoveCouponApiHandle = async (req, res) => {
    const response = await RemoveCouponApi.callApi(userId);
    dispatch(fetchUserCart({ userId: userId }));
  };
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const createOrderHandle = async (numofParts) => {
    try {
      const isScriptLoaded = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );
      if (!isScriptLoaded) {
        console.error("Failed to load Razorpay script.");
        return;
      }

      const formdata = new FormData();
      formdata.append("numberOfPart", numofParts);
      const url = `${process.env.REACT_APP_API_BASE_URL}createorder/create-order/${userId}/${numofParts}`;

      const response = await axios.post(url, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const { order_id, amount, currency } = response?.data;

      if (!order_id || !amount) {
        console.error("Missing order_id or amount");
        return;
      }

      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID,
        amount: amount,
        currency: currency || "INR",
        name: "Evaga Entertainment",
        description: "Order Payment",
        order_id: order_id,
        handler: async (response) => {
          const formdata = new FormData();
          formdata.append("orderId", response.razorpay_order_id);
          formdata.append("paymentId", response.razorpay_payment_id);
          formdata.append("razorpaySignature", response.razorpay_signature);

          await validateOrderApi.callApi(formdata);
          if (window.fbq && typeof window.fbq === "function") {
            window.fbq("track", "Purchase", {
              currency: currency || "INR",
              value: amount / 100,
            });
          } else {
            console.warn("Facebook Pixel is not available");
          }

          window.location.href = `${internalRoutes.orderStatus}?order_id=${response.razorpay_order_id}`;
        },
        prefill: {
          name: userData?.name,
          email: userData?.email,
          contact: userData?.phoneNumber,
        },
        theme: { color: "#3399cc" },
        modal: {
          ondismiss: () => {
            console.warn("Payment modal closed by user");
            axios.post(
              `${process.env.REACT_APP_API_BASE_URL}createorder/update-order`,
              {
                orderId: order_id,
                status: "CANCELLED",
                paymentStatus: "FAILED",
              }
            );
          },
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Error in Order Creation or Payment:", error);
    }
  };
  const getEstimatedDistanceAndCostHandle = async (userPincode, cartItems) => {
    try {
      const uniqueVendorIds = [
        ...new Set(cartItems?.map((item) => item.vendorId)),
      ];

      const vendorPincodePromises = uniqueVendorIds.map((vendorId) =>
        getVendorPincodeApi.callApi(vendorId)
      );

      const vendorPincodeResponses = await Promise.all(vendorPincodePromises);

      const vendorPincodeMap = {};
      vendorPincodeResponses.forEach((response, index) => {
        if (response && response.pincode) {
          vendorPincodeMap[uniqueVendorIds[index]] = response.pincode;
        }
      });

      const distanceCalculationPromises = cartItems.map((item) => {
        try {
          const vendorPincode = vendorPincodeMap[item.vendorId];
          if (!vendorPincode) {
            return Promise.resolve({
              error: `Could not get pincode for vendor ${item.vendorId}`,
              itemId: item._id,
            });
          }

          const formData = {
            userPincode: userPincode,
            vendorPincode: vendorPincode,
          };

          return calculatedistanceApi
            .callApi(formData)
            .then((distanceResponse) => {
              const distance = distanceResponse.data.distance;
              console.log(item.travelCharge, "item.travelCharge");

              const { FreeUpto, Thereon } = item.travelCharge || {};
              let travelCharge = 0;

              if (distance > FreeUpto) {
                travelCharge = (distance - FreeUpto) * Thereon;
              }

              return {
                success: true,
                data: {
                  distance,
                  cost: distanceResponse.data.cost,
                  travelCharge,
                },
                itemId: item._id,
                vendorId: item.vendorId,
              };
            })
            .catch((error) => ({
              error: error.message || "Failed to calculate distance",
              itemId: item._id,
              vendorId: item.vendorId,
            }));
        } catch (err) {
          console.error("Error in map iteration:", err);
          return Promise.resolve({
            error: err.message || "Unexpected error",
            itemId: item._id,
          });
        }
      });

      const distanceResults = await Promise.all(distanceCalculationPromises);

      const result = distanceResults.map((result) => {
        if (result.success) {
          return {
            itemId: result.itemId,
            vendorId: result.vendorId,
            distance: result.data.distance,
            cost: result.data.cost,
            travelCharge: result.data.travelCharge,
          };
        } else {
          return {
            itemId: result.itemId,
            vendorId: result.vendorId,
            error: result.error,
          };
        }
      });

      return result;
    } catch (error) {
      console.error("Error in getEstimatedDistanceAndCostHandle:", error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchDistanceAndCost = async () => {
      if (userSelectedAddress && cart?.items) {
        try {
          const result = await getEstimatedDistanceAndCostHandle(
            userSelectedAddress?.pinCode,
            cart?.items
          );
          setDistanceAndCostData(result);
        } catch (error) {
          console.error("Error fetching distance and cost:", error);
        }
      }
    };

    fetchDistanceAndCost();
  }, [userSelectedAddress, cart]);

  if (!auth?.isAuthenticated || auth?.role !== "user") {
    return (
      <motion.div
        className="flex items-center justify-center flex-col gap-3 w-full h-[50vh]"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{
          opacity: { duration: 0.8, ease: "easeInOut" },
          scale: { duration: 0.5, ease: "easeOut" },
        }}
      >
        <p className="text-primary text-xl text-textGray">
          Please Login To See Your Cart!
        </p>
        <button
          className="btn-primary w-fit px-4"
          onClick={() => history(internalRoutes.userLogin)}
        >
          Login
        </button>
      </motion.div>
    );
  }
  if (
    !cart ||
    cart?.items?.length === 0 ||
    cart?.message === "Cart not found"
  ) {
    return (
      <motion.div
        className="flex items-center justify-center flex-col gap-3 w-full h-[50vh]"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{
          opacity: { duration: 0.8, ease: "easeInOut" },
          scale: { duration: 0.5, ease: "easeOut" },
        }}
      >
        <p className="text-primary text-xl text-textGray">Your Cart Is Empty</p>
      </motion.div>
    );
  }
  return (
    <>
      <div className="w-full mt-5 md:mt-auto px-[2.5%] py-[2%] flex flex-col md:flex-row gap-4 justify-between">
        <div className="flex-1 md:flex-[0.75] min-w-0 w-full">
          <div className="flex items-start justify-start">
            {!isEditingAddress && <BackButton />}
          </div>
          {isEditingAddress ? (
            <div className="flex flex-col gap-4">
              <span
                className="flex items-center justify-start gap-1 text-textGray cursor-pointer"
                onClick={() => setIsEditingAddress(false)}
              >
                <IoMdArrowRoundBack /> Back
              </span>
              <span className="flex items-center justify-between w-full">
                <h2 className="text-xl font-medium text-primary">
                  Select a Delivery Address
                </h2>
                <button
                  className="btn-primary w-fit px-2"
                  onClick={() => [handleOpen(), setModalType("addAddress")]}
                >
                  Add Address
                </button>
              </span>
              <div className="w-full">
                {userAllAddress?.map((item) => (
                  <SelectAddressCard
                    address={item}
                    onEdit={setOpen}
                    onDelete={setOpen}
                    setModalType={setModalType}
                    onEditFunction={handleGetOneAddress}
                    setSelectedAddressId={setSelectedAddressId}
                    selectAddress={handleSelectOneAddressWithUserId}
                    selected={item?.selected}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <AddressSelector
                setIsEditingAddress={setIsEditingAddress}
                userAddress={userSelectedAddress}
              />
              <div className="flex flex-col gap-2">
                {cart?.items?.map((item) => {
                  const imageUrl =
                    (Array.isArray(item?.packageDetails?.CoverImage)
                      ? item?.packageDetails?.CoverImage[0]
                      : item?.packageDetails?.CoverImage) ||
                    (Array.isArray(item?.packageDetails?.ProductImage)
                      ? item?.packageDetails?.ProductImage[0]
                      : item?.packageDetails?.ProductImage);

                  const popularimage = imageUrl?.startsWith("service/")
                    ? process.env.REACT_APP_API_Aws_Image_BASE_URL + imageUrl
                    : imageUrl;
                  return (
                    <CheckOutCard
                      key={item?.packageId}
                      price={item?.totalPrice}
                      title={
                        item?.packageDetails?.Title ||
                        item?.packageDetails?.VenueName ||
                        item?.packageDetails?.FoodTruckName
                      }
                      image={popularimage}
                      category={item?.categoryName}
                      vendorUserName={item?.vendorName}
                      packageId={item?.packageId}
                      removeFromcart={RemoveFromCartApihandle}
                    />
                  );
                })}
              </div>
              <div className="w-full flex items-start justify-start flex-col gap-2">
                <h3 className="text-primary font-semibold text-xl">
                  Recommended
                </h3>
                <div className="w-full flex flex-row gap-5 overflow-x-scroll no-scrollbar box-border">
                  <HorizontalScroll speed={1} className="flex flex-row gap-8">
                    {suggestions?.map((service, index) => {
                      const imageUrl =
                        (Array.isArray(service?.CoverImage)
                          ? service?.CoverImage[0]
                          : service?.CoverImage) ||
                        (Array.isArray(service?.ProductImage)
                          ? service?.ProductImage[0]
                          : service?.ProductImage);

                      const popularimage = imageUrl?.startsWith("service/")
                        ? process.env.REACT_APP_API_Aws_Image_BASE_URL +
                          imageUrl
                        : imageUrl;

                      return (
                        <RecentlyViewedCard
                          key={service?.serviceDetails?._id}
                          popularimage={popularimage}
                          title={
                            service?.Title ||
                            service?.VenueName ||
                            service?.FoodTruckName
                          }
                          category={service?.CategoryName}
                          price={
                            service?.price ||
                            service?.Pricing ||
                            service?.Price ||
                            service?.Package?.[0]?.Rates ||
                            service?.["OrderQuantity&Pricing"]?.[0]?.Rates ||
                            service?.["Duration&Pricing"]?.[0]?.Amount ||
                            service?.["SessionLength"]?.[0]?.Amount ||
                            service?.["SessionLength&Pricing"]?.[0]?.Amount ||
                            service?.["QtyPricing"]?.[0]?.Rates
                          }
                          rating={0}
                          reviews={0}
                          serviceId={service?.serviceId}
                          packageId={service?.packageId}
                          onClick={() =>
                            history(
                              `${internalRoutes.SinglePackage}/${service?.serviceId}/${service?.packageId}`
                            )
                          }
                          // isFavourite={allWishlist?.some(
                          //   (item) =>
                          //     item._id === service?.serviceId &&
                          //     item.packageDetails?._id === service?.packageId
                          // )}
                        />
                      );
                    })}
                  </HorizontalScroll>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex-1 md:flex-[0.25] w-full">
          <CheckoutSummary
            totalOfcart={cart?.totalOfCart}
            platformFee={cart?.platformFee}
            totalWithFee={cart?.totalAfterDiscount}
            platformGstAmount={cart?.platformGstAmount}
            totalGst={cart?.totalGst}
            setModalType={setModalType}
            openModal={handleOpen}
            discount={cart?.discount}
            onPlaceOrder={createOrderHandle}
            selectedAddress={userSelectedAddress}
            editAddress={setIsEditingAddress}
            coupondiscount={cart?.discount}
            selectedCouponCode={cart?.code}
            cart={cart}
            RemoveCode={RemoveCouponApiHandle}
            applyCoupon={handleApplyCoupon}
            estimatedDistance={distanceAndCostData}
          />
        </div>
      </div>
      <ReusableModal
        open={open}
        onClose={handleClose}
        title={
          modalType === "addAddress"
            ? "Add Address"
            : modalType === "editAddress"
            ? "Edit Address"
            : modalType === "deleteAddress"
            ? "Delete Address"
            : modalType === "applyCoupon"
            ? "Add Coupon"
            : "Unknown"
        }
        width={"50%"}
      >
        {modalType === "addAddress" && (
          <form onSubmit={handleAddSubmit(handleAddUserAddress)}>
            <div className="my-8 space-y-4">
              <div className="flex justify-between sm:flex-col lg:flex-row">
                <label className="text-textGray text-xl">Name*</label>
                <span className="w-[300px] flex items-start justify-start flex-col gap1">
                  <input
                    type="text"
                    className="w-[300px] h-[40px] px-4 py-2 border border-[#E0E0E0] rounded-lg outline-none"
                    {...registerAddAddress("addressName", {
                      required: { value: true, message: "Name is required" },
                      minLength: {
                        value: 3,
                        message: "Name must be at least 3 characters",
                      },
                      maxLength: {
                        value: 20,
                        message: "Name must be at most 20 characters",
                      },
                    })}
                  />
                  {errorsAddAddress.addressName && (
                    <p role="alert" className="text-red-500 text-sm">
                      {errorsAddAddress.addressName.message}
                    </p>
                  )}
                </span>
              </div>{" "}
              <div className="flex justify-between sm:flex-col lg:flex-row">
                <label className="text-textGray text-xl">Phone*</label>
                <span className="w-[300px] flex items-start justify-start flex-col gap1">
                  <input
                    type="text"
                    className="w-[300px] h-[40px] px-4 py-2 border border-[#E0E0E0] rounded-lg outline-none"
                    {...registerAddAddress("Phone", {
                      required: { value: true, message: "Phone is required" },
                      minLength: {
                        value: 3,
                        message: "Phone must be at least 10 characters",
                      },
                      maxLength: {
                        value: 20,
                        message: "Phone must be at most 10 characters",
                      },
                    })}
                  />
                  {errorsAddAddress.Phone && (
                    <p role="alert" className="text-red-500 text-sm">
                      {errorsAddAddress.Phone.message}
                    </p>
                  )}
                </span>
              </div>{" "}
              <div className="flex justify-between sm:flex-col lg:flex-row">
                <label className="text-textGray text-xl">Alternate Phone</label>
                <span className="w-[300px] flex items-start justify-start flex-col gap1">
                  <input
                    type="text"
                    className="w-[300px] h-[40px] px-4 py-2 border border-[#E0E0E0] rounded-lg outline-none"
                    {...registerAddAddress("alternatePhone", {
                      required: {
                        value: false,
                        message: "Alternate Phone is required",
                      },
                      minLength: {
                        value: 3,
                        message:
                          "Alternate Phone must be at least 10 characters",
                      },
                      maxLength: {
                        value: 20,
                        message:
                          "Alternate Phone must be at most 10 characters",
                      },
                    })}
                  />
                  {errorsAddAddress.alternatePhone && (
                    <p role="alert" className="text-red-500 text-sm">
                      {errorsAddAddress.alternatePhone.message}
                    </p>
                  )}
                </span>
              </div>
              <div className="flex justify-between">
                <label className="text-textGray text-xl">Address*</label>
                <span className="w-[300px] flex items-start justify-start flex-col gap1">
                  <input
                    type="text"
                    className="w-[300px] h-[40px] px-4 py-2 border border-[#E0E0E0] rounded-lg outline-none"
                    {...registerAddAddress("Address", {
                      required: { value: true, message: "Address is required" },
                      minLength: {
                        value: 5,
                        message: "Address must be at least 5 characters",
                      },
                      maxLength: {
                        value: 200,
                        message: "Address must be at most 20 characters",
                      },
                    })}
                  />
                  {errorsAddAddress.Address && (
                    <p role="alert" className="text-red-500 text-sm">
                      {errorsAddAddress.Address.message}
                    </p>
                  )}
                </span>
              </div>
              <div className="flex justify-between">
                <label className="text-textGray text-xl">Address line 1*</label>
                <span className="w-[300px] flex items-start justify-start flex-col gap1">
                  <input
                    type="text"
                    className="w-[300px] h-[40px] px-4 py-2 border border-[#E0E0E0] rounded-lg outline-none"
                    {...registerAddAddress("AddressLine1", {
                      required: {
                        value: true,
                        message: "AddressLine1 is required",
                      },
                      minLength: {
                        value: 5,
                        message: "AddressLine1 must be at least 5 characters",
                      },
                      maxLength: {
                        value: 200,
                        message: "AddressLine1 must be at most 20 characters",
                      },
                    })}
                  />
                  {errorsAddAddress.AddressLine1 && (
                    <p role="alert" className="text-red-500 text-sm">
                      {errorsAddAddress.AddressLine1.message}
                    </p>
                  )}
                </span>
              </div>
              <div className="flex justify-between">
                <label className="text-textGray text-xl">Address line 2</label>
                <span className="w-[300px] flex items-start justify-start flex-col gap1">
                  <input
                    type="text"
                    className="w-[300px] h-[40px] px-4 py-2 border border-[#E0E0E0] rounded-lg outline-none"
                    {...registerAddAddress("AddressLine2", {
                      required: {
                        value: false,
                        message: "AddressLine2 is required",
                      },
                      minLength: {
                        value: 5,
                        message: "AddressLine2 must be at least 5 characters",
                      },
                      maxLength: {
                        value: 200,
                        message: "AddressLine2 must be at most 20 characters",
                      },
                    })}
                  />
                  {errorsAddAddress.AddressLine2 && (
                    <p role="alert" className="text-red-500 text-sm">
                      {errorsAddAddress.AddressLine2.message}
                    </p>
                  )}
                </span>
              </div>
              <div className="flex justify-between">
                <label className="text-textGray text-xl">City*</label>
                <span className="w-[300px] flex items-start justify-start flex-col gap1">
                  <input
                    type="text"
                    className="w-[300px] h-[40px] px-4 py-2 border border-[#E0E0E0] rounded-lg outline-none"
                    {...registerAddAddress("City", {
                      required: { value: true, message: "City is required" },
                      minLength: {
                        value: 2,
                        message: "City must be at least 2 characters",
                      },
                      maxLength: {
                        value: 200,
                        message: "City must be at most 20 characters",
                      },
                    })}
                  />
                  {errorsAddAddress.City && (
                    <p role="alert" className="text-red-500 text-sm">
                      {errorsAddAddress.City.message}
                    </p>
                  )}
                </span>
              </div>{" "}
              <div className="flex justify-between">
                <label className="text-textGray text-xl">State*</label>
                <span className="w-[300px] flex items-start justify-start flex-col gap1">
                  <input
                    type="text"
                    className="w-[300px] h-[40px] px-4 py-2 border border-[#E0E0E0] rounded-lg outline-none"
                    {...registerAddAddress("State", {
                      required: { value: true, message: "State is required" },
                      minLength: {
                        value: 2,
                        message: "State must be at least 2 characters",
                      },
                      maxLength: {
                        value: 200,
                        message: "State must be at most 20 characters",
                      },
                    })}
                  />
                  {errorsAddAddress.State && (
                    <p role="alert" className="text-red-500 text-sm">
                      {errorsAddAddress.State.message}
                    </p>
                  )}
                </span>
              </div>
              <div className="flex justify-between">
                <label className="text-textGray text-xl">Pincode*</label>
                <span className="w-[300px] flex items-start justify-start flex-col gap1">
                  <input
                    type="number"
                    className="w-[300px] h-[40px] px-4 py-2 border border-[#E0E0E0] rounded-lg outline-none "
                    {...registerAddAddress("Pincode", {
                      required: { value: true, message: "Pincode is required" },
                      minLength: {
                        value: 6,
                        message: "Pincode must be at least 6 characters",
                      },
                      maxLength: {
                        value: 8,
                        message: "Pincode must be at most 8 characters",
                      },
                    })}
                  />
                  {errorsAddAddress.Pincode && (
                    <p role="alert" className="text-red-500 text-sm">
                      {errorsAddAddress.Pincode.message}
                    </p>
                  )}
                </span>
              </div>{" "}
              <div className="flex justify-between">
                <label className="text-textGray text-xl">Address Type*</label>
                <span className="w-[300px] flex items-start justify-start flex-col gap-1">
                  <div className="flex flex-row flex-wrap text-textGray text-sm gap-2">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        value="Home"
                        {...registerAddAddress("AddressType", {
                          required: {
                            value: true,
                            message: "Address Type is required",
                          },
                        })}
                      />
                      Home
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        value="Office"
                        {...registerAddAddress("AddressType", {
                          required: {
                            value: true,
                            message: "Address Type is required",
                          },
                        })}
                      />
                      Office
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        value="Event Address"
                        {...registerAddAddress("AddressType", {
                          required: {
                            value: true,
                            message: "Address Type is required",
                          },
                        })}
                      />
                      Event Address
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        value="Others"
                        {...registerAddAddress("AddressType", {
                          required: {
                            value: true,
                            message: "Address Type is required",
                          },
                        })}
                      />
                      Others
                    </label>
                  </div>
                  {errorsAddAddress.AddressType && (
                    <p role="alert" className="text-red-500 text-sm">
                      {errorsAddAddress.AddressType.message}
                    </p>
                  )}
                </span>
              </div>
            </div>

            <button className="btn-primary w-fit px-2 mt-2" type="submit">
              Add Address
            </button>
          </form>
        )}
        {modalType === "editAddress" && (
          <form onSubmit={handleEditSubmit(handleEditUserAddress)}>
            <div className="my-8 space-y-4">
              <div className="flex justify-between sm:flex-col lg:flex-row">
                <label className="text-textGray text-xl">Name*</label>
                <span className="flex items-start justify-start flex-col gap1">
                  <input
                    type="text"
                    className="w-[300px] h-[40px] px-4 py-2 border border-[#E0E0E0] rounded-lg outline-none"
                    {...registerEditAddress("addressName", {
                      required: { value: true, message: "Name is required" },
                      minLength: {
                        value: 3,
                        message: "Name must be at least 3 characters",
                      },
                      maxLength: {
                        value: 20,
                        message: "Name must be at most 20 characters",
                      },
                    })}
                  />
                  {errorsEditAddress.addressName && (
                    <p role="alert" className="text-red-500 text-base">
                      {errorsEditAddress.addressName.message}
                    </p>
                  )}
                </span>
              </div>{" "}
              <div className="flex justify-between sm:flex-col lg:flex-row">
                <label className="text-textGray text-xl">Phone*</label>
                <span className="flex items-start justify-start flex-col gap1">
                  <input
                    type="text"
                    className="w-[300px] h-[40px] px-4 py-2 border border-[#E0E0E0] rounded-lg outline-none"
                    {...registerEditAddress("Phone", {
                      required: { value: true, message: "Phone is required" },
                      minLength: {
                        value: 3,
                        message: "Phone must be at least 10 characters",
                      },
                      maxLength: {
                        value: 20,
                        message: "Phone must be at most 10 characters",
                      },
                    })}
                  />
                  {errorsEditAddress.Phone && (
                    <p role="alert" className="text-red-500 text-base">
                      {errorsEditAddress.Phone.message}
                    </p>
                  )}
                </span>
              </div>{" "}
              <div className="flex justify-between sm:flex-col lg:flex-row">
                <label className="text-textGray text-xl">Alternate Phone</label>
                <span className="flex items-start justify-start flex-col gap1">
                  <input
                    type="text"
                    className="w-[300px] h-[40px] px-4 py-2 border border-[#E0E0E0] rounded-lg outline-none"
                    {...registerEditAddress("alternatePhone", {
                      required: {
                        value: false,
                        message: "Alternate Phone is required",
                      },
                      minLength: {
                        value: 3,
                        message:
                          "Alternate Phone must be at least 10 characters",
                      },
                      maxLength: {
                        value: 20,
                        message:
                          "Alternate Phone must be at most 10 characters",
                      },
                    })}
                  />
                  {errorsEditAddress.alternatePhone && (
                    <p role="alert" className="text-red-500 text-base">
                      {errorsEditAddress.alternatePhone.message}
                    </p>
                  )}
                </span>
              </div>
              <div className="flex justify-between">
                <label className="text-textGray text-xl">Address*</label>
                <span className="flex items-start justify-start flex-col gap1">
                  <input
                    type="text"
                    className="w-[300px] h-[40px] px-4 py-2 border border-[#E0E0E0] rounded-lg outline-none"
                    {...registerEditAddress("Address", {
                      required: { value: true, message: "Address is required" },
                      minLength: {
                        value: 5,
                        message: "Address must be at least 5 characters",
                      },
                      maxLength: {
                        value: 200,
                        message: "Address must be at most 20 characters",
                      },
                    })}
                  />
                  {errorsEditAddress.Address && (
                    <p role="alert" className="text-red-500 text-base">
                      {errorsEditAddress.Address.message}
                    </p>
                  )}
                </span>
              </div>
              <div className="flex justify-between">
                <label className="text-textGray text-xl">Address line 1*</label>
                <span className="flex items-start justify-start flex-col gap1">
                  <input
                    type="text"
                    className="w-[300px] h-[40px] px-4 py-2 border border-[#E0E0E0] rounded-lg outline-none"
                    {...registerEditAddress("AddressLine1", {
                      required: {
                        value: true,
                        message: "AddressLine1 is required",
                      },
                      minLength: {
                        value: 5,
                        message: "AddressLine1 must be at least 5 characters",
                      },
                      maxLength: {
                        value: 200,
                        message: "AddressLine1 must be at most 20 characters",
                      },
                    })}
                  />
                  {errorsEditAddress.AddressLine1 && (
                    <p role="alert" className="text-red-500 text-base">
                      {errorsEditAddress.AddressLine1.message}
                    </p>
                  )}
                </span>
              </div>
              <div className="flex justify-between">
                <label className="text-textGray text-xl">Address line 2</label>
                <span className="flex items-start justify-start flex-col gap1">
                  <input
                    type="text"
                    className="w-[300px] h-[40px] px-4 py-2 border border-[#E0E0E0] rounded-lg outline-none"
                    {...registerEditAddress("AddressLine2", {
                      required: {
                        value: false,
                        message: "AddressLine2 is required",
                      },
                      minLength: {
                        value: 5,
                        message: "AddressLine2 must be at least 5 characters",
                      },
                      maxLength: {
                        value: 200,
                        message: "AddressLine2 must be at most 20 characters",
                      },
                    })}
                  />
                  {errorsEditAddress.AddressLine2 && (
                    <p role="alert" className="text-red-500 text-base">
                      {errorsEditAddress.AddressLine2.message}
                    </p>
                  )}
                </span>
              </div>
              <div className="flex justify-between">
                <label className="text-textGray text-xl">City*</label>
                <span className="w-[300px] flex items-start justify-start flex-col gap1">
                  <input
                    type="text"
                    className="w-[300px] h-[40px] px-4 py-2 border border-[#E0E0E0] rounded-lg outline-none"
                    {...registerEditAddress("City", {
                      required: { value: true, message: "State is required" },
                      minLength: {
                        value: 2,
                        message: "City must be at least 2 characters",
                      },
                      maxLength: {
                        value: 200,
                        message: "City must be at most 20 characters",
                      },
                    })}
                  />
                  {errorsAddAddress.City && (
                    <p role="alert" className="text-red-500 text-base">
                      {errorsAddAddress.City.message}
                    </p>
                  )}
                </span>
              </div>{" "}
              <div className="flex justify-between">
                <label className="text-textGray text-xl">State*</label>
                <span className="flex items-start justify-start flex-col gap1">
                  <input
                    type="text"
                    className="w-[300px] h-[40px] px-4 py-2 border border-[#E0E0E0] rounded-lg outline-none"
                    {...registerEditAddress("State", {
                      required: { value: true, message: "State is required" },
                      minLength: {
                        value: 2,
                        message: "State must be at least 2 characters",
                      },
                      maxLength: {
                        value: 200,
                        message: "State must be at most 20 characters",
                      },
                    })}
                  />
                  {errorsEditAddress.State && (
                    <p role="alert" className="text-red-500 text-base">
                      {errorsEditAddress.State.message}
                    </p>
                  )}
                </span>
              </div>
              <div className="flex justify-between">
                <label className="text-textGray text-xl">Pincode*</label>
                <span className="flex items-start justify-start flex-col gap1">
                  <input
                    type="number"
                    className="w-[300px] h-[40px] px-4 py-2 border border-[#E0E0E0] rounded-lg outline-none "
                    {...registerEditAddress("Pincode", {
                      required: { value: true, message: "Pincode is required" },
                      minLength: {
                        value: 6,
                        message: "Pincode must be at least 6 characters",
                      },
                      maxLength: {
                        value: 8,
                        message: "Pincode must be at most 8 characters",
                      },
                    })}
                  />
                  {errorsEditAddress.Pincode && (
                    <p role="alert" className="text-red-500 text-base">
                      {errorsEditAddress.Pincode.message}
                    </p>
                  )}
                </span>
              </div>
              <div className="flex justify-between">
                <label className="text-textGray text-xl">Address Type*</label>
                <span className="w-[300px] flex items-start justify-start flex-col gap-1">
                  <div className="flex flex-row flex-wrap text-textGray text-sm gap-2">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        value="Home"
                        {...registerEditAddress("AddressType", {
                          required: {
                            value: true,
                            message: "Address Type is required",
                          },
                        })}
                      />
                      Home
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        value="Office"
                        {...registerEditAddress("AddressType", {
                          required: {
                            value: true,
                            message: "Address Type is required",
                          },
                        })}
                      />
                      Office
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        value="Event Address"
                        {...registerEditAddress("AddressType", {
                          required: {
                            value: true,
                            message: "Address Type is required",
                          },
                        })}
                      />
                      Event Address
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        value="Others"
                        {...registerEditAddress("AddressType", {
                          required: {
                            value: true,
                            message: "Address Type is required",
                          },
                        })}
                      />
                      Others
                    </label>
                  </div>
                  {errorsAddAddress.AddressType && (
                    <p role="alert" className="text-red-500 text-sm">
                      {errorsAddAddress.AddressType.message}
                    </p>
                  )}
                </span>
              </div>
            </div>

            <button className="btn-primary w-fit px-2 mt-2" type="submit">
              Edit Address
            </button>
          </form>
        )}
        {modalType === "deleteAddress" && (
          <DeleteForm
            deleteText="Address"
            onDelete={handleDeleteOneUserAddress}
          />
        )}
        {modalType === "applyCoupon" && (
          <div>
            <div className="flex items-center justify-start gap-4 mb-6">
              <img src={Tag} alt="tag1" />
              <input
                type="text"
                placeholder="Enter Coupon code"
                value={couponCode}
                // onChange={handleChange}
                className="w-full h-[40px] px-4 py-2 border rounded-lg focus:outline-none text-textGray"
              />
            </div>
            <p className="text-primary text-normal font-medium text-xl mb-2">
              Available Offers
            </p>
            {allCoupon?.map((item) => (
              <CouponsCard
                key={item?.code}
                code={item?.code}
                setCouponCode={setCouponCode}
              />
            ))}
            <div className="flex items-center justify-end mt-4 gap-2">
              <button
                className="btn-transparent-border w-fit px-2"
                onClick={handleClose}
              >
                Cancel
              </button>
              <button
                className="btn-primary w-fit px-2 object-contain"
                onClick={() => [handleApplyCoupon(couponCode), handleClose()]}
              >
                Apply Coupon
              </button>
            </div>
          </div>
        )}
      </ReusableModal>
    </>
  );
}

export default CheckOut;
