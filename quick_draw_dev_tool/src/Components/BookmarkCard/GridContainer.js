import React, { useState } from "react";
import BookmarkCard from "./BookmarkCard";
import AddBookmarkCard from "./AddBookMarkCard";
import { useAppState } from "../../Context/AppContext";


const gridContainerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)", // 4 equal-width columns
  gap: "28px", // Gap between the cards
  maxWidth: "600px", // Set the maximum width
  minWidth: "600px", // Set the minimum width
  margin: "60px auto", // Center the grid horizontally
  justifyContent: "center",
};

function GridContainer() {
  const { state, dispatch } = useAppState(); // Use the context

  const addBookmarkCard = () => {
    if (state.cards.length < 8) {
      // Limit to 8 bookmark cards
      const newCard = {
        index: state.cards.length,
        title: "New bookmark",
        bookmarks: [
          {
            bookmarkIndex: 0,
            bookmarkName: "Default",
            bookmarkUrl: "www.example.com",
          },
        ],
      };
      dispatch({ type: "ADD_CARD", payload: { card: newCard } });
      state.cards.length==7&&setAddBookmarkVisible(false)

    }
  };

  const [addBookmarkVisible, setAddBookmarkVisible] = React.useState(true);

  return (
    <div style={gridContainerStyle}>
      {state.cards.map((card, index) => (
        <div key={index}>
          <BookmarkCard card={card} cardIndex={card.index} />
        </div>
      ))}
      {addBookmarkVisible&& (
        <div onClick={addBookmarkCard}>
          <AddBookmarkCard />
        </div>
      )}
    </div>
  );
}

export default GridContainer;