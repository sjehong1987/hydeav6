import React from 'react'
import './Footer.css'

const Footer = ({ language }) => {
  const content = {
    en: {
      brand: 'HYDEA',
      tagline: 'HYDRATION + IDEA',
      copyright: '© 2026 HYDEA. All rights reserved.',
      links: ['Privacy Policy', 'Terms of Service', 'Contact']
    },
    ko: {
      brand: 'HYDEA',
      tagline: '수분 + 아이디어',
      copyright: '© 2026 HYDEA. 모든 권리 보유.',
      links: ['개인정보 보호정책', '서비스 약관', '연락처']
    },
    th: {
      brand: 'HYDEA',
      tagline: 'การให้ความชุ่มชื้น + ไอเดีย',
      copyright: '© 2026 HYDEA. สงวนลิขสิทธิ์',
      links: ['นโยบายความเป็นส่วนตัว', 'เงื่อนไขการให้บริการ', 'ติดต่อ']
    }
  }

  const currentContent = content[language] || content.en

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>{currentContent.brand}</h3>
          <p>{currentContent.tagline}</p>
        </div>

        <div className="footer-links">
          {currentContent.links.map((link, index) => (
            <a key={index} href="#">{link}</a>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p>{currentContent.copyright}</p>
      </div>
    </footer>
  )
}

export default Footer
