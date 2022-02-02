import React from 'react';
import { Link } from 'react-router-dom';

import styles from "../styles/Product1.module.css"
export default function Product1() {
  return(
      <div className="productall" > 
       <div className={styles.page}>
  <div className={styles.product1}>
      <img src="images/p1.jpg" className={styles.p1} />
  </div>
    {/* <div className={styles.txt1}>TOP BRANDS</div>  */}
    <span className={styles.topb}>TOP BRANDS </span>
  <div className={styles.topbrand}>
     <Link to="/product"><img src='images/p2.gif' className={styles.p2}/></Link>
      <Link to="/plum"><img src='images/p3.jpg' className={styles.p3}/></Link>
      <Link to="/dove"><img src='images/p4.jpg' className={styles.p4}/></Link>
      <Link to="/garnier"><img src='images/p5.jpg' className={styles.p5}/></Link>
      <div className={styles.txt2}style={{"margin-left":"510px","padding":"20px"}}>ONLY AT NYKAA</div>
      <Link to="/lakme"><img src='images/p6.jpg' className={styles.p6}/></Link>
      <Link to="/combine"><img src='images/p7.jpg' className={styles.p7}/></Link>
      <Link to="/combine"><img src='images/p8.jpg' className={styles.p8}/></Link>
      <Link to="/combine"><img src='images/p10.jpg' className={styles.p10}/></Link>
      <Link to="/combine"><img src='images/p9.gif' className={styles.p9}/></Link>
       <Link to='main-prodpage' src='add-to'></Link>
  </div> 
  </div> 
    </div> 

  
  
  )}
