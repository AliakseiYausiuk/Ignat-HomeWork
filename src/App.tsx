import React from "react";

import "./App.css";
import { Grid } from "@material-ui/core";
import { Route, NavLink } from "react-router-dom";
import { Header } from "./componets/Header/Header";

function App() {
  return (
    <div className="App">
      <Grid container direction="column">
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </div>
  );
}

export default App;
