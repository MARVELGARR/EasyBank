import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'


function App() {

  return (
    <div className="App bg-white">
      <Header/>
      <Hero/>
      <Footer/>
    </div>
  )
}

export default App
