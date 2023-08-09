import React from 'react';

function Fundas() {
      const products = [
        { id: 1, name: 'Producto 1', price: '$19.99', imageUrl: 'product1.jpg' },
        { id: 2, name: 'Producto 2', price: '$29.99', imageUrl: 'product2.jpg' },
        { id: 3, name: 'Producto 3', price: '$14.99', imageUrl: 'product3.jpg' },
        { id: 4, name: 'Producto 4', price: '$24.99', imageUrl: 'product4.jpg' },
        { id: 5, name: 'Producto 5', price: '$39.99', imageUrl: 'product5.jpg' },
        { id: 6, name: 'Producto 6', price: '$17.99', imageUrl: 'product6.jpg' },
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
    
      return (
        <div style={gridStyles}>
          {products.map(product => (
            <div key={product.id} style={productStyles}>
              <img src={product.imageUrl} alt={product.name} style={{ maxWidth: '90%' }} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      );
    
    
  }
  
  export default Fundas;