import React from 'react';
import './AboutSection.css';
import  aboutImg from '../assets/2480559about-banner.png';
import aboutBg  from '../assets/Rectangleabout-bg.png';

const AboutSection = () => {
  return (
    <section className="about-section">
      <img src={aboutBg} alt="About background" className="about-bg" />
      <div className="about-content">
        <div className="about-left">
          <h2>About us</h2>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing elitr</p>
          <button className="about-btn">Contact Us</button>
        </div>
        <div className="about-right">
          <div className="about-img-box">
            <img src={aboutImg} alt="About illustration" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 