import React from "react";

const SignOut = ({ signOut, user }) => {
  return (
    <div class="wrapper">
      <h1 class="main-heading">Hello 👋, {user.email}</h1>
      <button class="main-button" id="signOut" onClick={signOut}>
        Sign Out
      </button>
    </div>
  );
};

export default SignOut;