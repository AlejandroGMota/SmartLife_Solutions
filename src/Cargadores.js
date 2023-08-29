import React from 'react';
import i0 from './images/fundas/32.jpeg';
import i1 from './images/fundas/515.jpeg';
import i2 from './images/fundas/12.jpeg';

function Cargadores() {

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
    const messages = (product) => {
  
      var waurlproduct = product.name.replace(/\s+/g, '%20');
      
     
        
        console.log('https://wa.me/527712384167?text=Me%20interesa%20este%20producto%20'+ waurlproduct);
  
        window.open('https://wa.me/527712384167?text=Me%20interesa%20este%20producto%20'+ waurlproduct);
    }


  const products = [
    { id: 1, name: 'Adaptador de corriente USB-C de 20 W', price: '$200', imageUrl: i0 },
    { id: 2, name: 'Cable de USB-C a Lightning (1 m)', price: '$100', imageUrl: i1 },
    { id: 3, name: 'Cargador MagSafe', price: '$200', imageUrl: i2 },
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
    background: "rgb(250, 249, 248)",
    width:"90vw",
    padding:"5vw"
  };
  const tittlesS = {
    fontSize: "clamp(2rem, 2vw, 3rem)",
    fontFamily: "sans-serif"
  };

  return (
    <div style={divS} id='cargadores'>
      <h2 style={tittlesS}>Cargadores</h2>
      <div style={gridStyles}>
        {products.map(product => (
          <div key={product.id} style={productStyles}>
            <img src={product.imageUrl} alt={product.name} style={{ maxWidth: '90%' }} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button style={buttonStyles } onClick={() => messages(product)} onMouseOver={event => {event.target.style.backgroundColor = 'rgb(144 156 243)';}} onMouseOut={event => {event.target.style.backgroundColor = '#25D366';}}>Agregar al carrito 🛒 </button> 

          </div>
        ))}
      </div>
    </div>
  );

  }
  
  export default Cargadores;