import SimpleImageSlider from "react-simple-image-slider";
import React from 'react';

export default function Slider() {
    const images = [
        { url: "images/s1.jpg"},
        { url: "images/s2.jpg" },
        { url: "images/s3.jpg" },
        { url: "images/s4.gif" },
        { url: "images/s5.jpg" },
        { url: "images/s6.gif" },
        { url: "images/s7.jpg" },
      ];

      
      
  return (
    <div>
    <SimpleImageSlider
      width={1518}
      height={400}
      images={images}
      showBullets={true}
      showNavs={true}
    
    />
  </div>
  );
}
