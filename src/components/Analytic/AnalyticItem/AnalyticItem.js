import React from "react";

import "./analyticItem.scss"

const AnalyticItem = ({item}) => {
  const { category, amount,symbol, percentage } = item;

  return (
    <>
      <div className="analyticItem">
        <div className=" itemValue">
          <h4>{category}</h4>
          <p>{symbol} </p>
        </div>
        <div className="itemData">
          <h4>${amount}</h4>
          <p>{percentage}%</p>
        </div>
      </div>
    </>
  );
};

export default AnalyticItem;
