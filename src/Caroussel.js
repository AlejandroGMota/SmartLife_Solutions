import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from './images/image1.jpg';
import image2 from './images/image2.png';
import image3 from './images/image3.png';



function Caroussel() {

  const divCaroussel = {
    background: "#F5F5DC",
    width: "90vw" ,
    padding:"5vw",

  };

  const HugeTypography   = {
    marginTop: "12vh",
    textAlign: "center",
    fontSize: "clamp(3rem, 3vw, 5rem)",
    fontFamily: "serif",
    fontStyle: "italic"

  };

  return (
    <div style={divCaroussel}>
       <Carousel showThumbs={false} showIndicators={false} showStatus={false}  autoPlay={true} interval={1700} infiniteLoop={true} >
      <div>
        <img src={image1} alt="Image 1" />
      </div>
      <div>
        <img src={image2} alt="Image 2" />
      </div>
      <div>
        <img src={image3} alt="Image 3" />
      </div>
    </Carousel>
      
    <h2 style={HugeTypography}>"Pequeños detalles con grandes posibilidades"
    </h2>

    </div>
   
  );
}

export default Caroussel;

