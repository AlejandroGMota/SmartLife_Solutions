import React, { useState } from 'react';

function MyCartComp({cartItemsState, updateCart}) {

  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };


  
  const cartCountStyles = {
    backgroundColor: '#e74c3c',
    color: 'white',
    fontSize: '14px',
    fontWeight: 'bold',
    padding: '4px 8px',
    borderRadius: '50%',
    marginLeft: '10px',    
  };
  const cartStyle = {
    position: 'fixed',
    bottom: '20px', // Adjust this value to control the vertical position
    right: '20px', // Adjust this value to control the horizontal position
    width: '300px', // Set the width of the floating window
    backgroundColor: '#fff',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    borderRadius: '5px',
    zIndex: '1000', 
  }


  const cartItems = localStorage.getItem("Cart")? JSON.parse(localStorage.getItem("Cart")):[];
  let TotalCart=0;

  const TotalCartcal= ()=>{ for (let i = 0; i < cartItems.length; i++) {
    TotalCart = TotalCart + (cartItems[i].Cant * cartItems[i].Precio)
  }
  return TotalCart;
  }



  return (
    <div  >

      <div onClick={toggleCart} onMouseOver={event => {event.target.style.cursor = 'pointer';}} >
        
      
      <svg
        width="18.3mm"
        height="14.4mm"
        viewBox="0 0 183.00392 144.07838"
        version="1.1"
        id="svg5"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs id="defs2" />
        <g id="layer1" transform="translate(-12.99487,-12.081195)">
          <path
            style={{ fill: '#000000', strokeWidth: '0.264345' }}
            d="M 195.99878,33.905324 40.497903,25.438964 30.314616,13.097158 13.074295,12.081195 c -0.923954,9.434338 6.360284,7.170179 14.197911,8.127709 l 4.774557,5.568714 32.451141,75.519952 -14.19791,19.64196 v 6.43443 H 173.68656 l 0.33805,-6.43443 H 58.751134 l 12.16963,-16.25542 97.696336,-5.757123 z"
            id="path359"
          />
          <ellipse
            style={{ fill: '#000000', strokeWidth: '0.209915' }}
            id="path413"
            cx="-153.0658"
            cy="141.93611"
            rx="13.521816"
            ry="13.884835"
            transform="scale(-1,1)"
          />
          <ellipse
            style={{ fill: '#000000', strokeWidth: '0.209915' }}
            id="path413-7"
            cx="-69.906639"
            cy="142.27477"
            rx="13.521816"
            ry="13.884835"
            transform="scale(-1,1)"
          />
        </g>
      </svg>

      <span  style={cartCountStyles}>{cartItemsState}</span> 

      </div>


      {isCartVisible && (
        <div style={cartStyle}>
          <h2>Tu carrito</h2>

          
          <ol>
            {cartItems.map((item, index) => ( 
            <li key={index}>
              {item.item} - Quantity: {item.Cant} - Price: ${item.Precio} - Total ${item.Precio * item.Cant} 
              
            </li>
            ))}
          </ol>

        <p>Total: ${TotalCartcal()}</p>
        </div>
      )}
       

  </div>

  );
}

export default MyCartComp;