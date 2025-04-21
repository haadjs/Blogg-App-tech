import React from "react";
import { motion } from "framer-motion";
import Button from "../Components/Button";
import gif from "../assets/images.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white flex items-center justify-center px-6 py-12">
      <div className="grid md:grid-cols-2 gap-12 max-w-7xl w-full items-center">
        {/* Left Content */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
            Show Your Ideas in Public
          </h1>

          <p className="text-gray-300 text-lg md:text-xl">
            Welcome to a world of thoughts, ideas, and inspiration—where every
            blog tells a story, sparks curiosity, and connects minds across the
            globe.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              title="Login"
              to="/log"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-xl transition-all shadow-md"
            />
            <Button
              title="Create Blog Post"
              to="/dash"
              className="bg-transparent border border-purple-600 hover:bg-purple-800 text-purple-300 px-6 py-2 rounded-xl transition-all shadow-md"
            />
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 shadow-2xl border border-white/20">
            <img src={gif} alt="Hero" className="w-full max-w-md rounded-xl" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
