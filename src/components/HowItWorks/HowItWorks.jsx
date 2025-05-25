// import { motion } from "framer-motion";
// import howItWorksImage from "../../assets/HowItWorks.webp";

// function HowItWorks() {
//   const steps = [
//     {
//       number: "1",
//       title: "Choose Your Event",
//       description: "Select from our wide range of event categories"
//     },
//     {
//       number: "2",
//       title: "Customize Package",
//       description: "Tailor services to match your specific needs"
//     },
//     {
//       number: "3",
//       title: "Celebrate Stress-Free",
//       description: "Enjoy your perfect event with our expert management"
//     }
//   ];

//   return (
//      <motion.section
//       className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, margin: "-100px" }}
//     >
//       <div className="max-w-7xl mx-auto">
//         {/* Title Section */}
//         <motion.div
//           className="flex flex-col items-center mb-12 lg:mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ type: "spring", stiffness: 120 }}
//         >
//           <h2  className="text-primary text-3xl md:text-4xl font-normal text-center mb-4">
//             How It Works?
//              <p className="text-normal text-textGray leading-5 tracking-[.25em]">Book any service in just 3 easy steps</p>
//             <motion.div
//               className="h-1 w-24 bg-[#FFE500] mt-4 mx-auto"
//               initial={{ scaleX: 0 }}
//               whileInView={{ scaleX: 1 }}
//               transition={{ delay: 0.3, duration: 0.6 }}
//             />
//           </h2>

//         </motion.div>

//         <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
//           {/* Left Side - Steps */}
//           <motion.div
//             className="lg:w-1/2 relative"
//             initial="hidden"
//             whileInView="visible"
//           >
//             <div className="space-y-16 relative">
//               {steps.map((step, index) => (
//                 <motion.div
//                   key={index}
//                   className="flex items-start gap-6 relative group"
//                   initial={{ opacity: 0, x: -30 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ delay: index * 0.2 + 0.2 }}
//                   whileHover={{ y: -5 }}
//                 >
//                   {/* Animated Connector */}
//                   {index > 0 && (
//                     <motion.div
//                       className="absolute -top-14 left-6 h-14 w-[2px] bg-[#6A1B9A] origin-top"
//                       initial={{ scaleY: 0 }}
//                       whileInView={{ scaleY: 1 }}
//                       transition={{ delay: index * 0.2, duration: 0.6 }}
//                     />
//                   )}

//                   {/* Number Circle */}
//                   <motion.div
//                     className="relative z-10 flex-shrink-0"
//                     whileHover={{ scale: 1.1 }}
//                   >
//                     <div className="h-14 w-14 bg-[#FFE500] rounded-full flex items-center justify-center text-[#6A1B9A] font-bold text-2xl shadow-lg">
//                       {step.number}
//                     </div>
//                     <div className="absolute inset-0 rounded-full border-2 border-[#6A1B9A] opacity-0 group-hover:opacity-100 transition-opacity" />
//                   </motion.div>

//                   {/* Content */}
//                   <motion.div
//                     className="flex-1 pt-2 space-y-3"
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     transition={{ delay: index * 0.2 + 0.3 }}
//                   >
//                     <h3 className="text-[#6A1B9A] text-2xl font-semibold">
//                       {step.title}
//                     </h3>
//                     <p className="text-[#757575] text-lg leading-relaxed">
//                       {step.description}
//                     </p>
//                   </motion.div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Right Side - Image */}
//           <motion.div
//             className="lg:w-1/2 relative"
//             initial={{ opacity: 0, scale: 0.95, rotateY: 15 }}
//             whileInView={{
//               opacity: 1,
//               scale: 1,
//               rotateY: 0,
//               transition: {
//                 type: "spring",
//                 stiffness: 150,
//                 damping: 20,
//                 delay: 0.4
//               }
//             }}
//           >
//             <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#6A1B9A]/10 transform perspective-[1000px]">
//               <img
//                 src={howItWorksImage}
//                 alt="How It Works"
//                 className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
//                 loading="lazy"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#6A1B9A]/10 to-transparent" />

//               {/* Floating Animation Elements */}
//               <motion.div
//                 className="absolute top-8 left-8 h-8 w-8 bg-[#FFE500] rounded-full"
//                 initial={{ y: 20, opacity: 0 }}
//                 whileInView={{ y: 0, opacity: 0.2 }}
//                 transition={{
//                   y: {
//                     duration: 2,
//                     repeat: Infinity,
//                     repeatType: 'reverse',
//                     ease: "easeInOut"
//                   }
//                 }}
//               />
//               <motion.div
//                 className="absolute bottom-8 right-8 h-12 w-12 bg-[#6A1B9A] rounded-full"
//                 initial={{ y: -20, opacity: 0 }}
//                 whileInView={{ y: 0, opacity: 0.1 }}
//                 transition={{
//                   y: {
//                     duration: 2,
//                     repeat: Infinity,
//                     repeatType: 'reverse',
//                     ease: "easeInOut",
//                     delay: 0.5
//                   }
//                 }}
//               />
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </motion.section>

//   );
// }

// export default HowItWorks;

import { motion } from "framer-motion";
import { FiSearch, FiCheckCircle, FiSettings } from "react-icons/fi";

const HowItWorks = () => {
  const steps = [
    {
      icon: FiSearch,
      title: "Explore & Choose",
      text: "Browse services by category - weddings, parties, corporate & more",
    },
    {
      icon: FiCheckCircle,
      title: "Instant Booking",
      text: "Secure booking with verified vendors & transparent pricing",
    },
    {
      icon: FiSettings,
      title: "We Handle Everything",
      text: "Seamless coordination from start to finish",
    },
  ];

  return (
    <section 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white"
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="text-center mb-16"
        >
          <h2 
            id="how-it-works-heading"
           className="text-primary text-4xl md:text-5xl font-normal text-center"
          >
            How It Works
          </h2>
          <p className="text-slate-600 text-lg md:text-xl text-textGray max-w-2xl mx-auto">
            Three simple steps to your perfect event
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: index * 0.2,
                type: 'spring', 
                stiffness: 80 
              }}
              className="group relative h-full"
              aria-labelledby={`step-${index}-title`}
            >
              {/* Card Container */}
              <div className="h-full p-8 rounded-3xl bg-white border-2 border-slate-100 hover:border-transparent transition-all relative overflow-hidden shadow-sm hover:shadow-xl">
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0.95 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                />

                {/* Floating Number */}
                <motion.div 
                  className="absolute top-6 right-6 text-7xl font-bold text-slate-100/60 z-0"
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  aria-hidden="true"
                >
                  0{index + 1}
                </motion.div>

                {/* Icon Container */}
                <motion.div
                  className="w-16 h-16 rounded-2xl mb-8 relative bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg"
                  whileHover={{
                    scale: 1.05,
                    rotate: [0, -5, 5, 0],
                    transition: { 
                      duration: 0.6,
                      rotate: { type: 'spring', stiffness: 300 }
                    }
                  }}
                >
                  <step.icon className="w-8 h-8 text-white transition-transform group-hover:scale-110" />
                </motion.div>

                {/* Content */}
                <div className="relative space-y-4">
                  <h3 
                    id={`step-${index}-title`}
                    className="text-2xl font-semibold text-primary transition-colors group-hover:text-blue-800"
                  >
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                    {step.text}
                  </p>
                </div>

                {/* Hover Border Animation */}
                <motion.div
                  className="absolute inset-0 rounded-3xl border-2 border-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{
                    opacity: 1,
                    borderColor: 'rgba(99, 102, 241, 0.2)',
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Subtle Glow Effect */}
                <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_30px_rgba(99,102,241,0.05)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
