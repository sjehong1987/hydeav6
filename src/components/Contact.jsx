import React, { useState } from 'react'
import './Contact.css'

const Contact = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const content = {
    en: {
      title: 'CONTACT',
      subtitle: "Start your skin's new journey.",
      description: "Whether you're interested in our products, business partnerships, or vending machine installation — we'd love to hear from you.",
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        submit: 'SEND'
      },
      contact: {
        email: 'contact@hydea.co',
        social: '@hydea.official'
      }
    },
    ko: {
      title: '연락처',
      subtitle: '당신의 피부의 새로운 여정을 시작하세요',
      description: '제품에 관심이 있으신지, 비즈니스 파트너십이나 자판기 설치에 관심이 있으신지 여부와 상관없이 저희는 당신의 말을 듣고 싶습니다.',
      form: {
        name: '이름',
        email: '이메일',
        message: '메시지',
        submit: '전송'
      },
      contact: {
        email: 'contact@hydea.co',
        social: '@hydea.official'
      }
    },
    th: {
      title: 'ติดต่อ',
      subtitle: 'เริ่มต้นการเดินทางใหม่ของผิวของคุณ',
      description: 'ไม่ว่าคุณสนใจในผลิตภัณฑ์ของเรา ความเป็นหุ้นส่วนทางธุรกิจ หรือการติดตั้งเครื่องจำหน่ายอัตโนมัติ เรายินดีที่จะได้ยินจากคุณ',
      form: {
        name: 'ชื่อ',
        email: 'อีเมล',
        message: 'ข้อความ',
        submit: 'ส่ง'
      },
      contact: {
        email: 'contact@hydea.co',
        social: '@hydea.official'
      }
    }
  }

  const currentContent = content[language] || content.en

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">{currentContent.title}</h2>
        <h3 className="contact-subtitle">{currentContent.subtitle}</h3>
        <p className="contact-description">{currentContent.description}</p>

        <div className="contact-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder={currentContent.form.name}
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder={currentContent.form.email}
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder={currentContent.form.message}
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
            <button type="submit" className="contact-submit">{currentContent.form.submit}</button>
          </form>

          <div className="contact-info">
            <p><strong>Email:</strong> <a href={`mailto:${currentContent.contact.email}`}>{currentContent.contact.email}</a></p>
            <p><strong>Social:</strong> <a href="https://instagram.com/hydea.official" target="_blank" rel="noopener noreferrer">{currentContent.contact.social}</a></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
