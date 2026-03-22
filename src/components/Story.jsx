import React from 'react';
import './Story.css';

const Story = ({ t }) => {
  return (
    <div className="section-container">
      <div className="section-header">
        <span className="section-number">{t.number}</span>
        <h2 className="section-title">{t.title}</h2>
      </div>
      <div className="section-body">
        <h3 className="section-subtitle">{t.subtitle}</h3>
        <p className="section-content">{t.content}</p>
        <button className="section-btn">{t.button}</button>
      </div>
    </div>
  );
};

export default Story;
