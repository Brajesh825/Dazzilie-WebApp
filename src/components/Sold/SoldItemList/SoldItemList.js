import React from "react";

import SoldItem from "../SoldItem/SoldItem";
import "./soldItemList.scss"

const SoldItemList = ({items}) => {
  return (
    <div className="soldItemList">
      {items.map((item) => {
        return <SoldItem key={Math.random()} item={item} />;
      })}
    </div>
  );
};

export default SoldItemList;
