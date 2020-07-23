import React from "react";
import { GrYoga, GrRun, GrCafeteria } from "react-icons/gr";

class ExerciseService extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    let iconChoice;
    if (this.props.icon === "run") {
      iconChoice = <GrRun />;
    } else if (this.props.icon === "yoga") {
      iconChoice = <GrYoga />;
    } else if (this.props.icon === "nutrition") {
      iconChoice = <GrCafeteria />;
    }
    return (
      <div className="service-box">
        <div>
          <h1 className="service-icon">{iconChoice}</h1>
          <h4>{this.props.info}</h4>
        </div>
      </div>
    );
  }
}

export default ExerciseService;
