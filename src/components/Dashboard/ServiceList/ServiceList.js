import React, { useContext, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { LocalContext } from "../../../App";
import SideBar from "../SideBar/SideBar";
import AdminServiceList from "./AdminService/AdminServiceList";
import GeneralServiceList from "./GeneralService/GeneralServiceList";

const ServiceList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(LocalContext);
  useEffect(() => {
    loggedInUser.user &&
      fetch("https://lit-reaches-99351.herokuapp.com/check-admin", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          email: loggedInUser.user?.email,
        },
      })
        .then((res) => res.json())
        .then((result) => {
          result && setLoggedInUser({ ...loggedInUser, admin: result });
        });
  }, []);
  return (
    <div>
      <Row xs={12}>
        <Col xs={12} md={3} lg={2}>
          <SideBar></SideBar>
        </Col>
        <Col xs={12} md={8} lg={9}>
          {loggedInUser.admin && <AdminServiceList></AdminServiceList>}

          {!loggedInUser.admin && <GeneralServiceList></GeneralServiceList>}
        </Col>
      </Row>
    </div>
  );
};

export default ServiceList;
