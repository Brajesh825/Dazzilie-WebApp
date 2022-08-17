import React from "react";
import "./item.scss";

const Item = ({ name, image, price }) => {
  return (
    <article key={Math.random()} className="menuItem">
      <div className="imageContainer">
        <img src={image} alt={name} className="photo" />
      </div>
      <div className="itemInfo">
        <h3>{name}</h3>
        <p className="price">${price}</p>
      </div>
    </article>
  );
};

export default Item;
