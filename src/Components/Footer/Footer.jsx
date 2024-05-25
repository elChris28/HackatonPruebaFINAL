import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer_logo} alt="" />
            <p>KOTSE</p>
        </div>
        <ul className='footer-links'>
            <li>Compañia</li>
            <li>Productos</li>
            <li>Oficinas</li>
            <li>Nosotros</li>
            <li>Contacto</li>
        </ul>
        <div className='footer-social-icon'>
            <div className="footer-icons-container">
                <img src={instagram_icon} alt="" />
            </div>

            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>@ 2024 - Todos los derechos reservados "Christofer Jhon".</p>
        </div>
    </div>
  )
}

export default Footer