import React,{useState} from 'react';
import UserContext from './ContextCreater';
import FilterContext from './FilterContext';
import data from '../components/NykaaProduct/data';
import { data1 } from '../components/PlumProduct/data1';
export default function ContextWrapper({children}) {
   const[user,setuser]=useState(null);
   const[products,setproducts]= useState([]);
    const[filter,setFilter] = useState(data) ;//filter state nykaa product
    const[filter2,setFilter2]=useState(data1);
      function handlechange(e){
       let {value}=e.target;
       console.log(value);
    //    setstr(value);
    //    console.log(str);
        search(value);
        searchPLum(value);
   }

//    ********************************************************************************************
    function search(value){
       let productfilter = data.filter((ele)=>{
        return ele.name.toLowerCase().includes(value.toLowerCase())
      })
      console.log(productfilter);
      setFilter(productfilter);
    }
    function searchPLum(value){
       let productfilter = data1.filter((ele)=>{
        return ele.name.toLowerCase().includes(value.toLowerCase())
      })
      console.log(productfilter);
      setFilter2(productfilter);
    }
    
  
   return(
       <FilterContext.Provider value={{filter,setFilter,handlechange,filter2,setFilter2}}>
       <UserContext.Provider value={{user,setuser,products,setproducts}}>
           {children}
       </UserContext.Provider>
       </FilterContext.Provider>
   ) 
}