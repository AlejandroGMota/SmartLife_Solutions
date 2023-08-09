import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from './images/image1.jpeg';
import image2 from './images/image2.jpeg';
import image3 from './images/image3.jpeg';



function Caroussel() {

  const divCaroussel = {
    background: "#F5F5DC",
    width: "90vw" ,
    padding:"5vw"
  };

  const HugeTypography   = {
    textAlign: "center",
    fontSize: "clamp(3rem, 3vw, 5rem)",
    fontFamily: "serif"
  };

  return (
    <div style={divCaroussel}>
       <Carousel showThumbs={false} showIndicators={true} showStatus={false}  autoPlay={true} interval={3000} infiniteLoop={true}>
      <div>
        <img src={image1} alt="Image 1" />
        <p className="legend">Image 1</p>
      </div>
      <div>
        <img src={image2} alt="Image 2" />
        <p className="legend">Image 2</p>
      </div>
      <div>
        <img src={image3} alt="Image 3" />
        <p className="legend">Image 3</p>
      </div>
    </Carousel>
      
    <h2 style={HugeTypography}>Eslogan</h2>

    </div>
   
  );
}

export default Caroussel;

