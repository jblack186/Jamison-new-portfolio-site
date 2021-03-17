import React, {useState} from 'react';
import './Header.scss';
import { faLinkedin,  faGithub} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-scroll';
import {Button, Modal} from 'react-bootstrap';
import Resume from './img/resume.png';
import Download from './img/resume.docx';


const Header = () => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navOpen = () => {
    setOpen(true)
  }

  const navClose = () => {
    setOpen(false)
  }


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
        <a href='https://www.linkedin.com/in/jamison-blackwell/' target='https://www.linkedin.com/in/jamison-blackwell/'><li className='font_aw'><FontAwesomeIcon className='list_icon' icon={faLinkedin}/>Linkedin</li></a>
        <a href='https://github.com/jblack186' target='https://github.com/jblack186'><li><FontAwesomeIcon className='list_icon' icon={faGithub}/>Github</li></a>
        <div className='resume-email'>
        <Button variant="secondary" onClick={handleShow}>
          Click for resume and email
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>My Email: blackwellj1040@gmail.com</Modal.Title>
          </Modal.Header>
          <Modal.Body><img className='resume' src={Resume} alt='resume' /></Modal.Body>
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
      <h4 className='mobile_header'>Jamison <span>Blackwell</span></h4>
      <FontAwesomeIcon onClick={navOpen} className='list_icon' icon={faBars}/> 
      </div>
      <div className={!open ? 'hide' : 'mobile_list'}>
      <FontAwesomeIcon onClick={navClose} className='list_icon' icon={faTimes}/> 
 
          <ul>
          <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        ><li onClick={navClose}>About</li></Link>
            <Link
        activeClass="active"
        to="work"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        ><li onClick={navClose}>Work</li></Link>
            <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        ><li onClick={navClose}>Contact</li></Link>

          </ul>
        </div>

    </header>
  )
}

export default Header;