import React, { useEffect, useState } from 'react';
import './Footer.css';
import logo from '../assets/Bitmap.png'; 

const Footer = () => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetch('http://3.7.81.243:3253/api/settings/fetch-frontend-details')
      .then(res => res.json())
      .then(data => setDetails(data.data || data))
      .catch(() => setDetails(null));
  }, []);

  if (!details) return null;

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-left">
          <div className="footer-tagline">
            <strong>Tagline will go here. Lorem ipsum d oler sit amet...</strong>
          </div>
          <div className="footer-email">
            <a href={`mailto:${details.contact_mail}`}>{details.contact_mail}</a>
          </div>
          <div className="footer-logo">
            <img src={logo} alt="Logo" />
          </div>
        </div>
        <div className="footer-mid">
          <div className="footer-title">Address</div>
          <div className="footer-address">{details.address}</div>
        </div>
        <div className="footer-right">
          <div className="footer-title">Contacts</div>
          <div className="footer-contact">{details.contact_mail}</div>
          <div className="footer-contact">{details.contact_no}</div>
        </div>
      </div>
      <div className="footer-bottom">
        <nav>
          <a href="#about">About</a>
          <a href="#blogs">Blogs</a>
          <a href="#contact">Contact</a>
          <a href="#services">Services</a>
        </nav>
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()}. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer; 