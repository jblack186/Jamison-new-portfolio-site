import React from "react";
import "./Contact.scss";

const Contact = () => {


  return (
    <section id="contact" className="contact-container">
			<h3>Like my work?<br/> Let's work together! </h3>
      <form
        method="post"
        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSc1O_aafayH8TkV7cUR33qJAbMLueK415ZWtjKv2Ozp7TqthQ/formResponse"
      >
        <div className="info-contain">
					<div className='name-email'>
          <div className="contact-info">
            <input
              type="text"
              name="entry.1881916804"
              placeholder="Name"
              required
            />
          </div>
          <div className="contact-info">
            <input
              type="email"
              name="entry.461559864"
              placeholder="Email"
              required
            />
          </div>
					</div>
          <div className="textarea">
            <textarea
              name="entry.2091216599"
              placeholder="Type message here"
              rows="6"
              required
            ></textarea>
          </div>
          <div className="button">
           
              <input type="submit" value="Send A Message" />
            
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;
