import React from 'react'
import './Hero.css'

const Hero = ({ language }) => {
  const content = {
    en: {
      title: 'Korean skincare begins with',
      subtitle: 'the water that touches you first.',
      cta: 'DISCOVER'
    },
    ko: {
      title: '한국 스킨케어는 시작됩니다',
      subtitle: '당신의 피부에 닿는 물로부터',
      cta: '발견하기'
    },
    th: {
      title: 'การดูแลผิวเกาหลีเริ่มต้นด้วย',
      subtitle: 'น้ำที่สัมผัสคุณก่อน',
      cta: 'ค้นพบ'
    }
  }

  const currentContent = content[language] || content.en

  return (
    <section className="hero">
      <div className="hero-content">
        <h2 className="hero-title">{currentContent.title}</h2>
        <p className="hero-subtitle"><em>{currentContent.subtitle}</em></p>
        <button className="hero-cta">{currentContent.cta}</button>
      </div>
      <div className="hero-background">
        <div className="gradient-overlay"></div>
      </div>
    </section>
  )
}

export default Hero
