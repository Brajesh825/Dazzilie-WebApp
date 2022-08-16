import React from "react";

import "./analytic.scss";
import Logo from "../../icons/logo.svg";

import profitLossDetails from "../../Api/profitLossDetails";
import itemSold from "../../Api/itemSold";
import order from "../../Api/orders"

import SoldItemList from "../../components/SoldItemList/SoldItemList";
import SoldItemHeader from "../../components/SoldItemHeader/SoldItemHeader";
import OrderTable from "../../components/Order/OrderTable/OrderTable";

const Analytics = () => {
  return (
    <div className="container">
      <div className="analytics">
        <section className="analytics__items">
          {profitLossDetails.map((item) => {
            const { category, amount, percentage } = item;
            let symbol = percentage <= 0 ? "↓" : "↑";
            return (
              <>
                <div className="analytics__item">
                  <div className=" item__value">
                    <h4>{category}</h4>
                    <p>{symbol} </p>
                  </div>
                  <div className="item__data">
                    <h4>${amount}</h4>
                    <p>{percentage}%</p>
                  </div>
                </div>
              </>
            );
          })}
        </section>
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
