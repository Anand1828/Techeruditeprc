import React from 'react';
import './ProcessSection.css';

const steps = [
  {
    title: 'Step 1',
    desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor',
  },
  {
    title: 'Step 2',
    desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor',
  },
  {
    title: 'Step 3',
    desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor',
  },
];

const ArcCircle = () => (
  <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="arc-svg">
    <circle cx="80" cy="80" r="70" stroke="#ff7a00" strokeWidth="6" strokeDasharray="80 120" strokeLinecap="round" />
    <circle cx="80" cy="80" r="78" stroke="#ff7a00" strokeWidth="2" strokeDasharray="40 180" strokeLinecap="round" opacity="0.3" />
    <circle cx="80" cy="80" r="60" stroke="#ff7a00" strokeWidth="2" strokeDasharray="40 120" strokeLinecap="round" opacity="0.2" />
  </svg>
);

const ProcessSection = () => {
  return (
    <section className="process-section">
      <h2 className="process-title">Our Process</h2>
      <div className="process-steps">
        {steps.map((step, idx) => (
          <div className="process-step" key={idx}>
            <div className="process-circle">
              <ArcCircle />
              <div className="process-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection; 