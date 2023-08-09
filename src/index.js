import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainHeader from './MainHeader';
import Caroussel from './Caroussel';
import Fundas from './Fundas';
import  Cargadores from './Cargadores';
import Audifonos from './Audifonos';
import Footer from './Footer';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainHeader />

    
    <Caroussel />
    <Fundas />
    <Cargadores />
    <Audifonos />
    <Footer />

  </React.StrictMode>
);

reportWebVitals();
