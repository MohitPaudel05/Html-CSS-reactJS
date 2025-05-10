import React from 'react'
import './Contact.css'
import email from '../../assets/email-icon.png'
import phone from '../../assets/phone.png'
import location from '../../assets/location.png'
const Contact = () => {
  return (
    <div>
        <div className="contact Container">
            <div className="contact-col">
                <h3>Send us a message <img src={email} alt="" /></h3>
                <p>We'd love to hear from you! Whether you have a specific enquiry or you just want to receive more information .</p>
                <ul>
                    <li> <img src={email} alt="" />radiant@edu.np</li>
                    <li><img src={phone} alt="" />+977 98056000000</li>
                    <li><img src={location} alt="" />Tilottma-5, Manigram</li>
                </ul>
            </div>
            <div className="contact-col">
            <form >
                <label >Name</label>
                <input type="text" placeholder='Enter your name' name='name' required />
                <label>Contact Number</label>
                <input type="text" placeholder='Enter your contact number' name='contact'  required/>
                <label >Message</label>
                <textarea name="message" placeholder='Enter your message' rows='6' required></textarea>
                <button type='submit'className='btn'>Submit</button>
                
                
                
            </form>
            </div>
        </div>
        
      
    

    </div>
  )
}

export default Contact
