import { motion } from "framer-motion";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const features = [
    {
      title: "Customer-First",
      description: "Your vision leads — we tailor every detail to reflect you.",
    },
    {
      title: "Total Flexibility",
      description:
        "Book full packages or single services — it's your event, your way.",
    },
    {
      title: "Truly Bespoke",
      description:
        "No templates. Every experience is crafted with care and cultural nuance.",
    },
    {
      title: "Smart & Seamless",
      description:
        "Plan, book, and manage effortlessly with our intuitive tech.",
    },
    {
      title: "Always-On Support",
      description: "From start to finish, we’ve got your back — 24/7.",
    },
    {
      title: "Modern Meets Meaningful",
      description:
        "We blend innovation with tradition for events that truly resonate.",
    },
  ];

  return (
    <motion.section
      className="py-16 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <motion.div
          className="flex flex-col items-center mb-12 lg:mb-16"
          variants={itemVariants}
        >
          <motion.h2
            className="text-primary text-3xl md:text-4xl font-normal text-center mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            Why Choose Eevagga?
            <motion.div
              className="h-1 w-24 bg-[#FFE500] mt-4 mx-auto"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
          </motion.h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-20">
          {/* Left Text Content */}
          <motion.div
            className="lg:w-1/2 space-y-10"
            variants={containerVariants}
          >
            <motion.p
              className="text-[#757575] text-lg lg:text-xl leading-relaxed lg:leading-8"
              variants={itemVariants}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              With a passion for unforgettable experiences, Eevagga is built to
              simplify and elevate every step of event planning. Our commitment
              is rooted in innovation, reliability, and a deep understanding of
              what makes celebrations truly special.
            </motion.p>

            <div className="space-y-8">
              <motion.div
                variants={itemVariants}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                <motion.h3
                  className="text-[#6A1B9A] text-2xl md:text-3xl font-normal mb-4"
                  initial={{ y: 20 }}
                  whileInView={{ y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Our Commitment
                  <motion.div
                    className="h-[3px] w-16 bg-[#6A1B9A] mt-3"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.5 }}
                  />
                </motion.h3>
              </motion.div>

              <div className="space-y-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div>
                      <h4 className="text-[#6A1B9A] font-semibold text-lg">
                        {feature.title}
                      </h4>
                      <p className="text-[#757575] text-sm mt-1">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.95, rotateY: 15 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              rotateY: 0,
              transition: {
                type: "spring",
                stiffness: 150,
                damping: 20,
                delay: 0.4,
              },
            }}
          >
            <div className="relative rounded-2xl overflow-hidden ">
              <LazyLoadImage
                src={
                  process.env.REACT_APP_API_Aws_Image_BASE_URL +
                  "gallery/1749380373717_whychooseuspurchased.webp"
                }
                alt="Why Choose Us"
                className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                effect="blur"
                placeholderSrc="data:image/jpeg;base64,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"
                wrapperClassName="lazy-image-wrapper"
                beforeLoad={() => ({
                  style: {
                    filter: "blur(20px)",
                    transform: "scale(1)",
                  },
                })}
                afterLoad={() => ({
                  style: {
                    filter: "blur(0)",
                    transition: "filter 0.5s ease-out, transform 0.7s ease",
                  },
                })}
                threshold={300}
              />
            </div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-8 -right-8 h-24 w-24 bg-[#FFE500] rounded-full opacity-20"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
            />
            <motion.div
              className="absolute -bottom-8 -left-8 h-32 w-32 bg-[#6A1B9A] rounded-full opacity-10"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 1.0, type: "spring" }}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default WhyChooseUs;
