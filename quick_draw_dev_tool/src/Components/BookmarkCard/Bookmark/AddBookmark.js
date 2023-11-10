import React from "react";
import { innerColor } from "../../../Assests/constants";
import addIcon from "../../../Assests/Icons/ic_add.png";

const cardStyle = {
  width: "100px",
  height: "100px",
  padding: "16px",
  margin: "auto",
  borderRadius: "4px",
  backgroundColor: innerColor,
  overflow: "hidden",
  color: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid white",
  position: "relative",
};

const addButtonStyle = {
  width: "80px",
  height: "80px",
  opacity: 0.6,
};

function Bookmark() {
  return (
    <div style={cardStyle}>
      <img src={addIcon} alt="Add" style={addButtonStyle} />
    </div>
  );
}

export default Bookmark;
