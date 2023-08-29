import React from 'react';
import i0 from './images/fundas/55.jpeg';
import i1 from './images/fundas/54.jpeg';
import i2 from './images/fundas/121.jpeg';

function Audifonos({updateCart}) {
  const buttonStyles = {
    backgroundColor: '#25D366',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    textDecoration: 'none',
    display: 'inline-block',
    cursor: 'pointer',
    border: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'background-color 0.5s ease',
  };
  const addToCartConst = (product) => {

        
        

    const fullCart = (localStorage.getItem('Cart'))? JSON.parse(localStorage.getItem('Cart')):[];


    const cart = localStorage.getItem("Cart");
    const cartItem = {item:product.name, IdItem:product.id, Cant:1, Precio:product.price};
    
    if (localStorage.getItem('Cart')) {

      let match= false;
      for (let i = 0; i < JSON.parse(cart).length; i++) {
        if (JSON.parse(cart)[i].IdItem === product.id) {
          cartItem.Cant=JSON.parse(cart)[0].Cant;
          fullCart[i].Cant++;
          match=true;
        }
      }
      if (!match) {
        console.log(match);
      fullCart.push(cartItem); updateCart();
      }
    }
    else{
      fullCart.push(cartItem); updateCart();
    }
    

    localStorage.setItem("Cart", JSON.stringify(fullCart) );
  }
  
  const products = [
    { id: 31, name: 'AirPods Pro (segunda generación)', price: 500, imageUrl: i0 },
    { id: 32, name: 'AirPods (segunda generación)', price: 350, imageUrl: i1 },
    { id: 33, name: 'EarPods con conector Lightning', price: 200, imageUrl: i2 },
  ];

  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
  };

  const productStyles = {
    border: '1px solid #ddd',
    padding: '20px',
    textAlign: 'center',
  };

  const divS = {
    background: "rgb(245, 245, 220)",
    width:"90vw",
    padding:"5vw"
  };
  const tittlesS = {
    fontSize: "clamp(2rem, 2vw, 3rem)",
    fontFamily: "sans-serif"
  };

  return (
    <div style={divS} id='audifonos'>
      <h2 style={tittlesS}>Audifonos</h2>
      <div style={gridStyles}>
        {products.map(product => (
          <div key={product.id} style={productStyles}>
            <img src={product.imageUrl} alt={product.name} style={{ maxWidth: '90%' }} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button style={buttonStyles } onClick={() => addToCartConst( product)}  onMouseOver={event => {event.target.style.backgroundColor = 'rgb(144 156 243)';}} onMouseOut={event => {event.target.style.backgroundColor = '#25D366';}}>Agregar al carrito 🛒 </button> 

          </div>
        ))}
      </div>
    </div>
  );

  }
  
  export default Audifonos;