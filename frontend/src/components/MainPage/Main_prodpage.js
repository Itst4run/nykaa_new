import React from 'react';
import "./Main_prodpage.css";
import Layout from '../Layout';
export default function Main_prodpage() {
    return (
        <Layout>
            {/* console.log(Layout); */}
            <div className="prodpage">
                <div className="box">
                    <div className="left">
                        <div className="image"></div>
                    </div>
                    <div className="right">
                        <div className="div1">
                            <div className="name">name dssvjisfdivvksjn </div>
                            <div className="rating"><h2>Rating:</h2></div>
                            <div className="price"><h2>Price: &nbsp;₹ </h2> <br /><br /><br />inclusive of all taxes</div>
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
            </div>
        </Layout>

    )
}


