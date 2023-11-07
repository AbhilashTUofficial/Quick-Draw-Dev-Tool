import React, { useState } from "react";
import { darkGrey } from "../../Assests/constants";

function AddCodeSnippetCard() {
  const [isHovered, setIsHovered] = useState(false);

  const containerStyle = {
    maxWidth: "540px",
    minWidth: "540px",
    margin: "15px auto",
    border: "1px solid lightgrey",
    padding: "16px",
    backgroundColor: darkGrey,
    borderRadius: "4px",
    position: "relative",
    opacity: isHovered ? 0.8 : 0.4,
  };
  return (
    <div
      style={containerStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Add Code Snippet
    </div>
  );
}

export default AddCodeSnippetCard;
