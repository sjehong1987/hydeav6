import React, { useState } from 'react'
import './Header.css'

const Header = ({ language, setLanguage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const content = {
    en: {
      brand: 'HYDEA',
      tagline: 'HYDRATION + IDEA',
      nav: ['OUR STORY', 'PRODUCTS', 'BUSINESS', 'CONTACT']
    },
    ko: {
      brand: 'HYDEA',
      tagline: '수분 + 아이디어',
      nav: ['우리의 이야기', '제품', '비즈니스', '연락처']
    },
    th: {
      brand: 'HYDEA',
      tagline: 'การให้ความชุ่มชื้น + ไอเดีย',
      nav: ['เรื่องราวของเรา', 'สินค้า', 'ธุรกิจ', 'ติดต่อ']
    }
  }

  const currentContent = content[language] || content.en

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>{currentContent.brand}</h1>
          <p className="tagline">{currentContent.tagline}</p>
        </div>

        <nav className={`nav ${mobileMenuOpen ? 'active' : ''}`}>
          {currentContent.nav.map((item, index) => (
            <a key={index} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}>
              {item}
            </a>
          ))}
        </nav>

        <div className="header-right">
          <button 
            className="language-btn"
            onClick={() => setLanguage(language === 'en' ? 'ko' : language === 'ko' ? 'th' : 'en')}
          >
            {language.toUpperCase()}
          </button>
          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
