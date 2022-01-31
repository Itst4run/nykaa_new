import React from 'react';
import '../product.css';
import { combinedata } from './combinedata';
import Layout from '../Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHeart } from '@fortawesome/free-solid-svg-icons'

export default function CombinePage() {
  return( 
    <Layout>
    <div className="Productpage">
    
    {
      combinedata.products.map((product) =>{
        return(
            <div className="product">
            <div className="header">
              <div className="offer">FEATURED OFFER</div>
              <div className="img">
                <img className='img' src={product.image}/>
              </div>
            </div>
            <div className="name">{product.name}</div>
            {/* <div className="category">category</div> */}
            <div className="price"> <b>MRP: ₹</b> {product.price}</div>
            <div className="rating"> <b>rating:</b> &nbsp; {product.rating}</div>
            <div className="btn">
              <div className="icon"><FontAwesomeIcon icon={faHeart}  className='heart' size='lg' /></div>
              <button className='add-to'>ADD TO BAG</button>
            </div>
          </div>
        )
      }) 
        
    }
      </div>
    </Layout>
    )
  }

