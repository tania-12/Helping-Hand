import React from "react";
import { GrPersonalComputer } from "react-icons/gr";
import { GoMarkGithub } from "react-icons/go";
import zakiaImage from "../images/zakia.png";
import hemaImage from "../images/hema.png";
import tania from "./womanicon.png";

function AboutUsPage(props) {

  return (
    <>
      <div className="col text-center">
        <h1 className="mb-3 aboutTitle">The Helping Zone</h1>
        <p className="mb-5">
          <h5 className="aboutSubTitle">Let's meet the team!</h5>
        </p>
        <div className="row aboutRow">
          <div className="col-lg-4 aboutCard">
            <img src={tania} class="tania" alt="" ></img>
              <div className="space"></div>
              <div className="space"></div>
              <h3>Tania Sacoto</h3>
              <p>
                I am a senior Queens College. I am majoring in Computer Science with a minor in Interaction Design.
              </p>
              <div className = "aboutLinks">
              <a className="iconLink" href="https://github.com/tania-12">
                <GoMarkGithub className="icon" />
              </a>
              <a className = "iconLink" href="">
                <GrPersonalComputer className = "icon" />
              </a>
              </div>
          </div>
          <div className="col-lg-4 aboutCard">
            <img src={hemaImage} class="hema" alt="" ></img>
              <div className="space"></div>
              <div className="space"></div>
              <h3>Hema Muni</h3>
              <p>
                I am a senior at Queens College. I am currently majoring in Computer Science.
              </p>
              <a className="iconLink" href="https://github.com/hemasphere">
                <GoMarkGithub className="icon" />
              </a>
          </div>
          <div className="col-lg-4 aboutCard">
            <img src={zakiaImage} class="zakia" alt="" ></img>
              <div className="space"></div>
              <h3>Zakia Khan</h3>
              <p>
                I am a senior at Brooklyn College. I am currently majoring in Computer Science.
              </p>
              <a className="iconLink" href="https://github.com/Zkhan601">
                <GoMarkGithub className="icon" />
              </a>
          </div>
        </div>
        <div className="space"></div>
        <div className="space"></div>=
      </div>
    </>
  );
}

export default AboutUsPage;
