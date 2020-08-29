import React from "react";

const Item = ({ item, value }) => {
  const { id, name, img, price, count, total } = item;
  const { incrementCount, decrementCount, removeItem } = value;
  return (
    <div className="bag-item">
      <div>
        <img src={img} alt="name" />
      </div>
      <h1>{name}</h1>
      <h2>{price} €</h2>
      <p>
        <span onClick={() => decrementCount(id)}>&#8722;</span> {count}{" "}
        <span onClick={() => incrementCount(id)}>&#65291;</span>
      </p>
      <p> {total} €</p>
      <div>
        {" "}
        <button onClick={() => removeItem(id)}>Remove</button>
      </div>
    </div>
  );
};

export default Item;
