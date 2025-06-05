import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaPhone } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Temporary Images/Eevagga_yellow.webp";
import { internalRoutes } from "../../utils/internalRoutes";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: internalRoutes.home, icon: <FaHome /> },
    { name: "About Us", path: internalRoutes.aboutUs, icon: <FaInfoCircle /> },
    {
      name: "Our Services",
      path: internalRoutes.ourServices,
      icon: <FaPhone />,
    },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    closed: {
      opacity: 0,
      x: "100%",
      transition: { duration: 0.3 },
    },
  };

  const linkVariants = {
    hover: {
      color: "#FFE500",
      y: -2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
        duration: 0.3,
      },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.2 },
    },
  };

  return (
    <nav className="bg-[#6A1B9A] w-full z-50 border-b border-[#FFE500]/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center"
          href={internalRoutes.home}
        >
          <img
            src={logo}
            alt="Evaga Logo"
            className="h-10 md:h-10 object-contain"
          />
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative text-sm font-medium ${
                  isActive ? "text-[#FFE500]" : "text-white"
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
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
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
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </motion.button>

        {/* Mobile Menu */}

        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop with blur effect */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                onClick={toggleMenu}
              />

              {/* Mobile menu panel */}
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
                className="md:hidden fixed top-0 right-0 h-full w-4/5 max-w-sm bg-[#6A1B9A] shadow-2xl z-50 flex flex-col"
              >
                {/* Close button at top */}
                <div className="p-4 flex justify-end">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-white p-2"
                    onClick={toggleMenu}
                  >
                    <FaTimes size={28} />
                  </motion.button>
                </div>

                {/* Menu items with scroll */}
                <div className="flex-grow overflow-y-auto p-6 space-y-6">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      className={({ isActive }) =>
                        `flex items-center text-base font-medium py-3 px-4 rounded-xl transition-all ${
                          isActive
                            ? "text-[#FFE500] bg-[#FFE500]/20"
                            : "text-white hover:bg-[#FFE500]/20"
                        }`
                      }
                      onClick={toggleMenu}
                    >
                      {({ isActive }) => (
                        <motion.div
                          className="flex items-center w-full"
                          variants={linkVariants}
                          whileHover="hover"
                          whileTap="tap"
                        >
                          <span className="mr-3 text-lg">{link.icon}</span>
                          <span className="flex-grow">{link.name}</span>
                          {isActive && (
                            <motion.span
                              layoutId="mobileActiveIndicator"
                              className="ml-2 w-2.5 h-2.5 rounded-full bg-[#FFE500]"
                              transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30,
                              }}
                            />
                          )}
                        </motion.div>
                      )}
                    </NavLink>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;
