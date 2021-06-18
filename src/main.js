import React from "https://cdn.skypack.dev/react?dts";
import ReactDOM from "https://cdn.skypack.dev/react-dom?dts";

// import "./index.css";
import App from "./App.js";

ReactDOM.render(
  React.createElement(App, { from: "Deno" }, null),
  document.getElementById("root")
);