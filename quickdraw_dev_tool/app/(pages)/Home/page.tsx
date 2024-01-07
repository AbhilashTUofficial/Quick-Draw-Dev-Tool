'use client'
import BookmarkColletions from '@/app/Components/Bookmark/BookmarkCollections';
import MenuBtn from '@/app/Components/NaviagationBar/MenuBtn';
import NavigationBar from '@/app/Components/NaviagationBar/NavigationBar'
import TitleBtn from '@/app/Components/NaviagationBar/TitleBtn';
import TrailingBtns from '@/app/Components/NaviagationBar/TrailingBtns';
import SnippetCollections from '@/app/Components/Snippet/SnippetCollections';
import React from 'react'
import { useSelector } from 'react-redux';
const Home = () => {
  console.log("Home: loaded");

  const data = useSelector((state: any) => state.app);
  return (
    <>
      <NavigationBar >    
        <MenuBtn />
        <TitleBtn />
        <TrailingBtns />
      </NavigationBar>
      <BookmarkColletions bookmarkCollections={data.bookmarkCollections} />
      <SnippetCollections />
    </>


  )
}

export default Home