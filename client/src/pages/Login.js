import React, { useState } from "react";


export const Login = (props) => {
  const [email, setEmail] = useState ('');
  const [pass, setPass] = useState ('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }
  return (
    <div class = "container container-full">
      <div class = "cell" >
        <div class = "text"> Ready to Lend a Hand? </div>
        <div class="wave"></div>
      </div>
      
      <div class = "cell1">
        <div className = "auth-form-container">
          <h2>Log In</h2>
          <form className = "login-form" onSubmit = {handleSubmit}>
            <label htmlFor = "email"> Email </label>
            <input value = {email} onChange = {(e) => setEmail(e.target.value)} type = "email" placeholder = "yourEmail@email.com" name = "email"/>

            <label htmlFor = "password"> Password </label>
            <input value = {pass} onChange = {(e) => setPass(e.target.value)}  type = "password" placeholder = "******" name = "password"/>
            <button type = "submit"> Log In</button>
        </form>
          
          <label class = "formTitles" htmlFor = "register"> Don't have an account? </label>
        <button className = "link-btn" type = "register" onClick = {() => props.onFormSwitch('register')}>Register</button>
      </div> 
      </div>  
    </div>
      
  )
}