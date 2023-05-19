import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyle } from "./styles/Global";
import { Home } from "./pages/home";
import { NavBar } from "./components/Navbar";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle>
      <NavBar />
      <Home />
    </ GlobalStyle>
  </React.StrictMode>,
  document.getElementById("root")
);