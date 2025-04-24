import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../Auth/config";

const SingleBlog = () => {
  const param = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const blogsRef = collection(db, "userBlogs");
        const q = query(blogsRef, where("userid", "==", param.id));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          setBlog(doc.data());
        });
        setLoading(false);
      } catch (err) {
        console.error("Error fetching blog:", err);
        setError("Failed to load blog.");
        setLoading(false);
      }
    };
    fetchBlog();
  }, [param.id]);

  if (loading)
    return <p className="text-white text-center mt-10">Loading...</p>;
  if (error) return <p className="text-red-500 text-center mt-10">{error}</p>;
  if (!blog)
    return <p className="text-white text-center mt-10">No blog found.</p>;

  // Convert Firestore Timestamp to readable format

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl rounded-2xl p-8 space-y-6">
        <div className="text-sm text-purple-300 mb-4 flex justify-between">
          <span>🆔 Blog ID: {param.id}</span>
          <span>🗓️ Date: {blog.publish}</span>
        </div>

        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
          {blog.title}
        </h1>

        <p className="text-gray-300 text-lg leading-relaxed">
          {blog.description}
        </p>

        <div className="mt-6 flex items-center gap-4">
          <img
            src="https://i.pravatar.cc/40"
            alt="Author"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-purple-400 font-semibold">
            👨‍💻 By: {blog.name}
          </span>
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
