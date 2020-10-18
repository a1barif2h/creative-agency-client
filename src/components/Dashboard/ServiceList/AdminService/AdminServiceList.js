import React, { useContext, useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { LocalContext } from "../../../../App";
import AdminServiceListDetails from "./AdminServiceListDetails";

const AdminServiceList = () => {
  document.title = "Creative Agency |Admin - Service List";
  const [loggedInUser] = useContext(LocalContext);
  const [allService, setAllService] = useState([]);

  useEffect(() => {
    fetch("https://lit-reaches-99351.herokuapp.com/show-orders")
      .then((res) => res.json())
      .then((result) => {
        setAllService(result);
      });
  }, []);
  return (
    <div style={{ marginTop: "10px", marginBottom: "10px" }}>
      <div className="d-flex justify-content-between">
        <h4 className="mt-4 ml-5">Service List</h4>
        <h2
          className="mt-4 display-username-1"
          style={{ fontSize: "16px", fontWeight: "500" }}
        >
          {loggedInUser.user?.name || "User"}
        </h2>
      </div>
      <Container
        className="mt-5 admin-service-list-container"
        style={{ background: "#f1f6ff" }}
      >
        <Table
          responsive="xs"
          className="admin-service-list-table"
          style={{ background: "#f1f6ff" }}
        >
          <thead className="admin-service-list-table-head">
            <tr>
              <th style={{ width: "20%" }}>Name</th>
              <th style={{ width: "20%" }}>Email ID</th>
              <th style={{ width: "20%" }}>Service</th>
              <th style={{ width: "20%" }}>Project Details</th>
              <th style={{ width: "20%" }}>Status</th>
            </tr>
          </thead>

          <tbody>
            {allService.map((service) => {
              return (
                <AdminServiceListDetails
                  key={service._id}
                  service={service}
                ></AdminServiceListDetails>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default AdminServiceList;
