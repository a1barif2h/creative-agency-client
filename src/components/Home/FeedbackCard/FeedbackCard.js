import React from "react";

const FeedbackCard = ({ feedback }) => {
  return (
    <section
      style={{
        width: "370px",
        height: "212px",
        border: "1px solid #dddddd",
        padding: "35px",
      }}
    >
      <div className="d-flex">
        <div className="mr-2">
          <img style={{ width: "45px" }} src={feedback.img} alt="" />
        </div>
        <div style={{ marginTop: "4px" }}>
          <h6 style={{ fontWeight: "bold" }}> {feedback.name} </h6>
          <p style={{ marginTop: "-10px" }}> {feedback.designation} </p>
        </div>
      </div>
      <p> {feedback.massage} </p>
    </section>
  );
};

export default FeedbackCard;
