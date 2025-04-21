import React from "react";
import { Link } from "react-router-dom";

const Button = ({ title, className, to, onClick }) => {
  if (to) {
    return (
      <Link to={to} className={className}>
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

export default Button;
