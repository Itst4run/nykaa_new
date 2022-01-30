import React from 'react';
import './App.css';
import Content from './components/Content';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Signin from './components/Signin';
import Product from './components/NykaaProduct/Productpage';
import PlumPage from './components/PlumProduct/PlumPage';
import DovePage from './components/DoveProduct/DovePage';
import GarnierPage from './components/GarnierProduct/GarnierPage';
import LakmePage from './components/LakmeProduct/LakmePage';
import CombinePage from './components/CombineProduct/CombinePage';
function App() {
  return (
    
    <BrowserRouter> 
    <div className="App">
     
      <Routes>
         <Route path="/" element={<Content/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path = "/product" element={<Product/>}/>
        <Route path = "/plum" element={<PlumPage/>}/>
        <Route path = "/dove" element={<DovePage/>}/>
        <Route path = "/garnier" element={<GarnierPage/>}/>
        <Route path ="/lakme" element={<LakmePage/>}/>
        <Route path = "/combine" element={<CombinePage/>}/>
        
      </Routes>
    </div>
      </BrowserRouter>

  );
}

export default App;
