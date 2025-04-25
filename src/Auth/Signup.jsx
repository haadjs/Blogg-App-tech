import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import {db} from '../Auth/config'
import { auth } from "../Auth/config";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Signup = () => {
  const [username, setUsername] = useState(""); // ✅ NEW
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  let navigate = useNavigate()

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      

   try {
         const docRef = await addDoc(collection(db, "username"), {
          uid : user.uid,
         userName : username
         });
         console.log("Document written with ID: ", docRef.id);
       } catch (e) {
         console.error("Error adding document: ", e.message);
         setError(e.message);
       }
     
      
      setSuccessMsg("Signup successful! 🎉");
      setTimeout(() => {
       navigate('/log')
      }, 1000);

      setUsername(""); // clear username
      setEmail("");
      setPassword("");
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#1e1b4b] to-[#0f172a] transition-colors">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-[#1e1b4b] text-white p-8 rounded-2xl shadow-2xl w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-300">
          Create Account
        </h2>

        <form onSubmit={handleSignup} className="space-y-5">
          {/* ✅ Username */}
          <div>
            <label className="block mb-1 text-purple-300 font-medium">
              Username
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-[#2a2550] text-white border border-purple-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

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
            Sign Up
          </motion.button>

          <div className="text-center text-sm text-purple-300 mt-2">
            Already have an account?{" "}
            <Link to="/log" className="text-purple-400 hover:underline">
              Log In
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

export default Signup;
