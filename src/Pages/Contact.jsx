import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white px-6 py-16 flex items-center justify-center">
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Left Section - Text and Info */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
            Get in Touch
          </h2>
          <p className="text-gray-300 text-lg">
            Have a question, suggestion, or just want to say hi? Feel free to
            reach out. I’d love to hear from you!
          </p>
          <div className="space-y-2 text-gray-400">
            <p>📧 Email: sheikhhaadjs@example.com</p>
            <p>🐦 Github: github.com/haadjs</p>
            <p>💼 LinkedIn: www.linkedin.com/in/haad-sheikh/</p>
          </div>
        </motion.div>

        <motion.form
          className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20 space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <label className="block mb-1 text-sm">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">Email</label>
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">Message</label>
            <textarea
              rows="4"
              placeholder="Your message..."
              className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl transition-all font-semibold"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
