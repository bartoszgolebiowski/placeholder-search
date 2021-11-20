import * as React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const main = () => {
  const render = () => {
    ReactDOM.render(
      <React.StrictMode>
        <App />,
      </React.StrictMode>,
      document.getElementById("root")
    );
  };

  if (process.env.NODE_ENV === "development") {
    import("./mocks/browser")
      .then(({ worker }) => worker.start())
      .then(render)
      .catch(e => console.log("MSW does not work", e));
  } else {
    render();
  }
};

main();
