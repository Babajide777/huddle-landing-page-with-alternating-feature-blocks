import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import theme from "./components/styles/theme";
import Header from "./components/Header";
import MidSection from "./components/MidSection";
import Extra from "./components/Extra";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles></GlobalStyles>
      <Header></Header>
      <MidSection></MidSection>
      <Extra></Extra>
      <Footer></Footer>
    </ThemeProvider>
  );
}

export default App;
