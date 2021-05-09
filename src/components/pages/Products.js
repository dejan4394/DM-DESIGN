import React from 'react';
import {Carousel} from "react-bootstrap";
import "../Products.css"

export default function Products() {
  return <div className="container">
  <Carousel>
  <Carousel.Item className="messi">
    <img
      className="d-block w-100"
      src="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ec595d45f39760007b05c07%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D989%26cropX2%3D2480%26cropY1%3D74%26cropY2%3D1564"
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
      src="https://phantom-marca.unidadeditorial.es/acbb66319bb114f268bfd53dbd949def/resize/1320/f/jpg/assets/multimedia/imagenes/2021/04/23/16191310612671.jpg"
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
      src="https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1344x250:1346x248)/origin-imgresizer.eurosport.com/2021/04/29/3123417-64024068-2560-1440.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
}
