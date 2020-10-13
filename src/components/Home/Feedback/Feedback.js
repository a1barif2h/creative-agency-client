import React from "react";
import nash from "../../../images/nash.png";
import miriam from "../../../images/miriam.png";
import bria from "../../../images/bria.png";
import { Col, Container, Row } from "react-bootstrap";
import FeedbackCard from "../FeedbackCard/FeedbackCard";

const feedbackData = [
  {
    name: "Nash Patrik",
    designation: "CEO, Manpol",
    massage:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere repellendus quisquam voluptates voluptate, dolore magnam?",
    img: nash,
  },
  {
    name: "Miriam Barron",
    designation: "CEO, Manpol",
    massage:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere repellendus quisquam voluptates voluptate, dolore magnam?",
    img: miriam,
  },
  {
    name: "Bria Malone",
    designation: "CEO, Manpol",
    massage:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere repellendus quisquam voluptates voluptate, dolore magnam?",
    img: bria,
  },
];
const Feedback = () => {
  return (
    <section className="mt-5 pt-3 mb-5 pb-5">
      <Container>
        <h2 style={{ color: "#171B4E" }} className="text-center">
          Clients <span style={{ color: "#7AB259" }}>Feedback</span>
        </h2>
        <Row className="d-flex justify-content-between mt-5 pt-4">
          {feedbackData.map((feedback) => (
            <Col md={4}>
              {" "}
              <FeedbackCard feedback={feedback}></FeedbackCard>{" "}
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Feedback;
