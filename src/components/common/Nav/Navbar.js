import React from 'react';

import './Navbar.css'

function Navbar () {

  return (
    <section className="navbar">
      <a href="/" className="navbar-item">Home</a>
      <a href="/About" className="navbar-item">About</a>
      <a href="/ProductList" className="navbar-item">My Work</a>
      <a href="/contact" className="navbar-item">Contact</a>
  </section>
  )

}

export default Navbar;