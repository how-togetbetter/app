import React from "react";
import axios from "axios";

import Nav from "./Nav.jsx";
import Service from "./Service.jsx";
import VideoPlayer from "./VideoPlayer.jsx";
import API_KEY from "../../../config";
import Banner from "./Banner.jsx";
import YogaIcon from "./ExerciseService.jsx";
import ExtraServices from "./ExtraServices.jsx";
const navItems = [
  {
    name: "About",
    link: "#",
  },
  {
    name: "My Favorite Videos",
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
      items: navItems,
      query: "",
      videos: [],
      favorites: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
  }

  componentDidMount() {
    //call API to get data using Axios and update state
    axios
      .get("/fav")
      .then(({ data }) => this.setState({ favorites: data }))
      .catch((err) => console.log(err));
    console.log(this.state.favorites);
  }

  handleSubmit(query) {
    //call YouTubeAPI and setState
    const maxResults = 10;
    const { key } = API_KEY;
    let url = `https://www.googleapis.com/youtube/v3/search?key=${key}&part=snippet&order=viewCount&maxResults=${maxResults}&q=${query}&type=video`;
    axios
      .get(url)
      .then(({ data }) => {
        let videos = [];
        data.items.forEach((item) => {
          console.log(item);
          let video = {};
          video.liked = false;
          video.id = item.id.videoId;
          video.title = item.snippet.title;
          video.publishedAt = item.snippet.publishedAt;
          video.description = item.snippet.description;
          video.thumbnails = {};
          video.thumbnails.default = item.snippet.thumbnails.default;
          videos.push(video);
        });
        this.setState({
          query,
          videos,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleFavorite(idx) {
    let { videos } = this.state;
    let video = videos[idx];
    video.liked = !video.liked;
    this.setState({ videos });
    axios
      .patch(`/fav/${video.id}`, {
        data: video,
      })
      .then((msg) => console.log(msg))
      .catch((err) => console.log(err));
  }

  render() {
    const { videos, items } = this.state;
    return (
      <div className="main">
        <Nav items={items} />
        <div>
          <Banner />
          <VideoPlayer
            submit={this.handleSubmit}
            fav={this.handleFavorite}
            videos={videos}
          />
          <ExtraServices />
        </div>
      </div>
    );
  }
}

export default App;
