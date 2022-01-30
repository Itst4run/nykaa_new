import React from 'react';
import './product.css';
export default function Product() {
  return (<div className="product">
    <div className="header">
      <div className="offer">FEATURED OFFER</div>
      <div className="img">img</div>
    </div>
    <div className="name">Plum Glow Boost Combo - Fights Acne, Hyperpigmentation & Dark Spots</div>
    {/* <div className="category">category</div> */}
    <div className="price">price</div>
    <div className="rating">rating</div>
    <div className="btn">
      <div className="icon">icon</div>
      <button className='add-to'>ADD TO BAG</button>
    </div>
  </div>)

    ;
}
