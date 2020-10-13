import React from "react";
import { Carousel, Container } from "react-bootstrap";
import carousel1 from "../../../images/carousel-1.png";
import carousel2 from "../../../images/carousel-2.png";
import carousel3 from "../../../images/carousel-3.png";
import carousel4 from "../../../images/carousel-4.png";
import carousel5 from "../../../images/carousel-5.png";
import "./WorksSample.css";

const WorksSample = () => {
  return (
    <section className="works-container mt-5">
      <Container>
        <h2 className="text-center text-white mb-5">
          Here are some of <span style={{ color: "#7AB259" }}>our works</span>{" "}
        </h2>
        <Carousel className="w-75 h-75 m-auto">
          <Carousel.Item>
            <img
              className="d-block w-100 h-75"
              src={carousel1}
              alt="First slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-75"
              src={carousel2}
              alt="secund slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 h-75"
              src={carousel4}
              alt="Third slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-75"
              src={carousel5}
              alt="Fourth slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </section>
  );
};

export default WorksSample;
