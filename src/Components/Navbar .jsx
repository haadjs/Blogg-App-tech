import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { auth } from "../Auth/config";
import { signOut } from "firebase/auth";
let logout = () => {
  signOut(auth)
    .then(() => {
      alert("Logout successfully");
      window.location.href = "/log"; // redirect manually
    })
    .catch((error) => {
      console.error("Logout error:", error.message);
    });
};

const Navbar = () => {
  return (
    <nav className="bg-gray-950 text-purple-200 shadow-md py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand */}
        <Link
          to="/"
          className="text-2xl font-bold text-purple-400 hover:text-white transition"
        >
          Haad's Blog
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center gap-6 text-sm font-medium">
          <li>
            <Link to="/" className="hover:text-purple-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-purple-400 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-purple-400 transition">
              Contact
            </Link>
          </li>

          {/* Buttons */}
          <li>
            <Button
              title="Sign In"
              to="/log"
              className="bg-purple-600 text-white py-2 px-4 rounded-xl hover:bg-purple-700 transition-all"
            />
          </li>
          <li>
            <Button
              onClick={() => logout()}
              title="Logout"
              to="/log"
              className="bg-gray-700 text-white py-2 px-4 rounded-xl hover:bg-gray-600 transition-all"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
