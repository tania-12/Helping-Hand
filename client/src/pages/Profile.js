import React, { useState } from "react";
import pic from "../images/profile.jpeg";
import Chat from "../components/Chat";
import Progress from "../components/Progress";
import 'bootstrap/dist/css/bootstrap.min.css';


console.log(pic);

function ProfilePage(props) {
  return (
    <div className="row gutters-sm">
      <div className="col-md-4 mb-3">
        <div className="card">
          <div className="card-body">
            <div className="d-flex flex-column align-items-center text-center">
              <img src={pic} alt="Admin" className="rounded-circle" width="150" ></img>
              <div className="mt-3">
                <h4>John Doe</h4>
                <p className="text-secondary mb-1">Title</p>
                <p className="text-muted font-size-sm">Organization/School</p>
                <button className="btn btn-primary">Follow</button>
                <button className="btn btn-outline-primary" onClick ={Chat}>Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="card mb-3">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Full Name</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                John Doe
              </div>
            </div>
            <hr></hr>
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Email</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                example@email.com
              </div>
            </div>
            <hr></hr>
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Phone</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                (xxx) xxx-xxxx
              </div>
            </div>
            <hr></hr>
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Address</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                Area, City, Country
              </div>
            </div>
            <hr></hr>
            <div className="row">
              <div className="col-sm-12">
                <a className="btn btn-info " target="__blank" href="">Edit</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row gutters-sm">
        <div className="col-sm-6 mb-3">
          <div className="card h-100">
            <div className="card-body">
              <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">Progress Status</i></h6>
              <Progress />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfilePage;