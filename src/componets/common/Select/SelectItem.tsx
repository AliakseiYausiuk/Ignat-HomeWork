import React, { useState, ChangeEvent } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid/Grid";
import { v1 } from "uuid";

export type dataType = {
  id: string;
  text: string;
};

export type SelectItemType = {
  value: Array<dataType>;
};

// CSS STYLES

const useStyles = makeStyles({
  formControl: {
    minWidth: "200px",
  },
});

export const SelectItem = (props: SelectItemType) => {
  const classes = useStyles();

  const [data, setData] = useState<Array<dataType>>(props.value);

  const [selectItem, setSelectItem] = useState<string | undefined>();

  const changeSelect = (
    e: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>
  ) => {
    setSelectItem(e.target.value as string);
  };
  return (
    <Grid container justifyContent="center">
      <FormControl className={classes.formControl}>
        <InputLabel>Select</InputLabel>
        <Select value={selectItem} onChange={changeSelect}>
          {data.map((el) => (
            <MenuItem value={el.id}>{el.text}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
};
