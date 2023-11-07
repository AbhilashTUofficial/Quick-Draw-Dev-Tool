import React, { createContext, useReducer, useContext } from "react";

// Define the initial state for checkboxes
const initialState = {
  checkbox1: false,
  checkbox2: false,
  checkbox3: false,
  checkbox4: false,
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
    {
      index: 1,
      title: "New bookmark",
      bookmarks: [
        {
          bookmarkIndex: 1,
          bookmarkName: "Google",
          bookmarkUrl: "www.google.com",
        },
        {
          bookmarkIndex: 2,
          bookmarkName: "Google",
          bookmarkUrl: "www.google.com",
        },
        {
          bookmarkIndex: 3,
          bookmarkName: "Google",
          bookmarkUrl: "www.google.com",
        },
        {
          bookmarkIndex: 4,
          bookmarkName: "Google",
          bookmarkUrl: "www.google.com",
        },
      ],
    },
  ],
};

const AppContext = createContext();

const appReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_CHECKBOX":
      return { ...state, [action.payload]: !state[action.payload] };
    case "ADD_BOOKMARK":
      const { cardIndex, bookmark } = action.payload;
      const updatedCards = [...state.cards];
      updatedCards[cardIndex].bookmarks.push(bookmark);
      return { ...state, cards: updatedCards };
    case "ADD_CARD":
      const { card } = action.payload;
      return { ...state, cards: [...state.cards, card] };
    default:
      return state;
  }
};
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

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
