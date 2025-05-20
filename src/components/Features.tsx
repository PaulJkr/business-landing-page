import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const features = [
  {
    title: "Fast Setup",
    description:
      "Get your landing page live within minutes with zero hassle and instant preview.",
    icon: (
      <svg
        className="w-12 h-12 text-jungle-green"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M12 20l9-5-9-5-9 5 9 5z" />
        <path d="M12 12V4" />
      </svg>
    ),
  },
  {
    title: "Fully Responsive",
    description:
      "Looks perfect on every screen, from mobile phones to ultra-wide monitors.",
    icon: (
      <svg
        className="w-12 h-12 text-jungle-green"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <rect x={2} y={7} width={20} height={14} rx={2} ry={2} />
        <path d="M16 3h-8v4h8V3z" />
      </svg>
    ),
  },
  {
    title: "Customizable",
    description:
      "Easily tweak styles, colors, and layout to perfectly match your brand identity.",
    icon: (
      <svg
        className="w-12 h-12 text-jungle-green"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <circle cx={12} cy={12} r={10} />
        <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94" />
      </svg>
    ),
  },
];

const featureVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Features: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <section
      id="features"
      ref={ref}
      className="max-w-7xl mx-auto py-20 px-6 md:px-12 bg-white"
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
      >
        <motion.h2
          className="text-4xl font-bold text-jungle-green mb-10 text-center"
          variants={featureVariants}
        >
          Features that make your business stand out
        </motion.h2>

        <div className="grid gap-12 md:grid-cols-3">
          {features.map(({ icon, title, description }, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center text-center px-4"
              variants={featureVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <div className="mb-6">{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Features;
