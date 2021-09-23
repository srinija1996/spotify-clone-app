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
    // window.location.hash =
    //   "https://614c15506d590a00082f63a9--pedantic-cori-7c3e0d.netlify.app/";
    // spotify.setAccessToken(token);
    // window.location =
    //   "https://614c16367a41a7000855fcfd--pedantic-cori-7c3e0d.netlify.app/";
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
