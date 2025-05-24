import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center "
    >
      <div className="max-w-md mx-auto p-8 bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl border border-[#FFE500] text-center">
        <div className="text-[#CBAB00] mx-auto w-20 h-16 mb-4">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-full h-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
              className="stroke-[#CBAB00]"
            />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-[#6B5B00] mb-2">
          🎉 Thank You for Reaching Out to Evaga!
        </h2>
        <p className="text-[#8B7B00] mb-6">
          Your Enquiry has been Successfully Submitted. Our expert team will get
          in touch with you shortly to understand your needs and craft an
          unforgettable event experience.
        </p>{" "}
        <p className="text-[#8B7B00] mb-6">
          📞 Need immediate assistance? Call us at +91-8050279101 Sit back and
          relax — you're one step closer to hosting something truly memorable.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/")}
          className="bg-gradient-to-r from-[#FFD700] to-[#CBAB00] hover:from-[#F9D703] hover:to-[#FFD700] text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Return Home
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ThankYou;
