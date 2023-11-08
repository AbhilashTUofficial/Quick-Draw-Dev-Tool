import React from "react";
import { darkGrey } from "../../../Assests/constants";
import bookmarkIcon from "../../../Assests/Icons/ic_react_native.png";
import editIcon from "../../../Assests/Icons/ic_edit.png";
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
  color: "green",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};


function Bookmark() {
  const handleEditClick = () => {
    // Handle the edit button click
    console.log("Edit button clicked");
  };

  return (
    <div>
      <div style={{ ...cardStyle }}>

        <img src={bookmarkIcon} alt="Add" style={addButtonStyle} />
        <div style={editButtonStyle} onClick={handleEditClick}></div>
        <p>React Native</p>
      </div>
    </div>
  );
}

export default Bookmark;
