import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './ContactPage.css';

const CONTACT_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663453274704/8gPefBGWuJTvLQvPYKLYp4/phuket-scene-Kpx88G38ZoEowiy6JXf3N6.webp";

const ContactPage = ({ lang, setLang, t }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    website: '',
    inquiryType: 'product',
    message: '',
    preferredLocation: '',
  });
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const ct = t.contactPage || {};

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) return;
    setSending(true);
    setError(false);

    try {
      // Send via mailto fallback — construct email body
      const subject = encodeURIComponent(`[HYDEA Inquiry] ${formData.inquiryType} - ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Company: ${formData.company || 'N/A'}\n` +
        `Phone: ${formData.phone}\n` +
        `Email: ${formData.email || 'N/A'}\n` +
        `Website: ${formData.website || 'N/A'}\n` +
        `Inquiry Type: ${formData.inquiryType}\n` +
        `Preferred Location: ${formData.preferredLocation || 'N/A'}\n` +
        `\nMessage:\n${formData.message}`
      );
      
      // Try Formspree first (if configured), otherwise use mailto
      const formspreeId = ''; // Set your Formspree form ID here, e.g. 'xpznqkdl'
      
      if (formspreeId) {
        const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            company: formData.company,
            phone: formData.phone,
            email: formData.email,
            website: formData.website,
            inquiryType: formData.inquiryType,
            message: formData.message,
            preferredLocation: formData.preferredLocation,
          }),
        });
        if (res.ok) {
          setSubmitted(true);
        } else {
          throw new Error('Form submission failed');
        }
      } else {
        // Mailto fallback
        window.location.href = `mailto:sales@hydrationidea.com?subject=${subject}&body=${body}`;
        setSubmitted(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      company: '',
      phone: '',
      email: '',
      website: '',
      inquiryType: 'product',
      message: '',
      preferredLocation: '',
    });
    setSubmitted(false);
    setError(false);
  };

  return (
    <div className="contact-page">
      <Header lang={lang} setLang={setLang} t={t.nav} />

      {/* Hero */}
      <section className="cp-hero" style={{ backgroundImage: `url(${CONTACT_IMAGE})` }}>
        <div className="cp-hero-overlay" />
        <div className="cp-hero-content">
          <span className="cp-hero-num">04</span>
          <h1 className="cp-hero-title">
            {ct.heading || "Start your skin's\nnew journey."}
          </h1>
        </div>
      </section>

      {/* GET IN TOUCH Cards */}
      <section className="cp-touch">
        <div className="cp-touch-inner">
          <div className="cp-touch-header">
            <span className="cp-touch-label">{ct.touchLabel || 'GET IN TOUCH'}</span>
            <p className="cp-touch-desc">
              {ct.touchDesc || "Whether you're interested in our products, business partnerships, or vending machine installation — we'd love to hear from you."}
            </p>
          </div>
          <div className="cp-cards">
            <a href="mailto:sales@hydrationidea.com" className="cp-card">
              <div className="cp-card-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <h4 className="cp-card-label">{ct.emailLabel || 'sales@hydrationidea.com'}</h4>
              <p className="cp-card-sub">{ct.emailSub || 'General inquiries & product questions'}</p>
            </a>
            <a href="https://instagram.com/hydea_official" target="_blank" rel="noopener noreferrer" className="cp-card">
              <div className="cp-card-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </div>
              <h4 className="cp-card-label">{ct.igLabel || '@hydea_official'}</h4>
              <p className="cp-card-sub">{ct.igSub || 'Follow us for updates & skincare tips'}</p>
            </a>
            <div className="cp-card">
              <div className="cp-card-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h4 className="cp-card-label">{ct.locLabel || 'Phuket, Thailand'}</h4>
              <p className="cp-card-sub">{ct.locSub || 'SJ Management — Southeast Asia HQ'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Contact Form */}
      <section className="cp-form-section">
        <div className="cp-form-inner">
          <div className="cp-form-header">
            <div className="cp-form-line" />
            <h2 className="cp-form-title">{ct.touchLabel || 'GET IN TOUCH'}</h2>
            <p className="cp-form-desc">
              {ct.touchDesc || "Whether you're interested in our products, business partnerships, or vending machine installation — we'd love to hear from you."}
            </p>
          </div>

          {submitted ? (
            <div className="cp-success">
              <div className="cp-success-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" x2="11" y1="2" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </div>
              <h3>Thank You!</h3>
              <p>{ct.successMsg || "Thank you! Your inquiry has been submitted successfully. We'll get back to you within 48 hours."}</p>
              <button onClick={resetForm} className="cp-reset-btn">Send Another Inquiry</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="cp-form">
              <div className="cp-form-row">
                <div className="cp-field">
                  <label>
                    {ct.nameLabel || 'FULL NAME'} <span className="cp-req">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={ct.namePlaceholder || 'Your full name'}
                    required
                  />
                </div>
                <div className="cp-field">
                  <label>{ct.companyLabel || 'COMPANY (OPTIONAL)'}</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder={ct.companyPlaceholder || 'Your company name'}
                  />
                </div>
              </div>

              <div className="cp-form-row">
                <div className="cp-field">
                  <label>
                    {ct.phoneLabel || 'PHONE NUMBER'} <span className="cp-req">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={ct.phonePlaceholder || '+66 XX XXX XXXX'}
                    required
                  />
                </div>
                <div className="cp-field">
                  <label>{ct.emailLabel2 || 'EMAIL (OPTIONAL)'}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={ct.emailPlaceholder || 'your@email.com'}
                  />
                </div>
              </div>

              <div className="cp-field">
                <label>{ct.websiteLabel || 'WEBSITE (OPTIONAL)'}</label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder={ct.websitePlaceholder || 'https://yourwebsite.com'}
                />
              </div>

              <div className="cp-field">
                <label>
                  {ct.inquiryLabel || 'INQUIRY TYPE'} <span className="cp-req">*</span>
                </label>
                <div className="cp-radio-group">
                  {[
                    { value: 'product', label: ct.inquiryProduct || 'Product Inquiry' },
                    { value: 'partner', label: ct.inquiryPartner || 'Become a Partner' },
                    { value: 'other', label: ct.inquiryOther || 'Other' },
                  ].map((opt) => (
                    <label
                      key={opt.value}
                      className={`cp-radio-label ${formData.inquiryType === opt.value ? 'active' : ''}`}
                    >
                      <div className={`cp-radio-dot ${formData.inquiryType === opt.value ? 'active' : ''}`}>
                        {formData.inquiryType === opt.value && <div className="cp-radio-inner" />}
                      </div>
                      <input
                        type="radio"
                        name="inquiryType"
                        value={opt.value}
                        checked={formData.inquiryType === opt.value}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <span>{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {formData.inquiryType === 'partner' && (
                <div className="cp-field">
                  <label>{ct.locationLabel || 'PREFERRED LOCATION (OPTIONAL)'}</label>
                  <input
                    type="text"
                    name="preferredLocation"
                    value={formData.preferredLocation}
                    onChange={handleChange}
                    placeholder={ct.locationPlaceholder || 'e.g. Phuket, Bali, Da Nang...'}
                  />
                </div>
              )}

              <div className="cp-field">
                <label>
                  {ct.messageLabel || 'MESSAGE'} <span className="cp-req">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={ct.messagePlaceholder || 'Tell us about your interest or any questions...'}
                  required
                  rows={6}
                />
              </div>

              {error && (
                <p className="cp-error">
                  {ct.errorMsg || "Something went wrong. Please try again or contact us directly at sales@hydrationidea.com"}
                </p>
              )}

              <button type="submit" disabled={sending} className="cp-submit-btn">
                {sending ? (ct.sendingText || 'SENDING...') : (
                  <>
                    {ct.submitText || 'SEND INQUIRY'}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}>
                      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Partnership Banner */}
      <section className="cp-partner-banner">
        <div className="cp-partner-inner">
          <div className="cp-partner-text">
            <span className="cp-partner-label">{ct.partnerLabel || 'PARTNERSHIP INQUIRY'}</span>
            <h2 className="cp-partner-title">{ct.partnerTitle || 'BECOME A PARTNER'}</h2>
            <p className="cp-partner-desc">
              {ct.partnerDesc || "Want to bring HYDEA to your location? We're actively seeking partners across Southeast Asia."}
            </p>
          </div>
          <div className="cp-partner-btns">
            <a href="mailto:sales@hydrationidea.com" className="cp-partner-email-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              {ct.partnerEmailBtn || 'SALES@HYDRATIONIDEA.COM'}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a href="https://instagram.com/hydea_official" target="_blank" rel="noopener noreferrer" className="cp-partner-follow-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              {ct.partnerFollowBtn || 'FOLLOW US'}
            </a>
          </div>
        </div>
      </section>

      {/* Bottom Quote */}
      <section className="cp-quote">
        <div className="cp-quote-inner">
          <div className="cp-quote-line" />
          <h2 className="cp-quote-text">
            "Your skin knows<br />what your eyes don't."
          </h2>
          <p className="cp-quote-sub">ผิวของคุณรู้ในสิ่งที่ตาคุณมองไม่เห็น</p>
          <div className="cp-quote-line" />
        </div>
      </section>

      <Footer t={t.footer} nav={t.nav} />
    </div>
  );
};

export default ContactPage;
