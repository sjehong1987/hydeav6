import React from 'react';
import './Hero.css';

const Hero = ({ t }) => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">{t.title}</h1>
        <p className="hero-subtitle">{t.subtitle}</p>
        <a href="#story" className="hero-btn">
          {t.button}
          <span className="arrow-down">↓</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
