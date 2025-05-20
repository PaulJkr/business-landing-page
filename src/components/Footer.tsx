import { motion } from "framer-motion";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-12 px-6">
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Brand / About */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Paul Tech</h3>
          <p className="text-gray-400 text-sm">
            Powerful, beautiful landing pages built to convert. Launch your next
            idea with confidence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="#features" className="hover:text-white transition">
                Features
              </a>
            </li>
            <li>
              <a href="#how" className="hover:text-white transition">
                How It Works
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-white transition">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-white transition">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-sky-400 transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              <FaGithub />
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="mt-10 text-center text-gray-500 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        © {new Date().getFullYear()} Paul Omondi. All rights reserved.
      </motion.div>
    </footer>
  );
}
