import React from "react";
import { GrYoga, GrRun, GrCafeteria } from "react-icons/gr";
import Service from "./Service.jsx";
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
          <button
            type="button"
            className="btn btn-dark"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            {this.props.info}
          </button>

          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Schedule
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <Service />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="button" className="btn btn-primary">
                    Make a Reservation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ExerciseService;
