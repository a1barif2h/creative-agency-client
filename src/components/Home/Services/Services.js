import React from "react";
import webMobile from "../../../images/icons/web-mobile.png";
import graphics from "../../../images/icons/graphic-design.png";
import webDevelopment from "../../../images/icons/web-development.png";
import { Col, Container, Row } from "react-bootstrap";
import ServicesCard from "../ServicesCard/ServicesCard";

const servicesData = [
  {
    title: "Web & Mobile design",
    description:
      "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
    img: webMobile,
  },
  {
    title: "Graphic design",
    description:
      "Amazing flyers, social media posts and brand representations that would make your brand stand out.",
    img: graphics,
  },
  {
    title: "Web development",
    description:
      "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
    img: webDevelopment,
  },
];
const Services = () => {
  return (
    <section className="mt-5 pt-5">
      <Container>
        <h2 style={{ color: "#2D2D2D" }} className="text-center">
          Provide awesome <span style={{ color: "#7AB259" }}>services</span>{" "}
        </h2>
        <Row className="mt-5 pt-5">
          {servicesData.map((service) => (
            <Col md={4}>
              <ServicesCard service={service}></ServicesCard>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
