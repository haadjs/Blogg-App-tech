import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import { auth } from "../Auth/config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import logo from '../assets/Screenshot_2025-04-26_014410-removebg-preview.png'

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const logout = () => {
    signOut(auth)
      .then(() => {
        alert("Logout successfully");

        navigate("/log");
      })
      .catch((error) => {
        console.error("Logout error:", error.message);
      });
  };

  return (
    <nav className="bg-gray-950 text-purple-200 shadow-md py-4 px-6 transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-purple-400 hover:text-white transition-all duration-300 ease-in-out"
        >
         <img src={logo} alt=""  width={150}/>
        </Link>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-purple-400 hover:text-white transition-all duration-300"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-6 text-sm font-semibold">
          {["Home", "About", "Contact"].map((item, index) => (
            <li key={index}>
              <Link
                to={`/${
                  item.toLowerCase() === "home" ? "" : item.toLowerCase()
                }`}
                className="hover:text-purple-400 hover:scale-105 transition-all duration-300"
              >
                {item}
              </Link>
            </li>
          ))}

          {!user && (
            <li>
              <Button
                title="Sign In"
                to="/log"
                className="bg-purple-600 text-white py-2 px-4 rounded-xl hover:bg-purple-700 hover:scale-105 transition-all duration-300"
              />
            </li>
          )}

          {user && (
            <li>
              <Button
                onClick={logout}
                title="Logout"
                to="/"
                className="bg-gray-700 text-white py-2 px-4 rounded-xl hover:bg-gray-600 hover:scale-105 transition-all duration-300"
              />
            </li>
          )}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden mt-4 animate-slide-down origin-top">
          <ul className="flex flex-col gap-4 text-center text-sm font-semibold">
            {["Home", "About", "Contact"].map((item, index) => (
              <li key={index}>
                <Link
                  to={`/${
                    item.toLowerCase() === "home" ? "" : item.toLowerCase()
                  }`}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-purple-400 transition-all duration-300 hover:scale-105"
                >
                  {item}
                </Link>
              </li>
            ))}

            {!user && (
              <li className="mt-3">
                <Button
                  title="Sign In"
                  to="/log"
                  className="bg-purple-600 text-white py-2 px-4 rounded-xl hover:bg-purple-700 hover:scale-105 transition-all duration-300"
                />
              </li>
            )}

            {user && (
              <li className="mb-3">
                <Button
                  onClick={logout}
                  title="Logout"
                  to="/"
                  className="bg-gray-700 text-white py-2 px-4 rounded-xl hover:bg-gray-600 hover:scale-105 transition-all duration-300"
                />
              </li>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
