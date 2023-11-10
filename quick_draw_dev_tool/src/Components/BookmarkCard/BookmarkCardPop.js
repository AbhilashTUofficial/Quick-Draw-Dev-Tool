import React, { useEffect, useRef, useState } from "react";
import Bookmark from "./Bookmark/Bookmark";
import { innerColor } from "../../Assests/constants";
import AddBookmark from "./Bookmark/AddBookmark";
import AddBookmarkForm from "./Bookmark/AddBookmarkForm";
import editIcon from "../../Assests/Icons/ic_edit.png";
import { useAppState } from "../../Context/AppContext";
import deleteIcon from "../../Assests/Icons/ic_delete.png";

function BookmarkCardPop({ data, setPopupVisible, cardIndex }) {
  const popupStyle = {
    maxWidth: "700px",
    minWidth: "600px",
    minHeight: "400px",
    maxHeight: "400px",
    borderRadius: "4px",
    boxShadow: "0 4px 6px rgba(47, 129, 247, 0.6)",
    backgroundColor: innerColor,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
    overflowY: "auto",
  };

  const contentContainerStyle = {
    flex: 1,
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "16px",
  };

  const buttonContainerStyle = {
    position: "absolute",
    top: "12px",
    right: "8px",
    display: "flex",
    justifyContent: "space-between",
  };

  const buttonStyle = {
    backgroundColor: innerColor,
    border: "1px solid white",
    borderRadius: "99px",
    padding: "4px 4px",
    margin: "4px",
    color: "white",
    cursor: "pointer",
    width: "18px",
    height: "18px",
    marginLeft: "10px",
    marginRight: "10px",
  };

  const popupRef = useRef(null);
  const { state, dispatch } = useAppState();
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

  const handleDeleteBookmark = (index) => {
    dispatch({
      type: "DELETE_BOOKMARK",
      payload: {
        deleteCardIndex: cardIndex,
        deleteBookmarkIndex: index,
      },
    });
  };
  const handleEditBookmark = (index, name, url) => {
    dispatch({
      type: "EDIT_BOOKMARK",
      payload: {
        cardIndex: cardIndex,
        bookmark: {
          bookmarkIndex: index,
          bookmarkName: name,
          bookmarkUrl: url,
        },
      },
    });
  };

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
          handleDeleteBookmark={(index) => handleDeleteBookmark(index)}
          handleEditBookmark={(index, name, url) =>
            handleEditBookmark(index, name, url)
          }
        />
      );
    });
    return tempArray;
  };

  const handleDeleteCard = () => {
    closePopup();
    dispatch({
      type: "DELETE_CARD",
      payload: {
        deleteCardIndex: cardIndex,
      },
    });
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const handleAddBookmark = (name, url, index) => {
    dispatch({
      type: "ADD_BOOKMARK",
      payload: {
        cardIndex: cardIndex,
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
              onAddBookmark={(name, url, index) =>
                handleAddBookmark(name, url, index)
              }
              onCancel={closeAddForm}
            />
          ) : (
            <div onClick={openAddForm}>
              <AddBookmark />
            </div>
          )}
        </div>
      </div>

      <div style={buttonContainerStyle}>
        {/* <img
          src={editIcon}
          onClick={() => handleEditBookmark()}
          style={buttonStyle}
        /> */}
        <img
          src={deleteIcon}
          onClick={() => handleDeleteCard()}
          style={buttonStyle}
        />
      </div>
    </div>
  );
}

export default BookmarkCardPop;
