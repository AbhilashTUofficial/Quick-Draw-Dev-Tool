'use client'
import React, { useState } from 'react';
import BookmarkCollection from './BookmarkCollection';
import BookmarkCollectionModal from './BookmarkCollectionModal';
import { BookmarkCollectionsType } from '@/app/Types/Components';
import { bookmarkCollectionsType } from '@/app/Types/Variables';

const BookmarkCollections: BookmarkCollectionsType = ({ bookmarkCollections }) => {
    console.log("BookmarkCollections: loaded");

    const openModalHanlder = (id: string) => {
        document.getElementById('my_modal_3').showModal();
    }
    const closeModalHandler = () => {
        // document.getElementById('my_modal_3')?.remove()
    }



    return (
        <div className='py-4 lg:w-[700px]  grid grid-cols-4 md:grid-cols-4 lg:grid-cols-5 sm:grid-flow-col-2  place-items-center'>
            {
                bookmarkCollections.map((collection: bookmarkCollectionsType) => {
                    console.log(collection.bookmarks);
                    const bookmarks=collection.bookmarks;

                    return (
                        <>
                            <BookmarkCollection
                                key={collection.bookmarksCollectionId}
                                onClick={(id: string) => openModalHanlder(id)} collection={{
                                    id: collection.bookmarksCollectionId,
                                    count: collection.bookmarks.length,
                                    title: collection.title
                                }} />
                            <BookmarkCollectionModal key={collection.bookmarksCollectionId} closeModal={() => closeModalHandler()} bookmarks={bookmarks} />
                        </>
                    )
                })
            }

        </div>

    );
}

export default BookmarkCollections;
