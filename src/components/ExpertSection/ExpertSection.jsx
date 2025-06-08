import { motion } from "framer-motion";
import expertImage from "../../assets/expertpurchased.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ExpertSection = () => {
  const handleBooking = () => {
    // Scroll to booking section
    const section = document.getElementById("booking-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="relative py-24 pt-4 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-primary text-4xl font-normal text-center"
        >
          Professional guidance for a seamless, stress-free event
        </motion.h2>

        {/* Image */}
        <motion.div
          className="w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* <img
            src={expertImage}
            alt="Expert consultation"
            className="w-full h-full object-cover"
          /> */}
          <LazyLoadImage
            src={
              process.env.REACT_APP_API_Aws_Image_BASE_URL +
              "gallery/1749379563749_expertpurchased.jpg"
            }
            alt={"expert"}
            decoding="async"
            className="w-full h-full object-cover"
            wrapperClassName="group transition-transform duration-300" // Moved group and transition to wrapper
            effect="blur"
            placeholderSrc={
              "data:image/jpeg;base64,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"
            } // Add low-res placeholder to your data
            beforeLoad={() => ({ style: { filter: "blur(20px)" } })}
            afterLoad={() => ({ style: { filter: "blur(0)" } })}
            onError={(e) => {
              e.target.style.display = "none";
            }}
            visibleByDefault={false}
            threshold={200} // Load 200px before entering viewport
            style={{
              transition: "transform 0.3s ease-in-out",
              aspectRatio: "16 / 9",
            }}
            // Combine lazy-load transition with hover effect
            onLoad={() => {
              const img = document.querySelector(`img[alt="${"expert"}"]`);
              img.classList.add("group-hover:scale-105");
            }}
          />
        </motion.div>

        {/* Button */}
        <motion.button
          onClick={handleBooking}
          className="px-12 py-4 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-primary-700 transition-colors bg-primary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Speak to an advisor
        </motion.button>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Animated background dots */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0.5, 1, 0.5],
              transition: {
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              },
            }}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default ExpertSection;
