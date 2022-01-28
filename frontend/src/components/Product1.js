import React from 'react';
import styles from "../styles/Product1.module.css"
export default function Product1() {
  return(
      <div className="productall" > 
       <div className={styles.page}>
  <div className={styles.product1}>
      <img src="images/p1.gif" className={styles.p1} />
  </div>
    {/* <div className={styles.txt1}>TOP BRANDS</div>  */}
    <span className={styles.topb}>TOP BRANDS </span>
  <div className={styles.topbrand}>
      <img src='images/p2.gif' className={styles.p2}/>
      <img src='images/p3.jpg' className={styles.p3}/>
      <img src='images/p4.jpg' className={styles.p4}/>
      <img src='images/p5.jpg' className={styles.p5}/>
      <div className={styles.txt2}style={{"margin-left":"510px","padding":"20px"}}>ONLY AT NYKAA</div>
      <img src='images/p6.jpg' className={styles.p6}/>
      <img src='images/p7.jpg' className={styles.p7}/>
      <img src='images/p8.jpg' className={styles.p8}/>
      <img src='images/p10.jpg' className={styles.p10}/>
      <img src='images/p9.gif' className={styles.p9}/>
  </div> 
  </div> 
    </div> 

  
  
  )}
