import React, { useState } from "react";
import { innerColor, primaryAccent } from "../../Assests/constants";
import addIcon from "../../Assests/Icons/ic_add.png";

const cardStyle = {
  width: "100px",
  height: "100px",
  padding: "16px",
  margin: "auto",
  borderRadius: "4px",
  boxShadow: "0 4px 6px rgba(47, 129, 247, 0.6)",
  backgroundColor: primaryAccent,
  overflow: "hidden",
  transition: "transform 0.2s, background-color 0.2s",
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const cardHoverStyle = {
  transform: "scale(1.1)",
  backgroundColor: innerColor,
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
    }, 200);
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
      <img
        src={addIcon}
        alt="React Native"
        style={{
          width: "80px",
          height: "80px",
          opacity: isHovered ? 0.7 : 0.4,
          content: "fill",
          transform: isHovered ? "rotate(360deg)" : "rotate(0deg)",
          transition: "transform 2s",
        }}
      />
    </div>
  );
}

export default AddBookmarkCard;
