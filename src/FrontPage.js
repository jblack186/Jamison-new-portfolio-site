import React, {useState, useEffect} from 'react';
import ScriptTag from 'react-script-tag';
import './FrontPage.css';
import { motion,} from 'framer-motion';
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import {faFacebookSquare, faGithubSquare, faLinkedin, faTwitterSquare, faGithub} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import {Button, Modal} from 'react-bootstrap';
import Resume from './img/resume.png';
import Download from './img/resume.docx';
import Github1 from './img/github1.png';
import Github2 from './img/github2.png';


const Part1 = "https://scriptonofficial.github.io/particle-js-background/particles.js";
const Part2 = "https://scriptonofficial.github.io/particle-js-background/app.js";

const FrontPage = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    console.log('yep')
  }, 2)

  const variantsContainer = {
    hidden: {
      opacity: 1
    },
    visible: {
      opacity: 1,
      transition: {
        delay: .1, duration: .1
      }
    },
    exit: {
      opacity: .8

      
    }

  }


  return (
    <motion.div
    className='home-container'
    variants={variantsContainer}
    initial='hidden'
    animate='visible'
    type='tween'
    exit='exit'
    >
            <ScriptTag type="text/javascript" src={Part1}/>
      <ScriptTag type="text/javascript" src={Part2} />

      <div className='resume-email'>
        <Button variant="secondary" onClick={handleShow}>
          Click for resume and email
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>My Email: blackwellj1040@gmail.com</Modal.Title>
          </Modal.Header>
          <Modal.Body><img className='resume' src={Resume} /></Modal.Body>
          <Modal.Footer>
            <a href={Download} download>Click to download</a>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>

          </Modal.Footer>
        </Modal>
      </div>

      <div id="particles-js"></div>
      <div>
        <div className='faIcons'>
          
          <a href='https://www.facebook.com/jamison.blackwell.3/' target='https://www.facebook.com/jamison.blackwell.3/'>{<FontAwesomeIcon className='list-icon' icon={faFacebookSquare}/> }</a>
          
          
          <a href='https://twitter.com/JamisonBlackw10' target='https://twitter.com/JamisonBlackw10'>{<FontAwesomeIcon className='list-icon' icon={faTwitterSquare}/> }</a>
          
          
          <a href='https://github.com/jblack186' target='https://github.com/jblack186'>{<FontAwesomeIcon className='list-icon' icon={faGithubSquare}/> }</a>
          
          
          <a href='https://www.linkedin.com/in/jamison-blackwell/' target='https://www.linkedin.com/in/jamison-blackwell/'>{<FontAwesomeIcon className='list-icon' icon={faLinkedin}/> }</a>
          

        </div>
      </div>
      <div className='home-content'>
        <h1>Hello, I'm <span class="name">Jamison Blackwell.</span> <p>I am a full-stack web developer.</p></h1>
        <p className='about-me'>ReactJS, NextJS, NodeJS, Python, HTML5, CSS3, JavaScript, LESS/SASS, Express, SQL, noSQL</p>
        
        <Link style={{ textDecoration: 'none' }}  to='dashboard' ><motion.div 
      whileHover={{scale: 1.1, textShadow: "0px 0px 8px rgb(255, 255, 255)", boxShadow: "0px 0px 8px rgb(255, 255, 255)"}}
      class="button-link">View my work </motion.div></Link>
          <div className='github'>
      <img src={Github1} alt='github1' />
      <a>{<FontAwesomeIcon className='list-icon-github' icon={faGithub}/> }</a>

      <img src={Github2} alt='github2' />

    </div>

    </div>
    <div className='arrow'>
      <p>To Work</p>
    <Link style={{ textDecoration: 'none' }}  to='dashboard' > <div >
    {<FontAwesomeIcon className='font-icon' icon={faChevronRight}/> }
    </div></Link>
    </div>

    </motion.div>
  )
}

export default FrontPage;