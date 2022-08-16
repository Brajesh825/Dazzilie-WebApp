import React from "react";

const OrderItem = ({ item }) => {
  let { no, name, quantity, revenue, netProfit } = item;

  return (
    <tr>
      <td>{no}</td>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{revenue}</td>
      <td>{netProfit}</td>
    </tr>
  );
};

export default OrderItem;
