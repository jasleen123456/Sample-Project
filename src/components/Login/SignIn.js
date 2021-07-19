import React from "react";
import { Link } from "react-router-dom";

const SignIn = ({ signInSubmit }) => {
  return (
    <div class="wrapper">
      <h1 class="main-heading">Sign in</h1>
      <p class="sub-text">Sign in using your email and password.</p>
      <div class="form-wrapper">
        <form id="loginForm" onSubmit={signInSubmit}>
          <div class="input-field">
            <label>Email</label>
            <input type="email" placeholder="Email" name="email" />
          </div>
          <div class="input-field">
            <label>Password</label>
            <input type="password" placeholder="Password" name="password" />
          </div>
          <button class="main-button" type="submit">
            Sign in
          </button>
        </form>
      </div>
      <div class="bottom-message">
        <h5>
          New here? <Link to="/signup">Sign up</Link>
        </h5>
        <h5>
          Forgot Password? <Link to="/reset">Reset here</Link>
        </h5>
      </div>
    </div>
  );
};

export default SignIn;