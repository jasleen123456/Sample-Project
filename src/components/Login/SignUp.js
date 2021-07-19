import React from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";
const SignUp = ({signUpSubmit}) => {
  
  return (
    <div class="wrapper">
      <h1 class="main-heading">Sign up</h1>
      <p class="sub-text">Sign up using your email and password.</p>
      <div class="form-wrapper">
        <form id="registerForm" onSubmit={signUpSubmit}>
          <div class="input-field">
            <label>Email</label>
            <input type="email" placeholder="Email" name="email" />
          </div>
          <div class="input-field">
            <label>Password</label>
            <input type="password" placeholder="Password" name="password" />
          </div>
          <button class="main-button" type="submit">
            Register
          </button>
        </form>
      </div>
      <div class="bottom-message">
        <h5>
          Already a user? <Link to="/signin">Sign in</Link>
        </h5>
      </div>
    </div>
  );
};

export default SignUp;