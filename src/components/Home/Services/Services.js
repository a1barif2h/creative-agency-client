import React, { useEffect, useState } from "react";
import webMobile from "../../../images/icons/web-mobile.png";
import graphics from "../../../images/icons/graphic-design.png";
import webDevelopment from "../../../images/icons/web-development.png";
import { Col, Container, Row } from "react-bootstrap";
import ServicesCard from "../ServicesCard/ServicesCard";
import loader from "../../../images/logos/loadder.gif";

const Services = () => {
  const [allService, setAllService] = useState([]);
  useEffect(() => {
    fetch("https://lit-reaches-99351.herokuapp.com/show-all-service")
      .then((res) => res.json())
      .then((result) => {
        setAllService(result);
        console.log(result);
      });
  }, []);

  return (
    <section className="mt-5 pt-5">
      <Container>
        <h2 style={{ color: "#2D2D2D" }} className="text-center">
          Provide awesome <span style={{ color: "#7AB259" }}>services</span>{" "}
        </h2>
        <Row className="mt-5 pt-5">
          {allService.length < 1 && (
            <img
              src={loader}
              style={{ width: "300px", margin: "auto" }}
              alt=""
            ></img>
          )}

          {allService.map((service) => (
            <Col md={4}>
              <ServicesCard key={service._id} service={service}></ServicesCard>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
