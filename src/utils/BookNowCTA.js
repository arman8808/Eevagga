import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { internalRoutes } from "./internalRoutes";

const BookNowCTA = ({ className }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={className}
    >
      <Link
        to={internalRoutes.bookingForm}
        className="inline-block bg-gradient-to-r from-[#F9D703] via-[#FFD700] to-[#CBAB00] hover:from-[#FFD700] hover:to-[#CBAB00] text-sm text-white font-semibold py-1 px-3 rounded-xl text-lg transition-all duration-300 shadow-md hover:shadow-lg"
      >
        Book a Call
      </Link>
    </motion.div>
  );
};

export default BookNowCTA;
