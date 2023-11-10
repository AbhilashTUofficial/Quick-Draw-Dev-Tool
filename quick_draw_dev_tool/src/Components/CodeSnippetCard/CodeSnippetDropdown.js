import React, { useState } from "react";
import CodeSnippetCard from "./CodeSnippetCard";
import AddCodeSnippetCard from "./AddCodeSnipperCard";
import dropdownIcon from "../../Assests/Icons/ic_dropdown.png";
import { innerColor, primaryAccent } from "../../Assests/constants";
import deleteIcon from "../../Assests/Icons/ic_delete.png";
import editIcon from "../../Assests/Icons/ic_edit.png";
import { useAppState } from "../../Context/AppContext";
import saveIcon from "../../Assests/Icons/ic_checked.png";
import cancelIcon from "../../Assests/Icons/ic_cancel.png";
import useViewportWidth from "../Common/UseViewportWidth";

function CodeSnippetDropdown({ collection }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { state, dispatch } = useAppState();
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(collection.title);
  const viewportWidth = useViewportWidth();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const dropdownStyle = {
    // minWidth: "600px",
    maxWidth: "600px",
    width:"80%",
    flex:1,
    padding: "8px",
    margin: "16px auto 16px auto",
    borderRadius: "4px",
    boxShadow: "0 4px 6px rgba(47, 129, 247, 0.6)",
    backgroundColor: primaryAccent,
    overflow: "hidden",
    transition: "transform 0.2s, background-color 0.2s",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.2s, box-shadow 0.2s, transform 0.3s ease-out",
    transform: isHovered ? "scale(1.05) translateY(-4px)" : "scale(1)",
    boxShadow: isHovered
      ? "0 4px 6px rgba(47, 129, 247, 0.6)"
      : "0 4px 6px rgba(47, 129, 247, 0.2)",
    position: "relative",

  };

  const dropdownIntecatorStyle = {
    position: "absolute",
    top: "18px",
    left: "8px",
    background: "none",
    border: "none",
    color: "white",
    cursor: "pointer",
  };

  const dropdownIconStyle = {
    width: "24px",
    height: "24px",
    opacity: 0.8,
    transform: isOpen ? "rotate(180deg)" : "rotate(360deg)",
    transition: "transform 0.2s, transform 0.3s ease-out",
  };

  const dropdownText = {
    color: "white",
    margin: "8px",
    width: "100%",
    height: "100%",
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

  const handleDelete = () => {
    dispatch({
      type: "DELETE_SNIPPET_COLLECTION",
      payload: {
        deleteCollIndex: collection.index,
        deleteCollection: {
          snippetIndex: collection.index,
          snippet: collection.snippet,
        },
      },
    });
  };

  const handleDiscard = () => {
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveEdit = () => {
    dispatch({
      type: "EDIT_SNIPPET_COLLECTION",
      payload: {
        collectionIndex: collection.index,
        updatedCollection: {
          ...collection,
          title: editedText,
        },
      },
    });
    setIsEditing(false);
  };

  return (
    <div
      style={dropdownStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
     {
       viewportWidth>400&&<button onClick={toggleDropdown} style={dropdownIntecatorStyle}>
       <img
         onClick={toggleDropdown}
         style={dropdownIconStyle}
         src={dropdownIcon}
       />
     </button>
     }
      <div onClick={toggleDropdown} style={dropdownText}>
        {isEditing ? (
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            style={{
              padding: "4px",
              border: "1px solid transparent",
              borderRadius: "4px",
              backgroundColor: "transparent",
              color: "white",
              fontSize: "16px",
              textAlign: "center",
            }}
          />
        ) : (
          collection.title
        )}
      </div>

      <div style={viewportWidth>400?buttonContainerStyle:{}}>
        <img
          src={isEditing ? saveIcon : editIcon}
          onClick={isEditing ? handleSaveEdit : handleEdit}
          style={{
            ...buttonStyle,
            backgroundColor: isEditing ? "green" : innerColor,
          }}
        />
        <img
          src={isEditing ? cancelIcon : deleteIcon}
          onClick={isEditing ? handleDiscard : handleDelete}
          style={{
            ...buttonStyle,
            backgroundColor: isEditing ? "tomato" : innerColor,
          }}
        />
      </div>

      {isOpen && (
        <>
          <CodeSnippetCard
            collectionIndex={collection.index}
            snippets={collection.snippets}
          />
          <AddCodeSnippetCard collectionIndex={collection.index} />
        </>
      )}
    </div>
  );
}

export default CodeSnippetDropdown;
