import React from "react";

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      index: 0,
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  changeHandler({ target }) {
    this.setState({ value: target.value });
  }

  submitHandler(e) {
    e.preventDefault();
    let { value } = this.state;
    this.props.submit(value);
  }

  clickHandler({ target }) {
    const { index } = this.state;
    const { videos } = this.props;
    let id;

    if (target.id.includes("next")) {
      id = index >= videos.length - 1 ? 0 : index + 1;
    }
    if (target.id.includes("prev")) {
      id = index <= 0 ? videos.length - 1 : index - 1;
    }
    this.setState({ index: id });
  }

  render() {
    const { videos } = this.props;
    const { index } = this.state;
    let active = videos[index];
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
            <div
              id="carouselExampleCaptions"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                {videos.map((video, idx) => (
                  <li
                    data-target="#carouselExampleCaptions"
                    data-slide-to={idx}
                    key={idx}
                    className={idx === index ? "active" : null}
                  ></li>
                ))}
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <iframe
                    className="d-block w-100 video"
                    src={`https://www.youtube.com/embed/${active.id.videoId}`}
                    frameBorder="0"
                  ></iframe>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>{active.snippet.title}</h5>
                    <p>{active.snippet.description}</p>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleCaptions"
                role="button"
                data-slide="prev"
                id="prev"
                onClick={this.clickHandler}
              >
                <span
                  className="carousel-control-prev-icon"
                  id="prev-button"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleCaptions"
                role="button"
                data-slide="next"
                id="next"
                onClick={this.clickHandler}
              >
                <span
                  className="carousel-control-next-icon"
                  id="next-button"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default VideoPlayer;
