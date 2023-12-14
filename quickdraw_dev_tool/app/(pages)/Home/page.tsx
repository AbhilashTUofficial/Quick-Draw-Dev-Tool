import BookmarkColletions from '@/app/Components/Bookmark/BookmarkCollections';
import NavigationBar from '@/app/Components/NavigationBar'
import React from 'react'
const Home = () => {
  console.log("Home: loaded");

  return (
    <>
    <body>
    <NavigationBar />
    <BookmarkColletions/>
    </body>


    </>
  )
}

export default Home