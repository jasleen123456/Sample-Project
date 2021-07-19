import React, { useState } from "react";


// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import firebase from "firebase";
import SignOut from "./SignOut";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Reset from "./Reset";
import {db} from "../../config";

const HandleLogin = () => {
  const [user, setUser] = useState([]);  

  const auth = firebase.auth();

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      setUser(user);
    }
  });

 
  const signUpSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log("User Created");
        window.open("/signin", "_self");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const signInSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("User Signed In");
        window.open("/", "_self");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        console.log("User Signed Out");
        window.open("/signin", "_self");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const resetSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;

    auth
      .sendPasswordResetEmail(email)
      .then(function () {
        alert("Reset Email Sent 🚀");
      })
      .catch(function (error) {
        alert(error.message);
      });
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <SignOut signOut={signOut} user={user} />
        </Route>
        <Route path="/signin" exact>
          <SignIn signInSubmit={signInSubmit} />
        </Route>
        <Route path="/signup" exact>
          <SignUp signUpSubmit={signUpSubmit} />
        </Route>
        <Route path="/reset" exact>
          <Reset resetSubmit={resetSubmit} />
        </Route>
      </Switch>
    </Router>
  );
};

export default HandleLogin;