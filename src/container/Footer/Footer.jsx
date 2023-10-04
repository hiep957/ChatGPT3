import React from 'react'
import './Footer.css'
import gpt3Logo from '../../assets/logo.svg';
const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
      </div>

      <div className='gpt3__footer-btn'>
        <p>Request Early Acess</p>
      </div>

      <div className="gpt3__footer-links">

        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="gpt3_logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
      
        <iframe className='gpt3__footer-links-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.6520329294767!2d105.84252257510451!3d21.006581080637183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac76157d30a3%3A0x9cdc350b8f4e8f0c!2zxJDhuqFpIEjhu41jIELDoWNoIEtob2E!5e0!3m2!1sen!2s!4v1696409933962!5m2!1sen!2s" 
          width="250" height="300" style={{border:0}}
          allowfullscreen="" loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>




    </div>
  )
}

export default Footer