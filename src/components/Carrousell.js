import React from "react";
import Carousel from "react-bootstrap/Carousel";
import insurance1 from "../img/insurance1.jpg";
import insurance2 from "../img/insurance2.jpg";
import insurance3 from "../img/insurance3.jpg";
import Image from "react-bootstrap/Image";

// import ExampleCarouselImage from "components/ExampleCarouselImage";
const Carrousell = () => {
  return (
    <div>
      <Carousel controls="none" fade data-bs-theme="dark">
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={insurance1}
            alt="First slide"
            fluid
          />
          {/* <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={insurance2}
            alt="Second slide"
            fluid
          />
          {/* <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={insurance3}
            alt="Third slide"
            fluid
          />
          {/* <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carrousell;
