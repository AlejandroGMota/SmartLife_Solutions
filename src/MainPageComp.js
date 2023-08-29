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


    const [cartItemsState, setCartItemsState] = useState(localStorage.getItem("Cart")?JSON.parse(localStorage.getItem("Cart")).length:0);
    
  
    const updateCart = () => setCartItemsState(cartItemsState+1)

  
  
    return (

    <div>
    <MainHeader cartItemsState={cartItemsState} updateCart={updateCart} />
    <Caroussel />
    <Fundas updateCart={updateCart}  />
    <Micas updateCart={updateCart}  />
    <Cargadores updateCart={updateCart}/>
    <Audifonos updateCart={updateCart}/>
    <Footer />
    </div>
    );
  }
  
  export default MainPageComp;








  


