import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaPhone, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Temporary Images/Evaga Logo.png";
import { internalRoutes } from "../../utils/internalRoutes";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: internalRoutes.home, icon: <FaHome /> },
    { name: "About Us", path: internalRoutes.aboutUs, icon: <FaInfoCircle /> },
    { name: "Our Services", path: internalRoutes.ourServices, icon: <FaPhone /> },
    { name: "Blogs", path: internalRoutes.blog, icon: <FaUser /> },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    },
    closed: {
      opacity: 0,
      x: "100%",
      transition: { duration: 0.3 }
    }
  };

  const linkVariants = {
    hover: {
      color: "#FFE500",
      y: -2,
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 10,
        duration: 0.3
      }
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.2 }
    }
  };

  return (
    <nav className="bg-white/30 backdrop-blur-md w-full fixed top-0 left-0 z-50 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center"
        >
          <img src={logo} alt="Evaga Logo" className="h-10 md:h-12" />
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => 
                `relative text-lg font-semibold ${
                  isActive ? "text-[#FFE500]" : "text-[#6A1B9A]"
                }`
              }
            >
              {({ isActive }) => (
                <motion.span
                  className="inline-block"
                  variants={linkVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeIndicator"
                      className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#FFE500] text-sm"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.span>
              )}
            </NavLink>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-[#6A1B9A] focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="md:hidden fixed top-16 right-0 w-64 h-full bg-[#6A1B9A]/95 backdrop-blur-md shadow-lg"
            >
              <div className="flex flex-col p-6 space-y-8">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) => 
                      `flex items-center text-lg font-semibold py-3 px-4 rounded-lg transition-all text-sm ${
                        isActive 
                          ? "text-[#FFE500] bg-[#6A1B9A]/80"
                          : "text-[#FFE500] hover:bg-[#6A1B9A]/80"
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {({ isActive }) => (
                      <motion.div
                        className="flex items-center w-full"
                        variants={linkVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <span className="mr-3 text-sm">{link.icon}</span>
                        {link.name}
                        {isActive && (
                          <motion.span
                            layoutId="mobileActiveIndicator"
                            className="ml-auto w-2 h-2 rounded-full bg-[#FFE500]"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                      </motion.div>
                    )}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;