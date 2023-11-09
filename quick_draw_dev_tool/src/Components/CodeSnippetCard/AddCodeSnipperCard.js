import React, { useState } from "react";
import { darkGrey } from "../../Assests/constants";
import { useAppState } from "../../Context/AppContext";

function AddCodeSnippetCard({collectionIndex}) {
  const [isHovered, setIsHovered] = useState(false);
  const { state, dispatch } = useAppState();

  const containerStyle = {
    maxWidth: "540px",
    minWidth: "540px",
    margin: "15px auto",
    border: "1px solid lightgrey",
    padding: "16px",
    backgroundColor: darkGrey,
    borderRadius: "4px",
    position: "relative",
    opacity: isHovered ? 0.8 : 0.4,
  };

  const addCodeSnippetHanlder = () => {
    dispatch({
      type: "ADD_SNIPPET",
      payload: {
        collectionIndex: collectionIndex,
        snippet: {
          snippetIndex: Math.round(Math.random() * 10000),
          snippet: "This is a Example snippet, add more snippets",
        },
      },
    });
  };

  return (
    <div
      style={containerStyle}
      onClick={() => addCodeSnippetHanlder()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Add Code Snippet
    </div>
  );
}

export default AddCodeSnippetCard;
