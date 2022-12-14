import React, { useState } from "react";
import {postData} from "../service/postUserData";
import { Link } from 'react-router-dom';

export const Register = (props) => {
    const [email, setEmail] = useState ('');
    const [pass, setPass] = useState ('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const {name, email, password} = e.target.elements;
        const payload = {"name": name.value, "email": email.value, "password": password.value}
        const result = postData("/api/user_data/register", payload)
        console.log("result", result);
    }
    return (
      <div className = "container container-full1">
      <div className = "auth-form-container" class = "register">
        <h2>Register</h2>
      <form className = "register-form" onSubmit = {handleSubmit}>
          <label className = "formTitles" htmlFor = "name">Full Name</label>
          <input value = {name} onChange = {(e) => setName(e.target.value)} name = "name" id = "name" placeholder = "Full Name" />
          <label className = "formTitles" htmlFor = "email"> Email </label>
          <input value = {email} onChange = {(e) => setEmail(e.target.value)} type = "email" placeholder = "yourEmail@email.com" name = "email"/>

          <label className = "formTitles" htmlFor = "password"> Password </label>
          <input value = {pass} onChange = {(e) => setPass(e.target.value)}  type = "password" placeholder = "******" name = "password"/>
          <Link to = "/Profile">
              <button className = "regLogButton" type = "submit"> Register</button>
          </Link>
      </form>
      <label className = "formTitles" htmlFor = "login"> Already have an account? </label>
      <Link to = "/Login"> 
        <button class = "loginLink" className = "link-btn" type = "login">Login</button>
      </Link>   
        
    </div>  
    <div className = "block2">
    </div>
    </div>
    )
}