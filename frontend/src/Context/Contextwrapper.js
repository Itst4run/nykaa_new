import React, { useState, useEffect } from 'react';
import UserContext from './ContextCreater';
import FilterContext from './FilterContext';
import data from '../components/NykaaProduct/data';
import CartContext from './CartContext';

export default function ContextWrapper({ children }) {
  const [user, setuser] = useState('');
  const [products, setproducts] = useState([]);
  const [linkNykaa, setlinkNykaa] = useState('');
  const [linkPlum, setLinkPlum] = useState('');
  const [linkDove,setLinkDove] = useState('');
  const[linkGarnier,setLinkGarnier] = useState('');
  const [linkLakme,setLinkLakme] = useState('');
  const [linkCombine,setLinkCombine] = useState('');

  //filter state nykaa product
  const [showbar, setShowbar] = useState(false);
  function handlechange(e) {
    let { value } = e.target;
    console.log(value);
    if (value == '') {

      setlinkNykaa('');
      setLinkPlum('');
      setLinkDove('');
      setLinkGarnier('');
      setLinkLakme('');
      setLinkCombine('');
      setShowbar(false);
    }
    //    setstr(value);
    //    console.log(str);
    search(value)
    setuser(value)
  
  }


  function search(str) {
    if (str == 'nykaa') {
      setlinkNykaa(str);
      setShowbar(true)
    }
    else if (str == 'plum') {
      setLinkPlum(str);
      setShowbar(true);
    }
    else if(str=='garnier'){
      setLinkGarnier(str);
      setShowbar(true);
    }else if(str=='lakme'){
      setLinkLakme(str);
      setShowbar(true);

    }else if(str=='dove'){
      setLinkDove(str);
      setShowbar(true);
    } else if(str=='all'){
      setLinkCombine(str);
      setShowbar(true);
    } else{
      setShowbar(false);
    }
  }
  // function filtering(str) {
  //   let filteredArray = data.filter((ele) => {
  //     if (ele.brand.toLowerCase() == 'nykaa') {
  //       setlinkNykaa(ele.brand)
  //       setShowbar(true)
  //     }

  //   })
  // }
  function handleclick(){
    setShowbar(false)
  }


  const [cart, setCart] = useState([])
  function addToCart(id, name, price,image,category,brand,countInStock){
    let search = cart.find(item=> item.id === id);
    if(search.countInStock > search.countInCart +1){
      search.countInCart += 1;
      setCart([...cart])
    }else{
      cart.push({
        id,
        name,
        price,
        category,
        brand,
        countInCart: 1
      })
      setCart([...cart])
    }
  }


  return (
    <CartContext.Provider value={{cart}}>
    <FilterContext.Provider value={{ handlechange, showbar, linkNykaa, linkPlum,linkDove,linkLakme,linkGarnier,linkCombine,user,handleclick,data }}>
      <UserContext.Provider value={{ user, setuser, products, setproducts }}>
        {children}
      </UserContext.Provider>
    </FilterContext.Provider>
    </CartContext.Provider>
  )
}