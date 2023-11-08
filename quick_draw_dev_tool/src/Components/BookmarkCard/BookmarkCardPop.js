import React, { useEffect, useRef, useState } from "react";
import Bookmark from "./Bookmark/Bookmark";
import { darkGrey } from "../../Assests/constants";
import AddBookmark from "./Bookmark/AddBookmark";
import AddBookmarkForm from "./Bookmark/AddBookmarkForm";
import editIcon from "../../Assests/Icons/ic_edit.png";
import { useAppState } from "../../Context/AppContext";

function BookmarkCardPop({ data, setPopupVisible, cardIndex }) {
  const popupStyle = {
    maxWidth: "700px",
    minWidth: "600px",
    minHeight: "400px",
    maxHeight: "400px",
    borderRadius: "4px",
    boxShadow: "0 4px 6px rgba(47, 129, 247, 0.6)",
    backgroundColor: darkGrey,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // justifyContent: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    transition: "transform 0.2s, background-color 0.2s, z-index 0.2s",
    zIndex: 1,
    color: "white",
    transformOrigin: "center",
    opacity: 1,
    overflow: "scroll",
    padding: "16px",
    margin: "16px",
    overflowY: "hidden",
    overflowX: "hidden",
  };

  const containerWrapperStyle = {
    // overflow: "hidden",
    overflowY: "auto",
  };

  const contentContainerStyle = {
    flex: 1,
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "16px",
  };

  const editButtonStyle = {
    position: "absolute",
    top: "16px",
    right: "16px",
    background: darkGrey,
    border: "1px solid white",
    color: "white",
    borderRadius: "99px",
    cursor: "pointer",
    height: "36px",
    width: "36px",
  };

  const editIconStyle = {
    width: "24px",
    height: "24px",
    opacity: 0.8,
    overflow: "hidden",
    display: "flex",
  };

  // Create a ref for the popup element
  const popupRef = useRef(null);
  const { state, dispatch } = useAppState(); // Use the context

  const createBookmarks = () => {
    var tempArray = [];
    data.map((_bookmark) => {
      tempArray.push(
        <Bookmark
          key={_bookmark.bookmarkIndex}
          name={_bookmark.bookmarkName}
          url={_bookmark.bookmarkUrl}
          cardIndex={cardIndex}
          bookmarkIndex={_bookmark.bookmarkIndex}
        />
      );
    });
    return tempArray;
  };
  const closePopup = () => {
    setPopupVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        closePopup();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popupRef]);

  const [showAddForm, setShowAddForm] = useState(false);

  const openAddForm = () => {
    setShowAddForm(true);
  };

  const closeAddForm = () => {
    setShowAddForm(false);
  };

  const handleAddBookmark = ({ name, url, index }) => {
    dispatch({
      type: "ADD_BOOKMARK",
      payload: {
        cardIndex:cardIndex,
        bookmark: {
          bookmarkIndex: index,
          bookmarkName: name,
          bookmarkUrl: url,
        },
      },
    });

    closeAddForm();
  };

  return (
    <div ref={popupRef} style={{ ...popupStyle, zIndex: 99 }}>
      <div style={containerWrapperStyle}>
        <div style={contentContainerStyle}>
          {createBookmarks()}
          {showAddForm ? (
            <AddBookmarkForm
              onAddBookmark={handleAddBookmark}
              onCancel={closeAddForm}
            />
          ) : (
            <div onClick={openAddForm}>
              <AddBookmark />
            </div>
          )}
        </div>
      </div>

      <button onClick={() => {}} style={editButtonStyle}>
        <img style={editIconStyle} src={editIcon} />
      </button>
    </div>
  );
}

export default BookmarkCardPop;
