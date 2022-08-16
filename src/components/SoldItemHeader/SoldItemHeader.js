import React from "react";
import "./soldItemHeader.scss"

const SoldItemHeader = () => {
  return (
    <div className="soldItemHeader">
      <h2>Items Sold</h2>
      <div className="categories">
        <select defaultValue={0} id="dropdown" className="bestSeller">
          <option value="0">Best Seller</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
    </div>
  );
};

export default SoldItemHeader;
