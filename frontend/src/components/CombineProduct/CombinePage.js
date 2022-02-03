import React from 'react';
import '../product.css';
import data from '../NykaaProduct/data';
import Layout from '../Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

export default function CombinePage() {
  let CombineProduct =data.filter((ele)=>{
    return ele.category.toLowerCase()=='combine';
  })
  return( 
    <Layout>
    <div className="Productpage">
    
    {
      CombineProduct.map((product) =>{
        return(
            <div className="product">
            <div className="header">
              <div className="offer">FEATURED OFFER</div>
              <Link to={`/combine/${product._id}`}> <div className="img">
                <img className='img' src={product.image}/>
              </div></Link>
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

