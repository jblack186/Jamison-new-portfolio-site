import React from "react";
import "./Work.scss";
import Real from "./img/real.png";
import Hair from "./img/hair.png";
import Rent from "./img/rent.png";
import Books from "./img/books.png";
import Organic from "./img/organic.png";
import Model from "./img/model.png";
import Budget from "./img/budget.png";

const Work = () => {
  return (
    <section id="work" className="work_container">
      <div id="git" className="work_left">
        <div className="work_header">
          <h3 id="sass">Latest Works</h3>
          <p>Perfect solutions for digital experiences</p>
        </div>
        <div id="react" className="project">
          <img id="javascript" src={Real} alt="real-estate-project" />
          <p className='proj_text'>
            A beautifully styled real estate site built with React. Smooth
            animations are made possible by framer motion and CSS.{" "}
          </p>
          <div className="tech_list">
            <span>React</span>
            <span>CSS3</span>
            <span>Bootstrap</span>
          </div>

          <div className="links">
            <h4>Adobetilde</h4>
            <div>
              <a
                href="https://adobetilde.netlify.app"
                target="https://adobetilde.netlify.app"
                className="tab"
              >
                Site
              </a>
              <a
                href="https://github.com/jblack186/real-estate19"
                target="https://github.com/jblack186/real-estate19"
              >
                Github
              </a>
            </div>
          </div>
        </div>
        <div className="project">
          <img src={Hair} alt="real-estate-project" />

          <p className='proj_text'>
            An hair store with a smooth design. It is responsive and user
            friendly.
          </p>
          <div className="tech_list">
            <span>WordPress</span>
          </div>

          <div className="links">
            <h4>Zaire's Salon</h4>
            <div>
              <a
                href="https://zaireshairsalons.com/"
                target="https://zaireshairsalons.com/"
                className="tab"
              >
                Site
              </a>
            </div>
          </div>
        </div>
        <div id="nosql" className="project">
          <img src={Rent} alt="real-estate-project" />
          <p className='proj_text'>
            In this application, I used React on the frontend and Node on the
            backend. I used MongoDB to manage users and their issues.
          </p>
          <div className="tech_list">
            <span>React</span>
            <span>Node</span>
            <span>MongoDB</span>
          </div>

          <div className="links">
            <h4>RentLords</h4>
            <div>
              <a
                href="https://floating-lake-21994.herokuapp.com/login"
                target="https://floating-lake-21994.herokuapp.com/login"
                className="tab"
              >
                Site
              </a>
              <a
                href="https://github.com/jblack186/rentlords"
                target="https://github.com/jblack186/rentlords"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="work_left">
        <div id="first" className="project first">
          <img src={Organic} alt="real-estate-project" />
          <p className='proj_text'>
            This is a landing page built with React. This application is styled
            with vanilla CSS.
          </p>
          <div id="react css" className="tech_list">
            <span>React</span>
            <span>CSS3</span>
            <span>PHP</span>
          </div>

          <div className="links">
            <h4>Organics</h4>
            <div>
              <a
                href="https://youthful-mayer-0ea962.netlify.app/"
                target="https://youthful-mayer-0ea962.netlify.app/"
                className="tab"
              >
                Site
              </a>
              <a
                href="https://github.com/jblack186/OX-example"
                target="https://github.com/jblack186/OX-example"
              >
                Github
              </a>
            </div>
          </div>
        </div>
        <div className="project">
          <img src={Budget} alt="real-estate-project" />
          <p className='proj_text'>
            <span>Coming soon: </span>A budget app that will be available for
            download on both the Apple store and Google Play store.
          </p>
          <div className="tech_list">
            <span>Next</span>
            <span>Node</span>
            <span>SQL</span>
          </div>

          <div id="next" className="links">
            <h4 id="node">In-hand.IO</h4>
            <div id="express">
              <a
                href="https://drive.google.com/file/d/1wXelEw418aGeLJSVm1VX3QZeDOqt1PGe/view?usp=sharing"
                target="https://drive.google.com/file/d/1wXelEw418aGeLJSVm1VX3QZeDOqt1PGe/view?usp=sharing"
                className="tab"
              >
                Video Demo
              </a>
              <a
                href="https://github.com/jblack186/budget-app"
                target="https://github.com/jblack186/budget-app"
              >
                Github
              </a>
            </div>
          </div>
        </div>

        <div id="sql" className="project">
          <img src={Books} alt="real-estate-project" />
          <p className='proj_text'>
            An online bookstore built with a PERN stack. This application is
            styled with vanilla CSS and Bootsrap.
          </p>
          <div className="tech_list">
            <span>React</span>
            <span>Node</span>
            <span>SQL</span>
          </div>

          <div className="links">
            <h4>Selection</h4>
            <div>
              <a
                href="https://bookstore12.herokuapp.com/home"
                target="https://bookstore12.herokuapp.com/home"
                className="tab"
              >
                Site
              </a>
              <a
                href="https://github.com/jblack186/bookstore"
                target="https://github.com/jblack186/bookstore"
              >
                Github
              </a>
            </div>
          </div>
        </div>
        <div className="project">
          <img src={Model} alt="real-estate-project" />
          <p className='proj_text'>
            This was a design challenge. I built it with just HTML and vanilla
            CSS.
          </p>
          <div id="html" className="tech_list">
            <span>HTML</span>
            <span>CSS3</span>
          </div>

          <div className="links">
            <h4>Model Life</h4>
            <div>
              <a
                href="https://wonderful-northcutt-51f3dd.netlify.app/"
                target="https://wonderful-northcutt-51f3dd.netlify.app/"
                className="tab"
              >
                Site
              </a>
              <a
                href="https://github.com/jblack186/mock-homepage"
                target="https://github.com/jblack186/mock-homepage"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
