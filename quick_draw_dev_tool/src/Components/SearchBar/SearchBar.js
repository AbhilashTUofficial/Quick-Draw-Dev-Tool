import React, { useState } from "react";
import { useAppState } from "../../Context/AppContext";
import { custBlue, primaryAccent } from "../../Assests/constants";

function SearchBar() {
  const { state, dispatch } = useAppState();
  const [isHovered, setIsHovered] = useState(false);

  const handleCheckboxToggle = (checkboxName) => {
    dispatch({ type: "TOGGLE_CHECKBOX", payload: checkboxName });
  };

  const containerStyle = {
    // display: "flex",
    // flexDirection: "column",
    // alignItems: "center",
  };

  const searchBarStyle = {
    display: "flex",
    alignItems: "center",
    padding: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    backgroundColor: "white",
    minWidth: "600px",
    maxWidth: "600px",
    height: "32px",
    backgroundColor:primaryAccent,
    transition: "transform 0.2s, box-shadow 0.2s",
    transform: isHovered ? "scale(1.05) translateY(-4px)" : "scale(1)",
    boxShadow: isHovered
      ? "0 4px 6px rgba(47, 129, 247, 0.6)":
      "0 4px 6px rgba(47, 129, 247, 0.2)",
    };

  const inputStyle = {
    width: "100%",
    border: "none",
    outline: "none",
    fontSize: "16px",
    backgroundColor:primaryAccent
  };

  const checkboxesStyle = {
    display: "flex",
    justifyContent: "flex-start",
    marginTop: "10px",
    marginBottom:"32px",
    color:custBlue
  };

  const checkboxLabelStyle = {
    marginRight: "10px", 
    fontSize: "14px", 
  };

  return (
    <div
      style={containerStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={searchBarStyle}>
        <input type="text" placeholder="Search..." style={inputStyle} />
      </div>
      <div style={checkboxesStyle}>
        <input
          type="checkbox"
          id="checkbox1"
          style={{ marginRight: "5px" }}
          checked={state.checkbox1}
          onChange={() => handleCheckboxToggle("checkbox1")}
        />
        <label htmlFor="checkbox1" style={checkboxLabelStyle}>
          Google
        </label>
        <input
          type="checkbox"
          id="checkbox2"
          style={{ marginRight: "5px" }}
          checked={state.checkbox2}
          onChange={() => handleCheckboxToggle("checkbox2")}
        />
        <label htmlFor="checkbox2" style={checkboxLabelStyle}>
          ChatGPT
        </label>
        <input
          type="checkbox"
          id="checkbox3"
          style={{ marginRight: "5px" }}
          checked={state.checkbox3}
          onChange={() => handleCheckboxToggle("checkbox3")}
        />
        <label htmlFor="checkbox3" style={checkboxLabelStyle}>
          Bard
        </label>
        <input
          type="checkbox"
          id="checkbox4"
          style={{ marginRight: "5px" }}
          checked={state.checkbox4}
          onChange={() => handleCheckboxToggle("checkbox4")}
        />
        <label htmlFor="checkbox4" style={checkboxLabelStyle}>
          Android Docs
        </label>
      </div>
    </div>
  );
}

export default SearchBar;
