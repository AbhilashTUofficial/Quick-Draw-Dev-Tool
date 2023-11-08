import React, { createContext, useReducer, useContext, useEffect } from "react";

// Define the initial state for checkboxes
const initialState = {
  checkbox1: false,
  checkbox2: false,
  checkbox3: false,
  checkbox4: false,

  snippetCollections: [
    {
      index: 0,
      title: "Example Snippet Collection",
      snippets: [
        {
          snippetIndex: 0,
          snippet: "This is a Example snippet, add more snippets",
        },
      ],
    },
  ],

  cards: [
    {
      index: 0,
      title: "New bookmark",
      bookmarks: [
        {
          bookmarkIndex: 0,
          bookmarkName: "Google",
          bookmarkUrl: "www.google.com",
        },
      ],
    },
  ],
};

const LOCAL_STORAGE_KEY = "myAppData"; // Key for localStorage

const AppContext = createContext();

const appReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_CHECKBOX":
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ ...state, [action.payload]: !state[action.payload] }));
      return { ...state, [action.payload]: !state[action.payload] };

    case "ADD_BOOKMARK":
      console.log("called");
      const { cardIndex, bookmark } = action.payload;
      const updatedCards = [...state.cards];
      const updatedCard = { ...updatedCards[cardIndex] }; // Create a copy of the card to be updated
      updatedCard.bookmarks.push(bookmark); // Add the new bookmark to the copy
      updatedCards[cardIndex] = updatedCard; // Replace the old card with the updated one
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ ...state, cards: updatedCards }));
      return { ...state, cards: updatedCards };

    case "ADD_CARD":
      const { card } = action.payload;
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ ...state, cards: [...state.cards, card] }));
      return { ...state, cards: [...state.cards, card] };

    case "ADD_SNIPPET": // New case to add a code snippet
      const { collectionIndex, snippet } = action.payload;
      const updatedSnippetCollections = [...state.snippetCollections];
      updatedSnippetCollections[collectionIndex].snippets.push(snippet);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ ...state, snippetCollections: updatedSnippetCollections }));
      return { ...state, snippetCollections: updatedSnippetCollections };

    case "ADD_SNIPPET_COLLECTION": // New case to add a new snippet collection with an example snippet
      const { collection } = action.payload;
      const updatedCollections = [...state.snippetCollections];
      updatedCollections.push(collection);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ ...state, snippetCollections: updatedCollections }));
      return { ...state, snippetCollections: updatedCollections };

    case "LOAD_DATA":
      // Update the state with the data loaded from localStorage
      return { ...action.payload };
    default:
      return state;
  }
}


export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    if (localStorage.getItem(LOCAL_STORAGE_KEY)) {
      // Load data from localStorage
      const savedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      dispatch({ type: "LOAD_DATA", payload: savedData });
    }
  }, []); // Run only once when the component mounts

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppState = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppState must be used within an AppProvider");
  }
  return context;
};
