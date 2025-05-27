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
import image1 from "../assets/Picture1.jpg";
import image2 from "../assets/Picture2.jpg";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const AboutUs = () => {
  const sections = [
    {
      type: "image",
      src: image1, // First image after initial text
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
      src: image2, // Second image after the paragraph
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
  src={section.src}
  alt={section.alt}
  className="w-full h-auto object-cover aspect-video"
  effect="blur"
  placeholderSrc={section.placeholderSrc} // Add small placeholder image in your data
  wrapperProps={{
    style: {
      display: 'block', // Ensures proper layout
      transition: 'filter 0.5s ease-out', // Custom blur transition
    }
  }}
  beforeLoad={() => ({
    style: {
      filter: 'blur(20px)',
    }
  })}
  afterLoad={() => ({
    style: {
      filter: 'blur(0)',
    }
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
