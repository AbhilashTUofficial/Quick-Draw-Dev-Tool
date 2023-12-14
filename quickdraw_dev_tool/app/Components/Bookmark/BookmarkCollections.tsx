'use client'
import React, { useState } from 'react';
import BookmarkCollection from './BookmarkCollection';
import BookmarkCollectionModal from './BookmarkCollectionModal';

const BookmarkCollections = () => {
    console.log("BookmarkCollections: loaded");
    const [showBookmarkCollectionModal, setShowBookmarkCollectionModal] =useState(false);

    const openModalHanlder=(id:string)=>{
        console.log("ID: "+id)
    }

    const collections=[
        {id:'0', collectionName:"Collection 1"},
        {id:'1', collectionName:"Collection 1"},
        {id:'2', collectionName:"Collection 1"},
        {id:'3', collectionName:"Collection 1"},
        {id:'4', collectionName:"Collection 1"},
        {id:'5', collectionName:"Collection 1"},
        {id:'6', collectionName:"Collection 1"},
        {id:'7', collectionName:"Collection 1"},

    ]
    
    return (
        <>
        <div className='flex justify-center '>
            <div className=' w-full sm:w-full md:w-[580px] lg:w-[700px] max-w-screen-md py-4 grid grid-cols-4 md:grid-cols-4 lg:grid-cols-5 sm:grid-flow-col-2 gap-y-6 place-items-center'>
                {
                    collections.map((collection)=>{
                        return(<BookmarkCollection onClick={(id:string)=>openModalHanlder(id)} id={collection.id}/>)
                    })
                }
            
            </div>
        </div>
        </>
    );
}

export default BookmarkCollections;
