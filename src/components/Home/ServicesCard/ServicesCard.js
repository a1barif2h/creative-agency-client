import React from "react";
import "./ServicesCard.css";

const ServicesCard = ({ service }) => {
  console.log(service);
  return (
    <div className="text-center card-container">
      <div className="pb-3">
        <img style={{ width: "74px" }} src={service.img} alt="" />
      </div>
      <div>
        <h5 className="pb-3" style={{ color: "#111430" }}>
          {" "}
          {service.title}
        </h5>
        <p style={{ color: "#4D4D4D" }}> {service.description} </p>
      </div>
    </div>
  );
};

export default ServicesCard;
