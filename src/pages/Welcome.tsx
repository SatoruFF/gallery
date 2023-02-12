import React from "react";
import portret from "../assets/portret.jpg";
import Gallery from "../components/Gallery";
import "../style/welcome.scss";


const Welcome = () => {
  return (
    <div className="welcome__wrapper">
      <div className="firstSlide">
        <div className="leftSide">
          {" "}
          <img src={portret} alt="Avatar" />
        </div>
        <div className="rightSide">
          <div className="title animate__animated animate__fadeInUp">
            <p>
              My name is <span>Nail Khalikov</span> and this is my site portfolio. <br />
              At the moment I am interested in architecture and design and I can
              help you with this.
            </p>
          </div>
        </div>
      </div>
      <div className="secondSlide">
        <Gallery/>
      </div>
    </div>
  );
};

export default Welcome;
