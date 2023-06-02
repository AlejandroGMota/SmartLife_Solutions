import MyCartSVG from './cartComp';

import './App.css';




function MainHeader() {
  return (
    <div className="Header">
        <header className="App-header">
        <p>
          SmartLife Solutions
        </p>
        <a
          className="App-link"
          href="https:/www.Alejandrogmota.com"
          rel="noopener noreferrer"
        >
          Developer Site
        </a>

        <MyCartSVG />
            
      </header>
    </div>
  );
}
export default MainHeader;
