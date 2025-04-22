import React from "react";
import { motion } from "framer-motion";
import giff from "../assets/working.gif";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white flex items-center justify-center px-6 py-12">
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl w-full items-center">
        {/* Left - Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 shadow-2xl border border-white/20">
            <img src={giff} alt="About" className="w-full max-w-md rounded-xl" />
          </div>
        </motion.div>

        {/* Right - Content */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
            About This Blog
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Welcome! I'm Haad Sheikh, a passionate MERN stack developer who
            loves to turn real-world ideas into working applications. This blog
            is my space to share knowledge, document learnings, and inspire
            fellow developers and tech lovers.
          </p>
          <p className="text-gray-400 text-md">
            Whether you're into JavaScript, React, Firebase, or just enjoy
            exploring creative projects, you'll find something worth your time
            here. Dive into tutorials, read dev stories, and discover tools that
            make coding fun and meaningful.
          </p>
          <p className="text-purple-300 italic">
            Thanks for stopping by — let’s learn and grow together!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;