import React from "react";

import Nav from "./Nav.jsx";
import Service from "./Service.jsx";

const navItems = [
  {
    name: "About",
    link: "#",
  },
  {
    name: "Services",
    link: "#",
  },
  {
    name: "Contact",
    link: "#",
  },
  {
    name: "Who's Ousmane",
    link: "#",
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    //call API to get data using Axios and update state
  }

  render() {
    return (
      <div className="main">
        <Nav items={navItems} />
        <div>
          <h1>Hello from my REACT project</h1>
          <input type="text" />
          <button>Search Video</button>
          <Service />
        </div>
      </div>
    );
  }
}

export default App;
