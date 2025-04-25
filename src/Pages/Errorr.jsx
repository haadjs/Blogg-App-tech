import React from "react";

const Errorr = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-purple-900 to-black flex items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold">Oops!</h1>
        <p className="text-xl mt-4">
          Something went wrong, and we couldn't find the page you're looking
          for.
        </p>
        <p className="mt-6 text-lg">
          <a
            href="/"
            className="text-purple-300 hover:text-purple-500 transition-all"
          >
            Go back to Home
          </a>
        </p>
      </div>
    </div>
  );
};

export default Errorr;
