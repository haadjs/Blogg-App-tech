// Footer.js
import React from 'react';

const Fotter = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 Haad Sheikh. All rights reserved.</p>
        <div className="mt-2">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 mx-2">
            Twitter
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 mx-2">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 mx-2">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Fotter;
