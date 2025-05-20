import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      ease: "easeOut",
      duration: 0.6,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 bg-gradient-to-b from-sky-blue/20 to-white">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-jungle-green leading-tight"
          variants={itemVariants}
        >
          Build your business presence
          <br /> with confidence.
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          A sleek, fast, and fully responsive landing page starter, ready for
          any business or product. Powered by React, Tailwind CSS, and Vite.
        </motion.p>

        <motion.div
          className="mt-10 flex justify-center gap-6 flex-wrap"
          variants={itemVariants}
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-jungle-green text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition"
          >
            Get Started
          </motion.a>

          <motion.a
            href="#features"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-jungle-green text-jungle-green px-8 py-3 rounded-lg font-semibold hover:bg-jungle-green hover:text-white transition"
          >
            Learn More
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
