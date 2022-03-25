import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHeart } from '@fortawesome/free-solid-svg-icons'
import data from './data';
import CartContext from '../../Context/CartContext';
export default function Product({name,image,price,rating,feature, countInStock}) {

let {addToCart} = useContext(CartContext)
  function handleClick(){

    addToCart(name,price,countInStock)
  }


  // function addToCart(id, name, price,image,category,brand,countInStock){

  return (<div className="product">
    <div className="header">
      <div className="offer">FEATURE {feature}</div>
     <Link to="/product"> <div className="img">
        <img className='img' src={image}/>
      </div>
      </Link>
    </div>
    <div className="name">{name}</div>
    {/* <div className="category">category</div> */}
    <div className="price"> <b>MRP: ₹</b> {price}</div>
    <div className="rating"> <b>rating:</b> &nbsp; {rating}</div>
    <div className="btn">
      <div className="icon"><FontAwesomeIcon icon={faHeart} className='heart' size='lg' /></div>
      <button className='add-to' onClick={handleClick}>ADD TO BAG</button>
    </div>
  </div>)

    ;
}
