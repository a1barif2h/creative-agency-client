import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import frame from "../../../images/logos/Frame.png";

const HeaderMain = () => {
  return (
    <main>
      <Container className="mt-5 mb-5 pb-5">
        <Row>
          <Col md={5} className="mt-5">
            <h1 style={{ color: "#111430" }}>
              Let’s Grow Your <br /> Brand To The <br /> Next Level
            </h1>
            <p style={{ color: "#000000" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              commodo ipsum duis laoreet maecenas. Feugiat{" "}
            </p>
            <Button style={{ background: "#111430", width: "170px" }}>
              Hire us
            </Button>
          </Col>
          <Col md={7}>
            <img style={{ width: "620px" }} src={frame} alt="" />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default HeaderMain;
