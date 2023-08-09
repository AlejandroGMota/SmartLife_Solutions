import React from 'react';

function Audifonos() {
    const footerStyles = {
      backgroundColor: '#161933',
      color: '#ffffff',
      padding: '20px 0',
      textAlign: 'center',
    };
  
    return (
      <footer style={footerStyles}>
        <p>&copy; {new Date().getFullYear()} SmartLife Solutions. All rights reserved.</p>
      </footer>
    );
  }
  
  export default Audifonos;