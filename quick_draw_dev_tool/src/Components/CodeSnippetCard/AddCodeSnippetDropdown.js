import React, { useState } from "react";
import CodeSnippetCard from "./CodeSnippetCard";
import AddCodeSnippetCard from "./AddCodeSnipperCard";
import { darkGrey } from "../../Assests/constants";

function AddCodeSnippetDropdown() {
  const [isHovered, setIsHovered] = useState(false);

  const deleteCard = () => {
    // Implement card deletion logic
  };

  const dropdownStyle = {
    minWidth: "600px",
    maxWidth: "600px",
    margin: "16px",
    overflow: "hidden",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid lightgrey",
    padding: "8px",
    backgroundColor: darkGrey,
    borderRadius: "4px",
    position: "relative", 
    opacity: isHovered?0.8:0.4
  };

  const dropdownText = {
    color: "white",
    margin: "8px",
  };

  return (
    <div
      style={dropdownStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      <div onClick={()=>{}} style={dropdownText}>
        Add New Snippit Collection
      </div>
  
    </div>
  );
}

export default AddCodeSnippetDropdown;
