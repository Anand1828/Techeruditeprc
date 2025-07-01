import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../assets/Bitmap.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="Logo" />
      </div>
      <button
        className="menu-btn"
        aria-label="Open menu"
        onClick={() => setMenuOpen(true)}
      >
        <span className="menu-icon"></span>
      </button>
      <nav className="nav">
        <a href="#services">Services</a>
        <a href="#about">About Us</a>
        <a href="#blogs">Blogs</a>
        <a href="#case-studies">Case Studies</a>
      </nav>
      <button className="contact-btn">Contact Us</button>
      {menuOpen && (
        <>
          <div className="mobile-menu-overlay" onClick={() => setMenuOpen(false)}></div>
          <div className="mobile-menu">
            <button
              className="close-menu-btn"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              &times;
            </button>
            <nav className="mobile-nav">
              <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
              <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
              <a href="#blogs" onClick={() => setMenuOpen(false)}>Blogs</a>
              <a href="#case-studies" onClick={() => setMenuOpen(false)}>Case Studies</a>
              <button className="contact-btn mobile">Contact Us</button>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};

export default Header; 