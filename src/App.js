import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import theme from "./components/styles/theme";
import Users from "./assets/images/illustration-your-users.svg";
import Mockups from "./assets/images/illustration-mockups.svg";
import Together from "./assets/images/illustration-grow-together.svg";
import Conversation from "./assets/images/illustration-flowing-conversation.svg";
import Phone from "./assets/images/icon-phone.svg";
import Location from "./assets/images/icon-location.svg";
import Email from "./assets/images/icon-email.svg";
import BgDesktop from "./assets/images/bg-hero-desktop.svg";
import BgMobile from "./assets/images/bg-hero-mobile.svg";
import Header from "./components/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles></GlobalStyles>
      <Header></Header>

      {/* <img src={Users} alt="" />
      <img src={Mockups} alt="" />
      <img src={Together} alt="" />
      <img src={Conversation} alt="" />
      <img src={Phone} alt="" />
      <img src={Location} alt="" />
      <img src={Email} alt="" />
      <img src={BgDesktop} alt="" />
      <img src={BgMobile} alt="" /> */}
    </ThemeProvider>
  );
}

export default App;
