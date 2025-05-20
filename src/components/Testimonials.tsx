import { motion } from "framer-motion";
import paul from "../assets/avatars/passport.jpg";
import nar from "../assets/avatars/gaara.jpg";
import gaa from "../assets/avatars/naruto.jpg";

const testimonials = [
  {
    name: "Paul Omondi",
    title: "Founder, Acme Corp",
    quote:
      "This platform transformed our business — elegant, fast, and incredibly easy to use.",
    avatar: paul,
  },
  {
    name: "Naruto",
    title: "Marketing Lead, Beta Inc.",
    quote:
      "The landing page boosted our conversions by 300%. Highly recommend it!",
    avatar: nar,
  },
  {
    name: "Gaara",
    title: "CEO, Delta Group",
    quote: "Impressive animations and a clean aesthetic. Clients love it.",
    avatar: gaa,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20 px-4 md:px-10">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Our Clients Say
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Trusted by professionals and startups across the globe.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">“{testimonial.quote}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
