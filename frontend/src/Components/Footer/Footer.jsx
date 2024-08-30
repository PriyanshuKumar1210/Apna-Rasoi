import React from 'react'
import './Footer.css'
import { assets } from '../../assets/foodassets/frontend_assets/assets'

const Footer = () => {
  return (
    <>
        <div className='footer' id='footer'>
                <div className='footer-content'>

                <div className="footer-content-left">
                    <div className="appdesc">
                    <img id='app-logo' src={assets.logo} ></img> 
                    <h3 id="app-name">Apna Rasoi</h3>

                    </div>
                 
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate tempore molestias temporibus rerum! Aliquam cupiditate quisquam nobis facilis alias animi dolores eos illum? Tenetur fuga autem recusandae velit at aut?</p>

                        <div className="footer-social-icons">

                            <img src={assets.facebook_icon}></img>
                            <img src={assets.twitter_icon}></img>
                            <img src={assets.linkedin_icon}></img>
                        </div>
                </div>
            
                <div className="footer-content-center">

                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy & Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">

                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91 834018676</li>
                        <li>apnarasoi@gmail.com</li>
                    </ul>
                </div>
            </div>
      <hr/>
        <p className='footer-copyright'>Copyright © Apna Rasoi - All Right Reserved</p>
      </div>
    
    </>

  )
}

export default Footer
