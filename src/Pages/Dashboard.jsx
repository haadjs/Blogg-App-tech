import React, { useState } from "react";
import { db } from "../Auth/config";

import { collection, addDoc } from "firebase/firestore";

const Dashboard = () => {
  const [usertitle, setUserTitle] = useState("");
  const [userdesc, setUserDesc] = useState("");
  const [error, setError] = useState("");

  const submitData = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "userBlogs"), {
        title: usertitle,
        description: userdesc,
      });
      console.log("Document written with ID: ", docRef.id);
      setUserTitle("");
      setUserDesc("");
      setError("");
    } catch (e) {
      setError(e);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-gray-900 text-white p-8 rounded-2xl shadow-2xl">
        <h1 className="text-3xl font-bold mb-6 text-purple-400 text-center">
          Create a New Blog Post
        </h1>

        <form onSubmit={submitData} className="space-y-6">
          <div>
            <label className="block mb-2 text-purple-300 font-medium">
              Blog Title
            </label>
            <input
              type="text"
              value={usertitle}
              onChange={(e) => setUserTitle(e.target.value)}
              placeholder="Enter blog title..."
              className="w-full px-4 py-2 rounded-xl bg-gray-800 text-white border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-purple-300 font-medium">
              Blog Description
            </label>
            <textarea
              value={userdesc}
              onChange={(e) => setUserDesc(e.target.value)}
              placeholder="Write your blog description..."
              rows={6}
              className="w-full px-4 py-2 rounded-xl bg-gray-800 text-white border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 py-2 rounded-xl font-medium transition-all"
          >
            Publish Blog
          </button>
        </form>

        {error && (
          <p className="mt-4 text-red-400 text-sm text-center">
            {error.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
