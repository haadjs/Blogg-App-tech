import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Auth/config";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { s } from "framer-motion/client";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  let navigate = useNavigate()
  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setSuccessMsg("Login successful! 🎉");
        setEmail("");
        setPassword("");
        setTimeout(() => {
          navigate('/')
        }, 1500);
      })
      .catch((error) => {
        setErrorMsg(error.message);
        setEmail("");
        setPassword("");
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e1b4b] transition-colors">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-[#1e1b4b] text-white p-8 rounded-2xl shadow-2xl w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-300">
          Log In
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block mb-1 text-purple-300 font-medium">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-[#2a2550] text-white border border-purple-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-purple-300 font-medium">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 bg-[#2a2550] text-white border border-purple-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-xl transition-all"
          >
            Log In
          </motion.button>

          <div className="text-center text-sm text-purple-300 mt-2">
            Don’t have an account?{" "}
            <Link to="/sign" className="text-purple-400 hover:underline">
              Sign Up
            </Link>
          </div>
        </form>

        {errorMsg && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-red-400 text-sm text-center"
          >
            {errorMsg}
          </motion.p>
        )}
        {successMsg && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-green-400 text-sm text-center"
          >
            {successMsg}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default Login;
