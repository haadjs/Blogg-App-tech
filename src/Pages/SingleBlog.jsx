import React from "react";
import { useParams } from "react-router-dom";

const SingleBlog = () => {
  const param = useParams();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl rounded-2xl p-8 space-y-6">
        <div className="text-sm text-purple-300 mb-4 flex justify-between">
          <span>🆔 Blog ID: {param.id}</span>
          <span>🗓️ Date: 21 April 2025</span> {/* Replace with real date later */}
        </div>

        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
          Blog Title Here
        </h1>

        <p className="text-gray-300 text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id
          posuere turpis. Aliquam vel ultricies mi. Duis tincidunt, erat nec
          egestas pharetra, magna quam dignissim lorem, vel varius arcu orci
          vel nisi.
        </p>

        <div className="mt-6 flex items-center gap-4">
          <img
            src="https://i.pravatar.cc/40"
            alt="Author"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-purple-400 font-semibold">👨‍💻 By: Haad Sheikh</span>
        </div>

        <div className="pt-6 border-t border-white/10">
          <button className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-xl transition-all text-white shadow-md text-sm">
            Back to Blogs
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
