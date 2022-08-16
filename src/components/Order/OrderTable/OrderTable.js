import React from "react";

import OrderItem from "../OrderItem/OrderItem";

const OrderTable = ({items}) => {
  return (
    <table>
      <tr>
        <th>No.</th>
        <th>Item</th>
        <th>Quantity</th>
        <th>Revenue</th>
        <th>Net Profit</th>
      </tr>
      {
        items.map((item) => {
          return <OrderItem item={item} />
        })
      }
    </table>
  );
};

export default OrderTable;
