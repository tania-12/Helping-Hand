import React, { useState } from "react";
import logo from "./icon.png";
import "./menu.css";
console.log(logo);

export const Menu = (props) => {
const [query,setQuery]= useState("");

    var gapi = window.gapi
    /*
      Update with your own Client Id and Api key
    */
    var CLIENT_ID = "876081239982-50egqcmmu14vi3hqi2oiokn4ppp0nvmj.apps.googleusercontent.com"
    var API_KEY = "AIzaSyAofONKNlfNUoshxkXuUotPuYVmyP_Dayo"
    var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
    var SCOPES = "https://www.googleapis.com/auth/calendar.events"

    const handleClick = () => {
        gapi.load('client:auth2', () => {
            console.log('loaded client')

            gapi.client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                discoveryDocs: DISCOVERY_DOCS,
                scope: SCOPES,
            })

            gapi.client.load('calendar', 'v3', () => console.log('bam!'))

            gapi.auth2.getAuthInstance().signIn()
                .then(() => {

                    var event = {
                        'summary': 'Awesome Event!',
                        'location': '800 Howard St., San Francisco, CA 94103',
                        'description': 'Really great refreshments',
                        'start': {
                            'dateTime': '2020-06-28T09:00:00-07:00',
                            'timeZone': 'America/Los_Angeles'
                        },
                        'end': {
                            'dateTime': '2020-06-28T17:00:00-07:00',
                            'timeZone': 'America/Los_Angeles'
                        },
                        'recurrence': [
                            'RRULE:FREQ=DAILY;COUNT=2'
                        ],
                        'attendees': [
                            {'email': 'lpage@example.com'},
                            {'email': 'sbrin@example.com'}
                        ],
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                {'method': 'email', 'minutes': 24 * 60},
                                {'method': 'popup', 'minutes': 10}
                            ]
                        }
                    }

                    var request = gapi.client.calendar.events.insert({
                        'calendarId': 'primary',
                        'resource': event,
                    })

                    request.execute(event => {
                        console.log(event)
                        window.open(event.htmlLink)
                    })


                    /*
                        Uncomment the following block to get events
                    */
                    /*
                    // get events
                    gapi.client.calendar.events.list({
                      'calendarId': 'primary',
                      'timeMin': (new Date()).toISOString(),
                      'showDeleted': false,
                      'singleEvents': true,
                      'maxResults': 10,
                      'orderBy': 'startTime'
                    }).then(response => {
                      const events = response.result.items
                      console.log('EVENTS: ', events)
                    })
                    */


                })
        })
    }



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
                <button class ="boss">Organizer</button>
            <button class = "eventInfo">More Information</button>
            <button class = "accept" onClick={handleClick}>Accept</button>

        </div>
        <div class="box">
            <div class="content">
            <img src = {logo} classname="logo"  alt="" ></img>
            </div> 
            <button class = "boss">Organizer</button>
            <button class = "eventInfo">More Information</button>
            <button class = "accept" onClick={handleClick}>Accept</button>
        </div>
        <div class="box">
            <div class="content">
            <img src = {logo} classname="logo" alt="" ></img>
            </div>
            <button class = "boss">Organizer</button>
            <button class = "eventInfo">More Information</button>
            <button class ="accept" onClick={handleClick}>Accept</button>
        </div>
        <div class="box">
            <div class="content">
            <img src = {logo} classname="logo" alt="" ></img>
            </div> 
            <button class = "boss">Organizer</button>
            <button class = "eventInfo">More Information</button>
            <button class ="accept" onClick={handleClick}>Accept</button>
        </div>
        <div class="box">
            <div class="content">
            <img src = {logo} classname="logo" alt="" ></img>
            </div>  
            <button class = "boss">Organizer</button>
            <button class = "eventInfo">More Information</button>
            <button class ="accept" onClick={handleClick}>Accept</button>
        </div>
        <div class="box">
            <div class="content">
            <img src = {logo} classname="logo" alt="" ></img>
            </div>
            <button class = "boss">Organizer</button>
            <button class = "eventInfo">More Information</button>
            <button class ="accept" onClick={handleClick}>Accept</button>
        </div>
        <div class="box">
            <div class="content">
            <img src = {logo} classname="logo" alt="" ></img>
            </div> 
            <button class = "boss">Organizer</button> 
            <button class = "eventInfo">More Information</button>
            <button class ="accept" onClick={handleClick}>Accept</button>
        </div>
        <div class="box">
            <div class="content">
            <img src = {logo} classname="logo" alt="" ></img>
            </div>  
            <button class = "boss">Organizer</button>
            <button class = "eventInfo">More Information</button>
            <button class ="accept" onClick={handleClick}>Accept</button>
        </div>
        <div class="box">
            <div class="content">
            <img src = {logo} classname="logo" alt="" ></img>
            </div>  
            <button class = "boss">Organizer</button>
            <button class = "eventInfo">More Information</button>
            <button class ="accept" onClick={handleClick}>Accept</button>
        </div>
        
        
    </div>
    
</div> 

)
}
export default Menu;