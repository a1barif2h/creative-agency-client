import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { LocalContext } from "../../../App";
import { useHistory } from "react-router-dom";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import SideBar from "../SideBar/SideBar";
import upload from "../../../images/icons/upload.png";

const Order = () => {
  document.title = "Creative Agency | Order";
  const history = useHistory();
  const [loggedInUser] = useContext(LocalContext);
  const [order, setOrder] = useState({ status: "pending" });
  useEffect(() => {
    setOrder({
      ...order,
      email: loggedInUser.user?.email,
      projectImage: loggedInUser.service?.img,
      serviceTitle: loggedInUser.service?.serviceTitle,
      projectDetails: loggedInUser.service?.description,
      name: loggedInUser.user?.name,
    });
  }, [loggedInUser]);

  const addOrder = (e) => {
    e.preventDefault();
    fetch("https://lit-reaches-99351.herokuapp.com/add-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((result) => {
        result && history.replace("/dashboard/service-list");
      });
  };

  const inputHandler = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Row xs={12}>
        <Col xs={12} md={3} lg={2}>
          <SideBar></SideBar>
        </Col>
        <Col xs={12} md={7} lg={8}>
          <div className="d-flex justify-content-between">
            <h4 className="mt-4 ml-5">Order</h4>
            <h2
              className="mt-4"
              style={{ fontSize: "16px", fontWeight: "500" }}
            >
              {loggedInUser.user?.name || "User"}
            </h2>
          </div>
          <Container
            className="order-form-container mt-5"
            style={{
              background: "#f1f6ff",
              boxShadow: "-1px -1px 2px rgb(236, 232, 232)",
              borderRadius: "10px",
            }}
          >
            <Form onSubmit={addOrder}>
              <Row xs={12} className="p-5">
                <Col xs={12} md={12} lg={8}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      onBlur={inputHandler}
                      name="name"
                      type="name"
                      placeholder="Your name / Company's name"
                      value={order.name}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      onBlur={inputHandler}
                      name="email"
                      type="email"
                      placeholder="Your email address"
                      value={order.email}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicTitle">
                    <Form.Control
                      onBlur={inputHandler}
                      name="serviceTitle"
                      type="title"
                      placeholder="Service title"
                      value={order.serviceTitle}
                    />
                  </Form.Group>

                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control
                      onBlur={inputHandler}
                      name="projectDetails"
                      as="textarea"
                      rows="5"
                      placeholder="Project details"
                      value={order.projectDetails}
                    />
                  </Form.Group>

                  <div className="d-flex justify-content-between">
                    <Form.Group className="mt-2" controlId="formBasicTitle">
                      <Form.Control
                        onBlur={inputHandler}
                        name="price"
                        type="title"
                        placeholder="Price"
                      />
                    </Form.Group>
                    <div
                      className="file-upload "
                      style={{
                        background: `url(${upload}) no-repeat`,
                        backgroundSize: "30px 30px",
                      }}
                    >
                      <input type="file" />
                      <p
                        style={{
                          color: "#009444",
                          margin: "0",
                          marginLeft: "5px",
                        }}
                      >
                        Upload image
                      </p>
                    </div>
                  </div>
                  <Button type="submit" className="btn-dark px-4">
                    Send
                  </Button>
                </Col>
              </Row>
            </Form>
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default Order;
