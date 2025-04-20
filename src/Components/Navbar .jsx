import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'about'}>About</Link>
            </li>
            <li>
              <Link to={'contact'}>Contact</Link>
            </li>
            <li>
              <Link to={'sign'}>signUp</Link>
            </li>
            <li>
              <Link to={'log'}>login</Link>
            </li>
           </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
