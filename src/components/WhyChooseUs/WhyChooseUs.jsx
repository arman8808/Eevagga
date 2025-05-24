import { motion } from "framer-motion";
import whyChooseImage from "../../assets/whychooseus.webp"; // Replace with your image path

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
      number: "500+",
      title: "Successful Events",
      description: "Across various categories and scales",
    },
    {
      number: "98%",
      title: "Client Satisfaction",
      description: "Consistently high feedback ratings",
    },
    {
      number: "24/7",
      title: "Support Team",
      description: "Dedicated professional assistance",
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
            Why Choose Us For Your Events?
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
              With years of expertise in event management, we bring precision,
              creativity, and unmatched dedication to every celebration. Our
              team works tirelessly to transform your vision into unforgettable
              experiences.
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
                    <div className="text-[#6A1B9A] text-2xl font-bold min-w-[60px]">
                      {feature.number}
                    </div>
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
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#6A1B9A]/10">
              <img
                src={whyChooseImage}
                alt="Why Choose Us"
                className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#6A1B9A]/10 to-transparent" />
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
