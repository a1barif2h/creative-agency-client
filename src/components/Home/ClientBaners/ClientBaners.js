import React from "react";
import slack from "../../../images/logos/slack.png";
import google from "../../../images/logos/google.png";
import netflix from "../../../images/logos/netflix.png";
import airbnb from "../../../images/logos/airbnb.png";
import uber from "../../../images/logos/uber.png";
import { Col, Container, Row } from "react-bootstrap";

const ClientBaners = () => {
  return (
    <Container className="mt-5 pt-5">
      <Row
        style={{ cursor: "pointer" }}
        className="d-flex justify-content-between"
      >
        <Col md={2}>
          <img style={{ width: "140px" }} src={slack} alt="" />
        </Col>
        <Col md={2}>
          <img style={{ width: "129px" }} src={google} alt="" />
        </Col>
        <Col md={2}>
          <img style={{ width: "99px" }} src={uber} alt="" />
        </Col>
        <Col md={2}>
          <img style={{ width: "120px" }} src={netflix} alt="" />
        </Col>
        <Col md={2}>
          <img style={{ width: "160px" }} src={airbnb} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default ClientBaners;
