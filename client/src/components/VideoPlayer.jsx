import React from "react";
import Banner from "./Banner.jsx";

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
    this.toggleLike = this.toggleLike.bind(this);
  }

  changeHandler({ target }) {
    this.setState({ value: target.value });
  }

  submitHandler(e) {
    // e.preventDefault();
    let { value } = this.state;
    if (value !== "") {
      this.props.submit(value);
      this.setState({ value: "" });
    } else {
      e.preventDefault();
      alert("Please enter a valid input");
    }
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

  toggleLike() {
    const { index } = this.state;
    this.props.fav(index);
  }

  render() {
    const { videos } = this.props;
    const { index } = this.state;
    let active = videos[index];
    console.log(videos);
    return (
      <div>
        <div className="main-container">
          <Banner />
          <form className="form" action="submit">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={this.state.value}
              placeholder="Enter topic here..."
              onChange={this.changeHandler}
            />
            <a
              className="btn btn-outline-success my-2 my-sm-0"
              href="#main"
              onClick={this.submitHandler}
            >
              Search
            </a>
          </form>
        </div>
        <div id="main">
          {videos.length > 0 ? (
            <div className="main-player">
              <div className="liked" id="like-btn" onClick={this.toggleLike}>
                <div className="liked-container">
                  {active.liked ? (
                    <i className="fas fa-heart" />
                  ) : (
                    <i className="far fa-heart" />
                  )}
                  <p>Add to my favorites</p>
                </div>
              </div>
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
                      id={`li-${idx}`}
                      className={idx === index ? "active" : null}
                    ></li>
                  ))}
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <iframe
                      className="d-block w-100 video"
                      src={`https://www.youtube.com/embed/${active.id}`}
                      frameBorder="0"
                    ></iframe>
                    <div className="carousel-caption d-none d-md-block">
                      <h5>{active.title}</h5>
                      <p>{active.description}</p>
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
          ) : (
            <div className="main-player">
              <div
                id="carouselExampleCaptions"
                className="carousel slide"
                data-ride="carousel"
              ></div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
