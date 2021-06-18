import React from "https://cdn.skypack.dev/react?dts";

function App(props) {
  return React.createElement('h1', null, `Hello from ${props.from}`);
}

export default App;