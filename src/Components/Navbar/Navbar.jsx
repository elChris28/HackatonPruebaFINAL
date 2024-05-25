import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'


const Navbar = () => {

    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems}=useContext(ShopContext)

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="" />
            <p>KOTSE</p>

        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}} ><Link style={{textDecoration:'none'}} to='/'>Tienda</Link>  {menu ==="shop"?<hr/>:<></>} </li>
            <li onClick={()=>{setMenu("hombres")}} ><Link style={{textDecoration:'none'}} to='/hombres'>Hombre</Link>  {menu ==="hombres"?<hr/>:<></>} </li>
            <li onClick={()=>{setMenu("mujeres")}} ><Link style={{textDecoration:'none'}} to='/mujeres'>Mujer</Link>  {menu ==="mujeres"?<hr/>:<></>} </li>
            <li onClick={()=>{setMenu("niños")}} ><Link style={{textDecoration:'none'}} to='/niños'>Niño</Link>  {menu ==="niños"?<hr/>:<></>} </li>
        </ul>

        <div className='nav-login-cart'>
            <Link to='/InicioSesion'><button>Ingresar</button></Link>
            <Link to='/carro'><img src={cart_icon} alt="" /></Link>

            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
        
    </div>
  )
}

export default Navbar