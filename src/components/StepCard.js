import React from 'react';
import './StepCard.css';

const StepCard = ({ title, description, imageSrc, buttonColor }) => {
  return (
    <div className="step-card">
      <img src={imageSrc} alt={`${title} icon`} className="card-image" />
      <h3>{title}</h3>
      <button className={`card-button ${buttonColor}`}>
      <p>{description}</p>
      </button>
    </div>
  );
};

export default StepCard;
