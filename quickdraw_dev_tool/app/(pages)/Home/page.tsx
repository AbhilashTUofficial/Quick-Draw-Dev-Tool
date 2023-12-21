'use client'
import BookmarkColletions from '@/app/Components/Bookmark/BookmarkCollections';
import NavigationBar from '@/app/Components/NavigationBar'
import SnippetCollections from '@/app/Components/Snippet/SnippetCollections';
import React from 'react'
import { useSelector } from 'react-redux';
const Home = () => {
  console.log("Home: loaded");

  const data = useSelector(state => state.app);
  console.log("data: "+JSON.stringify(data))
    return (
    <>
    <NavigationBar />
    <BookmarkColletions bookmarkCollections={data.bookmarkCollections}/>
    <SnippetCollections/>
    </>


  )
}

export default Home