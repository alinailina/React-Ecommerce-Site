import React from "react";
import { Link } from "react-router-dom";
import { ContextConsumer } from "../Context";

const Item = ({ item }) => {
  const id = item.id;
  const name = item.name;
  const img = item.img;
  const price = item.price;
  const inBag = item.inBag;

  return (
    <div className="item">
      <h2>{name}</h2>
      <img src={img} alt={name} />
      <h3>{price}€</h3>

      <ContextConsumer>
        {(value) => (
          <div>
            <Link to="/details" onClick={() => value.viewDetail(id)}>
              View item
            </Link>

            <button
              disabled={inBag ? true : false}
              onClick={() => value.addToBag(id)}
            >
              {inBag ? "Added" : "Add to bag"}
            </button>
          </div>
        )}
      </ContextConsumer>
    </div>
  );
};

export default Item;
