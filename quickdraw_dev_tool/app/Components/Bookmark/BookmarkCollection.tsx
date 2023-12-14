'use client'
import React, { useState } from 'react'
import BookmarkCollectionModal from './BookmarkCollectionModal';

type BookmarkColletionProps = {
    (arg0: { onClick: any; id: string }): React.JSX.Element;

}

const BookmarkCollection: BookmarkColletionProps = ({ onClick, id }) => {

    const [showModal, setShowModal]=useState(false);

    return (
        <>
            <div onClick={() =>setShowModal(true)} data-theme='dark' className='card bg-neutral shadow-lg text-neutral-content p-4 overflow-auto rounded-md w-[120px] aspect-square hover:w-[140px] transition-all hover:shadow-xl hover:shadow-indigo-500/20'>
                <figure><img className='w-80 h-80' src="next.svg" alt="Album" /></figure>

                <div className='text-center'>
                    <text>Collection</text>
                </div>

            </div>
            {showModal&&<BookmarkCollectionModal key={id} name={id} onClose={()=>setShowModal(false)}/>}

            
        </>
    )
}

export default BookmarkCollection