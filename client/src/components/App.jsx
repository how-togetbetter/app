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
          let video = {};
          video.liked = false;
          video.id = item.id.videoId;
          video.title = item.snippet.title;
          video.publishedAt = item.snippet.publishedAt;
          video.description = item.snippet.description;
          video.thumbnails = item.snippet.thumbnails;
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
    videos[idx].liked = !videos[idx].liked;
    this.setState({ videos });
    axios
      .patch(`/fav/${videos[idx].id}`)
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
