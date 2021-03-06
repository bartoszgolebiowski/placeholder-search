import { ThemeProvider } from "@theme-ui/core";
import * as React from "react";
import { Provider } from "react-redux";

import UsersSearch from "./pages/Users";
import { store } from "./store/store";
import { theme } from "./theme";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <UsersSearch />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
