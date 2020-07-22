import React from "react";

const Banner = (props) => {
  return (
    <div
      className="jumbotron jumbotron-fluid"
      style={{ backgroundColor: "black", color: "white", textAlign: "center" }}
    >
      <div className="container">
        <h1 className="display-4">Motivation Station</h1>
        <p className="lead">Are you ready to be motivated?</p>
      </div>
    </div>
  );
};

export default Banner;
