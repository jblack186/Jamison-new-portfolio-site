import React, { useState, useEffect } from "react";
import "./Work.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Real from './img/real.png';
import Hair from './img/hair.png';
import Rent from './img/rent.png';
import Books from './img/books.png';
import Organic from './img/organic.png';
import Model from './img/model.png';
import Budget from './img/budget.png';
import {Link} from 'react-scroll';



import {
  faPaintBrush,
  faDoorOpen,
  faHammer,
} from "@fortawesome/free-solid-svg-icons";
const Work = () => {
  return (
    <section id='work' className="work_container">
      <div id='git' className="work_left">
        <div className="work_header">
          <h3>Latest Works</h3>
          <p>Perfect solutions for digital experiences</p>
        </div>
        <div id='react' className="project">
          <img id='javascript' src={Real} alt="real-estate-project" />
          <p>A beautifully styled real estate site built with React. Smooth animations are made possible by framer motion and CSS. </p>
          <div className='tech_list'>
          <span>React</span>
          <span>CSS3</span>
          <span>Bootstrap</span>

          </div>

          <div className='links'>
            <h4>Adobetilde</h4>
            <div>
            <a className='tab'>Site</a><a>Github</a>
            </div>
            </div>
        </div>
        <div className="project">
        <img src={Hair} alt="real-estate-project" />
        
        <p>An hair store with a smooth design. It is responsive and user friendly.</p>
        <div className='tech_list'>
          <span>WordPress</span>

          </div>
       

          <div className='links'>
            <h4>Zaire's Salon</h4>
            <div>
            <a className='tab'>Site</a><a>Github</a>
            </div>
            </div>
        </div>
        <div id='nosql'  className="project">
                  <img src={Rent} alt="real-estate-project" />
                  <p>In this application, I used React on the frontend and Node on the backend. I used MongoDB to manage users and their issues.</p>
                  <div className='tech_list'>
          <span>React</span>
          <span>Node</span>
          <span>MongoDB</span>

          </div>

        <div className='links'>
            <h4>RentLords</h4>
            <div>
            <a className='tab'>Site</a><a>Github</a>
            </div>
            </div>
        </div>
      </div>
      <div className="work_left">
      <div className="project first">
          <img src={Organic} alt="real-estate-project" />
          <p>
        This is a landing page built with React. This application is styled with vanilla CSS.
        </p>
        <div id='react css' className='tech_list'>
          <span>React</span>
          <span>CSS3</span>
          <span>PHP</span>

          </div>

          <div className='links'>
            <h4>Organics</h4>
            <div>
            <a className='tab'>Site</a><a>Github</a>
            </div>
            </div>
        </div>
        <div className="project">
        <img src={Budget} alt="real-estate-project" />
        <p>
        <span>Coming soon: </span>A budget app that will be available for download on both the Apple store and Google Play store.
        </p>
        <div className='tech_list'>
          <span>Next</span>
          <span>Node</span>
          <span>SQL</span>

          </div>

          <div id='next'   className='links'>
            <h4 id='node'>In-hand.IO</h4>
            <div id='express'>
            <a className='tab'>Video Demo</a><a>Github</a>

            </div>
            </div>
            
        </div>

        <div id='sql'  className="project">
        <img src={Books} alt="real-estate-project" />
        <p>
        An online bookstore built with a PERN stack. This application is styled with vanilla CSS and Bootsrap.
        </p>
        <div className='tech_list'>
          <span>React</span>
          <span>Node</span>
          <span>SQL</span>

          </div>

          <div className='links'>
            <h4>Selection</h4>
            <div>
            <a className='tab'>Site</a><a>Github</a>

            </div>
            </div>
            
        </div>
        <div className="project">
                  <img src={Model} alt="real-estate-project" />
<p>This was a design challenge. I built it with just HTML and vanilla CSS.</p>
<div id='html' className='tech_list'>
          <span>HTML</span>
          <span>CSS3</span>

          </div>

        <div className='links'>
            <h4>Model Life</h4>
            <div>
            <a className='tab'>Site</a><a>Github</a>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
