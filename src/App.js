import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddService from "./components/Dashboard/AddService/AddService";
import MakeAdmin from "./components/Dashboard/MakeAdmin/MakeAdmin";
import Order from "./components/Dashboard/Order/Order";
import Review from "./components/Dashboard/Review/Review";
import ServiceList from "./components/Dashboard/ServiceList/ServiceList";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const LocalContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  useEffect(() => {
    const sessionData = sessionStorage.getItem("token");
    const token = JSON.parse(sessionData);
    token &&
      fetch("https://lit-reaches-99351.herokuapp.com/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
      })
        .then((res) => res.json())
        .then((result) => {
          setLoggedInUser({
            ...loggedInUser,
            user: {
              name: result.name,
              email: result.email,
              img: result.picture,
            },
          });
        });
  }, []);

  return (
    <LocalContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/home">
            <Home></Home>
          </Route>

          <PrivateRoute exact path="/dashboard/service-list">
            <ServiceList></ServiceList>
          </PrivateRoute>

          <PrivateRoute exact path="/dashboard/order">
            <Order></Order>
          </PrivateRoute>

          <PrivateRoute exact path="/dashboard/review">
            <Review></Review>
          </PrivateRoute>

          <PrivateRoute exact path="/dashboard/add-service">
            <AddService></AddService>
          </PrivateRoute>

          <PrivateRoute exact path="/dashboard/make-admin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>

          <Route exact path="/login">
            <Login></Login>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </LocalContext.Provider>
  );
}

export default App;
