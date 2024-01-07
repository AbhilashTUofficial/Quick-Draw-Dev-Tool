'use client'
import BookmarkColletions from '@/app/Components/Bookmark/BookmarkCollections';
import SnippetCollections from '@/app/Components/Snippet/SnippetCollections';
import React from 'react'
import { useSelector } from 'react-redux';
const Home = () => {
  console.log("Home: loaded");

  const data = useSelector((state: any) => state.app);
  return (
    <>
      <BookmarkColletions bookmarkCollections={data.bookmarkCollections} />
      <SnippetCollections />
    </>


  )
}

export default Home