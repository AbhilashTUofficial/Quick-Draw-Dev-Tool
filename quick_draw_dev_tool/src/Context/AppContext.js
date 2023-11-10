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
      title: "Example Card",
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

const LOCAL_STORAGE_KEY = "myAppData";

const AppContext = createContext();

var appReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_CHECKBOX":
      var { payload } = action;
      var updatedCheckboxState = !state[payload];

      // Update localStorage
      var updatedCheckboxStateObject = {
        ...state,
        [payload]: updatedCheckboxState,
      };
      localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify(updatedCheckboxStateObject)
      );

      return updatedCheckboxStateObject;

    case "ADD_CARD":
      var { card } = action.payload;

      // Update localStorage
      var updatedCardState = { ...state, cards: [...state.cards, card] };
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedCardState));

      return updatedCardState;

    case "DELETE_CARD":
      var { deleteCardIndex } = action.payload;

      var originalCards = [...state.cards];
      var updatedCards = [];

      for (var i = 0; i < originalCards.length; i++) {
        var currentCard = originalCards[i];
        // Check if the current card's index property matches deleteCardIndex
        if (currentCard.index === deleteCardIndex) {
          // Skip the current card (effectively deleting it)
          continue;
        }
        updatedCards.push(currentCard);
      }

      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ ...state, cards: updatedCards }));

      return { ...state, cards: updatedCards };

    case "ADD_BOOKMARK":
      var { cardIndex, bookmark } = action.payload;

      // Find the index of the card with the specified cardIndex
      var cardToUpdateIndex = state.cards.findIndex(
        (card) => card.index === cardIndex
      );

      // If the card with the specified index is found
      if (cardToUpdateIndex !== -1) {
        // Copy the state to avoid mutations
        var cards = [...state.cards];
        var updatedCard = { ...cards[cardToUpdateIndex] };

        // Update the bookmarks for the specific card
        updatedCard.bookmarks = [
          ...updatedCard.bookmarks,
          {
            bookmarkIndex: bookmark.bookmarkIndex,
            bookmarkName: bookmark.bookmarkName,
            bookmarkUrl: bookmark.bookmarkUrl,
          },
        ];

        // Update the cards array with the modified card
        cards[cardToUpdateIndex] = updatedCard;

        // Update localStorage
        var updatedStateWithAddBookmark = { ...state, cards };
        localStorage.setItem(
          LOCAL_STORAGE_KEY,
          JSON.stringify(updatedStateWithAddBookmark)
        );

        return updatedStateWithAddBookmark;
      }

      // If the card with the specified index is not found, return the current state
      return state;

    case "EDIT_BOOKMARK":
      var { cardIndex, bookmarkIndex, updatedBookmark } = action.payload;
    
      var cardToUpdateIndex = state.cards.findIndex(
        (card) => card.index === cardIndex
      );
    
      if (cardToUpdateIndex !== -1) {
        var cards = [...state.cards];
        var updatedCard = { ...cards[cardToUpdateIndex] };
    
        var bookmarkToUpdateIndex = updatedCard.bookmarks.findIndex(
          (bookmark) => bookmark.bookmarkIndex === bookmarkIndex
        );
    
        if (bookmarkToUpdateIndex !== -1) {
          updatedCard.bookmarks[bookmarkToUpdateIndex] = {
            bookmarkIndex: bookmarkIndex,
            bookmarkName: updatedBookmark.bookmarkName,
            bookmarkUrl: updatedBookmark.bookmarkUrl,
          };
    
          cards[cardToUpdateIndex] = updatedCard;
    
          var updatedStateWithEditBookmark = { ...state, cards };
          localStorage.setItem(
            LOCAL_STORAGE_KEY,
            JSON.stringify(updatedStateWithEditBookmark)
          );
    
          return updatedStateWithEditBookmark;
        }
      }
    
      return state;
      

    case "DELETE_BOOKMARK":
      var { deleteCardIndex,deleteBookmarkIndex } =
        action.payload;

      var cardToDeleteIndex = state.cards.findIndex(
        (card) => card.index === deleteCardIndex
      );

      if (cardToDeleteIndex !== -1) {
        var cardsToDelete = [...state.cards];
        var updatedCardToDelete = { ...cardsToDelete[cardToDeleteIndex] };

        updatedCardToDelete.bookmarks = updatedCardToDelete.bookmarks.filter(
          (bookmark) => bookmark.bookmarkIndex !== deleteBookmarkIndex
        );

        cardsToDelete[cardToDeleteIndex] = updatedCardToDelete;

        var updatedStateWithDeleteBookmark = { ...state, cards: cardsToDelete };
        localStorage.setItem(
          LOCAL_STORAGE_KEY,
          JSON.stringify(updatedStateWithDeleteBookmark)
        );

        return updatedStateWithDeleteBookmark;
      }

      return state;

    case "ADD_SNIPPET":
      var { collectionIndex, snippet } = action.payload;

      var collectionToUpdateIndex = state.snippetCollections.findIndex(
        (collection) => collection.index === collectionIndex
      );

      // If the card with the specified index is found
      if (collectionToUpdateIndex !== -1) {
        // Copy the state to avoid mutations
        var snippetCollections = [...state.snippetCollections];
        var updatedCollection = {
          ...snippetCollections[collectionToUpdateIndex],
        };

        // Update the bookmarks for the specific card
        updatedCollection.snippets = [
          ...updatedCollection.snippets,
          {
            snippetIndex: snippet.snippetIndex,
            snippet: snippet.snippet,
          },
        ];

        // Update the cards array with the modified card
        snippetCollections[collectionToUpdateIndex] = updatedCollection;

        var updatedStateWithAddSnippet = { ...state, snippetCollections };
        localStorage.setItem(
          LOCAL_STORAGE_KEY,
          JSON.stringify(updatedStateWithAddSnippet)
        );

        return updatedStateWithAddSnippet;
      }
      return state;

    case "DELETE_SNIPPET":
      var { deleteCollectionIndex, deleteSnippetIndex } = action.payload;

      console.log("deleteCollectionIndex: " + deleteCollectionIndex);
      var originalCollections = [...state.snippetCollections];
      var updatedSnippetCollections = [];

      for (var i = 0; i < originalCollections.length; i++) {
        var currentCollection = originalCollections[i];
        // Check if the current collection's index property matches deleteCollectionIndex
        if (currentCollection.index === deleteCollectionIndex) {
          var updatedCollection = { ...currentCollection };

          updatedCollection.snippets = updatedCollection.snippets.filter(
            (snippet) => snippet.snippetIndex !== deleteSnippetIndex
          );
          updatedSnippetCollections.push(updatedCollection);
        } else {
          updatedSnippetCollections.push(currentCollection);
        }
      }

      localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify({
          ...state,
          snippetCollections: updatedSnippetCollections,
        })
      );

      return { ...state, snippetCollections: updatedSnippetCollections };

      case "EDIT_SNIPPET":
        var { collectionIndex, snippetIndex, updatedSnippet } = action.payload;

        console.log("collectionIndex: "+collectionIndex+"snippetIndex: "+snippetIndex+"updatedSnippet: "+updatedSnippet)
        var collectionToUpdateIndex = state.snippetCollections.findIndex(
          (collection) => collection.index === collectionIndex
        );

        if (collectionToUpdateIndex !== -1) {
          var snippetCollections = [...state.snippetCollections];
          var updatedCollection = { ...snippetCollections[collectionToUpdateIndex] };

          var snippetToUpdateIndex = updatedCollection.snippets.findIndex(
            (snippet) => snippet.snippetIndex === snippetIndex
          );

          if (snippetToUpdateIndex !== -1) {
            updatedCollection.snippets[snippetToUpdateIndex] = {
              snippetIndex: snippetIndex,
              snippet: updatedSnippet.snippet,
            };

            snippetCollections[collectionToUpdateIndex] = updatedCollection;

            var updatedStateWithEditSnippet = { ...state, snippetCollections };
            localStorage.setItem(
              LOCAL_STORAGE_KEY,
              JSON.stringify(updatedStateWithEditSnippet)
            );

            return updatedStateWithEditSnippet;
          }
        }

        return state;

    case "ADD_SNIPPET_COLLECTION":
      var collectionToAdd = action.payload;
      var updatedCollections = [...state.snippetCollections];
      updatedCollections.push(collectionToAdd);

      // Update localStorage
      var updatedCollectionState = {
        ...state,
        snippetCollections: updatedCollections,
      };
      localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify(updatedCollectionState)
      );

      return updatedCollectionState;

    case "DELETE_SNIPPET_COLLECTION":
      var { deleteCollIndex: collIndexToDelete } = action.payload;

      // Create a copy of the snippetCollections array
      var massSnippetDelCollection = [...state.snippetCollections];

      // Find the index of the collection to delete
      var collectionIndexToDelete = massSnippetDelCollection.findIndex(
        (collection) => collection.index === collIndexToDelete
      );

      if (collectionIndexToDelete !== -1) {
        massSnippetDelCollection.splice(collectionIndexToDelete, 1);
      }

      localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify({
          ...state,
          snippetCollections: massSnippetDelCollection,
        })
      );

      return { ...state, snippetCollections: massSnippetDelCollection };

    case "EDIT_SNIPPET_COLLECTION":
        var { collectionIndex, updatedCollection } = action.payload;
      
        // Find the index of the collection with the specified collectionIndex
        var collectionToUpdateIndex = state.snippetCollections.findIndex(
          (collection) => collection.index === collectionIndex
        );
      
        // If the collection with the specified index is found
        if (collectionToUpdateIndex !== -1) {
          // Copy the state to avoid mutations
          var snippetCollections = [...state.snippetCollections];
          var updatedCollectionData = { ...snippetCollections[collectionToUpdateIndex] };
      
          // Update the collection data with the provided changes
          updatedCollectionData.title = updatedCollection.title; // Update the title or other properties as needed
      
          // Replace the existing collection with the modified collection
          snippetCollections[collectionToUpdateIndex] = updatedCollectionData;
      
          localStorage.setItem(
            LOCAL_STORAGE_KEY,
            JSON.stringify({ ...state, snippetCollections })
          );
      
          return { ...state, snippetCollections };
        }
      
        // If the collection with the specified index is not found, return the current state
        return state;
    
    case "DISTROY_DATA":
      localStorage.removeItem(LOCAL_STORAGE_KEY)
      return {...state};


    case "LOAD_DATA":
      // Update the state with the data loaded from localStorage
      return { ...action.payload };

    default:
      return state;
  }
};

export var AppProvider = ({ children }) => {
  var [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    if (localStorage.getItem(LOCAL_STORAGE_KEY)) {
      // Load data from localStorage
      var savedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      dispatch({ type: "LOAD_DATA", payload: savedData });
    }
  }, []); // Run only once when the component mounts

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export var useAppState = () => {
  var context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppState must be used within an AppProvider");
  }
  return context;
};
