import React, { useState } from 'react';
import './Contact.css';


const Contact = () => {

  return (
    
    
<div className="contact-container">
        <h1>React    hooks Contact Form</h1>
        <form method="post" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSc1O_aafayH8TkV7cUR33qJAbMLueK415ZWtjKv2Ozp7TqthQ/formResponse">
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
								<ul className="actions special">
									<input type="submit" value="Send A Message"/> 
								</ul>
							</div>
						</div>
					</form>
      </div>  );
}

export default Contact;
