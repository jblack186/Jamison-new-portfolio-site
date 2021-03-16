import React, {useState, useEffect} from 'react';
import './Header.scss';
import {faFacebookSquare, faGithubSquare, faLinkedin, faTwitterSquare, faGithub} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome';
import { faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  return (
    <header className='header'>
      
      <h1>Jamison <span>Blackwell</span></h1>
      <ul className='mid_header'>
        <li>About me</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
      <ul className='right_header'>
        <li className='font_aw'><FontAwesomeIcon className='list_icon' icon={faLinkedin}/>Linkedin</li>
        <li><FontAwesomeIcon className='list_icon' icon={faGithub}/>Github</li>
        <div className='mail_container'>
        <li><FontAwesomeIcon className='list_icon' icon={faEnvelope}/> 
        </li>
        </div>
      </ul>
      <div className='mobile'>
      <FontAwesomeIcon className='list_icon' icon={faBars}/> 
      </div>

    </header>
  )
}

export default Header;