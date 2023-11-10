import React, { useState } from "react";
import { innerColor } from "../../../Assests/constants";
import bookmarkIcon from "../../../Assests/Icons/ic_react_native.png";
import editIcon from "../../../Assests/Icons/ic_edit.png";
import deleteIcon from "../../../Assests/Icons/ic_delete.png";
import EditBookmarkForm from "./EditBookmarkForm";
const cardStyle = {
  width: "100px",
  height: "100px",
  padding: "16px",
  margin: "auto",
  borderRadius: "4px",
  backgroundColor: innerColor,
  overflow: "hidden",
  color: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid white",
};

const addButtonStyle = {
  width: "50px",
  height: "50px",
};

const buttonContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "8px", 
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

function Bookmark({ key, name, url, cardIndex, bookmarkIndex, handleDeleteBookmark,handleEditBookmark }) {
  const [editing, setEditing] = useState(false);

  const handleClick = () => {
    window.open(url, "_blank");
  };

  const handleDelete = () => {
    handleDeleteBookmark(bookmarkIndex)
  };

  const handleEdit = () => {
    handleEditBookmark(bookmarkIndex,name,url)
  };

  return (
    <div>
      {editing ? (
        <EditBookmarkForm
        key={key}
          bookmarkName={name}
          cardIndex={cardIndex}
          bookmarkIndex={bookmarkIndex}
          bookmarkUrl={url}
          onCancel={() => setEditing(false)}
          onOkay={()=>{}}
        />
      ) : (
        <div style={cardStyle}>
          <img
            src={bookmarkIcon}
            onClick={handleClick}
            alt="Bookmark"
            style={addButtonStyle}
          />
          <div style={{padding:"2px"}} onClick={handleClick}>{name.slice(0,12)}</div>
          <div style={buttonContainerStyle}>
            <img src={deleteIcon} onClick={()=>handleDelete()} style={buttonStyle} />
            <img
              src={editIcon}
              onClick={() => setEditing(true)}
              style={buttonStyle}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Bookmark;
