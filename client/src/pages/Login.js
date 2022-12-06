import React, { useState } from "react";
import {postData} from "../service/postUserData";
import { Link } from 'react-router-dom';


export const Login = (props) => {
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
    <div class = "container container-full">
      <div class = "cell" >
        <div class = "text"> Ready to Lend a Hand? </div>
        <div class = "waveHolder">
          <div class="wave"></div>
        </div>
      </div>
      
      <div class = "cell1">
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
          
          <label class = "formTitles" htmlFor = "register"> Don't have an account? </label>
        <Link to = "/Register"> 
          <button class = "registerLink" className = "link-btn" type = "register" >Register</button>
        </Link> 
      </div> 
    </div>  
  </div>
      
  )
}