import React, { useState } from 'react';
import MyCartSVG from './cartComp';

function MainHeader() {

  const [isFundaMenuOpen, setIsFundaMenuOpen] = useState(false);
  const [isMicasMenuOpen, setIsMicasMenuOpen] = useState(false);
  const [isCargadoresMenuOpen, setIsCargadoresMenuOpen] = useState(false);
  const [isAudifonosMenuOpen, setIsAudifonosMenuOpen] = useState(false);

  const toggleFundaMenu = () => {
    setIsFundaMenuOpen(!isFundaMenuOpen);
  };

  const toggleMicasMenu = () => {
    setIsMicasMenuOpen(!isMicasMenuOpen);
  };

  const toggleCargadoresMenu = () => {
    setIsCargadoresMenuOpen(!isCargadoresMenuOpen);
  };

  const toggleAudifonosMenu = () => {
    setIsAudifonosMenuOpen(!isAudifonosMenuOpen);
  }; 

  const headerStyles = {
    backgroundColor: 'rgb(85 84 84)',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
  };

  const appHeaderStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 20px',
  };

  const logoContainerStyles = {
    display: 'flex',
    alignItems: 'center',
  };

  const logoStyles = {
    height: '40px',
    width: 'auto',
    marginRight: '10px',
  };

  const titleStyles = {
    
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#e74c3c',
    
  };

  const dropdownStyles = {
    backgroundColor: '#bbb',
    position: 'fixed',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
    zIndex: '1000',
    
    
    
  };

  const menuItemStyles = {
    padding: '15px',
    margin: '20px',
    borderBottom: '1px solid rgb(221 221 221 / 39%)',

  };

  const menuStyles = {
    display: 'flex',
    color: 'white',    
  };

  const cartContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    color: '#333',
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

  const link1 = {
    color:"#fff",
    textDecoration: "none",
  };


  

  return (
    <div className="MainHeader">
      <header style={headerStyles}>
        <div style={appHeaderStyles}>
          <div style={logoContainerStyles}>
            <img src="/logo.png" alt="Company Logo" style={logoStyles} />
            <h1 style={titleStyles} >
              SmartLife Solutions
            </h1>
          </div>


          <div style={menuStyles}>
          <div style={menuItemStyles}>
            <a style={link1} href='#fundas'> 
            <span  /*onClick={toggleFundaMenu} */ >Fundas</span>
            </a>
          </div>
          <div style={menuItemStyles}>
          <a style={link1} href='#micas'> 
            <span onClick={toggleMicasMenu}>Micas</span>
            {/* 
            {isMicasMenuOpen && (
              <ul style={dropdownStyles}>
                <li>Cristal templado</li>
                <li>Cristal templado reforzado</li>
                <li>Hidrogel</li>
              </ul>
            )}
              */}
              </a>
          </div>
          <div style={menuItemStyles}>
          <a style={link1} href='#cargadores'> 
            <span onClick={toggleCargadoresMenu}>Cargadores</span>
             {/* 
            {isCargadoresMenuOpen && (
              <ul style={dropdownStyles}>
                <li>Alámbrico 5W</li>
                <li>Alámbrico 20W</li>
                <li>Inalámbrico</li>
              </ul>
            )}
              */} 
              </a>
          </div>
          <div style={menuItemStyles}>
          <a style={link1} href='#audifonos'> 

            <span onClick={toggleAudifonosMenu}>Audífonos</span>
             {/* 
            {isAudifonosMenuOpen && (
              <ul style={dropdownStyles}>
                <li>Airpods Pro</li>
                <li>Airpods 2da generación</li>
                <li>Cable</li>
              </ul>
            )}
              */}
          </a>

          </div>
          </div>

          

          <div style={cartContainerStyles}>
            {/*<MyCartSVG />
            <span style={cartCountStyles}>3</span> { Replace with actual cart count}
            */}
          </div>
        </div>
      </header>
    </div>
  );
}

export default MainHeader;
