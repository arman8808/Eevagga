import { motion } from "framer-motion";
import decor from "../../assets/decor.webp";
import wedding from "../../assets/wedding.webp";
import CategoryNewCard from "../Cards/categoryNewCard";

function HowItWorks() {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  const data = [
    {
      image: wedding,
      title: "Weddings",
      text: "Stress-free planning for your big day",
    },
    {
      image: decor,
      title: "Birthdays",
      text: "Memorable celebrations for all ages",
    },
    {
      image: wedding,
      title: "Corporate Events",
      text: "Professional execution, on time & on brand",
    },
    {
      image: decor,
      title: "Private Parties",
      text: "Intimate gatherings, perfectly tailored",
    },
    {
      image: wedding,
      title: "Religious Events",
      text: "Ceremonies managed with care and respect",
    },
    {
      image: decor,
      title: "College & School",
      text: "Fests, farewells & more - fun made easy",
    },
  ];

  return (
    <motion.div
      className="flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="flex flex-col items-center justify-center max-w-6xl w-full mb-12">
        {/* Title */}
        <motion.h2
          className="text-primary text-3xl md:text-4xl font-bold text-center mb-4"
          variants={itemVariants}
          transition={{ type: "spring", stiffness: 100 }}
        >
          How it Works?
        </motion.h2>

        {/* Subtitle */}
        <motion.h5
          className="text-textGray text-2xl md:text-3xl font-medium text-center mb-2"
          variants={itemVariants}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
        >
          Choose Your Celebration
        </motion.h5>

        {/* Description */}
        <motion.p
          className="text-textGray text-base md:text-lg font-normal text-center max-w-2xl mx-auto"
          variants={itemVariants}
          transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
        >
          Pick an event type and find the perfect package in seconds.
        </motion.p>
      </div>

      {/* Cards Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl"
        variants={containerVariants}
      >
        {data.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            transition={{ delay: 0.1 * index }}
          >
            <CategoryNewCard
              imageUrl={item.image}
              title={item.title}
              text={item.text}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default HowItWorks;