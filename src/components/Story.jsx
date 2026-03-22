import React from 'react'
import './Story.css'

const Story = ({ language }) => {
  const content = {
    en: {
      title: 'OUR STORY',
      subtitle: 'Small changes, Better Skin.',
      description: 'The foundation of skincare is hydration. And hydration begins with the water that touches your skin. HYDEA is committed to revolutionizing the beauty industry through innovative water filtration technology and premium Korean skincare products.',
      cta: 'LEARN MORE'
    },
    ko: {
      title: '우리의 이야기',
      subtitle: '작은 변화, 더 나은 피부',
      description: '스킨케어의 기초는 수분입니다. 그리고 수분은 당신의 피부에 닿는 물로부터 시작됩니다. HYDEA는 혁신적인 물 여과 기술과 프리미엄 한국 스킨케어 제품을 통해 뷰티 산업을 혁신하기 위해 노력하고 있습니다.',
      cta: '더 알아보기'
    },
    th: {
      title: 'เรื่องราวของเรา',
      subtitle: 'การเปลี่ยนแปลงเล็กน้อย ผิวที่ดีขึ้น',
      description: 'พื้นฐานของการดูแลผิวคือความชุ่มชื้น และความชุ่มชื้นเริ่มต้นจากน้ำที่สัมผัสผิวของคุณ HYDEA มุ่งมั่นที่จะปฏิวัติอุตสาหกรรมความงามผ่านเทคโนโลยีการกรองน้ำที่นวัตกรรมและผลิตภัณฑ์ดูแลผิวเกาหลีระดับพรีเมียม',
      cta: 'เรียนรู้เพิ่มเติม'
    }
  }

  const currentContent = content[language] || content.en

  return (
    <section id="our-story" className="story">
      <div className="container">
        <div className="story-content">
          <h2 className="section-title">{currentContent.title}</h2>
          <h3 className="story-subtitle">{currentContent.subtitle}</h3>
          <p className="story-description">{currentContent.description}</p>
          <button className="story-cta">{currentContent.cta}</button>
        </div>
      </div>
    </section>
  )
}

export default Story
