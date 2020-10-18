import React from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../../images/logos/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faCommentDots,
  faHdd,
  faPlus,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { LocalContext } from "../../../App";

const SideBar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(LocalContext);
  const generalService = ["Order", "Service list", "Review"];
  const adminService = ["Service list", "Add Service", "Make Admin"];
  return (
    <div>
      <div className="mt-5">
        <Link to="/">
          <img style={{ width: "150px" }} src={logo} alt="" />
        </Link>
      </div>
      <div className="mt-5 ">
        {loggedInUser.admin &&
          adminService.map((item, index) => {
            return (
              <Link
                key={index}
                style={{
                  color: `${
                    window.location.pathname ==
                    "/dashboard/" + item.toLowerCase().split(" ").join("-")
                      ? "#009444"
                      : "black"
                  }`,
                }}
                to={`/dashboard/${item.toLowerCase().split(" ").join("-")}`}
              >
                <div className="d-flex ml-3">
                  {index == 0 && <FontAwesomeIcon icon={faShoppingCart} />}
                  {index == 1 && <FontAwesomeIcon icon={faPlus} />}
                  {index == 2 && <FontAwesomeIcon icon={faUserPlus} />}

                  <p
                    className="ml-1"
                    style={{ fontSize: "16px", fontWeight: "400" }}
                  >
                    {item}
                  </p>
                </div>
              </Link>
            );
          })}
        {!loggedInUser.admin &&
          generalService.map((item, index) => {
            return (
              <Link
                key={index + 3}
                style={{
                  color: `${
                    window.location.pathname ==
                    "/dashboard/" + item.toLowerCase().split(" ").join("-")
                      ? "#009444"
                      : "black"
                  }`,
                }}
                to={`/dashboard/${item.toLowerCase().split(" ").join("-")}`}
              >
                <div className="d-flex ml-3">
                  {index == 0 && <FontAwesomeIcon icon={faShoppingCart} />}
                  {index == 1 && <FontAwesomeIcon icon={faPlus} />}
                  {index == 2 && <FontAwesomeIcon icon={faCommentDots} />}

                  <p
                    className="ml-1"
                    style={{ fontSize: "16px", fontWeight: "400" }}
                  >
                    {item}
                  </p>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default SideBar;
