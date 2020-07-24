import React from "react";

import Calendar from "react-calendar";

class Reservation extends React.Component {
  render() {
    return (
      <div className="service">
        <Calendar activeStartDate={new Date()} />
      </div>
    );
  }
}

export default Reservation;
