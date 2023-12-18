import BookmarkColletions from '@/app/Components/Bookmark/BookmarkCollections';
import NavigationBar from '@/app/Components/NavigationBar'
import SnippetCollections from '@/app/Components/Snippet/SnippetCollections';
import React from 'react'
const Home = () => {
  console.log("Home: loaded");

  return (
    <>
    <body className=' flex flex-col items-center justify-center'>
    <NavigationBar />
    <BookmarkColletions/>
    <SnippetCollections/>
    </body>


    </>
  )
}

export default Home