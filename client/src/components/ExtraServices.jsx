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
          <ExerciseService info="Cooking Classes" icon="cooking" />
          <ExerciseService info="Outdoor Swim Team" icon="swim" />
          <ExerciseService info="Pandemic Gamers Group" icon="game" />
        </div>
      </div>
    );
  }
}

export default ExtraServices;
