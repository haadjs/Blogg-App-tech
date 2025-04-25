import React, { useEffect, useState } from "react";
import { db, auth } from "../Auth/config";
import { onAuthStateChanged } from "firebase/auth";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  Timestamp,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const [usertitle, setUserTitle] = useState("");
  const [userdesc, setUserDesc] = useState("");
  const [error, setError] = useState("");
  const [userid, setUserid] = useState("");
  const [username, setName] = useState("");
  let navigate = useNavigate();

  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let sec = date.getSeconds();
  let time = `${hours}:${minutes}:${sec}`;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserid(user.uid);
        console.log("User ID:", user.uid);

        try {
          const q = query(
            collection(db, "username"),
            where("uid", "==", user.uid)
          );
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            setName(doc.data().userName);
          });
        } catch (err) {
          console.error("Error fetching username:", err.message);
        }
      } else {
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const submitData = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "userBlogs"), {
        Name: username,
        userid: userid,
        title: usertitle,
        description: userdesc,
        publish: time,
      });
      console.log("Document written with ID: ", docRef.id);
      setUserTitle("");
      setUserDesc("");
      setError("");
    } catch (e) {
      console.error("Error adding document: ", e.message);
      setError(e.message);
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
          <p className="mt-4 text-red-400 text-sm text-center">{error}</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
