import React, { useState } from "react";
import CodeSnippetCard from "./CodeSnippetCard";
import AddCodeSnippetCard from "./AddCodeSnipperCard";

function CodeSnippetDropdown() {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const deleteCard = () => {
    // Implement card deletion logic
  };

  const dropdownStyle = {
    minWidth: "600px",
    maxWidth: "600px",
    padding: "8px",
    margin: "16px",
    borderRadius: "4px",
    boxShadow: "0 4px 6px rgba(47, 129, 247, 0.6)",
    backgroundColor: "#0D1117",
    overflow: "hidden",
    transition: "transform 0.2s, background-color 0.2s",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.2s, box-shadow 0.2s, transform 0.3s ease-out", // Add ease-out transition
    transform: isHovered ? "scale(1.05) translateY(-4px)" : "scale(1)",
    boxShadow: isHovered
      ? "0 4px 6px rgba(47, 129, 247, 0.6)"
      : "0 4px 6px rgba(47, 129, 247, 0.2)",
    position: "relative",

  };


  const deleteButtonStyle = {
    position: "absolute",
    top: "18px",
    right: "8px",
    background: "none",
    border: "none",
    color: "white",
    cursor: "pointer",
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

  const dropdownText = {
    color: "white",
    margin: "8px",
  };

  return (
    <div
      style={dropdownStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button onClick={deleteCard} style={deleteButtonStyle}>
        Delete
      </button>
      <button onClick={deleteCard} style={dropdownIntecatorStyle}>
        {isOpen?"opend":"closed"}
      </button>
      <div onClick={toggleDropdown} style={dropdownText}>
        React Native code snips
      </div>
      {isOpen && (
        <>
          <CodeSnippetCard children={`
          mView.findViewById(R.id.call_back_btn).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                PhoneHelper phoneHelper = new PhoneHelper();
                mView.setVisibility(View.INVISIBLE);
                phoneHelper.openDialer(context, (String) connectedNumber.getText());
            }
        });
          `} />
          <AddCodeSnippetCard />
        </>
      )}
    </div>
  );
}

export default CodeSnippetDropdown;
