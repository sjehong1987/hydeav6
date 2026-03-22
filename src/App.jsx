import React, { useState } from 'react';
import { translations } from './i18n';
import Header from './components/Header';
import Hero from './components/Hero';
import Story from './components/Story';
import Products from './components/Products';
import Business from './components/Business';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [lang, setLang] = useState('en');
  const t = translations[lang];

  return (
    <div className="app-container">
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
    </div>
  );
}

export default App;
