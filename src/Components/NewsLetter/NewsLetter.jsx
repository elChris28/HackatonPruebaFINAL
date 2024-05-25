import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Recibe ofertas exclusivas en tu correo electrónico</h1>
        <p>Suscríbase a KOTSE y manténgase al día</p>
        <div>
            <input type="email" placeholder='E-mail'/>
            <button>Suscribirse</button>
        </div>
    </div>
  )
}

export default NewsLetter