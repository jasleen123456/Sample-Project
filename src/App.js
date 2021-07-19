import React from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Details from "./components/pages/Details";
import Welcome from "./components/pages/Welcome";
import Home from "./components/pages/Home";
import Registration from "./components/pages/Registration";
import Reset from "./components/pages/Reset";

import Navbar from "./components/layout/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";

import NotFound from "./components/pages/NotFound";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import User from "./components/users/User";
import HandleLogin from "./components/Login/HandleLogin";

function App(props) {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Details" component={Details} />
          <Route exact path="/Registration" component={Registration} />
          <Route exact path="/Welcome" component={Welcome} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/reset" component={Reset} />        
          <Route exact path="/users/edit/:id" component={EditUser} />
          <Route exact path="/users/:id" component={User} />
          <Route component={NotFound} />
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
