import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";

export const localContext = createContext();

function App() {
  const { loggedInUser, setLoggedInUser } = useState(null);
  return (
    <localContext.Provider value={(loggedInUser, setLoggedInUser)}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </localContext.Provider>
  );
}

export default App;
