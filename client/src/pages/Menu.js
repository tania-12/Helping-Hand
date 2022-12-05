import React, { useState } from "react";
import logo from "./icon.png";
import "./menu.css";
console.log(logo);

export const Menu = (props) => {
const [query,setQuery]= useState("");
return(
<div class = "menu" id="menu">
    <div class="float-search">
        <input 
            type="text"
            onChange={e =>setQuery(e.target.value)}
            placeholder="Search"
            value={query}
        />
    </div>
    <h1 class ="heading"></h1>
    <div class="box-container">
        <div class="box">
            <div class="content">
                <img src = {logo} classname="logo" alt="" ></img>
            </div>  
                <button class ="boss" onclick="flipCard(this)">Organizer</button>
            <button class = "eventInfo">More Information</button>
            <button class ="accept">Accept</button>  
        </div>
        <div class="box">
            <div class="content">
            <img src = {logo} classname="logo"  alt="" ></img>
            </div> 
            <button class = "boss">Organizer</button>
            <button class = "eventInfo">More Information</button>
            <button class ="accept">Accept</button>  
        </div>
        <div class="box">
            <div class="content">
            <img src = {logo} classname="logo" alt="" ></img>
            </div>
            <button class = "boss">Organizer</button>
            <button class = "eventInfo">More Information</button>
            <button class ="accept">Accept</button> 
        </div>
        <div class="box">
            <div class="content">
            <img src = {logo} classname="logo" alt="" ></img>
            </div> 
            <button class = "boss">Organizer</button>
            <button class = "eventInfo">More Information</button>
            <button class ="accept">Accept</button>   
        </div>
        <div class="box">
            <div class="content">
            <img src = {logo} classname="logo" alt="" ></img>
            </div>  
            <button class = "boss">Organizer</button>
            <button class = "eventInfo">More Information</button>
            <button class ="accept">Accept</button>  
        </div>
        <div class="box">
            <div class="content">
            <img src = {logo} classname="logo" alt="" ></img>
            </div>
            <button class = "boss">Organizer</button>
            <button class = "eventInfo">More Information</button>
            <button class ="accept">Accept</button> 
        </div>
        <div class="box">
            <div class="content">
            <img src = {logo} classname="logo" alt="" ></img>
            </div> 
            <button class = "boss">Organizer</button> 
            <button class = "eventInfo">More Information</button>
            <button class ="accept">Accept</button> 
        </div>
        <div class="box">
            <div class="content">
            <img src = {logo} classname="logo" alt="" ></img>
            </div>  
            <button class = "boss">Organizer</button>
            <button class = "eventInfo">More Information</button>
            <button class ="accept">Accept</button> 
        </div>
        <div class="box">
            <div class="content">
            <img src = {logo} classname="logo" alt="" ></img>
            </div>  
            <button class = "boss">Organizer</button>
            <button class = "eventInfo">More Information</button>
            <button class ="accept">Accept</button> 
        </div>
        
        
    </div>
    
</div> 

)
}
export default Menu;