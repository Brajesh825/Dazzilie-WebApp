import React from 'react'

import Logo from "../../../icons/logo.svg";
import "./soldItem.scss"

const SoldItem = ({item}) => {
  return (
    <div className="soldItem">
    <div>
      <img src={item.img} alt="img"></img>
    </div>
    <span className="details">
      <h4>{item.title}</h4>
      <p>{item.amount} items </p>
    </span>
  </div>  
  )
}

export default SoldItem