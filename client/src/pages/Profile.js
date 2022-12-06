import React, { useState } from "react";
import pic from "./profile.jpeg";
import Progress from "../components/Progress";
import 'bootstrap/dist/css/bootstrap.min.css';


console.log(pic);

function ProfilePage(props) {
   const [value, setValue] = useState(0);
   const [sum, setSum] = useState(0); 
   const [max, MaxValue] = useState(0);

   function currentValue (event){
     setValue(event.target.value);
   }
   function addHours (event){
     setSum(sum + Number(value));
     event.preventDefault();
   }
   function subHours (event){
     setSum(sum - Number(value));
     event.preventDefault();
   }
  return (
    <div class="row gutters-sm">
      <div class="col-md-4 mb-3">
        <div class="card">
          <div class="card-body">
            <div class="d-flex flex-column align-items-center text-center">
              <img src={pic} alt="Admin" class="rounded-circle" width="150" ></img>
              <div class="mt-3">
                <h4>John Doe</h4>
                <p class="text-secondary mb-1">Title</p>
                <p class="text-muted font-size-sm">Organization/School</p>
                <button class="btn btn-primary">Follow</button>
                <button class="btn btn-outline-primary">Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <div class="card mb-3">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Full Name</h6>
              </div>
              <div class="col-sm-9 text-secondary">
                John Doe
              </div>
            </div>
            <hr></hr>
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Email</h6>
              </div>
              <div class="col-sm-9 text-secondary">
                example@email.com
              </div>
            </div>
            <hr></hr>
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Phone</h6>
              </div>
              <div class="col-sm-9 text-secondary">
                (xxx) xxx-xxxx
              </div>
            </div>
            <hr></hr>
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Address</h6>
              </div>
              <div class="col-sm-9 text-secondary">
                Area, City, Country
              </div>
            </div>
            <hr></hr>
            <div class="row">
              <div class="col-sm-12">
                <a class="btn btn-info " target="__blank" href="">Edit</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row gutters-sm">
        <div class="col-sm-6 mb-3">
          <div class="card h-100">
            <div class="card-body">
              <h6 class="d-flex align-items-center mb-3"><i class="material-icons text-info mr-2">Progress Status</i></h6>
               <Progress />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
export default ProfilePage;
