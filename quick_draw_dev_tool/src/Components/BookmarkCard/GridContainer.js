import React, { useState } from "react";
import BookmarkCard from "./BookmarkCard";
import AddBookmarkCard from "./AddBookMarkCard";

const gridContainerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)", // 4 equal-width columns
  gap: "16px", // Gap between the cards
  maxWidth: "500px", // Set the maximum width
  minWidth: "500px", // Set the minimum width
  margin: "60px auto", // Center the grid horizontally
  justifyContent: "center",
};

function GridContainer() {
  const [cards, setCards] = useState([<BookmarkCard />]);

  const addBookmarkCard = () => {
    if (cards.length < 8) {
      // Limit to 8 bookmark cards
      const updatedCards = [...cards, <BookmarkCard />];
      setCards(updatedCards);

      // If the maximum limit is reached, hide the AddBookmarkCard
      if (updatedCards.length >= 8) {
        setAddBookmarkVisible(false);
      }
    }
  };

  const [addBookmarkVisible, setAddBookmarkVisible] = useState(true);

  return (
    <div style={gridContainerStyle}>
      {cards.map((card, index) => (
        <div key={index}>{card}</div>
      ))}
      {addBookmarkVisible && (
        <div onClick={addBookmarkCard}>
          {/* This is the AddBookmarkCard */}
          <AddBookmarkCard />
        </div>
      )}
    </div>
  );
}

export default GridContainer;
