'use client'
import BookmarkColletions from '@/app/Components/Bookmark/BookmarkCollections';
import SnippetCollections from '@/app/Components/Snippet/SnippetCollections';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
const Home = () => {
  console.log("Home: loaded");

  const data = useSelector((state: any) => state.app);
  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = event.clientX;
      const y = event.clientY;
      setMouseCoordinates({ x, y });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <>
      <div
        className="pointerShadow"
        style={{
          left: `${mouseCoordinates.x}px`,
          top: `${mouseCoordinates.y}px`
        }}
      />
      <BookmarkColletions bookmarkCollections={data.bookmarkCollections} />
      <SnippetCollections />
    </>


  )
}

export default Home