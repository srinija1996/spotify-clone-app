export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri =
  "https://614c1881fa44920008d5f8c0--pedantic-cori-7c3e0d.netlify.app/";
const clientId = "a8fe05017cb34b1e9b760e2ea7108df6";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialogue=true`;

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};
