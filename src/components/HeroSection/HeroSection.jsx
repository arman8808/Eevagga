import { motion } from "framer-motion";
import BookingForm from "../../pages/BookingForm";
import bg from '../../assets/ourservicepurcchased.jpg'
const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[80dvh] overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage:
            `url(${bg})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />

      <div className="container mx-auto relative z-10 min-h-[80dvh] flex flex-col lg:flex-row items-center pl-[2.55%]">
        {/* Left Content - Text */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 px-6 py-16 lg:py-0 text-center lg:text-left"
        >
          <div className="max-w-lg mx-auto lg:ml-0">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
              whileHover={{ scale: 1.02 }}
            >
              Weddings. Birthdays. Corporate Events.
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-white mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Whatever you're planning, we make it effortless and unforgettable.
            </motion.p>
          </div>
        </motion.div>

        {/* Right Content - Form */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="w-full lg:w-1/2 px-6 py-12 flex justify-center "
          id="booking-section1"
        >
          <BookingForm />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
