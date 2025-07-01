import React from 'react';
import './QuestionCard.css';

const QuestionCard = () => {
  return (
    <div className="question-card">
      <p className="question">Is your turnover expected to be more than £85k?</p>
      <div className="button-group">
        <button className="yes-btn">Yes</button>
        <button className="no-btn">No</button>
      </div>
      <p className="note">Takes less than 30 seconds</p>
    </div>
  );
};

export default QuestionCard; 