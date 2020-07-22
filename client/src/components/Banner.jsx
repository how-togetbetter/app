import React from "react";

const Banner = (props) => {
  return (
    <div
      class="jumbotron jumbotron-fluid"
      style={{ backgroundColor: "black", color: "white", textAlign: "center" }}
    >
      <div class="container">
        <h1 class="display-4">Motivation Station</h1>
        <p class="lead">Are you ready to be motivated?</p>
      </div>
    </div>
  );
};

export default Banner;
