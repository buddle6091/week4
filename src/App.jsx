import "./App.css";
import Router from "./router/Router";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
