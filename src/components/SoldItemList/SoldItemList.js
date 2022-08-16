import React from "react";

import SoldItem from "../SoldItem/SoldItem";

const SoldItemList = ({items}) => {
    console.log(items);
  return (
    <div className="items__sold__list">
      {items.map((item) => {
        return <SoldItem key={Math.random()} item={item} />;
      })}
    </div>
  );
};

export default SoldItemList;
