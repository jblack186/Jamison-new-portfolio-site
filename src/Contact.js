import React, { useState } from 'react';
import './Contact.css';


const Contact = () => {
  const [inputs, setInputs] = useState({name: '', email: '', message: ''});

  const handleInputChange = (e) => {
    e.persist();
    setInputs(inputs => ({...inputs, [e.target.name]: e.target.value}));
}


  return (
    
    
<div className="contact__wrap">
        <h1>React    hooks Contact Form</h1>
        <form 
           method="POST"
           data-netlify="true"
          className="contact__form">
      
            <input 
              name="name"
              value={inputs.name} 
              onChange={e=>handleInputChange(e)} 
              type="text" 
              name="name" 
              placeholder="name" 
              title="Your name" 
              maxLength="50" 
              required/>
            <input 
              name="email"
              value={inputs.email} 
              onChange={e=>handleInputChange(e)} 
              type="email" name="email" 
              placeholder="email" 
              title="Your email" 
              maxLength="50" 
              required/>
            <textarea 
              name="message"
              value={inputs.message} 
              onChange={e=>handleInputChange(e)} 
              type="text" name="message" 
              placeholder="message" 
              title="Your message" 
              maxLength="550" 
              required/>
            <input 
              type="submit" 
              value="send message"/>
        </form> 
      </div>  );
}

export default Contact;
