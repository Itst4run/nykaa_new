
import React,{useEffect, useState} from 'react';
import axios from "axios";
import './Signin.css';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';


export default function Signin() {

  useEffect(() =>{
    console.log("rerender");
  },[])

  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailcheak, setEmailCheak] = useState(false)
  const [passwordcheak, setPasswordCheak ] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState('')
  const [confirmPasswordCheck, setConfirmPasswordCheck] = useState(false)
  const [error, setError] = useState(false)

  const handleLogin = async(e) => {
    e.preventDefault();
    // console.log('email:', email);
    // console.log('password:', password);
    
    if(!email.includes('@') || !email.includes('.')){
      setEmailCheak("Please Enter Correct Email")
      return;
    } else
    {
      setEmailCheak(false)
    }
    if (password !== confirmPassword) {
      setConfirmPasswordCheck("Password doesn't match");
      return;
  }
    if(password.length<6){
      setPasswordCheak("Password length must be greater than 6")
      return;
    }
     else {
     setPasswordCheak(false)
    }
    let responseData = await axios.post("http://localhost:8080/api/signup", {
      username:email,
      password
    })
    console.log("responseData", responseData.data);
    if(responseData.data.success == 1){
        navigate("/");
    }
    else{
      setError(responseData.data.message)
    }

  }
  return (
  
        <div className='signin' style={{border:"1px solid gray", width:"380px", margin:"20px 200px 80px 500px", borderRadius:"10px","background-color":" rgb(243,243,243)"}}>
          
          {/* { error && <div style={{color:"red"}}>
            {error}</div>} */}

          <div className='signin1'>
          <Link to="/"><div className='cut'><img src='images/close.svg'/></div></Link>
          <h1 >Signup</h1>
         
          <input type="text" placeholder='enter your email' onChange={(e) => setEmail(e.target.value)}
          style={{width:"300px",height:"30px",  fontWeight:"bolder", borderRadius:"5px"}}/>
         
          <input type="password" placeholder='enter your password' onChange={(e) => setPassword(e.target.value)}
          style={{width:"300px",height:"30px", fontWeight:"bolder", borderRadius:"5px", margin:"20px 0px 10px"}}/>

          <input type="password" placeholder='enter your confirm password' onChange={(e) => setConfirmPassword(e.target.value)}
          style={{width:"300px",height:"30px", fontWeight:"bolder", borderRadius:"5px", margin:"20px 0px 10px"}}/>
          
          <div style={{color:"red"}}>
          { emailcheak && <span>{emailcheak}</span>}
          { passwordcheak && <span>{passwordcheak}</span>}
          {confirmPasswordCheck && <span>{confirmPasswordCheck}</span>}
          </div>

          <button onClick={handleLogin}
          style={{width:"310px",height:"40px", backgroundColor:"rgb(252,39,121)",  fontWeight:"bolder", borderRadius:"5px"}}>
          Signup</button>


          <p>Already have an account? <Link to="/signin">signin</Link></p>
          </div>
        </div>
  
  );
}
