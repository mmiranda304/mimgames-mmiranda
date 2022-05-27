import React from 'react'
import { FaInstagram, FaFacebookSquare, FaRegEnvelope } from "react-icons/fa"
import './index.css'

function Footer() {
  return (
    <div className='footer-container'>
      <div className='contacts'>
        <div className='social-media'>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><FaInstagram/></a>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><FaFacebookSquare/></a>
          <a href="mailto:info@mimgames.com"><FaRegEnvelope/></a>
        </div>
      </div>
      <p className='copyright'>© 2022 made by mmiranda304</p>
    </div>
  )
}
export default Footer