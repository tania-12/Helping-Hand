import React, { useState } from "react";
import kitchen from "../images/soupkitchen.png";
import garden from "../images/garden.jpeg";
import sanitation from "../images/sanitation.jpeg";
import patagonia from "../images/patagonia.jpeg";
import logo from "../images/logo.png";
import prospect from "../images/prospect.png";
import park from "../images/nycparks.webp";
import zoo from "../images/queens_zoo.png";
import vet from "../images/canine.webp";
import "./menu.css";
console.log(logo);

export const Menu = (props) => {
    const [query,setQuery]= useState("");



    return(
        <div className = "menu" id="menu">
            <div className ="float-search">
                <input 
                    type="text"
                    onChange={e =>setQuery(e.target.value)}
                    placeholder="Search"
                    value={query}
                />
        </div>
            <h1 className =" heading"> </h1>
            <div className ="card-container">
            <div className ="card">
                    <div className ="content">
                    <img src = {sanitation} className="logo" alt="" ></img>
                    </div>
                    <div className = "space"></div>
                    <button className = "boss" onClick={(e) => {
                         e.preventDefault();
                        window.location.href='https://www.makecompost.nyc/mcnt-calendar/volunteer-manhattan-bhs76-6n73t-d6kb7-9alw7-rl2rj-y7xyz-bsak7-ajsmg-l5rwh-6d5c2-jnws7-mdgez-xhajm-dykxe-dczeb-haknt-aa9a9-27swc-xpxk8-fpa27-d3fzw-rc4fz-n7fpr-9c5nt-zzgs4-c77db-pesm6'}}>Sanitation</button>
                    <button className = "eventInfo">Date: 12/09/2022</button>
                    <button className ="accept" onClick={(e) => {
                        window.location.href='https://calendar.google.com/calendar/u/0/r/day/2022/12/9?cid=c3FtMnVkaTFhZGY2ZHM3Z2o5aDgxdHVldDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ'}}>Accept</button>
                </div>
                <div className ="card">
                    <div className ="content">
                    <img src = {patagonia} className="logo" alt="" ></img>
                    </div> 
                    <div className = "space"></div>
                    <button className = "boss" onClick={(e) => {
                         e.preventDefault();
                        window.location.href= 'https://www.patagonia.com/actionworks/events/111390/community-volunteer-landscaping-at-ridgewood-reservoir/'}}>Patagonia</button>
                    <button className = "eventInfo">Date:12/11/2022</button>
                    <button className ="accept" onClick={(e) => {
                        window.location.href='https://calendar.google.com/calendar/u/0/r/day/2022/12/11?cid=c3FtMnVkaTFhZGY2ZHM3Z2o5aDgxdHVldDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ'}}>Accept</button>                </div>
                <div className ="card">
                    <div className ="content">
                    <img src = {park} className="logo"  alt="" ></img>
                    </div> 
                    <div className = "space"></div>
                    <button className = "boss" onClick={(e) => {
                         e.preventDefault();
                        window.location.href='https://www.nycgovparks.org/events/2022/12/15/its-my-park-at-ralph-bunche-park';
                        }}>NYC Parks</button>
                    <button className = "eventInfo">Date: 12/15/2022 </button>
                    <button className ="accept" onClick={(e) => {
                        window.location.href='https://calendar.google.com/calendar/u/0/r/day/2022/12/15?cid=c3FtMnVkaTFhZGY2ZHM3Z2o5aDgxdHVldDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ'}}>Accept</button>                </div>
                <div className ="card">
                    <div className ="content">
                    <img class = "longImage" className = "logo" src = {logo} alt="" ></img>
                    </div>
                    <div className = "space"></div>
                    <button className = "boss" onClick={(e) => {
                         e.preventDefault();
                        window.location.href='https://www.bklynlibrary.org/calendar/east-new-york-reads-new-lots-library-20230103'}}>Brooklyn Library</button> 
                    <button className = "eventInfo">Date:01/03/2023</button>
                    <button className ="accept" onClick={(e) => {
                        window.location.href='https://calendar.google.com/calendar/embed?src=hema.muni2%40gmail.com&ctz=America%2FNew_York'}}>Accept</button>                </div>
    
                <div className ="card">
                    <div className ="content">
                    <img className = "logo" src = {kitchen}  alt="" ></img>
                    </div>  
                    <div className = "space"></div>
                    <button className = "boss" onClick={(e) => {
                         e.preventDefault();
                        window.location.href='https://holyapostlesnyc.org/event/soup-kitchen-meal-service/2023-01-04/'}}>Holy Apostles</button>
                    <button className = "eventInfo">Date: 01/04/2023</button>
                    <button className ="accept" onClick={(e) => {
                        window.location.href='https://calendar.google.com/calendar/embed?src=hema.muni2%40gmail.com&ctz=America%2FNew_York'}}>Accept</button>                </div>
               
                <div class="card">
                    <div className ="content">
                    <img src = {prospect} className="logo" alt="" ></img>
                    </div> 
                    <div className = "space"></div>
                    <button className = "boss" onClick={(e) => {
                         e.preventDefault();
                        window.location.href='https://www.prospectpark.org/get-involved/volunteer/volunteer-event-registration/'}}>Prospect Park</button> 
                    <button className = "eventInfo">Date: 01/11/2023</button>
                    <button className ="accept" onClick={(e) => {
                        window.location.href='https://calendar.google.com/calendar/embed?src=hema.muni2%40gmail.com&ctz=America%2FNew_York'}}>Accept</button>                </div>
                <div className ="card">
                    <div className = "content">
                    <img src = {zoo} className="logo" alt="" ></img>
                    </div>  
                    <div className = "space"></div>
                    <button className = "boss" onClick={(e) => {
                         e.preventDefault();
                        window.location.href='https://queenszoo.com/teens/teen-volunteer-program'}}>WCS</button>
                    <button className = "eventInfo">Date: 01/15/2023</button>
                    <button className ="accept" onClick={(e) => {
                        window.location.href='https://calendar.google.com/calendar/embed?src=hema.muni2%40gmail.com&ctz=America%2FNew_York'}}>Accept</button>                </div>
                <div className ="card">
                    <div className ="content">
                    <img className = "logo" src = {vet}  alt="" ></img>
                    </div>  
                    <div className = "space"></div>
                    <button className = "boss" onClick={(e) => {
                         e.preventDefault();
                        window.location.href='https://www.nyp.org/brooklyn/volunteer-opportunities/volunteer-programs/canine-cuddlers'}}>NYP</button>
                    <button className = "eventInfo">Date: 01/24/2023</button>
                    <button className ="accept" onClick={(e) => {
                        window.location.href='https://calendar.google.com/calendar/embed?src=hema.muni2%40gmail.com&ctz=America%2FNew_York'}}>Accept</button>                </div>
                <div className ="card">
                    <div className ="content">
                    <img className = "logo" src = {garden}  alt="" ></img>
                    </div>  
                    <div className = "space"></div>
                    <button className = "boss" onClick={(e) => {
                         e.preventDefault();
                        window.location.href='https://holyapostlesnyc.org/event/soup-kitchen-meal-service/2023-01-04/'}}>QBG</button>
                    <button className = "eventInfo">Date: 01/30/2023</button>
                    <button className ="accept" onClick={(e) => {
                        window.location.href='https://calendar.google.com/calendar/embed?src=hema.muni2%40gmail.com&ctz=America%2FNew_York'}}>Accept</button>                </div>
               
                    
            </div>
            
        </div> 
        
        )
}
export default Menu;