import React from "react";

const ContextValues = React.createContext({
  accessToken: "",
  setAccessToken: () => {},
});

export default ContextValues;
