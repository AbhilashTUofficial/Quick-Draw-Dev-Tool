import React from "react";
import { darkGrey } from "../../Assests/constants";
import editIcon from "../../Assests/Icons/ic_edit.png";
import deleteIcon from "../../Assests/Icons/ic_delete.png";
import { useAppState } from "../../Context/AppContext";
const containerStyle = {
  maxWidth: "540px", // Set the maximum width
  minWidth: "540px",
  margin: "15px auto",
  border: "1px solid lightgrey",
  padding: "16px",
  backgroundColor: darkGrey,
  borderRadius: "4px",
  position: "relative", // Add relative position to the container
};

const buttonContainerStyle = {
  position: "absolute",
  top: "12px",
  right: "8px",
  display: "flex",
  justifyContent: "space-between",
};

const buttonStyle = {
  backgroundColor: darkGrey,
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

  const handleDelete = (index) => {
    dispatch({
      type: "DELETE_SNIPPET",
      payload: {
        deleteCollectionIndex: collectionIndex,
        deleteSnippetIndex: index,
      },
    });
  };

  const handleEdit = () => {
    // Add logic to handle edit
  };

  return (
    <div>
      {snippets.map((data) => (
        <div style={containerStyle}>
          <div style={buttonContainerStyle}>
            <img
              src={editIcon}
              onClick={() => handleEdit()}
              style={buttonStyle}
            />
            <img
              src={deleteIcon}
              onClick={() => handleDelete(data.snippetIndex)}
              style={buttonStyle}
            />
          </div>
          <div>{data.snippet}</div>
        </div>
      ))}
    </div>
  );
}

export default CodeSnippetCard;
