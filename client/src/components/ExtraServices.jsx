import React, { Component } from "react";
import ExerciseService from "./ExerciseService";

class ExtraServices extends Component {
  render() {
    return (
      <div className="services-container">
        <h2 className="services-title">More Services</h2>
        <div className="service-boxes">
          <ExerciseService info="Running Club" icon="run" />
          <ExerciseService info="Yoga Class" icon="yoga" />
          <ExerciseService info="Nutrition Workshop" icon="nutrition" />
          <ExerciseService info="Running Club" icon="run" />
          <ExerciseService info="Yoga Class" icon="yoga" />
          <ExerciseService info="Nutrition Workshop" icon="nutrition" />
        </div>
      </div>
    );
  }
}

export default ExtraServices;
