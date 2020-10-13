import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container mt-5 pt-5">
      <Container>
        <Row className="mt-4">
          <Col md={6}>
            <h2 style={{ color: "#2D2D2D" }}>
              Let us handle your <br /> project, professionally.
            </h2>
            <p className="mt-3">
              With well written codes, we build amazing apps for all <br />{" "}
              platforms, mobile and web apps in general.
            </p>
          </Col>
          <Col md={6}>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Your email address" />
              </Form.Group>

              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Your name / company name"
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control
                  as="textarea"
                  rows={8}
                  placeholder="Your massage"
                />
              </Form.Group>
              <Button
                style={{ backgroundColor: "#111430", width: "170px" }}
                variant="primary"
                type="submit"
              >
                Send
              </Button>
            </Form>
          </Col>
        </Row>
        <p className="text-center mt-5 pt-5">
          <small>copyright Orange labs 2020</small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
