import React, { useContext, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { LocalContext } from "../../../App";
import SideBar from "../SideBar/SideBar";
import upload from "../../../images/icons/upload.png";

const AddService = () => {
  document.title = "Creative Agency | Add Service";
  const [loggedInUser] = useContext(LocalContext);
  const [service, setService] = useState({});
  const handelInput = (e) => {
    setService({ ...service, [e.target.name]: e.target.value });
  };
  const addServiceFormHandler = (e) => {
    const formData = new FormData();
    formData.append("file", service.img);
    formData.append("description", service.description);
    formData.append("serviceTitle", service.serviceTitle);

    fetch("https://lit-reaches-99351.herokuapp.com/add-service", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        result && notify();
      });
  };
  const notify = () => toast("Service Added Successfully!");

  const addServiceContainer = {
    boxShadow:
      "1px 1px 1px rgb(238, 235, 235), -1px -1px 1px rgb(238, 235, 235)",
    padding: "30px",
    borderRadius: "10px",
    background: "#f1f6ff",
  };

  const fileUpload = {
    background: `url(${upload}) no-repeat`,
    backgroundSize: "30px 30px",
    height: "40px",
    width: "160px",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #009444",
    borderRadius: "5px",
    paddingLeft: "10px",
    marginTop: "10px",
    transition: "all 1s",
    color: "#FFFFFF",
    fontSize: "13px",
  };
  return (
    <div>
      <Row xs={12}>
        <Col xs={12} md={3} lg={2}>
          <SideBar></SideBar>
        </Col>
        <Col xs={12} md={7} lg={8}>
          <div className="d-flex justify-content-between">
            <h4 className="mt-4 ml-5">Add Service</h4>
            <h2
              className="mt-4"
              style={{ fontSize: "16px", fontWeight: "500" }}
            >
              {loggedInUser.user?.name || "User"}
            </h2>
          </div>
          <Container className="mt-5" style={addServiceContainer}>
            <Form>
              <Row xs={12} className="p-4">
                <Col md={10} lg={6}>
                  <Form.Label>Service Title</Form.Label>
                  <Form.Group controlId="formBasicText">
                    <Form.Control
                      onBlur={handelInput}
                      name="serviceTitle"
                      type="text"
                      placeholder="Enter title"
                    />
                  </Form.Group>

                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      onBlur={handelInput}
                      name="description"
                      as="textarea"
                      rows="5"
                      placeholder="Description"
                    />
                  </Form.Group>
                </Col>
                <Col md={8} lg={6} className="mt-3 ">
                  <div style={fileUpload}>
                    <input
                      style={{
                        height: "30px",
                        width: "140px",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        opacity: "0",
                      }}
                      onChange={(event) =>
                        setService({ ...service, img: event.target.files[0] })
                      }
                      type="file"
                    />
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
                </Col>
              </Row>
            </Form>
          </Container>
          <Button
            onClick={addServiceFormHandler}
            className="float-right mt-2"
            style={{ background: "#009444" }}
            type="submit"
          >
            Submit
          </Button>
        </Col>
      </Row>
      <ToastContainer bodyClassName="toast-color" />
    </div>
  );
};

export default AddService;
