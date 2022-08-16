import React from "react";

import OrderItem from "../OrderItem/OrderItem";
import "./orderTable.scss";

const OrderTable = ({ items }) => {
  return (
    <table className="orderTable">
      <thead>
        <tr>
          <th>No.</th>
          <th>Item</th>
          <th>Quantity</th>
          <th>Revenue</th>
          <th>Net Profit</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => {
          return <OrderItem key={Math.random()} item={item} />;
        })}
      </tbody>
    </table>
  );
};

export default OrderTable;
