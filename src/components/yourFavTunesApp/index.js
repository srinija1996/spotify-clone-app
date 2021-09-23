import { Component } from "react";
import { BsSun, BsMoon } from "react-icons/bs";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import AppBar from "../AppBar";
import {
  Banner,
  Heading,
  YourFavTunesComponent,
  MainComponent,
  BottomSection,
  SubTitleContainer,
} from "./styledComponents";
import Sidebar from "../Sidebar";
import "./index.css";
import Tunes from "../Tunes";
import Genres from "../Genres";
import AudioPlayer from "../AudioPlayer";

class YourFavTunes extends Component {
  state = { newReleases: [], featuredPlaylist: [], genreList: [] };

  componentDidMount() {
    this.getRecentReleases();
    this.getFeaturedPlaylist();
    this.getGenres();
  }

  getRecentReleases = async () => {
    const { token } = this.props;
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(
      "https://api.spotify.com/v1/browse/new-releases",
      options
    );
    if (response.ok) {
      const recentTunes = await response.json();
      console.log(recentTunes);
      this.setState({ newReleases: recentTunes.albums.items });
    } else {
      const { setAccessToken } = this.props;
      setAccessToken();
    }
  };

  getFeaturedPlaylist = async () => {
    const { token } = this.props;
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(
      "https://api.spotify.com/v1/browse/featured-playlists",
      options
    );
    if (response.ok) {
      const featuredPlaylist = await response.json();
      console.log(featuredPlaylist.playlists.items);
      this.setState({ featuredPlaylist: featuredPlaylist.playlists.items });
    } else {
      const { setAccessToken } = this.props;
      setAccessToken();
    }
  };

  getGenres = async () => {
    const { token } = this.props;
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(
      "https://api.spotify.com/v1/recommendations/available-genre-seeds",
      options
    );
    if (response.ok) {
      const genreList = await response.json();
      this.setState({ genreList: genreList.genres });
    } else {
      const { setAccessToken } = this.props;
      setAccessToken();
    }
  };

  render() {
    const { newReleases, featuredPlaylist, genreList } = this.state;
    return (
      <div>
        <AppBar />
        <div className="your-fav-tunes-component">
          <div className="your-fav-tunes">
            <Sidebar />
            <div className="main-component">
              <div className="banner">
                <img
                  className="banner-image"
                  src="https://res.cloudinary.com/dbqix3lwq/image/upload/v1632307372/1_ed86l3.jpg"
                  alt="banner"
                />
                <div className="banner-text">
                  <h1 className="heading">Your favourite tunes</h1>
                  <p className="banner-text-p">
                    All <BsSun color="yellow" /> and all{" "}
                    <BsMoon color="black" />
                  </p>
                </div>
              </div>
              <div className="bottom-section">
                <div className="sub-title-container">
                  <p className="sub-title">RELEASED THIS WEEK</p>
                </div>
                <Tunes newReleases={newReleases} />
              </div>
              {featuredPlaylist.length !== 0 && (
                <div className="bottom-section">
                  <div className="sub-title-container">
                    <p className="sub-title">FEATURED PLAYLISTS</p>
                  </div>
                  <Tunes newReleases={featuredPlaylist} />
                </div>
              )}
              {genreList.length !== 0 && (
                <div
                  className="bottom-section"
                  style={{ paddingBottom: "50px" }}
                >
                  <div className="sub-title-container">
                    <p className="sub-title">BROWSE</p>
                  </div>
                  <Genres genreList={genreList} />
                </div>
              )}
              <div className="bottom">
                <AudioPlayer />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default YourFavTunes;
