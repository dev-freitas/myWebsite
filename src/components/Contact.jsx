import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import ContactForm from './ContactForm';


function Contact() {
  return (
    <div>
    <div className="contact-container" id='contact'>
        <div className="contact-social">
            <a href="https://www.linkedin.com/in/fabio-freitas-98969a62/"><FaLinkedin /></a>
            <a href="https://github.com/dev-freitas"><FaGithub /></a>
        </div>
        <ContactForm />
    </div>
    <a href='#home' className='bottom-link'>Back to top...</a>
    </div>
  )
}

export default Contact
