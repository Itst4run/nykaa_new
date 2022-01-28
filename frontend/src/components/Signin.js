import React from 'react';
import './Signin.css';
export default function Signin() {
  return (
  
        <div className='signin' style={{border:"1px solid gray", width:"380px", margin:"60px 200px 80px 560px", borderRadius:"10px","background-color":" rgb(243,243,243)"}}>
          <div className='signin1'>
          <h1 >Sign in</h1>
          <p>To quickly find your favourites items,<br/> saved addresses and payments.</p>
          <hr/>
          <p>Register and earn 2000 reward points</p>
          <img src='images/gift1.svg' alt='image' style={{width:"50px", padding:"5px"}}/>
          <img src='images/gift2.svg' alt='image' style={{width:"100px", padding:"10px"}}/>
          <img src='images/lipstick.svg' alt='image' style={{width:"50px", padding:"10px"}}/>
          <img src='images/gift3.svg' alt='image' style={{width:"50px", padding:"10px"}} />
          <button style={{width:"300px",height:"40px", border:"1px solid black", background:"rgb(252,39,121)", fontWeight:"bold"}}>Enter Your Number or Email</button>

          {/* <button style={{width:"300px", border:"1px solid black", height:"40px"}} >
          <img src='image/googleicon.png'  style={{width:"30px"}} />Google</button> */}

          <p>By continuing, you agree that you have read<br/> and accept our <u>T&Cs</u> and <u>Privacy Policy</u>.</p>
          </div>
        </div>
  
  );
}
