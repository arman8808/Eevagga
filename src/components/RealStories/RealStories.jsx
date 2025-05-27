import { motion } from "framer-motion";
import story1 from "../../assets/decor.webp";
import story2 from "../../assets/img4.webp";
import story3 from "../../assets/img7.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
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
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#fffbf0]">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 space-y-4"
        >
          <h2 className="text-primary text-4xl font-normal text-center">
            Real Stories, Unforgettable Memories
          </h2>
          <motion.p
            className="text-gray-600 md:text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            See how Evaga brought celebrations to life for real people just like
            you.
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
            <div
              key={index}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <LazyLoadImage
                  src={story.image}
                  alt={story.title}
                  decoding="async"
                  className="w-full h-full object-cover"
                  wrapperClassName="group transition-transform duration-300" // Moved group and transition to wrapper
                  effect="blur"
                  placeholderSrc={story.placeholder} // Add low-res placeholder to your data
                  beforeLoad={() => ({ style: { filter: "blur(20px)" } })}
                  afterLoad={() => ({ style: { filter: "blur(0)" } })}
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                  visibleByDefault={false}
                  threshold={200} // Load 200px before entering viewport
                  style={{
                    transition: "transform 0.3s ease-in-out",
                  }}
                  // Combine lazy-load transition with hover effect
                  onLoad={() => {
                    const img = document.querySelector(
                      `img[alt="${story.title}"]`
                    );
                    img.classList.add("group-hover:scale-105");
                  }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:opacity-80 transition-opacity duration-300" />
              </div>

              {/* Text Content */}
              <div className="p-6 space-y-4">
                {/* Title with Underline */}
                <h3 className="text-xl font-semibold text-gray-900 relative text-primary">
                  {story.title}
                  <div className="absolute bottom-0 h-[2px] bg-gradient-to-r from-primary to-secondary w-full" />
                </h3>

                {/* Description */}
                <p className="text-gray-600">{story.text}</p>
              </div>

              {/* Border Glow */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-indigo-200 group-hover:shadow-glow transition-all duration-300" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RealStories;
