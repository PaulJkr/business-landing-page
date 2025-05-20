import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is this landing page for?",
    answer:
      "It's a versatile and animated template you can use for any business website or startup.",
  },
  {
    question: "Is it mobile responsive?",
    answer:
      "Absolutely. It's built using Tailwind CSS and fully adapts to all screen sizes.",
  },
  {
    question: "Can I customize the components?",
    answer:
      "Yes, all components are modular and can be reused or edited as needed.",
  },
  {
    question: "What tools and libraries were used?",
    answer:
      "This page uses React, Vite, TypeScript, Tailwind CSS, and Framer Motion.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-20 px-4 md:px-10">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow-md border hover:shadow-lg transition"
            >
              <button
                onClick={() => toggle(index)}
                className="flex justify-between items-center w-full text-left text-lg font-medium"
              >
                <span>{faq.question}</span>
                <motion.span
                  initial={{ rotate: 0 }}
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ▼
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    className="mt-3 text-gray-600"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
