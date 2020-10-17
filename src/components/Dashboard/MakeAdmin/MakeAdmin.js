import React, { useContext, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { LocalContext } from "../../../App";
import SideBar from "../SideBar/SideBar";

const MakeAdmin = () => {
  document.title = "Creative Agency | Make Admin";
  const [loggedInUser] = useContext(LocalContext);
  const [admin, setAdmin] = useState("");

  const handelAddAdmin = (e) => {
    e.preventDefault();
    fetch("https://lit-reaches-99351.herokuapp.com/add-admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ admin }),
    })
      .then((res) => res.json())
      .then((result) => {
        result && notify();
      });
  };
  const notify = () => toast("Admin Added!");
  return (
    <div>
      <Row xs={12}>
        <Col xs={12} md={3} lg={2}>
          <SideBar></SideBar>
        </Col>
        <Col xs={12} md={8} lg={8}>
          <div className="d-flex justify-content-between">
            <h4 className="mt-4 ml-5">Make Admin</h4>
            <h2
              className="mt-4 pr-5 display-username-1"
              style={{ fontSize: "16px", fontWeight: "500" }}
            >
              {loggedInUser.user?.name || "User"}
            </h2>
          </div>
          <Container
            className=" add-service-form-container mt-5"
            style={{ background: "#f1f6ff" }}
          >
            <Form onSubmit={handelAddAdmin}>
              <Row xs={12} className="p-4 align-items-center">
                <Col md={9} lg={7}>
                  <Form.Label>Email</Form.Label>
                  <Form.Group controlId="formBasicText">
                    <Form.Control
                      onBlur={(e) => setAdmin(e.target.value)}
                      type="text"
                      placeholder="abc@gmail.com"
                    />
                  </Form.Group>
                </Col>
                <Col md={2}>
                  <Button
                    className="float-left float-left btn-sm"
                    style={{ background: "#009444", marginTop: "15px" }}
                    type="submit"
                  >
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </Container>
        </Col>
      </Row>
      <ToastContainer bodyClassName="toast-color" />
    </div>
  );
};

export default MakeAdmin;
