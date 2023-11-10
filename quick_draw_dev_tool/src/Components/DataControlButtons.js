import React from "react";
import reloadIcon from "../Assests/Icons/ic_reload.png";
import deleteIcon from "../Assests/Icons/ic_delete.png";
import { innerColor } from "../Assests/constants";
import { useAppState } from "../Context/AppContext";

function DataControlButtons({}) {
  const { state, dispatch } = useAppState();

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
    padding: "8px 8px",
    margin: "4px",
    color: "white",
    cursor: "pointer",
    width: "24px",
    height: "24px",
    marginLeft: "10px",
    marginRight: "10px",
  };

  const handleDeleteData = () => {
    dispatch({
      type: "DISTROY_DATA",
    });
    window.history.go(0);
  };

  const handleReloadPage = () => {
    window.history.go(0);
  };

  return (
    <div style={buttonContainerStyle}>
      <img
        src={reloadIcon}
        onClick={() => handleReloadPage()}
        style={buttonStyle}
      />
      <img
        src={deleteIcon}
        onClick={() => handleDeleteData()}
        style={buttonStyle}
      />
    </div>
  );
}

export default DataControlButtons;
