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
};

const addButtonStyle = {
  width: "50px",
  height: "50px",
};

const editButtonStyle = {
  top: "6px",
  right: "6px",
  color: "white",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

function Bookmark() {
  const handleEditClick = () => {
    // Handle the edit button click
    console.log("Edit button clicked");
  };

  return (
    <div >
      <div style={{ ...cardStyle }}>
        <img src={reactNativeIcon} alt="Add" style={addButtonStyle} />
        <div style={editButtonStyle} onClick={handleEditClick}>
          Edit
        </div> 
        <p>React Native</p>
      </div>
    </div>
  );
}

export default Bookmark;
