import React, { useState } from "react";
import {postData} from "../service/postUserData";

export const Register = (props) => {
    const [email, setEmail] = useState ('');
    const [pass, setPass] = useState ('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const {name, email, password} = e.target.elements;
        const payload = {"name": name.value, "email": email.value, "password": password.value}
        const result = postData("/register", payload)
        console.log("result", result);
    }
    return (
      <div class = "container container-full1">
      <div className = "auth-form-container" class = "register">
        <h2>Register</h2>
      <form className = "register-form" onSubmit = {handleSubmit}>
          <label class = "formTitles" htmlFor = "name">Full Name</label>
          <input value = {name} onChange = {(e) => setName(e.target.value)} name = "name" id = "name" placeholder = "Full Name" />
          <label class = "formTitles" htmlFor = "email"> Email </label>
          <input value = {email} onChange = {(e) => setEmail(e.target.value)} type = "email" placeholder = "yourEmail@email.com" name = "email"/>

          <label class = "formTitles" htmlFor = "password"> Password </label>
          <input value = {pass} onChange = {(e) => setPass(e.target.value)}  type = "password" placeholder = "******" name = "password"/>
          <button type = "submit"> Register</button>
      </form>
      <label class = "formTitles" htmlFor = "login"> Already have an account? </label>
      <button class = "loginLink" className = "link-btn" type = "login" onClick = {() => props.onFormSwitch('login')}>Login</button>
    </div>  
    </div>
    )
}