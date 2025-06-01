import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden max-h-[90dvh]">
      {/* Optimized Background Image */}
      <div className="absolute inset-0">
        {/* Placeholder for optimized image - replace with actual optimized image */}
        <div 
          className="bg-gray-200  w-full h-full"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1519681393784-d120267933ba)', // Use WebP format
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />

      {/* Animated Content */}
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <motion.div 
          className="max-w-2xl text-center mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            ease: "easeOut",
            delay: 0.2
          }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Modern Digital Experiences
          </motion.h1>
          
          <motion.p 
            className="text-xl text-white/90 max-w-lg mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Crafting performant interfaces with cutting-edge technology
          </motion.p>
     
        </motion.div>
      </div>
    </section>
  );
}