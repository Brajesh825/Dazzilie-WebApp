import React from "react";

import SearchBar from "../../components/SearchBar/SearchBar";
import CategoriesBar from "../../components/CategoriesBar/CategoriesBar";
import FoodMenu from "../../components/FoodMenu/FoodMenu";

import "./dashboard.scss";

const foods = [
  {
    name: "Saoshimi",
    price: "22$",
    image:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg",
  },
  {
    name: "Unagi - Grilled Eel",
    price: "22$",
    image:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg",
  },
  {
    name: "Onigiri - Rice Balls",
    price: "22$",
    image:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg",
  },
  {
    name: "Yakitori - Grilled Chicken",
    price: "22$",
    image:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg",
  },
  {
    name: "Soba - Buckwheat Noodles ",
    price: "22$",
    image:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg",
  },
  {
    name: "Miso Soup",
    price: "22$",
    image:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg",
  },
];

const drinks = [
  {
    name: "Saoshimi",
    price: "22$",
    image:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg",
  },
  {
    name: "Saoshimi",
    price: "22$",
    image:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg",
  },
  {
    name: "Saoshimi",
    price: "22$",
    image:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg",
  },
];

const dashboard = () => {
  return (
    <div className="dashboard">
      <SearchBar />
      <CategoriesBar />
      <FoodMenu type="Food" items={foods} />
      <FoodMenu type="Drink" items={drinks} />
    </div>
  );
};

export default dashboard;
