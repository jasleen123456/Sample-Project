import React from "react";
import { Link } from "react-router-dom";

const Reset = ({ resetSubmit }) => {
  return (
    <div class="wrapper">
      <h1 class="main-heading">Reset Password</h1>
      <p class="sub-text">Enter your email address to reset your password.</p>
      <div class="form-wrapper">
        <form id="resetForm" onSubmit={resetSubmit}>
          <div class="input-field">
            <label>Email</label>
            <input type="email" placeholder="Email" name="email" />
          </div>
          <button class="main-button" type="submit">
            Reset
          </button>
        </form>
      </div>
      <div class="bottom-message">
        <h5>
          New here? <Link to="/signup">Sign up</Link>
        </h5>
      </div>
    </div>
  );
};

export default Reset;