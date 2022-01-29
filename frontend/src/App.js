import React from 'react';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Signin from './components/Signin';
import Product from './components/Product';
function App() {
  return (
    
    <BrowserRouter> 
    <div className="App">
     
      <Routes>
         <Route path="/" element={<Content/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path = "/product" element={<Product/>}/>
       
  
        
      </Routes>
    </div>
      </BrowserRouter>

  );
}

export default App;
