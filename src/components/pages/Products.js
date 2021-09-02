import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "../Products.css"

export default function Products() {
  return (
  <div className="products-container">
      <div className = "carousel">
      <Carousel infiniteLoop = {true}>
            <div>
              <img src={process.env.PUBLIC_URL + '/kujna1.jpg'} alt="sranje" />
              <p className="legend" >Legend 1</p>
            </div>
            <div>
              <img src={process.env.PUBLIC_URL + '/kujna2.jpg'} alt="gomno" />
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <img src={process.env.PUBLIC_URL + '/kujna3.jpeg'} alt="gomno" />
              <p className="legend">Legend 3</p>
            </div>
            <div>
              <img src={process.env.PUBLIC_URL + '/kujna4.jpeg'} alt="sranje" />
              <p className="legend" >Legend 1</p>
            </div>
            <div>
              <img src={process.env.PUBLIC_URL + '/plakar1.jpg'} alt="gomno" />
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <img src={process.env.PUBLIC_URL + '/plakar2.jpg'} alt="gomno" />
              <p className="legend">Legend 3</p>
            </div>
            <div>
              <img src={process.env.PUBLIC_URL + '/plakar3.jpeg'} alt="gomno" />
              <p className="legend">Legend 3</p>
            </div>
            <div>
              <img src={process.env.PUBLIC_URL + '/proektkujna1.webp'} alt="gomno" />
              <p className="legend">Legend 3</p>
            </div>
        </Carousel>
      </div>
        
</div>)
}
