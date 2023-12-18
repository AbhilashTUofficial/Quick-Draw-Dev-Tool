'use client'
import React, { useState } from 'react';
import BookmarkCollection from './BookmarkCollection';
import BookmarkCollectionModal from './BookmarkCollectionModal';

const BookmarkCollections = () => {
    console.log("BookmarkCollections: loaded");

    const openModalHanlder = (id: string) => {
        document.getElementById('my_modal_3').showModal()
    }

    const collections = [
        { id: '0', collectionName: "Collection 1" },
        { id: '1', collectionName: "Collection 1" },
        { id: '2', collectionName: "Collection 1" },
        { id: '3', collectionName: "Collection 1" },
        { id: '4', collectionName: "Collection 1" },
        { id: '5', collectionName: "Collection 1" },
        { id: '6', collectionName: "Collection 1" },
        { id: '7', collectionName: "Collection 1" },

    ]

    return (
        <>
            <div className=''>
                <div className='py-4 lg:w-[700px]  grid grid-cols-4 md:grid-cols-4 lg:grid-cols-5 sm:grid-flow-col-2  place-items-center'>
                    {
                        collections.map((collection) => {
                            return (<BookmarkCollection key={collection.id} onClick={(id: string) => openModalHanlder(id)} id={collection.id} />)
                        })
                    }
                    <BookmarkCollectionModal key={''} id={''} onClose={function (id: string | null): void {
                        throw new Error('Function not implemented.');
                    }} />

                </div>

            </div>
        </>
    );
}

export default BookmarkCollections;
