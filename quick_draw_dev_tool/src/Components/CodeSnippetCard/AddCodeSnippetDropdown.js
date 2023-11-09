import React, { useState } from "react";
import { darkGrey } from "../../Assests/constants";
import { useAppState } from "../../Context/AppContext";

function AddCodeSnippetDropdown() {
  const [isHovered, setIsHovered] = useState(false);
  const { state, dispatch } = useAppState();

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
    opacity: isHovered ? 0.8 : 0.4,
  };

  const dropdownText = {
    color: "white",
    margin: "8px",
  };

  const handleAddSnippetCollection = () => {
    dispatch({
      type: "ADD_SNIPPET_COLLECTION",
      payload: {
        index: Math.round(Math.random() * 10000),
        title: "Rename Your Snippet Collection",
        snippets: [],
      },
    });
  };
  return (
    <div
      style={dropdownStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div onClick={() => handleAddSnippetCollection()} style={dropdownText}>
        Add New Snippet Collection
      </div>
    </div>
  );
}

export default AddCodeSnippetDropdown;
