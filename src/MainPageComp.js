import React, { useState } from 'react';
import './index.css';
import MainHeader from './MainHeader';
import Caroussel from './Caroussel';
import Fundas from './Fundas';
import Micas from './Micas';
import Cargadores from './Cargadores';
import Audifonos from './Audifonos';
import Footer from './Footer';


function MainPageComp() {

    const [cartItemsLength, setCartItemsLength] = useState(localStorage.getItem("Cart")?JSON.parse(localStorage.getItem("Cart")).length:0);
    
  
    const updateCart = () => setCartItemsLength(cartItemsLength+1)

  
  
    return (

    <div>
    <MainHeader cartItemsLength={cartItemsLength} updateCart={updateCart} />
    <Caroussel />
    <Fundas updateCart={updateCart}  />
    <Micas updateCart={updateCart}  />
    <Cargadores />
    <Audifonos />
    <Footer />
    </div>
    );
  }
  
  export default MainPageComp;








  


