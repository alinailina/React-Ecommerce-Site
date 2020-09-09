import React from "react";
import { Link } from "react-router-dom";
import { ContextConsumer } from "../Context";

const Navbar = () => {
  return (
    <ContextConsumer>
      {(value) => {
        const { bag } = value;
        return (
          <nav>
            <Link to="/">Shop</Link>
            <Link to="/bag">
              My bag{" "}
              <span>
                ({bag.length} {bag.length === 1 ? "Item" : "Items"})
              </span>
            </Link>
          </nav>
        );
      }}
    </ContextConsumer>
  );
};

export default Navbar;
