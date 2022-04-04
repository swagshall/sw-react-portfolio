import React from 'react';
import './Footer.css'
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";


  
const Footer = () => (
  <footer className="footer">
    <div >

      <a href="https://github.com/swagshall" target="_blank" className='icons'>
      <BsGithub></BsGithub>
      </a>
      <a href="https://www.linkedin.com/in/shifrawagshall/" target="_blank" className='icons'>
      <BsLinkedin></BsLinkedin>
      </a>
    </div>
  
  </footer>
);
  
export default Footer;