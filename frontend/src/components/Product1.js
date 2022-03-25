import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Product1.module.css";

export default function Product1() {
  return (
    <div className="productall">
      <div className={styles.page}>
        <div style={{ marginTop: "50px" }}></div>
        <div className={styles.product1}>
          <img src="images/p1.jpg" className={styles.p1} />
        </div>
        <span className={styles.topb}>TOP BRANDS </span>
        <div className={styles.topbrand}>
          <Link to="/product">
            <div className={styles.topb1}>
              <img src="images/p2.gif" className={styles.p2} />
            </div>
          </Link>
          <Link to="/plum">
            <div className={styles.topb1}>
              <img src="images/p3.jpg" className={styles.p2} />
            </div>
          </Link>
          <Link to="/dove">
            <div className={styles.topb1} >
              <img src="images/p4.jpg" className={styles.p2} />
            </div>
          </Link>
          <Link to="/garnier">
            <div className={styles.topb1}>
              <img src="images/p5.jpg" className={styles.p2} />
            </div>
          </Link>
          <div
            className={styles.txt2}
            style={{ "margin-left": "510px", padding: "20px" }}
          >
            ONLY AT NYKAA
          </div>
          <div className={styles.topbrand}>
            <Link to="/lakme">
              <div className={styles.topb1}>
                <img src="images/p6.jpg" className={styles.p2} />
              </div>
            </Link>
            <Link to="/combine">
              <div className={styles.topb1}>
                <img src="images/p7.jpg" className={styles.p2} />
              </div>
            </Link>
            <Link to="/combine">
              <div className={styles.topb1}>
                <img src="images/p8.jpg" className={styles.p2} />
              </div>
            </Link>
            <Link to="/combine">
              <div className={styles.topb1}>
                <img src="images/p10.jpg" className={styles.p2} />
              </div>
            </Link>
          </div>
          <Link to="/combine">
            <div>
              <img src="images/p2.gif" className={styles.p3} />
            </div>
          </Link>
          {/* <Link to="main-prodpage" src="add-to"></Link> */}
        </div>
      </div>
    </div>
  );
}
