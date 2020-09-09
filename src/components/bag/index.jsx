import React from "react";
import { ContextConsumer } from "../../Context";

import List from "./List";
import Total from "./Total";
import { Link } from "react-router-dom";

const Bag = () => {
  return (
    <ContextConsumer>
      {(value) => {
        const { bag } = value;
        if (bag.length > 0) {
          return (
            <div className="bag">
              <List value={value} />
              <Total value={value} />
            </div>
          );
        } else {
          return (
            <div className="empty-bag">
              <p>Your bag is currently empty :(</p>
              <Link to="/">Continue shopping</Link>
            </div>
          );
        }
      }}
    </ContextConsumer>
  );
};

export default Bag;
