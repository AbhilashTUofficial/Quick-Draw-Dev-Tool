import React, { useState } from "react";
import { innerColor } from "../../Assests/constants";
import { useAppState } from "../../Context/AppContext";

function AddCodeSnippetCard({ collectionIndex }) {
  const [isHovered, setIsHovered] = useState(false);
  const { state, dispatch } = useAppState();

  const containerStyle = {
    maxWidth: "540px",
    width:"100%",
    margin: "15px auto",
    border: "1px solid lightgrey",
    paddingTop: "16px",
    paddingBottom:"16px",
    backgroundColor: innerColor,
    borderRadius: "4px",
    position: "relative",
    opacity: isHovered ? 0.8 : 0.4,
  };

  const addCodeSnippetHandler = () => {
    dispatch({
      type: "ADD_SNIPPET",
      payload: {
        collectionIndex: collectionIndex,
        snippet: {
          snippetIndex: Math.round(Math.random() * 10000),
          snippet: "This is an example snippet, add more snippets",
        },
      },
    });
  };

  return (
    <div
      style={containerStyle}
      onClick={addCodeSnippetHandler}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Add Code Snippet
    </div>
  );
}

export default AddCodeSnippetCard;
