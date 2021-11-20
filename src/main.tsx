import * as React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import { store } from "./store";

const main = () => {
  const render = () => {
    ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
        ,
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
