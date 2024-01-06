'use client'

import { BookmarkCollectionModalType } from '@/app/Types/Components'
import { bookmarkType } from '@/app/Types/Variables'
import React, { useEffect } from 'react'

const BookmarkCollectionModal:BookmarkCollectionModalType = ({closeModal,bookmarks}) => {


    return (
        <dialog id="my_modal_3" className="modal" onClick={() => closeModal()}>
            <div className="modal-box w-[600px] max-w-[600px] max-h-[600px]">

                <div className=' grid grid-cols-4 place-items-center'>
                    {
                        bookmarks.map((bookmark: bookmarkType) => {
                            return (
                                <div key={bookmark.bookmarkId} data-theme='dark' className='group w-[120px] h-[120px] aspect-square card border border-white border-opacity-40 p-4 m-2 hover:border-opacity-80 '>
                                    <figure><img className='w-80 h-80' src="next.svg" alt="Album" /></figure>
                                    <div className='text-center group-hover:text-white'>
                                        <text>{bookmark.title}</text>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            <form method="dialog" className='modal-backdrop'>
                <button>close</button>
            </form>
        </dialog>
    )
}

export default BookmarkCollectionModal