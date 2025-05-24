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
      category: "Entertainment Services",
      items: [
        {
          image: wedding,
          title: "Weddings",
          text: "Stress-free planning for your big day",
          link: "/search?q=&category=all",
        },
        {
          image: decor,
          title: "Birthdays",
          text: "Memorable celebrations for all ages",
          link: "/search?q=&category=all",
        },
        {
          image: wedding,
          title: "Corporate Events",
          text: "Professional execution, on time & on brand",
          link: "/search?q=&category=all",
        },
        {
          image: decor,
          title: "Private Parties",
          text: "Intimate gatherings, perfectly tailored",
          link: "/search?q=&category=all",
        },
        {
          image: wedding,
          title: "Religious Events",
          text: "Ceremonies managed with care and respect",
          link: "/search?q=&category=all",
        },
        {
          image: decor,
          title: "College & School",
          text: "Fests, farewells & more - fun made easy",
          link: "/search?q=&category=all",
        },
      ],
    },
    {
      category: "Birthday Parties",
      items: [
        {
          image: wedding,
          title: "Weddings",
          text: "Stress-free planning for your big day",
          link: "/search?q=&category=all",
        },
        {
          image: decor,
          title: "Birthdays",
          text: "Memorable celebrations for all ages",
          link: "/search?q=&category=all",
        },
        {
          image: wedding,
          title: "Corporate Events",
          text: "Professional execution, on time & on brand",
          link: "/search?q=&category=all",
        },
        {
          image: decor,
          title: "Private Parties",
          text: "Intimate gatherings, perfectly tailored",
          link: "/search?q=&category=all",
        },
        {
          image: wedding,
          title: "Religious Events",
          text: "Ceremonies managed with care and respect",
          link: "/search?q=&category=all",
        },
        {
          image: decor,
          title: "College & School",
          text: "Fests, farewells & more - fun made easy",
          link: "/search?q=&category=all",
        },
      ],
    },
    {
      category: "Wedding Aenue and Decor",
      items: [
        {
          image: wedding,
          title: "Weddings",
          text: "Stress-free planning for your big day",
          link: "/search?q=&category=all",
        },
        {
          image: decor,
          title: "Birthdays",
          text: "Memorable celebrations for all ages",
          link: "/search?q=&category=all",
        },
        {
          image: wedding,
          title: "Corporate Events",
          text: "Professional execution, on time & on brand",
          link: "/search?q=&category=all",
        },
        {
          image: decor,
          title: "Private Parties",
          text: "Intimate gatherings, perfectly tailored",
          link: "/search?q=&category=all",
        },
        {
          image: wedding,
          title: "Religious Events",
          text: "Ceremonies managed with care and respect",
          link: "/search?q=&category=all",
        },
        {
          image: decor,
          title: "College & School",
          text: "Fests, farewells & more - fun made easy",
          link: "/search?q=&category=all",
        },
      ],
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
      <div className="flex flex-col items-center justify-center max-w-6xl w-full mb-6">
        {/* Title */}
        <motion.h2
          className="text-primary text-3xl md:text-4xl font-normal text-center mb-4"
          variants={itemVariants}
          transition={{ type: "spring", stiffness: 100 }}
        >
          We Handle It All for You How it Works?
        </motion.h2>
      </div>

      {/* Cards Grid */}
      <motion.div
        className="flex flex-col items-center  px-4 sm:px-6 lg:px-8 gap-16 w-full"
        variants={containerVariants}
      >
        {data.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            className="w-full max-w-7xl"
            variants={containerVariants}
          >
            {/* Category Heading */}
            <motion.h3
              className="text-textYellow text-center   text-base md:text-base leading-6 font-bold mb-8 tracking-[0.25rem]"
              variants={itemVariants}
            >
              {category.category}
            </motion.h3>

            {/* Cards Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 w-full"
              variants={containerVariants}
            >
              {category.items.map((item, itemIndex) => (
                <motion.div
                  key={itemIndex}
                  variants={cardVariants}
                  transition={{ delay: 0.1 * itemIndex }}
                  className="col-span-1"
                >
                  <CategoryNewCard
                    imageUrl={item.image}
                    title={item.title}
                    text={item.text}
                    link={item.link}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default HowItWorks;
