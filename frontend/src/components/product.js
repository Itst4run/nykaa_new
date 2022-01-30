import React from 'react';
import './product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHeart } from '@fortawesome/free-solid-svg-icons'
export default function Product({name,image,price,rating}) {
  return (<div className="product">
    <div className="header">
      <div className="offer">FEATURED OFFER</div>
      <div className="img">
        <img className='img' src={image}/>
      </div>
    </div>
    <div className="name">{name}</div>
    {/* <div className="category">category</div> */}
    <div className="price">MRP:₹  {price}</div>
    <div className="rating">rating:{rating}</div>
    <div className="btn">
      <div className="icon"><FontAwesomeIcon icon={faHeart}  /></div>
      <button className='add-to'>ADD TO BAG</button>
    </div>
  </div>)

    ;
}
