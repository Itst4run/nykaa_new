import React, { useContext, useState } from 'react';

import './Productpage.css';
import Layout from '../Layout';
import Product from './product';
import data from './data';
import FilterContext from '../../Context/FilterContext';
// import UserContext from '../../Context/ContextCreater';
export default function Productpage() {
  // const{products,setproducts}=useContext(UserContext)
  // let  {filter,setFilter}=useContext(FilterContext)
  let nykkaProduct =data.filter((ele)=>{
    return ele.brand.toLowerCase()=='nykaa'
  })

  return( 
  <Layout>
  <div className="Productpage">
  
  {
    nykkaProduct.map((product) =>{
      console.log();
      return(
        <Product
      key={product._id}
      name={product.name}
      feature={product.feature}
      price={product.price}
      rating={product.rating}
      image={product.image}
      />
      )
    }) 
      
  }
    </div>
  </Layout>
  )
}
