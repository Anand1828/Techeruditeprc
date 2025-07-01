import React from 'react';
import './ServicesSection.css';
import icon1 from '../assets/002-searchservice1.png';
import icon2 from '../assets/001-budgetservice2.png';
import icon3 from '../assets/003-revenueservice3.png';
import icon4 from '../assets/004-settingservice4.png';
import icon5 from '../assets/005-taxservice5.png';
import icon6 from '../assets/006-statisticsservice6.png';

const services = [
  {
    icon: icon1,
    title: 'Audit & Account',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
  {
    icon: icon2,
    title: 'Budget & Projections',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
  {
    icon: icon3,
    title: 'Payroll & Bookkeeping',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
  {
    icon: icon4,
    title: 'Software Training & IT',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim',
  },
  {
    icon: icon5,
    title: 'Tax planning & Returns',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
  {
    icon: icon6,
    title: 'Management Information',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn. Ut enim ad minim veniam',
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section">
      <h2 className="services-title">Services</h2>
      <div className="services-grid">
        {services.map((service, idx) => (
          <div className="service-card" key={idx}>
            <div className="service-icon">
              <img src={service.icon} alt={service.title + ' icon'} />
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection; 