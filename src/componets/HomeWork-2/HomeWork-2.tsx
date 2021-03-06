import React, { useState } from "react";
import { v1 } from "uuid";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";

import { Button, ButtonGroup } from "@material-ui/core";
import ButtonItem from "../common/Button/ButtonItem";
import CheckboxItem from "../common/Checkbox/CheckboxItem";
import InputItem from "../common/Input/InputItem";

export type onChangeFilterType = "hight" | "middle" | "low";
export type dataType = {
  id: string;
  n: string;
  filter: onChangeFilterType;
};

export const HomeWork2 = () => {
  let [data, setData] = useState<Array<dataType>>([
    { id: v1(), n: "React", filter: "hight" },
    { id: v1(), n: "Material-UI", filter: "low" },
    { id: v1(), n: "JavaScript", filter: "middle" },
    { id: v1(), n: "TDD", filter: "hight" },
    { id: v1(), n: "Books", filter: "low" },
  ]);

  const removeList = (id: string) => {
    let newData = data.filter((el) => el.id !== id);
    setData(newData);
  };
  const AddList = (title: string) => {
    setData([...data, { id: v1(), n: title, filter: "hight" }]);
  };
  const onChangeFilter = (filter: onChangeFilterType) => {
    let newData = data.find((el) => el.filter === filter);
  };
  return (
    <div>
      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Paper elevation={3}>
            <List>
              <Typography variant="h2" align="center">
                Список дела на сегодня
              </Typography>
              <InputItem id="1" add={AddList} />
              {data.map((value) => {
                return (
                  <ListItem key={value.id} dense button>
                    <ListItemIcon>
                      <CheckboxItem id={value.id} />
                    </ListItemIcon>
                    <ListItemText id={value.id} primary={value.n} />
                    <ListItemSecondaryAction>
                      <ListItemIcon>
                        <ButtonItem
                          id={value.id}
                          title="Delete"
                          click={() => {
                            removeList(value.id);
                          }}
                        />
                      </ListItemIcon>
                    </ListItemSecondaryAction>
                  </ListItem>
                );
              })}
              <ButtonGroup
                variant="contained"
                color="primary"
                aria-label="contained primary button group"
              >
                <Button
                  color="secondary"
                  onClick={() => {
                    onChangeFilter("hight");
                  }}
                >
                  Hight
                </Button>
                <Button
                  color="primary"
                  onClick={() => {
                    onChangeFilter("middle");
                  }}
                >
                  middle
                </Button>
                <Button
                  color="inherit"
                  onClick={() => {
                    onChangeFilter("low");
                  }}
                >
                  low
                </Button>
              </ButtonGroup>
            </List>
          </Paper>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </div>
  );
};
