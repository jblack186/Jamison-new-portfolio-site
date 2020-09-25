import React, { useState } from 'react';
import './Contact.css';
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome';
import { faChevronLeft, faTimes, faChevronRight, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { Link, useHistory } from 'react-router-dom';



const Contact = () => {

  const history = useHistory();


  const toBlog = (e) => {
    e.preventDefault();
    history.push('/blog')
    window.location.reload();
    
  }


  return (
    
    
<div className="contact-container">
	
  <h2>Contact Me</h2>
        <form method="post" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSc1O_aafayH8TkV7cUR33qJAbMLueK415ZWtjKv2Ozp7TqthQ/formResponse">
				<div>
        <p>Feel free to email me at: blackwellj1040@gmail.com or message me here!</p>
				</div>
						<div className="info-contain">
							<div className="contact-info">
								<input type="text" name="entry.1881916804" placeholder="Name" required/>
							</div>
							<div className="contact-info">
								<input type="email" name="entry.461559864" placeholder="Email" required/>
							</div>
							<div className="textarea">
								<textarea name="entry.2091216599" placeholder="Message" rows="6" required></textarea>
							</div>
							<div className="button">
								<ul className="contact-button">
									<input type="submit" value="Send A Message"/> 
								</ul>
							</div>
						</div>
					</form>
          <div className='arrow-left' onClick={toBlog}>
    <p className='toAbout'>Blog</p>
    {<FontAwesomeIcon className='arrow-left' icon={faChevronLeft}/> }

    </div>

      </div>  );
}

export default Contact;
