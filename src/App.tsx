import React, { useState } from "react";

import "./App.css";

import { HomeWork2 } from "./componets/HomeWork-2/HomeWork-2";
import HomeWork3 from "./componets/HomeWork-3/HomeWork3";
import { Route, NavLink } from "react-router-dom";
import { Header } from "./componets/Header/Header";
import Box from "@material-ui/core/Box/Box";
import { makeStyles } from "@material-ui/core/styles";
import {
  Divider,
  ListItem,
  ListItemIcon,
  List,
  ListItemText,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import ReorderIcon from "@material-ui/icons/Reorder";

//CSS STYLES

const useStyles = makeStyles({
  drawer: {
    width: 250,
    height: "30rem",
    background: "#511",
  },
  menuItem: {
    color: "tan",
  },
});

const menuItem = [
  {
    listIcon: <HomeIcon />,
    listText: "Home",
  },
  {
    listIcon: <ReorderIcon />,
    listText: "PreJunior",
  },
  {
    listIcon: <ReorderIcon />,
    listText: "Junior",
  },
  {
    listIcon: <ReorderIcon />,
    listText: "Junior+",
  },
];
function App() {
  const classes = useStyles();
  const [state, setState] = useState({
    right: false,
  });

  const toggleSlider = (slider: any, open: any) => () => {
    setState({ ...state, [slider]: open });
  };

  const sideList = (slider: any) => (
    <Box className={classes.drawer}>
      <List>
        {menuItem.map((lsItem, key) => (
          <ListItem button key={key}>
            <ListItemIcon className={classes.menuItem}>
              {lsItem.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.menuItem}
              primary={lsItem.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

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
