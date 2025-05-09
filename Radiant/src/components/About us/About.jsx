import React from 'react'
import './About.css'
import leftImage from "../../assets/blog-recent-3.jpg"
import playicon from "../../assets/playicon.png"

const About = () => {
  return (
    <div className='About'>
        <div className="About-left">
            <img src={leftImage} alt=""  className='leftImage'/>
            <img src={playicon} alt="" className='playicon' />

        </div>
        <div className="About-right">
            <h3>ABOUT US</h3>
            <h2>Groups of lazy folks interested in IT</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque earum, unde culpa asperiores doloremque necessitatibus corrupti.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, reprehenderit. Impedit quis quos eligendi iste.</p>

        </div>
      
    </div>
  )
}

export default About
