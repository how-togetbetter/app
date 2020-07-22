import React from "react";

import Nav from "./Nav.jsx";
import Service from "./Service.jsx";
import VideoPlayer from "./VideoPlayer.jsx";

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
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navItems,
      query: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    //call API to get data using Axios and update state
    this.setState({ navItems, query: "after component did mount" });
  }

  handleSubmit(query) {
    this.setState({ query });
  }

  render() {
    const items = this.state.navItems;
    return (
      <div className="main">
        <Nav items={items} />
        <div>
          <h1>Ready for more motivational videos?</h1>
          <VideoPlayer submit={this.handleSubmit} />
          <Service />
        </div>
      </div>
    );
  }
}

export default App;
