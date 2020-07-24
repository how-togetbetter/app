import React, { Component } from "react";
import Service from "./Service";

class ExtraServices extends Component {
  render() {
    return (
      <div className="services-container">
        <h2 className="services-title">More Services</h2>
        <div className="service-boxes">
          <Service info="Running Club" icon="run" />
          <Service info="Yoga Class" icon="yoga" />
          <Service info="Nutrition Workshop" icon="nutrition" />
          <Service info="Cooking Classes" icon="cooking" />
          <Service info="Outdoor Swim Team" icon="swim" />
          <Service info="Pandemic Gamers Group" icon="game" />
        </div>
      </div>
    );
  }
}

export default ExtraServices;
