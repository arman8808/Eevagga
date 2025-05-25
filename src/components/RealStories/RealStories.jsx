import { motion } from "framer-motion";
import story1 from "../../assets/decor.webp";
import story2 from "../../assets/img4.webp";
import story3 from "../../assets/img7.webp";

const RealStories = () => {
  const stories = [
    {
      image: story1,
      title: "Sarah & John's Fairytale Wedding",
      text: "A magical winter wonderland celebration in the mountains",
    },
    {
      image: story2,
      title: "TechCorp Annual Conference",
      text: "2000+ attendees, flawless execution",
    },
    {
      image: story3,
      title: "Riya's Sweet 16 Celebration",
      text: "A night of glitter, music, and unforgettable memories",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
      },
    },
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 space-y-4"
        >
          <h2 className="text-primary text-4xl md:text-5xl font-normal text-center">
            Real Stories, Unforgettable Memories
          </h2>
          <motion.p
            className="text-gray-600 md:text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Relive moments that touched hearts and created lifelong memories
          </motion.p>
        </motion.div>

        {/* Stories Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {stories.map((story, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden cursor-pointer"
              whileHover={{
                y: -8,
                rotate: Math.random() * 2 - 1, // Subtle random tilt (-1° to 1°)
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Image Container with Parallax Effect */}
              <motion.div
                className="relative h-64 overflow-hidden"
                initial={{ scale: 1, y: 0 }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  rotate: Math.random() * 1 - 0.5, // Counter-rotate image slightly
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover"
                />

                {/* Gradient Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
                  initial={{ opacity: 0.5 }}
                  whileHover={{ opacity: 0.8 }}
                />
              </motion.div>

              {/* Text Content with Staggered Animation */}
              <motion.div
                className="p-6 space-y-4 relative"
                initial="hidden"
                whileInView="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1 },
                  },
                }}
              >
                {/* Animated Title with Dynamic Underline */}
                <motion.h3
                  className="text-xl font-semibold text-gray-900 relative"
                  variants={{
                    hidden: { x: -20, opacity: 0 },
                    visible: {
                      x: 0,
                      opacity: 1,
                      transition: { type: "spring", bounce: 0.25 },
                    },
                  }}
                >
                  {story.title}
                  <motion.div
                    className="absolute bottom-0 h-[2px] bg-gradient-to-r from-primary to-secondary"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  />
                </motion.h3>

                {/* Floating Text Animation */}
                <motion.p
                  className="text-gray-600 relative"
                  variants={{
                    hidden: { y: 10, opacity: 0 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        type: "spring",
                        stiffness: 150,
                        delay: 0.2,
                      },
                    },
                  }}
                >
                  {story.text}
                </motion.p>

                {/* Hidden Hover Icon */}
                <motion.div
                  className="absolute right-4 bottom-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ scale: 0 }}
                  whileHover={{
                    scale: 1,
                    rotate: 360,
                    transition: { type: "spring" },
                  }}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </motion.div>
              </motion.div>

              {/* Interactive Border Glow */}
              <motion.div
                className="absolute inset-0 rounded-xl pointer-events-none border-2 border-transparent"
                initial={{ opacity: 0 }}
                whileHover={{
                  opacity: 1,
                  borderColor: "rgba(99, 102, 241, 0.2)",
                  boxShadow: "0 0 20px rgba(99, 102, 241, 0.1)",
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RealStories;
