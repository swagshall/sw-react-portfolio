import React from 'react';
import './Header.css';
import Navbar from './Navbar' ;



import './Header.css';

function Header () {

  return (
    <section className="header">
      <section className="header-top">
        <section className="header-top__logo">
          <a href="/" className="header-logo"> 
         SW
          </a>
        </section>
        <section className="header-top__navbar">
          <section className="header-top__navigation">
            <Navbar />
          </section>
          <hr className="header-top__seperator" />
        </section>
      </section>
      <section className="header-bottom">
        
      </section>    
    </section>
    
  )
}

export default Header;
