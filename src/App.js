
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';

import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/hombres' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/mujeres' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/niños' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/carro' element={<Cart/>}/>
        <Route path='/InicioSesion' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    
    </div>
  );
}

export default App;
