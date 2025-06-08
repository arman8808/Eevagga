// import React from "react";
// import { motion } from "framer-motion";
// function AboutEvaga() {
//   const containerVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut",
//         when: "beforeChildren",
//         staggerChildren: 0.3,
//       },
//     },
//   };

//   const childVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//   };
//   return (
//     <motion.div
//       className="lg:max-w-[70%] mx-auto p-6 min-h-screen"
//       initial="hidden"
//       animate="visible"
//       variants={containerVariants}
//     >
//       <motion.h1
//         className="text-primary lg:text-3xl text-2xl font-semibold"
//         variants={childVariants}
//       >
//         About Eevagga
//       </motion.h1>

//       <motion.p
//         className="mt-6 text-textGray text-justify"
//         variants={childVariants}
//       >
//         In a world where celebrations define our most cherished moments, event
//         planning remains <b>complex, fragmented, and overwhelming</b>. Eevagga  was
//         born out of a bold vision—to <b>revolutionize the event industry</b> by
//         creating India's first comprehensive, tech-driven event marketplace.
//         <br />
//         <br />
//         We bring <b>seamless access to top-tier vendors</b>, from{" "}
//         <b>
//           stunning venues and world-class caterers to celebrated photographers,
//           entertainers, and décor artists
//         </b>
//         . With a <b>digital-first, AI-powered approach</b>, Eevagga {" "}
//         <b>
//           removes middlemen, ensures price transparency, and simplifies the
//           event planning journey
//         </b>
//         —all in just a few clicks.
//         <br />
//         <br />
//         For vendors, we provide a{" "}
//         <b>powerful platform to scale their business</b>, increase visibility,
//         and secure bookings without unnecessary commissions.
//         <br />
//         <br />
//         Whether it's an{" "}
//         <b>
//           intimate wedding, a grand corporate gala, or an electrifying music
//           festival or any personal events like birthdays, baby showers, etc.
//           Eevagga  empowers people to dream big and execute flawlessly
//         </b>
//         . We’re not just building a marketplace; we’re{" "}
//         <b>shaping the future of events</b> in India.
//         <br />
//         <br />
//         <b>Welcome to Eevagga—where every event is extraordinary.</b>
//       </motion.p>
//     </motion.div>
//   );
// }

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const AboutUs = () => {
  const sections = [
    {
      type: "image",
      src: "gallery/1749379936058_aboutus1.webp",
      preview:
        "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wgARCABDAGQDASIAAhEBAxEB/8QAGwAAAwEBAQEBAAAAAAAAAAAABAUGAAMCBwH/xAAaAQACAwEBAAAAAAAAAAAAAAACAwAEBQEG/9oADAMBAAIQAxAAAAGfYe1+Z6O3Z/P661mF9v3lo4xE1UwGbqztdOW9fRHFETAyuwuflAmQ7QbdQNxMYVB7S9SpkyBmVd82YDDtWQnbud647BYayE0Bl3XbeAGyl8D1QMSRVsTH0lhqtpBHkbKUKKcLlkEetO7rdq6NqZUHT/Qfnqk/ROIDFtRc2VHxnSTqI4+IMtxF3YbJ0/1zstH0YXa3mC7ZMWnbR3mK2KSG2eP/xAAnEAACAgAEBgIDAQAAAAAAAAACAwEEAAUREhMUIiMxMhAhJDM0Ff/aAAgBAQABBQJwSDq/vp29I0124WuXY4UYzXQVhGs1Snl4MtSPZFI9ybUbkBqxa0upLy+yL63nG2RnwOaHLLEB0imAWb4SOZ9QZTpySGiQhQQWKle4iTTYQQt2pF5Hg2whUAxmMrXveWki+8oGXAXw8pL8OGmEruHAjaZwmXiEGta9hKevD3cwbiI8VFQqMNV1ZzG1eV/yEvZJB00/XNNvMLZAr/1oCvS6cUanCIJ7k4LGej2qBaVwLfJTqaRInX65MbFfouLndl6kqrPMIQr3jxOM+/npTHAH9ap0ONebqwvdc4qlwYtGksrFa1qMq9h+M9L8WqyBV94R9ScKMsjWhVizX3QKGoZkhbq12NMLnAfGdz2lz9TPUHu+OjL5mLK/2sAeN6Wr3kfIeMZvOuB8f//EACQRAAICAgEDBAMAAAAAAAAAAAABAgMREiIEIVEQEzEyM0FC/9oACAEDAQE/Aanxwdat68+DB08MvBOz2msjnhOSJd2KTI1PGPJGuFa7lEVHkXT3lkevkZUlqJ8yzWfGRb1Gz0iSIvuZIP8ARblZZCexprbgkIyV/Jd9z+iP5CQvT//EACARAAIBBAMAAwAAAAAAAAAAAAABAhESITEDEEEEEzL/2gAIAQIBAT8B/R8dWSLjkyNXChV0ZoscT7ET5W2SyRVBNjeR7KUZxyoxRzVsQiSyPQmtD47cFqpVEenEnono8PGRPev/xAAvEAACAQMDAQUHBQEAAAAAAAABAgADERIhMUEiECAjUXEEEzJCYZGhUnKBsdHx/9oACAEBAAY/AuNZuRF/UIOzomoBtCb7QmI7TQQ+8HSNzMl2JMy5WMqnU8xq9TKoL/CD+YGAsezpJHYUGy6mJTHxNAkIFTBr2MRmZif7izFtQZ4dRkP3ExrFK1C2Frx2oUyFV72HImfPlNEtKpLk47gnae9a5L9RhqHZdpY7y1X2dhfpY2lN6IbFhu0XbeabCcxbBj6SnrrbWKENltuZiXU2hpHYHr/yLRonVja0wHEsZ5384v2g9Y6n5Yo84FJC2aI9PR9bxTYFtzKjBfE2EyxL1Gj1Htlbjj6dwH6wRst2MAXiBssbcGe8Q7rp9Io1tsYq23H5i5U1V7azoGp7w8zAW1i+JgIPZ82qO2ty17Rt1t5RifhBP8CU6l7XEC8DuESxgtLmeLteHAkuRKmFszqLw3G4OQjU0c3VtPTu+vYIYf3CUrc2g9I2nyGLjp/3utfs/8QAJRAAAgICAQMEAwEAAAAAAAAAAREAITFBUWFxsYGRocHR4fDx/9oACAEBAAE/ITMkbAQE9QyAIqKpY1vtg1C6qxC3FRoUQyzAFgxRzOjR3AGxDxIZHPWYWLx/kwj9Jgjkvh2cHV2SoIFBkRX7SyA9/wC3GIAsjjpCAMsjHSYPudtbIbYHmEMFWpfFQgUT8fMsKavyjGjBhsMBIiDrDSMDUl1NeVFrqBUm1G5BowQT6d5UMJpY9ZzBCxM2nGoWFeBoewheNDczFA0gleZGvQ7luSnZlfUEXELahtlB4IEw03IEO/4EvUIBpCACah1gV7YC89YArBtgMgY93iACBWPrbnD8nyYRRAxLDQ0gFFZV4hcOUBayHz/sUB6PSDQTcE81FgAQEfP7goiA8NrgwX/KU0eZn0KOpmZfbwIGW4cDpKvrzH6MXnsx7Yuk+sMGM4d5mpHoP9UWkcXFP75himLivmj5iKwrfshfM8NlzClIcJwW8NmDcjDB/veKHyYPcH9wdgKPC9zRT943H+wVzBDMhirJ8fEwi0ef48QpwIb77+Y2Ewn4/cFttwgRCACxAcuvMdgC/oQgNwFqXMmfiZf5LbUbwUMnUEMBA4rr8QMERxAkhABKyAO0Gg2rcUw5QGHrcAw2EXJAN8zA0vqAarHgMaJZJYxzLary9oCgokaHVCJEnMxTLCS/WGNjVCGY/9oADAMBAAIAAwAAABBg/Pit/OdDRJYD3lt9XIEHJF3WN3B6D1+EAD//xAAiEQEAAgIBBAIDAAAAAAAAAAABABEhMUEQYXHwgZGxwfH/2gAIAQMBAT8QAY2Sz5K67ML4qyUPAgB5Zfe0USJiKxY5xYxBCbGfuaZFWr/Etf56LSoLHjWILZxHtsTBKDXvxLCN7fmOQ0a8w1UQDGKq9ajc+M7z9QSVuKd8dO/Q8vP6m3xLrGOxfXJ//8QAIREAAwABAwUBAQAAAAAAAAAAAAERITFBYVFxgcHwELH/2gAIAQIBAT8QWGew7Ho1KRNYx7u7IXPBDY0K4Irqyijr26FNtjyM0nUgg85J5JMhHCYqUh+J7iIQ6wetiVmUOlTKU2r49kj5Y+7EI5zRxaoQ2aH25/cia0rlz6/K0DP/xAAjEAEBAAICAgIDAQEBAAAAAAABEQAhMUFRYXGBkaGx0cHh/9oACAEBAAE/EHUFEmCVTzefnBTbd3UXx2bPxhDVMkQ6jWcR/GLhSbRt95zCvCxJIoTA2kQjnfTyYGASo7nUruNzWsEB9G3ErgltsSW9vL8+80QgTk12JFdfXfjHTYIgjraw9/zCDqWj6Od8TBvuR47P5+Mrazu05uuNh2Y1lIdQtJDiWLjZzRNVw13xeDnJtBwNQvNLlsBjzW7594y52MeNfP8AuSGMTOqr+B/WOUoR035zUA4UFi2ja/a4hZgBCA7hg9mt7yY3IczoxFQEdiZWhDHQSfJ83NZ3SAOSwWVG7feJvPMvEDvZo+cqXAgW+weRZ7zXl1aYllsX4/GDiVXS0BVjTSvOpxgxPIqGL8RT7nWBYoW9O/1/cSnEbdZL8yZIUWFC8+OTrI4aUVJ5vFGMTENp4h5wjikKR17w8rBJsyEA2o7WhnjAXFnCSN78YSgh469LXxZqdYHIZBa6mg79XLzDVhOh1eV629ZDSBLXZ4EN+vPOc7yhEe5+94LoxpOTeJrEOnz5OHWLZAS2AIn6MiGia35zfYt6dWmDObcIgeS/f6xRiFEt8bPtykVAECAl34J9GX6oAaVaMQ5+MsGIVBDk612EwBCplw8zvx56lxELdsfc9E5e/rCpZHvxgFCD3/uHd0st137wErTDHiEwFYjbTOXGGAFexf64iQXLe3/n6x6GDc6FTxs+WuMDBD4aPYHHY+6xquIVxtas37MHJz0sUQhtxxNe85ygpSN7dy9cZzylRFe/0OUkZ95cK3POCkeWGtuLKBO+SmZJlC5DxgbYUkI9/wBBiGo0pXapt46784gz40NIScLs55y5xcdKanA8SFxakAXkHGs3TI7ypgwgqhiHNCP2xEyaN06+sM9YLKRb70wCBmy8zKEEXpxmQL+8X7CP0ctCbRveCI1Gx7kT945ksEyzlPP7xiScFgLonGy7E1jmRl7yFJDmX6zxDn8InHGmOOdsuvLaKe8Yagq6B4+b9s6x41t1yqmEtrw36cQIZwxecbYPKzWE6ii+kf8AmURTnv4MOCjE9axobs19c1aYi7wV6FcNtl3gC4xK+3DD2/y2J/XGNoRCLJf1x0KmL6wk+k2fecx20N7wgi8jLVRguguCUe8//9k=",
      alt: "Event Operations",
    },
    {
      title: "Curating Unforgettable Moments, Effortlessly",
      content:
        "At Eevagga, we believe that every celebration — be it a wedding, birthday, baby shower, college fest, or corporate milestone — deserves to be flawlessly executed and deeply memorable.",
      subcontent:
        "We are a full-stack, tech-enabled event experience platform, proudly built by Evaga Entertainment Pvt. Ltd., with a mission to redefine how India celebrates. With visually stunning event packages and flexible standalone services, Eevagga empowers you to book stress-free, high-impact events — with complete clarity, convenience, and creative control.",
    },

    {
      content:
        "From cozy home gatherings to large-scale brand activations, we manage every detail — planning, décor, logistics, on-ground execution, and more — under one powerful roof. No middlemen. No surprises. Just consistently exceptional results.",
    },
    {
      type: "image",
      src: "gallery/1749380036679_aboutus2.webp", // Second image after the paragraph
      preview:
        "data:image/jpeg;base64,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",
      alt: "Our Services",
    },
    {
      title: "What We Offer",
      list: [
        "Curated Event Packages: Ready-to-book décor and themes for weddings, birthdays, baby showers, and more",
        "Custom Services: From stage décor to audio-visual setups, book only what you need",
        "Institutional & Corporate Events: From college fests to corporate conferences and celebrations, we bring the scale, creativity, and professionalism to deliver impactful experiences.",
        "On-Ground Teams: Trained professionals across cities ensuring timely, high-quality execution",
        "Tech-Driven Efficiency: Visual catalogs, seamless bookings, smart CRM, and real-time coordination",
      ],
    },
    {
      title: "Our Mission",
      content:
        "To make premium event experiences accessible, organized, and visually transparent — while uplifting India’s ecosystem of local vendors, artists, and professionals.",
    },
    {
      title: "The Eevagga Flywheel",
      numberedList: [
        "One great event → Content & Referrals",
        "Repeat Bookings → Brand Loyalty",
        "Growth → That’s the Eevagga advantage",
        "A flywheel of celebration, powered by trust, tech, and talent.",
      ],
    },
    {
      title: "Who We Serve",
      list: [
        "Couples dreaming of perfect weddings",
        "Families planning milestone occasions",
        "Colleges, schools & institutions",
        "Startups, brands & enterprises looking to create impact",
      ],
      ending:
        "Whether you’re celebrating love, legacy, launch, or life itself — Eevagga by Evaga Entertainment Pvt. Ltd. is your trusted partner in turning moments into magic.",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={staggerContainer()}
      className="max-w-4xl mx-auto px-4 py-12"
    >
      {/* Hero Section */}
      <motion.div
        variants={fadeIn("up", "tween", 0.1, 0.6)}
        className="text-center mb-16"
      >
        <h1
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ color: "#6A1B9A" }}
        >
          Welcome to Eevagga
        </h1>
        <p className="text-xl md:text-2xl text-gray-600">
          Where Every Event Becomes an Experience
        </p>
      </motion.div>

      {/* Content Sections */}
      <div className="space-y-8">
        {sections.map((section, index) => (
          <motion.section
            key={section.title || section.type || index}
            variants={fadeIn("up", "tween", 0.2 + index * 0.1, 0.6)}
            className="space-y-6"
            viewport={{ once: true }}
          >
            {section.type === "image" ? (
              <motion.div
                className="relative group overflow-hidden rounded-xl shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <LazyLoadImage
                  src={
                    process.env.REACT_APP_API_Aws_Image_BASE_URL + section.src
                  }
                  alt={section.alt}
                  className="w-full h-auto object-cover aspect-video"
                  effect="blur"
                  placeholderSrc={section.preview} // Add small placeholder image in your data
                  wrapperProps={{
                    style: {
                      display: "block", // Ensures proper layout
                      transition: "filter 0.5s ease-out", // Custom blur transition
                    },
                  }}
                  beforeLoad={() => ({
                    style: {
                      filter: "blur(20px)",
                    },
                  })}
                  afterLoad={() => ({
                    style: {
                      filter: "blur(0)",
                    },
                  })}
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />

                {/* Optional Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

                {/* Optional Loading Skeleton */}
                {!section.src && (
                  <div className="absolute inset-0 bg-gray-100 animate-pulse" />
                )}
              </motion.div>
            ) : (
              <>
                {section.title && (
                  <h2
                    className="text-2xl font-semibold"
                    style={{ color: "#6A1B9A" }}
                  >
                    {section.title}
                  </h2>
                )}

                {section.content && (
                  <p className="text-gray-600 leading-relaxed">
                    {section.content}
                  </p>
                )}

                {section.subcontent && (
                  <p className="text-gray-600 leading-relaxed">
                    {section.subcontent}
                  </p>
                )}

                {section.list && (
                  <ul className="list-disc pl-6 space-y-2">
                    {section.list.map((item, i) => (
                      <li key={i} className="text-gray-600">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {section.numberedList && (
                  <ol className="list-decimal pl-6 space-y-3">
                    {section.numberedList.map((item, i) => (
                      <li key={i} className="text-gray-600">
                        {item}
                      </li>
                    ))}
                  </ol>
                )}

                {section.ending && (
                  <p className="text-gray-600 mt-6 leading-relaxed italic">
                    {section.ending}
                  </p>
                )}
              </>
            )}
          </motion.section>
        ))}
      </div>

      {/* Closing Section */}
      <motion.div
        variants={fadeIn("up", "tween", 1, 0.6)}
        className="text-center mt-16"
      >
        <div className=" pt-8">
          <p
            className="text-xl md:text-2xl font-semibold mb-4"
            style={{ color: "#6A1B9A" }}
          >
            Explore. Customize. Book. Celebrate.
          </p>
          <p className="text-lg md:text-xl text-gray-600">
            Welcome to Eevagga — Where Every Event Becomes an Experience.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutUs;
