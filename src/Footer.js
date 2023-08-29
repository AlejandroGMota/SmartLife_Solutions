import React from 'react';

function Footer() {
  const footerStyles = {
    backgroundColor: '#222',
    color: '#fff',
    padding: '40px 0',
  };

  const containerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const companyInfoStyles = {
    flex: '1',
    padding: '0 20px',
    maxWidth: '300px',
  };

  const companyLogoStyles = {
    marginBottom: '20px',
    width: '15vw'
  };

  const sloganStyles = {
    fontSize: '18px',
    marginBottom: '20px',
  };

  const contactInfoStyles = {
    flex: '1',
    padding: '0 20px',
    maxWidth: '300px',
  };

  const addressStyles = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
  };

  const contactIconStyles = {
    fontSize: '20px',
    marginRight: '10px',
  };

  const mapStyles = {
    flex: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  };

  const mapEmbedStyles = {
    width: '100%',
    height: '300px',
    border: 'none',
    borderRadius: '10px', // Rounded corners for the map
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)', 
  };

  const copyrightStyles = {
    textAlign: 'center',
    marginTop: '20px',
  };

  return (
    <footer style={footerStyles}>
      <div style={containerStyles}>
        <div style={companyInfoStyles}>
          <div style={companyLogoStyles}>
          <img src="/SmartLife_Solutions/logo.png" alt="Company Logo" width={'200vw'}/>
          </div>
          <p style={sloganStyles}>Your Trusted Source for Mobile Accessories</p>
        </div>
        <div style={contactInfoStyles}>
          <div style={addressStyles}>
            <span style={contactIconStyles}>&#x1F4CD;</span>
            <p>1234 Main Street, City Name</p>
          </div>
          <div style={addressStyles}>
            <span style={contactIconStyles}>&#x2709;</span>
            <p>info@gamacell.com</p>
          </div>
          <div style={addressStyles}>
            <span style={contactIconStyles}>&#x260E;</span>
            <p>+1 (123) 456-7890</p>
          </div>
        </div>
        <div style={mapStyles}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d556.3762311504591!2d-98.94611427153832!3d20.26554292245801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1693276713126!5m2!1sen!2smx"
            width="600"
            height="300"
            style={mapEmbedStyles}
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div style={copyrightStyles}>&copy; 2023 GAMACELL. All rights reserved.</div>
    </footer>
  );
}

export default Footer;
