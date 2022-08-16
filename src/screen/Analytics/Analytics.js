import React from "react";

import "./analytic.scss";
import Logo from "../../icons/logo.svg";

import profitLossDetails from "../../Api/profitLossDetails";

import itemSold from "../../Api/itemSold";

import SoldItemList from "../../components/SoldItemList/SoldItemList";

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
            <table>
              <tr>
                <th>No.</th>
                <th>Item</th>
                <th>Quantity</th>
                <th>Revenue</th>
                <th>Net Profit</th>
              </tr>
              <tr>
                <td>01</td>
                <td>Unagi Grilled Eel</td>
                <td>30</td>
                <td>$293.01</td>
                <td>$710.68</td>
              </tr>
              <tr>
                <td>01</td>
                <td>Soba - Buckwheat Noodles</td>
                <td>30</td>
                <td>$293.01</td>
                <td>$710.68</td>
              </tr>
              <tr>
                <td>01</td>
                <td>Onigiri - Rice Balls</td>
                <td>30</td>
                <td>$293.01</td>
                <td>$710.68</td>
              </tr>
              <tr>
                <td>01</td>
                <td>Onigiri - Rice Balls</td>
                <td>30</td>
                <td>$293.01</td>
                <td>$710.68</td>
              </tr>
              <tr>
                <td>01</td>
                <td>Onigiri - Rice Balls</td>
                <td>30</td>
                <td>$293.01</td>
                <td>$710.68</td>
              </tr>
            </table>
          </section>
          <section className="items__sold">
            <div className="items__sold__header">
              <h2>Items Sold</h2>
              <div className="categories">
                <select defaultValue={0}  id="dropdown" className="bestSeller">
                  <option  value="0">
                    Best Seller
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
            </div>
            <SoldItemList items={itemSold } /> 
          </section>
        </section>
      </div>
    </div>
  );
};

export default Analytics;
