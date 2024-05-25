import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {

    const {product} = props;
    const {addToCart}= useContext(ShopContext);

  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>

            <div className="display-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className='productdisplay-right'>
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>

            </div>

            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">S/{product.old_price}</div>
                <div className="productdisplay-right-price-new">S/{product.new_price}</div>
            </div>

            <div className="productdisplay-right-description">
            Una camisa tipo jersey, liviana, generalmente de punto, ajustada y PONER DESCRIPCION
            </div>
            <div className="productdisplay-right-size">
                <h1>Seleccionar talla</h1>
                <div className="productdisplay-right-sizes">
                    <button> S</button>
                    <button >M</button>
                    <button >L</button>
                    <button >XL</button>
                    <button >XXL</button>
                </div>
            </div>

            <div className='productdisplay-right-button'>
                <button onClick={()=>{addToCart(product.id)}}>AÑADIR AL CARRITO</button>
                <p className='productdisplay-right-category'><span>Categoria :</span> Mujer, Camiseta, Crop Top</p>
                <p className='productdisplay-right-category'><span>Etiquetas :</span> Moderno</p>
            </div>
            
        </div>
    </div>
  )
}

export default ProductDisplay