
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainHeader from './MainHeader';
import Caroussel from './Caroussel';
import Fundas from './Fundas';
import Micas from './Micas';
import Cargadores from './Cargadores';
import Audifonos from './Audifonos';
import Footer from './Footer';

import ShoppingCart from './ShoppingCart';


import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const addToCart = (product, cartItems, setCartItems) => {
  console.log('Product added to cart:', product);

  const updatedCart = [...cartItems];
  const existingItem = updatedCart.find(item => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    updatedCart.push({ ...product, quantity: 1 });
  }
  
  setCartItems(updatedCart);
};

root.render(
  <React.StrictMode>
    <MainHeader />

    
    <Caroussel />
    <Fundas addToCart={addToCart}  />
    <Micas />
    <Cargadores />
    <Audifonos />
    <Footer />

    {//<ShoppingCart addToCart={addToCart}  />
    }

  </React.StrictMode>
);

reportWebVitals();
