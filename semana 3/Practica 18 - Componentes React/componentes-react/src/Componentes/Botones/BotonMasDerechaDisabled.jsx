import React from "react";
import AddIcon from "@mui/icons-material/Add";

const BotonMasDerechaDisabled = (props) => {
  return (
    <button
      className="BotonNormalDisabled"
      style={{ backgroundColor: props.bgColor }}
    >
      {props.content}
      <AddIcon fontSize="small" />
    </button>
  );
};

export default BotonMasDerechaDisabled;
