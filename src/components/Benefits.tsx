import React from "react";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "Boost Productivity",
    description: "Optimize your workflow and get more done in less time.",
    icon: (
      <svg
        className="w-10 h-10 text-jungle-green"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M12 8v4l3 3" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
  {
    title: "Save Money",
    description: "Cut costs without compromising quality or efficiency.",
    icon: (
      <svg
        className="w-10 h-10 text-jungle-green"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M12 1v22M17 5H9a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3z" />
      </svg>
    ),
  },
  {
    title: "Scalable",
    description: "Grow seamlessly with a platform designed to expand with you.",
    icon: (
      <svg
        className="w-10 h-10 text-jungle-green"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M4 4v16h16" />
        <path d="M4 20l7-7" />
        <path d="M11 20l9-9" />
      </svg>
    ),
  },
  {
    title: "24/7 Support",
    description: "Our team is always here to help, anytime you need.",
    icon: (
      <svg
        className="w-10 h-10 text-jungle-green"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M18 8a6 6 0 0 1-12 0" />
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v.01" />
      </svg>
    ),
  },
];

const duplicatedBenefits = [...benefits, ...benefits];

const Benefits: React.FC = () => {
  return (
    <section
      id="benefits"
      className="py-20 px-6 md:px-12 max-w-7xl mx-auto bg-gray-50 overflow-hidden"
    >
      <h2 className="text-4xl font-bold text-jungle-green text-center mb-14">
        Why Choose Us?
      </h2>

      <motion.div
        className="flex gap-8"
        style={{ willChange: "transform" }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
      >
        {duplicatedBenefits.map(({ title, description, icon }, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-72 bg-white rounded-2xl shadow-lg p-8 cursor-default flex flex-col items-center text-center"
          >
            <div className="mb-6">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Benefits;
