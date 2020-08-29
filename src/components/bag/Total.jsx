import React from "react";
//import { Link } from "react-router-dom";

const Total = ({ value }) => {
  const { subTotal, tax, total, emptyBag } = value;
  return (
    <div className="checkout">
      <p>Subtotal: {subTotal} €</p>
      <p>Tax: {tax} €</p>
      <p>Total: {total} € (15%)</p>
      <div>
        <button>Checkout</button>
        <button onClick={() => emptyBag()}>Empty bag</button>
      </div>
    </div>
  );
};

export default Total;
