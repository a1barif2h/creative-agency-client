import React, { useContext } from "react";
import { Card, Col } from "react-bootstrap";
import { LocalContext } from "../../../App";
import "./FeedbackCard.css";

const FeedbackCard = ({ feedback }) => {
  const [loggedInUser] = useContext(LocalContext);
  const handelDeleteFeedback = (event) => {
    fetch("https://lit-reaches-99351.herokuapp.com/delete-feedback", {
      method: "DELETE",
      headers: { "Content-Type": "application/json", id: feedback._id },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("deleted");
      });
  };
  return (
    <Col xs={12} md={6} lg={4} className="text-center">
      <Card
        onDoubleClick={handelDeleteFeedback}
        className="feedback-details-card mt-5"
        style={{ width: "90%", margin: "auto" }}
      >
        <Card.Body>
          <div className="d-flex feedback-top">
            <img
              style={{ width: "64px", height: "64px", borderRadius: "50%" }}
              src={feedback.img}
              alt=""
            />
            <div className="ml-3 mt-1">
              <h5 style={{ fontSize: "20px", fontWeight: "600" }}>
                {feedback.name}
              </h5>
              <p style={{ fontSize: "16px", fontWeight: "600" }}>
                {feedback.designationAndCompany}
              </p>
            </div>
          </div>
          <div className="feedback-description">
            <p className="mt-2" style={{ fontSize: "16px", fontWeight: "400" }}>
              {" "}
              {feedback.description}
            </p>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default FeedbackCard;
