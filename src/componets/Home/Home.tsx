import React from "react";
import { SelectItem } from "../common/Select/SelectItem";
import { v1 } from "uuid";

export const Home = () => {
  const data = [
    {
      id: v1(),
      text: "JavaScript",
    },
    {
      id: v1(),
      text: "DOM",
    },
    {
      id: v1(),
      text: "Angulr",
    },
    {
      id: v1(),
      text: "Node.js",
    },
    {
      id: v1(),
      text: "React.nativ",
    },
    {
      id: v1(),
      text: "Mob X",
    },
  ];

  return (
    <div>
      <SelectItem value={data} />
    </div>
  );
};
