import { Component } from "react";
// import spotifyWebApi from "spotify-web-api-js";
// import Cookie from "js-cookie";

import { loginUrl, getTokenFromUrl } from "../../info";
import YourFavTunes from "../yourFavTunesApp";
import ContextValues from "../../context";

import "./index.css";

// const spotify = new spotifyWebApi();

class Login extends Component {
  state = { token: "" };

  componentDidMount() {
    this.getToken();
  }

  getToken = async () => {
    const token = await getTokenFromUrl();
    this.setState({ token: token.access_token });
    // window.location.hash = "";
    // spotify.setAccessToken(token);
  };

  setAccessToken = () => {
    this.setState({ token: "" });
  };

  render() {
    const { token } = this.state;
    if (token !== undefined) {
      if (token.length !== 0) {
        return (
          <ContextValues.Provider
            value={{ accessToken: token, setAccessToken: this.setAccessToken }}
          >
            <YourFavTunes token={token} setAccessToken={this.setAccessToken} />
          </ContextValues.Provider>
        );
      }
    }

    return (
      <div className="bg">
        <a className="button" href={loginUrl}>
          Login
        </a>
      </div>
    );
  }
}

export default Login;
