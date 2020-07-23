import React from "react";
import axios from "axios";

// import Nav from "./Nav.jsx";
import NavBarTest from "./NavBarTest";
import VideoPlayer from "./VideoPlayer.jsx";
import API_KEY from "../../../config";
import About from "./About";
import Banner from "./Banner.jsx";
import ExtraServices from "./ExtraServices.jsx";
import Footer from "./Footer.jsx";

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
    link: "#services",
  },
  {
    name: "Profile",
    link: "#",
  },
];

const welcome = [
  {
    id: "btPJPFnesV4",
    liked: true,
    title: "Survivor - Eye Of The Tiger (Official Music Video)",
    publishedAt: "2009-11-14T13:05:10Z",
    description:
      'Watch the official music video for "Eye Of The Tiger" by Survivor Listen to Survivor: https://Survivor.lnk.to/listenYD Subscribe to the official Survivor YouTube ...',
    thumbnails: {
      default: {
        height: 90,
        url: "https://i.ytimg.com/vi/btPJPFnesV4/default.jpg",
        width: 120,
      },
    },
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: navItems,
      about: false,
      query: "",
      videos: [],
      favorites: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    //call API to get data using Axios and update state
    axios
      .get("/fav")
      .then(({ data }) => this.setState({ favorites: data }))
      .catch((err) => console.log(err));
    this.setState({ videos: welcome });
  }

  handleSubmit(query) {
    //call YouTubeAPI and setState
    const maxResults = 10;
    const { key } = API_KEY;
    let url = `https://www.googleapis.com/youtube/v3/search?key=${key}&part=snippet&order=viewCount&maxResults=${maxResults}&q=${query}&type=video`;
    axios
      .get(url)
      .then(({ data }) => {
        console.log(data);
        let videos = [];
        data.items.forEach((item) => {
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

  handleClick() {
    let { about } = this.state;
    this.setState({ about: !about });
  }

  render() {
    const { videos, items, about } = this.state;
    return (
      <div className="main">
        {/* <Nav items={items} /> */}
        <NavBarTest items={items} handleClick={this.handleClick} />
        {about ? <About /> : null}
        <div>
          <Banner />
          <VideoPlayer
            submit={this.handleSubmit}
            fav={this.handleFavorite}
            videos={videos}
          />
          <ExtraServices />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
