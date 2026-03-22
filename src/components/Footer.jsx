import React from 'react';
import './Footer.css';

const Footer = ({ t, nav }) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2 className="footer-logo">HYDEA</h2>
          <p className="footer-tagline">HYDRATION + IDEA</p>
        </div>
        
        <div className="footer-links">
          <div className="footer-nav">
            <a href="#story">{nav.story}</a>
            <a href="#products">{nav.products}</a>
            <a href="#business">{nav.business}</a>
            <a href="#contact">{nav.contact}</a>
          </div>
          
          <div className="footer-contact">
            <a href={`mailto:${t.email}`} className="footer-email">{t.email}</a>
            <a href="https://instagram.com/hydea.official" target="_blank" rel="noopener noreferrer" className="footer-social">
              {t.instagram}
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">© 2026 HYDEA. All rights reserved.</p>
          <div className="made-with">Made with Manus</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
