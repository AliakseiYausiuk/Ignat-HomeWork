import React from "react";
import Button from "@material-ui/core/Button";

export type ButtonItemType = {
  title: string;
  click: () => void;
  id: string;
};

export default function ButtonItem(props: ButtonItemType) {
  return (
    <div>
      <Button
        id={props.id}
        variant="contained"
        color="primary"
        onClick={props.click}
      >
        {props.title}
      </Button>
    </div>
  );
}
