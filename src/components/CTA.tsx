import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-sky-400 text-white py-20 px-4 md:px-10">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
          Ready to launch your next big thing?
        </h2>
        <p className="text-lg md:text-xl mb-8 text-white/90">
          Start building with a landing page that actually converts.
        </p>

        <Button
          variant="default"
          size="lg"
          className="text-lg px-8 py-4 bg-white text-blue-600 font-semibold hover:bg-blue-100 transition"
        >
          Get Started Now
        </Button>
      </motion.div>

      {/* Decorative glowing blob */}
      <motion.div
        className="absolute -top-10 -left-20 w-60 h-60 bg-white/10 blur-3xl rounded-full z-0"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
}
