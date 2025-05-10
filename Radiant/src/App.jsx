import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero/Hero'
import Program from './components/Programs/Program'
import About from './components/About us/About'
import Title from './components/Title/Title'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="Container">
        <Title title='OUR PROGRAMS'/>
      <Program/>
     
      <About/>
      <Title title='CONTACT US'/>
      <Contact/>
      

      </div>
      
    </div>
  )
}

export default App
