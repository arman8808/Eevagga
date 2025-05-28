import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import img from "../../assets/ourServices/B1.jpeg";
import img1 from "../../assets/ourServices/B2.jpeg";
import img2 from "../../assets/ourServices/B3.jpeg";
import img3 from "../../assets/ourServices/B4.jpeg";
import img4 from "../../assets/ourServices/B6.jpeg";
import img5 from "../../assets/ourServices/HW1.jpeg";
import img6 from "../../assets/ourServices/HW2.jpeg";
import img7 from "../../assets/ourServices/HW3.jpeg";
import img8 from "../../assets/ourServices/HW4.jpeg";
import img9 from "../../assets/ourServices/PIC19.jpeg";
import img10 from "../../assets/ourServices/Pic1.jpg";
import img11 from "../../assets/ourServices/Pic10.jpeg";
import img12 from "../../assets/ourServices/Pic11.jpeg";
import img13 from "../../assets/ourServices/Pic12.jpeg";
import img14 from "../../assets/ourServices/Pic13.jpeg";
import img15 from "../../assets/ourServices/Pic14.jpeg";
import img16 from "../../assets/ourServices/Pic15.jpeg";
import img17 from "../../assets/ourServices/Pic16.jpeg";
import img18 from "../../assets/ourServices/Pic17.jpeg";
import img19 from "../../assets/ourServices/Pic18.jpeg";
import img20 from "../../assets/ourServices/Pic2.jpeg";
import img21 from "../../assets/ourServices/Pic3.jpeg";
import img22 from "../../assets/ourServices/Pic4.jpeg";
import img23 from "../../assets/ourServices/Pic6.jpeg";
import img24 from "../../assets/ourServices/Pic7.jpeg";
import img25 from "../../assets/ourServices/Pic8.jpeg";
import img26 from "../../assets/ourServices/Pic9.jpeg";
import img27 from "../../assets/ourServices/pic5.jpeg";

const images = [
  img,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
];

export default function OurWorkSection() {
  const leftControls = useAnimation();
  const rightControls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);
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
        duration: 100,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  }, [leftControls, rightControls]);

  const [speed, setSpeed] = useState(80); 
  const [isHovered, setIsHovered] = useState(false);

  // Calculate animation duration based on speed
  const animationDuration = `${speed}s`;

  // Pause animation when hovering over any image
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

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
        <div
          className="py-4 overflow-hidden relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="flex"
            style={{
              animation: `marquee-left ${animationDuration} linear infinite`,
              width: "max-content",
              animationPlayState: isPaused || isHovered ? "paused" : "running",
            }}
          >
            {[...images, ...images].map((img, index) => {
              const eventIndex = index % images.length;
              return (
                <div
                  key={`left-${index}`}
                  className="relative h-64 w-64 mx-4 flex-shrink-0 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105"
                >
                  <img
                    src={img}
                    alt={`Event ${eventIndex + 1}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Second row (slides to right) */}
        <div
          className="py-4 overflow-hidden relative mt-8"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="flex"
            style={{
              animation: `marquee-right ${animationDuration} linear infinite`,
              width: "max-content",
              animationPlayState: isPaused || isHovered ? "paused" : "running",
            }}
          >
            {[...images]
              .reverse()
              .concat([...images].reverse())
              .map((img, index) => {
                const originalIndex =
                  images.length - 1 - (index % images.length);
                return (
                  <div
                    key={`right-${index}`}
                    className="relative h-64 w-64 mx-4 flex-shrink-0 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105"
                  >
                    <img
                      src={img}
                      alt={`Event ${originalIndex + 1}`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      {/* Global CSS for animations */}
      <style jsx global>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .flex {
          display: flex;
        }
      `}</style>
    </section>
  );
}
