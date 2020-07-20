import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    //call API to get data
  }

  render() {
    return (
      <div>
        <h1>Hello from my REACT project</h1>
        <input type="text" />
        <button>Search Youtube</button>
      </div>
    );
  }
}

export default App;
