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
    const { videos } = this.props;
    const mainId = videos[0];
    return (
      <div>
        <form action="submit">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={this.state.value}
            placeholder="Enter topic here..."
            onChange={this.changeHandler}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
            onClick={this.submitHandler}
          >
            Search
          </button>
        </form>
        {videos.length > 0 ? (
          <div className="main-player">
            <h5>{mainId.snippet.title}</h5>
            <iframe
              src={`https://www.youtube.com/embed/${mainId.id.videoId}`}
              frameBorder="0"
            ></iframe>
            <div className="carousel"></div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default VideoPlayer;
