import React, { useState } from 'react';
import './Contact.css';

const Contact = ({ t }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    website: '',
    email: '',
    inquiryType: 'product',
    message: '',
    preferredLocation: ''
  });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      // Send email via Formspree (or any endpoint you configure)
      const response = await fetch('https://formspree.io/f/sales@hydrationidea.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          _subject: `[HYDEA] New ${formData.inquiryType} inquiry from ${formData.name}`,
          name: formData.name,
          company: formData.company || 'N/A',
          phone: formData.phone,
          website: formData.website || 'N/A',
          email: formData.email || 'N/A',
          inquiryType: formData.inquiryType,
          message: formData.message,
          preferredLocation: formData.preferredLocation || 'N/A'
        })
      });
      if (response.ok) {
        setStatus('sent');
        setFormData({
          name: '', company: '', phone: '', website: '',
          email: '', inquiryType: 'product', message: '', preferredLocation: ''
        });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="contact">
      <div className="contact-container">
        {/* Section Header */}
        <div className="contact-header">
          <span className="contact-number">{t.number}</span>
          <h2 className="contact-label">{t.title}</h2>
        </div>

        <h3 className="contact-subtitle">{t.subtitle}</h3>
        <p className="contact-description">{t.content}</p>

        {/* GET IN TOUCH Cards */}
        <div className="contact-cards">
          <div className="contact-card">
            <div className="contact-card-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </div>
            <h4 className="contact-card-title">{t.cardEmail || 'EMAIL'}</h4>
            <a href="mailto:sales@hydrationidea.com" className="contact-card-value">sales@hydrationidea.com</a>
          </div>
          <div className="contact-card">
            <div className="contact-card-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <h4 className="contact-card-title">{t.cardPhone || 'PHONE'}</h4>
            <a href="tel:+66612345678" className="contact-card-value">+66 6 1234 5678</a>
          </div>
          <div className="contact-card">
            <div className="contact-card-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <h4 className="contact-card-title">{t.cardLocation || 'LOCATION'}</h4>
            <p className="contact-card-value">Phuket, Thailand</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-wrapper">
          <div className="contact-form-header">
            <h3 className="contact-form-title">{t.formTitle || 'Send us a message'}</h3>
            <p className="contact-form-desc">{t.formDesc || 'Fill out the form below and we\'ll get back to you within 24 hours.'}</p>
          </div>

          {status === 'sent' ? (
            <div className="contact-success">
              <div className="contact-success-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#00bfa5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h4>{t.successTitle || 'Thank you!'}</h4>
              <p>{t.successMsg || 'Your message has been sent successfully. We\'ll get back to you soon.'}</p>
              <button className="contact-reset-btn" onClick={() => setStatus('idle')}>
                {t.sendAnother || 'Send another message'}
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-grid">
                <div className="contact-field">
                  <label>{t.labelName || 'Full Name'} <span className="required">*</span></label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.placeholderName || 'Your full name'}
                    required
                  />
                </div>
                <div className="contact-field">
                  <label>{t.labelCompany || 'Company'}</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder={t.placeholderCompany || 'Company name (optional)'}
                  />
                </div>
                <div className="contact-field">
                  <label>{t.labelPhone || 'Phone'} <span className="required">*</span></label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t.placeholderPhone || '+66 XX XXX XXXX'}
                    required
                  />
                </div>
                <div className="contact-field">
                  <label>{t.labelEmail || 'Email'}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.placeholderEmail || 'your@email.com'}
                  />
                </div>
                <div className="contact-field">
                  <label>{t.labelWebsite || 'Website'}</label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder={t.placeholderWebsite || 'https://yourwebsite.com'}
                  />
                </div>
                <div className="contact-field">
                  <label>{t.labelLocation || 'Preferred Location'}</label>
                  <input
                    type="text"
                    name="preferredLocation"
                    value={formData.preferredLocation}
                    onChange={handleChange}
                    placeholder={t.placeholderLocation || 'e.g. Phuket, Bangkok'}
                  />
                </div>
              </div>

              {/* Inquiry Type */}
              <div className="contact-field contact-inquiry-type">
                <label>{t.labelInquiry || 'Inquiry Type'} <span className="required">*</span></label>
                <div className="contact-radio-group">
                  <label className={`contact-radio ${formData.inquiryType === 'product' ? 'active' : ''}`}>
                    <input
                      type="radio"
                      name="inquiryType"
                      value="product"
                      checked={formData.inquiryType === 'product'}
                      onChange={handleChange}
                    />
                    <span className="radio-dot"></span>
                    {t.radioProduct || 'Product Inquiry'}
                  </label>
                  <label className={`contact-radio ${formData.inquiryType === 'partner' ? 'active' : ''}`}>
                    <input
                      type="radio"
                      name="inquiryType"
                      value="partner"
                      checked={formData.inquiryType === 'partner'}
                      onChange={handleChange}
                    />
                    <span className="radio-dot"></span>
                    {t.radioPartner || 'Partnership / Vending Machine'}
                  </label>
                  <label className={`contact-radio ${formData.inquiryType === 'other' ? 'active' : ''}`}>
                    <input
                      type="radio"
                      name="inquiryType"
                      value="other"
                      checked={formData.inquiryType === 'other'}
                      onChange={handleChange}
                    />
                    <span className="radio-dot"></span>
                    {t.radioOther || 'Other'}
                  </label>
                </div>
              </div>

              {/* Message */}
              <div className="contact-field">
                <label>{t.labelMessage || 'Message'} <span className="required">*</span></label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.placeholderMessage || 'Tell us about your inquiry...'}
                  required
                  rows="6"
                />
              </div>

              <button
                type="submit"
                className="contact-submit"
                disabled={status === 'sending'}
              >
                {status === 'sending'
                  ? (t.sending || 'SENDING...')
                  : (t.submitBtn || 'SEND MESSAGE')
                }
              </button>

              {status === 'error' && (
                <p className="contact-error">
                  {t.errorMsg || 'Something went wrong. Please email us directly at sales@hydrationidea.com'}
                </p>
              )}
            </form>
          )}
        </div>

        {/* Bottom Quote */}
        <div className="contact-quote">
          <p>{t.quote || '"Your skin knows what your eyes don\'t."'}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
