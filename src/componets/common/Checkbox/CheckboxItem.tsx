import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";

export type checkboxType = boolean;
export type CheckboxItemType = {
  id: string;
};

const CheckboxItem = (props: CheckboxItemType) => {
  let [valueCheck, setValueCheck] = useState<checkboxType>(false);
  const changeValue = () => {
    valueCheck = !valueCheck;
    setValueCheck(valueCheck);
  };

  return (
    <div>
      <Checkbox id={props.id} checked={valueCheck} onClick={changeValue} />
    </div>
  );
};

export default CheckboxItem;
