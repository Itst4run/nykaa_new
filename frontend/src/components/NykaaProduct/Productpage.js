import React, { useContext } from 'react';

import './Productpage.css';
import Layout from '../Layout';
import Product from '../product';
import data from './data';
import UserContext from '../../Context/ContextCreater';
export default function Productpage() {
  const{products,setproducts}=useContext(UserContext)
  return( 
  <Layout>
  <div className="Productpage">
  
  {
    data.products.map((product) =>{
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
