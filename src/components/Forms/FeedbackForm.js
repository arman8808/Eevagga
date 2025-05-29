// import React from "react";
// import { useForm } from "react-hook-form";
// import { motion } from "framer-motion";
// import useServices from "../../hooks/useServices";
// import commonApis from "../../services/commonApis";
// import { toast } from "react-toastify";
// const FeedbackForm = () => {
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   };

//   const clickAnimation = {
//     whileTap: { scale: 0.95 },
//   };
//   const addFeedBackApi = useServices(commonApis.addFeedBack);
//   const {
//     register,
//     handleSubmit,
//     getValues,reset,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
  
  
//     const {
//       email,
//       customer,
//       phone,
//       booking,
//       bookAgain,
//       comments,
//       contact_preference,
//       expectations,
//       experience,
//       information,
//       interact,
//       navigation,
//       platform,
//       rating,
//       reason,
//       recommend,
//       service,
//       serviceType,
//       suggestions,
//       support,
//       technical,
//       unique,
//       vendor,
//     } = data;
  
//     // Prepare the form data
//     const formData = new FormData();
//     formData.append("email", email);
//     formData.append("customer", customer);
//     formData.append("phone", phone);
//     formData.append("booking", booking);
//     formData.append("bookAgain", bookAgain);
//     formData.append("comments", comments);
//     formData.append("contact_preference", contact_preference);
//     formData.append("expectations", expectations);
//     formData.append("experience", experience);
//     formData.append("information", information);
//     formData.append("interact", interact);
//     formData.append("navigation", navigation);
//     formData.append("platform", platform.join(",")); // Assuming it's an array
//     formData.append("rating", rating);
//     formData.append("reason", reason);
//     formData.append("recommend", recommend);
//     formData.append("service", service);
//     formData.append("serviceType", serviceType.join(",")); // Assuming it's an array
//     formData.append("suggestions", suggestions);
//     formData.append("support", support);
//     formData.append("technical", technical.join(",")); // Assuming it's an array
//     formData.append("unique", unique.join(",")); // Assuming it's an array
//     formData.append("vendor", vendor);
  
//     try {
//       // Make the API call
//       const response = await addFeedBackApi.callApi(formData);
//       console.log(response);
      
//       // Show success message
//       toast.success(response?.message || "Successfully added to the Feedback!");
  
//       // Reset the form data on success (assuming you have a way to reset the form)
//       reset(); // Replace this with your actual form reset function
  
//     } catch (error) {
//       console.error("Error submitting feedback:", error);
  
//       // Show error message
//       toast.error(error?.response?.data?.message || "Something went wrong!");
//     }
//   };
  

//   return (
//     <motion.div
//       className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg"
//       initial={{ opacity: 0, scale: 0.9 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <h2 className="text-2xl font-semibold mb-4 text-center text-primary">
//         Eevagga - Feedback Form
//       </h2>
//       <p className="text-textGray text-center mb-6">
//         Thank you for sharing your valuable feedback! Your insights will help us
//         improve our platform and services to create a seamless event planning
//         experience.
//       </p>
//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//         <motion.fieldset
//           className="border p-4 rounded-md"
//           initial="hidden"
//           animate="visible"
//           variants={fadeInUp}
//         >
//           <legend className="font-semibold text-xl text-primary">
//             1. Overall Experience & NPS
//           </legend>
//           <label className="block mt-2 font-semibold text-primary">
//             How would you rate your overall experience?
//           </label>
//           <div className="flex flex-col">
//             {["Excellent", "Good", "Average", "Poor"].map((option) => (
//               <label
//                 key={option}
//                 className="flex items-center space-x-2 mt-1 text-textGray"
//               >
//                 <input
//                   type="radio"
//                   value={option}
//                   className="customRadio"
//                   {...register("experience", { required: true })}
//                 />
//                 <span>{option}</span>
//               </label>
//             ))}
//           </div>
//           {errors.experience && (
//             <p className="text-red-500">This field is required</p>
//           )}
//           <label className="block mt-4 font-semibold text-primary">
//             How likely are you to recommend us? (0-10)
//           </label>
//           <div className="grid grid-cols-6 lg:grid-cols-11">
//             {[...Array(11).keys()].map((num) => (
//               <label
//                 key={num}
//                 className="flex items-center space-x-2  mt-1 text-textGray"
//               >
//                 <input
//                   type="radio"
//                   value={num}
//                   className="customRadio"
//                   {...register("recommend", { required: true })}
//                 />
//                 <span>{num}</span>
//               </label>
//             ))}
//           </div>
//           {errors.recommend && (
//             <p className="text-red-500">This field is required</p>
//           )}
//           <label className="block mt-4 font-semibold text-primary">
//             What was the primary reason for your rating?
//           </label>
//           <textarea
//             className="w-full p-2 border rounded-md"
//             {...register("rating")}
//           ></textarea>
//           {errors.rating && (
//             <p className="text-red-500">This field is required</p>
//           )}
//         </motion.fieldset>

//         <motion.fieldset
//           className="border p-4 rounded-md"
//           initial="hidden"
//           animate="visible"
//           variants={fadeInUp}
//         >
//           <legend className="font-semibold text-xl text-primary">
//             2. User Experience (UI/UX & Platform Usability)
//           </legend>
//           <label className="block mt-2 font-semibold text-primary">
//             How easy was it to navigate the Eevagga platform?
//           </label>
//           <div className="flex flex-col">
//             {["Very Easy", "Somewhat Easy", "Neutral", "Difficult"].map(
//               (option) => (
//                 <label
//                   key={option}
//                   className="flex items-center space-x-2 mt-1 text-textGray"
//                 >
//                   <input
//                     type="radio"
//                     value={option}
//                     className="customRadio"
//                     {...register("navigation", { required: true })}
//                   />
//                   <span>{option}</span>
//                 </label>
//               )
//             )}
//           </div>
//           {errors.navigation && (
//             <p className="text-red-500">This field is required</p>
//           )}
//           <label className="block mt-2 font-semibold text-primary">
//             Did you find the information about vendors and services clear and
//             comprehensive?
//           </label>
//           <div className="flex flex-col">
//             {[
//               "Yes, it was well-organized",
//               "Somewhat, but could be improved",
//               "No, I found it confusing",
//             ].map((option) => (
//               <label
//                 key={option}
//                 className="flex items-center space-x-2 mt-1 text-textGray"
//               >
//                 <input
//                   type="radio"
//                   value={option}
//                   className="customRadio"
//                   {...register("information", { required: true })}
//                 />
//                 <span>{option}</span>
//               </label>
//             ))}
//           </div>
//           {errors.information && (
//             <p className="text-red-500">This field is required</p>
//           )}
//           <label className="block mt-2 font-semibold text-primary">
//             Did you face any technical issues while using the platform?{" "}
//             <i>(Select all that apply)</i>
//           </label>
//           <div className="flex flex-col">
//             {[
//               "Slow website loading",
//               "Issues with search or filtering",
//               "Payment or booking issues",
//               "Mobile responsiveness issues",
//               "No issues encountered",
//             ].map((option) => (
//               <label
//                 key={option}
//                 className="flex items-center space-x-2 mt-1 text-textGray "
//               >
//                 <input
//                   type="checkbox"
//                   value={option}
//                   className="customCheckbox"
//                   {...register("technical", { required: true })}
//                 />
//                 <span>{option}</span>
//               </label>
//             ))}
//           </div>
//           {errors.technical && (
//             <p className="text-red-500">This field is required</p>
//           )}
//           <label className="block mt-4 font-semibold text-primary">
//             Any suggestions to improve our website’s UI/UX?
//           </label>
//           <textarea
//             className="w-full p-2 border rounded-md"
//             {...register("suggestions")}
//           ></textarea>
//           {errors.suggestions && (
//             <p className="text-red-500">This field is required</p>
//           )}
//         </motion.fieldset>

//         <motion.fieldset
//           className="border p-4 rounded-md"
//           initial="hidden"
//           animate="visible"
//           variants={fadeInUp}
//         >
//           <legend className="font-semibold text-xl text-primary">
//             3. Customer Service Experience
//           </legend>
//           <label className="block mt-2 font-semibold text-primary">
//             Did you interact with our customer support team?
//           </label>
//           <div className="flex flex-col">
//             {["Yes", "No"].map((option) => (
//               <label
//                 key={option}
//                 className="flex items-center space-x-2 mt-1 text-textGray"
//               >
//                 <input
//                   type="radio"
//                   value={option}
//                   className="customRadio"
//                   {...register("interact", { required: true })}
//                 />
//                 <span>{option}</span>
//               </label>
//             ))}
//           </div>
//           {errors.interact && (
//             <p className="text-red-500">This field is required</p>
//           )}
//           <label className="block mt-2 font-semibold text-primary">
//             If yes, how satisfied were you with our customer service?
//           </label>
//           <div className="flex flex-col">
//             {["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied"].map(
//               (option) => (
//                 <label
//                   key={option}
//                   className="flex items-center space-x-2 mt-1 text-textGray"
//                 >
//                   <input
//                     type="radio"
//                     value={option}
//                     className="customRadio"
//                     {...register("service", { required: true })}
//                   />
//                   <span>{option}</span>
//                 </label>
//               )
//             )}
//           </div>
//           {errors.service && (
//             <p className="text-red-500">This field is required</p>
//           )}
//           <label className="block mt-2 font-semibold text-primary">
//             How responsive was our support team?
//           </label>
//           <div className="flex flex-col">
//             {[
//               "Extremely responsive",
//               "Somewhat responsive",
//               "Neutral",
//               "Slow response",
//               "No response",
//             ].map((option) => (
//               <label
//                 key={option}
//                 className="flex items-center space-x-2 mt-1 text-textGray"
//               >
//                 <input
//                   type="radio"
//                   value={option}
//                   className="customRadio"
//                   {...register("support", { required: true })}
//                 />
//                 <span>{option}</span>
//               </label>
//             ))}
//           </div>
//           {errors.support && (
//             <p className="text-red-500">This field is required</p>
//           )}
//           <label className="block mt-4 font-semibold text-primary">
//             Any feedback on our customer support?
//           </label>
//           <textarea
//             className="w-full p-2 border rounded-md"
//             {...register("customer")}
//           ></textarea>
//           {errors.customer && (
//             <p className="text-red-500">This field is required</p>
//           )}
//         </motion.fieldset>

//         <motion.fieldset
//           className="border p-4 rounded-md"
//           initial="hidden"
//           animate="visible"
//           variants={fadeInUp}
//         >
//           <legend className="font-semibold text-xl text-primary">
//             4. Platform Uniqueness & Future Improvements
//           </legend>
//           <label className="block mt-2 font-semibold text-primary">
//             What do you think makes Eevagga unique compared to other event
//             planning platforms? <i>(Select all that apply)</i>
//           </label>
//           <div className="flex flex-col">
//             {[
//               "Wide range of vendor options",
//               "Easy-to-use interface",
//               "Transparent pricing & reviews",
//               "Unique event planning features",
//               "Customer support & assistance",
//             ].map((option) => (
//               <label
//                 key={option}
//                 className="flex items-center space-x-2 mt-1 text-textGray"
//               >
//                 <input
//                   type="checkbox"
//                   value={option}
//                   className="customCheckbox"
//                   {...register("unique", { required: true })}
//                 />
//                 <span>{option}</span>
//               </label>
//             ))}
//           </div>
//           {errors.unique && (
//             <p className="text-red-500">This field is required</p>
//           )}
//           <label className="block mt-2 font-semibold text-primary">
//             What would you like to see improved or added to our platform?{" "}
//             <i>(Select all that apply)</i>
//           </label>
//           <div className="flex flex-col">
//             {[
//               "More vendor categories",
//               "Enhanced search & filtering",
//               "More customer support options",
//               "Better pricing transparency",
//               "Mobile app version",
//             ].map((option) => (
//               <label
//                 key={option}
//                 className="flex items-center space-x-2 mt-1 text-textGray"
//               >
//                 <input
//                   type="checkbox"
//                   value={option}
//                   className="customCheckbox"
//                   {...register("platform", { required: true })}
//                 />
//                 <span>{option}</span>
//               </label>
//             ))}
//           </div>
//           {errors.platform && (
//             <p className="text-red-500">This field is required</p>
//           )}
//           <label className="block mt-4 font-semibold text-primary">
//             Any additional comments or suggestions?
//           </label>
//           <textarea
//             className="w-full p-2 border rounded-md"
//             {...register("comments")}
//           ></textarea>
//           {errors.comments && (
//             <p className="text-red-500">This field is required</p>
//           )}
//         </motion.fieldset>

//         <motion.fieldset
//           className="border p-4 rounded-md"
//           initial="hidden"
//           animate="visible"
//           variants={fadeInUp}
//         >
//           <legend className="font-semibold text-xl text-primary">
//             5. Vendor Feedback
//           </legend>
//           <label className="block mt-2 font-semibold text-primary">
//             Did you book any services through Eevagga?
//           </label>
//           <div className="flex flex-col">
//             {["Yes", "No, I just explored the platform"].map((option) => (
//               <label
//                 key={option}
//                 className="flex items-center space-x-2 mt-1 text-textGray"
//               >
//                 <input
//                   type="radio"
//                   value={option}
//                   className="customRadio"
//                   {...register("booking", { required: true })}
//                 />
//                 <span>{option}</span>
//               </label>
//             ))}
//           </div>
//           {errors.booking && (
//             <p className="text-red-500">This field is required</p>
//           )}
//           <label className="block mt-2 font-semibold text-primary">
//             Which services did you book?{" "}
//             <i>
//               (Select all that apply, or select "None" if no service was booked)
//             </i>
//           </label>
//           <div className="flex flex-col">
//             {[
//               "Venue & Location Services",
//               "Catering & Beverage Services",
//               "Photography & Videography",
//               "Entertainment & Performances",
//               "Event Staffing & Management",
//               "Decor & Design Services",
//               "Fashion & Beauty Services",
//               "Rentals & Props",
//               "None",
//             ].map((option) => (
//               <label
//                 key={option}
//                 className="flex items-center space-x-2 mt-1 text-textGray"
//               >
//                 <input
//                   type="checkbox"
//                   value={option}
//                   className="customCheckbox"
//                   {...register("serviceType", { required: true })}
//                 />
//                 <span>{option}</span>
//               </label>
//             ))}
//           </div>
//           {errors.serviceType && (
//             <p className="text-red-500">This field is required</p>
//           )}
//           <label className="block mt-2 font-semibold text-primary">
//             How satisfied were you with the vendor(s) you booked?
//           </label>
//           <div className="flex flex-col">
//             {["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied"].map(
//               (option) => (
//                 <label
//                   key={option}
//                   className="flex items-center space-x-2 mt-1 text-textGray"
//                 >
//                   <input
//                     type="radio"
//                     value={option}
//                     className="customRadio"
//                     {...register("vendor", { required: true })}
//                   />
//                   <span>{option}</span>
//                 </label>
//               )
//             )}
//           </div>
//           {errors.vendor && (
//             <p className="text-red-500">This field is required</p>
//           )}
//           <label className="block mt-2 font-semibold text-primary">
//             Did the vendor(s) meet your expectations in terms of quality and
//             service?
//           </label>
//           <div className="flex flex-col">
//             {[
//               "Exceeded Expectations",
//               "Met Expectations",
//               "Below Expectations",
//             ].map((option) => (
//               <label
//                 key={option}
//                 className="flex items-center space-x-2 mt-1 text-textGray"
//               >
//                 <input
//                   type="radio"
//                   value={option}
//                   className="customRadio"
//                   {...register("expectations", { required: true })}
//                 />
//                 <span>{option}</span>
//               </label>
//             ))}
//           </div>
//           {errors.expectations && (
//             <p className="text-red-500">This field is required</p>
//           )}
//           <label className="block mt-2 font-semibold text-primary">
//             Would you book a vendor through Eevagga again?
//           </label>
//           <div className="flex flex-col">
//             {["Yes", "No"].map((option) => (
//               <label
//                 key={option}
//                 className="flex items-center space-x-2 mt-1 text-textGray"
//               >
//                 <input
//                   type="radio"
//                   value={option}
//                   className="customRadio"
//                   {...register("bookAgain", { required: true })}
//                 />
//                 <span>{option}</span>
//               </label>
//             ))}
//           </div>
//           {errors.bookAgain && (
//             <p className="text-red-500">This field is required</p>
//           )}
//           <label className="block mt-4 font-semibold text-primary">
//             Any specific feedback for the vendor(s)?
//           </label>
//           <textarea
//             className="w-full p-2 border rounded-md text-textGray"
//             {...register("reason")}
//           ></textarea>
//           {errors.reason && (
//             <p className="text-red-500">This field is required</p>
//           )}
//         </motion.fieldset>
//         <label className="block mt-2 font-semibold text-primary">
//           Would you like to be contacted for follow-up?
//         </label>
//         <div className="flex flex-col">
//           {["Yes, via Email", "Yes, via Phone", "No, thanks"].map((option) => (
//             <label
//               key={option}
//               className="flex items-center space-x-2 text-textGray"
//             >
//               <input
//                 type="radio"
//                 value={option}
//                 className="customRadio"
//                 {...register("contact_preference", { required: true })}
//               />
//               <span>{option}</span>
//             </label>
//           ))}
//         </div>
//         {errors.contact_preference && (
//           <p className="text-red-500">This field is required</p>
//         )}

//         <div>
//           <label className="block mt-2 font-semibold text-primary">
//             Please provide at least one contact detail
//           </label>
//           {/* Email Field */}
//           <label className="block">Email</label>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             {...register("email", {
//               validate: (value) =>
//                 !!value ||
//                 !!getValues("phone") ||
//                 "At least one contact detail is required",
//             })}
//             className="border p-2 w-full rounded-md text-textGray"
//           />{" "}
//           {errors.email && (
//             <p className="text-red-500">{errors.email.message}</p>
//           )}
//           {/* Phone Field */}
//           <label className="block">Phone</label>
//           <input
//             type="text"
//             placeholder="Enter your phone number"
//             {...register("phone", {
//               validate: (value) =>
//                 !!value ||
//                 !!getValues("email") ||
//                 "At least one contact detail is required",
//             })}
//             className="border p-2 w-full rounded-md text-textGray"
//           />
//           {/* Error Message */}
//           {errors.phone && (
//             <p className="text-red-500">{errors.phone.message}</p>
//           )}
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-primary text-white py-2 rounded-md hover:bg-blue-600"
//         >
//           Submit Feedback
//         </button>
//       </form>
//     </motion.div>
//   );
// };

// export default FeedbackForm;



import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import StarIcon from "@mui/icons-material/Star";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const FeedbackForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Custom colors
  const textYellow = "#FFE500";
  const textGray = "#6B7280";
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const starAnimation = {
    hover: { scale: 1.2 },
    tap: { scale: 0.9 }
  };

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
    }, 3000);
  };

  // Simplified Star Rating Component without radio buttons
  const StarRating = ({ name, label, required, lowLabel, highLabel }) => {
    const [hovered, setHovered] = useState(0);
    const selected = watch(name) || 0;

    const handleClick = (star) => {
      setValue(name, star);
    };

    return (
      <div className="mb-8">
        <label 
          className="block text-lg font-bold mb-3"
          style={{ color: textYellow }}
        >
          {label}
        </label>
        <div className="flex justify-between mb-2">
          <span className="text-sm" style={{ color: textGray }}>{lowLabel}</span>
          <span className="text-sm" style={{ color: textGray }}>{highLabel}</span>
        </div>
        <div className="flex justify-center space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <motion.div
              key={star}
              className="cursor-pointer"
              whileHover="hover"
              whileTap="tap"
              variants={starAnimation}
              onClick={() => handleClick(star)}
              onMouseEnter={() => setHovered(star)}
              onMouseLeave={() => setHovered(0)}
            >
              <StarIcon
                className={`w-8 h-8 transition-colors duration-200 ${
                  star <= (hovered || selected)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
                fontSize="large"
              />
            </motion.div>
          ))}
        </div>
        {errors[name] && (
          <p className="mt-2 text-red-500 text-sm">Please select a rating</p>
        )}
      </div>
    );
  };

  if (isSubmitted) {
    return (
      <motion.div
        className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-lg text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <svg
          className="w-20 h-20 mx-auto mb-4"
          fill="none"
          stroke={textYellow}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <h2 className="text-3xl font-bold mb-4" style={{ color: textYellow }}>
          Thank You for Your Feedback!
        </h2>
        <p className="text-gray-600 mb-6">
          Your insights are valuable to us and will help improve our services.
        </p>
        <motion.button
          className="px-6 py-3 rounded-lg font-bold"
          style={{ backgroundColor: textYellow, color: "#111827" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsSubmitted(false)}
        >
          Submit Another Feedback
        </motion.button>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-8">
        <motion.h2 
          className="text-3xl font-bold mb-2"
          style={{ color: textYellow }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Eevagga - Feedback Form
        </motion.h2>
        <motion.p 
          className="text-lg"
          style={{ color: textGray }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Your feedback helps us create a better experience for everyone
        </motion.p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <motion.div
          className="p-3 rounded-xl"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.4 }}
        >
          {/* Enhanced Dropdown */}
          <div className="mb-8">
            <label 
              className="block text-lg font-bold mb-3"
              style={{ color: textYellow }}
            >
              1. Event Type
            </label>
            <div className="relative">
              <select
                className={`w-full p-4 rounded-lg appearance-none pr-12 text-base
                  ${errors.eventType ? "border-red-500" : "border-gray-300"} 
                  bg-white text-gray-800 border-2 focus:outline-none 
                  focus:ring-2 focus:ring-yellow-400 transition-all`}
                {...register("eventType", { required: true })}
              >
                <option value="">Select event type</option>
                <option value="Wedding">Wedding</option>
                <option value="Birthday">Birthday</option>
                <option value="Baby Shower">Baby Shower</option>
                <option value="School/College Event">School/College Event</option>
                <option value="Corporate Event">Corporate Event</option>
                <option value="Loan/Insurance Service">Loan/Insurance Service</option>
                <option value="Other">Other</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4">
                <ArrowDropDownIcon 
                  className="w-6 h-6" 
                  style={{ color: textYellow }} 
                />
              </div>
            </div>
            {errors.eventType && (
              <p className="mt-2 text-red-500 text-sm">Please select an event type</p>
            )}
          </div>

          {/* How did you hear about Eevagga? */}
          <div className="mb-8">
            <label 
              className="block text-lg font-bold mb-3"
              style={{ color: textYellow }}
            >
              2. How did you hear about Eevagga?
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {["Online Ad", "Social Media", "Referral", "Search Engine", "Other"].map(
                (option) => (
                  <label
                    key={option}
                    className="flex items-center space-x-3 p-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <input
                      type="radio"
                      value={option}
                      className="form-radio text-yellow-400 border-2 border-gray-300"
                      style={{ width: "20px", height: "20px" }}
                      {...register("heardAbout", { required: true })}
                    />
                    <span className="text-gray-800">{option}</span>
                  </label>
                )
              )}
            </div>
            {errors.heardAbout && (
              <p className="mt-2 text-red-500 text-sm">Please select an option</p>
            )}
          </div>

          {/* Star Ratings */}
          <StarRating 
            name="responseTime" 
            label="3. How satisfied were you with the initial response time from our team?" 
            required={true}
            lowLabel="Very Slow"
            highLabel="Very Fast"
          />

          <StarRating 
            name="bookingProcess" 
            label="4. How easy and smooth was the booking process?" 
            required={true}
            lowLabel="Very Difficult"
            highLabel="Very Easy"
          />

          <StarRating 
            name="pricingClarity" 
            label="5. How would you rate the clarity and fairness of pricing and quotation?" 
            required={true}
            lowLabel="Very Poor"
            highLabel="Very Clear/Fair"
          />

          <StarRating 
            name="customerCare" 
            label="6. How satisfied were you with the communication and support from our customer care team during the process?" 
            required={true}
            lowLabel="Very Unsatisfied"
            highLabel="Very Satisfied"
          />

          <StarRating 
            name="eventExecution" 
            label="7. How satisfied were you with the execution of your event?" 
            required={true}
            lowLabel="Very Unsatisfied"
            highLabel="Very Satisfied"
          />

          {/* Recommendation */}
          <div className="mb-8">
            <label 
              className="block text-lg font-bold mb-3"
              style={{ color: textYellow }}
            >
              8. Would you recommend Eevagga to others?
            </label>
            <div className="flex flex-wrap gap-3">
              {["Yes", "No", "Maybe"].map((option) => (
                <label
                  key={option}
                  className="flex items-center space-x-3 p-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors flex-1 min-w-[120px]"
                >
                  <input
                    type="radio"
                    value={option}
                    className="form-radio text-yellow-400 border-2 border-gray-300"
                    style={{ width: "20px", height: "20px" }}
                    {...register("recommend", { required: true })}
                  />
                  <span className="text-gray-800">{option}</span>
                </label>
              ))}
            </div>
            {errors.recommend && (
              <p className="mt-2 text-red-500 text-sm">Please select an option</p>
            )}
          </div>

          {/* Suggestions */}
          <div className="mb-4">
            <label 
              className="block text-lg font-bold mb-3"
              style={{ color: textYellow }}
            >
              9. Any quick suggestions or comments? (Optional)
            </label>
            <textarea
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white text-gray-800"
              placeholder="Your suggestions..."
              rows="3"
              {...register("suggestions")}
            ></textarea>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            type="submit"
            className="w-full py-4 rounded-xl font-bold text-lg shadow-lg text-primary"
            style={{ backgroundColor: textYellow,}}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5" style={{ color: "#111827" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </div>
            ) : (
              "Submit Feedback"
            )}
          </motion.button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default FeedbackForm;
