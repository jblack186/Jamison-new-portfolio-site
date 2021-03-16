import React, {useState, useEffect} from 'react';
import './Header.scss';
import {faFacebookSquare, faGithubSquare, faLinkedin, faTwitterSquare, faGithub} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome';
import { faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-scroll';
import {Button, Modal} from 'react-bootstrap';
import Resume from './img/resume.png';
import Download from './img/resume.docx';


const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header className='header'>
      
      <h1>Jamison <span>Blackwell</span></h1>
      <ul className='mid_header'>
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        ><li>About me</li></Link>
        <Link
        activeClass="active"
        to="work"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        ><li>Work</li></Link>
                <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        ><li>Contact</li></Link>
      </ul>
      <ul className='right_header'>
        <li className='font_aw'><FontAwesomeIcon className='list_icon' icon={faLinkedin}/>Linkedin</li>
        <li><FontAwesomeIcon className='list_icon' icon={faGithub}/>Github</li>
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

      </ul>
      <div className='mobile'>
      <FontAwesomeIcon className='list_icon' icon={faBars}/> 
      </div>

    </header>
  )
}

export default Header;