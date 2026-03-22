import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Story from './components/Story'
import Products from './components/Products'
import Business from './components/Business'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [language, setLanguage] = useState('en')

  return (
    <div className="App">
      <Header language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <Story language={language} />
      <Products language={language} />
      <Business language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  )
}

export default App
