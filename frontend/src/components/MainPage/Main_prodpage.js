import React, { useContext } from 'react';
import "./Main_prodpage.css";
import Layout from '../Layout';
import { useParams } from 'react-router-dom';
// import data from '../NykaaProduct/data';
import FilterContext from '../../Context/FilterContext';

export default function Main_prodpage() {
    let{id}=useParams();
    console.log("useparam ka id",id);
   const {data}= useContext(FilterContext)
   let filteredArray =data.filter((ele)=>ele._id==id);
   console.log(filteredArray);
   console.log(data);
    return (
        <Layout>
            {
             
            }
            <div className="prodpage">
               {
                   filteredArray.map((ele)=>(
                    <div className="box">
                    <div className="left">
                        <div ><img className='image' src={ele.image} height={30}/></div>
                    </div>
                    <div className="right">
                        <div className="div1">
                            <div className="name">{ele.name}</div>
                            {/* <div className='rating'><h2>Brand: &nbsp;{ele.brand} </h2></div> */}
                            <div className="rating"><h2>RATING : {ele.rating}</h2></div>
                            <div className="price"><h2>Price: &nbsp;₹{ele.price} </h2> <br /><br /><br />inclusive of all taxes</div>
                            <div className="detail">

                                <div className="btn1">
                                    <button className='add'>ADD TO BAG</button>
                                </div>
                                <div className="abcd">
                                    <div className="lines">
                                        <img src='/images/tick.png' height={25} />Cash On Delivery Available

                                    </div>
                                    <div className="lines">
                                        <img src='/images/tick.png' height={25} />Cash On Delivery Available

                                    </div>
                                    <div className="lines">
                                        <img src='/images/tick.png' height={25} /> Quality check

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="div2">
                            <div className="txt"><img src='/images/product.png' height={15} /> &nbsp;100% GENUINE PRODUCT</div>
                            <div className="txt"><img src='/images/return.png' height={15} />&nbsp; EASY RETURNS</div>
                            <div className="txt">SOLD BY: NAYKAA E RETAIL..</div>
                        </div>
                    </div>


                </div>
                   ))
               }
            </div>
        </Layout>

    )
}


