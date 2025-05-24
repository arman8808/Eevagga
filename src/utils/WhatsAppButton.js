import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaTimes, FaCommentAlt } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";

const WhatsAppButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [message, setMessage] = useState("");

  const phoneNumber = "+918050279101";
  const defaultMessage = "Hello! I have a question about your services.";

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = message || defaultMessage;
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
    setIsExpanded(false);
    setMessage("");
  };

  return (
    <div
      className="whatsapp-container"
      style={{ position: "fixed", bottom: "30px", right: "30px", zIndex: 1000 }}
    >
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 25 }}
            style={{
              position: "absolute",
              bottom: "80px",
              right: "0",
              width: "300px",
              background: "white",
              borderRadius: "12px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                background: "linear-gradient(135deg, #25D366, #128C7E)",
                color: "white",
                padding: "15px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div
                style={{
                  background: "white",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#25D366",
                }}
              >
                <FaCommentAlt size={18} />
              </div>
              <div>
                <div style={{ fontWeight: "600", fontSize: "14px" }}>
                  Chat with us
                </div>
                <div style={{ fontSize: "12px", opacity: 0.9 }}>
                  We'll reply as soon as possible
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} style={{ padding: "15px" }}>
              <motion.textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                style={{
                  width: "100%",
                  minHeight: "80px",
                  border: "1px solid #eee",
                  borderRadius: "8px",
                  padding: "10px",
                  fontSize: "14px",
                  resize: "none",
                  marginBottom: "10px",
                  outline: "none",
                }}
                whileFocus={{ borderColor: "#25D366" }}
              />

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  background: "linear-gradient(135deg, #25D366, #128C7E)",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  padding: "10px 15px",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  cursor: "pointer",
                  fontWeight: "500",
                }}
              >
                <IoMdSend size={16} />
                Send via WhatsApp
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #25D366, #128C7E)",
            color: "white",
            border: "none",
            boxShadow: "0 4px 30px rgba(37, 211, 102, 0.3)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
          animate={{
            rotate: isExpanded ? [0, 90] : [90, 0],
          }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={isExpanded ? "close" : "whatsapp"}
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 45 }}
              transition={{ duration: 0.2 }}
            >
              {isExpanded ? <FaTimes size={24} /> : <FaWhatsapp size={28} />}
            </motion.span>
          </AnimatePresence>

          {/* Floating notification */}
          {!isExpanded && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 }}
              style={{
                position: "absolute",
                top: "-5px",
                right: "-5px",
                background: "#FF4D4D",
                color: "white",
                borderRadius: "50%",
                width: "24px",
                height: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              !
            </motion.div>
          )}

          {/* Continuous pulse effect */}
          <motion.div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: "50%",
              border: "2px solid rgba(255, 255, 255, 0.4)",
              pointerEvents: "none",
            }}
            animate={{
              scale: [1, 1.3],
              opacity: [0.6, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default WhatsAppButton;
