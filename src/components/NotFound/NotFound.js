import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const NotFound = () => {
  document.title = "Creative Agency | Page Not Found";
  const history = useHistory();
  return (
    <div
      style={{
        width: "300px",
        height: "270px",
        position: "absolute",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        margin: "auto",
        border: "1px solid lightgray",
        borderRadius: "5px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          marginTop: "20px",
          marginBottom: "20px",
          fontSize: "70px",
          fontWeight: "700",
          color: "rgb(128, 128, 128)",
        }}
      >
        404
      </h1>
      <p>Page Not Found</p>
      <Button
        className="btn-info btn-sm text-white"
        onClick={() => history.goBack()}
      >
        Go back
      </Button>
    </div>
  );
};

export default NotFound;
