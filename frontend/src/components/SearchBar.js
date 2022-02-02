import React, { useContext,useState } from 'react';
import FilterContext from '../Context/FilterContext';
import data from './NykaaProduct/data';

export default function SearchBar() {
    let {handlechange}   = useContext(FilterContext)
    
  //  const [str,setstr]=useState("")

 

    
  return(
    <div>
    <input className='search' 
     type="search"
     onChange={handlechange} 
     
      />
    </div>
  ) 
}
