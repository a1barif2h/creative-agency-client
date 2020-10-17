import React, { useContext } from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { LocalContext } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
  const [loggedInUser, setLoggedInUser] = useContext(LocalContext);
  const location = useLocation();
  return (
    <Route
      {...rest}
      render={() =>
        loggedInUser.user ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", location }} />
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
