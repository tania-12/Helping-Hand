import React from "react";
import zakiaImage from "../images/zakia.png";
import hemaImage from "../images/hema.png";
import tania from "./womanicon.png";

function AboutUsPage(props) {

  return (
    <>
      <div className="col text-center">
        <h2 className="mb-3">The Helping Zone</h2>
        <p className="mb-5">
        <h5>Let's meet the team!</h5>
        </p>
        <div className="row">
          <div className="col-lg-4">
           <img src = {tania} class="tania" alt="" ></img>
            <h3>Tania Sacoto</h3>
            <p>
              I am a senior Queens College. I am currently majoring in Computer Science with a minor in Interaction Design.
            </p>
          </div>
          <div className="col-lg-4">
          <img src = {hemaImage} class="hema" alt="" ></img>
            <h3>Hema Muni</h3>
            <p>
              I am a senior at Queens College. I am currently majoring in Computer Science.
            </p>
          </div>
          <div className="col-lg-4">
          <img src = {zakiaImage} class="zakia" alt="" ></img>
            <h3>Zakia Khan</h3>
            <p>
              I am a senior at Brooklyn College. I am currently majoring in Computer Science.
            </p>
          </div>
        </div>
      </div>

    </>
  );
}

export default AboutUsPage;
