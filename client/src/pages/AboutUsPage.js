import React from "react";
import zakiaImage from "./zakia.png";

function AboutUsPage(props) {

  return (
    <>
      <div className="col text-center">
        <h2 className="mb-3">Helping Hand</h2>
        <p className="mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          quidem adipisci nobis quia eum quaerat quos ducimus, deleniti
          exercitationem animi itaque iste illo reiciendis vitae atque
          necessitatibus voluptatum repellendus quisquam?
        </p>
        <h2 className="mb-3">The Helping Zone</h2>
        <div className="row">
          <div className="col-lg-4">
            <h3>Tania Sacoto</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Dignissimos in itaque nihil consectetur qui natus similique
              nostrum molestias, ipsa explicabo hic impedit aspernatur. Ipsa
              provident neque culpa alias incidunt amet.
            </p>
          </div>
          <div className="col-lg-4">
            <h3>Hema Muni</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Dignissimos in itaque nihil consectetur qui natus similique
              nostrum molestias, ipsa explicabo hic impedit aspernatur. Ipsa
              provident neque culpa alias incidunt amet.
            </p>
          </div>
          <div className="col-lg-4">
          <img src = {zakiaImage} class="zakia" alt="" ></img>
            <h3>Zakia Khan</h3>
            <p>
              I am a senior at Brooklyn College. Currently majoring in Computer Science.
            </p>
          </div>
        </div>
      </div>

    </>
  );
}

export default AboutUsPage;
