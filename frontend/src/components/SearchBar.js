import React, { useContext } from 'react';
import FilterContext from '../Context/FilterContext';

export default function SearchBar() {
    // let {filter,setFilter}   = useContext(FilterContext)
  return(
    <div>
    <input className='search' 
     type="search" 
      
      />
    </div>
  ) 
}
