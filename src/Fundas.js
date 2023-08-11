import React from 'react';
import i0 from './images/fundas/1.jpeg';
import i1 from './images/fundas/21.jpeg';
import i2 from './images/fundas/230.jpeg';
import i3 from './images/fundas/514.jpeg';
import i4 from './images/fundas/2.jpeg';
import i5 from './images/fundas/3.jpeg';



function Fundas({ addToCart }) {



      const products = [
        { id: 1, name: 'Funda de silicón con MagSafe para el iPhone 14 - Azul tormenta', price: '$120', imageUrl: i0 },
        { id: 2, name: 'Funda de silicón con MagSafe para el iPhone 14 - Agave azul', price: '$120', imageUrl: i1 },
        { id: 3, name: 'Funda de silicón con MagSafe para el iPhone 14 - Color medianoche', price: '$120', imageUrl: i2 },
        { id: 4, name: 'Funda Figura Series de OtterBox con MagSafe para el iPhone 14 Plus - Morado        ', price: '$24.99', imageUrl: i3 },
        { id: 5, name: 'Funda de piel con tapa para el iPhone 11 Pro - Color frambuesa', price: '$180', imageUrl: i4 },
        { id: 6, name: 'Funda de piel con tapa para el iPhone 11 Pro - Color berenjena', price: '$17.99', imageUrl: i5 },
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
        <div style={divS} id='fundas'>
          <h2 style={tittlesS}>Fundas</h2>
          <div style={gridStyles}>
            {products.map(product => (
              <div key={product.id} style={productStyles}>
                <img src={product.imageUrl} alt={product.name} style={{ maxWidth: '90%' }} />
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                {/* <button onClick={() => addToCart(product)}>Add to Cart</button> */}
              </div>
            ))}
          </div>
        </div>
      );
    
    
  }
  
  export default Fundas;