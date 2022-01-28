import React from 'react';
import styles from "../styles/Content.module.css"
import Product1 from './Product1';
import Slider from './Slider';

export default function Content() {
  return (
    <div><Slider/>
  <div className={styles.content}>
 

    <Product1/>
  </div>
  </div>
    )
}
