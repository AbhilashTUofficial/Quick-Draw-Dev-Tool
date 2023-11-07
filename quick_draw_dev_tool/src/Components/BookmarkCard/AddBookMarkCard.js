import React, { useState } from "react";
import { darkGrey, primaryAccent } from "../../Assests/constants";

const cardStyle = {
    width: "100px",
    height: "100px",
    padding: "16px",
    margin: "auto",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(47, 129, 247, 0.6)",
    backgroundColor:primaryAccent,
    overflow: "hidden",
    transition: "transform 0.2s, background-color 0.2s",
    color:"white"
  };
  
  const cardHoverStyle = {
    transform: "scale(1.1)",
    backgroundColor: darkGrey,
  };

function AddBookmarkCard() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsClicked(false);
  };

  const handleCardClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 200); // Reset the click effect after 200ms
  };

  return (
    <div
      style={{
        ...cardStyle,
        ...(isHovered && cardHoverStyle),
        ...(isClicked && { transform: "scale(1)" }),
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
    >
      {/* Card content goes here */}
      <h3>Add BookMark</h3>
    </div>
  );
}

export default AddBookmarkCard;
