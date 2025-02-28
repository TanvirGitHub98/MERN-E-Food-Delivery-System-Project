import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio itaque ullam ut nemo eaque, nobis deserunt doloremque sed blanditiis ex dolorum sapiente explicabo? Optio inventore repudiandae neque accusantium iusto quas</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="fblogo" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>

            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>

            </div>

            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+880-10393-3993-90</li>
                    <li>contact@gmail.com</li>
                </ul>

            </div>
            
        </div>
        <hr/>
        <p className="footer-copyright">Copyright 2024 @Tanvir Hasan- All right reserved</p>

    </div>
  )
}

export default Footer