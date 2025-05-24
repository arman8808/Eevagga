import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
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
const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ["0%", "-100%"],
      transition: {
        duration: 80,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop"
      }
    });
  }, [controls]);

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

        <div className="py-8 overflow-hidden">
          <motion.div 
            className="flex"
            animate={controls}
            onHoverStart={() => controls.stop()}
            onHoverEnd={() => controls.start({
              x: ["0%", "-100%"],
              transition: {
                duration: 80,
                ease: "linear",
                repeat: Infinity
              }
            })}
          >
            {[...images, ...images, ...images].map((img, index) => (
              <motion.div
                key={index}
                className="relative h-64 w-64 mx-4 flex-shrink-0 rounded-xl overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={img}
                  alt="Our work"
                  className="h-full w-full object-cover transform transition-all duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>

  );
}