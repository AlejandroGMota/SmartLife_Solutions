import React from 'react';
import MyCartComp from './cartComp';

function MainHeader({cartItemsState, updateCart}) {

    const headerStyles = {
    position: 'fixed',
    top: 0,            
    width: '100%',
    zIndex:1000,
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


  const link1 = {
    color:"#fff",
    textDecoration: "none",
  };

  

  

  return (
    <div className="MainHeader">
      <header style={headerStyles}>
        <div style={appHeaderStyles}>
          <div style={logoContainerStyles}>
            <img src="/SmartLife_Solutions/logo.png" alt="Company Logo" style={logoStyles} />
            <h1 style={titleStyles} >
              GAMACELL
            </h1>
          </div>


          <div style={menuStyles}>
          <div style={menuItemStyles}>
            <a style={link1} href='#fundas'> 
            <span>Fundas</span>
            </a>
          </div>
          <div style={menuItemStyles}>
          <a style={link1} href='#micas'> 
            <span>Micas</span>
          </a>
          </div>
          <div style={menuItemStyles}>
          <a style={link1} href='#cargadores'> 
            <span >Cargadores</span>
            </a>
          </div>
          <div style={menuItemStyles}>
          <a style={link1} href='#audifonos'> 

            <span>Audífonos</span>
             
          </a>

          </div>
          </div>

          

          <div style={cartContainerStyles}>
            <MyCartComp cartItemsState ={cartItemsState} updateCart={updateCart} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default MainHeader;
