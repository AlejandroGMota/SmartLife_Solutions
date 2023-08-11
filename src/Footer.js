import React from 'react';

function Footer() {
  const footerStyles = {
    backgroundColor: 'rgb(85 84 84)',
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

export default Footer;
