import React, { useState } from "react";
import { innerColor } from "../../Assests/constants";
import editIcon from "../../Assests/Icons/ic_edit.png";
import deleteIcon from "../../Assests/Icons/ic_delete.png";
import { useAppState } from "../../Context/AppContext";
import saveIcon from "../../Assests/Icons/ic_checked.png";
import cancelIcon from "../../Assests/Icons/ic_cancel.png";
import useViewportWidth from "../Common/UseViewportWidth";

const containerStyle = {
  maxWidth: "540px",
  // minWidth: "540px",
  margin: "15px auto",
  border: "1px solid lightgrey",
  padding: "16px",
  backgroundColor: innerColor,
  borderRadius: "4px",
  position: "relative",
};

const buttonContainerStyle = {
  position: "absolute",
  top: "12px",
  right: "0px",
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

function CodeSnippetCard({ collectionIndex, snippets }) {
  const { state, dispatch } = useAppState();
  const [editableSnippets, setEditableSnippets] = useState([]);
  const [editedSnippets, setEditedSnippets] = useState([]);
  const viewportWidth = useViewportWidth();

  const handleDelete = (index) => {
    dispatch({
      type: "DELETE_SNIPPET",
      payload: {
        deleteCollectionIndex: collectionIndex,
        deleteSnippetIndex: index,
      },
    });
  };

  const toggleEdit = (index) => {
    setEditableSnippets((prevEditableSnippets) => {
      const updatedEditableSnippets = [...prevEditableSnippets];
      updatedEditableSnippets[index] = !updatedEditableSnippets[index];
      return updatedEditableSnippets;
    });

    if (!editableSnippets[index]) {
      // Initialize editedSnippet with the current snippet text when entering edit mode
      setEditedSnippets((prevEditedSnippets) => {
        const updatedEditedSnippets = [...prevEditedSnippets];
        updatedEditedSnippets[index] = snippets[index].snippet;
        return updatedEditedSnippets;
      });
    }
  };

  const handleSave = (index, snippetIndex) => {
    // Dispatch an action to save the edited snippet
    dispatch({
      type: "EDIT_SNIPPET",
      payload: {
        collectionIndex: collectionIndex,
        snippetIndex: snippetIndex,
        updatedSnippet: {
          snippetIndex: snippetIndex,
          snippet: editedSnippets[index],
        },
      },
    });
    toggleEdit(index);
  };

  const handleDiscard = (index) => {
    toggleEdit(index);
  };

  const handleSnippetChange = (event, index) => {
    setEditedSnippets((prevEditedSnippets) => {
      const updatedEditedSnippets = [...prevEditedSnippets];
      updatedEditedSnippets[index] = event.target.value;
      return updatedEditedSnippets;
    });
  };

  return (
    <div style={{width:"100%"}}>
      {snippets.map((data, index) => (
        <div style={containerStyle} key={data.snippetIndex}>
          <div style={viewportWidth>400?buttonContainerStyle:{}}>
            <img
              src={editableSnippets[index] ? saveIcon : editIcon}
              onClick={() => {
                if (editableSnippets[index]) {
                  handleSave(index, data.snippetIndex);
                } else {
                  toggleEdit(index);
                }
              }}
              style={{
                ...buttonStyle,
                backgroundColor: editableSnippets[index] ? "green" : innerColor,
              }}
            />
            <img
              src={editableSnippets[index] ? cancelIcon : deleteIcon}
              onClick={() => {
                if (editableSnippets[index]) {
                  handleDiscard(index);
                } else {
                  handleDelete(data.snippetIndex);
                }
              }}
              style={{
                ...buttonStyle,
                backgroundColor: editableSnippets[index]
                  ? "tomato"
                  : innerColor,
              }}
            />
          </div>
          <div>
            {editableSnippets[index] ? (
              <input
                type="text"
                value={editedSnippets[index]}
                onChange={(event) => handleSnippetChange(event, index)}
                style={{
                  padding: "4px",
                  width: "100%",
                  border: "1px solid transparent",
                  borderRadius: "4px",
                  backgroundColor: "transparent",
                  color: "white",
                  fontSize: "16px",
                }}
              />
            ) : (
              data.snippet
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CodeSnippetCard;
