import { Component } from "react";
import Slider from "react-slick";
import { AiFillPlayCircle } from "react-icons/ai";

import Tunes from "../Tunes";
import "./index.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "blue",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "blue",
      }}
      onClick={onClick}
    />
  );
}

class PlaylistDetails extends Component {
  state = { albums: [], tracks: [] };

  componentDidMount() {
    this.getPlaylistDetails();
  }

  getPlaylistDetails = async () => {
    const { item, token } = this.props;
    const options = {
      methos: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    if (item.type === "playlist") {
      const response = await fetch(
        `https://api.spotify.com/v1/playlists/${item.id}/tracks`,
        options
      );
      if (response.ok) {
        const playlistDetails = await response.json();
        this.setState({ albums: playlistDetails.items });
      }
    }
    if (item.type === "album") {
      const { item, token } = this.props;
      const options = {
        methos: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await fetch(
        `https://api.spotify.com/v1/albums/${item.id}/tracks`,
        options
      );
      const albumDetails = await response.json();
      console.log("jydt", albumDetails);
      this.setState({ tracks: albumDetails.items });
    }
  };

  render() {
    const { item } = this.props;
    const { albums, tracks } = this.state;

    const settings = {
      dots: false,
      infinite: true,
      speed: 100,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    console.log("Stg", tracks);
    return (
      <div className="popup-card">
        <h1 className="popup-card-heading">{item.name}</h1>
        <div className="song">
          {albums.length !== 0 && (
            <div className="songs">
              {albums.map((album) => (
                <div className="song-tab" key={album.id}>
                  <p>{album.track.name}</p>
                  {album.track.preview_url === null ? (
                    <p className="preview">
                      <AiFillPlayCircle color="grey" />
                    </p>
                  ) : (
                    <a href={album.track.preview_url}>
                      <AiFillPlayCircle />
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
          {tracks.length !== 0 && (
            <div className="songs">
              {tracks.map((album) => (
                <div className="song-tab" key={album.id}>
                  <a
                    href={album.preview_url === null ? null : album.preview_url}
                  >
                    {album.name}
                  </a>
                  {album.preview_url === null ? (
                    <p className="preview">
                      <AiFillPlayCircle color="grey" />
                    </p>
                  ) : (
                    <a className="preview" href={album.preview_url}>
                      <AiFillPlayCircle />
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
          {/* {albums.length !== 0 && (
            <Slider style={{ width: "50%" }} {...settings}>
              {albums.map((album) => (
                <div key={album.track.id}>
                  <p className="side-heading">{album.track.name}</p>
                  <p className="paragraph">
                    <span className="side-heading">Added at:</span>{" "}
                    {album.added_at}
                  </p>
                  <p className="paragraph">
                    <span className="side-heading">Artists:</span>
                    {album.track.artists
                      .map((artist) => artist.name)
                      .join(", ")}
                  </p>
                  {album.track.preview_url === null ? (
                    <p className="preview">Preview not available</p>
                  ) : (
                    <a href={album.track.preview_url}>Play Preview</a>
                  )}
                </div>
              ))}
            </Slider>
          )} */}
          {/* {tracks.length !== 0 && (
            <Slider style={{ width: "50%" }} {...settings}>
              {tracks.map((album) => (
                <div key={album.id}>
                  <p className="side-heading">{album.name}</p>
                   <p>
                    <span className="side-heading">Added at:</span>{" "}
                    {album.added_at}
                  </p>
                  <p>
                    <span className="side-heading">Artists:</span>
                    {album.artists.map((artist) => artist.name).join(", ")}
                  </p>
                  {album.preview_url === null ? (
                    <p className="preview">Preview not available</p>
                  ) : (
                    <a href={album.preview_url}>Play Preview</a>
                  )}
                </div>
              ))}
            </Slider>
          )} */}
        </div>
      </div>
    );
  }
}

export default PlaylistDetails;
