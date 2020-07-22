import React from "react";

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler({ target }) {
    this.setState({ value: target.value });
  }

  submitHandler(e) {
    e.preventDefault();
    let { value } = this.state;
    this.props.submit(value);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          placeholder="Enter topic here..."
          onChange={this.changeHandler}
        />
        <button onClick={this.submitHandler}>Search</button>
      </div>
    );
  }
}

export default VideoPlayer;
