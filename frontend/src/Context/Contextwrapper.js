import React,{useState} from 'react';
import UserContext from './ContextCreater';
import FilterContext from './FilterContext';

export default function ContextWrapper({children}) {
   const[user,setuser]=useState(null);
   const[products,setproducts]= useState([]);
   const[filter,setFilter] = useState("") 
   return(
       <FilterContext.Provider value={{filter,setFilter}}>
       <UserContext.Provider value={{user,setuser,products,setproducts}}>
           {children}
       </UserContext.Provider>
       </FilterContext.Provider>
   ) 
}