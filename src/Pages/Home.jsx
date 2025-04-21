import React, { useEffect, useState } from "react";
import { db } from "../Auth/config";
import { motion } from "framer-motion";
import Button from "../Components/Button";
import gif from "../assets/2832fb71252497.5bbeed275ae64.gif";
import { collection, getDocs } from "firebase/firestore";
import BlogCard from "../Components/BlogCard";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let blogsarr = [];
    let fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "userBlogs"));
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
          blogsarr.push({ id: doc.id, ...doc.data() });
        });
        setBlogs(blogsarr);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="  min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white flex items-center justify-center px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 max-w-7xl w-full items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
              Show Your Ideas in Public
            </h1>

            <p className="text-gray-300 text-lg md:text-xl">
              Welcome to a world of thoughts, ideas, and inspiration—where every
              blog tells a story, sparks curiosity, and connects minds across
              the globe.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 ">
              <Button
                title="Login"
                to="/log"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-xl transition-all shadow-md"
              />
              <Button
                title="Create Blog Post"
                to="/dash"
                className="bg-transparent border border-purple-600 hover:bg-purple-800 text-purple-300 px-6 py-2 rounded-xl transition-all shadow-md"
              />
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 shadow-2xl border border-white/20">
              <img
                src={gif}
                alt="Hero"
                className="w-full max-w-md rounded-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <section>
        <div>
          <h1 className="text-4xl text-center mb-2 font-bold text-gray-900 dark:text-white">
            Blogs
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mt-2">
            Explore our latest blogs
          </p>
        </div>

        <div>
          {loading && (
            <p className="text-center text-gray-600 dark:text-gray-400 mt-2">
              Loading...
            </p>
          )}
          {error && <p className="text-center text-red-500 mt-2">{error}</p>}

          {blogs &&
            blogs.map((item, indx) => {
              return (
                <BlogCard
                  key={indx}
                  title={item.title}
                  desc={item.description}
                />
              );
            })}
        </div>
      </section>
    </>
  );
};

export default Home;
