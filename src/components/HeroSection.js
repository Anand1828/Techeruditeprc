import React from 'react';
import './HeroSection.css';
import QuestionCard from './QuestionCard';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <h1>HOW MUCH<br/>COULD YOU SAVE?</h1>
        <p>Answer the questions below to get a fixed price quotation for us to take your accountancy hassles away from you.</p>
        <QuestionCard />
      </div>
    </section>
  );
};

export default HeroSection; 