import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../Auth/config";
import { onAuthStateChanged } from "firebase/auth";

const BlogCard = ({ title, desc, username, date, id }) => {
  let navigate = useNavigate();
  let [isuser, setisUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setisUser(user);
      }
    });
  }, []);

  return (
    <div className="bg-gradient-to-br from-purple-800/40 via-purple-900/50 to-black border border-white/10 rounded-2xl shadow-lg p-6 text-white max-w-md w-full mx-auto transition-all hover:scale-105 hover:shadow-purple-500/20">
      <div className="flex items-center justify-between text-sm text-gray-400 pt-2 mb-4">
        <span>✍️ {username.toUpperCase() || "Anonymous"}</span>
        <span>🗓️ {date}</span>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-purple-300">{title}</h2>

        <p className="text-gray-300">
          {desc.length > 100 ? desc.slice(0, 100) + "..." : desc}
        </p>

        <div className="pt-3">
          <button
            onClick={() => (isuser ? navigate(`/blog/${id}`) : null)}
            className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 transition-all text-sm font-medium shadow-md"
          >
            See more...
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
