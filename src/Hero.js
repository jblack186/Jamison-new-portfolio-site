import React, { useState, useEffect } from "react";
import "./Hero.scss";
import Cut from "./img/cutOut.png";
import {Link} from 'react-scroll';

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

        <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        ><p className="chat">LET'S CHAT!</p></Link>
      </div>
      <div className="mid_header_right">
        <img src={Cut} alt="coder" />
      </div>
      <div className="tech_list">
        <ul className="list_one">
        <Link
        activeClass="active"
        to="work"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        ><li>ReactJS</li></Link>
        <Link
        activeClass="active"
        to="next"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        ><li>NextJS</li></Link>

<Link
        activeClass="active"
        to="html"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        ><li>HTML5</li></Link>
          <Link
        activeClass="active"
        to="work"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        ><li>CSS3</li></Link>
                 <Link
        activeClass="active"
        to="javascript"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        ><li>JavaScript</li></Link>
                 <Link
        activeClass="active"
        to="sass"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        ><li>LESS/SASS</li></Link>
        </ul>
        <ul className="list_two">
        <Link
        activeClass="active"
        to="node"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        ><li>NodeJS</li></Link>
                 <Link
        activeClass="active"
        to="express"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        ><li>Express</li></Link>
                 <Link
        activeClass="active"
        to="sql"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        ><li>SQL</li></Link>
                 <Link
        activeClass="active"
        to="nosql"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        ><li>noSQL</li></Link>
                 <Link
        activeClass="active"
        to="git"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        ><li>Git Version Control</li></Link>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
