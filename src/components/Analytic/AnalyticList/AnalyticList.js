import React from "react";

import AnalyticItem from "../AnalyticItem/AnalyticItem";
import "./analyticList.scss"

const AnalyticList = ({items}) => {
  return (
    <section className="analyticsItems">
      {items.map((item) => {
        return <AnalyticItem key={Math.random()} item={item} />;
      })}
    </section>
  );
};

export default AnalyticList;
