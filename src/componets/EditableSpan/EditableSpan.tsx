import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import { Grid, Paper, List, ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InputItem from "../common/Input/InputItem";

const useStyle = makeStyles({
  paperItem: {
    width: "350px",
    height: "100px",
  },
  gridItem: {
    paddingBlockStart: "40px",
  },
});

export const EditableSpan = () => {
  const [editSpan, setEditSpan] = useState(false);
  const [title, setTitle] = useState("Hello");

  const addText = (newtitle: string) => {
    setTitle(newtitle);
    setEditSpan(false);
  };
  const changeEditSpan = () => {
    setEditSpan(true);
  };
  const blurEditSpan = () => {
    setEditSpan(false);
  };

  const classes = useStyle();
  return (
    <Grid container justifyContent="center" className={classes.gridItem}>
      <Paper
        variant="outlined"
        className={classes.paperItem}
        onBlur={blurEditSpan}
      >
        <List onDoubleClick={changeEditSpan}>
          {editSpan ? (
            <ListItem>
              <InputItem id="1" add={addText} />
            </ListItem>
          ) : (
            <ListItem button>
              <ListItemText primary={title} />
            </ListItem>
          )}
        </List>
      </Paper>
    </Grid>
  );
};
