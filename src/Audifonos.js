import React from 'react';
import i0 from './images/fundas/55.jpeg';
import i1 from './images/fundas/54.jpeg';
import i2 from './images/fundas/121.jpeg';

function Audifonos() {
  const products = [
    { id: 1, name: 'AirPods Pro (segunda generación)', price: '$500', imageUrl: i0 },
    { id: 2, name: 'AirPods (segunda generación)', price: '$350', imageUrl: i1 },
    { id: 3, name: 'EarPods con conector Lightning', price: '$200', imageUrl: i2 },
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
          </div>
        ))}
      </div>
    </div>
  );

  }
  
  export default Audifonos;