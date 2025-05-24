import { motion } from "framer-motion";
function TestimonialCard({text,name,role,rating}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-[#6A1B9A] rounded-xl shadow-lg p-8 h-full flex flex-col"
    >
      {/* Testimonial Text */}
      <div className="mb-6 flex-grow">
        <p className="text-white text-lg leading-relaxed relative pl-8">
          <span className="absolute left-0 text-3xl text-[#FFE500] font-serif">
            “
          </span>
          {text}
          <span className="text-3xl text-[#FFE500] font-serif align-top ml-1">
            ”
          </span>
        </p>
      </div>

      {/* Author Info and Rating */}
      <div className="flex items-center">
        <div className="ml-4">
          {/* Rating Stars */}
          <div className="flex mb-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 ${
                  i < rating
                    ? "text-[#FFE500]"
                    : "text-[#FFE500]/30"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <h3 className="text-lg font-semibold text-white">
            {name}
          </h3>
          <p className="text-sm text-[#FFE500]">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default TestimonialCard;
