import React from "react";

import "./App.css";
import { Grid } from "@material-ui/core";
import { Route, NavLink, Switch } from "react-router-dom";
import { Header } from "./componets/Header/Header";
import { HomeWork2 } from "./componets/HomeWork-2/HomeWork-2";
import HomeWork3 from "./componets/HomeWork-3/HomeWork3";
import { Home } from "./componets/Home/Home";
import { EditableSpan } from "./componets/EditableSpan/EditableSpan";

function App() {
  return (
    <div className="App">
      <Grid container direction="column">
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route path="/Junior" render={() => <HomeWork2 />} />
            <Route path="/PreJunior" render={() => <HomeWork3 />} />
            <Route path="/Junior+" render={() => <EditableSpan />} />
          </Switch>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
