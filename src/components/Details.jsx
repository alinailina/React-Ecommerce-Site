import React from "react";
import { ContextConsumer } from "../Context";
import { Link } from "react-router-dom";

const Details = () => {
  return (
    <div className="container">
      <ContextConsumer>
        {(value) => {
          console.log(value);
          const {
            id,
            name,
            img,
            description,
            price,
            inBag,
          } = value.itemDetails;
          console.log(name);
          return (
            <div className="details">
              <div>
                <img src={img} alt={name} />
              </div>
              <div>
                <h1>{name}</h1>
                <p>{description}</p>
                <h2>{price} €</h2>
                <div>
                  {" "}
                  <Link to="/">Back to shopping</Link>
                  <button
                    disabled={inBag ? true : false}
                    onClick={() => value.addToBag(id)}
                  >
                    {inBag ? <p>Added</p> : <p>Add to bag</p>}
                  </button>
                </div>
              </div>
            </div>
          );
        }}
      </ContextConsumer>
    </div>
  );
};

export default Details;
