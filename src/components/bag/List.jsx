import React from "react";
import Item from "./Item";

const List = ({ value }) => {
  const { bag } = value;
  return (
    <div>
      {bag.map((item) => {
        return <Item key={item.id} item={item} value={value} />;
      })}
    </div>
  );
};

export default List;
