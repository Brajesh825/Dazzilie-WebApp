import React from 'react'

import Logo from "../../icons/logo.svg";

const SoldItem = ({item}) => {
    console.log(item);
  return (
    <div className="sold__item">
    <div>
      <img src={Logo} alt="img"></img>
    </div>
    <span className="details">
      <h4>{item.title}</h4>
      <p>{item.amount} items </p>
    </span>
  </div>  
  )
}

export default SoldItem