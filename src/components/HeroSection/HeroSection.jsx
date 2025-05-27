import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
        }}
      />

      {/* Overlay (optional) */}
      <div className="absolute inset-0 bg-black bg-opacity-30" />

      {/* Text Content positioned at bottom 10% */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="absolute bottom-[10%] left-0 right-0 px-4 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
         Weddings. Birthdays. Corporate Events.
        </h1>
        <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto">
          Whatever you’re planning, we make it effortless and unforgettable.
        </p>

    
      </motion.div>
    </section>
  );
};

export default HeroSection;
