import React from 'react';
import "../Home.css";
import { Carousel } from 'react-bootstrap';


export default function Services() {
  return (
    <div style={{display:'flex', justifyContent:'center'}}>
      <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://kristinadamil.com.mk/wp-content/uploads/2019/05/sku-65989834_1_.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://kristinadamil.com.mk/wp-content/uploads/2019/05/sku-65989834_1_.jpg"
              alt="Second slide"
            />
        
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://kristinadamil.com.mk/wp-content/uploads/2019/05/sku-65989834_1_.jpg"
              alt="Third slide"
            />
        
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </div>
    
  )
}
