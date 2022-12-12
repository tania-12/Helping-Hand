import React, { useState } from "react";
import {postData} from "../service/postUserData";
import { Link } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";


export const Login = (props) => {
  const auth = useAuth();
  const [email, setEmail] = useState ('');
  const [pass, setPass] = useState ('');


  const handleSubmit = (e) => {
    e.preventDefault();
    const {email, password} = e.target.elements;
    const payload = {"email": email.value, "password": password.value}
    const result = postData("/api/user_data/login", payload)
    console.log("result", result);
  }

  return (
    <div className = "container container-full">
      <div className = "cell" >
        <div className = "text"> Ready to Lend a Hand? </div>
        <div className = "waveHolder">
          <div className="wave"></div>
        </div>
      </div>
      
      <div className = "cell1">
        <div className = "auth-form-container">
          <h2>Log In</h2>
          <form className = "login-form" onSubmit = {handleSubmit}>
            <label htmlFor = "email"> Email </label>
            <input value = {email} onChange = {(e) => setEmail(e.target.value)} type = "email" placeholder = "yourEmail@email.com" name = "email"/>

            <label htmlFor = "password"> Password </label>
            <input value = {pass} onChange = {(e) => setPass(e.target.value)}  type = "password" placeholder = "******" name = "password"/>
            <Link to = "/Profile">
              <button type = "submit"> Log In</button>
            </Link>

        </form>
          
          <label className = "formTitles" htmlFor = "register"> Don't have an account? </label>
        <Link to = "/Register"> 
          <button class = "registerLink" className = "link-btn" type = "register" >Register</button>
        </Link> 
      </div> 
    </div>  
  </div>
      
  )
}