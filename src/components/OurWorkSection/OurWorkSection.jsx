import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import img from "../../assets/img.webp";
import img2 from "../../assets/img2.webp";
import img4 from "../../assets/img4.webp";
import img5 from "../../assets/img5.webp";
import img6 from "../../assets/img6.webp";
import img7 from "../../assets/img7.webp";
import img8 from "../../assets/img8.webp";
import img9 from "../../assets/img9.webp";
import img10 from "../../assets/img10.webp";
import img11 from "../../assets/img11.webp";
import img12 from "../../assets/img12.webp";
const images = [
  img,
  img2,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
];

export default function OurWorkSection() {
  const leftControls = useAnimation();
  const rightControls = useAnimation();

  useEffect(() => {
    leftControls.start({
      x: ["0%", "-100%"],
      transition: {
        duration: 80,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });

    rightControls.start({
      x: ["-100%", "0%"],
      transition: {
        duration: 80,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  }, [leftControls, rightControls]);

  return (
    <section className="py-20 px-6 bg-[#6A1B9A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-white text-3xl md:text-4xl font-normal text-center mb-4">
            Our work speaks for us
          </h2>
          <p className="text-normal text-white/80  leading-5 tracking-[.25em]">
            People love the way we planned their <br /> events. We made it
            perfect
          </p>
        </motion.div>

        {/* First row (slides to left) */}
        <div className="py-4 overflow-hidden">
          <motion.div
            className="flex"
            animate={leftControls}
            onHoverStart={() => leftControls.stop()}
            onHoverEnd={() =>
              leftControls.start({
                x: ["0%", "-100%"],
                transition: {
                  duration: 80,
                  ease: "linear",
                  repeat: Infinity,
                },
              })
            }
          >
            {[...images, ...images, ...images].map((img, index) => (
              <motion.div
                key={`left-${index}`}
                className="relative h-64 w-64 mx-4 flex-shrink-0 rounded-xl overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
             <LazyLoadImage
            src={img}
            alt="Our work"
            className="h-full w-full object-cover transform transition-all duration-300 group-hover:scale-105"
            effect="blur"
            // placeholderSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            wrapperClassName="lazy-carousel-image-wrapper"
            beforeLoad={() => ({
              style: { filter: 'blur(20px)' }
            })}
            afterLoad={() => ({
              style: { 
                filter: 'blur(0)',
                transition: 'filter 0.4s ease-out, transform 0.3s ease'
              }
            })}
            threshold={100}
          />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Second row (slides to right) */}
        <div className="py-4 overflow-hidden">
          <motion.div
            className="flex"
            animate={rightControls}
            onHoverStart={() => rightControls.stop()}
            onHoverEnd={() =>
              rightControls.start({
                x: ["-100%", "0%"],
                transition: {
                  duration: 80,
                  ease: "linear",
                  repeat: Infinity,
                },
              })
            }
          >
            {[...images, ...images, ...images].map((img, index) => (
              <motion.div
                key={`right-${index}`}
                className="relative h-64 w-64 mx-4 flex-shrink-0 rounded-xl overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <LazyLoadImage
                  src={img}
                  alt="Our work"
                  className="h-full w-full object-cover transform transition-all duration-300 group-hover:scale-105"
                  effect="blur"
                  // placeholderSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  wrapperClassName="lazy-carousel-image-wrapper"
                  beforeLoad={() => ({
                    style: { filter: "blur(20px)" },
                  })}
                  afterLoad={() => ({
                    style: {
                      filter: "blur(0)",
                      transition: "filter 0.4s ease-out, transform 0.3s ease",
                    },
                  })}
                  threshold={100}
                />{" "}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
