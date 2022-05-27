import React from 'react'
import './index.css'

function Contact() {
  return (
    <>
      <h1>Contáctanos</h1>
      <div className='contact-container'>
        <p className='schedule'>HORARIO DE ATENCIÓN: lunes a viernes 9 a 19 hs.</p>
        
        <h4>Datos de Contacto</h4>
        <p>+54 (011) 1122-3344</p>
        <p>info@mimgames.com</p>
        <p>Calle 123 (Villa Urquiza, Ciudad Autónoma de Buenos Aires)</p>

        <h4>Redes Sociales</h4>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a>    
      </div>    
    </>
  )
}
export default Contact