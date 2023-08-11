import React from 'react';
import i0 from './images/fundas/471.jpeg';
import i1 from './images/fundas/51.jpeg';
import i2 from './images/fundas/21.webp';

function Micas() {
  const products = [
    { id: 1, name: 'Mica cristal templado sencilla', price: '$45', imageUrl: i0 },
    { id: 2, name: 'Mica de privacidad hidrogel', price: '$150', imageUrl: i1 },
    { id: 3, name: 'Mica de cristal templado 9D', price: '$70', imageUrl: i2 },
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
    <div style={divS} id='micas'>
      <h2 style={tittlesS}>Micas</h2>
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
  
  export default Micas;