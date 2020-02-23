import React from "react";
import ReactGA from "react-ga";
import "./App.css";

import Maintenance from "./pages/Maintenance";

function initializeReactGA() {
  ReactGA.initialize("UA-158961920-1");
  ReactGA.pageview("/maintenancepage");
}

function App() {
  initializeReactGA();

  return <Maintenance />;
}

export default App;
