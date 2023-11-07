import React, { createContext, useReducer, useContext } from "react";

// Define the initial state for checkboxes
const initialState = {
  checkbox1: false,
  checkbox2: false,
  checkbox3: false,
  checkbox4: false,
};

const AppContext = createContext();

const appReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_CHECKBOX":
      return { ...state, [action.payload]: !state[action.payload] };
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
