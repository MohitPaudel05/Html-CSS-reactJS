import React from "react";
import './Hero.css'
import arrow from '../../assets/sidearrow.png'

const Hero = () =>{
    return(
        <div className="Hero Container">
            <div className="Hero-text">
                <h1>Welcome to  Btech. Ed IT</h1>
                <p>Perfect for students where you can get all the necessary resouces, study materials, past question, solutions, model questions</p>
                <button className="btn">Click Here <img src={arrow} alt="arrow-->" /></button>
            </div>

        </div>
    );
};

export default Hero