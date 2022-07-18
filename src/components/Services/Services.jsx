import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Cards from '../Cards/Card'
function Services() {
  return (
    <div className="services">
      {/* left side */}
      <div className="awesome">
        <span> My Awesome</span>
        <span>Services</span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.laudantium
          libero
          <br />
          mollitia, ea modi et reprehenderit quisquam eveniet.
        </span>
        <button className="button s-button">Download CV</button>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className="cards">
        <div style={{left: '14rem'}}>
          <Cards
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop,Adobe"}
          />
        </div>
        {/* card 2 */}
        <div style={{top: "12rem", left: "-4rem"}}>
         <Cards
          emoji={Glasses}
          heading={"Developer"}
          detail={"Html, Css, JavaScript, React"}
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
