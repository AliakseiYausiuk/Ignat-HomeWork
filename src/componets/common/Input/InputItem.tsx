import React, { useState } from "react";
import TextField from "@material-ui/core/TextField/TextField";
import ButtonItem from "../Button/ButtonItem";
import Grid from "@material-ui/core/Grid/Grid";

export type InputItemType = {
  add: (newTitle: string) => void;
  id: string;
};
export type errorType = string | null;

export default function InputItem(props: InputItemType) {
  let [error, setError] = useState<errorType>(null);
  let [title, setTitle] = useState(" ");

  const addMessage = () => {
    if (title.trim() !== "") {
      props.add(title);
      setTitle("");
    } else {
      setError("Title is required");
    }
  };

  const newAlertKeyPress = (event: any) => {
    setError(null);
    if (event.charCode === 13) {
      addMessage();
    }
  };

  return (
    <Grid container>
      <TextField
        id={props.id}
        label="Filled"
        variant="filled"
        value={title}
        onChange={(el) => {
          setTitle(el.currentTarget.value);
        }}
        onKeyPress={newAlertKeyPress}
        helperText={error}
        error={!!error}
      />

      <ButtonItem title={"Add"} click={addMessage} id={props.id} />
    </Grid>
  );
}
