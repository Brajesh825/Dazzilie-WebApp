import React from "react";

import "./analytic.scss";

import profitLossDetails from "../../Api/profitLossDetails";
import itemSold from "../../Api/itemSold";
import order from "../../Api/orders";

import SoldItemList from "../../components/SoldItemList/SoldItemList";
import SoldItemHeader from "../../components/SoldItemHeader/SoldItemHeader";
import OrderTable from "../../components/Order/OrderTable/OrderTable";
import AnalyticList from "../../components/Analytic/AnalyticList/AnalyticList";

const Analytics = () => {
  return (
    <div className="container">
      <div className="analytics">
        <AnalyticList items={profitLossDetails} />
        <section className="orders">
          <section className="latest__orders">
            <h2>Latest Orders</h2>
            <OrderTable items={order} />
          </section>
          <section className="soldItems">
            <SoldItemHeader />
            <SoldItemList items={itemSold} />
          </section>
        </section>
      </div>
    </div>
  );
};

export default Analytics;
