import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { translations } from './i18n';
import Header from './components/Header';
import Hero from './components/Hero';
import Story from './components/Story';
import Products from './components/Products';
import Business from './components/Business';
import Contact from './components/Contact';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [lang, setLang] = useState('en');
  const t = translations[lang];

  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header lang={lang} setLang={setLang} t={t.nav} />
                <main>
                  <Hero t={t.hero} />
                  <section id="story">
                    <Story t={t.story} />
                  </section>
                  <section id="products">
                    <Products t={t.products} />
                  </section>
                  <section id="business">
                    <Business t={t.business} />
                  </section>
                  <section id="contact">
                    <Contact t={t.contact} />
                  </section>
                </main>
                <Footer t={t.footer} nav={t.nav} />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <ContactPage lang={lang} setLang={setLang} t={t} />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
