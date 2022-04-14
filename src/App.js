import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import theme from "./components/styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles></GlobalStyles>
      <p>Jide</p>
    </ThemeProvider>
  );
}

export default App;
