import React, { useContext } from "react";
import { LocalContext } from "../../../App";
import ServiceList from "../ServiceList/ServiceList";

const Dashboard = () => {
  document.title = "Creative Agency | Dashboard";
  const [loggedInUser, setLoggedInUser] = useContext(LocalContext);
  return (
    <div>
      <ServiceList></ServiceList>
    </div>
  );
};

export default Dashboard;
