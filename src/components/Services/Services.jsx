import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Cards from '../Cards/Card'
// import Resume from "../Resume/../resume.pdf";
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
        <a href="{Resume}" download>
        <button className="button s-button">Download CV</button>
        </a>
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
        {/* 3rd card */}
        <div style={{top: "19rem", left: "12rem"}}>
          <Cards
          emoji={Humble}
          heading={"UI/UX"}
          detail={"In Progress"}
          />
        </div>
        <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
      </div>
    </div>
  );
}

export default Services;
