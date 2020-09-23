import React, {useState} from 'react';
import ScriptTag from 'react-script-tag';
import './FrontPage.css';
import { motion, AnimatePresence } from 'framer-motion';
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import {faFacebookSquare, faGithubSquare, faLinkedin, faTwitterSquare} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import {Button, Modal} from 'react-bootstrap';
import Resume from './img/resume.png';
import Download from './img/resume.docx';


const FrontPage = () => {
  const [hover, setHover] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


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

  const hovering = e => {
    setHover(true);
  }

  const notHovering = e => {
    setHover(false);
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
      <ScriptTag type="text/javascript" src="https://scriptonofficial.github.io/particle-js-background/particles.js" />
      <ScriptTag type="text/javascript" src="https://scriptonofficial.github.io/particle-js-background/app.js" />

      <div id="particles-js"></div>
      <div>
        <div className='faIcons'>
          
          <a href='https://www.facebook.com/jamison.blackwell.3/'>{<FontAwesomeIcon className='list-icon' icon={faFacebookSquare}/> }</a>
          
          
          <a href='https://twitter.com/JamisonBlackw10'>{<FontAwesomeIcon className='list-icon' icon={faTwitterSquare}/> }</a>
          
          
          <a href='https://github.com/jblack186'>{<FontAwesomeIcon className='list-icon' icon={faGithubSquare}/> }</a>
          
          
          <a href='https://www.linkedin.com/in/jamison-blackwell/'>{<FontAwesomeIcon className='list-icon' icon={faLinkedin}/> }</a>
          

        </div>
      </div>
      <div className='home-content'>
        <h1>Hello, I'm <span class="name">Jamison Blackwell.</span> <p>I am a full-stack web developer.</p></h1>
        <Link style={{ textDecoration: 'none' }}  to='dashboard' ><motion.div 
      onMouseOver={hovering}
      onMouseLeave={notHovering}
      whileHover={{scale: 1.1, textShadow: "0px 0px 8px rgb(255, 255, 255)", boxShadow: "0px 0px 8px rgb(255, 255, 255)"}}
      class="button-link">View my work </motion.div></Link>
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