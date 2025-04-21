import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Fotter = () => {
  return (
    <footer className="bg-gray-950 text-purple-300 py-8 shadow-inner">
      <div className="container mx-auto text-center px-4">
        <p className="text-sm mb-4">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold text-purple-400">Haad Sheikh</span>.
          All rights reserved.
        </p>
        <div className="flex justify-center gap-6 text-xl">
          <a
            href="https://www.facebook.com/profile.php?id=61555704857977"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://github.com/haadjs"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/haad-sheikh/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Fotter;
