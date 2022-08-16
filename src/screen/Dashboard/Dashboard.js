import React from "react";

import SearchBar from "../../components/SearchBar/SearchBar";
import CategoriesBar from "../../components/CategoriesBar/CategoriesBar";
import FoodMenu from "../../components/Food/Menu/Menu";

import "./dashboard.scss";

import foods from "../../Api/foods";
import drinks from "../../Api/drinks";

const dashboard = () => {


  return (
    <div className="container">
      <div className="dashboard">
        <SearchBar />
        <CategoriesBar />
        <FoodMenu type="Food" items={foods} />
        <FoodMenu type="Drink" items={drinks} />
      </div>
    </div>
  );
};

export default dashboard;
