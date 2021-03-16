import React, { useState, useEffect } from "react";
import "./About.scss";
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome';
import { faPaintBrush, faDoorOpen, faHammer } from '@fortawesome/free-solid-svg-icons';
const About = () => {
  return (
    <section className="about_container">
      <div className="about_left">
        <div className="category fronend">
          <div className='about_left_text'>
            <h3>Front-End</h3>
            <p>I use design principles in my work.</p>
            <p className='view'>VIEW PROJECTS</p>
          </div>
          <FontAwesomeIcon className='list_icon' icon={faHammer}/>
        </div>
        <div className="category backend">
        <div className='about_left_text'>
            <h3>Back-End</h3>
            <p>I use design principles in my work.</p>
            <p className='view'>VIEW PROJECTS</p>
          </div>
          <FontAwesomeIcon className='list_icon' icon={faDoorOpen}/>
        </div>
        <div className="category design">
        <div className='about_left_text'>
            <h3>Design</h3>
            <p>I use design principles in my work.</p>
            <p className='view'>VIEW PROJECTS</p>
          </div>
          <FontAwesomeIcon className='list_icon' icon={faPaintBrush}/>
        </div>
      </div>
      <div className="about_right">
        <h3>Hello! I'm <span>Jamison Blackwell</span></h3>
        <p className='story'>Every great design begin with an even better story</p>
        <p>In general, I love creating things. Whether that is with a hammer or with code. Another love I have is for problem solving. I’ve always loved games like chess and sudoku since I was a kid. These combined gives me a passion for coding because it allows me to build things by using my problem solving skills and this is where your company will benefit from hiring me on.</p>
      </div>
    </section>
  );
};

export default About;
