import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../Auth/config";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSignup = async (e) => {


    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setSuccessMsg("Signup successful! 🎉");
      window.location.href = "/log";
      setEmail("");
      setPassword("");
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-900 dark:bg-purple-950 transition-colors">
      <div className="bg-purple-800 dark:bg-purple-900 text-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Create an Account</h2>
        <div  className="space-y-4">
          <div>
            <label className="block text-white font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-purple-700 bg-purple-700 text-white rounded-xl outline-none focus:ring-2 focus:ring-purple-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-white font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-purple-700 bg-purple-700 text-white rounded-xl outline-none focus:ring-2 focus:ring-purple-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-xl hover:bg-purple-700 transition-all"
            onClick={handleSignup}
          >
            Sign Up
          </button>
        </div>
        {errorMsg && (
          <p className="mt-4 text-red-400 text-sm text-center">{errorMsg}</p>
        )}
        {successMsg && (
          <p className="mt-4 text-green-400 text-sm text-center">{successMsg}</p>
        )}
      </div>
    </div>
  );
};

export default Signup;
