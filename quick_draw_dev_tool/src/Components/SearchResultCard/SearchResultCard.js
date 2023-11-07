import React, { useState } from "react";

const cardStyle = {
  maxWidth: "500px",
  minWidth: "500px",
  height: "300px",
  padding: '20px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  backgroundColor: 'white',
  margin: '32px', // Add some margin to separate the card views
  cursor: 'pointer', // Add a pointer cursor to indicate clickability
};

const iframeStyle = {
  width: "100%",
  height: "100%",
  border: "none",
};

function SearchResultCard() {
  const [expanded, setExpanded] = useState(false);

  const handleCardClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div style={{ ...cardStyle, width: expanded ? "100%" : "500px" }} onClick={handleCardClick}>
      {expanded ? (
        <iframe
          src="https://stackoverflow.com/questions/55700714/how-to-set-margin-in-react-native"
          style={iframeStyle}
        />
      ) : (
        <div>
          <h2>Card Title</h2>
          <p>This is some content inside the card.</p>
        </div>
      )}
    </div>
  );
}

export default SearchResultCard;
