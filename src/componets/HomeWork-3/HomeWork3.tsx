import React, { useState } from "react";
import { Grid, TextField, Button, Typography, Box } from "@material-ui/core";
import classes from "./HomeWork-3.module.css";
import Container from "@material-ui/core/Container";
import InputItem from "../common/Input/InputItem";

export type numberType = number;
export type errorType = string | null;

export default function HomeWork3(props: any) {
  let [number, setNumber] = useState<numberType>(0);

  const newAlert = (newTitle: string) => {
    alert(`Добрый день ${newTitle}`);

    setQuantity(newTitle);
  };

  const setQuantity = (title: string) => {
    if (title) {
      number += 1;
    }
    setNumber(number);
  };

  return (
    <div className={classes.item}>
      <Container fixed>
        <Grid container direction="column" alignItems="center">
          <Grid item xs={6}>
            <Typography variant="h5" gutterBottom>
              Введите ваше имя!
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <InputItem add={newAlert} id={"1"} />
          </Grid>
          <Box component="span">
            <Typography variant="h3">{number}</Typography>
          </Box>
        </Grid>
      </Container>
    </div>
  );
}
