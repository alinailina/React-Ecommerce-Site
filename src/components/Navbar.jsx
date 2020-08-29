import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Shop</Link>
      <Link to="/bag">My bag</Link>
    </nav>
  );
};

export default Navbar;
