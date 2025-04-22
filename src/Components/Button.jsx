// src/Components/Button.jsx
import React from "react";
import { Link } from "react-router-dom";

const Button = ({ title, className, to, onClick }) => {
  if (to) {
    return (
      <Link to={to} className={className} onClick={onClick}>
        {title}
      </Link>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button; // ✅ THIS LINE IS REQUIRED
