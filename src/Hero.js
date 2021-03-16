import React, { useState, useEffect } from "react";
import "./Hero.scss";
import Cut from "./img/cutOut.png";

const Hero = () => {
  return (
    <section className="hero_container">
      <div className="hero_container_left">
        <h2>Full Stack Engineer</h2>
        <h3>
          Talk is cheap.
          <br />
          Show me the code
        </h3>
        <p className="para_head">
          I'm a problem solver who codes beautiful things,
          <br />
          and I love what I do.
        </p>

        <p className="chat">LET'S CHAT!</p>
      </div>
      <div className="mid_header_right">
        <img src={Cut} alt="coder" />
      </div>
      <div className="tech_list">
        <ul className="list_one">
          <li>ReactJS</li>

          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>LESS/SASS</li>
          <li>Photoshop</li>
        </ul>
        <ul className="list_two">
          <li>NodeJS</li>
          <li>Express</li>
          <li>SQL</li>
          <li>noSQL</li>
          <li>Git Version Control</li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
