import { bookmarkCollectionsType, bookmarkType } from '@/app/Types/Variables';
import { createSlice } from '@reduxjs/toolkit';

const bookmarks1:bookmarkType[]=[
  { bookmarkId: 1, title: "Google", url: "https://www.google.com/", imgUrl: "" },
  { bookmarkId: 2, title: "Facebook", url: "https://www.google.com/", imgUrl: "" },
  { bookmarkId: 3, title: "Twitter", url: "https://www.google.com/", imgUrl: "" },
  { bookmarkId: 4, title: "ChatGpt", url: "https://www.google.com/", imgUrl: "" },
  { bookmarkId: 5, title: "Google", url: "https://www.google.com/", imgUrl: "" },
  { bookmarkId: 6, title: "Facebook", url: "https://www.google.com/", imgUrl: "" },
  { bookmarkId: 7, title: "Twitter", url: "https://www.google.com/", imgUrl: "" },
  { bookmarkId: 8, title: "ChatGpt", url: "https://www.google.com/", imgUrl: "" },
  { bookmarkId: 9, title: "Google", url: "https://www.google.com/", imgUrl: "" },
  { bookmarkId: 10, title: "Facebook", url: "https://www.google.com/", imgUrl: "" },
  { bookmarkId: 11, title: "Twitter", url: "https://www.google.com/", imgUrl: "" },
  { bookmarkId: 12, title: "ChatGpt", url: "https://www.google.com/", imgUrl: "" },
  { bookmarkId: 13, title: "Google", url: "https://www.google.com/", imgUrl: "" },
  { bookmarkId: 14, title: "Facebook", url: "https://www.google.com/", imgUrl: "" },
  { bookmarkId: 15, title: "Twitter", url: "https://www.google.com/", imgUrl: "" },
  { bookmarkId: 16, title: "ChatGpt", url: "https://www.google.com/", imgUrl: "" },
  { bookmarkId: 17, title: "ChatGpt", url: "https://www.google.com/", imgUrl: "" },
  { bookmarkId: 18, title: "ChatGpt", url: "https://www.google.com/", imgUrl: "" },
  { bookmarkId: 19, title: "ChatGpt", url: "https://www.google.com/", imgUrl: "" },
]
const bookmarks2:bookmarkType[]=[
  { bookmarkId: 1, title: "Google", url: "https://www.google.com/", imgUrl: "" },
  { bookmarkId: 2, title: "Facebook", url: "https://www.google.com/", imgUrl: "" },
  { bookmarkId: 3, title: "Twitter", url: "https://www.google.com/", imgUrl: "" },
  { bookmarkId: 4, title: "ChatGpt", url: "https://www.google.com/", imgUrl: "" },
]

const bookmarkCollections:bookmarkCollectionsType[]=[
  {bookmarksCollectionId:1,bookmarksImgUrl:"",title:"Socials",bookmarks:bookmarks1},
  {bookmarksCollectionId:2,bookmarksImgUrl:"",title:"Games",bookmarks:bookmarks2},
]



// Initial state for the reducer
const initialState = {
  bookmarkCollections:bookmarkCollections,
  
};

// Create a slice using createSlice
const appStateSlice = createSlice({
  name: 'appReducer', 
  initialState,      
  reducers: {
    // Define your actions as reducer functions here
    // Example: 
    // setProperty1: (state, action) => {
    //   state.property1 = action.payload;
    // },
  },
});

// Destructure and export the reducer and actions
export const {  } = appStateSlice.actions;

export default appStateSlice.reducer;

