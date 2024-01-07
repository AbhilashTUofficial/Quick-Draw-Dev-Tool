'use client'
import React, { useState } from 'react';
import BookmarkCollection from './BookmarkCollection';
import BookmarkCollectionModal from './BookmarkCollectionModal';
import { BookmarkCollectionsType } from '@/app/Types/Components';
import { bookmarkCollectionsType } from '@/app/Types/Variables';

const BookmarkCollections: BookmarkCollectionsType = ({ bookmarkCollections }) => {

    const openModalHanlder = (id: string) => {
        // const modalElement=document.getElementById('my_modal_3');
        // modalElement&& modalElement.showModal();
        // if(document.getElementById('my_modal_3')){
        //     document.getElementById('my_modal_3').showModal();
        // }
    }
    const closeModalHandler = () => {
        // document.getElementById('my_modal_3')?.remove()
    }



    return (
        <div className='py-4 lg:w-[700px]  grid grid-cols-4 md:grid-cols-4 lg:grid-cols-5 sm:grid-flow-col-2  place-items-center'>
            {
                bookmarkCollections.map((collection: bookmarkCollectionsType,index:number) => {
                    const bookmarks=collection.bookmarks;
                    return (
                        <>
                            <BookmarkCollection
                                key={index}
                                onClick={(id: string) => openModalHanlder(id)} collection={{
                                    id: collection.bookmarksCollectionId,
                                    count: collection.bookmarks.length,
                                    title: collection.title
                                }} />
                            <BookmarkCollectionModal key={index} closeModal={() => closeModalHandler()} bookmarks={bookmarks} />
                        </>
                    )
                })
            }

        </div>

    );
}

export default BookmarkCollections;
