import React from "react";
import { darkGrey } from "../../Assests/constants";

const containerStyle = {
  maxWidth: "540px", // Set the maximum width
  minWidth: "540px",
  margin: "15px auto",
  border: "1px solid lightgrey",
  padding: "16px",
  backgroundColor: darkGrey,
  borderRadius: "4px",
  position: "relative", // Add relative position to the container
};

const editButtonStyle = {
  position: "absolute",
  top: "8px",
  right: "8px",
  background: darkGrey,
  color: "white",
  cursor: "pointer",
};

function CodeSnippetCard({ children }) {
  
  return (
    <div style={containerStyle}>
      <div onClick={() => {}} style={editButtonStyle}>
        Edit
      </div>
      {children}
    </div>
  );
}

export default CodeSnippetCard;
