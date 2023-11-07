import React from "react";
import { darkGrey, reactNativeIcon } from "../../../Assests/constants";

const cardStyle = {
  width: "100px",
  height: "100px",
  padding: "16px",
  margin: "auto",
  borderRadius: "4px",
  backgroundColor: darkGrey,
  overflow: "hidden",
  color: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid white", // Add line border style
  position: "relative", // Add position relative to container
};

const addButtonStyle = {
  width: "50px",
  height: "50px",
};


function Bookmark() {

  return (
    <div style={{ ...cardStyle }}>

      <img src={reactNativeIcon} alt="Add" style={addButtonStyle} />
      <p>React Native</p>
    </div>
  );
}

export default Bookmark;
