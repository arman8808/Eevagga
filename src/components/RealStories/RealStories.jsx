import { motion } from "framer-motion";
import story1 from "../../assets/janvi.jpeg";
import story2 from "../../assets/testimonal.jpg";
import story3 from "../../assets/house.jpeg";
import story4 from "../../assets/corpareate.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const RealStories = () => {
  const stories = [
    {
      image: story1,
      title: "Jhanvi s First Birthday Celebration",
      text: "I planned my daughter’s 1st birthday with Eevagga, and it was nothing short of magical. From the décor to the entertainment, everything was handled so smoothly — I actually got to enjoy the party instead of running around!",
      name: "— Neha S.",
    },
    {
      image: story2,
      title: "Pavan & Ananya’s Wedding Celebration",
      text: "We were drowning in wedding decisions until we found Eevagga. One platform, endless options, and a team that truly understood what we wanted. They brought our dream wedding to life with such grace and professionalism.",
      name: "— Pavan & Ananya.",
    },
    {
      image: story3,
      title: "Vinay’s Housewarming Celebration",
      text: "Our housewarming felt so personal and well-organized, thanks to Eevagga. The decor was elegant, catering was spot-on, and the guests couldn’t stop complimenting everything. It made our new beginning feel extra special.",
      name: "—  Vinay K.",
    },
    {
      image: story4,
      title: "Corporate Offsite Event",
      text: " We booked Eevagga for our annual corporate offsite and were impressed by how streamlined the entire process was. Vendor coordination, tech setup, even branding — all seamless. We’re already planning the next one with them. ",
      name: "— AnjaliD HR Head.",
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
  const responsive = {
    0: {
      items: 1,
    },
    600: {
      items: 2,
      itemsFit: "contain",
    },
    750: {
      items: 3,
      itemsFit: "contain",
    },
    1024: {
      items: 3,
      itemsFit: "contain",
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
          <AliceCarousel
            mouseTracking
            responsive={responsive}
            disableButtonsControls
            autoPlay
            infinite
            autoPlayInterval={3000}
            paddingRight={0}
            paddingLeft={0}
          >
            {stories.map((story, index) => (
              <div
                key={index}
                className="group relative mx-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden cursor-pointer"
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
                      aspectRatio: "16 / 12",
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
                  <p className="text-primary">{story.name}</p>
                </div>

                {/* Border Glow */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-indigo-200 group-hover:shadow-glow transition-all duration-300" />
              </div>
            ))}
          </AliceCarousel>
        </motion.div>
      </div>
    </section>
  );
};

export default RealStories;
