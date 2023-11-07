import React, { useState, useEffect } from "react";
import { darkGrey } from "../../../Assests/constants";

const cardStyle = {
  width: "100px",
  height: "100px",
  padding: "16px",
  margin: "auto",
  borderRadius: "4px",
  backgroundColor: darkGrey,
  overflow: "hidden",
  color: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid white", // Add line border style
};

const inputStyle = {
  backgroundColor: darkGrey,
  border: "none",
  borderBottom: "1px solid white", // Add line border style
  padding: "4px",
  margin: "4px", // Add margin
  color: "white",
  width: "80px", // Adjust input width
  outline: "none", // Remove input outline
};

const buttonContainerStyle = {
  display: "flex",
  justifyContent: "space-between", // Make buttons horizontal
  margin: "8px", // Add margin
};

const buttonStyle = {
  backgroundColor: darkGrey,
  border: "1px solid white", // Add line border style
  borderRadius: "4px",
  padding: "4px 8px", // Add padding
  margin: "4px", // Add margin
  color: "white",
  cursor: "pointer",
};

function AddBookmarkForm({ onAddBookmark, onCancel }) {
  const [name, setName] = useState(" ");
  const [url, setUrl] = useState(" ");
  const [key, setKey] = useState(" ");


  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value.slice(0, 100)); // Limit URL input to 100 characters
  };

  const handleSubmit = () => {
    onAddBookmark( name, url, Math.random()*100 );
    setName("");
    setUrl("");
  };

  useEffect(() => {
    // Listen for clipboard changes
    navigator.clipboard.readText().then((clipboardText) => {
      setUrl(clipboardText.slice(0, 100)); // Paste clipboard text and limit to 100 characters
    });
    document.addEventListener("paste", handleClipboardChange);

    return () => {
      document.removeEventListener("paste", handleClipboardChange);
    };
  }, []);

  const handleClipboardChange = (e) => {
    // Handle clipboard changes, similar to the "Add" button click
    navigator.clipboard.readText().then((clipboardText) => {
      setUrl(clipboardText.slice(0, 100)); // Paste clipboard text and limit to 100 characters
    });
  };

  return (
    <div style={cardStyle}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={handleNameChange}
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="URL"
        value={url}
        onChange={handleUrlChange}
        style={inputStyle}
      />
      <div style={buttonContainerStyle}>
        <button onClick={onCancel} style={buttonStyle}>
          Cancel
        </button>
        <button onClick={handleSubmit} style={buttonStyle}>
          OK
        </button>
      </div>

    </div>
  );
}

export default AddBookmarkForm;
