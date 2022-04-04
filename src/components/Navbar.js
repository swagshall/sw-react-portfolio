import React from 'react';

import './Navbar.css'
import pdf from "../assets/ShifraWagshallResuma.pdf";

function Navbar () {

  return (
    <section className="navbar">
      <a href="/Intro" className="navbar-item">Home</a>
      <a href="/About" className="navbar-item">About</a>
      <a href="/Work" className="navbar-item">My Work</a>
      <a href="/Contact" className="navbar-item">Contact</a>
      <a href={pdf} className="navbar-item" target="_blank">Resume </a>

  </section>
  )

}

export default Navbar;