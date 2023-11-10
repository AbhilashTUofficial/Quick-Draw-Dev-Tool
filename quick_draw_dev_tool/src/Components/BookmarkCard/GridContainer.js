import React from "react";
import BookmarkCard from "./BookmarkCard";
import AddBookmarkCard from "./AddBookmarkCard";
import { useAppState } from "../../Context/AppContext";

const gridContainerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "28px",
  maxWidth: "600px",
  minWidth: "600px",
  margin: "60px auto",
  justifyContent: "center",
};

function GridContainer() {
  const { state, dispatch } = useAppState();
  const [addBookmarkVisible, setAddBookmarkVisible] = React.useState(true);

  const addBookmarkCard = () => {
    const newCard = {
      index: state.cards.length,
      title: "New bookmark",
      bookmarks: [],
    };
    dispatch({ type: "ADD_CARD", payload: { card: newCard } });
  }

  return (
    <div style={gridContainerStyle}>
      {state.cards.map((card, index) => (
        <div key={index}>
          <BookmarkCard card={card} cardIndex={card.index} index={index} />
        </div>
      ))}
      {addBookmarkVisible && state.cards.length < 8 && (
        <div onClick={addBookmarkCard}>
          <AddBookmarkCard />
        </div>
      )}
    </div>
  );
}

export default GridContainer;
