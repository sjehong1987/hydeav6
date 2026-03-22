import React from 'react'
import './Business.css'

const Business = ({ language }) => {
  const content = {
    en: {
      title: 'BUSINESS',
      subtitle: 'Start your own beauty business.',
      description: 'HYDEA vending machines offer a unique low-investment, high-return business opportunity. Secure a prime location in a tourist hotspot and let the machine work for you — 24 hours a day, 7 days a week, with zero staff required.',
      cta: 'LEARN MORE'
    },
    ko: {
      title: '비즈니스',
      subtitle: '당신의 뷰티 비즈니스를 시작하세요',
      description: 'HYDEA 자판기는 저투자, 고수익의 독특한 비즈니스 기회를 제공합니다. 관광지의 황금 위치를 확보하고 기계가 24시간 7일 내내 직원 없이 당신을 위해 일하도록 하세요.',
      cta: '더 알아보기'
    },
    th: {
      title: 'ธุรกิจ',
      subtitle: 'เริ่มต้นธุรกิจความงามของคุณเอง',
      description: 'เครื่องจำหน่ายอัตโนมัติ HYDEA นำเสนอโอกาสทางธุรกิจที่ไม่ซ้ำใครด้วยการลงทุนต่ำและผลตอบแทนสูง ยึดตำแหน่งที่ดีในจุดท่องเที่ยวและปล่อยให้เครื่องทำงานให้คุณ 24 ชั่วโมงต่อวัน 7 วันต่อสัปดาห์ โดยไม่ต้องมีพนักงาน',
      cta: 'เรียนรู้เพิ่มเติม'
    }
  }

  const currentContent = content[language] || content.en

  return (
    <section id="business" className="business">
      <div className="container">
        <div className="business-content">
          <h2 className="section-title">{currentContent.title}</h2>
          <h3 className="business-subtitle">{currentContent.subtitle}</h3>
          <p className="business-description">{currentContent.description}</p>
          <button className="business-cta">{currentContent.cta}</button>
        </div>
      </div>
    </section>
  )
}

export default Business
