import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const RealStories = () => {
  const stories = [
    {
      image: "gallery/1749379369751_janvi.jpeg",
      preview:
        "data:image/jpeg;base64,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",
      title: "Jhanvi s First Birthday Celebration",
      text: "I planned my daughter’s 1st birthday with Eevagga, and it was nothing short of magical. From the décor to the entertainment, everything was handled so smoothly — I actually got to enjoy the party instead of running around!",
      name: "— Neha S.",
    },
    {
      image: "gallery/1749379432004_testimonal.jpg",
      preview:
        "data:image/jpeg;base64,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",
      title: "Pavan & Ananya’s Wedding Celebration",
      text: "We were drowning in wedding decisions until we found Eevagga. One platform, endless options, and a team that truly understood what we wanted. They brought our dream wedding to life with such grace and professionalism.",
      name: "— Pavan & Ananya.",
    },
    {
      image: "gallery/1749379471921_house.jpeg",
      preview:
        "data:image/jpeg;base64,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",
      title: "Vinay’s Housewarming Celebration",
      text: "Our housewarming felt so personal and well-organized, thanks to Eevagga. The decor was elegant, catering was spot-on, and the guests couldn’t stop complimenting everything. It made our new beginning feel extra special.",
      name: "—  Vinay K.",
    },
    {
      image: "gallery/1749379502610_corpareate.jpg",
      preview:
        "data:image/jpeg;base64,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",
      title: "Corporate Offsite Event",
      text: " We booked Eevagga for our annual corporate offsite and were impressed by how streamlined the entire process was. Vendor coordination, tech setup, even branding — all seamless. We’re already planning the next one with them. ",
      name: "— AnjaliD HR Head.",
    },
  ];

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
                    src={
                      process.env.REACT_APP_API_Aws_Image_BASE_URL + story.image
                    }
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
