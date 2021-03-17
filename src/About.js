import React from "react";
import "./About.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaintBrush,
  faDoorOpen,
  faHammer,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const About = () => {
  return (
    <section id="about" className="about_container">
      <div className="about_left">
        <div className="category fronend">
          <Link
            activeClass="active"
            to="work"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <div className="about_left_text">
              <h3>Front-End</h3>
              <p>I build friendly user interfaces.</p>
              <p className="view">VIEW PROJECTS</p>
            </div>
          </Link>
          <FontAwesomeIcon className="list_icon" icon={faHammer} />
        </div>
        <div className="category backend">
          <Link
            activeClass="active"
            to="work"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <div className="about_left_text">
              <h3>Back-End</h3>
              <p>I get it right the first time through planning.</p>
              <p className="view">VIEW PROJECTS</p>
            </div>
          </Link>
          <FontAwesomeIcon className="list_icon" icon={faDoorOpen} />
        </div>
        <div className="category design">
          <Link
            activeClass="active"
            to="work"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <div className="about_left_text">
              <h3>Design</h3>
              <p>I use design principles in my work.</p>
              <p className="view">VIEW PROJECTS</p>
            </div>
          </Link>
          <FontAwesomeIcon className="list_icon" icon={faPaintBrush} />
        </div>
      </div>
      <div className="about_right">
        <h3>
          Hello! I'm <span>Jamison Blackwell</span>
        </h3>
        <p className="story">
          How I fell in love with code <span>😍 </span>
        </p>
        <p>
        In general, I love creating things. Whether that is with a hammer or with code. Another love I have is for problem-solving. Since my childhood, I’ve loved games like chess and sudoku. Coding allows me to use my problem-solving capabilities to create beautiful things. <br />
Also, I never stop learning. I spend a lot of time either learning new technologies or mastering my knowledge of those I currently use.<br /> <span className='span'>Now check out my work!</span>

        </p>
      </div>
    </section>
  );
};

export default About;
