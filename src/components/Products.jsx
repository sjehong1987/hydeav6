import React from 'react'
import './Products.css'

const Products = ({ language }) => {
  const content = {
    en: {
      title: 'PRODUCTS',
      subtitle: 'Curated for your journey.',
      description: 'Premium filter showerhead made with Korean technology. Effectively removes residue and impurities for a softer, cleaner shower experience.',
      cta: 'LEARN MORE'
    },
    ko: {
      title: '제품',
      subtitle: '당신의 여정을 위해 엄선된',
      description: '한국 기술로 만든 프리미엄 필터 샤워헤드. 잔여물과 불순물을 효과적으로 제거하여 더 부드럽고 깨끗한 샤워 경험을 제공합니다.',
      cta: '더 알아보기'
    },
    th: {
      title: 'สินค้า',
      subtitle: 'คัดสรรสำหรับการเดินทางของคุณ',
      description: 'หัวฝักบัวกรองระดับพรีเมียมที่ทำด้วยเทคโนโลยีเกาหลี ขจัดตะกรันและสิ่งสกปรกได้อย่างมีประสิทธิภาพ เพื่อประสบการณ์การอาบน้ำที่นุ่มนวลและสะอาดขึ้น',
      cta: 'เรียนรู้เพิ่มเติม'
    }
  }

  const currentContent = content[language] || content.en

  return (
    <section id="products" className="products">
      <div className="container">
        <div className="products-content">
          <h2 className="section-title">{currentContent.title}</h2>
          <h3 className="products-subtitle">{currentContent.subtitle}</h3>
          <p className="products-description">{currentContent.description}</p>
          <button className="products-cta">{currentContent.cta}</button>
        </div>
      </div>
    </section>
  )
}

export default Products
