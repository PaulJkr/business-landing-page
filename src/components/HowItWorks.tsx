import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const steps = [
  {
    title: "Sign Up",
    description:
      "Create your account in seconds with our simple signup process.",
    icon: (
      <svg
        className="w-12 h-12 text-sky-blue"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <circle cx={12} cy={12} r={10} />
        <path d="M12 16v-4m0 0l-3 3m3-3l3 3" />
      </svg>
    ),
  },
  {
    title: "Customize",
    description:
      "Adjust your preferences and personalize the experience to fit your needs.",
    icon: (
      <svg
        className="w-12 h-12 text-sky-blue"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M4 6h16M4 12h8m-8 6h16" />
      </svg>
    ),
  },
  {
    title: "Launch",
    description:
      "Go live and watch your business grow with our powerful tools.",
    icon: (
      <svg
        className="w-12 h-12 text-sky-blue"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M9 21V9a3 3 0 0 1 6 0v12" />
        <path d="M9 9l3-3 3 3" />
      </svg>
    ),
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const HowItWorks: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="bg-gradient-to-r from-sky-blue/20 to-white py-20 px-6 md:px-12 max-w-7xl mx-auto rounded-lg"
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.3 } },
        }}
      >
        <motion.h2
          className="text-4xl font-bold text-jungle-green text-center mb-14"
          variants={cardVariants}
        >
          How It Works
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map(({ title, description, icon }, i) => (
            <motion.div
              key={i}
              className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center cursor-default hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="mb-6">{icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-jungle-green">
                {title}
              </h3>
              <p className="text-gray-600">{description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HowItWorks;
