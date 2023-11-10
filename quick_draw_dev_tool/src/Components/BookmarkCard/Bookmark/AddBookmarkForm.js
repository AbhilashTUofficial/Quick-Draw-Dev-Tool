import React, { useState, useEffect } from "react";
import { innerColor } from "../../../Assests/constants";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Styles for the card
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
  border: "1px solid white", // Add line border style
  transition: "border 0.3s linear", // Add border transition
};

// Input field style
const inputStyle = {
  backgroundColor: innerColor,
  border: "none",
  borderBottom: "1px solid white",
  padding: "4px",
  margin: "4px",
  color: "white",
  width: "80px",
  outline: "none",
};

// Button container style
const buttonContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
  margin: "8px",
};

// Button style
const buttonStyle = {
  backgroundColor: innerColor,
  border: "1px solid white",
  borderRadius: "4px",
  padding: "4px 8px",
  margin: "4px",
  color: "white",
  cursor: "pointer",
};

// Error border style
const errorBorderStyle = {
  border: "1px solid red",
  animation: "blink 1s infinite",
};

// Keyframes for error blinking animation
const blinkKeyframes = `
  @keyframes blink {
    0%, 100% { border-color: red; }
    50% { border-color: white; }
  }
`;

// Create a style tag and append the blinkKeyframes to it
const styleTag = document.createElement("style");
styleTag.type = "text/css";
styleTag.appendChild(document.createTextNode(blinkKeyframes));
document.head.appendChild(styleTag);

function AddBookmarkForm({ onAddBookmark, onCancel }) {
  const validUrlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value.slice(0, 100));
  };

  const handleSubmit = () => {
    if (name.trim() !== "" && validUrlRegex.test(url.trim())) {
      onAddBookmark(name, url, Math.round(Math.random() * 10000));
      setName("");
      setUrl("");
    } else {
      // Show a warning toast message
      toast("Don't leave them blank", {
        type: "warning",
      });

      setError(true);

      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };

  useEffect(() => {
    // Read clipboard text and set it as the URL if it's a valid URL
    navigator.clipboard.readText().then((clipboardText) => {
      if (validUrlRegex.test(clipboardText)) {
        setUrl(clipboardText.slice(0, 100));
      }
    });

    // Listen for paste events
    document.addEventListener("paste", handleClipboardChange);

    return () => {
      // Clean up the event listener
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
    <div style={{ ...cardStyle, ...(error && errorBorderStyle) }}>
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
