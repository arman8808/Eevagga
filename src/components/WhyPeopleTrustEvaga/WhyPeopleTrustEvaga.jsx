import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const WhyPeopleTrustEvaga = () => {
  const trustItems = [
    {
      title: "End To End Service ",
      text: "From Start to Finish, we provide end-to-end service.",
    },
    {
      title: "Pricing You Can Trust",
      text: "Upfront, clear, and fair — no surprises, just honest deals.",
    },
    {
      title: "Your Personal Event Partner",
      text: "Expert guidance tailored to your unique celebration.",
    },
    {
      title: "Effortless Event Planning",
      text: "Smooth, simple, and stress-free from start to finish.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        mass: 0.5,
      },
    },
  };
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <LazyLoadImage
          src={
            process.env.REACT_APP_API_Aws_Image_BASE_URL +
            "gallery/1749378340906_WhyPeopleTrustEvaga.webp"
          }
          alt="Trust Background"
          className="w-full h-full object-cover"
          effect="blur"
          placeholderSrc={
            "data:image/jpeg;base64,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"
          } // Add low-res placeholder image
          wrapperClassName="lazy-load-background-wrapper"
          beforeLoad={() => ({
            style: {
              filter: "blur(20px)",
              scale: 1.1,
            },
          })}
          afterLoad={() => ({
            style: {
              filter: "blur(0)",
              transition: "filter 0.8s ease-out, scale 1.5s ease-out",
            },
          })}
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto">
        {/* Animated Title with Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl font-normal text-center text-white mb-6"
            initial={{ letterSpacing: "0.5em" }}
            animate={{ letterSpacing: "0.05em" }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Why People Trust Evaga?
          </motion.h2>
          <motion.div
            className="mx-auto h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"
            initial={{ width: 0 }}
            whileInView={{ width: "40%" }}
            transition={{ duration: 1.5, delay: 0.4 }}
          />
        </motion.div>

        {/* Cards Grid with Enhanced Interactions */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.5 },
            },
          }}
        >
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 cursor-pointer overflow-hidden"
              whileHover={{
                y: -15,
                scale: 1.03,
                boxShadow: "0 25px 50px -12px rgba(255, 255, 255, 0.15)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Animated Border Gradient */}
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{
                  opacity: 1,
                  background:
                    "linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                }}
                transition={{ duration: 0.4 }}
              />

              {/* Floating Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold text-white mb-4 relative">
                  <motion.span
                    className="absolute -left-2 h-full w-1 bg-white/40 rounded"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 0.6 }}
                  />
                  {item.title}
                </h3>
                <motion.p
                  className="text-white/85 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  {item.text}
                </motion.p>
              </motion.div>

              {/* Hover Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{
                  opacity: 0.3,
                  boxShadow: "0 0 40px 10px rgba(255,255,255,0.2)",
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Ambient Animation */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ backgroundPosition: "0% 0%" }}
        animate={{ backgroundPosition: "100% 100%" }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          background: `linear-gradient(
            45deg,
            rgba(255,255,255,0.01) 0%,
            rgba(255,255,255,0.03) 50%,
            rgba(255,255,255,0.01) 100%
          )`,
          backgroundSize: "200% 200%",
        }}
      />
    </section>
  );
};

export default WhyPeopleTrustEvaga;
