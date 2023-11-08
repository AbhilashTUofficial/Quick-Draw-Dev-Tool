import React from "react";
import { darkGrey } from "../../Assests/constants";
import editIcon from "../../Assests/Icons/ic_edit.png";

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

const editIconStyle = {
  width: "24px",
  height: "24px",
  opacity: 0.8,
  overflow: "hidden",
  display: "flex",
};

function CodeSnippetCard({ snippets }) {
  return (
    <div>
      {snippets.map((data, index) => (
        <div style={containerStyle}>
          <div onClick={() => {}} style={editButtonStyle}>
            <img style={editIconStyle} src={editIcon} />
          </div>
          <div>
            {data.snippet}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CodeSnippetCard;
