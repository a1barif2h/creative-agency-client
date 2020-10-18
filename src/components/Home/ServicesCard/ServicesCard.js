import React, { useContext } from "react";
import "./ServicesCard.css";
import { LocalContext } from "../../../App";
import { useHistory } from "react-router-dom";

const ServicesCard = ({ service }) => {
  const [loggedInUser, setLoggedInUser] = useContext(LocalContext);
  const history = useHistory();
  const handelCardOrder = () => {
    setLoggedInUser({ ...loggedInUser, service: service });
    history.push("/dashboard/order");
  };
  return (
    <div onClick={handelCardOrder} className="text-center card-container">
      <div className="pb-3">
        <img
          style={{ width: "74px" }}
          src={`data:${service.img.contentType};base64,${service.img.img}`}
          alt=""
        />
      </div>
      <div>
        <h5 className="pb-3" style={{ color: "#111430" }}>
          {service.serviceTitle}
        </h5>
        <p style={{ color: "#4D4D4D" }}> {service.description} </p>
      </div>
    </div>
  );
};

export default ServicesCard;
