import React from "react";

import Calendar from "react-calendar";

class Service extends React.Component {
  render() {
    return (
      <div className="service">
        <Calendar activeStartDate={new Date()} />
      </div>
    );
  }
}

export default Service;
