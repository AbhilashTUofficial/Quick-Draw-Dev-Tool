import React, { useState, useEffect } from "react";
import { innerColor } from "../../../Assests/constants";
import { toast } from "react-toastify";
import { useAppState } from "../../../Context/AppContext";
import "react-toastify/dist/ReactToastify.css";

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
  transition: "border 0.3s linear",
};

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

const buttonContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
  margin: "8px",
};

const buttonStyle = {
  backgroundColor: innerColor,
  border: "1px solid white",
  borderRadius: "4px",
  padding: "4px 8px",
  margin: "4px",
  color: "white",
  cursor: "pointer",
};

const errorBorderStyle = {
  border: "1px solid red",
  animation: "blink 1s infinite",
};

const blinkKeyframes = `
  @keyframes blink {
    0%, 100% { border-color: red; }
    50% { border-color: white; }
  }
`;

const styleTag = document.createElement("style");
styleTag.type = "text/css";
styleTag.appendChild(document.createTextNode(blinkKeyframes));
document.head.appendChild(styleTag);

function EditBookmarkForm({
  bookmarkName,
  cardIndex,
  bookmarkIndex,
  bookmarkUrl,
  onCancel,
}) {
  const validUrlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

  const [error, setError] = useState(false);

  const [name, setName] = useState(bookmarkName);
  const [url, setUrl] = useState(bookmarkUrl);
  const { state, dispatch } = useAppState();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value.slice(0, 100));
  };

  const handleEdit = () => {
    if (name.trim() !== "" && validUrlRegex.test(url.trim())) {
      dispatch({
        type: "EDIT_BOOKMARK",
        payload: {
          cardIndex: cardIndex,
          bookmarkIndex: bookmarkIndex,
          updatedBookmark: {
            bookmarkIndex: bookmarkIndex,
            bookmarkName: name,
            bookmarkUrl: url,
          },
        },
      });
      onCancel();
    } else {
      toast("Don't leave them blank", {
        type: "warning",
      });

      setError(true);

      setTimeout(() => {
        setError(false);
      }, 2000);
    }
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
        <button onClick={handleEdit} style={buttonStyle}>
          OK
        </button>
      </div>
    </div>
  );
}

export default EditBookmarkForm;
