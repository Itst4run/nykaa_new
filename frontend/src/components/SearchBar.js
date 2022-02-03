import React, { useContext,useState,useEffect } from 'react';
import FilterContext from '../Context/FilterContext';
import { Link } from 'react-router-dom';

export default function SearchBar() {
    let {handlechange,showbar,linkNykaa,linkPlum,user,handleclick,linkDove,linkLakme,linkGarnier,linkCombine}   = useContext(FilterContext)
    console.log(linkNykaa);
  //  const [str,setstr]=useState("")

 useEffect(()=>{

 },[user,linkPlum,linkNykaa])
 console.log(showbar);

    
  return(
    <div>
    <input className='search'

     type="search"
     onChange={handlechange} 
     
      />
       {
        showbar?<Link to="/product"><p onClick={handleclick}>{linkNykaa}</p></Link>:<p></p>
       }

        {
          showbar?<Link to="/plum"><p onClick={handleclick}>{linkPlum}</p></Link>:<p></p>
        }

         {
          showbar?<Link to="/dove"><p onClick={handleclick}>{linkDove}</p></Link>:<p></p>
        }
         {
          showbar?<Link to="/lakme"><p onClick={handleclick}>{linkLakme}</p></Link>:<p></p>
        }
         {
          showbar?<Link to="/garnier"><p onClick={handleclick}>{linkGarnier}</p></Link>:<p></p>
        }
         {
          showbar?<Link to="/combine"><p onClick={handleclick}>{linkCombine}</p></Link>:<p></p>
        }
    </div>
  ) 
}
