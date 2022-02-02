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
import Signup from './components/Signup';
import Main_prodpage from './components/Main_prodpage';
import ContextWrapper from './Context/Contextwrapper';
function App() {
  return (
    <ContextWrapper>
    <BrowserRouter> 
    <div className="App">
     
      <Routes>
         <Route path="/" element={<Content/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path = "/product" element={<Product/>}/>
        <Route path = "/plum" element={<PlumPage/>}/>
        <Route path = "/dove" element={<DovePage/>}/>
        <Route path = "/garnier" element={<GarnierPage/>}/>
        <Route path ="/lakme" element={<LakmePage/>}/>
        <Route path = "/combine" element={<CombinePage/>}/>
        <Route path="/product/:id" element={<Main_prodpage/>}/>
        <Route path="/plum/:id" element={<Main_prodpage/>}/>
        <Route path="/dove/:id" element={<Main_prodpage/>}/>
        <Route path="/garnier/:id" element={<Main_prodpage/>}/>
        <Route path="/lakme/:id" element={<Main_prodpage/>}/>
        <Route path="/combine/:id" element={<Main_prodpage/>}/>
      </Routes>
    </div>
      </BrowserRouter>
      </ContextWrapper>

  );
}

export default App;
