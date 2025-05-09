import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero/Hero'
import Program from './components/Programs/Program'
import About from './components/About us/About'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="Container">
      <Program/>
      <About/>
      

      </div>
      
    </div>
  )
}

export default App
