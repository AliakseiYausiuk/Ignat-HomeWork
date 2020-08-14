import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import ReorderIcon from "@material-ui/icons/Reorder";
import Box from "@material-ui/core/Box/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";

// CSS STYLES

const useStyles = makeStyles({
  appBar: {
    background: "#48036F",
    color: "tan",
  },
  drawer: {
    width: 250,
    height: "100%",
    background: "#48036F",
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

export const Header = () => {
  const classes = useStyles();

  const [state, setState] = useState({
    right: false,
  });

  const toggleSlider = (slider: string, open: boolean) => () => {
    setState({ ...state, [slider]: open });
  };

  const sideList = (slider: string) => (
    <Box className={classes.drawer}>
      <List>
        {menuItem.map((lsItem, key) => (
          <>
            <ListItem button key={key}>
              <ListItemIcon className={classes.menuItem}>
                {lsItem.listIcon}
              </ListItemIcon>
              <ListItemText
                className={classes.menuItem}
                primary={lsItem.listText}
              />
            </ListItem>
            <Divider className={classes.menuItem} />
          </>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton color="inherit" onClick={toggleSlider("right", true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">HomeWork</Typography>
          <Drawer
            anchor="right"
            open={state.right}
            onClose={toggleSlider("right", false)}
          >
            {sideList("right")}
          </Drawer>
        </Toolbar>
      </AppBar>
    </>
  );
};
