import React, { useEffect, useState } from "react";
import nash from "../../../images/nash.png";
import miriam from "../../../images/miriam.png";
import bria from "../../../images/bria.png";
import loader from "../../../images/logos/loadder.gif";
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
  const [allFeedbacks, setAllFeedbacks] = useState([]);
  useEffect(() => {
    fetch("https://lit-reaches-99351.herokuapp.com/show-feedbacks")
      .then((res) => res.json())
      .then((result) => {
        setAllFeedbacks(result.slice(-6));
      });
  }, []);
  return (
    <section className="mt-5 pt-3 mb-5 pb-5">
      <Container>
        <h2 style={{ color: "#171B4E" }} className="text-center">
          Clients <span style={{ color: "#7AB259" }}>Feedback</span>
        </h2>
        <Row className="d-flex justify-content-between mt-5 pt-4">
          {allFeedbacks.length < 1 && (
            <img
              src={loader}
              style={{ width: "300px", margin: "auto" }}
              alt=""
            />
          )}
          {allFeedbacks.map((feedback) => (
            <FeedbackCard key={feedback._id} feedback={feedback}></FeedbackCard>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Feedback;
