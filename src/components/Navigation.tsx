import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Resources", href: "#" },
  { name: "Company", href: "#" },
];

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll to add bg on header
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center text-jungle-green font-extrabold text-2xl select-none"
        >
          Paul Tech
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <motion.li
              key={link.name}
              whileHover={{ y: -3, color: "#304716" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-pointer"
            >
              <a href={link.href}>{link.name}</a>
            </motion.li>
          ))}
        </ul>

        {/* CTA Button Desktop */}
        <div className="hidden md:block">
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-sky-blue text-white px-5 py-2 rounded-md font-semibold shadow-md shadow-sky-300 hover:shadow-lg transition"
            style={{ backgroundColor: "#7EAAE6" }}
          >
            Get Started
          </motion.a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 7 : 0 }}
            className="w-6 h-0.5 bg-jungle-green mb-1"
          />
          <motion.div
            animate={{ opacity: isOpen ? 0 : 1 }}
            transition={{ duration: 0.1 }}
            className="w-6 h-0.5 bg-jungle-green mb-1"
          />
          <motion.div
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -7 : 0 }}
            className="w-6 h-0.5 bg-jungle-green"
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg overflow-hidden"
          >
            <ul className="flex flex-col space-y-4 px-6 py-6 text-gray-700 font-semibold">
              {navLinks.map((link) => (
                <motion.li
                  key={link.name}
                  whileTap={{ scale: 0.95 }}
                  className="cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  <a href={link.href}>{link.name}</a>
                </motion.li>
              ))}

              <motion.li
                whileTap={{ scale: 0.95 }}
                className="mt-4"
                onClick={() => setIsOpen(false)}
              >
                <a
                  href="#"
                  className="block bg-sky-blue text-white px-5 py-2 rounded-md text-center font-semibold shadow-md shadow-sky-300"
                  style={{ backgroundColor: "#7EAAE6" }}
                >
                  Get Started
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navigation;
