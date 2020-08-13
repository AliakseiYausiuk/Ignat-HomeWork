import React from "react";

import "./App.css";

import { HomeWork2 } from "./componets/HomeWork-2/HomeWork-2";
import HomeWork3 from "./componets/HomeWork-3/HomeWork3";
import { Route, NavLink } from "react-router-dom";
import { Header } from "./componets/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="nav">
        <NavLink to="/homeWork2">HomeWork-2</NavLink>
        <NavLink to="/homeWork">HomeWork-3</NavLink>
      </div>
      <div className="wrapper-content">
        <Route path="/homeWork2" render={() => <HomeWork2 />} />
        <Route path="/homeWork" render={() => <HomeWork3 />} />
      </div>
    </div>
  );
}

export default App;
