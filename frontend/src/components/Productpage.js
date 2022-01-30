import React from 'react';
import './Productpage.css';
import Layout from './Layout';
import Product from './product';
import data from '../data';
export default function Productpage() {
  
  return( 
  <Layout>
  <div className="Productpage">
  
  {
    data.products.map(product =>
      <Product
      key={product._id}
      name={product.name}
      offer={product.feature}
      price={product.price}
      rating={product.rating}
      image={product.image}
      />
      )
  }
    </div>
  </Layout>
  )
}
