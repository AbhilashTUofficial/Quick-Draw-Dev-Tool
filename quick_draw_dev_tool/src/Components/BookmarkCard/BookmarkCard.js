import React, { useState } from "react";
import BookmarkCardPop from "./BookmarkCardPop";
import reactNativeIcon from "../../Assests/Icons/ic_react_native.png";
import { darkGrey } from "../../Assests/constants";

const cardStyle = {
  width: "100px",
  height: "100px",
  padding: "16px",
  margin: "auto",
  borderRadius: "8px",
  boxShadow: "0 4px 6px rgba(47, 129, 247, 0.6)",
  backgroundColor: "#0D1117",
  overflow: "hidden",
  transition: "transform 0.2s, background-color 0.2s",
  color: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const cardHoverStyle = {
  transform: "scale(1.1)",
  backgroundColor: darkGrey,
};

const editButtonStyle = {
  top: "6px",
  right: "6px",
  color: "white",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor:"red"
};

function BookmarkCard() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsClicked(false);
  };

  const handleCardClick = () => {
    console.log("click");
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
      setPopupVisible(true);
    }, 200); // Show the popup after 200ms
  };

  const handleEditClick = () => {
    // Handle the edit button click
    console.log("Edit button clicked");
  };

  return (
    <div>
      <div
        style={{
          ...cardStyle,
          ...(isHovered && cardHoverStyle),
          ...(isClicked && { transform: "scale(1)" }),
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
              <div style={editButtonStyle} onClick={handleEditClick}>
          Edit
        </div> 
        <div onClick={handleCardClick}>
          <img
            src={reactNativeIcon}
            alt="React Native"
            style={{
              width: "50px",
              height: "50px",
              marginBottom: "8px",
              transform: isHovered ? "rotate(360deg)" : "rotate(0deg)",
              transition: "transform 2s",
            }}
          />
          <p>React Native</p>
        </div>
  

      </div>

      {isPopupVisible && (
        <BookmarkCardPop setPopupVisible={(e) => setPopupVisible(e)} />
      )}
    </div>
  );
}

export default BookmarkCard;
