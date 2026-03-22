import React, { useState } from 'react';
import './Header.css';

const Header = ({ lang, setLang, t }) => {
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'th', name: 'ภาษาไทย', flag: '🇹🇭' }
  ];

  return (
    <header className="header">
      <div className="header-container">
        <a href="/" className="logo">
          <span className="logo-text">HYDEA</span>
          <span className="logo-sub">HYDRATION + IDEA</span>
        </a>

        <nav className="nav-desktop">
          <a href="#story">{t.story}</a>
          <a href="#products">{t.products}</a>
          <a href="#business">{t.business}</a>
          <a href="#contact">{t.contact}</a>
        </nav>

        <div className="lang-selector">
          <button className="lang-btn" onClick={() => setIsOpen(!isOpen)}>
            {languages.find(l => l.code === lang).flag} {languages.find(l => l.code === lang).name}
          </button>
          {isOpen && (
            <div className="lang-dropdown">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => {
                    setLang(l.code);
                    setIsOpen(false);
                  }}
                >
                  {l.flag} {l.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
